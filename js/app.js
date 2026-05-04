// NISA 投資信託 手数料比較ツール（つみたて投資枠・成長投資枠）
// データソース: 金融庁「つみたて投資枠対象商品届出一覧」(data/funds.js)
//             資産運用業協会「成長投資枠対象商品リスト」(data/growth_funds.js)
// 信託報酬実値: EDINET電子開示 (data/fee_data.js) ※あれば使用

const growthDB = (typeof growthFundDatabase !== "undefined") ? growthFundDatabase : [];

document.getElementById("search-btn").addEventListener("click", search);
document.getElementById("fund-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") { closeDropdown(); search(); }
});
let isComposing = false;
document.getElementById("fund-input").addEventListener("compositionstart", () => isComposing = true);
document.getElementById("fund-input").addEventListener("compositionend", () => {
  isComposing = false;
  onInput();
});
document.getElementById("fund-input").addEventListener("input", () => { if (!isComposing) onInput(); });
document.getElementById("fund-input").addEventListener("keydown", onKeydown);
document.addEventListener("click", function(e) {
  if (!e.target.closest(".search-box")) closeDropdown();
});

// ---- オートコンプリート ----

let dropdownIndex = -1;

function onInput() {
  const q = document.getElementById("fund-input").value.trim();
  if (q.length < 1) { closeDropdown(); return; }
  const suggestions = getSuggestions(q, 10);
  renderDropdown(suggestions);
}

function onKeydown(e) {
  const items = document.querySelectorAll(".autocomplete-item");
  if (!items.length) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    dropdownIndex = Math.min(dropdownIndex + 1, items.length - 1);
    updateActive(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    dropdownIndex = Math.max(dropdownIndex - 1, -1);
    updateActive(items);
  } else if (e.key === "Escape") {
    closeDropdown();
  }
}

function updateActive(items) {
  items.forEach((el, i) => el.classList.toggle("active", i === dropdownIndex));
  if (dropdownIndex >= 0) {
    document.getElementById("fund-input").value = items[dropdownIndex].dataset.name;
  }
}

function renderDropdown(suggestions) {
  let box = document.getElementById("autocomplete-box");
  if (!box) {
    box = document.createElement("div");
    box.id = "autocomplete-box";
    document.querySelector(".search-box").appendChild(box);
  }
  dropdownIndex = -1;
  if (!suggestions.length) { box.innerHTML = ""; return; }
  box.innerHTML = suggestions.map(s => `
    <div class="autocomplete-item" data-name="${s.name.replace(/"/g, '&quot;')}">
      <span class="ac-name">${highlight(s.name, s.query)}</span>
      <span class="ac-meta">${s.company}</span>
      ${s.matchNote ? `<span class="ac-note">${s.matchNote}</span>` : ""}
    </div>
  `).join("");
  box.querySelectorAll(".autocomplete-item").forEach(el => {
    el.addEventListener("mousedown", function(e) {
      e.preventDefault();
      document.getElementById("fund-input").value = this.dataset.name;
      closeDropdown();
      search();
    });
  });
}

function closeDropdown() {
  const box = document.getElementById("autocomplete-box");
  if (box) box.innerHTML = "";
  dropdownIndex = -1;
}

function highlight(name, query) {
  if (!query) return name;
  const idx = name.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return name;
  return name.slice(0, idx) +
    `<strong>${name.slice(idx, idx + query.length)}</strong>` +
    name.slice(idx + query.length);
}

function getSuggestions(q, limit) {
  const qn = normalize(q);
  const results = [];
  const seen = new Set();

  // 1. 愛称マッチ → 複数キーワードで候補を収集
  const nicknames = (typeof nicknameMap !== "undefined") ? nicknameMap : [];
  // マッチした愛称エントリのキーワードリスト（分割して各単語で検索）
  const nicknameTerms = [];  // [{terms: [...], note: "..."}]
  for (const entry of nicknames) {
    if (entry.alias.some(a => {
      const na = normalize(a);
      // 3文字未満のクエリはエイリアス完全一致のみ
      if (qn.length < 3) return na === qn;
      return na.startsWith(qn) || qn.startsWith(na) || (qn.length >= 4 && na.includes(qn));
    })) {
      // キーワードをパーツに分割（「全世界株式（オール・カントリー）」→ ["全世界株式", "オールカントリー"]）
      const parts = entry.keyword
        .replace(/[（(）)【】]/g, " ").replace(/[・\-]/g, " ")
        .split(/\s+/).filter(p => p.length >= 2).map(normalize);
      nicknameTerms.push({ terms: parts, note: `「${entry.keyword}」` });
    }
  }

  // つみたて + 成長の全ファンドを検索
  const allFunds = [...fundDatabase, ...growthDB.filter(g => !fundDatabase.some(f => normalize(f.name) === normalize(g.name)))];
  allFunds.forEach(f => {
    const fn = normalize(f.name);
    const fc = normalize(f.company);
    const fi = normalize(f.index || "");
    const fa = normalize(f.assetClass || "");
    const fall = fn + fc + fi + fa;

    let score = 0;
    let matchNote = null;

    // 愛称ヒット：分割したキーワードが全てfallに含まれる場合
    for (const { terms, note } of nicknameTerms) {
      if (terms.length > 0 && terms.every(t => fall.includes(t))) {
        score = 90;
        matchNote = note;
        break;
      }
      // 半数以上一致でも候補に入れる
      if (terms.length >= 2) {
        const hitCount = terms.filter(t => fall.includes(t)).length;
        if (hitCount >= Math.ceil(terms.length * 0.6)) {
          score = Math.max(score, 70);
          matchNote = note;
        }
      }
    }

    // ファンド名前方一致
    if (!score && fn.startsWith(qn)) score = 80;
    // ファンド名部分一致
    else if (!score && fn.includes(qn)) score = 70;
    // 会社名一致（3文字以上）
    else if (!score && qn.length >= 3 && fc.includes(qn)) score = 50;
    // 指数・資産クラス一致（4文字以上のみ、誤検知防止）
    else if (!score && qn.length >= 4 && (fi.includes(qn) || fa.includes(qn))) score = 40;
    // 部分文字列マッチ（5文字以上）
    else if (!score && qn.length >= 5 && fn.includes(qn.slice(0, Math.floor(qn.length * 0.7)))) score = 30;

    if (score > 0 && !seen.has(f.name)) {
      seen.add(f.name);
      results.push({ ...f, score, matchNote, query: q });
    }
  });

  return results
    .sort((a, b) => b.score - a.score || a.name.length - b.name.length)
    .slice(0, limit);
}

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

  // つみたて投資枠を優先検索
  const tsuResult = findInDb(fundDatabase, input, nin);
  if (tsuResult) return { ...tsuResult, frame: "tsumitate" };

  // 成長投資枠を検索
  const growthResult = findInDb(growthDB, input, nin);
  if (growthResult) return { ...growthResult, frame: "growth" };

  return null;
}

function findInDb(db, input, nin) {
  const exact = db.find(f => f.name === input);
  if (exact) return exact;

  const normExact = db.find(f => normalize(f.name) === nin);
  if (normExact) return normExact;

  const containsInput = db.filter(f => {
    const nfn = normalize(f.name);
    return nfn.includes(nin) && nin.length >= nfn.length * 0.7;
  });
  if (containsInput.length > 0) {
    return containsInput.sort((a, b) => normalize(a.name).length - normalize(b.name).length)[0];
  }

  const containedByInput = db.filter(f => {
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
  // 成長投資枠のみのファンドはつみたてDBに仲間がいない
  if (fund.frame === "growth" && !fundDatabase.some(f => normalize(f.name) === normalize(fund.name))) {
    return growthDB.filter(f => f.name !== fund.name && f.company === fund.company).slice(0, 20);
  }
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
  // つみたて対象かどうか確認
  const isTsumitate = fund.frame !== "growth" ||
    fundDatabase.some(f => normalize(f.name) === normalize(fund.name));
  const isGrowth = fund.frame === "growth" ||
    growthDB.some(f => normalize(f.name) === normalize(fund.name));

  const frameBadge = isTsumitate && isGrowth
    ? `<strong style="color:#2a9d5c;">✓ つみたて投資枠</strong>
       <strong style="color:#1a3a5c; margin-left:10px;">✓ 成長投資枠</strong>
       <span style="font-size:0.85rem; color:#555; margin-left:8px;">（両方対象）</span>`
    : isTsumitate
    ? `<strong style="color:#2a9d5c;">✓ NISAつみたて投資枠 対象ファンド</strong>
       <span style="font-size:0.85rem; color:#555; margin-left:8px;">（金融庁公表の届出一覧に該当）</span>`
    : `<strong style="color:#1a3a5c;">✓ NISA成長投資枠 対象ファンド</strong>
       <span style="font-size:0.85rem; color:#555; margin-left:8px;">（資産運用業協会公表リストに該当）</span>`;

  document.getElementById("input-fund-info").innerHTML = `
    <div style="background:#e6f4ea; border-left:4px solid #2a9d5c; padding:12px 16px; border-radius:6px; margin-bottom:12px;">
      ${frameBadge}
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
  renderSimulation(fund);

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

// ---- 積立シミュレーション ----

function calcFV(monthly, years, annualReturn, feeRate) {
  const netReturn = annualReturn - feeRate;
  const r = Math.pow(1 + netReturn / 100, 1 / 12) - 1;
  const n = years * 12;
  if (r <= 0) return monthly * n;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

function renderSimulation(fund) {
  const section = document.getElementById("simulation-section");
  section.classList.remove("hidden");

  section.innerHTML = `
    <h3>積立シミュレーション</h3>
    <p class="note">同カテゴリー最低コストファンドとの将来価値の差を試算します。信託報酬以外の条件（分配金・相場変動等）は同一と仮定しています。</p>
    <div class="sim-inputs">
      <div class="sim-input-group">
        <label>月積立額</label>
        <div style="display:flex; align-items:center; gap:4px;">
          <input type="number" id="sim-monthly" value="30000" min="1000" step="1000">
          <span class="sim-input-suffix">円</span>
        </div>
      </div>
      <div class="sim-input-group">
        <label>積立年数</label>
        <div style="display:flex; align-items:center; gap:4px;">
          <input type="number" id="sim-years" value="20" min="1" max="40">
          <span class="sim-input-suffix">年</span>
        </div>
      </div>
      <div class="sim-input-group">
        <label>想定年率リターン（手数料控除前）</label>
        <div style="display:flex; align-items:center; gap:4px;">
          <input type="number" id="sim-return" value="5" min="0" max="30" step="0.1">
          <span class="sim-input-suffix">%</span>
        </div>
      </div>
    </div>
    <div id="sim-result"></div>
    <p class="note" style="margin-top:0.8rem;">
      ※試算は複利計算（月次積立・月次複利）に基づく参考値です。実際の運用成果を保証するものではありません。<br>
      ※信託報酬以外のコスト（売買委託手数料・監査費用等）は考慮していません。投資判断はご自身の責任でお願いします。
    </p>
  `;

  const siblings = getSiblings(fund);
  const allFunds = [fund, ...siblings];
  const cheapest = allFunds
    .filter(f => getFeeRate(f.name) != null)
    .sort((a, b) => getFeeRate(a.name) - getFeeRate(b.name))[0] || null;

  const update = () => updateSimulation(fund, cheapest);
  ["sim-monthly", "sim-years", "sim-return"].forEach(id => {
    document.getElementById(id).addEventListener("input", update);
  });
  update();
}

function updateSimulation(fund, cheapest) {
  const monthly = Math.max(1000, parseInt(document.getElementById("sim-monthly").value) || 30000);
  const years   = Math.min(40, Math.max(1, parseInt(document.getElementById("sim-years").value) || 20));
  const ret     = parseFloat(document.getElementById("sim-return").value) ?? 5;

  const targetRate   = getFeeRate(fund.name);
  const cheapestRate = cheapest ? getFeeRate(cheapest.name) : null;
  const isSame = cheapest && cheapest.name === fund.name;

  const totalContrib = monthly * years * 12;
  const fmt = v => Math.round(v).toLocaleString("ja-JP");

  if (targetRate == null && cheapestRate == null) {
    document.getElementById("sim-result").innerHTML =
      `<div class="sim-no-data">このカテゴリーは信託報酬の実値データが不足しているため試算できません。</div>`;
    return;
  }

  const targetFV   = targetRate   != null ? calcFV(monthly, years, ret, targetRate)   : null;
  const cheapestFV = cheapestRate != null ? calcFV(monthly, years, ret, cheapestRate) : null;
  const maxFV = Math.max(targetFV ?? 0, cheapestFV ?? 0);

  const cardHtml = (label, f, rate, fv, cls) => {
    const name = f.name.length > 40 ? f.name.slice(0, 40) + "…" : f.name;
    const barPct = maxFV > 0 && fv != null ? (fv / maxFV * 100).toFixed(1) : 0;
    return `
      <div class="sim-card ${cls}">
        <div class="sim-card-label">${label}</div>
        <div class="sim-card-name">${name}</div>
        <div class="sim-card-fee">信託報酬 ${rate != null ? rate.toFixed(3) + "% /年" : "データなし"}</div>
        ${fv != null
          ? `<div class="sim-card-fv">${fmt(fv)}<span class="sim-card-fv-unit">円</span></div>
             <div class="sim-card-bar-wrap"><div class="sim-card-bar" style="width:${barPct}%"></div></div>`
          : `<div style="color:#aaa; font-size:0.85rem; margin-top:8px;">試算不可（手数料データなし）</div>`
        }
      </div>`;
  };

  let html = `<div class="sim-cards">`;
  html += cardHtml("このファンド", fund, targetRate, targetFV, "is-target");
  if (!isSame && cheapest) {
    html += cardHtml("同カテゴリー 最低コスト", cheapest, cheapestRate, cheapestFV, "is-cheapest");
  } else if (isSame) {
    html += `<div class="sim-card is-cheapest">
      <div class="sim-card-label">同カテゴリー 最低コスト</div>
      <div class="sim-card-name" style="padding-top:0.5rem; font-weight:bold; color:#2a9d5c;">このファンドが最低コストです</div>
    </div>`;
  }
  html += `</div>`;

  if (!isSame && targetFV != null && cheapestFV != null) {
    const diff = cheapestFV - targetFV;
    html += `
      <div class="sim-diff-box">
        <div class="sim-diff-label">最低コストファンドとの差（${years}年後）</div>
        <div class="sim-diff-amount">+${fmt(diff)}円</div>
        <div class="sim-diff-note">
          積立元本 ${fmt(totalContrib)}円 に対し、手数料の差（年率 ${(targetRate - cheapestRate).toFixed(3)}%）が
          ${years}年間で <strong>${fmt(diff)}円</strong> の差となります。<br>
          同じ指数・運用方針であれば、信託報酬の低いファンドほど手取りの最終額が大きくなります。
        </div>
      </div>`;
  }

  document.getElementById("sim-result").innerHTML = html;
}
