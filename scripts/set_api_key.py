"""APIキーを安全に .env に保存する"""
import getpass
from pathlib import Path

key = getpass.getpass("EDINETのAPIキーを貼り付けてEnter: ")
if not key.strip():
    print("キーが入力されませんでした")
else:
    Path(__file__).parent.parent.joinpath(".env").write_text(f"EDINET_API_KEY={key.strip()}\n")
    print("保存しました！")
