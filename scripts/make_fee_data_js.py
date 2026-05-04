"""
data/fee_data.json → data/fee_data.js に変換する。
ブラウザから <script src="data/fee_data.js"> で読み込める形式にする。

使い方:
  python3 scripts/make_fee_data_js.py
"""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INPUT = ROOT / "data" / "fee_data.json"
OUTPUT = ROOT / "data" / "fee_data.js"

def main():
    if not INPUT.exists():
        print(f"fee_data.json が見つかりません: {INPUT}")
        return

    data = json.loads(INPUT.read_text())

    # ブラウザ用に軽量化（rate と docID だけ保持）
    slim = {}
    for name, info in data.items():
        if isinstance(info, dict):
            slim[name] = {
                "rate": info.get("rate"),
                "docID": info.get("docID"),
            }

    total = len(slim)
    with_rate = sum(1 for v in slim.values() if v["rate"] is not None)

    js = f"""// EDINET から取得した信託報酬データ
// 生成日: {__import__('datetime').date.today().isoformat()}
// カバー率: {with_rate}/{total} 件
// 出典: EDINET（金融庁電子開示システム）有価証券届出書
// ライセンス: 公共データ利用規約 PDL1.0（CC BY 4.0互換）

const feeDatabase = {json.dumps(slim, ensure_ascii=False, indent=2)};
"""

    OUTPUT.write_text(js, encoding="utf-8")
    print(f"保存: {OUTPUT}")
    print(f"信託報酬取得: {with_rate}/{total} 件（{with_rate/total*100:.1f}%）")

    # 統計
    rates = [v["rate"] for v in slim.values() if v["rate"] is not None]
    if rates:
        print(f"最小: {min(rates):.4f}%  最大: {max(rates):.4f}%  平均: {sum(rates)/len(rates):.4f}%")

if __name__ == "__main__":
    main()
