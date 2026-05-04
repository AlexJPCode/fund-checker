"""
ダウンロード済みのZIPキャッシュから全ファンドの信託報酬を抽出してマッチングする。
funds.js の353ファンドとEDINET名を照合し data/fee_data.json に保存する。

使い方:
  python3 scripts/match_from_cache.py
"""

import re
import json
import zipfile
import io
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE_DIR = ROOT / "data" / "edinet_cache"
OUTPUT = ROOT / "data" / "fee_data.json"

def extract_fee_rate(text_block: str):
    """
    信託報酬年率（税込）を抽出する。

    優先順位:
    1. 「現在は、年率X%」= 最も具体的な現在値
    2. 「純資産総額に年X%（税抜/税込）」= 野村・SMBCなどの標準表現
    3. 「年率X%（税抜/税込）」= 明示的な税込/税抜表記付き
    4. 委託会社＋販売会社＋受託会社の内訳税抜合計 × 1.1
    5. 「合計 X%（税込）」
    6. 「X%（税込）」
    7. 「年率X%」上限値でないもの
    """
    text = text_block.strip('"').replace("　", " ")

    # 1a. 現在の実値（%表記）
    m = re.search(r'現在[はは]?[、,\s]*年率\s*(\d+\.?\d+)\s*[%％]', text)
    if m:
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 1b. 現在の実値（10,000分の表記）例: 「現在は、年率10,000分の13.2」
    m = re.search(r'現在[はは]?[、,\s]*年率\s*(?:10[,，]?000分の|万分の)\s*(\d+\.?\d+)', text)
    if m:
        v = float(m.group(1)) / 100
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 1c. 「年率10,000分のX（税抜10,000分のY）」形式（ETF等）
    m = re.search(r'年率\s*(?:10[,，]?000分の|万分の)\s*(\d+\.?\d+)\s*[（(]税抜', text)
    if m:
        v = float(m.group(1)) / 100
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 2. 「純資産総額に年X%（税抜年Y%）」- 野村つみたて等の形式
    #    税込が先に来る: 「年0.209％（税抜年0.19％）」
    m = re.search(r'純資産総額に年\s*(\d+\.?\d+)\s*[%％]', text)
    if m:
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 3a. 「年率X%（税込）」
    for m in re.finditer(r'年率\s*(\d+\.?\d+)\s*[%％][（(]税込[）)]', text):
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 3b. 「年X%（税抜年Y%）」- 税込Xを取得
    m = re.search(r'年\s*(\d+\.?\d+)\s*[%％]\s*[（(]税抜', text)
    if m:
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 3c. 「年率X%（税抜Y%）」- 税込Xを取得
    m = re.search(r'年率\s*(\d+\.?\d+)\s*[%％]\s*[（(]税抜', text)
    if m:
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 3d. 「X%（税抜Y%）」形式: 税込Xが直前、税抜Yが括弧内 (ひふみ等)
    # パターン: 数値%（数値% の形で税込→税抜の順に並ぶ
    m = re.search(r'(\d+\.\d{2,4})\s*[%％]\s*[（(]\s*\d+\.\d+\s*[%％][）)]', text)
    if m:
        v = float(m.group(1))
        if 0.3 < v < 3.0:
            return round(v, 4)

    # 4. 内訳の税抜合計 (委託会社 + 販売会社 + 受託会社)
    breakdown_rates = re.findall(
        r'(?:委託会社|販売会社|受託会社|委 託 会 社|販 売 会 社|受 託 会 社)[^\d]{0,15}(\d+\.?\d+)\s*[%％]',
        text
    )
    if len(breakdown_rates) >= 2:
        total_taxex = sum(float(r) for r in breakdown_rates if float(r) < 3.0)
        if 0.0 < total_taxex < 3.0:
            return round(total_taxex * 1.1, 4)

    # 5. 合計X%（税込）
    m = re.search(r'合計\s*(\d+\.?\d+)\s*[%％][^超以]*(?:税込|込み)', text)
    if m:
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 6. X%（税込）
    for m in re.finditer(r'(\d+\.?\d+)\s*[%％][（(]税込[）)]', text):
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    # 7. フォールバック：「年率X%」上限値を除く
    for m in re.finditer(r'年率\s*(\d+\.?\d+)\s*[%％]', text):
        after = text[m.end():m.end()+12]
        if re.search(r'超えな|以[下内]|未満', after):
            continue
        v = float(m.group(1))
        if 0.0 < v < 3.0:
            return round(v, 4)

    return None


def normalize(s: str) -> str:
    s = unicodedata.normalize("NFKC", s or "")
    s = s.lower()
    for c in " 　・-－()（）【】＜＞<>&":
        s = s.replace(c, "")
    return s


def parse_zip(path: Path):
    """
    Returns list of (fund_name_normalized, fund_name_original, fee_rate, doc_id)
    1つのZIPに複数ファンドが含まれることがある（「、」区切り）
    """
    doc_id = path.stem
    results = []
    try:
        raw = path.read_bytes()
        z = zipfile.ZipFile(io.BytesIO(raw))
    except Exception:
        return results

    fund_name_raw = None
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
            fid = cols[0].strip('"')

            if fid == "jpdei_cor:FundNameInJapaneseDEI":
                v = cols[8].strip('"').strip()
                if v and v not in ("－", "-"):
                    fund_name_raw = unicodedata.normalize("NFKC", v)

            if "ManagementFeesAndCharges" in fid and fee_rate is None:
                fee_rate = extract_fee_rate(cols[8])

        if fund_name_raw:
            break

    if not fund_name_raw:
        return results

    # 複数ファンドが「、」区切りで入っている場合は全部展開
    separators = ["、", "，", "／"]
    parts = [fund_name_raw]
    for sep in separators:
        new_parts = []
        for p in parts:
            new_parts.extend(p.split(sep))
        parts = new_parts

    for p in parts:
        p = p.strip()
        if len(p) >= 4:
            results.append((normalize(p), p, fee_rate, doc_id))

    return results


def load_funds():
    text = (ROOT / "data" / "funds.js").read_text(encoding="utf-8")
    m = re.search(r"const fundDatabase\s*=\s*(\[.*?\]);", text, re.DOTALL)
    return json.loads(m.group(1))


def main():
    funds = load_funds()
    print(f"ファンド数: {len(funds)}")

    zips = list(CACHE_DIR.glob("*.zip"))
    print(f"ZIPキャッシュ: {len(zips)} 件")

    # ZIPを全部パースして EDINET名→rate の辞書を作る
    edinet_map: dict[str, dict] = {}  # normalized_name → info
    for i, zp in enumerate(zips):
        for fn_norm, fn_orig, rate, doc_id in parse_zip(zp):
            if fn_norm not in edinet_map:
                edinet_map[fn_norm] = {
                    "original": fn_orig,
                    "rate": rate,
                    "docID": doc_id,
                }
            elif rate is not None and edinet_map[fn_norm]["rate"] is None:
                edinet_map[fn_norm]["rate"] = rate

        if (i + 1) % 200 == 0:
            print(f"  {i+1}/{len(zips)} ZIPs parsed, {len(edinet_map)} unique fund names")

    print(f"EDINET fund names: {len(edinet_map)} 件")

    # funds.js × edinet_map のマッチング
    fee_data = {}
    matched_exact = 0
    matched_partial = 0
    unmatched = []

    for fund in funds:
        name = fund["name"]
        fn = normalize(name)

        # 1. 完全一致
        if fn in edinet_map:
            fee_data[name] = {"rate": edinet_map[fn]["rate"], "docID": edinet_map[fn]["docID"]}
            matched_exact += 1
            continue

        # 2. 部分一致（FSA名の正規化がEDINET名に含まれる、または逆）
        best_key = None
        best_score = 0
        for ek, einfo in edinet_map.items():
            if len(fn) >= 8 and fn in ek:
                score = len(fn)
            elif len(ek) >= 8 and ek in fn:
                score = len(ek)
            else:
                # 先頭一致スコア
                c = sum(1 for a, b in zip(fn, ek) if a == b)
                score = c if c >= 10 else 0
            if score > best_score:
                best_score = score
                best_key = ek

        if best_key and best_score >= 8:
            fee_data[name] = {
                "rate": edinet_map[best_key]["rate"],
                "docID": edinet_map[best_key]["docID"],
                "match_type": "partial",
            }
            matched_partial += 1
        else:
            unmatched.append(name)

    OUTPUT.write_text(json.dumps(fee_data, ensure_ascii=False, indent=2))

    rates_found = [v["rate"] for v in fee_data.values() if v.get("rate") is not None]
    print(f"\n=== マッチング結果 ===")
    print(f"完全一致: {matched_exact}")
    print(f"部分一致: {matched_partial}")
    print(f"未マッチ: {len(unmatched)}")
    print(f"信託報酬値取得: {len(rates_found)}/{len(funds)} 件")
    if rates_found:
        print(f"  min={min(rates_found):.4f}%  max={max(rates_found):.4f}%  avg={sum(rates_found)/len(rates_found):.4f}%")
    print(f"\n未マッチ例（先頭10件）:")
    for n in unmatched[:10]:
        print(f"  {n}")
    print(f"\n保存: {OUTPUT}")


if __name__ == "__main__":
    main()
