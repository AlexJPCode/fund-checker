"""
metadata_cache.json を過去2年分に拡張する（既存分を補完）。

使い方:
  python3 scripts/extend_metadata.py
"""

import os
import json
import time
from pathlib import Path
from datetime import date, timedelta
from urllib.request import urlopen, Request
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env"
META_CACHE = ROOT / "data" / "edinet_cache" / "metadata_cache.json"
META_CACHE_EXT = ROOT / "data" / "edinet_cache" / "metadata_cache_2yr.json"

RATE_LIMIT_SLEEP = 0.4


def load_env():
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ[k.strip()] = v.strip()


def fetch_meta(date_str, key):
    url = "https://api.edinet-fsa.go.jp/api/v2/documents.json?" + urlencode({
        "date": date_str, "type": 2, "Subscription-Key": key
    })
    try:
        time.sleep(RATE_LIMIT_SLEEP)
        req = Request(url, headers={"User-Agent": "fund-checker/1.0"})
        with urlopen(req, timeout=30) as r:
            data = json.loads(r.read())
            return data.get("results", [])
    except Exception as e:
        print(f"  error {date_str}: {e}")
        return []


def main():
    load_env()
    key = os.environ.get("EDINET_API_KEY", "").strip()

    # 既存キャッシュを読み込む
    existing = {}
    if META_CACHE.exists():
        for doc in json.loads(META_CACHE.read_text()):
            existing[doc["docID"]] = doc
    if META_CACHE_EXT.exists():
        for doc in json.loads(META_CACHE_EXT.read_text()):
            existing[doc["docID"]] = doc

    print(f"既存メタデータ: {len(existing)} 件")

    # 既存の最も古い日付を確認
    if existing:
        dates = [d.get("submitDateTime", "")[:10] for d in existing.values() if d.get("submitDateTime")]
        oldest = min(dates)
        print(f"既存最古: {oldest}")
    else:
        oldest = date.today().isoformat()

    # 2年前まで遡る
    target_start = date.today() - timedelta(days=730)
    oldest_date = date.fromisoformat(oldest)
    if oldest_date <= target_start:
        print("すでに2年分のデータがあります")
        return

    # oldest_date から target_start まで遡る
    days_to_fetch = (oldest_date - target_start).days
    print(f"追加取得: {target_start} 〜 {oldest_date - timedelta(days=1)} ({days_to_fetch}日)")

    new_docs = {}
    for i in range(days_to_fetch):
        d = oldest_date - timedelta(days=i + 1)
        if d < target_start:
            break
        ds = d.isoformat()
        results = fetch_meta(ds, key)
        trust_docs = [
            r for r in results
            if r.get("ordinanceCode") == "030"
            and r.get("docTypeCode") == "030"
            and r.get("csvFlag") == "1"
        ]
        for r in trust_docs:
            did = r["docID"]
            if did not in existing and did not in new_docs:
                new_docs[did] = r

        if (i + 1) % 30 == 0:
            print(f"  {i+1}/{days_to_fetch}日完了 ({len(new_docs)} 件追加)")

    # 保存
    all_docs = list(existing.values()) + list(new_docs.values())
    META_CACHE_EXT.write_text(json.dumps(all_docs, ensure_ascii=False, indent=2))
    print(f"\n完了: 追加={len(new_docs)} 件, 合計={len(all_docs)} 件")
    print(f"保存: {META_CACHE_EXT}")


if __name__ == "__main__":
    main()
