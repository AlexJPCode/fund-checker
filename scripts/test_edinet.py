"""EDINET API 動作確認スクリプト
.env から APIキーを読み込み、書類一覧APIを叩いて投資信託の届出書がいくつあるか確認する。
"""
import os
import sys
import json
from pathlib import Path
from datetime import date, timedelta
from urllib.request import urlopen
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = ROOT / ".env"


def load_env():
    if not ENV_PATH.exists():
        sys.exit(f".env が見つかりません: {ENV_PATH}")
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ[k.strip()] = v.strip()


def fetch_documents(target_date: str, api_key: str):
    base = "https://api.edinet-fsa.go.jp/api/v2/documents.json"
    qs = urlencode({
        "date": target_date,
        "type": 2,
        "Subscription-Key": api_key,
    })
    url = f"{base}?{qs}"
    with urlopen(url, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main():
    load_env()
    api_key = os.environ.get("EDINET_API_KEY", "").strip()
    if not api_key:
        sys.exit("EDINET_API_KEY が .env に設定されていません")
    print(f"APIキー読み込みOK（先頭8文字: {api_key[:8]}...）")

    # 直近の平日を試す（土日は届出が少ないので、過去5営業日を試す）
    today = date.today()
    for back in range(1, 8):
        d = today - timedelta(days=back)
        ds = d.isoformat()
        print(f"\n書類一覧を取得中: {ds}")
        try:
            data = fetch_documents(ds, api_key)
        except Exception as e:
            print(f"  エラー: {e}")
            continue

        status = data.get("metadata", {}).get("status")
        count = data.get("metadata", {}).get("resultset", {}).get("count", 0)
        print(f"  status={status}, 全書類件数={count}")

        if not data.get("results"):
            continue

        # 投資信託関連の書類タイプコードを抽出
        # 120: 有価証券届出書（内国投資信託受益証券など）
        # 030: 有価証券届出書
        # 訂正届出書、運用報告書など色々ある
        trust_docs = [
            r for r in data["results"]
            if r.get("docTypeCode") in ("120", "030", "010", "180")
            and r.get("ordinanceCode") == "030"  # 投資信託及び投資法人に関する内閣府令
        ]
        print(f"  投資信託関連書類: {len(trust_docs)} 件")
        for r in trust_docs[:5]:
            print(f"    - [{r.get('docTypeCode')}] {r.get('filerName')}: {r.get('docDescription')}")

        if trust_docs:
            print("\n動作確認OK。APIキーは正常に動作しています。")
            return

    print("\n直近1週間に投資信託関連書類が見つかりませんでした（APIキー自体は通っている可能性あり）")


if __name__ == "__main__":
    main()
