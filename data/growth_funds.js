// 成長投資枠対象商品リスト（非上場ファンド）
// 出典: 資産運用業協会「NISA成長投資枠の対象商品」
// URL: https://www.imaj.or.jp/find/nisa_growth_productslist/
// 取得日: 2026-05-04
// ライセンス: 公共データ（各社届出に基づく協会公表情報）

const growthFundDatabase = [
  {
    "name": "auスマート・ベーシック(安定)",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY311189",
    "frame": "growth"
  },
  {
    "name": "auスマート・ベーシック(安定成長)",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY312189",
    "frame": "growth"
  },
  {
    "name": "BNPパリバ・ブラジル・ファンド(株式型)",
    "company": "BNPパリバ・アセットマネジメント株式会社",
    "fundCode": "4431207B",
    "frame": "growth"
  },
  {
    "name": "BNPパリバ・ブラジル・ファンド(バランス型)",
    "company": "BNPパリバ・アセットマネジメント株式会社",
    "fundCode": "4431307B",
    "frame": "growth"
  },
  {
    "name": "JPMアジア株・アクティブ・オープン",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "1731798B",
    "frame": "growth"
  },
  {
    "name": "JPMグローバル・CB・オープン’95",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311951",
    "frame": "growth"
  },
  {
    "name": "JPMザ・ジャパン",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "1731199C",
    "frame": "growth"
  },
  {
    "name": "JPMザ・ジャパン(年4回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "1731117A",
    "frame": "growth"
  },
  {
    "name": "JPMジャパンマイスター",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311137",
    "frame": "growth"
  },
  {
    "name": "JPM北米高配当・成長株ファンド(為替ヘッジなし、3ヵ月決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311134",
    "frame": "growth"
  },
  {
    "name": "JPM北米高配当・成長株ファンド(為替ヘッジなし、年2回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17313134",
    "frame": "growth"
  },
  {
    "name": "JPM北米高配当・成長株ファンド(米ドル対円ヘッジあり、3ヵ月決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17312134",
    "frame": "growth"
  },
  {
    "name": "JPM北米高配当・成長株ファンド(米ドル対円ヘッジあり、年2回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17314134",
    "frame": "growth"
  },
  {
    "name": "JPMワールド・CB・オープン",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311019",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・アメリカ成長株ファンド(為替ヘッジあり、年1回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17313211",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・アメリカ成長株ファンド(為替ヘッジなし、年1回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311211",
    "frame": "growth"
  },
  {
    "name": "EXE-i 新興国株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312135",
    "frame": "growth"
  },
  {
    "name": "EXE-i 先進国株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311135",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・ゴールドファンド(為替ヘッジあり)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89319236",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・ゴールドファンド(為替ヘッジなし)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931A236",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国総合債券インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89316236",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国短期国債ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931B236",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国投資適格社債(1-5年)インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89317236",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国ハイイールド債券インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89318236",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国バランス(2資産均等型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311223",
    "frame": "growth"
  },
  {
    "name": "SBI・V・S&P500インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311199",
    "frame": "growth"
  },
  {
    "name": "SBI・V・新興国株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89315236",
    "frame": "growth"
  },
  {
    "name": "SBI・V・世界小型株式(除く米国)インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89313236",
    "frame": "growth"
  },
  {
    "name": "SBI・V・先進国株式(除く米国)インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312236",
    "frame": "growth"
  },
  {
    "name": "SBI・V・全世界株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311221",
    "frame": "growth"
  },
  {
    "name": "SBI・V・全米株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311216",
    "frame": "growth"
  },
  {
    "name": "SBI・V・米国高配当株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312216",
    "frame": "growth"
  },
  {
    "name": "SBI・V・米国小型株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89314236",
    "frame": "growth"
  },
  {
    "name": "SBI・V・米国増配株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311236",
    "frame": "growth"
  },
  {
    "name": "SBI・新興国株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931117C",
    "frame": "growth"
  },
  {
    "name": "SBI・先進国株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311181",
    "frame": "growth"
  },
  {
    "name": "SBI・全世界株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931217C",
    "frame": "growth"
  },
  {
    "name": "SBI・中国A株インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311217",
    "frame": "growth"
  },
  {
    "name": "TORANOTECアクティブジャパン",
    "company": "TORANOTEC投信投資顧問株式会社",
    "fundCode": "91311179",
    "frame": "growth"
  },
  {
    "name": "トラノコ・ファンド I",
    "company": "TORANOTEC投信投資顧問株式会社",
    "fundCode": "91311174",
    "frame": "growth"
  },
  {
    "name": "トラノコ・ファンド II",
    "company": "TORANOTEC投信投資顧問株式会社",
    "fundCode": "91312174",
    "frame": "growth"
  },
  {
    "name": "トラノコ・ファンド III",
    "company": "TORANOTEC投信投資顧問株式会社",
    "fundCode": "91313174",
    "frame": "growth"
  },
  {
    "name": "UBS MSCI先進国ESG株式インデックス・ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311191",
    "frame": "growth"
  },
  {
    "name": "UBS気候変動関連グローバル成長株式ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311078",
    "frame": "growth"
  },
  {
    "name": "UBS気候変動関連グローバル成長株式ファンド(年4回決算・予想分配金提示型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311215",
    "frame": "growth"
  },
  {
    "name": "UBSグローバルDX株式ファンド(資産成長型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "5031220A",
    "frame": "growth"
  },
  {
    "name": "UBSサステナブル向上・コアバリュー株式ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "5031222A",
    "frame": "growth"
  },
  {
    "name": "UBS次世代テクノロジー・ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "5031109A",
    "frame": "growth"
  },
  {
    "name": "UBS中国A株ファンド(年1回決算型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311099",
    "frame": "growth"
  },
  {
    "name": "UBS中国A株ファンド(年4回決算型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "5031118A",
    "frame": "growth"
  },
  {
    "name": "UBS中国株式ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311075",
    "frame": "growth"
  },
  {
    "name": "UBS中国新時代株式ファンド(年1回決算型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50312182",
    "frame": "growth"
  },
  {
    "name": "UBS中国新時代株式ファンド(年2回決算型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311182",
    "frame": "growth"
  },
  {
    "name": "ALAMCO ETFバランスファンド 安定型(投資一任専用)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68315233",
    "frame": "growth"
  },
  {
    "name": "ALAMCO ETFバランスファンド 積極型(投資一任専用)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311233",
    "frame": "growth"
  },
  {
    "name": "ALAMCO ETFバランスファンド 中立型(投資一任専用)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68313233",
    "frame": "growth"
  },
  {
    "name": "ALAMCO ETFバランスファンド やや安定型(投資一任専用)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68314233",
    "frame": "growth"
  },
  {
    "name": "ALAMCO ETFバランスファンド やや積極型(投資一任専用)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68312233",
    "frame": "growth"
  },
  {
    "name": "WCM 世界成長株厳選ファンド(資産成長型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "6831121A",
    "frame": "growth"
  },
  {
    "name": "朝日Nvest グローバル バリュー株オープン",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311003",
    "frame": "growth"
  },
  {
    "name": "朝日Nvest グローバル バリュー株オープン(資産成長型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311216",
    "frame": "growth"
  },
  {
    "name": "朝日Nvest グローバル バリュー株オープン(年4回決算型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "6831115C",
    "frame": "growth"
  },
  {
    "name": "朝日Nvest グローバル ボンドオープン",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311002",
    "frame": "growth"
  },
  {
    "name": "朝日ライフ SRI 社会貢献ファンド",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311009",
    "frame": "growth"
  },
  {
    "name": "朝日ライフ クオンツ 日本株オープン",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311997",
    "frame": "growth"
  },
  {
    "name": "朝日ライフ 日経平均ファンド",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "6831100B",
    "frame": "growth"
  },
  {
    "name": "朝日ライフ リサーチ 日本株オープン",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "6831199B",
    "frame": "growth"
  },
  {
    "name": "朝日ライフ・MSCI・グローイング・アセアン株式ファンド",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311133",
    "frame": "growth"
  },
  {
    "name": "ハリス世界株ファンド(資産成長型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311186",
    "frame": "growth"
  },
  {
    "name": "ミローバ グローバル・サステナブル株式ファンド",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "6831120C",
    "frame": "growth"
  },
  {
    "name": "AI(人工知能)活用型世界株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312179",
    "frame": "growth"
  },
  {
    "name": "DIAM外国株式パッシブ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314091",
    "frame": "growth"
  },
  {
    "name": "DIAM外国債券パッシブ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315091",
    "frame": "growth"
  },
  {
    "name": "DIAM国内株式パッシブ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311091",
    "frame": "growth"
  },
  {
    "name": "DIAM国内債券パッシブ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312091",
    "frame": "growth"
  },
  {
    "name": "DIAMコモディティパッシブ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313091",
    "frame": "growth"
  },
  {
    "name": "DL日本株式オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731398C",
    "frame": "growth"
  },
  {
    "name": "MHAM TOPIXオープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731198A",
    "frame": "growth"
  },
  {
    "name": "MHAM株式インデックスファンド225",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731285A",
    "frame": "growth"
  },
  {
    "name": "MHAM株式オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311769",
    "frame": "growth"
  },
  {
    "name": "MHAM新興成長株オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312002",
    "frame": "growth"
  },
  {
    "name": "MHAM日本成長株オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731399A",
    "frame": "growth"
  },
  {
    "name": "MHAM物価連動国債ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311046",
    "frame": "growth"
  },
  {
    "name": "One NYダウ・インデックス・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314195",
    "frame": "growth"
  },
  {
    "name": "Oneグローバル最適化バランス(安定型)<ラップ向け>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314233",
    "frame": "growth"
  },
  {
    "name": "Oneグローバル最適化バランス(成長型)<ラップ向け>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315233",
    "frame": "growth"
  },
  {
    "name": "Oneグローバル中小型長期成長株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312208",
    "frame": "growth"
  },
  {
    "name": "Oneグローバルバランス",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312219",
    "frame": "growth"
  },
  {
    "name": "One国内株オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311008",
    "frame": "growth"
  },
  {
    "name": "One国内株オープン(年2回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313192",
    "frame": "growth"
  },
  {
    "name": "Oneニッポン債券オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311167",
    "frame": "growth"
  },
  {
    "name": "インデックス マネジメント ファンド 225",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311863",
    "frame": "growth"
  },
  {
    "name": "海外消費関連日本株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314135",
    "frame": "growth"
  },
  {
    "name": "企業価値成長小型株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313162",
    "frame": "growth"
  },
  {
    "name": "きらぼし・みらい応援株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311187",
    "frame": "growth"
  },
  {
    "name": "グローバル・ボンド・ポート(Cコース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731198C",
    "frame": "growth"
  },
  {
    "name": "厳選ジャパン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313179",
    "frame": "growth"
  },
  {
    "name": "コア資産形成ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47317154",
    "frame": "growth"
  },
  {
    "name": "新興企業日本株ファンド(資産成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313185",
    "frame": "growth"
  },
  {
    "name": "世界eコマース関連株式オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311179",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード NYダウ",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47319173",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード S&P500",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318233",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード TOPIX",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47317173",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 国内債券",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731915C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 国内リート",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731A15C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 最適化バランス(安定型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314181",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 最適化バランス(安定成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315181",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 最適化バランス(成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316181",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 最適化バランス(積極型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47317181",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 最適化バランス(保守型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313181",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 新興国株式",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311163",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国株式",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731B15C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国株式<為替ヘッジあり>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731116A",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国債券",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731C15C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国債券<為替ヘッジあり>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731216A",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国リート",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731D15C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国リート<為替ヘッジあり>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318173",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 全世界株式",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312197",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 日経225",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731815C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード バランス(8資産均等型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313177",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード バランス(堅実型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731317B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード バランス(積極型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731517B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード バランス(標準型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731417B",
    "frame": "growth"
  },
  {
    "name": "ドルマネーファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313986",
    "frame": "growth"
  },
  {
    "name": "日経225ノーロードオープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311988",
    "frame": "growth"
  },
  {
    "name": "日本債券ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316102",
    "frame": "growth"
  },
  {
    "name": "日本3資産ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731A154",
    "frame": "growth"
  },
  {
    "name": "日本厳選中小型株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731216C",
    "frame": "growth"
  },
  {
    "name": "ファンド“メガ・テック”",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731499C",
    "frame": "growth"
  },
  {
    "name": "米国インフラ関連株式ファンド<為替ヘッジあり>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311172",
    "frame": "growth"
  },
  {
    "name": "米国インフラ関連株式ファンド<為替ヘッジなし>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312172",
    "frame": "growth"
  },
  {
    "name": "マネックス資産設計ファンド エボリューション",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311105",
    "frame": "growth"
  },
  {
    "name": "マネックス資産設計ファンド<育成型>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312071",
    "frame": "growth"
  },
  {
    "name": "マネックス資産設計ファンド<隔月分配型>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311071",
    "frame": "growth"
  },
  {
    "name": "みずほ J-REIT ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47317138",
    "frame": "growth"
  },
  {
    "name": "未来変革日本株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311161",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・グローバル・グロース・オポチュニティーズ(年2回決算型)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311987",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・新興国成長株投信Aコ-ス(為替ヘッジあり)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311058",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・新興国成長株投信Bコース(為替ヘッジなし)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39312058",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・米国成長株投信Aコース(為替ヘッジあり)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311065",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・米国成長株投信Bコース(為替ヘッジなし)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39312065",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・米国割安株投信(隔月決算・予想分配金提示型)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39312236",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・米国割安株投信(年2回決算型)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311236",
    "frame": "growth"
  },
  {
    "name": "ありがとうファンド",
    "company": "ありがとう投信株式会社",
    "fundCode": "90311049",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド・インフラ株式ファンド",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "8331106B",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド株式オープン",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311049",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド株式ファンド(3ヵ月決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "8331107C",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド公益インフラ債券ファンド(年2回決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311154",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド消費関連ファンド",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311085",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インドネシア株式オープン",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "8331109B",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インドネシア債券オープン(年2回決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311182",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・グローイング・アジア株式オープン",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311076",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・ジャパン中小型厳選バリュー株ファンド",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311148",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・フィリピン株式オープン",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311129",
    "frame": "growth"
  },
  {
    "name": "イーストスプリングUS投資適格債ファンド・為替ヘッジ付(年2回決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83312165",
    "frame": "growth"
  },
  {
    "name": "ESG欧州株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18315201",
    "frame": "growth"
  },
  {
    "name": "ESG米国株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18314201",
    "frame": "growth"
  },
  {
    "name": "医療関連世界株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18316201",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界厳選株式オープン<為替ヘッジあり>(年1回決算型)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831118A",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界厳選株式オープン<為替ヘッジなし>(年1回決算型)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831218A",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界消費関連成長株ファンド Aコース(為替ヘッジあり)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311222",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界消費関連成長株ファンド Bコース(為替ヘッジなし)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18312222",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界ブロックチェーン株式ファンド",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311197",
    "frame": "growth"
  },
  {
    "name": "インベスコ 店頭・成長株オープン",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831193C",
    "frame": "growth"
  },
  {
    "name": "クオリティ企業先進国株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18313201",
    "frame": "growth"
  },
  {
    "name": "国内債券インデックス・オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831119C",
    "frame": "growth"
  },
  {
    "name": "国内リートインデックス・オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831219C",
    "frame": "growth"
  },
  {
    "name": "自社株買い企業世界株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311201",
    "frame": "growth"
  },
  {
    "name": "新興国債券インデックス・オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831919C",
    "frame": "growth"
  },
  {
    "name": "先進国株式インデックス・オープン<為替ヘッジあり>(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831319C",
    "frame": "growth"
  },
  {
    "name": "先進国株式インデックス・オープン<為替ヘッジなし>(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831419C",
    "frame": "growth"
  },
  {
    "name": "先進国債券インデックス・オープン<為替ヘッジあり>(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831519C",
    "frame": "growth"
  },
  {
    "name": "先進国債券インデックス・オープン<為替ヘッジなし>(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831619C",
    "frame": "growth"
  },
  {
    "name": "先進国リートインデックス・オープン<為替ヘッジあり>(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831719C",
    "frame": "growth"
  },
  {
    "name": "先進国リートインデックス・オープン<為替ヘッジなし>(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "1831819C",
    "frame": "growth"
  },
  {
    "name": "長寿社会世界株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18317201",
    "frame": "growth"
  },
  {
    "name": "デジタル社会世界株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18318201",
    "frame": "growth"
  },
  {
    "name": "連続増配企業世界株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18312201",
    "frame": "growth"
  },
  {
    "name": "ロボティクス世界株式オープン(ラップ向け)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18319201",
    "frame": "growth"
  },
  {
    "name": "みのりの投信",
    "company": "株式会社ポートフォリア",
    "fundCode": "AA311134",
    "frame": "growth"
  },
  {
    "name": "結い2101",
    "company": "鎌倉投信株式会社",
    "fundCode": "9Q311103",
    "frame": "growth"
  },
  {
    "name": "21世紀東京 日本株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y31813A",
    "frame": "growth"
  },
  {
    "name": "アジア サプライチェーン株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y311219",
    "frame": "growth"
  },
  {
    "name": "オランダ株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y315134",
    "frame": "growth"
  },
  {
    "name": "カレラ Jリートファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y313132",
    "frame": "growth"
  },
  {
    "name": "カレラ 日本小型株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y319165",
    "frame": "growth"
  },
  {
    "name": "カレラBEV関連株ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y312222",
    "frame": "growth"
  },
  {
    "name": "カレラ改日本株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y315202",
    "frame": "growth"
  },
  {
    "name": "カレラ成長日本列島株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y313228",
    "frame": "growth"
  },
  {
    "name": "グローバル医薬品株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y314199",
    "frame": "growth"
  },
  {
    "name": "ニュー・ニッチ 日本小型株ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y317204",
    "frame": "growth"
  },
  {
    "name": "フィリピン株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y318164",
    "frame": "growth"
  },
  {
    "name": "ブラジル株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y319212",
    "frame": "growth"
  },
  {
    "name": "フランス株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y311143",
    "frame": "growth"
  },
  {
    "name": "未来の光 日本小型株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y316203",
    "frame": "growth"
  },
  {
    "name": "メキシコ株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y314133",
    "frame": "growth"
  },
  {
    "name": "ゆたか観光立国日本株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y314229",
    "frame": "growth"
  },
  {
    "name": "GS ・日本株ファンド(自動けいぞく)(愛称:牛若丸(自動けいぞく))",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531298C",
    "frame": "growth"
  },
  {
    "name": "GS グローバル・ビッグデータ投資戦略 Aコース(為替ヘッジあり)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311172",
    "frame": "growth"
  },
  {
    "name": "GS グローバル・ビッグデータ投資戦略 Bコース(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312172",
    "frame": "growth"
  },
  {
    "name": "GS グローバル環境リーダーズ 年2回決算コース",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311218",
    "frame": "growth"
  },
  {
    "name": "GS 日本小型株ファンド",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311004",
    "frame": "growth"
  },
  {
    "name": "GS 日本フォーカス・グロース 年2回決算コース",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312156",
    "frame": "growth"
  },
  {
    "name": "GS ビッグデータ・ストラテジー(エマージング株)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531317C",
    "frame": "growth"
  },
  {
    "name": "GS ビッグデータ・ストラテジー(日本株)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311177",
    "frame": "growth"
  },
  {
    "name": "GS ビッグデータ・ストラテジー(米国小型株) Aコース(為替ヘッジあり)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311174",
    "frame": "growth"
  },
  {
    "name": "GS ビッグデータ・ストラテジー(米国小型株) Bコース(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312174",
    "frame": "growth"
  },
  {
    "name": "GS 米国成長株集中投資ファンド 年2回決算コース",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311163",
    "frame": "growth"
  },
  {
    "name": "GSグローバル・リアルアセット・ファンド(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312229",
    "frame": "growth"
  },
  {
    "name": "GSグローバル・リアルアセット・ファンド(限定為替ヘッジ)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311229",
    "frame": "growth"
  },
  {
    "name": "GSフューチャー・テクノロジー・リーダーズ Aコース(限定為替ヘッジ)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311202",
    "frame": "growth"
  },
  {
    "name": "GSフューチャー・テクノロジー・リーダーズ Bコース(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312202",
    "frame": "growth"
  },
  {
    "name": "netWIN GSテクノロジー株式ファンド Aコース(為替ヘッジあり)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531199B",
    "frame": "growth"
  },
  {
    "name": "netWIN GSテクノロジー株式ファンド Bコース(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531299B",
    "frame": "growth"
  },
  {
    "name": "コモンズ30+しずぎんファンド",
    "company": "コモンズ投信株式会社",
    "fundCode": "9N31114C",
    "frame": "growth"
  },
  {
    "name": "コモンズ30ファンド",
    "company": "コモンズ投信株式会社",
    "fundCode": "9N311091",
    "frame": "growth"
  },
  {
    "name": "ザ・2020ビジョン",
    "company": "コモンズ投信株式会社",
    "fundCode": "9N31113C",
    "frame": "growth"
  },
  {
    "name": "さわかみファンド",
    "company": "さわかみ投信株式会社",
    "fundCode": "71311998",
    "frame": "growth"
  },
  {
    "name": "シュローダー・エマージング株式ファンド(1年決算型)",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "20314074",
    "frame": "growth"
  },
  {
    "name": "シュローダー・エマージング株式ファンド(3ヵ月決算型)",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "20313074",
    "frame": "growth"
  },
  {
    "name": "シュローダー・グローバル・リートESGフォーカス・ファンド(資産成長型)",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "20312215",
    "frame": "growth"
  },
  {
    "name": "シュローダーBICs株式ファンド",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "20312061",
    "frame": "growth"
  },
  {
    "name": "シュローダー日本株式オープン",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "2031398C",
    "frame": "growth"
  },
  {
    "name": "シュローダー日本ファンド",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "20311982",
    "frame": "growth"
  },
  {
    "name": "グローバル株式ファンド",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311197",
    "frame": "growth"
  },
  {
    "name": "世界成長スマートファンド",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311201",
    "frame": "growth"
  },
  {
    "name": "日米連続好配当株式ファンド",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311231",
    "frame": "growth"
  },
  {
    "name": "みらいコネクトファンド",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311217",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート世界厳選成長株ファンド",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55311224",
    "frame": "growth"
  },
  {
    "name": "全世界株式インデックス・ファンド",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55311179",
    "frame": "growth"
  },
  {
    "name": "米国株式インデックス・ファンド",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55312179",
    "frame": "growth"
  },
  {
    "name": "セゾン・グローバルバランスファンド",
    "company": "セゾン投信株式会社",
    "fundCode": "96311073",
    "frame": "growth"
  },
  {
    "name": "セゾン資産形成の達人ファンド",
    "company": "セゾン投信株式会社",
    "fundCode": "96312073",
    "frame": "growth"
  },
  {
    "name": "セゾン共創日本ファンド",
    "company": "セゾン投信株式会社",
    "fundCode": "96311222",
    "frame": "growth"
  },
  {
    "name": "FANG+インデックス・オープン",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313183",
    "frame": "growth"
  },
  {
    "name": "iFree 8資産バランス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431X169",
    "frame": "growth"
  },
  {
    "name": "iFree JPX日経400インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431O169",
    "frame": "growth"
  },
  {
    "name": "iFree J-REITインデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431V169",
    "frame": "growth"
  },
  {
    "name": "iFree NYダウ・インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431Q169",
    "frame": "growth"
  },
  {
    "name": "iFree S&P500インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04318178",
    "frame": "growth"
  },
  {
    "name": "iFree TOPIXインデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431N169",
    "frame": "growth"
  },
  {
    "name": "iFree 外国REITインデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431W169",
    "frame": "growth"
  },
  {
    "name": "iFree 外国株式インデックス(為替ヘッジあり)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04319178",
    "frame": "growth"
  },
  {
    "name": "iFree 外国株式インデックス(為替ヘッジなし)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431P169",
    "frame": "growth"
  },
  {
    "name": "iFree 外国債券インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431T169",
    "frame": "growth"
  },
  {
    "name": "iFree 新興国株式インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431R169",
    "frame": "growth"
  },
  {
    "name": "iFree 新興国債券インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431U169",
    "frame": "growth"
  },
  {
    "name": "iFree 日経225インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431M169",
    "frame": "growth"
  },
  {
    "name": "iFree 日本債券インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431S169",
    "frame": "growth"
  },
  {
    "name": "iFreeActive EV",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314181",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT NASDAQ次世代50",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312211",
    "frame": "growth"
  },
  {
    "name": "iFreePlus 米国配当王(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04316235",
    "frame": "growth"
  },
  {
    "name": "iFreePlus 米国配当王(年4回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04317235",
    "frame": "growth"
  },
  {
    "name": "NWQグローバル厳選証券ファンド(為替ヘッジあり/隔月分配型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431118B",
    "frame": "growth"
  },
  {
    "name": "NWQグローバル厳選証券ファンド(為替ヘッジあり/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431318B",
    "frame": "growth"
  },
  {
    "name": "NWQグローバル厳選証券ファンド(為替ヘッジなし/隔月分配型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431218B",
    "frame": "growth"
  },
  {
    "name": "NWQグローバル厳選証券ファンド(為替ヘッジなし/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431418B",
    "frame": "growth"
  },
  {
    "name": "アクティブ・ニッポン",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431198B",
    "frame": "growth"
  },
  {
    "name": "ウォルター・スコット優良成長企業ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312215",
    "frame": "growth"
  },
  {
    "name": "クリーンテック株式&グリーンボンド・ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311202",
    "frame": "growth"
  },
  {
    "name": "クリーンテック株式&グリーンボンド・ファンド(予想分配金提示型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312202",
    "frame": "growth"
  },
  {
    "name": "クリーンテック株式ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311207",
    "frame": "growth"
  },
  {
    "name": "グローバル・ライフ株式ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311237",
    "frame": "growth"
  },
  {
    "name": "グローバル・ライフ株式ファンド(予想分配金提示型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312237",
    "frame": "growth"
  },
  {
    "name": "グローバル・リート・インデックスファンド(資産形成型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431419A",
    "frame": "growth"
  },
  {
    "name": "ジャパン・エクセレント",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313142",
    "frame": "growth"
  },
  {
    "name": "新世代成長株ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431199C",
    "frame": "growth"
  },
  {
    "name": "ストックインデックスファンド225",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311859",
    "frame": "growth"
  },
  {
    "name": "世界インフラ戦略ファンド(為替ヘッジなし/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431320C",
    "frame": "growth"
  },
  {
    "name": "世界セレクティブ株式オープン",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311194",
    "frame": "growth"
  },
  {
    "name": "世界セレクティブ株式オープン(為替ヘッジあり/年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431A207",
    "frame": "growth"
  },
  {
    "name": "世界セレクティブ株式オープン(為替ヘッジあり/年2回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04319207",
    "frame": "growth"
  },
  {
    "name": "世界セレクティブ株式オープン(年2回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313202",
    "frame": "growth"
  },
  {
    "name": "ダイワ・US-REIT・オープン(年1回決算型)為替ヘッジあり",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431F13C",
    "frame": "growth"
  },
  {
    "name": "ダイワ・US-REIT・オープン(年1回決算型)為替ヘッジなし",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431C138",
    "frame": "growth"
  },
  {
    "name": "ダイワ・インド株ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312086",
    "frame": "growth"
  },
  {
    "name": "ダイワ・グローバルIoT関連株ファンド -AI新時代- (為替ヘッジあり)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312174",
    "frame": "growth"
  },
  {
    "name": "ダイワ・グローバルIoT関連株ファンド -AI新時代- (為替ヘッジなし)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313174",
    "frame": "growth"
  },
  {
    "name": "ダイワ・グローバルREIT・オープン(為替ヘッジあり/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431321B",
    "frame": "growth"
  },
  {
    "name": "ダイワ・グローバルREIT・オープン(為替ヘッジなし/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431221B",
    "frame": "growth"
  },
  {
    "name": "ダイワ・ダイナミック・インド株ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431307C",
    "frame": "growth"
  },
  {
    "name": "ダイワ・チャイナ・ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431201C",
    "frame": "growth"
  },
  {
    "name": "ダイワ・バリュー株・オープン",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311002",
    "frame": "growth"
  },
  {
    "name": "ダイワ・ブラジル株式ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312083",
    "frame": "growth"
  },
  {
    "name": "ダイワ・ライフ・バランス30",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313056",
    "frame": "growth"
  },
  {
    "name": "ダイワ・ライフ・バランス50",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314056",
    "frame": "growth"
  },
  {
    "name": "ダイワ・ライフ・バランス70",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04315056",
    "frame": "growth"
  },
  {
    "name": "ダイワFEグローバル・バリュー(為替ヘッジあり)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311167",
    "frame": "growth"
  },
  {
    "name": "ダイワFEグローバル・バリュー(為替ヘッジなし)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312167",
    "frame": "growth"
  },
  {
    "name": "ダイワJPX日経400ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314141",
    "frame": "growth"
  },
  {
    "name": "ダイワJ-REITオープン",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431103B",
    "frame": "growth"
  },
  {
    "name": "ダイワJ-REITオープン(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431513C",
    "frame": "growth"
  },
  {
    "name": "ダイワSociety 5.0関連株ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313207",
    "frame": "growth"
  },
  {
    "name": "ダイワ金融新時代ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314065",
    "frame": "growth"
  },
  {
    "name": "ダイワ好配当日本株投信(季節点描)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313057",
    "frame": "growth"
  },
  {
    "name": "ダイワ高格付カナダドル債オープン(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431E137",
    "frame": "growth"
  },
  {
    "name": "ダイワ日本好配当株ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311057",
    "frame": "growth"
  },
  {
    "name": "ダイワ日本国債ファンド(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431D137",
    "frame": "growth"
  },
  {
    "name": "脱炭素テクノロジー株式ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311217",
    "frame": "growth"
  },
  {
    "name": "トピックス・インデックスファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431188A",
    "frame": "growth"
  },
  {
    "name": "ドラッカー研究所米国株ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431122C",
    "frame": "growth"
  },
  {
    "name": "日本株発掘ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431A152",
    "frame": "growth"
  },
  {
    "name": "日本物価連動国債ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311139",
    "frame": "growth"
  },
  {
    "name": "ハイグレード・オセアニア・ボンド・オープン(3カ月決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311039",
    "frame": "growth"
  },
  {
    "name": "ハイグレード・オセアニア・ボンド・オープン(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431A138",
    "frame": "growth"
  },
  {
    "name": "ハイグレード・オセアニア・ボンド・オープン(年2回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431208A",
    "frame": "growth"
  },
  {
    "name": "フード&テクノロジー関連株式ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04316219",
    "frame": "growth"
  },
  {
    "name": "ブラジル・ボンド・オープン(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04317138",
    "frame": "growth"
  },
  {
    "name": "ブラジル・ボンド・オープン(年2回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431608B",
    "frame": "growth"
  },
  {
    "name": "米国株式インデックス(S&P500)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431122A",
    "frame": "growth"
  },
  {
    "name": "米国国債ファンド 為替ヘッジあり(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431C136",
    "frame": "growth"
  },
  {
    "name": "米国国債ファンド 為替ヘッジなし(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431D136",
    "frame": "growth"
  },
  {
    "name": "ベトナム株ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431216C",
    "frame": "growth"
  },
  {
    "name": "ポーレン米国グロース株式ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313213",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー インフラ株式ファンド(為替ヘッジあり/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311227",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー インフラ株式ファンド(為替ヘッジなし/資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312227",
    "frame": "growth"
  },
  {
    "name": "大和ストックインデックス225ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431105A",
    "frame": "growth"
  },
  {
    "name": "ロボット・テクノロジー関連株ファンド -ロボテック-",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431115C",
    "frame": "growth"
  },
  {
    "name": "ロボット・テクノロジー関連株ファンド -ロボテック-(為替ヘッジあり)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431Z169",
    "frame": "growth"
  },
  {
    "name": "ロボット・テクノロジー関連株ファンド(年1回決算型) -ロボテック(年1回)-",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04318162",
    "frame": "growth"
  },
  {
    "name": "ロボット・テクノロジー関連株ファンド(年1回決算型) -ロボテック(年1回)-(為替ヘッジあり)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431116L",
    "frame": "growth"
  },
  {
    "name": "ダイヤセレクト日本株オープン",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931108C",
    "frame": "growth"
  },
  {
    "name": "東海3県ファンド",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311026",
    "frame": "growth"
  },
  {
    "name": "東京海上・インド・オーナーズ株式オープン",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311204",
    "frame": "growth"
  },
  {
    "name": "東京海上・宇宙関連株式ファンド(為替ヘッジあり)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311194",
    "frame": "growth"
  },
  {
    "name": "東京海上・宇宙関連株式ファンド(為替ヘッジなし)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311189",
    "frame": "growth"
  },
  {
    "name": "東京海上・円資産インデックスバランスファンド",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931317A",
    "frame": "growth"
  },
  {
    "name": "東京海上・円資産バランスファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931114B",
    "frame": "growth"
  },
  {
    "name": "東京海上・円建て投資適格債券ファンド(年2回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49312105",
    "frame": "growth"
  },
  {
    "name": "東京海上・気候変動対応株式ファンド(為替ヘッジあり)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931121A",
    "frame": "growth"
  },
  {
    "name": "東京海上・気候変動対応株式ファンド(為替ヘッジなし)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931221A",
    "frame": "growth"
  },
  {
    "name": "東京海上・グローバルペット関連株式ファンド(為替ヘッジあり)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49312176",
    "frame": "growth"
  },
  {
    "name": "東京海上・グローバルペット関連株式ファンド(為替ヘッジなし)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311176",
    "frame": "growth"
  },
  {
    "name": "東京海上・グローバルヘルスケアREITオープン(為替ヘッジあり)(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931416A",
    "frame": "growth"
  },
  {
    "name": "東京海上・グローバルヘルスケアREITオープン(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931215B",
    "frame": "growth"
  },
  {
    "name": "東京海上・再生可能エネルギー・インカム戦略ファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49312216",
    "frame": "growth"
  },
  {
    "name": "東京海上・ジャパン・オーナーズ株式オープン",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311134",
    "frame": "growth"
  },
  {
    "name": "東京海上・ジャパン・オーナーズ株式オープン(予想分配金提示型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931421A",
    "frame": "growth"
  },
  {
    "name": "東京海上・世界モノポリー戦略株式ファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931122A",
    "frame": "growth"
  },
  {
    "name": "東京海上・日経225インデックスファンド",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931116A",
    "frame": "growth"
  },
  {
    "name": "東京海上・ニッポン世界債券ファンド(為替ヘッジあり)(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311138",
    "frame": "growth"
  },
  {
    "name": "東京海上・年金運用型戦略ファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311157",
    "frame": "growth"
  },
  {
    "name": "東京海上・物価対応バランスファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931222B",
    "frame": "growth"
  },
  {
    "name": "東京海上・米国短期国債ファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49313233",
    "frame": "growth"
  },
  {
    "name": "東京海上・ベトナム株式ファンド(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311187",
    "frame": "growth"
  },
  {
    "name": "東京海上・ベトナム株式ファンド(年4回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311186",
    "frame": "growth"
  },
  {
    "name": "東京海上セレクション・外国株式インデックス",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49313104",
    "frame": "growth"
  },
  {
    "name": "東京海上セレクション・日本株TOPIX",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49314019",
    "frame": "growth"
  },
  {
    "name": "東京海上セレクション・物価連動国債",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931104B",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2035",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311199",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2045",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49312199",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2055",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49313199",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2065",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49314199",
    "frame": "growth"
  },
  {
    "name": "DCニッセイワールドセレクトファンド(安定型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311177",
    "frame": "growth"
  },
  {
    "name": "DCニッセイワールドセレクトファンド(株式重視型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313031",
    "frame": "growth"
  },
  {
    "name": "DCニッセイワールドセレクトファンド(債券重視型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311031",
    "frame": "growth"
  },
  {
    "name": "DCニッセイワールドセレクトファンド(標 準 型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312031",
    "frame": "growth"
  },
  {
    "name": "グローバル・デジタルヘルスケア株式ファンド(年1回決算型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931821B",
    "frame": "growth"
  },
  {
    "name": "グローバル・デジタルヘルスケア株式ファンド(年1回決算型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931921B",
    "frame": "growth"
  },
  {
    "name": "グローバル・デジタルヘルスケア株式ファンド(年2回決算型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931A21B",
    "frame": "growth"
  },
  {
    "name": "グローバル・デジタルヘルスケア株式ファンド(年2回決算型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931B21B",
    "frame": "growth"
  },
  {
    "name": "げんせん投信",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312176",
    "frame": "growth"
  },
  {
    "name": "ニッセイ/パトナム・インカムオープン",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311987",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスパッケージ(国内・株式/リート/債券)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931517B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスパッケージ(内外・株式)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931217B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスパッケージ(内外・株式/リート)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931317B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスパッケージ(内外・株式/リート/債券)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931417B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・メタバースワールド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312223",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・ワールドスポーツ・ファンド-メダリスト-Aコース(為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29316126",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・ワールドスポーツ・ファンド-メダリスト-Bコース(為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29317126",
    "frame": "growth"
  },
  {
    "name": "ニッセイAI関連株式ファンド(為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931416B",
    "frame": "growth"
  },
  {
    "name": "ニッセイAI関連株式ファンド(為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931516B",
    "frame": "growth"
  },
  {
    "name": "ニッセイAI関連株式ファンド(年2回決算型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311181",
    "frame": "growth"
  },
  {
    "name": "ニッセイAI関連株式ファンド(年2回決算型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312181",
    "frame": "growth"
  },
  {
    "name": "ニッセイJPX日経400アクティブファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311142",
    "frame": "growth"
  },
  {
    "name": "ニッセイJPX日経400アクティブファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311163",
    "frame": "growth"
  },
  {
    "name": "ニッセイJ-REITファンド(年1回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931313A",
    "frame": "growth"
  },
  {
    "name": "ニッセイJリートオープン(年1回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313136",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsインカムファンド(資産成長型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931321C",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsインカムファンド(資産成長型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931421C",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsインカムファンド(予想分配金提示型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931521C",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsインカムファンド(予想分配金提示型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931621C",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsグローバルセレクトファンド(資産成長型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931A185",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsグローバルセレクトファンド(年2回決算型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29318185",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsグローバルセレクトファンド(年2回決算型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29319185",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsジャパンセレクトファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29316182",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsジャパンセレクトファンド(年2回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29315182",
    "frame": "growth"
  },
  {
    "name": "ニッセイTOPIXオープン",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311014",
    "frame": "growth"
  },
  {
    "name": "ニッセイアメリカ高配当株ファンド(年2回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314137",
    "frame": "growth"
  },
  {
    "name": "ニッセイ宇宙関連グローバル株式ファンド(資産成長型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931318B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ宇宙関連グローバル株式ファンド(資産成長型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931418B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ宇宙関連グローバル株式ファンド(年2回決算型・為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931118B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ宇宙関連グローバル株式ファンド(年2回決算型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931218B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ気候変動関連グローバル株式ファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314214",
    "frame": "growth"
  },
  {
    "name": "ニッセイ健康応援ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311084",
    "frame": "growth"
  },
  {
    "name": "ニッセイ豪州ハイ・インカム株式ファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29315176",
    "frame": "growth"
  },
  {
    "name": "ニッセイ世界リートオープン(年2回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931613A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ短期インド債券ファンド(年2回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313148",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日経225インデックスファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311041",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本インカムオープン(年1回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312138",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本勝ち組ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311033",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本勝ち組ファンド(3ヵ月決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312066",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本株ESGフォーカスファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312195",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本株ESGフォーカスファンド(年2回決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311195",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本株グロースオープン",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311002",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日本株ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931101C",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>おおぶねJAPAN(日本選抜)",
    "company": "農林中金バリューインベストメンツ株式会社",
    "fundCode": "B431119C",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>おおぶねグローバル(長期厳選)",
    "company": "農林中金バリューインベストメンツ株式会社",
    "fundCode": "B4311203",
    "frame": "growth"
  },
  {
    "name": "J-REITオープン(資産成長型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01317141",
    "frame": "growth"
  },
  {
    "name": "J-REITオープン(年4回決算型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313052",
    "frame": "growth"
  },
  {
    "name": "株式インデックス 225",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311872",
    "frame": "growth"
  },
  {
    "name": "好配当日本株式 オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311056",
    "frame": "growth"
  },
  {
    "name": "世界6資産分散ファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312185",
    "frame": "growth"
  },
  {
    "name": "世界好配当株投信",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131204B",
    "frame": "growth"
  },
  {
    "name": "積立て株式ファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131168C",
    "frame": "growth"
  },
  {
    "name": "トピックス・インデックス・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311889",
    "frame": "growth"
  },
  {
    "name": "日本好配当株投信",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311054",
    "frame": "growth"
  },
  {
    "name": "ノムラ・ジャパン・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311962",
    "frame": "growth"
  },
  {
    "name": "野村6資産均等バランス",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312179",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・JPX日経400",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311143",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・J-REIT",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131C10B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・TOPIX",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131610B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・内外7資産バランス・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313139",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・海外5資産バランス",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01316139",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・外国株式",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131410B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・外国株式・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314135",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・外国債券",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131910B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・国内債券",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131A10B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・新興国株式",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131310B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・先進国ESG株式",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311211",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・日経225",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131510B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・米国株式配当貴族",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311171",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・米国株式配当貴族・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312171",
    "frame": "growth"
  },
  {
    "name": "野村スリーゼロ先進国株式投信",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01319203",
    "frame": "growth"
  },
  {
    "name": "野村つみたて外国株投信",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131317A",
    "frame": "growth"
  },
  {
    "name": "野村つみたて日本株投信",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131217A",
    "frame": "growth"
  },
  {
    "name": "野村日本債券インデックスファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311083",
    "frame": "growth"
  },
  {
    "name": "野村米国ハイ・イールド・ファンド(年1回決算型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131113B",
    "frame": "growth"
  },
  {
    "name": "野村米国ハイ・イールド・ファンド(年1回決算型)為替ヘッジあり",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131213B",
    "frame": "growth"
  },
  {
    "name": "野村リアルグロース・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131103A",
    "frame": "growth"
  },
  {
    "name": "米国NASDAQオープンAコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131100B",
    "frame": "growth"
  },
  {
    "name": "米国NASDAQオープンBコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131200B",
    "frame": "growth"
  },
  {
    "name": "リサーチ・アクティブ・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131392A",
    "frame": "growth"
  },
  {
    "name": "MASAMITSU日本株戦略ファンド",
    "company": "ファイブスター投信投資顧問株式会社",
    "fundCode": "AB31114B",
    "frame": "growth"
  },
  {
    "name": "長期資産形成戦略ファンド",
    "company": "ファイブスター投信投資顧問株式会社",
    "fundCode": "AB311219",
    "frame": "growth"
  },
  {
    "name": "ファイブスター日経225ニュートラルファンド",
    "company": "ファイブスター投信投資顧問株式会社",
    "fundCode": "AB311234",
    "frame": "growth"
  },
  {
    "name": "ベトナム・ロータス・ファンド",
    "company": "ファイブスター投信投資顧問株式会社",
    "fundCode": "AB311171",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・Jリート・アクティブ・ファンド(資産成長型)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313169",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・USリート・ファンド(資産成長型)C(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311136",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・USリート・ファンド(資産成長型)D(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312136",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・欧州株・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313984",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・欧州中小型株・オープンAコース(為替ヘッジ付き)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311965",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・欧州中小型株・オープンBコース(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312965",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・グロース・オポチュニティAコース(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311233",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・グロース・オポチュニティBコース(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312233",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・グローバル株式ファンド(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311184",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・グローバル株式ファンド(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312184",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ジャパン・オープン",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231195C",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ストラテジック・インカム・ファンド(資産成長型)Cコース(為替ヘッジ付き)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311135",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ストラテジック・インカム・ファンド(資産成長型)Dコース(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312135",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・世界割安成長株投信Aコース(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311203",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・世界割安成長株投信Bコース(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312203",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ターゲット・デート・ファンド(ベーシック)2045",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312209",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ターゲット・デート・ファンド(ベーシック)2050",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231114A",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ターゲット・デート・ファンド(ベーシック)2055",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313209",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ターゲット・デート・ファンド(ベーシック)2060",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311189",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ターゲット・デート・ファンド(ベーシック)2065",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312222",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ターゲット・デート・ファンド(ベーシック)2070",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313222",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・脱炭素日本株・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311228",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・テクノロジー厳選株式ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231199B",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・日本成長株・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311984",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・日本バリュー・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311022",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・米国株式ファンドAコース(資産成長型・為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312185",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・米国株式ファンドBコース(資産成長型・為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313185",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・米国優良株・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32314984",
    "frame": "growth"
  },
  {
    "name": "フィデリティ世界医療機器関連株ファンド(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231116C",
    "frame": "growth"
  },
  {
    "name": "フィデリティ世界医療機器関連株ファンド(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231216C",
    "frame": "growth"
  },
  {
    "name": "フィデリティ世界バリュー株式ファンドAコース(年2回決算・為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311218",
    "frame": "growth"
  },
  {
    "name": "フィデリティ世界バリュー株式ファンドBコース(年2回決算・為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312218",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・円ハイブリッド債券インカム・ファンド(3ヵ月決算型)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31319A",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・円ハイブリッド債券インカム・ファンド(年1回決算型)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31419A",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・カナダ株式ファンド",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K311092",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・新グローバル配当株ファンド(年2回決算型)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31314B",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・米国銀行株式ファンド",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31115B",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・米国銀行株式ファンド(資産成長型)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K311187",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・米国投資適格債券戦略ファンド Cコース(為替ヘッジあり・年2回)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31317B",
    "frame": "growth"
  },
  {
    "name": "マニュライフ・米国投資適格債券戦略ファンド Dコース(為替ヘッジなし・年2回)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31417B",
    "frame": "growth"
  },
  {
    "name": "MSVグローバル資産配分ファンドI(保守型)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL31118C",
    "frame": "growth"
  },
  {
    "name": "MSVグローバル資産配分ファンドII(安定型)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL31218C",
    "frame": "growth"
  },
  {
    "name": "MSVグローバル資産配分ファンドIII(安定成長型)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL31318C",
    "frame": "growth"
  },
  {
    "name": "MSVグローバル資産配分ファンドIV(成長型)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL31418C",
    "frame": "growth"
  },
  {
    "name": "MSVグローバル資産配分ファンドV(積極成長型)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL31518C",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Aコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL311166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Bコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL312166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Cコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL313166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Dコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL314166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Eコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL315166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Fコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL316166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Gコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL317166",
    "frame": "growth"
  },
  {
    "name": "MSV内外ETF資産配分ファンド(Hコース)",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL318166",
    "frame": "growth"
  },
  {
    "name": "マネックス・アクティビスト・ファンド",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL312206",
    "frame": "growth"
  },
  {
    "name": "イノベーティブ・カーボンニュートラル戦略ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312213",
    "frame": "growth"
  },
  {
    "name": "短期豪ドル債オープン(年2回決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315125",
    "frame": "growth"
  },
  {
    "name": "日系企業海外債券オープン(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931115B",
    "frame": "growth"
  },
  {
    "name": "日系企業海外債券オープン(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931215B",
    "frame": "growth"
  },
  {
    "name": "日本好配当株オープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931305A",
    "frame": "growth"
  },
  {
    "name": "三井住友・ニュー・チャイナ・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931C01A",
    "frame": "growth"
  },
  {
    "name": "3資産バランスオープンアルファ",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64316063",
    "frame": "growth"
  },
  {
    "name": "J-REIT・リサーチ・オープン(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431613B",
    "frame": "growth"
  },
  {
    "name": "Jリートアクティブファンド(1年決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431307A",
    "frame": "growth"
  },
  {
    "name": "My SMT J-REITインデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431C223",
    "frame": "growth"
  },
  {
    "name": "My SMT S&P500インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431B223",
    "frame": "growth"
  },
  {
    "name": "My SMT TOPIXインデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312181",
    "frame": "growth"
  },
  {
    "name": "My SMT グローバルREITインデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431D223",
    "frame": "growth"
  },
  {
    "name": "My SMT グローバル株式インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431217B",
    "frame": "growth"
  },
  {
    "name": "My SMT グローバル債券インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64317223",
    "frame": "growth"
  },
  {
    "name": "My SMT 国内債券インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64316223",
    "frame": "growth"
  },
  {
    "name": "My SMT 新興国株式インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311181",
    "frame": "growth"
  },
  {
    "name": "My SMT 新興国債券インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64318223",
    "frame": "growth"
  },
  {
    "name": "My SMT ダウ・ジョーンズ・インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314223",
    "frame": "growth"
  },
  {
    "name": "My SMT 日経225インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431117B",
    "frame": "growth"
  },
  {
    "name": "NWQフレキシブル・インカムファンド 為替ヘッジあり(年1回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431318C",
    "frame": "growth"
  },
  {
    "name": "NWQフレキシブル・インカムファンド 為替ヘッジなし(年1回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431418C",
    "frame": "growth"
  },
  {
    "name": "SBI資産設計オープン(資産成長型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311081",
    "frame": "growth"
  },
  {
    "name": "SBI資産設計オープン(つみたてNISA対応型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431217C",
    "frame": "growth"
  },
  {
    "name": "SBI資産設計オープン(分配型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312081",
    "frame": "growth"
  },
  {
    "name": "SMT 8資産インデックスバランス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314178",
    "frame": "growth"
  },
  {
    "name": "SMT JPX日経インデックス400・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313141",
    "frame": "growth"
  },
  {
    "name": "SMT J-REITインデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64317081",
    "frame": "growth"
  },
  {
    "name": "SMT MIRAIndex eビジネス",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313197",
    "frame": "growth"
  },
  {
    "name": "SMT MIRAIndex 宇宙",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431119C",
    "frame": "growth"
  },
  {
    "name": "SMT MIRAIndex エコ",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431319A",
    "frame": "growth"
  },
  {
    "name": "SMT MIRAIndex 総合",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313224",
    "frame": "growth"
  },
  {
    "name": "SMT MIRAIndex バイオ・メディカル",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313193",
    "frame": "growth"
  },
  {
    "name": "SMT MIRAIndex ロボ",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431218A",
    "frame": "growth"
  },
  {
    "name": "SMT TOPIXインデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313081",
    "frame": "growth"
  },
  {
    "name": "SMT アジア新興国株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431111B",
    "frame": "growth"
  },
  {
    "name": "SMT インデックスバランス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431514B",
    "frame": "growth"
  },
  {
    "name": "SMT 欧州株配当貴族インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431317B",
    "frame": "growth"
  },
  {
    "name": "SMT グローバルREITインデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64318081",
    "frame": "growth"
  },
  {
    "name": "SMT グローバル株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314081",
    "frame": "growth"
  },
  {
    "name": "SMT グローバル債券インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64316081",
    "frame": "growth"
  },
  {
    "name": "SMT グローバル債券インデックス・オープン(為替ヘッジあり)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431C13C",
    "frame": "growth"
  },
  {
    "name": "SMT ゴールドインデックス・オープン(為替ヘッジあり)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431717B",
    "frame": "growth"
  },
  {
    "name": "SMT ゴールドインデックス・オープン(為替ヘッジなし)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431917B",
    "frame": "growth"
  },
  {
    "name": "SMT 国内債券インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64315081",
    "frame": "growth"
  },
  {
    "name": "SMT 新興国REITインデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431414B",
    "frame": "growth"
  },
  {
    "name": "SMT 新興国株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431208C",
    "frame": "growth"
  },
  {
    "name": "SMT 新興国債券インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431108C",
    "frame": "growth"
  },
  {
    "name": "SMT 世界経済インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311178",
    "frame": "growth"
  },
  {
    "name": "SMT 世界経済インデックス・オープン(株式シフト型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312178",
    "frame": "growth"
  },
  {
    "name": "SMT 世界経済インデックス・オープン(債券シフト型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313178",
    "frame": "growth"
  },
  {
    "name": "SMT 日経225インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311107",
    "frame": "growth"
  },
  {
    "name": "SMTAM NYダウインデックスオープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312149",
    "frame": "growth"
  },
  {
    "name": "SMTAM NYダウインデックスオープン(為替ヘッジあり)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311184",
    "frame": "growth"
  },
  {
    "name": "SMTAMコモディティ・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431113C",
    "frame": "growth"
  },
  {
    "name": "SMTAMダウ・ジョーンズ インデックスファンド(為替ヘッジあり)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312112",
    "frame": "growth"
  },
  {
    "name": "SRI・ジャパン・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431203C",
    "frame": "growth"
  },
  {
    "name": "アジア・オセアニア配当利回り株オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311062",
    "frame": "growth"
  },
  {
    "name": "アジアREIT・リサーチ・オープン(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313138",
    "frame": "growth"
  },
  {
    "name": "イノベーション・インサイト 世界株式戦略ファンド(資産成長型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431122B",
    "frame": "growth"
  },
  {
    "name": "インバウンド関連日本株ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311159",
    "frame": "growth"
  },
  {
    "name": "エマージング株式オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311065",
    "frame": "growth"
  },
  {
    "name": "オーストラリアREIT・リサーチ・オープン(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311163",
    "frame": "growth"
  },
  {
    "name": "外国株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64315005",
    "frame": "growth"
  },
  {
    "name": "外国株式インデックスe",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313104",
    "frame": "growth"
  },
  {
    "name": "外国株式インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311012",
    "frame": "growth"
  },
  {
    "name": "外国債券インデックスe",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314104",
    "frame": "growth"
  },
  {
    "name": "外国債券インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312012",
    "frame": "growth"
  },
  {
    "name": "キャッシュフロー経営評価オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311006",
    "frame": "growth"
  },
  {
    "name": "グローバル・インデックス・バランス・ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313083",
    "frame": "growth"
  },
  {
    "name": "グローバルETF・インカム・バランスファンド(年1回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311199",
    "frame": "growth"
  },
  {
    "name": "グローバルETF・インカム・バランスファンド(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312199",
    "frame": "growth"
  },
  {
    "name": "グローバル経済コア",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431417B",
    "frame": "growth"
  },
  {
    "name": "次世代通信関連 アジア株式戦略ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311202",
    "frame": "growth"
  },
  {
    "name": "次世代通信関連 世界株式戦略ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431117C",
    "frame": "growth"
  },
  {
    "name": "次世代ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431199B",
    "frame": "growth"
  },
  {
    "name": "ジャパン・グロース・ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311996",
    "frame": "growth"
  },
  {
    "name": "世界経済インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64315091",
    "frame": "growth"
  },
  {
    "name": "世界経済インデックスファンド(債券シフト型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431213B",
    "frame": "growth"
  },
  {
    "name": "世界スタートアップ&イノベーション株式ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312193",
    "frame": "growth"
  },
  {
    "name": "世界ダブルハイインカム(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431106A",
    "frame": "growth"
  },
  {
    "name": "脱炭素関連 世界株式戦略ファンド(資産成長型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314215",
    "frame": "growth"
  },
  {
    "name": "チャイナ・リサーチ・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311046",
    "frame": "growth"
  },
  {
    "name": "中小型株式オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312006",
    "frame": "growth"
  },
  {
    "name": "日経225インデックスe",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64319161",
    "frame": "growth"
  },
  {
    "name": "日経225インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311095",
    "frame": "growth"
  },
  {
    "name": "日本債券インデックスe",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312104",
    "frame": "growth"
  },
  {
    "name": "日本債券インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311011",
    "frame": "growth"
  },
  {
    "name": "日本インフラ投信ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314224",
    "frame": "growth"
  },
  {
    "name": "日本株式SRIファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311066",
    "frame": "growth"
  },
  {
    "name": "日本株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314005",
    "frame": "growth"
  },
  {
    "name": "日本株式インデックスe",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311104",
    "frame": "growth"
  },
  {
    "name": "日本株式インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313011",
    "frame": "growth"
  },
  {
    "name": "日本株式エクセレント・フォーカスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311221",
    "frame": "growth"
  },
  {
    "name": "日本株配当オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64318056",
    "frame": "growth"
  },
  {
    "name": "ニュー配当利回り株オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312057",
    "frame": "growth"
  },
  {
    "name": "米国成長株式ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311137",
    "frame": "growth"
  },
  {
    "name": "米国地方債ファンド 為替ヘッジあり(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313164",
    "frame": "growth"
  },
  {
    "name": "米国地方債ファンド 為替ヘッジなし(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314164",
    "frame": "growth"
  },
  {
    "name": "未来フォーカス企業債ファンド(為替ヘッジあり)(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312217",
    "frame": "growth"
  },
  {
    "name": "リアルアセット関連証券ファンド(年2回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431222C",
    "frame": "growth"
  },
  {
    "name": "小型株ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311028",
    "frame": "growth"
  },
  {
    "name": "新成長株ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12312044",
    "frame": "growth"
  },
  {
    "name": "成長応援日本株ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311165",
    "frame": "growth"
  },
  {
    "name": "東洋ベトナム株式オープン",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311229",
    "frame": "growth"
  },
  {
    "name": "にいがた未来応援日本株ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311197",
    "frame": "growth"
  },
  {
    "name": "ノーロード明治安田社債アクティブ",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231416C",
    "frame": "growth"
  },
  {
    "name": "明治安田アメリカ株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12312004",
    "frame": "growth"
  },
  {
    "name": "明治安田欧州株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12313001",
    "frame": "growth"
  },
  {
    "name": "明治安田外国債券オープン",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12315014",
    "frame": "growth"
  },
  {
    "name": "明治安田セレクト日本株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231100C",
    "frame": "growth"
  },
  {
    "name": "明治安田日本債券オープン(年1回決算型)",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311187",
    "frame": "growth"
  },
  {
    "name": "明治安田日本債券ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12312001",
    "frame": "growth"
  },
  {
    "name": "明治安田日本株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311001",
    "frame": "growth"
  },
  {
    "name": "明治安田米国中小型成長株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311121",
    "frame": "growth"
  },
  {
    "name": "ユニオンファンド",
    "company": "ユニオン投信株式会社",
    "fundCode": "9L31108A",
    "frame": "growth"
  },
  {
    "name": "J-REITリサーチ・アクティブファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31222C",
    "frame": "growth"
  },
  {
    "name": "Smart-i Jリートインデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ318178",
    "frame": "growth"
  },
  {
    "name": "Smart-i S&P500インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311207",
    "frame": "growth"
  },
  {
    "name": "Smart-i Select 全世界株式インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312224",
    "frame": "growth"
  },
  {
    "name": "Smart-i Select 全世界株式インデックス(除く日本)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313224",
    "frame": "growth"
  },
  {
    "name": "Smart-i TOPIXインデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312178",
    "frame": "growth"
  },
  {
    "name": "Smart-i ゴールドファンド(為替ヘッジあり)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312217",
    "frame": "growth"
  },
  {
    "name": "Smart-i ゴールドファンド(為替ヘッジなし)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311217",
    "frame": "growth"
  },
  {
    "name": "Smart-i 国内株式ESGインデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31119A",
    "frame": "growth"
  },
  {
    "name": "Smart-i 国内債券インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311178",
    "frame": "growth"
  },
  {
    "name": "Smart-i 新興国株式インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ317178",
    "frame": "growth"
  },
  {
    "name": "Smart-i 世界株式気候変動インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31222A",
    "frame": "growth"
  },
  {
    "name": "Smart-i 先進国株式インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ316178",
    "frame": "growth"
  },
  {
    "name": "Smart-i 先進国債券インデックス(為替ヘッジあり)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ315178",
    "frame": "growth"
  },
  {
    "name": "Smart-i 先進国債券インデックス(為替ヘッジなし)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ314178",
    "frame": "growth"
  },
  {
    "name": "Smart-i 先進国リートインデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ319178",
    "frame": "growth"
  },
  {
    "name": "Smart-i 日経225インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313178",
    "frame": "growth"
  },
  {
    "name": "Smartーi 8資産バランス 安定型",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ314183",
    "frame": "growth"
  },
  {
    "name": "Smartーi 8資産バランス 安定成長型",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ315183",
    "frame": "growth"
  },
  {
    "name": "Smartーi 8資産バランス 成長型",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ316183",
    "frame": "growth"
  },
  {
    "name": "円建グローバル公社債ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311214",
    "frame": "growth"
  },
  {
    "name": "九州SDGs・グローバルバランス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31121B",
    "frame": "growth"
  },
  {
    "name": "グローバルインパクト投資ファンド(気候変動)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31321C",
    "frame": "growth"
  },
  {
    "name": "グローバル中小型株式ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31120A",
    "frame": "growth"
  },
  {
    "name": "国内株式ESGインデックス・オープン",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312219",
    "frame": "growth"
  },
  {
    "name": "埼玉りそな・グローバルバランス・プラスESG",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311209",
    "frame": "growth"
  },
  {
    "name": "先進国株式ESGインデックス・オープン",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313219",
    "frame": "growth"
  },
  {
    "name": "つみたてバランスファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31117A",
    "frame": "growth"
  },
  {
    "name": "日本株式インパクト投資ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311216",
    "frame": "growth"
  },
  {
    "name": "日本厳選価値向上株式ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31322C",
    "frame": "growth"
  },
  {
    "name": "日本厳選株式ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312213",
    "frame": "growth"
  },
  {
    "name": "ラップ型ファンド・プラスESG(安定型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31122B",
    "frame": "growth"
  },
  {
    "name": "ラップ型ファンド・プラスESG(安定成長型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31222B",
    "frame": "growth"
  },
  {
    "name": "ラップ型ファンド・プラスESG(成長型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31322B",
    "frame": "growth"
  },
  {
    "name": "りそな つみたてグローバル株式アクティブファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311198",
    "frame": "growth"
  },
  {
    "name": "りそな つみたて国内株式アクティブファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311205",
    "frame": "growth"
  },
  {
    "name": "りそな つみたてラップ型ファンド(安定型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31522C",
    "frame": "growth"
  },
  {
    "name": "りそな つみたてラップ型ファンド(安定成長型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31622C",
    "frame": "growth"
  },
  {
    "name": "りそな つみたてラップ型ファンド(成長型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31722C",
    "frame": "growth"
  },
  {
    "name": "りそな つみたてリスクコントロールファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31822C",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2035",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311194",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2040",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312183",
    "frame": "growth"
  },
  {
    "name": "りそな日経225インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311218",
    "frame": "growth"
  },
  {
    "name": "りそな日本中小型株式ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311189",
    "frame": "growth"
  },
  {
    "name": "りそなラップ型ファンド(安定型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311162",
    "frame": "growth"
  },
  {
    "name": "りそなラップ型ファンド(安定成長型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312162",
    "frame": "growth"
  },
  {
    "name": "ひふみ投信",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C31108A",
    "frame": "growth"
  },
  {
    "name": "ひふみプラス",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C311125",
    "frame": "growth"
  },
  {
    "name": "ひふみらいと",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C311213",
    "frame": "growth"
  },
  {
    "name": "まるごとひふみ100",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C314213",
    "frame": "growth"
  },
  {
    "name": "まるごとひふみ15",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C312213",
    "frame": "growth"
  },
  {
    "name": "まるごとひふみ50",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C313213",
    "frame": "growth"
  },
  {
    "name": "日本中小型成長株アクティブ・ファンド",
    "company": "BNYメロン・インベストメント・マネジメント・ジャパン株式会社",
    "fundCode": "8531213C",
    "frame": "growth"
  },
  {
    "name": "日本復活成長株ファンド",
    "company": "BNYメロン・インベストメント・マネジメント・ジャパン株式会社",
    "fundCode": "85311136",
    "frame": "growth"
  },
  {
    "name": "米国製造業株式ファンド",
    "company": "BNYメロン・インベストメント・マネジメント・ジャパン株式会社",
    "fundCode": "85311125",
    "frame": "growth"
  },
  {
    "name": "モビリティ・イノベーション・ファンド",
    "company": "BNYメロン・インベストメント・マネジメント・ジャパン株式会社",
    "fundCode": "85311181",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・TOPIXインデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312237",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・日経225インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311237",
    "frame": "growth"
  },
  {
    "name": "SBI小型成長株ファンド ジェイクール(愛称:jcool)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931105C",
    "frame": "growth"
  },
  {
    "name": "SBI中小型成長株ファンド ジェイネクスト(愛称:jnext)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311052",
    "frame": "growth"
  },
  {
    "name": "SBI中小型成長株ファンド ジェイネクスト(年2回決算型)愛称:jnextII",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931115C",
    "frame": "growth"
  },
  {
    "name": "SBI中小型割安成長株ファンド ジェイリバイブ(愛称:jrevive)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311067",
    "frame": "growth"
  },
  {
    "name": "SBI中小型割安成長株ファンド ジェイリバイブ(年2回決算型)/愛称:jreviveII",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311157",
    "frame": "growth"
  },
  {
    "name": "SBI日本小型成長株選抜ファンド(愛称:センバツ)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311143",
    "frame": "growth"
  },
  {
    "name": "SBI米国小型成長株ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931119B",
    "frame": "growth"
  },
  {
    "name": "アメリカン・ドリーム・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312076",
    "frame": "growth"
  },
  {
    "name": "香川県応援ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311065",
    "frame": "growth"
  },
  {
    "name": "くまもと未来応援ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311181",
    "frame": "growth"
  },
  {
    "name": "グローバル仮想世界株式戦略ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311223",
    "frame": "growth"
  },
  {
    "name": "福井県応援ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931105C",
    "frame": "growth"
  },
  {
    "name": "北陸みらい応援ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311231",
    "frame": "growth"
  },
  {
    "name": "三重県応援ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311059",
    "frame": "growth"
  },
  {
    "name": "FDA日米バランスファンド(安定型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531221A",
    "frame": "growth"
  },
  {
    "name": "FDA日米バランスファンド(成長型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531121A",
    "frame": "growth"
  },
  {
    "name": "FDA日米バランスファンド(積極型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311232",
    "frame": "growth"
  },
  {
    "name": "SOMPO123 先進国株式",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531121C",
    "frame": "growth"
  },
  {
    "name": "グローバル変動金利債券ファンド 円ヘッジありコース",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45314144",
    "frame": "growth"
  },
  {
    "name": "グローバル変動金利債券ファンド 円ヘッジなしコース",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45315144",
    "frame": "growth"
  },
  {
    "name": "好循環社会促進日本株ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531516A",
    "frame": "growth"
  },
  {
    "name": "好配当ジャパン・オープン",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311062",
    "frame": "growth"
  },
  {
    "name": "次世代金融テクノロジー株式ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311191",
    "frame": "growth"
  },
  {
    "name": "シンガポールREITファンド(資産成長型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531222B",
    "frame": "growth"
  },
  {
    "name": "スイス・グローバル・リーダー・ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312117",
    "frame": "growth"
  },
  {
    "name": "スイス・グローバル・リーダー・ファンド(為替ヘッジあり)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531116C",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン・エコ・オープン(配当利回り重視型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312084",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン・グリーン・オープン",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311999",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン-TCW外国株式ファンド Aコース(為替ヘッジあり)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311995",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン-TCW外国株式ファンド Bコース(為替ヘッジなし)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312995",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン外国債券ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45313007",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン外国債券ファンド(為替ヘッジなし)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45313059",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン拡大中国株投信",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311053",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン日本株オープン",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311987",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン日本株ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531199A",
    "frame": "growth"
  },
  {
    "name": "損保ジャパン日本債券ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312007",
    "frame": "growth"
  },
  {
    "name": "東洋・中国A株オープン「創新」",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311233",
    "frame": "growth"
  },
  {
    "name": "トルコ株式オープン",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311065",
    "frame": "growth"
  },
  {
    "name": "日本金融ハイブリッド証券オープン(年1回決算型) 円ヘッジありコース",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311166",
    "frame": "growth"
  },
  {
    "name": "日本金融ハイブリッド証券オープン(年1回決算型) 円ヘッジなしコース",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312166",
    "frame": "growth"
  },
  {
    "name": "ハッピーエイジング20",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45314007",
    "frame": "growth"
  },
  {
    "name": "ハッピーエイジング30",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45315007",
    "frame": "growth"
  },
  {
    "name": "ハッピーエイジング40",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45316007",
    "frame": "growth"
  },
  {
    "name": "ハッピーエイジング50",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45317007",
    "frame": "growth"
  },
  {
    "name": "ハッピーエイジング60",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45318007",
    "frame": "growth"
  },
  {
    "name": "みずほ好配当日本株オープン",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311056",
    "frame": "growth"
  },
  {
    "name": "みずほ好配当日本株オープン(年1回決算型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "4531113C",
    "frame": "growth"
  },
  {
    "name": "みずほ好配当日本株オープン(ノーロード型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311092",
    "frame": "growth"
  },
  {
    "name": "あおぞら・徹底分散グローバル・サステナビリティ株式ファンド",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE311225",
    "frame": "growth"
  },
  {
    "name": "あおぞら・日本株式フォーカス戦略ファンド",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE311153",
    "frame": "growth"
  },
  {
    "name": "One世界分散セレクト(Aコース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311189",
    "frame": "growth"
  },
  {
    "name": "One世界分散セレクト(Bコース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312189",
    "frame": "growth"
  },
  {
    "name": "投資のソムリエ",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731312A",
    "frame": "growth"
  },
  {
    "name": "みずほ豪ドル債券ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731D13A",
    "frame": "growth"
  },
  {
    "name": "リスク抑制世界8資産バランスファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731416A",
    "frame": "growth"
  },
  {
    "name": "アムンディ・ターゲット・ジャパン・ファンド",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311008",
    "frame": "growth"
  },
  {
    "name": "アムンディ・りそなインド・ファンド",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311061",
    "frame": "growth"
  },
  {
    "name": "日興ターゲット・ジャパン・ファンド",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311095",
    "frame": "growth"
  },
  {
    "name": "日興レジェンド・イーグル・ファンド(円ヘッジコース)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311113",
    "frame": "growth"
  },
  {
    "name": "日興レジェンド・イーグル・ファンド(資産成長コース)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311099",
    "frame": "growth"
  },
  {
    "name": "イタリア株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y31913C",
    "frame": "growth"
  },
  {
    "name": "インド株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y31522C",
    "frame": "growth"
  },
  {
    "name": "カレラ 米国小型株式アクティブファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y312177",
    "frame": "growth"
  },
  {
    "name": "グローバル食料株ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y316234",
    "frame": "growth"
  },
  {
    "name": "スイス株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y31212C",
    "frame": "growth"
  },
  {
    "name": "中欧株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y31317C",
    "frame": "growth"
  },
  {
    "name": "ニュージーランド株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y311127",
    "frame": "growth"
  },
  {
    "name": "しんきん3資産ファンド(1年決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931119A",
    "frame": "growth"
  },
  {
    "name": "しんきんJPX日経400オープン",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311146",
    "frame": "growth"
  },
  {
    "name": "しんきんJリートオープン(1年決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311141",
    "frame": "growth"
  },
  {
    "name": "しんきんS&P500インデックスファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311214",
    "frame": "growth"
  },
  {
    "name": "しんきんSRIファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931106C",
    "frame": "growth"
  },
  {
    "name": "しんきんUSバランス・プラスゴールド(1年決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311216",
    "frame": "growth"
  },
  {
    "name": "しんきんアジアETF株式ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311115",
    "frame": "growth"
  },
  {
    "name": "しんきんインデックスファンド225",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311991",
    "frame": "growth"
  },
  {
    "name": "しんきんグローバル6資産ファンド(1年決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931219A",
    "frame": "growth"
  },
  {
    "name": "しんきん公共債ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311102",
    "frame": "growth"
  },
  {
    "name": "しんきん好配当利回り株ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59312028",
    "frame": "growth"
  },
  {
    "name": "しんきん好配当利回り株ファンド(3ヵ月決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311063",
    "frame": "growth"
  },
  {
    "name": "しんきん国内債券ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311028",
    "frame": "growth"
  },
  {
    "name": "しんきん世界アロケーションファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931113A",
    "frame": "growth"
  },
  {
    "name": "しんきん世界アロケーションファンド(積極型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311162",
    "frame": "growth"
  },
  {
    "name": "しんきん世界好配当利回り株ファンド(1年決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931118B",
    "frame": "growth"
  },
  {
    "name": "しんきん全世界株式インデックスファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931222A",
    "frame": "growth"
  },
  {
    "name": "しんきんトピックスオープン",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311007",
    "frame": "growth"
  },
  {
    "name": "しんきん日経平均オープン",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311159",
    "frame": "growth"
  },
  {
    "name": "しんきんノーロード日経225",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931117A",
    "frame": "growth"
  },
  {
    "name": "しんきん米国ウォーターファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931122A",
    "frame": "growth"
  },
  {
    "name": "社会課題解決応援ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431118C",
    "frame": "growth"
  },
  {
    "name": "女性活躍応援ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311153",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス グローバル・テクノロジー株式ファンド Aコース(為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW311209",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス グローバル・テクノロジー株式ファンド Bコース(為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW312209",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 世界厳選成長株式ファンド Aコース(資産成長型・為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW312195",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 世界厳選成長株式ファンド Bコース(資産成長型・為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW313195",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 世界厳選成長株式ファンド Cコース(分配重視型・為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW314195",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 世界厳選成長株式ファンド Dコース(分配重視型・為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW315195",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国オールキャップ株式ファンド",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW31122B",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国成長株式ファンド",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW31119C",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国中小型株式ファンド Aコース(為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW311234",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国中小型株式ファンド Bコース(為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW312234",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国割安優良株式ファンド Aコース(為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW311219",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国割安優良株式ファンド Bコース(為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW312219",
    "frame": "growth"
  },
  {
    "name": "アジア好配当株投信",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131106B",
    "frame": "growth"
  },
  {
    "name": "京都・滋賀インデックス ファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131105B",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイインカム・ストック・ファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131203B",
    "frame": "growth"
  },
  {
    "name": "グローバル・バリュー・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131496B",
    "frame": "growth"
  },
  {
    "name": "グローバルESGバランスファンド(為替ヘッジあり)隔月分配型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131520B",
    "frame": "growth"
  },
  {
    "name": "グローバルESGバランスファンド(為替ヘッジあり)年2回決算型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131320B",
    "frame": "growth"
  },
  {
    "name": "グローバルESGバランスファンド(為替ヘッジなし)隔月分配型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131620B",
    "frame": "growth"
  },
  {
    "name": "グローバルESGバランスファンド(為替ヘッジなし)年2回決算型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131420B",
    "frame": "growth"
  },
  {
    "name": "グローバルREITオープン(資産成長型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01317144",
    "frame": "growth"
  },
  {
    "name": "小型ブルーチップオープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01316967",
    "frame": "growth"
  },
  {
    "name": "情報エレクトロニクスファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311842",
    "frame": "growth"
  },
  {
    "name": "ストラテジック・バリュー・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311007",
    "frame": "growth"
  },
  {
    "name": "脱炭素ジャパン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313218",
    "frame": "growth"
  },
  {
    "name": "ノムラ・アジア・シリーズ(ノムラ・印度・フォーカス)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131E099",
    "frame": "growth"
  },
  {
    "name": "野村ACI先進医療インパクト投資 Aコース 為替ヘッジあり 資産成長型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131218A",
    "frame": "growth"
  },
  {
    "name": "野村ACI先進医療インパクト投資 Bコース 為替ヘッジなし 資産成長型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131318A",
    "frame": "growth"
  },
  {
    "name": "野村Jリートファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314133",
    "frame": "growth"
  },
  {
    "name": "野村アクア投資 Aコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313078",
    "frame": "growth"
  },
  {
    "name": "野村アクア投資 Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314078",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・外国REIT",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131B10B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・外国REIT・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01315139",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・外国債券・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314139",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・新興国債券",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131710B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・新興国債券・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131810B",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・米国ハイ・イールド債券",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311167",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・米国ハイ・イールド債券・為替ヘッジ型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312167",
    "frame": "growth"
  },
  {
    "name": "野村インド株投資",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312056",
    "frame": "growth"
  },
  {
    "name": "野村クラウド関連株式投信 Aコース(為替ヘッジあり)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311104",
    "frame": "growth"
  },
  {
    "name": "野村クラウド関連株式投信 Bコース(為替ヘッジなし)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312104",
    "frame": "growth"
  },
  {
    "name": "野村グローバルAI関連株式ファンド Aコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312172",
    "frame": "growth"
  },
  {
    "name": "野村グローバルAI関連株式ファンド Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313172",
    "frame": "growth"
  },
  {
    "name": "野村サステナブルセレクト(世界株式型 Aコース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311227",
    "frame": "growth"
  },
  {
    "name": "野村サステナブルセレクト(世界株式型 Bコース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312227",
    "frame": "growth"
  },
  {
    "name": "野村サステナブルセレクト(世界バランス型 Aコース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313227",
    "frame": "growth"
  },
  {
    "name": "野村サステナブルセレクト(世界バランス型 Bコース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314227",
    "frame": "growth"
  },
  {
    "name": "野村世界6資産分散投信(安定コース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131205A",
    "frame": "growth"
  },
  {
    "name": "野村世界6資産分散投信(成長コース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131405A",
    "frame": "growth"
  },
  {
    "name": "野村世界6資産分散投信(配分変更コース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311159",
    "frame": "growth"
  },
  {
    "name": "野村世界6資産分散投信(分配コース)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131305A",
    "frame": "growth"
  },
  {
    "name": "野村世界業種別投資シリーズ(世界半導体株投資)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313098",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(積極型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314103",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(普通型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313103",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(保守型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312103",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(やや積極型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131516B",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(やや保守型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131416B",
    "frame": "growth"
  },
  {
    "name": "野村日本割安低位株オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311182",
    "frame": "growth"
  },
  {
    "name": "野村米国好利回り社債投信 Aコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131206B",
    "frame": "growth"
  },
  {
    "name": "野村米国好利回り社債投信 Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131306B",
    "frame": "growth"
  },
  {
    "name": "野村未来トレンド発見ファンド Aコース(為替ヘッジあり)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131F176",
    "frame": "growth"
  },
  {
    "name": "野村未来トレンド発見ファンド Bコース(為替ヘッジなし)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131315B",
    "frame": "growth"
  },
  {
    "name": "米国株式配当貴族(年4回決算型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131318B",
    "frame": "growth"
  },
  {
    "name": "米国バリュー・ストラテジー・ファンド Aコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131216B",
    "frame": "growth"
  },
  {
    "name": "米国バリュー・ストラテジー・ファンド Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131316B",
    "frame": "growth"
  },
  {
    "name": "マイ・ロード",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311114",
    "frame": "growth"
  },
  {
    "name": "マイライフ・エール(資産成長型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313228",
    "frame": "growth"
  },
  {
    "name": "マイライフ・エール(年2%目標払出型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314228",
    "frame": "growth"
  },
  {
    "name": "マイライフ・エール(年6%目標払出型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01315228",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー グローバル・サステイン戦略ファンド(為替ヘッジあり)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312202",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー グローバル・サステイン戦略ファンド(為替ヘッジなし)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313202",
    "frame": "growth"
  },
  {
    "name": "世の中を良くする企業ファンド(野村日本株ESG投資)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311218",
    "frame": "growth"
  },
  {
    "name": "iTrustインカム株式(為替ヘッジなし)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312195",
    "frame": "growth"
  },
  {
    "name": "iTrustインド株式",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311184",
    "frame": "growth"
  },
  {
    "name": "iTrustエコイノベーション",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311179",
    "frame": "growth"
  },
  {
    "name": "iTrust世界株式",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42313162",
    "frame": "growth"
  },
  {
    "name": "iTrustセキュリティ",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "4231118C",
    "frame": "growth"
  },
  {
    "name": "iTrustバイオ",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312162",
    "frame": "growth"
  },
  {
    "name": "iTrustプレミアム・ブランド",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42313177",
    "frame": "growth"
  },
  {
    "name": "iTrustロボ",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311162",
    "frame": "growth"
  },
  {
    "name": "ピクテ・アセット・アロケーション・ファンド(1年決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311131",
    "frame": "growth"
  },
  {
    "name": "ピクテ・エコディスカバリー・アロケーション・ファンド(年2回決算型)為替ヘッジあり",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312188",
    "frame": "growth"
  },
  {
    "name": "ピクテ・エコディスカバリー・アロケーション・ファンド(年2回決算型)為替ヘッジなし",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "4231109B",
    "frame": "growth"
  },
  {
    "name": "ピクテ・グローイング新興国株式ファンド(1年決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312234",
    "frame": "growth"
  },
  {
    "name": "ピクテ・グローバル・インカム株式ファンド(1年決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "4231108A",
    "frame": "growth"
  },
  {
    "name": "ピクテ・グローバル・インカム株式ファンド(1年決算型)フレックス・コース",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312147",
    "frame": "growth"
  },
  {
    "name": "ピクテ・ゴールデン・リスクプレミアム・ファンド",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311206",
    "frame": "growth"
  },
  {
    "name": "ピクテ・ゴールド(為替ヘッジなし)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312199",
    "frame": "growth"
  },
  {
    "name": "ピクテ・ゴ-ルド(為替ヘッジあり)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "4231111C",
    "frame": "growth"
  },
  {
    "name": "ピクテ・セキュリティ・ファンド(為替ヘッジあり)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42314177",
    "frame": "growth"
  },
  {
    "name": "ピクテ・セキュリティ・ファンド(為替ヘッジなし)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42314162",
    "frame": "growth"
  },
  {
    "name": "ピクテ・バイオ医薬品ファンド(1年決算型)円コース",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311004",
    "frame": "growth"
  },
  {
    "name": "ピクテ・バイオ医薬品ファンド(1年決算型)為替ヘッジなしコース",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311171",
    "frame": "growth"
  },
  {
    "name": "ピクテ・プレミアム・ブランド・ファンド(3ヵ月決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311066",
    "frame": "growth"
  },
  {
    "name": "ピクテ・メジャー・プレイヤーズ・ファンド(3ヵ月決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312075",
    "frame": "growth"
  },
  {
    "name": "ピクテ資源国ソブリン・ファンド(1年決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312139",
    "frame": "growth"
  },
  {
    "name": "ピクテ新興国インカム株式ファンド(1年決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "4231113A",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・USリート・ファンド(隔月決算型)(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311236",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・アメリカ地方債ファンド(為替ヘッジあり)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53311226",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・アメリカ地方債ファンド(為替ヘッジなし)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53312226",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・オーストラリア高配当株ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53311136",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・オーストラリア債券ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "5331113A",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・グローバル・プレミア小型株ファンド(年1回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "5331118C",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・グローバル・プレミア小型株ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "5331218C",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・豪州インカム資産ファンド(隔月分配型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53311191",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・豪州インカム資産ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53312152",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・ニュージーランド債券ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53312142",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・ブラジル国債ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "5331208A",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・米国連続増配株ファンド(3ヵ月決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53312175",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・米国連続増配株ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53311175",
    "frame": "growth"
  },
  {
    "name": "アジア未来成長株式ファンド",
    "company": "ベアリングス・ジャパン株式会社",
    "fundCode": "33311963",
    "frame": "growth"
  },
  {
    "name": "アジア未来成長株式ファンド(3ヵ月決算型)",
    "company": "ベアリングス・ジャパン株式会社",
    "fundCode": "33311079",
    "frame": "growth"
  },
  {
    "name": "Jリート・アジアミックス・オープン(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931413A",
    "frame": "growth"
  },
  {
    "name": "ROE向上・日本厳選株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314156",
    "frame": "growth"
  },
  {
    "name": "SMAMベトナム株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311186",
    "frame": "growth"
  },
  {
    "name": "SMBC円資産ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931715B",
    "frame": "growth"
  },
  {
    "name": "アクティブ元年・日本株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311192",
    "frame": "growth"
  },
  {
    "name": "アジアGX関連株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312215",
    "frame": "growth"
  },
  {
    "name": "アジア好配当株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313073",
    "frame": "growth"
  },
  {
    "name": "アジア好利回りリート・ファンド(年1回決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79316156",
    "frame": "growth"
  },
  {
    "name": "外国株式指数ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931A09A",
    "frame": "growth"
  },
  {
    "name": "京都企業株式ファンド(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931120B",
    "frame": "growth"
  },
  {
    "name": "京都企業株式ファンド(予想分配金提示型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931220B",
    "frame": "growth"
  },
  {
    "name": "グローバルGX関連株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311215",
    "frame": "growth"
  },
  {
    "name": "コーポレート・ボンド・インカム(為替ノーヘッジ型/1年決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315138",
    "frame": "growth"
  },
  {
    "name": "コーポレート・ボンド・インカム(為替ヘッジ型/1年決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314138",
    "frame": "growth"
  },
  {
    "name": "国内株式指数ファンド(TOPIX)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931809A",
    "frame": "growth"
  },
  {
    "name": "世界新時代株式ファンド(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79317207",
    "frame": "growth"
  },
  {
    "name": "チャイナ騰飛(チャイナ・エクイティ・オープン)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313041",
    "frame": "growth"
  },
  {
    "name": "トヨタ自動車/トヨタグループ株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931603B",
    "frame": "growth"
  },
  {
    "name": "ニッポン中小型株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313142",
    "frame": "growth"
  },
  {
    "name": "ひとくふう先進国リートファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931316B",
    "frame": "growth"
  },
  {
    "name": "ベトナム株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312107",
    "frame": "growth"
  },
  {
    "name": "マイ・ウェイ・ジャパン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313165",
    "frame": "growth"
  },
  {
    "name": "三井住友・225オープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931198B",
    "frame": "growth"
  },
  {
    "name": "三井住友・DCつみたてNISA・全海外株インデックスファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311114",
    "frame": "growth"
  },
  {
    "name": "三井住友・DCつみたてNISA・日本株インデックスファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931211C",
    "frame": "growth"
  },
  {
    "name": "三井住友・NYダウ・ジョーンズ・インデックスオープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315141",
    "frame": "growth"
  },
  {
    "name": "三井住友・NYダウ・ジョーンズ・インデックスファンド(為替ノーヘッジ型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312141",
    "frame": "growth"
  },
  {
    "name": "三井住友・NYダウ・ジョーンズ指数オープン(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314146",
    "frame": "growth"
  },
  {
    "name": "三井住友・NYダウ・ジョーンズ指数オープン(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315146",
    "frame": "growth"
  },
  {
    "name": "三井住友・げんきシニアライフ・オ-プン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311005",
    "frame": "growth"
  },
  {
    "name": "三井住友・資産最適化ファンド(1安定重視型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312179",
    "frame": "growth"
  },
  {
    "name": "三井住友・資産最適化ファンド(2やや安定型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313179",
    "frame": "growth"
  },
  {
    "name": "三井住友・資産最適化ファンド(3バランス型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314179",
    "frame": "growth"
  },
  {
    "name": "三井住友・資産最適化ファンド(4やや成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315179",
    "frame": "growth"
  },
  {
    "name": "三井住友・資産最適化ファンド(5成長重視型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79316179",
    "frame": "growth"
  },
  {
    "name": "三井住友・中小型株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311039",
    "frame": "growth"
  },
  {
    "name": "三井住友・配当フォーカスオープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312046",
    "frame": "growth"
  },
  {
    "name": "三井住友DS日本バリュー株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314997",
    "frame": "growth"
  },
  {
    "name": "大和住銀日本小型株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313046",
    "frame": "growth"
  },
  {
    "name": "ワールド・リゾート関連株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311148",
    "frame": "growth"
  },
  {
    "name": "半導体関連 世界株式戦略ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311237",
    "frame": "growth"
  },
  {
    "name": "グローバルAZファンド Aコース",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311215",
    "frame": "growth"
  },
  {
    "name": "グローバルAZファンド Bコース",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312215",
    "frame": "growth"
  },
  {
    "name": "グローバルAZファンド Cコース",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313215",
    "frame": "growth"
  },
  {
    "name": "グローバルAZファンド Dコース",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314215",
    "frame": "growth"
  },
  {
    "name": "グローバルAZファンド Eコース",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I315215",
    "frame": "growth"
  },
  {
    "name": "楽天・インカム戦略ポートフォリオ(奇数月決算型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314187",
    "frame": "growth"
  },
  {
    "name": "楽天・インカム戦略ポートフォリオ・アルファ(奇数月決算型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I316187",
    "frame": "growth"
  },
  {
    "name": "楽天・インデックス・バランス・ファンド(株式重視型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311187",
    "frame": "growth"
  },
  {
    "name": "楽天・インデックス・バランス・ファンド(均等型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312187",
    "frame": "growth"
  },
  {
    "name": "楽天・インデックス・バランス・ファンド(債券重視型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313187",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンド(がっちりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I315216",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンド(しっかりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314216",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンド(じっくりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312216",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンド(なかなかコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313216",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンド(のんびりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311216",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンドぷらす+(がっちりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I315227",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンドぷらす+(しっかりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314227",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンドぷらす+(じっくりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312227",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンドぷらす+(なかなかコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313227",
    "frame": "growth"
  },
  {
    "name": "楽天・資産づくりファンドぷらす+(のんびりコース)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311227",
    "frame": "growth"
  },
  {
    "name": "楽天・新興国株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31117B",
    "frame": "growth"
  },
  {
    "name": "楽天・全世界株式(除く米国)インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31122C",
    "frame": "growth"
  },
  {
    "name": "楽天・全世界株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311179",
    "frame": "growth"
  },
  {
    "name": "楽天・全世界債券インデックス(為替ヘッジ)ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311192",
    "frame": "growth"
  },
  {
    "name": "楽天・全米株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312179",
    "frame": "growth"
  },
  {
    "name": "楽天・日本株マイクロキャップ・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311206",
    "frame": "growth"
  },
  {
    "name": "楽天・米国高配当株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311181",
    "frame": "growth"
  },
  {
    "name": "楽天J-REIT・オルタナティブデータ・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31321B",
    "frame": "growth"
  },
  {
    "name": "楽天グローバル・バランス(安定型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311098",
    "frame": "growth"
  },
  {
    "name": "楽天グローバル・バランス(成長型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312098",
    "frame": "growth"
  },
  {
    "name": "楽天グローバル・バランス(積極型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313098",
    "frame": "growth"
  },
  {
    "name": "楽天グローバルIPO株式ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31221B",
    "frame": "growth"
  },
  {
    "name": "シェール関連株オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312134",
    "frame": "growth"
  },
  {
    "name": "次世代モビリティオープン(為替ヘッジあり)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09313183",
    "frame": "growth"
  },
  {
    "name": "次世代モビリティオープン(為替ヘッジなし)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09314183",
    "frame": "growth"
  },
  {
    "name": "新経済成長ジャパン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312136",
    "frame": "growth"
  },
  {
    "name": "チャイナ・ロード",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311041",
    "frame": "growth"
  },
  {
    "name": "中国人民元ソブリンオープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931118A",
    "frame": "growth"
  },
  {
    "name": "日系外債オープン(為替ヘッジあり)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311194",
    "frame": "growth"
  },
  {
    "name": "日系外債オープン(為替ヘッジなし)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312194",
    "frame": "growth"
  },
  {
    "name": "日本Jリートオープン(1年決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931213B",
    "frame": "growth"
  },
  {
    "name": "日本インデックスオープン225",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311009",
    "frame": "growth"
  },
  {
    "name": "日本株式・Jリートバランスファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311179",
    "frame": "growth"
  },
  {
    "name": "日本好配当リバランスオープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312053",
    "frame": "growth"
  },
  {
    "name": "日本ニューテクノロジー・オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931110C",
    "frame": "growth"
  },
  {
    "name": "日本バリュースターオープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931105B",
    "frame": "growth"
  },
  {
    "name": "日本連続増配成長株オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931115C",
    "frame": "growth"
  },
  {
    "name": "米国ネクストビジョンファンド(為替ヘッジあり)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931121A",
    "frame": "growth"
  },
  {
    "name": "米国ネクストビジョンファンド(為替ヘッジなし)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931221A",
    "frame": "growth"
  },
  {
    "name": "米国バイオ&テクノロジー株オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312153",
    "frame": "growth"
  },
  {
    "name": "米国連続増配成長株オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311139",
    "frame": "growth"
  },
  {
    "name": "米国連続増配成長株オープン(3ヵ月決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311163",
    "frame": "growth"
  },
  {
    "name": "ワールド・リート・セレクション(アジア)(年2回決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311136",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・日本配当成長株・ファンド(分配重視型)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313059",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・米国株式ファンドCコース(分配重視型・為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32314185",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・米国株式ファンドDコース(分配重視型・為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32315185",
    "frame": "growth"
  },
  {
    "name": "HSBC BICsオープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311059",
    "frame": "growth"
  },
  {
    "name": "HSBC ESG米国株式インデックスファンド",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131120B",
    "frame": "growth"
  },
  {
    "name": "HSBC アジア・プラス",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311075",
    "frame": "growth"
  },
  {
    "name": "HSBC アジア・プラス(3ヶ月決算型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51312075",
    "frame": "growth"
  },
  {
    "name": "HSBC インド・インフラ株式オープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131109A",
    "frame": "growth"
  },
  {
    "name": "HSBC インドオープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131104B",
    "frame": "growth"
  },
  {
    "name": "HSBC インド株式ファンド(3ヶ月決算型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51312079",
    "frame": "growth"
  },
  {
    "name": "HSBC インド債券オープン(1年決算型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311156",
    "frame": "growth"
  },
  {
    "name": "HSBC 新BICsファンド",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311066",
    "frame": "growth"
  },
  {
    "name": "HSBC 世界資源エネルギーオープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51312073",
    "frame": "growth"
  },
  {
    "name": "HSBC 世界資産選抜収穫コース(予想分配金提示型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51312191",
    "frame": "growth"
  },
  {
    "name": "HSBC 世界資産選抜充実生活コース(定率払出型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311201",
    "frame": "growth"
  },
  {
    "name": "HSBC 世界資産選抜育てるコース(資産形成型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311191",
    "frame": "growth"
  },
  {
    "name": "HSBC チャイナオープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311021",
    "frame": "growth"
  },
  {
    "name": "HSBC 中国株式ファンド(3ヶ月決算型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311065",
    "frame": "growth"
  },
  {
    "name": "HSBC ブラジルオープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311063",
    "frame": "growth"
  },
  {
    "name": "HSBC ブラジル株式ファンド(3ヶ月決算型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311087",
    "frame": "growth"
  },
  {
    "name": "HSBC ワールド・セレクション(安定コース)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311159",
    "frame": "growth"
  },
  {
    "name": "HSBC ワールド・セレクション(安定成長コース)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51312159",
    "frame": "growth"
  },
  {
    "name": "HSBC ワールド・セレクション(インカムコース)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311184",
    "frame": "growth"
  },
  {
    "name": "HSBC ワールド・セレクション(成長コース)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51313159",
    "frame": "growth"
  },
  {
    "name": "JPMグローバル医療関連株式ファンド",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17312137",
    "frame": "growth"
  },
  {
    "name": "アジア・オセアニア債券オープン(1年決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931113B",
    "frame": "growth"
  },
  {
    "name": "岡三フィデリティ・グローバル・コア株式ファンド(為替ヘッジあり)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312229",
    "frame": "growth"
  },
  {
    "name": "岡三フィデリティ・グローバル・コア株式ファンド(為替ヘッジなし)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311229",
    "frame": "growth"
  },
  {
    "name": "新興国連続増配成長株オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312126",
    "frame": "growth"
  },
  {
    "name": "日本中小型成長株ファンド(実績報酬型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312237",
    "frame": "growth"
  },
  {
    "name": "三重県応援・債券ファンド(1年決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311141",
    "frame": "growth"
  },
  {
    "name": "MHAM米国好配当株式ファンド(年1回決算型)為替ヘッジあり",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47319139",
    "frame": "growth"
  },
  {
    "name": "MHAM米国好配当株式ファンド(年1回決算型)為替ヘッジなし",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731B139",
    "frame": "growth"
  },
  {
    "name": "グローバル・セキュリティ株式ファンド(3ヵ月決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731H15C",
    "frame": "growth"
  },
  {
    "name": "グローバル・セキュリティ株式ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731I15C",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイクオリティ成長株式ファンド(限定為替ヘッジ)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315169",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイクオリティ成長株式ファンド(年2回決算型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312188",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイクオリティ成長株式ファンド(年2回決算型)(限定為替ヘッジ)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311188",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイクオリティ成長株式ファンド(予想分配金提示型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731221A",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイクオリティ成長株式ファンド(予想分配金提示型)(限定為替ヘッジ)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731121A",
    "frame": "growth"
  },
  {
    "name": "グローバルESGハイクオリティ成長株式ファンド(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311207",
    "frame": "growth"
  },
  {
    "name": "新光 US-REIT オープン(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731E13A",
    "frame": "growth"
  },
  {
    "name": "新興国ハイクオリティ成長株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731117C",
    "frame": "growth"
  },
  {
    "name": "先進国投資適格債券ファンド(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318153",
    "frame": "growth"
  },
  {
    "name": "先進国ハイクオリティ成長株式ファンド(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314191",
    "frame": "growth"
  },
  {
    "name": "先進国ハイクオリティ成長株式ファンド(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315191",
    "frame": "growth"
  },
  {
    "name": "ファンドスミス・グローバル・エクイティ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731321C",
    "frame": "growth"
  },
  {
    "name": "フィッシャー・グローバル・スモールキャップ・エクイティ・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731118A",
    "frame": "growth"
  },
  {
    "name": "フィッシャーUSマイクロ株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314158",
    "frame": "growth"
  },
  {
    "name": "米国小型バリュー株ファンド Aコース(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47319157",
    "frame": "growth"
  },
  {
    "name": "米国小型バリュー株ファンド Bコース(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731A157",
    "frame": "growth"
  },
  {
    "name": "みずほUSハイイールドオープン(年1回決算型)為替ヘッジあり",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731C139",
    "frame": "growth"
  },
  {
    "name": "みずほUSハイイールドオープン(年1回決算型)為替ヘッジなし",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731D139",
    "frame": "growth"
  },
  {
    "name": "メディカル・サイエンス・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311148",
    "frame": "growth"
  },
  {
    "name": "ワールド・インフラ好配当株式ファンド(成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47319127",
    "frame": "growth"
  },
  {
    "name": "ワールド・バリュー・アロケーションAコース(為替ヘッジあり)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311127",
    "frame": "growth"
  },
  {
    "name": "ワールド・バリュー・アロケーションBコース(為替ヘッジなし)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58312127",
    "frame": "growth"
  },
  {
    "name": "いちよし・インベスコ 世界中小型成長株ファンド",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD311179",
    "frame": "growth"
  },
  {
    "name": "いちよしSDGs中小型株ファンド",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD311208",
    "frame": "growth"
  },
  {
    "name": "いちよしインフラ関連成長株ファンド",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD31114C",
    "frame": "growth"
  },
  {
    "name": "いちよしジャパン成長株ファンド",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD311187",
    "frame": "growth"
  },
  {
    "name": "いちよし中小型成長株ファンド",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD311166",
    "frame": "growth"
  },
  {
    "name": "いちよし日本好配当株&Jリートファンド 資産成長型",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD311172",
    "frame": "growth"
  },
  {
    "name": "いちよし日本好配当株&Jリートファンド 年4回決算型",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD312172",
    "frame": "growth"
  },
  {
    "name": "THEOインカム・AIファンド(世界の債券中心)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR312185",
    "frame": "growth"
  },
  {
    "name": "THEOベスト・バランス・ファンド",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR31121A",
    "frame": "growth"
  },
  {
    "name": "お金のデザイン・エッセンシャル・プロダクツ・ファンド",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR311229",
    "frame": "growth"
  },
  {
    "name": "お金のデザイン・グローバル・ソーシャル・デベロップメント・ファンド",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR31121B",
    "frame": "growth"
  },
  {
    "name": "お金のデザイン・グローバル・リアルアセット・ファンド(世界の実物資産中心)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR31119C",
    "frame": "growth"
  },
  {
    "name": "おまかせ運用インカム・ファンド(世界の債券中心)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR312173",
    "frame": "growth"
  },
  {
    "name": "おまかせ運用インフレヘッジ・ファンド(世界の実物資産中心)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR313173",
    "frame": "growth"
  },
  {
    "name": "おまかせ運用グロース・ファンド(世界の株式中心)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR311173",
    "frame": "growth"
  },
  {
    "name": "CAMベトナムファンド",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311108",
    "frame": "growth"
  },
  {
    "name": "世界ツーリズム株式ファンド",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311196",
    "frame": "growth"
  },
  {
    "name": "フィリピン株ファンド",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311105",
    "frame": "growth"
  },
  {
    "name": "GS日本株式インデックス・プラス",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531105A",
    "frame": "growth"
  },
  {
    "name": "GSワールド・シフト株式ファンドAコース(限定為替ヘッジ)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312236",
    "frame": "growth"
  },
  {
    "name": "GSワールド・シフト株式ファンドBコース(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35313236",
    "frame": "growth"
  },
  {
    "name": "しんきんG7外国債券インデックスファンド(3ヵ月決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931123A",
    "frame": "growth"
  },
  {
    "name": "しんきんJリートオープン(隔月決算型)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311239",
    "frame": "growth"
  },
  {
    "name": "しんきんみんなの日本株ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "5931223A",
    "frame": "growth"
  },
  {
    "name": "グローバルESG株式インデックスファンド",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311217",
    "frame": "growth"
  },
  {
    "name": "ジャパンESGクオリティ200インデックスファンド",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311203",
    "frame": "growth"
  },
  {
    "name": "日本株好配当ファンド(年1回決算型)",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH312167",
    "frame": "growth"
  },
  {
    "name": "日本株好配当ファンド(年2回決算型)",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311167",
    "frame": "growth"
  },
  {
    "name": "日本中小型株ファンド",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311177",
    "frame": "growth"
  },
  {
    "name": "分散名人",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311185",
    "frame": "growth"
  },
  {
    "name": "分散名人(国内重視型)",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH312191",
    "frame": "growth"
  },
  {
    "name": "せとうち応援株式ファンド",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W31122C",
    "frame": "growth"
  },
  {
    "name": "先進国資産配分コントロールファンド<安定型>",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W311164",
    "frame": "growth"
  },
  {
    "name": "先進国資産配分コントロールファンド<成長型>",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W312164",
    "frame": "growth"
  },
  {
    "name": "ちゅうぎん日経225インデックスファンド",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W311125",
    "frame": "growth"
  },
  {
    "name": "ちゅうぎん日本大型株アクティブファンド",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W311151",
    "frame": "growth"
  },
  {
    "name": "つみたて日経225インデックスファンド",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W311222",
    "frame": "growth"
  },
  {
    "name": "DWSグローバル公益債券ファンド(年1回決算型)Cコース(為替ヘッジあり)",
    "company": "ドイチェ・アセット・マネジメント株式会社",
    "fundCode": "34311137",
    "frame": "growth"
  },
  {
    "name": "DWSグローバル公益債券ファンド(年1回決算型)Dコース(為替ヘッジなし)",
    "company": "ドイチェ・アセット・マネジメント株式会社",
    "fundCode": "34312137",
    "frame": "growth"
  },
  {
    "name": "DWSユーロ・ハイ・イールド債券ファンド(年1回決算型)Cコース(円ヘッジあり)",
    "company": "ドイチェ・アセット・マネジメント株式会社",
    "fundCode": "3431117B",
    "frame": "growth"
  },
  {
    "name": "DWSユーロ・ハイ・イールド債券ファンド(年1回決算型)Dコース(円ヘッジなし)",
    "company": "ドイチェ・アセット・マネジメント株式会社",
    "fundCode": "3431217B",
    "frame": "growth"
  },
  {
    "name": "ドイチェ・ETFバランス・ファンド",
    "company": "ドイチェ・アセット・マネジメント株式会社",
    "fundCode": "3431117C",
    "frame": "growth"
  },
  {
    "name": "JA日本債券ファンド",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "2531200C",
    "frame": "growth"
  },
  {
    "name": "農中日経225オープン",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "2531198B",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>J-REITインデックスファンド(年1回決算型)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312193",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>長期厳選投資 おおぶね",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311177",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>米国株式 S&P500 インデックスファンド",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311193",
    "frame": "growth"
  },
  {
    "name": "ウエリントン・企業価値共創世界株ファンド Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312238",
    "frame": "growth"
  },
  {
    "name": "グローバル・ストック Aコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131115C",
    "frame": "growth"
  },
  {
    "name": "グローバル・ストック Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131215C",
    "frame": "growth"
  },
  {
    "name": "はじめてのNISA・新興国株式インデックス",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01315237",
    "frame": "growth"
  },
  {
    "name": "はじめてのNISA・全世界株式インデックス(オール・カントリー)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312237",
    "frame": "growth"
  },
  {
    "name": "はじめてのNISA・日本株式インデックス(TOPIX)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314237",
    "frame": "growth"
  },
  {
    "name": "はじめてのNISA・日本株式インデックス(日経225)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313237",
    "frame": "growth"
  },
  {
    "name": "はじめてのNISA・米国株式インデックス(S&P500)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311237",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ・キャピタル証券ファンド(為替ヘッジあり)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40311159",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ・キャピタル証券ファンド(為替ヘッジなし)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40312159",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ・グローバル・テクノロジー・インフラ・ファンド",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40311181",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ・グローバル・テクノロジー・インフラ・ファンド(3ヵ月決算型)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40311201",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ・グローバル・テクノロジー・インフラ・ファンド<為替ヘッジあり>",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40312201",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ日本住宅金融支援機構債ファンド",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40311124",
    "frame": "growth"
  },
  {
    "name": "ピクテ・グローバル・インカム債券ファンド(1年決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42313238",
    "frame": "growth"
  },
  {
    "name": "ピクテ・グローバル・インカム債券ファンド(隔月決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312238",
    "frame": "growth"
  },
  {
    "name": "ピクテ・プレミアム・アセット・アロケーション・ファンド",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311239",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・Jリート・アクティブ・ファンド(隔月決算型)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311237",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・ロイヤル・コア・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311239",
    "frame": "growth"
  },
  {
    "name": "iシェアーズ 米国株式(S&P500)インデックス・ファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831C139",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・インデックス投資戦略ファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311145",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・インド株ファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831105C",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・ゴールド・ファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311032",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・ゴールド・メタル・オープンAコース",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311952",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・ゴールド・メタル・オープンBコース",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48312952",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・つみたて・グローバルバランスファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311181",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・ヘルスサイエンス・ファンド(為替ヘッジあり)",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831O139",
    "frame": "growth"
  },
  {
    "name": "ブラックロック・ヘルスサイエンス・ファンド(為替ヘッジなし)",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831N139",
    "frame": "growth"
  },
  {
    "name": "ブラックロックESG世界株式ファンド(限定為替ヘッジあり)",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48312159",
    "frame": "growth"
  },
  {
    "name": "USマイクロキャップ株式ファンド",
    "company": "ベイビュー・アセット・マネジメント株式会社",
    "fundCode": "9M311192",
    "frame": "growth"
  },
  {
    "name": "MFS米国中型成長株式ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313212",
    "frame": "growth"
  },
  {
    "name": "MFS米国中型成長株式ファンド(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314212",
    "frame": "growth"
  },
  {
    "name": "TTI・エマージング厳選株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311238",
    "frame": "growth"
  },
  {
    "name": "USテクノロジー・イノベーターズ・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311162",
    "frame": "growth"
  },
  {
    "name": "USテクノロジー・イノベーターズ・ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931116B",
    "frame": "growth"
  },
  {
    "name": "エス・ビー・日本株オープン225",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311963",
    "frame": "growth"
  },
  {
    "name": "グローバル・ベスト・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315069",
    "frame": "growth"
  },
  {
    "name": "グローバルAIファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311169",
    "frame": "growth"
  },
  {
    "name": "グローバルAIファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311172",
    "frame": "growth"
  },
  {
    "name": "グローバルDX関連株式ファンド(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79318209",
    "frame": "growth"
  },
  {
    "name": "グローバルEV関連株ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314181",
    "frame": "growth"
  },
  {
    "name": "グローバルEV関連株ファンド(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315181",
    "frame": "growth"
  },
  {
    "name": "グローバルSDGs株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313191",
    "frame": "growth"
  },
  {
    "name": "グローバル自動運転関連株式ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311174",
    "frame": "growth"
  },
  {
    "name": "グローバル自動運転関連株式ファンド(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312174",
    "frame": "growth"
  },
  {
    "name": "高成長インド・中型株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311118",
    "frame": "growth"
  },
  {
    "name": "高成長インド・中型株式ファンド(年1回決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931117B",
    "frame": "growth"
  },
  {
    "name": "人生100年時代・世界分散ファンド(3%目標受取型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312188",
    "frame": "growth"
  },
  {
    "name": "人生100年時代・世界分散ファンド(6%目標受取型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313188",
    "frame": "growth"
  },
  {
    "name": "人生100年時代・世界分散ファンド(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311188",
    "frame": "growth"
  },
  {
    "name": "世界インパクト投資ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314168",
    "frame": "growth"
  },
  {
    "name": "世界インパクト投資ファンド(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931B185",
    "frame": "growth"
  },
  {
    "name": "タフ・アメリカ(為替ヘッジあり 資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931B138",
    "frame": "growth"
  },
  {
    "name": "タフ・アメリカ(為替ヘッジなし 資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931C138",
    "frame": "growth"
  },
  {
    "name": "日興エドモン・ドゥ・ロスチャイルド・ラグジュアリーファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312136",
    "frame": "growth"
  },
  {
    "name": "バロン・グローバル・フューチャー戦略ファンド(資産成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311224",
    "frame": "growth"
  },
  {
    "name": "フード・イノベーション厳選株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311202",
    "frame": "growth"
  },
  {
    "name": "フューチャー・バイオテック",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312186",
    "frame": "growth"
  },
  {
    "name": "三井住友・グローバル・リート・オープン(1年決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311064",
    "frame": "growth"
  },
  {
    "name": "三井住友・グローバル・リート・オープン(3カ月決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311046",
    "frame": "growth"
  },
  {
    "name": "三井住友・日経225オープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315007",
    "frame": "growth"
  },
  {
    "name": "三井住友・米国ハイクオリティ株式ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311151",
    "frame": "growth"
  },
  {
    "name": "三井住友・米国ハイクオリティ株式ファンド(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312151",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・FW専用ポートフォリオ・レベル1(保守型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313233",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・FW専用ポートフォリオ・レベル2(安定型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314233",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・FW専用ポートフォリオ・レベル3(安定成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315233",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・FW専用ポートフォリオ・レベル4(成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79316233",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・FW専用ポートフォリオ・レベル5(積極成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79317233",
    "frame": "growth"
  },
  {
    "name": "大和住銀DC海外株式アクティブファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931306C",
    "frame": "growth"
  },
  {
    "name": "ライフ・ジャーニー(かしこく育てるコース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311185",
    "frame": "growth"
  },
  {
    "name": "ライフ・ジャーニー(かしこく使うコース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312185",
    "frame": "growth"
  },
  {
    "name": "ライフ・ジャーニー(充実して楽しむコース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313185",
    "frame": "growth"
  },
  {
    "name": "GS 米国成長株集中投資ファンド 年4回決算コース",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312135",
    "frame": "growth"
  },
  {
    "name": "SBI・UTIインドインフラ関連株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311082",
    "frame": "growth"
  },
  {
    "name": "SBI・インベスコQQQ・NASDAQ100インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311238",
    "frame": "growth"
  },
  {
    "name": "SBI・コムジェスト・クオリティグロース・世界株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89316213",
    "frame": "growth"
  },
  {
    "name": "SBI・コムジェスト・クオリティグロース・日本株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89315213",
    "frame": "growth"
  },
  {
    "name": "SBIインド&ベトナム株ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311077",
    "frame": "growth"
  },
  {
    "name": "ハーベスト アジア フロンティア株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931111A",
    "frame": "growth"
  },
  {
    "name": "UBSオーストラリア債券オープン(年1回決算型)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311176",
    "frame": "growth"
  },
  {
    "name": "UBS公益・金融社債ファンド(年1回決算型・為替ヘッジあり)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "5031213B",
    "frame": "growth"
  },
  {
    "name": "UBS公益・金融社債ファンド(年1回決算型・為替ヘッジなし)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311177",
    "frame": "growth"
  },
  {
    "name": "構造改革ジャパン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312239",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード スマートグローバルバランス(安定型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731D17B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード スマートグローバルバランス(安定成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731E17B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード スマートグローバルバランス(成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731F17B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード スマートグローバルバランス(積極型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731G17B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード スマートグローバルバランス(保守型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731C17B",
    "frame": "growth"
  },
  {
    "name": "ハイブリッド・セレクション",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311982",
    "frame": "growth"
  },
  {
    "name": "マネックス・日本成長株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311007",
    "frame": "growth"
  },
  {
    "name": "みずほ日本オールキャップ株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312238",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インドネシア株式ファンド(資産成長型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311237",
    "frame": "growth"
  },
  {
    "name": "米国株式アグレッシブ・ポートフォリオ(愛称:GeoMax)",
    "company": "株式会社sustenキャピタル・マネジメント",
    "fundCode": "B6311239",
    "frame": "growth"
  },
  {
    "name": "世界シェールガス株ファンド",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311128",
    "frame": "growth"
  },
  {
    "name": "ベトナム成長株インカムファンド",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311148",
    "frame": "growth"
  },
  {
    "name": "キャピタル・インベストメント・カンパニー・オブ・アメリカICA",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "93311181",
    "frame": "growth"
  },
  {
    "name": "キャピタル・インベストメント・カンパニー・オブ・アメリカICA年2回決算(分配重視)",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "93311229",
    "frame": "growth"
  },
  {
    "name": "キャピタル世界株式ファンド",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "9331107A",
    "frame": "growth"
  },
  {
    "name": "キャピタル世界株式ファンド(限定為替ヘッジ)",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "9331118B",
    "frame": "growth"
  },
  {
    "name": "キャピタル世界株式ファンド年2回決算(分配重視)",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "9331218B",
    "frame": "growth"
  },
  {
    "name": "キャピタル世界株式ファンド年2回決算(分配重視/限定為替ヘッジ)",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "9331318B",
    "frame": "growth"
  },
  {
    "name": "キャピタル日本株式ファンド",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "93311092",
    "frame": "growth"
  },
  {
    "name": "シュローダー・アジアパシフィックESGフォーカス・ファンド(資産成長型)",
    "company": "シュローダー・インベストメント・マネジメント株式会社",
    "fundCode": "20311166",
    "frame": "growth"
  },
  {
    "name": "ブレンドシックス",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311173",
    "frame": "growth"
  },
  {
    "name": "スパークス・M&S・ジャパン・ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311071",
    "frame": "growth"
  },
  {
    "name": "スパークス・アクティブ・ジャパン",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311044",
    "frame": "growth"
  },
  {
    "name": "スパークス・企業価値創造日本株ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311235",
    "frame": "growth"
  },
  {
    "name": "スパークス・ジャパン・オープン",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311045",
    "frame": "growth"
  },
  {
    "name": "スパークス・ジャパン・スモール・キャップ・ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "8031100A",
    "frame": "growth"
  },
  {
    "name": "スパークス・新・国際優良アジア株ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311175",
    "frame": "growth"
  },
  {
    "name": "スパークス・新・国際優良日本アジア株ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "8031118A",
    "frame": "growth"
  },
  {
    "name": "スパークス・新・国際優良日本株ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311083",
    "frame": "growth"
  },
  {
    "name": "スパークス・日本株式スチュワードシップ・ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "8031114C",
    "frame": "growth"
  },
  {
    "name": "スパークス・ベスト・ピック・ファンド(ヘッジ型)",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80311185",
    "frame": "growth"
  },
  {
    "name": "米国S&P500フレックス戦略ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313237",
    "frame": "growth"
  },
  {
    "name": "東京海上・米国リカバリー・ポテンシャル戦略株式ファンド",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311238",
    "frame": "growth"
  },
  {
    "name": "NZAM 日本好配当株オープン(3ヵ月決算型)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311083",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ NASDAQ100",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25316203",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ NYダウ30",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25315203",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ S&P500",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25314202",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 先進国2資産(株式+REIT)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25313233",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 先進国REIT",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312233",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 先進国株式",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311233",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 日経225",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312202",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 日本2資産(株式+REIT)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25315202",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 日本REIT",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25313203",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 米国2資産(株式+REIT)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25313202",
    "frame": "growth"
  },
  {
    "name": "NZAM・ベータ 米国REIT",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25314203",
    "frame": "growth"
  },
  {
    "name": "ノムラ・アジア・シリーズ(ノムラ・インドネシア・フォーカス)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131110C",
    "frame": "growth"
  },
  {
    "name": "野村環境リーダーズ戦略ファンド Aコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131320A",
    "frame": "growth"
  },
  {
    "name": "野村環境リーダーズ戦略ファンド Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131420A",
    "frame": "growth"
  },
  {
    "name": "野村世界業種別投資シリーズ(世界ヘルスケア株投資)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01315098",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・USハイ・イールド・ファンド(隔月決算型)(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311238",
    "frame": "growth"
  },
  {
    "name": "いちよし・グローバル株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314226",
    "frame": "growth"
  },
  {
    "name": "イノベーション・インデックス・シェアリングエコノミー",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79316192",
    "frame": "growth"
  },
  {
    "name": "イノベーション・インデックス・フィンテック",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931118A",
    "frame": "growth"
  },
  {
    "name": "三井住友・DCつみたてNISA・世界分散ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931217A",
    "frame": "growth"
  },
  {
    "name": "ラッセル・インベストメント世界環境テクノロジー・ファンド",
    "company": "ラッセル・インベストメント株式会社",
    "fundCode": "65311085",
    "frame": "growth"
  },
  {
    "name": "グローバル株式厳選ファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311238",
    "frame": "growth"
  },
  {
    "name": "りそなJリートインデックス(年1回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311239",
    "frame": "growth"
  },
  {
    "name": "りそなJリートインデックス(年4回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312239",
    "frame": "growth"
  },
  {
    "name": "りそなS&P500インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313239",
    "frame": "growth"
  },
  {
    "name": "YMFG 未来共創ファンド",
    "company": "ワイエムアセットマネジメント株式会社",
    "fundCode": "AO31119B",
    "frame": "growth"
  },
  {
    "name": "YMアセット・オーストラリア好配当資産ファンド",
    "company": "ワイエムアセットマネジメント株式会社",
    "fundCode": "AO311179",
    "frame": "growth"
  },
  {
    "name": "YMアセット・優良米国株ファンド",
    "company": "ワイエムアセットマネジメント株式会社",
    "fundCode": "AO311174",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド・コア株式ファンド",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311227",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・ベトナム株式ファンド",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83312227",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・インド株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311239",
    "frame": "growth"
  },
  {
    "name": "SBI・UTIインドファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931206C",
    "frame": "growth"
  },
  {
    "name": "SBIグローバル・バランス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931118A",
    "frame": "growth"
  },
  {
    "name": "欧州ハイ・イールド債券オープン(1年決算型)円コース",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311183",
    "frame": "growth"
  },
  {
    "name": "欧州ハイ・イールド債券オープン(1年決算型)ユーロコース",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312183",
    "frame": "growth"
  },
  {
    "name": "世界半導体関連フォーカスファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311239",
    "frame": "growth"
  },
  {
    "name": "新光 US-REIT オープン(隔月決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316239",
    "frame": "growth"
  },
  {
    "name": "アムンディ・次世代医療テクノロジー・ファンド(年2回決算型)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311187",
    "frame": "growth"
  },
  {
    "name": "アムンディ・日経平均オープン",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "5831110C",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・財産設計 2020",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311095",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・財産設計 2030",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39312095",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・財産設計 2040",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39313095",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・財産設計 2050",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "3931115A",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・米国成長株投信Eコース隔月決算型(為替ヘッジなし)予想分配金提示型",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "3931123A",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界厳選株式オープン<為替ヘッジあり>(奇数月決算型)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311239",
    "frame": "growth"
  },
  {
    "name": "インベスコ 世界厳選株式オープン<為替ヘッジなし>(奇数月決算型)",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18312239",
    "frame": "growth"
  },
  {
    "name": "グローバル債券ポートフォリオ(B)",
    "company": "株式会社sustenキャピタル・マネジメント",
    "fundCode": "B631120A",
    "frame": "growth"
  },
  {
    "name": "しんきん海外ソブリン債セレクション(欧州ソブリン債ポートフォリオ)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311037",
    "frame": "growth"
  },
  {
    "name": "しんきん海外ソブリン債セレクション(欧米ソブリン債ポートフォリオ)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59313037",
    "frame": "growth"
  },
  {
    "name": "しんきん海外ソブリン債セレクション(米国ソブリン債ポートフォリオ)",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59312037",
    "frame": "growth"
  },
  {
    "name": "スパークス・プレミアム・日本超小型株式ファンド",
    "company": "スパークス・アセット・マネジメント株式会社",
    "fundCode": "80312159",
    "frame": "growth"
  },
  {
    "name": "ダイワ・US-REIT・オープン(為替ヘッジなし/奇数月決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311239",
    "frame": "growth"
  },
  {
    "name": "ダイワ・グローバルREIT・オープン(為替ヘッジなし/奇数月決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04317239",
    "frame": "growth"
  },
  {
    "name": "ダイワJ-REITオープン(奇数月決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04315239",
    "frame": "growth"
  },
  {
    "name": "ダイワ米国リート・ファンドII(年1回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431B138",
    "frame": "growth"
  },
  {
    "name": "米国国債ファンド 為替ヘッジなし(奇数月決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04316239",
    "frame": "growth"
  },
  {
    "name": "グローバル厳選バランスファンド",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311222",
    "frame": "growth"
  },
  {
    "name": "東京海上・がんとたたかう投信(為替ヘッジあり)(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49312197",
    "frame": "growth"
  },
  {
    "name": "東京海上・がんとたたかう投信(為替ヘッジなし)(年1回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311197",
    "frame": "growth"
  },
  {
    "name": "東京海上・世界モノポリー戦略株式ファンド(年6回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "4931123A",
    "frame": "growth"
  },
  {
    "name": "東京海上セレクション・バランス50",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49317019",
    "frame": "growth"
  },
  {
    "name": "東京海上セレクション・バランス70",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49318019",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ外国債インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931F21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ外国債インデックス(為替ヘッジあり)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931E21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ国内株インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931G21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ国内債インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931D21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ国内リートインデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931H21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ新興国株インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931L21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ新興国債インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931I21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ先進国株インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931J21B",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ先進国脱炭素株インデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931221C",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ先進国リートインデックス",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931K21B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ/サンダース・グローバルバリュー株式ファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311239",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インド厳選株式ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311148",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インド厳選株式ファンド(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314183",
    "frame": "growth"
  },
  {
    "name": "3県未来ファンド",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131123A",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ厳選インド株式ファンド",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40311223",
    "frame": "growth"
  },
  {
    "name": "ピクテ・グローバル・インカム株式ファンド(隔月決算型)",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312239",
    "frame": "growth"
  },
  {
    "name": "ピクテ新興国ゴールデン・リスクプレミアム・ファンド",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42316239",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・日本バリューアップ・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32314239",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・アメリカ地方債ファンド(為替ヘッジなし)(隔月分配型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "5331123A",
    "frame": "growth"
  },
  {
    "name": "グローバル好配当株オープン(年1回決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931323A",
    "frame": "growth"
  },
  {
    "name": "ドナルド・スミス米国ディープバリュー株式ファンド Aコース(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931123A",
    "frame": "growth"
  },
  {
    "name": "ドナルド・スミス米国ディープバリュー株式ファンド Bコース(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931223A",
    "frame": "growth"
  },
  {
    "name": "J-REIT・リサーチ・オープン(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314239",
    "frame": "growth"
  },
  {
    "name": "グローバル10資産バランスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64315239",
    "frame": "growth"
  },
  {
    "name": "米国地方債ファンド 為替ヘッジあり(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312239",
    "frame": "growth"
  },
  {
    "name": "米国地方債ファンド 為替ヘッジなし(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313239",
    "frame": "growth"
  },
  {
    "name": "にいがた未来応援グローバル株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311238",
    "frame": "growth"
  },
  {
    "name": "明治安田米国レベニュー債オープン(為替ヘッジなし)",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311239",
    "frame": "growth"
  },
  {
    "name": "楽天・新経連株価指数ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311202",
    "frame": "growth"
  },
  {
    "name": "Smart-i DC 全世界株式インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ314239",
    "frame": "growth"
  },
  {
    "name": "Smart-i DC 全世界株式インデックス(除く日本)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ315239",
    "frame": "growth"
  },
  {
    "name": "グローバル・ハイクオリティ成長株式ファンド(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316169",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 外国債券(為替ヘッジあり)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731C15A",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 先進国株式(為替ヘッジあり)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731B15A",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 国内株式<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318086",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 国内債券<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313086",
    "frame": "growth"
  },
  {
    "name": "コドモファンド",
    "company": "パリミキアセットマネジメント株式会社",
    "fundCode": "9H311134",
    "frame": "growth"
  },
  {
    "name": "浪花おふくろファンド",
    "company": "パリミキアセットマネジメント株式会社",
    "fundCode": "9H313084",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・USハイ・イールド・ファンド(資産成長型)C(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231217B",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・USハイ・イールド・ファンド(資産成長型)D(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313135",
    "frame": "growth"
  },
  {
    "name": "eMAXIS JAPAN クオリティ150インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331115B",
    "frame": "growth"
  },
  {
    "name": "eMAXIS JPX日経400インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311144",
    "frame": "growth"
  },
  {
    "name": "eMAXIS JPX日経中小型インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313176",
    "frame": "growth"
  },
  {
    "name": "eMAXIS NASDAQ100インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331A211",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo 遺伝子工学",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311188",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo ウェアラブル",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314195",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo 宇宙開発",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313188",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo クリーンテック",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312215",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo コミュニケーションDX",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311223",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo 自動運転",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313195",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo 水素エコノミー",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312223",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo 電気自動車",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313215",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo ドローン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331118C",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo ナノテクノロジー",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331218C",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo バーチャルリアリティ",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331318C",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo フィンテック",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312195",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo ロボット",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312188",
    "frame": "growth"
  },
  {
    "name": "eMAXIS NYダウインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311138",
    "frame": "growth"
  },
  {
    "name": "eMAXIS S&P500クオリティ高配当インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311231",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 国内株式(TOPIX)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03317172",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 国内株式(日経平均)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311182",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 国内債券インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03318172",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 国内リートインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331119A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 新興国株式インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331C177",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 全世界株式(3地域均等型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312184",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 全世界株式(オール・カントリー)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331418A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 全世界株式(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316183",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 全米株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311239",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim バランス(8資産均等型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312175",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 米国株式(S&P500)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311187",
    "frame": "growth"
  },
  {
    "name": "eMAXIS TOPIXインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331209A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 欧州リートインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313161",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 豪州債券インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311167",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 豪州リートインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314161",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 国内債券インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331309A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 国内物価連動国債インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331314B",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 国内リートインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331409A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 債券バランス(2資産均等型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315158",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 最適化バランス(マイゴールキーパー)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312163",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 最適化バランス(マイストライカー)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316163",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 最適化バランス(マイディフェンダー)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313163",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 最適化バランス(マイフォワード)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315163",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 最適化バランス(マイミッドフィルダー)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314163",
    "frame": "growth"
  },
  {
    "name": "eMAXIS ジャパンESGセレクト・リーダーズインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331318A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 新興国株式インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331809A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 新興国債券インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311109",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 新興国債券インデックス(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313167",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 新興国リートインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331213B",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 日経225インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331109A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 日経アジア300インベスタブル・インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312181",
    "frame": "growth"
  },
  {
    "name": "eMAXIS バランス(4資産均等型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316158",
    "frame": "growth"
  },
  {
    "name": "eMAXIS バランス(8資産均等型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331111A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS バランス(波乗り型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331211A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 米国リートインデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312161",
    "frame": "growth"
  },
  {
    "name": "eMAXIS マイマネージャー 1970s",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331517A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS マイマネージャー 1980s",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331617A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS マイマネージャー 1990s",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331717A",
    "frame": "growth"
  },
  {
    "name": "J・エクイティ",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03317004",
    "frame": "growth"
  },
  {
    "name": "Jオープン(小型株)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311946",
    "frame": "growth"
  },
  {
    "name": "NYダウ・インデックスファンド(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314174",
    "frame": "growth"
  },
  {
    "name": "NYダウ・インデックスファンド(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315174",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド225",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311865",
    "frame": "growth"
  },
  {
    "name": "エマージング・ソブリン・オープン(1年決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313038",
    "frame": "growth"
  },
  {
    "name": "エマージング・ソブリン・オープン(資産成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331113N",
    "frame": "growth"
  },
  {
    "name": "エマージング・ソブリン・オープン(資産成長型)為替ヘッジあり",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331213N",
    "frame": "growth"
  },
  {
    "name": "グリーン・テクノロジー株式ファンド(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311216",
    "frame": "growth"
  },
  {
    "name": "グリーン・テクノロジー株式ファンド(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312216",
    "frame": "growth"
  },
  {
    "name": "グローバル・ソブリン・オープン(3ヵ月決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331497C",
    "frame": "growth"
  },
  {
    "name": "グローバル・ヘルスケア&バイオ・オープン Bコース(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313007",
    "frame": "growth"
  },
  {
    "name": "グローバル・ヘルスケア&バイオ・ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316042",
    "frame": "growth"
  },
  {
    "name": "グローバル・ヘルスケア&バイオ・ファンド(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331316B",
    "frame": "growth"
  },
  {
    "name": "グローバル・リート・アクティブファンド(ラップ向け)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331120C",
    "frame": "growth"
  },
  {
    "name": "これぞ、日本株",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331218B",
    "frame": "growth"
  },
  {
    "name": "サイバーセキュリティ株式オープン(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314177",
    "frame": "growth"
  },
  {
    "name": "サイバーセキュリティ株式オープン(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315177",
    "frame": "growth"
  },
  {
    "name": "システム・オープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311835",
    "frame": "growth"
  },
  {
    "name": "次世代REITオープン<資産成長型>(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311202",
    "frame": "growth"
  },
  {
    "name": "次世代REITオープン<資産成長型>(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312202",
    "frame": "growth"
  },
  {
    "name": "次世代米国代表株ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311135",
    "frame": "growth"
  },
  {
    "name": "次世代米国代表株ファンド(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331416C",
    "frame": "growth"
  },
  {
    "name": "スマート・クオリティ・オープン(安定型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331414B",
    "frame": "growth"
  },
  {
    "name": "スマート・クオリティ・オープン(安定型)(1年決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314151",
    "frame": "growth"
  },
  {
    "name": "スマート・クオリティ・オープン(安定成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331514B",
    "frame": "growth"
  },
  {
    "name": "スマート・クオリティ・オープン(安定成長型)(1年決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315151",
    "frame": "growth"
  },
  {
    "name": "スマート・クオリティ・オープン(成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331614B",
    "frame": "growth"
  },
  {
    "name": "スマート・クオリティ・オープン(成長型)(1年決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316151",
    "frame": "growth"
  },
  {
    "name": "世界プレミア企業債券ファンド(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311161",
    "frame": "growth"
  },
  {
    "name": "世界メディカル関連株式オープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313149",
    "frame": "growth"
  },
  {
    "name": "先進国好配当株式ファンド(3ヵ月決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313162",
    "frame": "growth"
  },
  {
    "name": "先進国好配当株式ファンド(3ヵ月決算型)為替ヘッジあり",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315172",
    "frame": "growth"
  },
  {
    "name": "先進国好配当株式ファンド(年2回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314162",
    "frame": "growth"
  },
  {
    "name": "先進国好配当株式ファンド(年2回決算型)為替ヘッジあり",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316172",
    "frame": "growth"
  },
  {
    "name": "つみたて4資産均等バランス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03318178",
    "frame": "growth"
  },
  {
    "name": "つみたて8資産均等バランス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315178",
    "frame": "growth"
  },
  {
    "name": "つみたて新興国株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314178",
    "frame": "growth"
  },
  {
    "name": "つみたて先進国株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313178",
    "frame": "growth"
  },
  {
    "name": "つみたて先進国株式(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03317178",
    "frame": "growth"
  },
  {
    "name": "つみたて全世界株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316203",
    "frame": "growth"
  },
  {
    "name": "つみたて日本株式(TOPIX)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312178",
    "frame": "growth"
  },
  {
    "name": "つみたて日本株式(日経平均)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316178",
    "frame": "growth"
  },
  {
    "name": "つみたて米国株式(S&P500)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315203",
    "frame": "growth"
  },
  {
    "name": "トピックスオープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311903",
    "frame": "growth"
  },
  {
    "name": "日本厳選プレミアム株式オープン(年2回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331114D",
    "frame": "growth"
  },
  {
    "name": "ベイリー・ギフォード インパクト投資ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312196",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ Jリートオープン(3ヵ月決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313046",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ Jリートオープン(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331313B",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ NASDAQオープン Aコース",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311968",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ NASDAQオープン Bコース",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312968",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ TOPIX・ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311013",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ インデックス225オープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331298B",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ インデックス225オープン(確定拠出年金)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312025",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 海外債券オープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331A008",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 海外債券オープン(3ヵ月決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313022",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 外国株式インデックスファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312046",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 外国債券オープン(確定拠出年金)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314022",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ グローバル・ボンド・オープン(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331713C",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 国内債券インデックスファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311092",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 国内リートインデックスファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331122A",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 純金ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311112",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 世界国債インデックスファンド(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313083",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 先進国リートインデックスファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312204",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ チャイナオープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331196A",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ トピックスインデックスオープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312004",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ トピックスオープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316013",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ トピックスオープン(確定拠出年金)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331C01C",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 日本株アクティブ・ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331400A",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 日本株アクティブオープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312986",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 日本株アクティブオープン(確定拠出年金)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311025",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 日本株オープン「35」",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311993",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ バリューオープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313009",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ ライフセレクトファンド(安定型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311008",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ ライフセレクトファンド(安定成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312008",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ ライフセレクトファンド(成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313008",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ/マッコーリー グローバル・インフラ債券ファンド<為替ヘッジあり>(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314181",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ/マッコーリー グローバル・インフラ債券ファンド<為替ヘッジなし>(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315181",
    "frame": "growth"
  },
  {
    "name": "未来イノベーション成長株ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313183",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー グローバル・プレミアム株式オープン(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331112E",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー グローバル・プレミアム株式オープン(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331212E",
    "frame": "growth"
  },
  {
    "name": "優良日本株ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311093",
    "frame": "growth"
  },
  {
    "name": "ワールド・ビューティー・オープン(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03318177",
    "frame": "growth"
  },
  {
    "name": "ワールド・ビューティー・オープン(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03319177",
    "frame": "growth"
  },
  {
    "name": "わたしの未来設計<安定重視型>(分配コース)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311189",
    "frame": "growth"
  },
  {
    "name": "わたしの未来設計<安定重視型>(分配抑制コース)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312189",
    "frame": "growth"
  },
  {
    "name": "わたしの未来設計<成長重視型>(分配コース)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313189",
    "frame": "growth"
  },
  {
    "name": "わたしの未来設計<成長重視型>(分配抑制コース)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314189",
    "frame": "growth"
  },
  {
    "name": "明治安田DC外国株式リサーチオープン",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231601B",
    "frame": "growth"
  },
  {
    "name": "明治安田TOPIXオープン",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311035",
    "frame": "growth"
  },
  {
    "name": "ターゲットリターンバランスファンド(目標2%)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311233",
    "frame": "growth"
  },
  {
    "name": "ターゲットリターンバランスファンド(目標3%)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312233",
    "frame": "growth"
  },
  {
    "name": "ターゲットリターンバランスファンド(目標4%)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313233",
    "frame": "growth"
  },
  {
    "name": "ターゲットリターンバランスファンド(目標5%)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ314233",
    "frame": "growth"
  },
  {
    "name": "ターゲットリターンバランスファンド(目標6%)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ315233",
    "frame": "growth"
  },
  {
    "name": "auAM未来都市関連株式ファンド(為替ヘッジあり)",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY31120A",
    "frame": "growth"
  },
  {
    "name": "auAM未来都市関連株式ファンド(為替ヘッジなし)",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY31220A",
    "frame": "growth"
  },
  {
    "name": "EXE-i グローバルサウス株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931223A",
    "frame": "growth"
  },
  {
    "name": "高成長ASEAN小型株式ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09313239",
    "frame": "growth"
  },
  {
    "name": "米国短期ハイ・イールド債券オープン",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312139",
    "frame": "growth"
  },
  {
    "name": "T&Dインド中小型株ファンド",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "10311112",
    "frame": "growth"
  },
  {
    "name": "青のライフキャンバス・ファンド(標準型)",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "10311002",
    "frame": "growth"
  },
  {
    "name": "赤のライフキャンバス・ファンド(積極型)",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "10312002",
    "frame": "growth"
  },
  {
    "name": "大同リサーチ&アクティブオープン",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "10311996",
    "frame": "growth"
  },
  {
    "name": "UBS米国成長株式リスク・コントロール・ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50311132",
    "frame": "growth"
  },
  {
    "name": "シュローダー・サステナブル・世界株ファンド(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312232",
    "frame": "growth"
  },
  {
    "name": "シュローダー・サステナブル・世界株ファンド(限定為替ヘッジ)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311232",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート先進国債券インデックス・オープン",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55315165",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート先進国債券インデックス・オープン(為替ヘッジあり)",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55316165",
    "frame": "growth"
  },
  {
    "name": "日本企業PBR向上ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314239",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)REIT",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131F16A",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)外国株式",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131B16A",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)外国債券",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131E16A",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)債券・安定型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131C16A",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)債券・安定型プラス",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311184",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)債券・成長型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131D16A",
    "frame": "growth"
  },
  {
    "name": "ファンドラップ(ウエルス・スクエア)日本株式",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131A16A",
    "frame": "growth"
  },
  {
    "name": "iシェアーズ ゴールドインデックス・ファンド(為替ヘッジなし)",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831M139",
    "frame": "growth"
  },
  {
    "name": "クライメート・ソリューション・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313224",
    "frame": "growth"
  },
  {
    "name": "MUFG ウェルス・インサイト・ファンド(積極型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316215",
    "frame": "growth"
  },
  {
    "name": "MUFG ウェルス・インサイト・ファンド(標準型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315215",
    "frame": "growth"
  },
  {
    "name": "MUFG ウェルス・インサイト・ファンド(保守型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314215",
    "frame": "growth"
  },
  {
    "name": "りそな米国株式配当貴族インデックス(年1回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31123A",
    "frame": "growth"
  },
  {
    "name": "りそな米国株式配当貴族インデックス(年4回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31223A",
    "frame": "growth"
  },
  {
    "name": "YMアセット・好配当日本株ファンド",
    "company": "ワイエムアセットマネジメント株式会社",
    "fundCode": "AO31116B",
    "frame": "growth"
  },
  {
    "name": "YMアセット・バランスファンド(安定タイプ)",
    "company": "ワイエムアセットマネジメント株式会社",
    "fundCode": "AO311166",
    "frame": "growth"
  },
  {
    "name": "YMアセット・バランスファンド(成長タイプ)",
    "company": "ワイエムアセットマネジメント株式会社",
    "fundCode": "AO312166",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT FANG+インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311181",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT NASDAQ100インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04317188",
    "frame": "growth"
  },
  {
    "name": "ブラックロック天然資源株ファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831207C",
    "frame": "growth"
  },
  {
    "name": "あおぞら・ 新グローバル・プレミアム・ファンド(当初漸増期間付、限定追加型) 2024-01",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE312241",
    "frame": "growth"
  },
  {
    "name": "あおぞら・新グローバル・プレミアム・ファンド",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE313241",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・グローバル・ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231197C",
    "frame": "growth"
  },
  {
    "name": "auスマート・プライム(成長)",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY313189",
    "frame": "growth"
  },
  {
    "name": "SBIグローバル・ラップファンド(安定型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931114C",
    "frame": "growth"
  },
  {
    "name": "SBIグローバル・ラップファンド(積極型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931214C",
    "frame": "growth"
  },
  {
    "name": "ROBOPROファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931123C",
    "frame": "growth"
  },
  {
    "name": "シン・インド割安成長株ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931223C",
    "frame": "growth"
  },
  {
    "name": "One/フィデリティ・ブルーチップ・グロース株式ファンド(隔月決算・予想分配金提示型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731723C",
    "frame": "growth"
  },
  {
    "name": "One/フィデリティ・ブルーチップ・グロース株式ファンド(成長型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731623C",
    "frame": "growth"
  },
  {
    "name": "いちよしファンドラップ専用投資信託 N オルタナティブ",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD31323C",
    "frame": "growth"
  },
  {
    "name": "いちよしファンドラップ専用投資信託 N 内外株式",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD31123C",
    "frame": "growth"
  },
  {
    "name": "いちよしファンドラップ専用投資信託 N 内外債券",
    "company": "いちよしアセットマネジメント株式会社",
    "fundCode": "AD31223C",
    "frame": "growth"
  },
  {
    "name": "キャピタル・ニューワールド・ファンドAコース(米ドル売り円買い)",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "93311176",
    "frame": "growth"
  },
  {
    "name": "キャピタル・ニューワールド・ファンドBコース(為替ヘッジなし)",
    "company": "キャピタル・インターナショナル株式会社",
    "fundCode": "93312176",
    "frame": "growth"
  },
  {
    "name": "GSグローバル・パーシャルヘッジ社債ファンド",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531123B",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT インド株インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314233",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT 日経連続増配株指数(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431423B",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT 日経連続増配株指数(年4回決算型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431523B",
    "frame": "growth"
  },
  {
    "name": "ベストポート5(積極型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431F23C",
    "frame": "growth"
  },
  {
    "name": "ベストポート5(バランス型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431D23C",
    "frame": "growth"
  },
  {
    "name": "ベストポート5(保守型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431B23C",
    "frame": "growth"
  },
  {
    "name": "ベストポート5(やや積極型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431E23C",
    "frame": "growth"
  },
  {
    "name": "ベストポート5(やや保守型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431C23C",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス ニュー・ホライズン・ファンド Aコース(為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW31123C",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス ニュー・ホライズン・ファンド Bコース(為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW31223C",
    "frame": "growth"
  },
  {
    "name": "ニッセイ/サンダース・グローバルバリュー株式ファンド(隔月予想分配金提示型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312239",
    "frame": "growth"
  },
  {
    "name": "VTX 生涯設計プラス30/70(年3%目標払出型)",
    "company": "バーテックス・インベストメント・ソリューションズ株式会社",
    "fundCode": "BD31123B",
    "frame": "growth"
  },
  {
    "name": "VTX 生涯設計プラス60/40(資産成長型)",
    "company": "バーテックス・インベストメント・ソリューションズ株式会社",
    "fundCode": "BD31123A",
    "frame": "growth"
  },
  {
    "name": "つみたてiシェアーズ 米国株式(S&P500)インデックス・ファンド",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831123B",
    "frame": "growth"
  },
  {
    "name": "アセアン成長国株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931107C",
    "frame": "growth"
  },
  {
    "name": "アセットアロケーション・ファンド(安定型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311154",
    "frame": "growth"
  },
  {
    "name": "アセットアロケーション・ファンド(安定成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312154",
    "frame": "growth"
  },
  {
    "name": "アセットアロケーション・ファンド(成長型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313154",
    "frame": "growth"
  },
  {
    "name": "三井住友・日本株オープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311949",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・TOPIXインデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931421K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・ゴールドインデックス・ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931C21K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・国内リートインデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931A21K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・新興国株式インデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931721K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・新興国債インデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931921K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・先進国株式インデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931621K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・先進国債インデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931821K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・先進国リートインデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931B21K",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・日経225インデックス・ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931521K",
    "frame": "growth"
  },
  {
    "name": "大和住銀日本グロース株ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931500B",
    "frame": "growth"
  },
  {
    "name": "NWQフレキシブル・インカムファンド 為替ヘッジあり(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431223C",
    "frame": "growth"
  },
  {
    "name": "NWQフレキシブル・インカムファンド 為替ヘッジなし(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431323C",
    "frame": "growth"
  },
  {
    "name": "SMT iPlus 全世界株式",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431323B",
    "frame": "growth"
  },
  {
    "name": "SMT iPlus 米国株式",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431223B",
    "frame": "growth"
  },
  {
    "name": "SMTAMインド株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431423C",
    "frame": "growth"
  },
  {
    "name": "オーストラリア公社債ファンド(奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431123C",
    "frame": "growth"
  },
  {
    "name": "GRAN NEXT エネルギー",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312211",
    "frame": "growth"
  },
  {
    "name": "GRAN NEXT テクノロジー",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313211",
    "frame": "growth"
  },
  {
    "name": "GRAN NEXT ヘルスサイエンス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315211",
    "frame": "growth"
  },
  {
    "name": "GRAN NEXT モビリティ",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316211",
    "frame": "growth"
  },
  {
    "name": "いちよし 公開ベンチャー・ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331200B",
    "frame": "growth"
  },
  {
    "name": "いちよし ジャパン・ベンチャー・ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331117B",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 豪ドル債券インカムオープン(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331113C",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ/マッコーリー グローバル・インフラ債券ファンド<為替ヘッジなし>(隔月決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331323B",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー グローバル・プレミアム株式オープン<隔月決算型>(為替ヘッジあり)予想分配金提示型",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331123B",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー グローバル・プレミアム株式オープン<隔月決算型>(為替ヘッジなし)予想分配金提示型",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331223B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード フォーカス AI",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312201",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード フォーカス 次世代通信",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311201",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード フォーカス フィンテック",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313201",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード フォーカス ロボット・テクノロジー",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315201",
    "frame": "growth"
  },
  {
    "name": "米国小型株グロース・ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431119C",
    "frame": "growth"
  },
  {
    "name": "DCニッセイ全世界株式インデックスコレクト",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314239",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・アメリカ高配当株ファンド(3ヵ月決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53311137",
    "frame": "growth"
  },
  {
    "name": "フランクリン・テンプルトン・アメリカ高配当株ファンド(年2回決算型)",
    "company": "フランクリン・テンプルトン・ジャパン株式会社",
    "fundCode": "53312133",
    "frame": "growth"
  },
  {
    "name": "eMAXIS S&P500インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331220C",
    "frame": "growth"
  },
  {
    "name": "インカムビルダー(年1回決算型)為替ヘッジなし",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731F13C",
    "frame": "growth"
  },
  {
    "name": "インカムビルダー(年1回決算型)限定為替ヘッジ",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731D13C",
    "frame": "growth"
  },
  {
    "name": "バンクローン・ファンド(ヘッジあり/年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316139",
    "frame": "growth"
  },
  {
    "name": "バンクローン・ファンド(ヘッジなし/年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314139",
    "frame": "growth"
  },
  {
    "name": "auAM Nifty50インド株ファンド",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY311238",
    "frame": "growth"
  },
  {
    "name": "HSBC 世界資産選抜種まきコース(安定運用型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131123C",
    "frame": "growth"
  },
  {
    "name": "SBI・フラトンVPICファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311079",
    "frame": "growth"
  },
  {
    "name": "SBI日本高配当株式(分配)ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931123C",
    "frame": "growth"
  },
  {
    "name": "SBI日本国債(分配)ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931223B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード NASDAQ100",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731523C",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード S&P500配当貴族",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731423C",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>先進国債券ファンド(為替ヘッジなし)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "2531223C",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>先進国債券ファンド(部分為替ヘッジあり)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "2531323C",
    "frame": "growth"
  },
  {
    "name": "ブランディワイン・グローバルバリュー株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931221K",
    "frame": "growth"
  },
  {
    "name": "三井住友DSインカムバランスNISAファンド(成長投資型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311241",
    "frame": "growth"
  },
  {
    "name": "三井住友DSインカムバランスNISAファンド(予想分配金提示型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312241",
    "frame": "growth"
  },
  {
    "name": "auスマート・プライム(高成長)",
    "company": "auアセットマネジメント株式会社",
    "fundCode": "AY314189",
    "frame": "growth"
  },
  {
    "name": "米国製造業株式ファンド(年4回決算型)",
    "company": "BNYメロン・インベストメント・マネジメント・ジャパン株式会社",
    "fundCode": "8531123C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(4資産分散・積極型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431323C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(4資産分散・バランス型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431223C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(4資産分散・保守型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431123C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(6資産分散・積極型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431623C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(6資産分散・バランス型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431523C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(6資産分散・保守型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431423C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(8資産分散・積極型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431923C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(8資産分散・バランス型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431823C",
    "frame": "growth"
  },
  {
    "name": "スタイル9(8資産分散・保守型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431723C",
    "frame": "growth"
  },
  {
    "name": "ブラックロックESG世界株式ファンド(為替ヘッジなし)",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48313159",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・日本割安成長株投信",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312241",
    "frame": "growth"
  },
  {
    "name": "ハリス日本株ファンド(資産成長型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311241",
    "frame": "growth"
  },
  {
    "name": "ハリス日本株ファンド(年4回決算型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68312241",
    "frame": "growth"
  },
  {
    "name": "USベーシックバランス",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311241",
    "frame": "growth"
  },
  {
    "name": "SBI・ SPDR・S&P500高配当株式インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312241",
    "frame": "growth"
  },
  {
    "name": "SBI・V・米国高配当株式インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311241",
    "frame": "growth"
  },
  {
    "name": "世界バイオ医薬株式ファンド",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311235",
    "frame": "growth"
  },
  {
    "name": "UBSグローバルCBオープン(年1回決算型・為替ヘッジあり)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50313139",
    "frame": "growth"
  },
  {
    "name": "UBSグローバルCBオープン(年1回決算型・為替ヘッジなし)",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "50314139",
    "frame": "growth"
  },
  {
    "name": "ニッセイSDGsグローバルセレクトファンド(資産成長型・為替ヘッジなし)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931B185",
    "frame": "growth"
  },
  {
    "name": "SMT 米国株配当貴族インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64317168",
    "frame": "growth"
  },
  {
    "name": "世界経済インデックスファンド(株式シフト型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431113B",
    "frame": "growth"
  },
  {
    "name": "明治安田DC・TOPIXインデックスファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231120C",
    "frame": "growth"
  },
  {
    "name": "HSBC グローバル・ターゲット利回り債券ファンド2024-01(限定追加型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311241",
    "frame": "growth"
  },
  {
    "name": "楽天・資産アロケーション・ファンド(成長型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312241",
    "frame": "growth"
  },
  {
    "name": "楽天・資産アロケーション・ファンド(積極成長型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313241",
    "frame": "growth"
  },
  {
    "name": "楽天・資産アロケーション・ファンド(標準型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311241",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ割安優良債券ファンド(奇数月決算型)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40311242",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ割安優良債券ファンド(資産成長型)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "40312242",
    "frame": "growth"
  },
  {
    "name": "グローバル資産分散投資ファンド Aコース(安定)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311232",
    "frame": "growth"
  },
  {
    "name": "グローバル資産分散投資ファンド Bコース(やや安定)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312232",
    "frame": "growth"
  },
  {
    "name": "グローバル資産分散投資ファンド Cコース(標準)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09313232",
    "frame": "growth"
  },
  {
    "name": "グローバル資産分散投資ファンド Dコース(やや積極)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09314232",
    "frame": "growth"
  },
  {
    "name": "グローバル資産分散投資ファンド Eコース(積極)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09315232",
    "frame": "growth"
  },
  {
    "name": "岐阜・愛知地域応援ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311241",
    "frame": "growth"
  },
  {
    "name": "iFree JPXプライム150",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04316241",
    "frame": "growth"
  },
  {
    "name": "ルーミス米国投資適格債券ファンド[年2回決算型]",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312241",
    "frame": "growth"
  },
  {
    "name": "GSグローバル社債ターゲット追加型2024-03",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311243",
    "frame": "growth"
  },
  {
    "name": "航空宇宙戦略グローバルファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y311242",
    "frame": "growth"
  },
  {
    "name": "半導体関連 日本株式戦略ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64319241",
    "frame": "growth"
  },
  {
    "name": "楽天・モーニングスター・ワイド・モート・フォーカス・インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311242",
    "frame": "growth"
  },
  {
    "name": "ソフトバンク&SBIグループ株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931105A",
    "frame": "growth"
  },
  {
    "name": "イノベーション・インサイト 世界株式戦略ファンド(予想分配金提示型・奇数月決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311242",
    "frame": "growth"
  },
  {
    "name": "りそなTOPIXインデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311242",
    "frame": "growth"
  },
  {
    "name": "りそな新興国株式インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313242",
    "frame": "growth"
  },
  {
    "name": "りそな先進国株式インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312242",
    "frame": "growth"
  },
  {
    "name": "日経平均高配当利回り株ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331118B",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート・グローバル債券インデックス・オープン(隔月分配型)",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55316241",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート国内債券インデックス・オープン(隔月分配型)",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55315241",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート米国投資適格社債インデックス・オープン(隔月分配型)",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55317241",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国総合債券インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89319242",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国投資適格社債(1-5年)インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931A242",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・米国ハイイールド債券インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931B242",
    "frame": "growth"
  },
  {
    "name": "SBI・V・米国増配株式インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89318242",
    "frame": "growth"
  },
  {
    "name": "SBI欧州高配当株式(分配)ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931C242",
    "frame": "growth"
  },
  {
    "name": "尾瀬紀行",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311065",
    "frame": "growth"
  },
  {
    "name": "eMAXIS インド株式インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311242",
    "frame": "growth"
  },
  {
    "name": "米国株式これ1本(S&P500・NYダウ・ナスダック100)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311243",
    "frame": "growth"
  },
  {
    "name": "新ホリコ・フォーカス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311165",
    "frame": "growth"
  },
  {
    "name": "インベスコ 米国株式ダイナミック・マルチファクター・ファンド<為替ヘッジあり>",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311243",
    "frame": "growth"
  },
  {
    "name": "インベスコ 米国株式ダイナミック・マルチファクター・ファンド<為替ヘッジなし>",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18312243",
    "frame": "growth"
  },
  {
    "name": "マネーフォワード全世界株式インデックスファンド",
    "company": "株式会社sustenキャピタル・マネジメント",
    "fundCode": "B6311231",
    "frame": "growth"
  },
  {
    "name": "インド株インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311243",
    "frame": "growth"
  },
  {
    "name": "日本好配当リバランスオープンII",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311243",
    "frame": "growth"
  },
  {
    "name": "インド債券オープン(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311177",
    "frame": "growth"
  },
  {
    "name": "ひふみマイクロスコープpro",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C311243",
    "frame": "growth"
  },
  {
    "name": "みずほグローバル・セレクト・不動産戦略ファンド(年1回決算型)(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312243",
    "frame": "growth"
  },
  {
    "name": "みずほグローバル・セレクト・不動産戦略ファンド(年1回決算型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313243",
    "frame": "growth"
  },
  {
    "name": "みずほグローバル・セレクト・不動産戦略ファンド(年4回決算型)(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318243",
    "frame": "growth"
  },
  {
    "name": "みずほグローバル・セレクト・不動産戦略ファンド(年4回決算型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47319243",
    "frame": "growth"
  },
  {
    "name": "アムンディ・グローバル・ストラテジー株式ファンド 年2回決算型",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311147",
    "frame": "growth"
  },
  {
    "name": "アムンディ・グローバル・ストラテジー株式ファンド 年2回決算型(為替ヘッジあり)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311176",
    "frame": "growth"
  },
  {
    "name": "インド小型厳選株式ファンド",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311243",
    "frame": "growth"
  },
  {
    "name": "一歩先いく US テック・トップ20インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314243",
    "frame": "growth"
  },
  {
    "name": "あおぞら・徹底分散グローバル株式ファンド",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE312153",
    "frame": "growth"
  },
  {
    "name": "ダイワ/ミレーアセット・インド株式ファンド -インドの匠-",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431117C",
    "frame": "growth"
  },
  {
    "name": "資産形成ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231208C",
    "frame": "growth"
  },
  {
    "name": "米国大型テクノロジー株式ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312243",
    "frame": "growth"
  },
  {
    "name": "iFreeHOLD 米国国債(T-Zero2044)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04319243",
    "frame": "growth"
  },
  {
    "name": "サイバーセキュリティ株式オープン<隔月決算型>(為替ヘッジなし)予想分配金提示型",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311243",
    "frame": "growth"
  },
  {
    "name": "楽天・インド株Nifty50インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311244",
    "frame": "growth"
  },
  {
    "name": "UBS日本株式リスク・コントロール・ファンド",
    "company": "UBSアセット・マネジメント株式会社",
    "fundCode": "5031113C",
    "frame": "growth"
  },
  {
    "name": "八十二 信州応援日本株ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231119B",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・新興国中小型成長株投信",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311244",
    "frame": "growth"
  },
  {
    "name": "iFreeWallet 米ドル(USD)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312244",
    "frame": "growth"
  },
  {
    "name": "ウェルスナビXR(リスク許容度1)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312244",
    "frame": "growth"
  },
  {
    "name": "ウェルスナビXR(リスク許容度2)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313244",
    "frame": "growth"
  },
  {
    "name": "ウェルスナビXR(リスク許容度3)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314244",
    "frame": "growth"
  },
  {
    "name": "ウェルスナビXR(リスク許容度4)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I315244",
    "frame": "growth"
  },
  {
    "name": "ウェルスナビXR(リスク許容度5)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I316244",
    "frame": "growth"
  },
  {
    "name": "JPMインド株アクティブ・オープン",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "1731105C",
    "frame": "growth"
  },
  {
    "name": "なかの世界成長ファンド",
    "company": "なかのアセットマネジメント株式会社",
    "fundCode": "BJ312244",
    "frame": "growth"
  },
  {
    "name": "なかの日本成長ファンド",
    "company": "なかのアセットマネジメント株式会社",
    "fundCode": "BJ311244",
    "frame": "growth"
  },
  {
    "name": "GRAN NEXT フィナンシャルズ",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311245",
    "frame": "growth"
  },
  {
    "name": "SBI・J-REIT(分配)ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311245",
    "frame": "growth"
  },
  {
    "name": "iTrustティンバー",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311213",
    "frame": "growth"
  },
  {
    "name": "野村ブラックロック循環経済関連株投信 Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312208",
    "frame": "growth"
  },
  {
    "name": "みずほサステナブルファンドシリーズ - LO・サーキュラー・エコノミー",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311244",
    "frame": "growth"
  },
  {
    "name": "FWニッセイ国内期待インフレターゲットファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29315244",
    "frame": "growth"
  },
  {
    "name": "グローバル・スマート・イノベーション・オープン(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331215C",
    "frame": "growth"
  },
  {
    "name": "グローバル・スマート・イノベーション・オープン(年1回決算型)為替ヘッジあり",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312173",
    "frame": "growth"
  },
  {
    "name": "グローバル・スマート・イノベーション・オープン(年2回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331115C",
    "frame": "growth"
  },
  {
    "name": "グローバル・スマート・イノベーション・オープン(年2回決算型)為替ヘッジあり",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311173",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2045",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312194",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2050",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313183",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2055",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313194",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2060",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ314194",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2065",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311237",
    "frame": "growth"
  },
  {
    "name": "りそなラップ型ファンド(成長型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313162",
    "frame": "growth"
  },
  {
    "name": "MUFG ウェルス・インサイト・ファンド・アネックス(為替リスク軽減型)コンサバティブコース",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312245",
    "frame": "growth"
  },
  {
    "name": "MUFG ウェルス・インサイト・ファンド・アネックス(為替リスク軽減型)スタンダードコース",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313245",
    "frame": "growth"
  },
  {
    "name": "東洋・インドネシア株式ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311245",
    "frame": "growth"
  },
  {
    "name": "米国株式自動配分戦略ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312232",
    "frame": "growth"
  },
  {
    "name": "スマート・コントロール 世界株式戦略ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312245",
    "frame": "growth"
  },
  {
    "name": "インベスコ S&P 500イコール・ウェイト・ファンド",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311245",
    "frame": "growth"
  },
  {
    "name": "THEOグロース・AIファンド(世界の株式中心)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR311185",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・グローバル・ボンド・ファンド",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311025",
    "frame": "growth"
  },
  {
    "name": "いちよし・グローバル好配当戦略ファンド(年6回決算型)",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311246",
    "frame": "growth"
  },
  {
    "name": "BNY米国エクセレント・バリュー・ファンド",
    "company": "BNYメロン・インベストメント・マネジメント・ジャパン株式会社",
    "fundCode": "85311247",
    "frame": "growth"
  },
  {
    "name": "ドラッカー研究所日本株ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311246",
    "frame": "growth"
  },
  {
    "name": "好配当グリーン・バランス・オープン",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311084",
    "frame": "growth"
  },
  {
    "name": "(アムンディ・インデックスシリーズ)インド株",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58313246",
    "frame": "growth"
  },
  {
    "name": "(アムンディ・インデックスシリーズ)オールカントリー・大型成長株",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311246",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・ジャパン・ハイ・コンビクション・ストラテジー",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311246",
    "frame": "growth"
  },
  {
    "name": "(アムンディ・インデックスシリーズ)オールカントリー・高配当株",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58312246",
    "frame": "growth"
  },
  {
    "name": "SBI岡三 NASDAQ AIアクティブファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311246",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT ベトナム株インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312246",
    "frame": "growth"
  },
  {
    "name": "アジア半導体関連フォーカスファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311247",
    "frame": "growth"
  },
  {
    "name": "DLIBJ公社債オープン(短期コース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731199C",
    "frame": "growth"
  },
  {
    "name": "DLIBJ公社債オープン(中期コース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731299C",
    "frame": "growth"
  },
  {
    "name": "SMT グローバルサウス株式インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311247",
    "frame": "growth"
  },
  {
    "name": "野村インド債券ファンド(年2回決算型)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131316C",
    "frame": "growth"
  },
  {
    "name": "SBI・i シェアーズ・全世界債券インデックス・ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311247",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 日経半導体株インデックス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311247",
    "frame": "growth"
  },
  {
    "name": "日本株好配当ファンド(奇数月決算型)",
    "company": "ちばぎんアセットマネジメント株式会社",
    "fundCode": "AH311248",
    "frame": "growth"
  },
  {
    "name": "三井住友DS日本債券ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311983",
    "frame": "growth"
  },
  {
    "name": "GSグローバル社債ターゲット追加型2024-09",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311249",
    "frame": "growth"
  },
  {
    "name": "マスターズ・マルチアセット・ファンド(安定型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314247",
    "frame": "growth"
  },
  {
    "name": "マスターズ・マルチアセット・ファンド(積極型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316247",
    "frame": "growth"
  },
  {
    "name": "マスターズ・マルチアセット・ファンド(バランス型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315247",
    "frame": "growth"
  },
  {
    "name": "TTI・グローバル中小型厳選株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311248",
    "frame": "growth"
  },
  {
    "name": "HSBC グローバル・ターゲット利回り債券ファンド2024-07(限定追加型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311247",
    "frame": "growth"
  },
  {
    "name": "一歩先いく グローバル・イノベーション企業インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311248",
    "frame": "growth"
  },
  {
    "name": "イノベーション・インデックス・AI",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314186",
    "frame": "growth"
  },
  {
    "name": "カナダ株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y312248",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・S日本半導体株式インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311249",
    "frame": "growth"
  },
  {
    "name": "ひふみクロスオーバーpro",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C311249",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・マゼラン・米国成長株ファンド",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311249",
    "frame": "growth"
  },
  {
    "name": "iTrust日本株式",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311166",
    "frame": "growth"
  },
  {
    "name": "あおぞら・ 新グローバル・プレミアム・ファンド(当初漸増期間付、限定追加型) 2024-07",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE312247",
    "frame": "growth"
  },
  {
    "name": "グローバル・サプライチェーン・ファンド(為替ヘッジあり)",
    "company": "ベイビュー・アセット・マネジメント株式会社",
    "fundCode": "9M311249",
    "frame": "growth"
  },
  {
    "name": "グローバル・サプライチェーン・ファンド(為替ヘッジなし)",
    "company": "ベイビュー・アセット・マネジメント株式会社",
    "fundCode": "9M312249",
    "frame": "growth"
  },
  {
    "name": "楽天・高配当株式・米国ファンド(四半期決算型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312249",
    "frame": "growth"
  },
  {
    "name": "野村ブラックロック世界優良企業厳選ファンド Bコース",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313249",
    "frame": "growth"
  },
  {
    "name": "米国インフラ・ビルダー株式ファンド(為替ヘッジあり)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431B171",
    "frame": "growth"
  },
  {
    "name": "米国インフラ・ビルダー株式ファンド(為替ヘッジなし)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431C171",
    "frame": "growth"
  },
  {
    "name": "オール・カントリー好配当リバランスオープン(資産成長型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311249",
    "frame": "growth"
  },
  {
    "name": "オール・カントリー好配当リバランスオープン(年4回決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312249",
    "frame": "growth"
  },
  {
    "name": "米国50社厳選株式ファンド",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311249",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Neo AIテクノロジー",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311249",
    "frame": "growth"
  },
  {
    "name": "eMAXIS/PayPay証券 全世界バランス",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312249",
    "frame": "growth"
  },
  {
    "name": "SBI全世界高配当株式ファンド (年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931124A",
    "frame": "growth"
  },
  {
    "name": "Jリートインデックス・オープン(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312091",
    "frame": "growth"
  },
  {
    "name": "外国株式SMTBセレクション(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311157",
    "frame": "growth"
  },
  {
    "name": "グローバルリートインデックス・オープン(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313091",
    "frame": "growth"
  },
  {
    "name": "国内株式SMTBセレクション(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312152",
    "frame": "growth"
  },
  {
    "name": "コモディティ・オープン(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314091",
    "frame": "growth"
  },
  {
    "name": "SBI全世界高配当株式ファンド (年1回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931224A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ欧州株式厳選ファンド フルインベストメントコース",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311147",
    "frame": "growth"
  },
  {
    "name": "ニッセイ欧州株式厳選ファンド リスクコントロールコース",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312147",
    "frame": "growth"
  },
  {
    "name": "ニッセイS&P500リカバリー戦略株式ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931124A",
    "frame": "growth"
  },
  {
    "name": "まあるい未来共創ファンド cotocoto",
    "company": "コモンズ投信株式会社",
    "fundCode": "9N31124A",
    "frame": "growth"
  },
  {
    "name": "日本株&Jリート 好配当フォーカスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311167",
    "frame": "growth"
  },
  {
    "name": "One割安日本株ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731213C",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・世界高成長株投信(隔月決算・予想分配金提示型)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "3931224A",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・世界高成長株投信(年2回決算型)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "3931124A",
    "frame": "growth"
  },
  {
    "name": "野村インデックスファンド・日経半導体株",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131124A",
    "frame": "growth"
  },
  {
    "name": "アレス・グローバル・ハイイールド債券ファンド(為替ヘッジなし/年1回決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931324A",
    "frame": "growth"
  },
  {
    "name": "アレス・グローバル・ハイイールド債券ファンド(為替ヘッジなし/年4回決算型)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931424A",
    "frame": "growth"
  },
  {
    "name": "ニュートン・パワー・イノベーション・ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931124A",
    "frame": "growth"
  },
  {
    "name": "ニュートン・パワー・イノベーション・ファンド(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "7931224A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックス・SOX(米国半導体株)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931224A",
    "frame": "growth"
  },
  {
    "name": "SBI-フランクリン・テンプルトン・インド株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931324A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 先進国株式(含む日本)<オール先進国>",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331124A",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレーUSハイイールド債券ファンド(年1回決算型)(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315207",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレーUSハイイールド債券ファンド(年1回決算型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316207",
    "frame": "growth"
  },
  {
    "name": "JPXプライム150ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431824A",
    "frame": "growth"
  },
  {
    "name": "米国株式・研究開発リバランスファンド",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "1031124B",
    "frame": "growth"
  },
  {
    "name": "iFree オールカントリー(全世界株式)ESGインデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311225",
    "frame": "growth"
  },
  {
    "name": "ダルトン・ジャパン・パートナー戦略ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231124C",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート・グローバル株式インデックス・オープン",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55312241",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリートS&P500インデックス・オープン",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55314241",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリートTOPIXインデックス・オープン",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55311241",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート全世界株式インデックス・オープン",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55313241",
    "frame": "growth"
  },
  {
    "name": "あおぞら・日本株式アラインメント・ファンド",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE31124B",
    "frame": "growth"
  },
  {
    "name": "ウエリントン・トータル・リターン債券ファンド(年1回決算型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731324B",
    "frame": "growth"
  },
  {
    "name": "ウエリントン・トータル・リターン債券ファンド(年4回決算型)(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731424B",
    "frame": "growth"
  },
  {
    "name": "iFreeHOLD メキシコ国債(MBONO2047)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431224B",
    "frame": "growth"
  },
  {
    "name": "iFreeWallet メキシコペソ(MXN)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431324B",
    "frame": "growth"
  },
  {
    "name": "HSBC インド小型株式オープン",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131124C",
    "frame": "growth"
  },
  {
    "name": "明治安田ゴールド/オール・カントリー株式戦略ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "1231224C",
    "frame": "growth"
  },
  {
    "name": "先進国高利益成長ファンド(年1回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31324C",
    "frame": "growth"
  },
  {
    "name": "先進国高利益成長ファンド(年4回決算・予想分配金提示型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31424C",
    "frame": "growth"
  },
  {
    "name": "りそな日本高株主還元ファンド(年1回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31124C",
    "frame": "growth"
  },
  {
    "name": "りそな日本高株主還元ファンド(年4回決算型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31224C",
    "frame": "growth"
  },
  {
    "name": "日経平均高配当利回り株ファンドII",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331124B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インド中小型株式ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931424C",
    "frame": "growth"
  },
  {
    "name": "HSBC インドテック株式インデックスファンド",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131224C",
    "frame": "growth"
  },
  {
    "name": "SBI・S・米国高配当株式ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931224C",
    "frame": "growth"
  },
  {
    "name": "Oneピュア・インド株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312065",
    "frame": "growth"
  },
  {
    "name": "ジャパン・コア・アルファ",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE31124C",
    "frame": "growth"
  },
  {
    "name": "インド・イノベーション・フォーカスファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931124C",
    "frame": "growth"
  },
  {
    "name": "iFreePlus 世界トレンド・テクノロジー株(Zテック20)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431124C",
    "frame": "growth"
  },
  {
    "name": "しんきんフコクESG日本株式ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311194",
    "frame": "growth"
  },
  {
    "name": "一歩先いく 華麗なるインド・トップ10+インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431224C",
    "frame": "growth"
  },
  {
    "name": "インド中小型成長株式ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311251",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード インド株式Nifty50",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731624C",
    "frame": "growth"
  },
  {
    "name": "アメリカ国家戦略関連株ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931224C",
    "frame": "growth"
  },
  {
    "name": "東海東京ヌビーン・リタイアメントファンド(資産安定型)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR313252",
    "frame": "growth"
  },
  {
    "name": "東海東京ヌビーン・リタイアメントファンド(年5%目標取崩し型)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR312252",
    "frame": "growth"
  },
  {
    "name": "東海東京ヌビーン・リタイアメントファンド(年510円目標取崩し型)",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR311252",
    "frame": "growth"
  },
  {
    "name": "東京海上・上場オルタナティブ・アセット・マネージャーズ戦略ファンド",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311251",
    "frame": "growth"
  },
  {
    "name": "あおぞら・ 新グローバル・プレミアム・ファンド(当初漸増期間付、限定追加型) 2025-01",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE312251",
    "frame": "growth"
  },
  {
    "name": "SBI サウジアラビア株式インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311251",
    "frame": "growth"
  },
  {
    "name": "My SMT ラッセル1000米国株式インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312251",
    "frame": "growth"
  },
  {
    "name": "資本効率向上ファンド",
    "company": "ファイブスター投信投資顧問株式会社",
    "fundCode": "AB311252",
    "frame": "growth"
  },
  {
    "name": "ダイワ・アンビット・インド小型株ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04315251",
    "frame": "growth"
  },
  {
    "name": "ピクテ・ウォーター・ファンド",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42311252",
    "frame": "growth"
  },
  {
    "name": "楽天・高配当株式・日本ファンド(四半期決算型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312252",
    "frame": "growth"
  },
  {
    "name": "ベトナム成長株ファンド(年1回決算型)",
    "company": "キャピタル アセットマネジメント株式会社",
    "fundCode": "9A311252",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インド株式ファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311252",
    "frame": "growth"
  },
  {
    "name": "SMT ダウ・ジョーンズ インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431513B",
    "frame": "growth"
  },
  {
    "name": "EXE-i 全世界REITファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89315135",
    "frame": "growth"
  },
  {
    "name": "EXE-i 全世界中小型株式ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89313135",
    "frame": "growth"
  },
  {
    "name": "SBI・iシェアーズ・全世界債券インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89314135",
    "frame": "growth"
  },
  {
    "name": "SMTAMダウ・ジョーンズ インデックスファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64315094",
    "frame": "growth"
  },
  {
    "name": "楽天・プラス・S&P500インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31223A",
    "frame": "growth"
  },
  {
    "name": "楽天・プラス・オールカントリー株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31123A",
    "frame": "growth"
  },
  {
    "name": "楽天・プラス・先進国株式(除く日本)インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31323C",
    "frame": "growth"
  },
  {
    "name": "楽天・プラス・日経225インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31223C",
    "frame": "growth"
  },
  {
    "name": "楽天・プラス・NASDAQ-100インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314241",
    "frame": "growth"
  },
  {
    "name": "楽天・プラス・SOXインデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I315241",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・パワーテクノロジー株式ファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313252",
    "frame": "growth"
  },
  {
    "name": "サイバーセキュリティ株式オープン<3ヵ月決算型>(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311252",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2035(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31124A",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2040(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31224A",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2045(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31324A",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2050(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31424A",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2055(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31524A",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2060(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31624A",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2065(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31724A",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド国債ファンド(3ヵ月決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83311252",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・インド国債ファンド(年2回決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83312252",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・バランスファンド(安定コース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79312252",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・バランスファンド(成長コース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314252",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・バランスファンド(積極コース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315252",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・バランスファンド(標準コース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79313252",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・バランスファンド(保守コース)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311252",
    "frame": "growth"
  },
  {
    "name": "楽天・高配当株式・米国VYMファンド(四半期決算型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312253",
    "frame": "growth"
  },
  {
    "name": "みずほサステナブルファンドシリーズ - ロベコ・スマート・エネルギー",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313253",
    "frame": "growth"
  },
  {
    "name": "アムンディ・米国コア株式ファンド(為替ヘッジあり/年2回決算型)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58312252",
    "frame": "growth"
  },
  {
    "name": "アムンディ・米国コア株式ファンド(為替ヘッジなし/年2回決算型)",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311252",
    "frame": "growth"
  },
  {
    "name": "米国マイクロキャップ株式ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311253",
    "frame": "growth"
  },
  {
    "name": "Smart-i 先進国株式ESGインデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31219A",
    "frame": "growth"
  },
  {
    "name": "しんきん日米半導体株ファンド",
    "company": "しんきんアセットマネジメント投信株式会社",
    "fundCode": "59311253",
    "frame": "growth"
  },
  {
    "name": "ウエリントン・トータル・リターン債券ファンド(年1回決算型)(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731E253",
    "frame": "growth"
  },
  {
    "name": "ウエリントン・トータル・リターン債券ファンド(年4回決算型)(為替ヘッジあり)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731F253",
    "frame": "growth"
  },
  {
    "name": "グローバル新世代関連株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313164",
    "frame": "growth"
  },
  {
    "name": "ベイリー・ギフォード世界長期成長株ファンド",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311191",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>日米6資産分散ファンド(安定運用コース)(為替ヘッジなし)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311253",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>日米6資産分散ファンド(資産形成コース)(為替ヘッジなし)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312253",
    "frame": "growth"
  },
  {
    "name": "外国株式インデックス・オープン(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312072",
    "frame": "growth"
  },
  {
    "name": "外国債券インデックス・オープン(SMA専用)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64314072",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・欧州割安成長株投信 Aコース(為替ヘッジあり)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311254",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・欧州割安成長株投信 Bコース(為替ヘッジなし)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32312254",
    "frame": "growth"
  },
  {
    "name": "りそな・日経225オープン",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311997",
    "frame": "growth"
  },
  {
    "name": "つみたて日本株式(読売333)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311254",
    "frame": "growth"
  },
  {
    "name": "(アムンディ・インデックスシリーズ)日本・高配当株",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311254",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・グランド・アセット・アロケーション",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311255",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2040",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49311254",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2050",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49312254",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2060",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49313254",
    "frame": "growth"
  },
  {
    "name": "東京海上ターゲット・イヤー・ファンド2070",
    "company": "東京海上アセットマネジメント株式会社",
    "fundCode": "49314254",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・スマート・インカム(為替ヘッジあり、隔月決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17315255",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・スマート・インカム(為替ヘッジあり、年1回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17314255",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・スマート・インカム(為替ヘッジなし、隔月決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17313255",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・スマート・インカム(為替ヘッジなし、年1回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17312255",
    "frame": "growth"
  },
  {
    "name": "グローバル株式インカム(3ヵ月決算型)予想分配金提示型",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312255",
    "frame": "growth"
  },
  {
    "name": "グローバル株式インカム(年1回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311255",
    "frame": "growth"
  },
  {
    "name": "ブランディワイン米国債券戦略ファンド(為替ヘッジあり)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311242",
    "frame": "growth"
  },
  {
    "name": "ブランディワイン米国債券戦略ファンド(為替ヘッジなし)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312242",
    "frame": "growth"
  },
  {
    "name": "外国株式アクティブファンドセレクション(ラップ専用)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313191",
    "frame": "growth"
  },
  {
    "name": "外国債券アクティブファンドセレクション(ラップ専用)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314191",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 国内株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 国内債券",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 国内リート",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 新興国株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03319214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 新興国債券",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331A214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 先進国株式",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03316214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 先進国債券",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03317214",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 先進国リート",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03318214",
    "frame": "growth"
  },
  {
    "name": "USグローシリーズ(株100)",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI311256",
    "frame": "growth"
  },
  {
    "name": "USグローシリーズ(株40)",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI313256",
    "frame": "growth"
  },
  {
    "name": "USグローシリーズ(株70)",
    "company": "スカイオーシャン・アセットマネジメント株式会社",
    "fundCode": "AI312256",
    "frame": "growth"
  },
  {
    "name": "国内株式アクティブファンドセレクション(ラップ専用)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311191",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 先進国株式インデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331509A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 先進国債券インデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331609A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 先進国債券インデックス(除く日本・為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312167",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 先進国リートインデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331709A",
    "frame": "growth"
  },
  {
    "name": "eMAXIS 全世界株式インデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312107",
    "frame": "growth"
  },
  {
    "name": "susten新興国インカム・インデックスファンド(年4回決算型)愛称:エマージング・インカム",
    "company": "株式会社sustenキャピタル・マネジメント",
    "fundCode": "B6311255",
    "frame": "growth"
  },
  {
    "name": "HSBC グローバル・ターゲット利回り債券ファンド2025-05(限定追加型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "51311255",
    "frame": "growth"
  },
  {
    "name": "次世代AI株式戦略ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311256",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 先進国株式(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312221",
    "frame": "growth"
  },
  {
    "name": "ラップ向けインデックスf 先進国債券(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313221",
    "frame": "growth"
  },
  {
    "name": "全世界株式インデックス・ファンド(オール・カントリー)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311256",
    "frame": "growth"
  },
  {
    "name": "Smart-i 米国株式配当貴族インデックス",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311256",
    "frame": "growth"
  },
  {
    "name": "九州未来ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311256",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス 米国株式リサーチファンド",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW311256",
    "frame": "growth"
  },
  {
    "name": "LGT上場プライベート・エクイティ戦略ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311228",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード インド株式NiftyMidcap50",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311255",
    "frame": "growth"
  },
  {
    "name": "SBI・V・米国REITファンド (年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89313256",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>日米6資産分散ファンド(安定運用コース)(為替ヘッジあり)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312183",
    "frame": "growth"
  },
  {
    "name": "農林中金<パートナーズ>日米6資産分散ファンド(資産形成コース)(為替ヘッジあり)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311183",
    "frame": "growth"
  },
  {
    "name": "ひふみワールド",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C31119A",
    "frame": "growth"
  },
  {
    "name": "ひふみワールド+",
    "company": "レオス・キャピタルワークス株式会社",
    "fundCode": "9C31119C",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(積極型)年3%目標分配金受取型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01313256",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(積極型)年6%目標分配金受取型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314256",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(保守型)年3%目標分配金受取型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312256",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2070",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312256",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2070(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ314256",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2075",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ313256",
    "frame": "growth"
  },
  {
    "name": "りそなターゲット・イヤー・ファンド2075(運用継続型)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ315256",
    "frame": "growth"
  },
  {
    "name": "ブラックロック日本小型株オープン",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831B987",
    "frame": "growth"
  },
  {
    "name": "フロンティア・ワールド・インカム・ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318139",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 資産配分最適化バランス(R1)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311257",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 資産配分最適化バランス(R2)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312257",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 資産配分最適化バランス(R3)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03313257",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 資産配分最適化バランス(R4)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03314257",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 資産配分最適化バランス(R5)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315257",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(普通型)年3%目標分配金受取型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131119B",
    "frame": "growth"
  },
  {
    "name": "のむラップ・ファンド(普通型)年6%目標分配金受取型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131219B",
    "frame": "growth"
  },
  {
    "name": "野村国内株式アクティブオープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311002",
    "frame": "growth"
  },
  {
    "name": "SBIネクスト・フロンティア高配当株式ファンド(年4回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89314256",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・S米国株式500インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931223B",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・S米国連続増配株式インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931223C",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスバランスファンド(4資産均等型)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313158",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスバランスファンド(6資産均等型)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931617A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インデックスバランスファンド(8資産均等型)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311182",
    "frame": "growth"
  },
  {
    "name": "ニッセイJPX日経400インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313151",
    "frame": "growth"
  },
  {
    "name": "ニッセイJリートインデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314136",
    "frame": "growth"
  },
  {
    "name": "ニッセイNASDAQ100インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313233",
    "frame": "growth"
  },
  {
    "name": "ニッセイSOX指数インデックスファンド(米国半導体株)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314233",
    "frame": "growth"
  },
  {
    "name": "ニッセイTOPIXインデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312154",
    "frame": "growth"
  },
  {
    "name": "ニッセイ外国株式インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931113C",
    "frame": "growth"
  },
  {
    "name": "ニッセイ外国債券インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931213C",
    "frame": "growth"
  },
  {
    "name": "ニッセイグローバルリートインデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931313C",
    "frame": "growth"
  },
  {
    "name": "ニッセイ国内債券インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314151",
    "frame": "growth"
  },
  {
    "name": "ニッセイ新興国株式インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931517A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ世界株式ファンド(GDP型バスケット)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312206",
    "frame": "growth"
  },
  {
    "name": "ニッセイ日経平均インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931316B",
    "frame": "growth"
  },
  {
    "name": "ニッセイゴールドファンド(為替ヘッジあり)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312244",
    "frame": "growth"
  },
  {
    "name": "ニッセイゴールドファンド(為替ヘッジなし)<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313244",
    "frame": "growth"
  },
  {
    "name": "楽天・ターゲットイヤー2055",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311257",
    "frame": "growth"
  },
  {
    "name": "楽天・ターゲットイヤー2060",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312257",
    "frame": "growth"
  },
  {
    "name": "ベトナム&アジア成長国ファンド",
    "company": "ファイブスター投信投資顧問株式会社",
    "fundCode": "AB311257",
    "frame": "growth"
  },
  {
    "name": "SMT 日本株配当貴族インデックス・オープン",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64316168",
    "frame": "growth"
  },
  {
    "name": "あおぞら・ 新グローバル・プレミアム・ファンド(当初漸増期間付、限定追加型) 2025-07",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE312257",
    "frame": "growth"
  },
  {
    "name": "楽天・エマージング株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I315257",
    "frame": "growth"
  },
  {
    "name": "楽天・オールカントリー株式(除く日本)インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313257",
    "frame": "growth"
  },
  {
    "name": "楽天・高配当株式・日本ファンド(資産成長型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I314257",
    "frame": "growth"
  },
  {
    "name": "楽天・シュワブ・高配当株式・米国ファンド(資産成長型)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I316257",
    "frame": "growth"
  },
  {
    "name": "GS Plus全世界株式(オール・カントリー)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311257",
    "frame": "growth"
  },
  {
    "name": "FWニッセイゴールドファンド",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311257",
    "frame": "growth"
  },
  {
    "name": "SBI・V・全世界株式(除く米国)ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311257",
    "frame": "growth"
  },
  {
    "name": "ダイワ/バリュー・パートナーズ・チャイナ・イノベーター・ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431518B",
    "frame": "growth"
  },
  {
    "name": "One/ウエリントン・コントラリアン・バリュー・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312257",
    "frame": "growth"
  },
  {
    "name": "暗号資産関連株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313257",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー 米国株式インサイト戦略ファンド(為替ヘッジあり)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311259",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー 米国株式インサイト戦略ファンド(為替ヘッジなし)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03312259",
    "frame": "growth"
  },
  {
    "name": "iFreeNEXT 全世界半導体株インデックス",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04312257",
    "frame": "growth"
  },
  {
    "name": "グローバル・ダイナミックチェンジ",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311235",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート・ゴールド・オープン(為替ヘッジあり)",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55312258",
    "frame": "growth"
  },
  {
    "name": "ステート・ストリート・ゴールド・オープン(為替ヘッジなし)",
    "company": "ステート・ストリート・グローバル・アドバイザーズ株式会社",
    "fundCode": "55311258",
    "frame": "growth"
  },
  {
    "name": "GSグローバル(除く米国)割安高配当株式ファンド 年1回決算コース",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35311258",
    "frame": "growth"
  },
  {
    "name": "GSグローバル(除く米国)割安高配当株式ファンド 年4回決算コース",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "35312258",
    "frame": "growth"
  },
  {
    "name": "My SMT ラッセル2000米国中小型株式インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64312257",
    "frame": "growth"
  },
  {
    "name": "My SMT ラッセル3000全米株式インデックス(ノーロード)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64313257",
    "frame": "growth"
  },
  {
    "name": "全世界株式・ゴールドアロケーションファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312258",
    "frame": "growth"
  },
  {
    "name": "日本株式・ゴールドアロケーションファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311258",
    "frame": "growth"
  },
  {
    "name": "楽天・欧州株式インデックス・ファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312258",
    "frame": "growth"
  },
  {
    "name": "JAバンクよりそいノーロード新興国株式",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25315257",
    "frame": "growth"
  },
  {
    "name": "JAバンクよりそいノーロード先進国株式(除く日本)",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25314257",
    "frame": "growth"
  },
  {
    "name": "JAバンクよりそいノーロード全世界株式",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25313257",
    "frame": "growth"
  },
  {
    "name": "JAバンクよりそいノーロード日本株式 日経225",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311257",
    "frame": "growth"
  },
  {
    "name": "JAバンクよりそいノーロード米国株式 S&P500",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312257",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 先進国株式インデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03319172",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 先進国債券インデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331A172",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 先進国リートインデックス(除く日本)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331219A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インド株式オープン(3ヵ月決算型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313258",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・インド株式オープン(資産成長型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29312258",
    "frame": "growth"
  },
  {
    "name": "iFreeHOLD 日本国債(JGB2056)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311258",
    "frame": "growth"
  },
  {
    "name": "AIプラスファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731316C",
    "frame": "growth"
  },
  {
    "name": "LOSA長期保有型国際分散インデックスファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731M15C",
    "frame": "growth"
  },
  {
    "name": "インデックスオープン・アメリカ株式",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731B233",
    "frame": "growth"
  },
  {
    "name": "インデックスオープン・世界株式",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315236",
    "frame": "growth"
  },
  {
    "name": "インデックスオープン・先進国株式",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316236",
    "frame": "growth"
  },
  {
    "name": "インデックスオープン・日経225",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316213",
    "frame": "growth"
  },
  {
    "name": "米国IPOニューステージ・ファンド<為替ヘッジあり>(資産成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331119B",
    "frame": "growth"
  },
  {
    "name": "米国IPOニューステージ・ファンド<為替ヘッジあり>(年2回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331219B",
    "frame": "growth"
  },
  {
    "name": "米国IPOニューステージ・ファンド<為替ヘッジなし>(資産成長型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331319B",
    "frame": "growth"
  },
  {
    "name": "米国IPOニューステージ・ファンド<為替ヘッジなし>(年2回決算型)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331419B",
    "frame": "growth"
  },
  {
    "name": "ドナルド・スミス グローバル・ディープバリュー戦略株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311259",
    "frame": "growth"
  },
  {
    "name": "ゴールデントリオ(米国株・インド株・ゴールド)(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04313258",
    "frame": "growth"
  },
  {
    "name": "ゴールデントリオ(米国株・インド株・ゴールド)(予想分配金提示型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04314258",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・S欧州株式500インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29314259",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ S&P500配当貴族インデックスファンド<為替ヘッジあり>",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331313C",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ S&P500配当貴族インデックスファンド<為替ヘッジなし>",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "0331213C",
    "frame": "growth"
  },
  {
    "name": "SBI・S・米国高配当株式ファンド(年1回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312259",
    "frame": "growth"
  },
  {
    "name": "ニューバーガー・インド成長株ファンド(資産成長型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68311259",
    "frame": "growth"
  },
  {
    "name": "ニューバーガー・インド成長株ファンド(年4回決算型)",
    "company": "朝日ライフ アセットマネジメント株式会社",
    "fundCode": "68312259",
    "frame": "growth"
  },
  {
    "name": "SBI日本高配当株式ファンド(年1回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89313259",
    "frame": "growth"
  },
  {
    "name": "カレラ英連邦3国ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y311259",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・アクティブ・ラップファンド(アグレッシブ)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231125A",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・アクティブ・ラップファンド(グロース)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231325A",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・アクティブ・ラップファンド(スタンダード)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "3231225A",
    "frame": "growth"
  },
  {
    "name": "SBI 次世代テクノロジー戦略ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89314259",
    "frame": "growth"
  },
  {
    "name": "インベスコQQQ メガ・ファンド",
    "company": "インベスコ・アセット・マネジメント株式会社",
    "fundCode": "18311256",
    "frame": "growth"
  },
  {
    "name": "Niつみインデックスラップ世界10指数(安定成長型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312236",
    "frame": "growth"
  },
  {
    "name": "Niつみインデックスラップ世界10指数(均等型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311236",
    "frame": "growth"
  },
  {
    "name": "Tracers MSCIオール・カントリー・インデックス(全世界株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312234",
    "frame": "growth"
  },
  {
    "name": "Tracers S&P500配当貴族インデックス(米国株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231122A",
    "frame": "growth"
  },
  {
    "name": "Tracers グローバル3分法(おとなのバランス)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311232",
    "frame": "growth"
  },
  {
    "name": "アジア・ヘルスケア株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311151",
    "frame": "growth"
  },
  {
    "name": "アセアン・ギガトレンド株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02314239",
    "frame": "growth"
  },
  {
    "name": "五大陸株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311066",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド225(日本株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231O01A",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドDAX(ドイツ株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312143",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドJPX日経400",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02317141",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドJリート(東証REIT指数)偶数月分配型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231123C",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドMSCIオール・カントリー(全世界株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311234",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドNASDAQ100(アメリカ株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02314208",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドNYダウ30(アメリカ株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02314143",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドS&P500(アメリカ株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02316228",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドSOX指数(米国上場半導体株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02313239",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドTOPIX(日本株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231N01A",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドTSP",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311862",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド海外株式(ヘッジあり)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231D01A",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド海外株式(ヘッジなし)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231C01A",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド海外債券(ヘッジあり)1年決算型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231F01A",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド海外債券(ヘッジなし)1年決算型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231E01A",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド海外新興国(エマージング)株式",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311084",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド海外新興国(エマージング)債券(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312084",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド日本債券(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231B01A",
    "frame": "growth"
  },
  {
    "name": "インド株式フォーカス(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312145",
    "frame": "growth"
  },
  {
    "name": "オーストラリア株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311089",
    "frame": "growth"
  },
  {
    "name": "キャピタルオープン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311791",
    "frame": "growth"
  },
  {
    "name": "グローバル・アグリカルチャー&フード株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311227",
    "frame": "growth"
  },
  {
    "name": "グローバル・エクスポネンシャル・イノベーション・ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311214",
    "frame": "growth"
  },
  {
    "name": "グローバル・スペース株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312188",
    "frame": "growth"
  },
  {
    "name": "グローバル・スペース株式ファンド(為替ヘッジあり・1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312216",
    "frame": "growth"
  },
  {
    "name": "グローバル・スペース株式ファンド(為替ヘッジあり・年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02313216",
    "frame": "growth"
  },
  {
    "name": "グローバル・スペース株式ファンド(年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311216",
    "frame": "growth"
  },
  {
    "name": "グローバル・フィンテック株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231116C",
    "frame": "growth"
  },
  {
    "name": "グローバル・フィンテック株式ファンド(為替ヘッジあり)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02313179",
    "frame": "growth"
  },
  {
    "name": "グローバル・フィンテック株式ファンド(為替ヘッジあり・年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02314179",
    "frame": "growth"
  },
  {
    "name": "グローバル・フィンテック株式ファンド(年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312179",
    "frame": "growth"
  },
  {
    "name": "グローバル・プロスペクティブ・ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312196",
    "frame": "growth"
  },
  {
    "name": "グローバル・メタバース株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311223",
    "frame": "growth"
  },
  {
    "name": "グローバル・モビリティ・サービス株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311181",
    "frame": "growth"
  },
  {
    "name": "グローバル・モビリティ・サービス株式ファンド(年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231120A",
    "frame": "growth"
  },
  {
    "name": "グローバル・ロボティクス株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311158",
    "frame": "growth"
  },
  {
    "name": "グローバル・ロボティクス株式ファンド(為替ヘッジあり・1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311171",
    "frame": "growth"
  },
  {
    "name": "グローバル・ロボティクス株式ファンド(為替ヘッジあり・年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312171",
    "frame": "growth"
  },
  {
    "name": "グローバル・ロボティクス株式ファンド(年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312158",
    "frame": "growth"
  },
  {
    "name": "グローバル高配当株式ファンド(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231105B",
    "frame": "growth"
  },
  {
    "name": "グローバル水素株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311218",
    "frame": "growth"
  },
  {
    "name": "グローバル全生物ゲノム株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312191",
    "frame": "growth"
  },
  {
    "name": "グローバル全生物ゲノム株式ファンド(年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311209",
    "frame": "growth"
  },
  {
    "name": "高金利先進国債券オープン(資産成長型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231708B",
    "frame": "growth"
  },
  {
    "name": "ゴールド・ファンド 為替ヘッジあり(SMA専用)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02319179",
    "frame": "growth"
  },
  {
    "name": "ゴールド・ファンド(為替ヘッジあり)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311177",
    "frame": "growth"
  },
  {
    "name": "ゴールド・ファンド(為替ヘッジなし)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312177",
    "frame": "growth"
  },
  {
    "name": "国内株式アクティブバリューファンド(SMA専用)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311191",
    "frame": "growth"
  },
  {
    "name": "国内株式エンハンスト運用戦略ファンド(SMA専用)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311152",
    "frame": "growth"
  },
  {
    "name": "財産3分法ファンド(不動産・債券・株式)奇数月分配型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311237",
    "frame": "growth"
  },
  {
    "name": "財産3分法ファンド(不動産・債券・株式)資産成長型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311098",
    "frame": "growth"
  },
  {
    "name": "ジパング・オーナー企業株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311221",
    "frame": "growth"
  },
  {
    "name": "ジパング企業債ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311197",
    "frame": "growth"
  },
  {
    "name": "ジャパン・ロボティクス株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311161",
    "frame": "growth"
  },
  {
    "name": "ジャパン・ロボティクス株式ファンド(年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312161",
    "frame": "growth"
  },
  {
    "name": "ジャパン半導体株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231223C",
    "frame": "growth"
  },
  {
    "name": "新シルクロード経済圏ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311179",
    "frame": "growth"
  },
  {
    "name": "深セン・イノベーション株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231217B",
    "frame": "growth"
  },
  {
    "name": "スマート・ファイブ(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02313137",
    "frame": "growth"
  },
  {
    "name": "世界好配当インフラ株ファンド(偶数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311074",
    "frame": "growth"
  },
  {
    "name": "世界高配当株式ファンド(資産成長型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231408B",
    "frame": "growth"
  },
  {
    "name": "先進国資本エマージング株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312166",
    "frame": "growth"
  },
  {
    "name": "チャイナ・エネルギー・イノベーション株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311219",
    "frame": "growth"
  },
  {
    "name": "中国A株ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312052",
    "frame": "growth"
  },
  {
    "name": "中国A株ファンド2",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311056",
    "frame": "growth"
  },
  {
    "name": "低位株オープン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311935",
    "frame": "growth"
  },
  {
    "name": "デジタル・トランスフォーメーション株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311207",
    "frame": "growth"
  },
  {
    "name": "日興USグローイング・ベンチャーファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231514A",
    "frame": "growth"
  },
  {
    "name": "日興アクティブ・ダイナミクス",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231100C",
    "frame": "growth"
  },
  {
    "name": "日興アクティブバリュー",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231197A",
    "frame": "growth"
  },
  {
    "name": "日興エコファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311998",
    "frame": "growth"
  },
  {
    "name": "日興エボリューション",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311004",
    "frame": "growth"
  },
  {
    "name": "日興キャッシュリッチ・ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311054",
    "frame": "growth"
  },
  {
    "name": "日興クオンツ・アクティブ・ジャパン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311002",
    "frame": "growth"
  },
  {
    "name": "日興グローイング・ベンチャーファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311037",
    "frame": "growth"
  },
  {
    "name": "日興グローバルREITファンド(6ヵ月決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311047",
    "frame": "growth"
  },
  {
    "name": "日興グローバルREITファンド資産成長型(ヘッジなし)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231308B",
    "frame": "growth"
  },
  {
    "name": "日興ジャパンオープン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311988",
    "frame": "growth"
  },
  {
    "name": "日興ジャパン高配当株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311085",
    "frame": "growth"
  },
  {
    "name": "日興中小型グロース・ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231205B",
    "frame": "growth"
  },
  {
    "name": "日本新興株オープン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231396C",
    "frame": "growth"
  },
  {
    "name": "年金積立 Jグロース",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231Q01A",
    "frame": "growth"
  },
  {
    "name": "年金積立 インターナショナル・グロース・ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231J01A",
    "frame": "growth"
  },
  {
    "name": "年金積立 日本短期債券オープン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231I01A",
    "frame": "growth"
  },
  {
    "name": "ビッグデータ新興国小型株ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231119A",
    "frame": "growth"
  },
  {
    "name": "華流国潮イノベーション株式ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311205",
    "frame": "growth"
  },
  {
    "name": "ファイン・ブレンド(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312239",
    "frame": "growth"
  },
  {
    "name": "ファイン・ブレンド(資産成長型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312133",
    "frame": "growth"
  },
  {
    "name": "米国超長期プライム社債ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02314233",
    "frame": "growth"
  },
  {
    "name": "米国超長期プライム社債ファンド(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02313233",
    "frame": "growth"
  },
  {
    "name": "ミュータント",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311009",
    "frame": "growth"
  },
  {
    "name": "ラサール・グローバルREITファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231313A",
    "frame": "growth"
  },
  {
    "name": "ラサール・グローバルREITファンド(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311238",
    "frame": "growth"
  },
  {
    "name": "利益還元成長株オープン",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311916",
    "frame": "growth"
  },
  {
    "name": "ロックフェラー・オールアメリカ株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231212C",
    "frame": "growth"
  },
  {
    "name": "Tracers 日経平均高配当株50インデックス(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02313241",
    "frame": "growth"
  },
  {
    "name": "インデックスファンド日経平均高配当株50(奇数月分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312241",
    "frame": "growth"
  },
  {
    "name": "Tracers S&P500トップ10インデックス(米国株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312245",
    "frame": "growth"
  },
  {
    "name": "全世界超分散株式ファンド",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311245",
    "frame": "growth"
  },
  {
    "name": "2050年満期米国国債ファンド(年4回分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311246",
    "frame": "growth"
  },
  {
    "name": "インデックスポートフォリオ",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231187B",
    "frame": "growth"
  },
  {
    "name": "新・ミューズニッチ米国BDCファンド(為替ヘッジあり・年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02314172",
    "frame": "growth"
  },
  {
    "name": "新・ミューズニッチ米国BDCファンド(為替ヘッジなし・年2回決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312172",
    "frame": "growth"
  },
  {
    "name": "新・ミューズニッチ米国BDCファンド(為替ヘッジなし・年4回分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311248",
    "frame": "growth"
  },
  {
    "name": "インデックスファンドNifty50(インド株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231124A",
    "frame": "growth"
  },
  {
    "name": "Tracers S&P1000インデックス(米国中小型株式)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231124B",
    "frame": "growth"
  },
  {
    "name": "グローバルCoCo債ファンド(為替ヘッジあり・1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231324B",
    "frame": "growth"
  },
  {
    "name": "グローバルCoCo債ファンド(為替ヘッジあり・年4回分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231524B",
    "frame": "growth"
  },
  {
    "name": "グローバルCoCo債ファンド(為替ヘッジなし・1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231224B",
    "frame": "growth"
  },
  {
    "name": "グローバルCoCo債ファンド(為替ヘッジなし・年4回分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231424B",
    "frame": "growth"
  },
  {
    "name": "Tracers DJ USディビデンド100(米国高配当株式)年4回分配型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312255",
    "frame": "growth"
  },
  {
    "name": "ジャパン・クリエイティブコンテンツ関連株ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311259",
    "frame": "growth"
  },
  {
    "name": "にいがた未来応援アジア・パシフィック株式ファンド",
    "company": "明治安田アセットマネジメント株式会社",
    "fundCode": "12311258",
    "frame": "growth"
  },
  {
    "name": "パリミキ・ファミリーオフィス・ファンド",
    "company": "株式会社パリミキアセットマネジメント",
    "fundCode": "9H31125A",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード ゴールド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313259",
    "frame": "growth"
  },
  {
    "name": "野村世界業種別投資シリーズ(世界金融株投資)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01312098",
    "frame": "growth"
  },
  {
    "name": "野村世界業種別投資シリーズ(世界資源株投資)",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01314098",
    "frame": "growth"
  },
  {
    "name": "北米リート・ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09312186",
    "frame": "growth"
  },
  {
    "name": "野村日本バリュー厳選投資",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131125A",
    "frame": "growth"
  },
  {
    "name": "米国上場プライベートアセット(BDC)ファンド(年4回分配型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231225A",
    "frame": "growth"
  },
  {
    "name": "SBIネクスト・フロンティア高配当株式ファンド(年1回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931125B",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス キャピタル・アプリシエーション・ファンド Aコース(為替ヘッジあり)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW31125B",
    "frame": "growth"
  },
  {
    "name": "ティー・ロウ・プライス キャピタル・アプリシエーション・ファンド Bコース(為替ヘッジなし)",
    "company": "ティー・ロウ・プライス・ジャパン株式会社",
    "fundCode": "AW31225B",
    "frame": "growth"
  },
  {
    "name": "好利回り円債・短期戦略ファンド(年1回決算型)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31225A",
    "frame": "growth"
  },
  {
    "name": "好利回り円債・短期戦略ファンド(年4回決算型)",
    "company": "マニュライフ・インベストメント・マネジメント株式会社",
    "fundCode": "9K31125A",
    "frame": "growth"
  },
  {
    "name": "iFree 全世界株式インデックス(オール・カントリー)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431425A",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・S米国グロース株式メガ10インデックスファンド<購入・換金手数料なし>",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "2931225B",
    "frame": "growth"
  },
  {
    "name": "SMT 米国高配当&自社株買いファンド(年4回決算型)",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431225A",
    "frame": "growth"
  },
  {
    "name": "りそなゴールドファンド(為替ヘッジあり)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31325B",
    "frame": "growth"
  },
  {
    "name": "りそなゴールドファンド(為替ヘッジなし)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ31225B",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2030",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311183",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2035",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48312177",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2040",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48312183",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2045",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311177",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2050",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48313183",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2055",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311173",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2060",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48311202",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2065",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "48312202",
    "frame": "growth"
  },
  {
    "name": "ブラックロックLifePathファンド2070",
    "company": "ブラックロック・ジャパン株式会社",
    "fundCode": "4831124B",
    "frame": "growth"
  },
  {
    "name": "ブランデス欧州株ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431125B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード フォーカス 防衛・航空宇宙",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731925B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 米国物価連動国債(為替ヘッジあり)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731225B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 米国物価連動国債(為替ヘッジなし)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731325B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 米ドル建て社債(為替ヘッジあり)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731425B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 米ドル建て社債(為替ヘッジなし)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731525B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 米ドル建てハイイールド債券(為替ヘッジあり)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731625B",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 米ドル建てハイイールド債券(為替ヘッジなし)<ラップ専用>",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731725B",
    "frame": "growth"
  },
  {
    "name": "スマート・ファイブ(年3.6%目標分配プラス・奇数月決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231125B",
    "frame": "growth"
  },
  {
    "name": "Tracers 日本国債ウルトラロング(30年平均)年4回分配型",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "0231225B",
    "frame": "growth"
  },
  {
    "name": "マネックス・ゴールド・ファンド",
    "company": "マネックス・アセットマネジメント株式会社",
    "fundCode": "AL31125C",
    "frame": "growth"
  },
  {
    "name": "GS Plus ゴールド(為替ヘッジあり)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531225C",
    "frame": "growth"
  },
  {
    "name": "GS Plus ゴールド(為替ヘッジなし)",
    "company": "ゴールドマン・サックス・アセット・マネジメント株式会社",
    "fundCode": "3531325C",
    "frame": "growth"
  },
  {
    "name": "コモンズ・グローバル30ファンド",
    "company": "コモンズ投信株式会社",
    "fundCode": "9N31125C",
    "frame": "growth"
  },
  {
    "name": "SBI欧州高配当株式ファンド(年1回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931125C",
    "frame": "growth"
  },
  {
    "name": "ニューバーガー・プライベート・エクイティ・ファンド",
    "company": "ニューバーガー・バーマン株式会社",
    "fundCode": "AF31125C",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ全世界厳選プレミア株式ファンド(資産成長型)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "4031125B",
    "frame": "growth"
  },
  {
    "name": "パインブリッジ全世界厳選プレミア株式ファンド(四半期決算型)",
    "company": "パインブリッジ・インベストメンツ株式会社",
    "fundCode": "4031225B",
    "frame": "growth"
  },
  {
    "name": "DWS AIニューリーダーズ株式ファンド",
    "company": "ドイチェ・アセット・マネジメント株式会社",
    "fundCode": "3431125C",
    "frame": "growth"
  },
  {
    "name": "HSBC グローバル・ターゲット利回り債券ファンド2025-12(限定追加型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131125C",
    "frame": "growth"
  },
  {
    "name": "SBI ダルトン日本アジア・アクティビストファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "8931225C",
    "frame": "growth"
  },
  {
    "name": "SMT 欧州株式モメンタムファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431325C",
    "frame": "growth"
  },
  {
    "name": "SMT 中国株式モメンタムファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431525C",
    "frame": "growth"
  },
  {
    "name": "SMT 日本株式モメンタムファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431425C",
    "frame": "growth"
  },
  {
    "name": "SMT 米国株式モメンタムファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "6431225C",
    "frame": "growth"
  },
  {
    "name": "HSBC ユーロランド・バリュー株式ファンド(1年決算型)",
    "company": "HSBCアセットマネジメント株式会社",
    "fundCode": "5131225C",
    "frame": "growth"
  },
  {
    "name": "ちゅうぎん4資産バランスファンド<株式重視型>",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W31225C",
    "frame": "growth"
  },
  {
    "name": "ちゅうぎん4資産バランスファンド<債券重視型>",
    "company": "中銀アセットマネジメント株式会社",
    "fundCode": "9W31125C",
    "frame": "growth"
  },
  {
    "name": "ダイワ・ダイナミック・インド株ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431425C",
    "frame": "growth"
  },
  {
    "name": "ダイワ金融新時代ファンド(資産成長型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431325C",
    "frame": "growth"
  },
  {
    "name": "楽天ターゲットイヤー2030",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31116A",
    "frame": "growth"
  },
  {
    "name": "楽天ターゲットイヤー2040",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31216A",
    "frame": "growth"
  },
  {
    "name": "楽天ターゲットイヤー2050",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I31316A",
    "frame": "growth"
  },
  {
    "name": "インターナショナル・オポチュニティ・ファンド(為替ヘッジなし)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47316261",
    "frame": "growth"
  },
  {
    "name": "iFreeHOLD 日本国債2045(3・9月定期分配型)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311261",
    "frame": "growth"
  },
  {
    "name": "あおぞら・ 新グローバル・プレミアム・ファンド(当初漸増期間付、限定追加型) 2026-01",
    "company": "あおぞら投信株式会社",
    "fundCode": "AE312261",
    "frame": "growth"
  },
  {
    "name": "楽天・ゴールド・ファンド(為替ヘッジあり)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311261",
    "frame": "growth"
  },
  {
    "name": "楽天・ゴールド・ファンド(為替ヘッジなし)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I312261",
    "frame": "growth"
  },
  {
    "name": "楽天・プラチナ・ファンド(為替ヘッジなし)",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I313261",
    "frame": "growth"
  },
  {
    "name": "ニッセイ/FOLIO ねらってそなえる日経225",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29313261",
    "frame": "growth"
  },
  {
    "name": "ゴール・サポート・ファンドAコース",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25311261",
    "frame": "growth"
  },
  {
    "name": "ゴール・サポート・ファンドBコース",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25312261",
    "frame": "growth"
  },
  {
    "name": "ゴール・サポート・ファンドCコース",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25313261",
    "frame": "growth"
  },
  {
    "name": "ゴール・サポート・ファンドDコース",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25314261",
    "frame": "growth"
  },
  {
    "name": "ゴール・サポート・ファンドEコース",
    "company": "農林中金全共連アセットマネジメント株式会社",
    "fundCode": "25315261",
    "frame": "growth"
  },
  {
    "name": "ハイベータ日本株フォーカス・ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04315261",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・世界(除く米国)優良株投信(年2回決算型)",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311261",
    "frame": "growth"
  },
  {
    "name": "AMO J-REITオープン(年2回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47317151",
    "frame": "growth"
  },
  {
    "name": "One J-REITインデックスファンド(隔月決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731223B",
    "frame": "growth"
  },
  {
    "name": "One J-REITインデックスファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731913A",
    "frame": "growth"
  },
  {
    "name": "One新興市場日本株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731107B",
    "frame": "growth"
  },
  {
    "name": "米国好配当リバランスオープン(資産成長型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931123A",
    "frame": "growth"
  },
  {
    "name": "米国好配当リバランスオープン(年4回決算型)",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "0931223A",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・米国ハイ・イールド債券ファンド(年1回決算・為替ヘッジあり)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17313262",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・米国ハイ・イールド債券ファンド(年1回決算・為替ヘッジなし)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311262",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・米国ハイ・イールド債券ファンド(年4回決算・為替ヘッジあり)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17314262",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・米国ハイ・イールド債券ファンド(年4回決算・為替ヘッジなし)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17312262",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ 日本短期債券オープン",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03317262",
    "frame": "growth"
  },
  {
    "name": "(アムンディ・インデックスシリーズ)欧州・戦略的自律株",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58312262",
    "frame": "growth"
  },
  {
    "name": "(アムンディ・インデックスシリーズ)欧州株",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311262",
    "frame": "growth"
  },
  {
    "name": "AMO Jリートアクティブファンド(隔月決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731123A",
    "frame": "growth"
  },
  {
    "name": "One J-REITアクティブオープン年1回決算コース",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315138",
    "frame": "growth"
  },
  {
    "name": "Oneパッシブ資産分散ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731205C",
    "frame": "growth"
  },
  {
    "name": "ジャパン・コンテンツIP戦略株式ファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311262",
    "frame": "growth"
  },
  {
    "name": "SBI エネルギー・電力株式ファンド(年4 回決算型)",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311263",
    "frame": "growth"
  },
  {
    "name": "りそな つみたてインカムバランスファンド",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311262",
    "frame": "growth"
  },
  {
    "name": "ニュートン・量子技術関連株式ファンド",
    "company": "SBI岡三アセットマネジメント株式会社",
    "fundCode": "09311262",
    "frame": "growth"
  },
  {
    "name": "マテリアル・イノベーション戦略株式ファンド(為替ヘッジあり)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79314263",
    "frame": "growth"
  },
  {
    "name": "マテリアル・イノベーション戦略株式ファンド(為替ヘッジなし)",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79315263",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・グローバル・セレクト株式ファンド(為替ヘッジあり、年1回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17312263",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・グローバル・セレクト株式ファンド(為替ヘッジあり、年4回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17314263",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・グローバル・セレクト株式ファンド(為替ヘッジなし、年1回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17311263",
    "frame": "growth"
  },
  {
    "name": "JPモルガン・グローバル・セレクト株式ファンド(為替ヘッジなし、年4回決算型)",
    "company": "JPモルガン・アセット・マネジメント株式会社",
    "fundCode": "17313263",
    "frame": "growth"
  },
  {
    "name": "One 6資産バランスファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315066",
    "frame": "growth"
  },
  {
    "name": "One 6資産バランスファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47319154",
    "frame": "growth"
  },
  {
    "name": "One VIPフォーカス・ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311074",
    "frame": "growth"
  },
  {
    "name": "One新興企業日本株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312135",
    "frame": "growth"
  },
  {
    "name": "三井住友DS・FOLIO・AIマルチアセットファンド",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311264",
    "frame": "growth"
  },
  {
    "name": "イーストスプリング・グローバル・ダイナミック株式ファンド(年2回決算型)",
    "company": "イーストスプリング・インベストメンツ株式会社",
    "fundCode": "83312263",
    "frame": "growth"
  },
  {
    "name": "アムンディ・インド・オールキャップ割安成長株ファンド",
    "company": "アムンディ・ジャパン株式会社",
    "fundCode": "58311263",
    "frame": "growth"
  },
  {
    "name": "Oneベトナム株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311156",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード フォーカス 米国超大型テクノロジー7",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311263",
    "frame": "growth"
  },
  {
    "name": "One高格付インカム・オープン(1年決算コース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311089",
    "frame": "growth"
  },
  {
    "name": "GQGダイナミック・ハイクオリティ株式ファンド(資産成長型)",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45313263",
    "frame": "growth"
  },
  {
    "name": "未来の光 米国小型株式ファンド",
    "company": "カレラアセットマネジメント株式会社",
    "fundCode": "9Y311264",
    "frame": "growth"
  },
  {
    "name": "OneストラテジックJ-REITファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311082",
    "frame": "growth"
  },
  {
    "name": "One世界リートインデックスファンド(隔月分配型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47315239",
    "frame": "growth"
  },
  {
    "name": "グローバル金融株ファンド(1年決算型)",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02312264",
    "frame": "growth"
  },
  {
    "name": "エキサイティング・コンテンツ関連 世界株式戦略ファンド",
    "company": "三井住友トラスト・アセットマネジメント株式会社",
    "fundCode": "64311263",
    "frame": "growth"
  },
  {
    "name": "HSBC中東株式厳選ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45311264",
    "frame": "growth"
  },
  {
    "name": "グローバルAZボンドファンド",
    "company": "楽天投信投資顧問株式会社",
    "fundCode": "9I311264",
    "frame": "growth"
  },
  {
    "name": "三井住友・ワールド・パッケージ・オープン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311016",
    "frame": "growth"
  },
  {
    "name": "ノムラ・エマージング・オープン",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01311264",
    "frame": "growth"
  },
  {
    "name": "ニッセイ・パワーテクノロジー株式ファンド(3ヵ月決算・予想分配金提示型)",
    "company": "ニッセイアセットマネジメント株式会社",
    "fundCode": "29311264",
    "frame": "growth"
  },
  {
    "name": "JP4資産均等バランス",
    "company": "ゆうちょアセットマネジメント株式会社",
    "fundCode": "AK31117A",
    "frame": "growth"
  },
  {
    "name": "JP4資産バランスファンド 安定コース",
    "company": "ゆうちょアセットマネジメント株式会社",
    "fundCode": "AK311162",
    "frame": "growth"
  },
  {
    "name": "JP4資産バランスファンド 安定成長コース",
    "company": "ゆうちょアセットマネジメント株式会社",
    "fundCode": "AK312162",
    "frame": "growth"
  },
  {
    "name": "JP4資産バランスファンド 成長コース",
    "company": "ゆうちょアセットマネジメント株式会社",
    "fundCode": "AK313162",
    "frame": "growth"
  },
  {
    "name": "JP日米バランスファンド",
    "company": "ゆうちょアセットマネジメント株式会社",
    "fundCode": "AK31116A",
    "frame": "growth"
  },
  {
    "name": "グローバル・コモディティ・ファンド",
    "company": "SOMPOアセットマネジメント株式会社",
    "fundCode": "45312264",
    "frame": "growth"
  },
  {
    "name": "モルガン・スタンレー フィジカルAI株式ファンド",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04311264",
    "frame": "growth"
  },
  {
    "name": "JIA日本株バリューファンド",
    "company": "JAMPファンド・マネジメント株式会社",
    "fundCode": "BG311265",
    "frame": "growth"
  },
  {
    "name": "iTrust新興国株式",
    "company": "ピクテ・ジャパン株式会社",
    "fundCode": "42312174",
    "frame": "growth"
  },
  {
    "name": "グローバル株式トップフォーカス",
    "company": "アモーヴァ・アセットマネジメント株式会社",
    "fundCode": "02311163",
    "frame": "growth"
  },
  {
    "name": "お金のデザイン・デジタル・レンディング・ファンド",
    "company": "株式会社お金のデザイン",
    "fundCode": "AR311264",
    "frame": "growth"
  },
  {
    "name": "One高配当利回り厳選ジャパン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731119B",
    "frame": "growth"
  },
  {
    "name": "One/ティー・ロウ・プライス インフレガード&オポチュニティ・ファンド(オポチュニティコース(積極))",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313265",
    "frame": "growth"
  },
  {
    "name": "One/ティー・ロウ・プライス インフレガード&オポチュニティ・ファンド(ガードコース(安定))",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311265",
    "frame": "growth"
  },
  {
    "name": "One/ティー・ロウ・プライス インフレガード&オポチュニティ・ファンド(モデレートコース(標準))",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312265",
    "frame": "growth"
  },
  {
    "name": "One厳選米国株式ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314147",
    "frame": "growth"
  },
  {
    "name": "SBI 読売333インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89312264",
    "frame": "growth"
  },
  {
    "name": "BEST GOALS専用ポートフォリオ・レベル1(安定)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04318264",
    "frame": "growth"
  },
  {
    "name": "BEST GOALS専用ポートフォリオ・レベル2(やや安定)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "04319264",
    "frame": "growth"
  },
  {
    "name": "BEST GOALS専用ポートフォリオ・レベル3(バランス)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431A264",
    "frame": "growth"
  },
  {
    "name": "BEST GOALS専用ポートフォリオ・レベル4(やや積極)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431B264",
    "frame": "growth"
  },
  {
    "name": "BEST GOALS専用ポートフォリオ・レベル5(積極)",
    "company": "大和アセットマネジメント株式会社",
    "fundCode": "0431C264",
    "frame": "growth"
  },
  {
    "name": "One J-REITオープン(1年決算コース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "4731513C",
    "frame": "growth"
  },
  {
    "name": "One J-REITオープン(2カ月決算コース)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47312042",
    "frame": "growth"
  },
  {
    "name": "One豪ドル債券ファンド(年1回決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47318138",
    "frame": "growth"
  },
  {
    "name": "SBI NASDAQ100インデックス・ファンド",
    "company": "SBIアセットマネジメント株式会社",
    "fundCode": "89311265",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・クリプト・デジタル決済関連株ファンド(資産成長型)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32311265",
    "frame": "growth"
  },
  {
    "name": "One日本小型株ファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47314138",
    "frame": "growth"
  },
  {
    "name": "野村米国ブランド株投資(為替ヘッジあり)年2回決算型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "0131G113",
    "frame": "growth"
  },
  {
    "name": "野村米国ブランド株投資(為替ヘッジなし)年2回決算型",
    "company": "野村アセットマネジメント株式会社",
    "fundCode": "01317145",
    "frame": "growth"
  },
  {
    "name": "DCつみたて アクティブ バリュー オープン",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "10311031",
    "frame": "growth"
  },
  {
    "name": "アクティブ バリュー オープン",
    "company": "T&Dアセットマネジメント株式会社",
    "fundCode": "10311962",
    "frame": "growth"
  },
  {
    "name": "アライアンス・バーンスタイン・日本株エンゲージメント投信",
    "company": "アライアンス・バーンスタイン株式会社",
    "fundCode": "39311265",
    "frame": "growth"
  },
  {
    "name": "ラップ型ファンドプレミアム(安定型プラス)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ311265",
    "frame": "growth"
  },
  {
    "name": "ラップ型ファンドプレミアム(安定成長型プラス)",
    "company": "りそなアセットマネジメント株式会社",
    "fundCode": "AJ312265",
    "frame": "growth"
  },
  {
    "name": "One日本インカム株式ファンド(3ヵ月決算型)",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311057",
    "frame": "growth"
  },
  {
    "name": "eMAXIS Slim 国内株式(読売333)",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03315253",
    "frame": "growth"
  },
  {
    "name": "たわらノーロード 読売333",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47311264",
    "frame": "growth"
  },
  {
    "name": "三菱UFJ ゴールドファンド<年1回決算型>",
    "company": "三菱UFJアセットマネジメント株式会社",
    "fundCode": "03311265",
    "frame": "growth"
  },
  {
    "name": "One成長企業ジャパンエールファンド",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47317265",
    "frame": "growth"
  },
  {
    "name": "One小型株オープン",
    "company": "アセットマネジメントOne株式会社",
    "fundCode": "47313042",
    "frame": "growth"
  },
  {
    "name": "フィデリティ・世界テクノロジー・厳選株式ファンド(資産成長型)",
    "company": "フィデリティ投信株式会社",
    "fundCode": "32313265",
    "frame": "growth"
  },
  {
    "name": "成長戦略フォーカス・ジャパン",
    "company": "三井住友DSアセットマネジメント株式会社",
    "fundCode": "79311265",
    "frame": "growth"
  }
];
