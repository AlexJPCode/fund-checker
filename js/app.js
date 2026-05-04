// NISAつみたて投資枠 手数料比較ツール
// データソース: 金融庁「つみたて投資枠対象商品届出一覧」(data/funds.js)
// 信託報酬実値: EDINET電子開示 (data/fee_data.js) ※あれば使用

document.getElementById("search-btn").addEventListener("click", search);
document.getElementById("fund-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") search();
});

// fee_data.js が読み込まれていれば feeDatabase が存在する
// なければ空オブジェクトで動作する
const feeDB = (typeof feeDatabase !== "undefined") ? feeDatabase : {};

function getFeeRate(fundName) {
  const entry = feeDB[fundName];
  if (!entry || entry.rate == null) return null;
  return entry.rate;
}

function getDocID(fundName) {
  const entry = feeDB[fundName];
  return entry ? entry.docID : null;
}

function search() {
  const input = document.getElementById("fund-input").value.trim();
  if (!input) return;

  document.getElementById("result").classList.add("hidden");
  document.getElementById("no-result").classList.add("hidden");

  const matched = findFund(input);

  if (!matched) {
    document.getElementById("no-result").classList.remove("hidden");
    document.getElementById("no-result").scrollIntoView({ behavior: "smooth" });
    return;
  }

  showResult(matched);
}

function normalize(s) {
  return s.toLowerCase().replace(/[\s　・\-\(\)（）]/g, "");
}

function findFund(input) {
  const nin = normalize(input);
  if (nin.length < 4) return null;

  const exact = fundDatabase.find(f => f.name === input);
  if (exact) return exact;

  const normExact = fundDatabase.find(f => normalize(f.name) === nin);
  if (normExact) return normExact;

  const containsInput = fundDatabase.filter(f => {
    const nfn = normalize(f.name);
    return nfn.includes(nin) && nin.length >= nfn.length * 0.7;
  });
  if (containsInput.length > 0) {
    return containsInput.sort((a, b) => normalize(a.name).length - normalize(b.name).length)[0];
  }

  const containedByInput = fundDatabase.filter(f => {
    const nfn = normalize(f.name);
    return nin.includes(nfn) && nfn.length >= 6;
  });
  if (containedByInput.length > 0) {
    return containedByInput.sort((a, b) => normalize(b.name).length - normalize(a.name).length)[0];
  }

  return null;
}

function getCategoryLabel(fund) {
  if (fund.fundType === "index") {
    return `指定インデックス投信（${fund.region || ""}）`;
  } else if (fund.fundType === "active") {
    return `アクティブ運用投信等（${fund.region || ""}）`;
  } else {
    return "ETF";
  }
}

function getFeeCap(fund) {
  if (fund.fundType === "etf") return "信託報酬 0.25% 以下";
  if (fund.fundType === "index") {
    return fund.region === "国内型" ? "信託報酬 0.5% 以下" : "信託報酬 0.75% 以下";
  }
  if (fund.fundType === "active") {
    return fund.region === "国内型" ? "信託報酬 1.0% 以下" : "信託報酬 1.5% 以下";
  }
  return "—";
}

function formatRate(rate) {
  if (rate == null) return `<span style="color:#aaa;">目論見書参照</span>`;
  return `<strong style="color:#1a3a5c;">${rate.toFixed(3)}%</strong>`;
}

function renderFeeTable(fund) {
  const cap = getFeeCap(fund).replace("信託報酬 ", "").replace(" 以下", "以下");
  const actualRate = getFeeRate(fund.name);
  const docID = getDocID(fund.name);
  const edinetLink = docID
    ? `（<a href="https://disclosure2.edinet-fsa.go.jp/WZEK0040.aspx?${docID}" target="_blank" rel="noopener" style="font-size:0.8rem;">EDINET原本</a>）`
    : "";

  const feeValue = actualRate != null
    ? `<strong style="color:#1a3a5c; font-size:1.1rem;">${actualRate.toFixed(3)}%</strong>（年率・税込）${edinetLink}`
    : `法令上限：<strong>${cap}</strong><br><span style="font-size:0.8rem; color:#888;">実値は目論見書参照${edinetLink}</span>`;

  const rows = [
    {
      name: "① 購入時手数料",
      desc: "ファンド購入時に販売会社へ支払う手数料",
      value: `<span style="color:#2a9d5c; font-weight:bold;">0%（無料）</span><br><span style="font-size:0.8rem; color:#888;">つみたて投資枠は法令でノーロード（販売手数料無料）が義務付け</span>`
    },
    {
      name: "② 信託報酬（年率）",
      desc: "保有中、運用会社・販売会社・信託銀行に毎日継続的に支払うコスト",
      value: feeValue
    },
    {
      name: "③ 信託財産留保額",
      desc: "解約（売却）時に信託財産へ留保される金額",
      value: `<span style="font-size:0.85rem;">商品により異なる（0%〜0.3%程度）<br><span style="color:#888; font-size:0.8rem;">目論見書「換金（解約）手続等」欄を参照</span></span>`
    },
    {
      name: "④ その他費用",
      desc: "監査費用・売買委託手数料・有価証券取引税など、運用に伴う実費",
      value: `<span style="font-size:0.85rem;">事前に上限を示せない費用<br><span style="color:#888; font-size:0.8rem;">運用報告書に実額が開示される</span></span>`
    },
    {
      name: "⑤ 実質コスト（年率）",
      desc: "②＋④の合計。投資家が実際に負担する年間コスト",
      value: `<span style="font-size:0.85rem;">運用報告書「1万口当たりの費用明細」で確認<br><span style="color:#888; font-size:0.8rem;">②＋④の実額は直近運用報告書を参照</span></span>`
    }
  ];
  const tbody = document.getElementById("fee-body");
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td style="font-weight:bold; white-space:nowrap;">${r.name}</td>
      <td style="font-size:0.9rem; color:#555;">${r.desc}</td>
      <td>${r.value}</td>
    </tr>
  `).join("");
}

// ---- 比較ランキングテーブル ----

function getSiblings(fund) {
  return fundDatabase.filter(f => {
    if (f.fundType !== fund.fundType) return false;
    if (f.name === fund.name) return false;
    if (fund.index && f.index === fund.index) return true;
    if (!fund.index && fund.assetClass && f.assetClass === fund.assetClass) return true;
    if (!fund.index && !fund.assetClass && f.region === fund.region && f.fundType === fund.fundType) return true;
    return false;
  });
}

function renderComparisonTable(fund) {
  const siblings = getSiblings(fund);
  const allFunds = [fund, ...siblings];

  // 信託報酬でソート（実値あり→安い順、実値なし→末尾）
  const withRate = allFunds.filter(f => getFeeRate(f.name) != null)
    .sort((a, b) => getFeeRate(a.name) - getFeeRate(b.name));
  const withoutRate = allFunds.filter(f => getFeeRate(f.name) == null);
  const sorted = [...withRate, ...withoutRate];

  const tbody = document.getElementById("comparison-body");
  tbody.innerHTML = "";

  const hasFeeData = withRate.length > 0;

  document.getElementById("alt-title").textContent =
    `同カテゴリー内の信託報酬ランキング（${sorted.length}件）`;

  sorted.forEach((f, idx) => {
    const isTarget = f.name === fund.name;
    const rate = getFeeRate(f.name);
    const rank = hasFeeData && rate != null ? `${idx + 1}位` : "—";
    const rankColor = idx === 0 ? "#e84545" : idx === 1 ? "#f4a300" : "#333";

    const tr = document.createElement("tr");
    if (isTarget) {
      tr.style.background = "#e6f4ea";
      tr.style.fontWeight = "bold";
    }
    tr.innerHTML = `
      <td style="text-align:center; color:${rankColor}; font-weight:bold;">${rank}</td>
      <td>${isTarget ? `<span style="color:#2a9d5c;">▶ </span>` : ""}${f.name}</td>
      <td style="font-size:0.85rem; color:#555;">${f.company}</td>
      <td style="text-align:center;">${formatRate(rate)}</td>
    `;
    tbody.appendChild(tr);
  });

  // カテゴリー説明
  const categoryDesc = fund.index
    ? `対象指数：${fund.index}`
    : fund.assetClass
      ? `資産クラス：${fund.assetClass}`
      : `区分：${getCategoryLabel(fund)}`;

  document.getElementById("comparison-note").textContent =
    `${categoryDesc}　同カテゴリー ${sorted.length} 件。信託報酬は EDINET 届出書から抽出（${withRate.length}/${sorted.length} 件取得済み）。`;
}

function showResult(fund) {
  document.getElementById("input-fund-info").innerHTML = `
    <div style="background:#e6f4ea; border-left:4px solid #2a9d5c; padding:12px 16px; border-radius:6px; margin-bottom:12px;">
      <strong style="color:#2a9d5c;">✓ NISAつみたて投資枠 対象ファンド</strong>
      <span style="font-size:0.85rem; color:#555; margin-left:8px;">（金融庁公表の届出一覧に該当）</span>
    </div>
    <div class="fund-info-grid" style="grid-template-columns: repeat(2, 1fr);">
      <div class="fund-info-item" style="text-align:left;">
        <div class="label">ファンド名</div>
        <div style="font-weight:bold; margin-top:4px;">${fund.name}</div>
      </div>
      <div class="fund-info-item" style="text-align:left;">
        <div class="label">運用会社</div>
        <div style="margin-top:4px;">${fund.company}</div>
      </div>
    </div>
    <div style="margin-top:12px; padding-top:12px; border-top:1px solid #eee; font-size:0.9rem; color:#555;">
      <div>区分：${getCategoryLabel(fund)}</div>
      ${fund.index ? `<div>対象指数：${fund.index}</div>` : ""}
      ${fund.assetClass ? `<div>投資対象資産：${fund.assetClass}</div>` : ""}
    </div>
  `;

  renderFeeTable(fund);
  renderComparisonTable(fund);

  document.getElementById("summary-box").innerHTML = `
    <strong>事実サマリー</strong><br><br>
    「${fund.name}」（${fund.company}）は、金融庁が公表する「つみたて投資枠対象商品届出一覧」（${dataSource.publishedDate}時点）に該当するファンドです。<br>
    <br>
    つみたて投資枠の対象ファンドは、法令上の要件（販売手数料無料・信託報酬上限・分配頻度等）を満たしていることが届け出られています。信託報酬は同じ指数・資産クラスの他ファンドとの比較が有効です。<br>
    <br>
    <small>
      ※法令上の信託報酬上限：${getFeeCap(fund)}<br>
      ※信託報酬実値はEDINET（金融庁電子開示システム）から取得しています。最新値は各社目論見書をご確認ください。<br>
      ※本表示は事実情報の提供であり、特定商品の推奨・投資助言ではありません。投資判断はご自身の責任でお願いします。
    </small>
  `;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}
