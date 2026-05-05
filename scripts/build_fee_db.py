"""
EDINET から信託報酬を取得して data/fee_data.json を生成する。

処理フロー:
  1. funds.js から353ファンドのリストを読み込む
  2. data/edinet_cache/metadata_cache.json（収集済み）から会社名でdocを絞り込む
  3. 各docのCSVをダウンロードし:
       - jpdei_cor:FundNameInJapaneseDEI でファンド名を取得
       - jpsps_cor:ManagementFeesAndChargesTextBlock から信託報酬率を抽出
  4. data/fee_data.json に保存

使い方:
  python3 scripts/build_fee_db.py
"""

import os
import re
import sys
import json
import time
import zipfile
import io
import unicodedata
from pathlib import Path
from datetime import date, timedelta
from urllib.request import urlopen, Request
from urllib.parse import urlencode
from urllib.error import HTTPError

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env"
CACHE_DIR = ROOT / "data" / "edinet_cache"
META_CACHE = CACHE_DIR / "metadata_cache_2yr.json"  # 2年分を使用
if not META_CACHE.exists():
    META_CACHE = CACHE_DIR / "metadata_cache.json"
OUTPUT = ROOT / "data" / "fee_data.json"

RATE_LIMIT_SLEEP = 0.4


def load_env():
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ[k.strip()] = v.strip()


def api_get(url, timeout=60):
    time.sleep(RATE_LIMIT_SLEEP)
    req = Request(url, headers={"User-Agent": "fund-checker/1.0"})
    with urlopen(req, timeout=timeout) as r:
        return r.read()


def download_csv_zip(doc_id, key):
    cached = CACHE_DIR / f"{doc_id}.zip"
    if cached.exists():
        return cached.read_bytes()
    url = f"https://api.edinet-fsa.go.jp/api/v2/documents/{doc_id}?" + urlencode({
        "type": 5, "Subscription-Key": key
    })
    try:
        raw = api_get(url, timeout=60)
        if len(raw) < 200:
            return None
        cached.write_bytes(raw)
        return raw
    except HTTPError as e:
        if e.code in (404, 400):
            return None
        raise
    except Exception as e:
        print(f"    download error {doc_id}: {e}")
        return None


# ---- 正規化 ----

def normalize_full(s: str) -> str:
    """全角→半角 + 記号・空白除去"""
    s = unicodedata.normalize("NFKC", s or "")
    s = s.lower()
    for c in " 　・-－()（）【】＜＞<>":
        s = s.replace(c, "")
    return s


def normalize_company(s: str) -> str:
    s = unicodedata.normalize("NFKC", s or "")
    s = s.lower().replace("株式会社", "").replace(" ", "").replace("　", "")
    return s


# ---- 信託報酬抽出 ----

FEE_PATTERNS = [
    r'年率[　\s]*(\d+\.?\d+)\s*[%％]',
    r'(\d+\.?\d+)\s*[%％][（(]税込[）)]',
    r'信託報酬[率]?[：:　\s]*(\d+\.?\d+)\s*[%％]',
    r'合計[　\s]*(\d+\.?\d+)\s*[%％]',
    r'(\d+\.?\d+)\s*[%％].*?以内',
]


def extract_fee_rate(text_block: str):
    for pat in FEE_PATTERNS:
        matches = re.findall(pat, text_block)
        for m in matches:
            v = float(m)
            if 0.0 < v < 5.0:
                return round(v, 4)
    return None


def parse_csv_zip(raw_bytes):
    """
    ZIPから (fund_name_ja, fee_rate) を抽出する。
    fund_name_ja: FundNameInJapaneseDEI の値（正規化前）
    fee_rate: float or None
    """
    try:
        z = zipfile.ZipFile(io.BytesIO(raw_bytes))
    except Exception:
        return None, None

    fund_name = None
    fee_rate = None

    for name in z.namelist():
        if not name.endswith(".csv"):
            continue
        try:
            text = z.read(name).decode("utf-16")
        except Exception:
            try:
                text = z.read(name).decode("utf-8", errors="replace")
            except Exception:
                continue

        for line in text.splitlines():
            cols = line.split("\t")
            if len(cols) < 9:
                continue
            field_id = cols[0].strip('"')

            if field_id == "jpdei_cor:FundNameInJapaneseDEI":
                v = cols[8].strip('"').strip()
                if v and v != "－":
                    fund_name = unicodedata.normalize("NFKC", v)

            if "ManagementFeesAndCharges" in field_id:
                r = extract_fee_rate(cols[8])
                if r is not None:
                    fee_rate = r

        # 1つのCSVで見つかれば終了
        if fund_name:
            break

    return fund_name, fee_rate


# ---- ファンドデータ読み込み ----

def load_funds():
    # つみたて投資枠
    js_path = ROOT / "data" / "funds.js"
    text = js_path.read_text(encoding="utf-8")
    m = re.search(r'const fundDatabase\s*=\s*(\[.*?\]);', text, re.DOTALL)
    if not m:
        sys.exit("funds.js から fundDatabase が読み取れません")
    tsumitate = json.loads(m.group(1))

    # 成長投資枠（重複除外）
    growth_path = ROOT / "data" / "growth_funds.js"
    growth = []
    if growth_path.exists():
        gt = growth_path.read_text(encoding="utf-8")
        gm = re.search(r'const growthFundDatabase\s*=\s*(\[.*?\]);', gt, re.DOTALL)
        if gm:
            tsu_names = {normalize_full(f["name"]) for f in tsumitate}
            for f in json.loads(gm.group(1)):
                if normalize_full(f["name"]) not in tsu_names:
                    growth.append(f)

    all_funds = tsumitate + growth
    print(f"  つみたて投資枠: {len(tsumitate)} 件")
    print(f"  成長投資枠（重複除く）: {len(growth)} 件")
    print(f"  合計: {len(all_funds)} 件")
    return all_funds


# ---- メイン ----

def main():
    load_env()
    key = os.environ.get("EDINET_API_KEY", "").strip()
    if not key:
        sys.exit("EDINET_API_KEY が .env にありません")

    if not META_CACHE.exists():
        sys.exit(f"メタデータキャッシュがありません: {META_CACHE}\n先に collect_metadata を実行してください")

    funds = load_funds()
    print(f"ファンド数: {len(funds)}")

    docs = json.loads(META_CACHE.read_text())
    print(f"EDINETメタデータ: {len(docs)} 件")

    # 既存の fee_data があれば読み込む（途中再開用）
    existing = {}
    if OUTPUT.exists():
        existing = json.loads(OUTPUT.read_text())
        print(f"既存 fee_data: {len(existing)} 件")

    # 会社名 → docs のマップ
    company_to_docs: dict[str, list] = {}
    for doc in docs:
        cn = normalize_company(doc.get("filerName", ""))
        company_to_docs.setdefault(cn, []).append(doc)

    # funds.js の会社名 → 正規化マップ
    fund_company_map: dict[str, str] = {}
    for f in funds:
        cn = normalize_company(f["company"])
        fund_company_map[cn] = f["company"]

    # ---- ファンド名 → fee_rate マップを会社単位でまとめて構築 ----
    # name_to_rate[fund_name_norm] = {"rate": float, "docID": str, ...}
    name_to_rate: dict[str, dict] = {}

    # 会社ごとに処理
    processed_docs = set()

    for fund_cn, orig_company in fund_company_map.items():
        # EDINET側の会社名を探す（部分一致）
        matched_keys = [
            k for k in company_to_docs
            if fund_cn[:10] in k or k[:10] in fund_cn
        ]
        candidate_docs = []
        for k in matched_keys:
            candidate_docs.extend(company_to_docs[k])

        if not candidate_docs:
            print(f"  [WARN] EDINET docs なし: {orig_company}")
            continue

        # 最新のdocから順に処理（同じ会社の複数fund）
        new_docs = [d for d in candidate_docs if d["docID"] not in processed_docs]
        print(f"\n{orig_company[:35]} → {len(candidate_docs)} docs ({len(new_docs)} 未処理)")

        for doc in new_docs:
            doc_id = doc["docID"]
            processed_docs.add(doc_id)

            raw = download_csv_zip(doc_id, key)
            if raw is None:
                continue

            fund_name_ja, fee_rate = parse_csv_zip(raw)
            if fund_name_ja:
                fn = normalize_full(fund_name_ja)
                if fn not in name_to_rate:
                    name_to_rate[fn] = {
                        "original_edinet_name": fund_name_ja,
                        "rate": fee_rate,
                        "docID": doc_id,
                        "filerName": doc.get("filerName", ""),
                        "submitDate": (doc.get("submitDateTime", "") or "")[:10],
                    }

    print(f"\nEDINETから取得したファンド名: {len(name_to_rate)} 件")

    # ---- funds.js の353ファンドと name_to_rate をマッチング ----
    fee_data = dict(existing)
    matched = 0
    unmatched = []

    for fund in funds:
        name = fund["name"]
        if name in fee_data and fee_data[name].get("rate") is not None:
            matched += 1
            continue

        fn = normalize_full(name)

        # 完全一致
        if fn in name_to_rate:
            fee_data[name] = name_to_rate[fn]
            matched += 1
            continue

        # 部分一致（ファンド名の80%以上がEDINET名に含まれる or その逆）
        best = None
        best_score = 0
        for en, info in name_to_rate.items():
            # 最低8文字以上で判定
            overlap = len(fn)
            if len(fn) >= 8 and fn in en:
                score = len(fn)
            elif len(en) >= 8 and en in fn:
                score = len(en)
            else:
                # 先頭N文字一致
                common = 0
                for a, b in zip(fn, en):
                    if a == b:
                        common += 1
                    else:
                        break
                score = common if common >= 8 else 0

            if score > best_score:
                best_score = score
                best = (en, info)

        if best and best_score >= 8:
            fee_data[name] = best[1]
            matched += 1
        else:
            unmatched.append(name)

    OUTPUT.write_text(json.dumps(fee_data, ensure_ascii=False, indent=2))
    print(f"\n=== 完了 ===")
    print(f"マッチ: {matched}/{len(funds)}")
    print(f"未マッチ: {len(unmatched)}")
    if unmatched[:10]:
        print("未マッチ例（先頭10件）:")
        for n in unmatched[:10]:
            print(f"  {n}")
    print(f"保存: {OUTPUT}")

    # 統計
    rates = [v["rate"] for v in fee_data.values() if v.get("rate") is not None]
    print(f"\n信託報酬取得: {len(rates)}/{len(funds)} 件")
    if rates:
        print(f"  最小: {min(rates):.4f}%  最大: {max(rates):.4f}%  平均: {sum(rates)/len(rates):.4f}%")


if __name__ == "__main__":
    main()
