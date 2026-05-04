"""1書類のCSVをダウンロードし、信託報酬らしき項目を探す"""
import os
import sys
import json
import zipfile
import io
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env"
CACHE = ROOT / "data" / "edinet_cache"
CACHE.mkdir(parents=True, exist_ok=True)


def load_env():
    for line in ENV_PATH.read_text().splitlines():
        if "=" in line and not line.startswith("#"):
            k, v = line.split("=", 1)
            os.environ[k.strip()] = v.strip()


def fetch_doc_list(date_str, key):
    url = "https://api.edinet-fsa.go.jp/api/v2/documents.json?" + urlencode({
        "date": date_str, "type": 2, "Subscription-Key": key
    })
    return json.loads(urlopen(url, timeout=30).read())


def download_doc(doc_id, doc_type, key):
    """doc_type: 1=PDF/XBRL, 5=CSV"""
    url = f"https://api.edinet-fsa.go.jp/api/v2/documents/{doc_id}?" + urlencode({
        "type": doc_type, "Subscription-Key": key
    })
    return urlopen(url, timeout=60).read()


def main():
    load_env()
    key = os.environ["EDINET_API_KEY"]
    data = fetch_doc_list("2026-05-01", key)
    # 投信届出書 (030)
    target = next(
        (r for r in data["results"]
         if r.get("docTypeCode") == "030" and r.get("ordinanceCode") == "030"
         and r.get("csvFlag") == "1"),
        None,
    )
    if not target:
        print("CSV対応の投信届出書がありません")
        return
    print(f"対象: {target['filerName']} / {target['docDescription']}")
    print(f"docID: {target['docID']}")
    raw = download_doc(target["docID"], 5, key)
    out = CACHE / f"{target['docID']}.zip"
    out.write_bytes(raw)
    print(f"保存: {out} ({len(raw)/1024:.1f} KB)")
    z = zipfile.ZipFile(io.BytesIO(raw))
    print("\n=== ZIP内ファイル ===")
    for n in z.namelist():
        print(f"  {n}")
    # CSVを開いて信託報酬らしき行を抽出
    print("\n=== 信託報酬らしき行 ===")
    keywords = ["信託報酬", "報酬", "管理会社", "運用会社", "受託会社", "実質的", "費用"]
    for n in z.namelist():
        if not n.endswith(".csv"):
            continue
        text = z.read(n).decode("utf-16")
        for line in text.splitlines():
            if any(k in line for k in keywords):
                cols = line.split("\t")
                if len(cols) >= 9:
                    print(f"  [{cols[1][:30]:30}] {cols[2][:50]:50} = {cols[8][:80]}")


if __name__ == "__main__":
    main()
