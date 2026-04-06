// Gutsphere Shell — shared app shell, navigation, and rendering
import I from './icons.js';

let _data; // condition data
let currentTab = 'today';
let currentSub = null;
let currentEntry = 'bm';
let currentGuide = null;
let currentPattern = null;
const segState = { track:'quick', patterns:'patterns', care:'self', self:'habits', chat:'conversations', notifications:'action' };

const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ===== HELPERS =====
function row(icon, title, sub, onclick, iconClass) {
  return `<div class="row" onclick="${onclick||''}"><div class="row-icon${iconClass?' '+iconClass:''}">${I[icon]||''}</div><div class="row-body"><div class="row-title">${title}</div><div class="row-subtitle">${sub}</div></div><div class="row-chevron">${I.chevR}</div></div>`;
}
function guideRow(gi) {
  return `<div class="guide-row" onclick="openGuide('${gi.id}')"><div class="guide-avatar ${gi.color}">${I[gi.icon]||''}</div><div class="guide-body"><div class="guide-name">${gi.name}</div><div class="guide-desc">${gi.desc}</div></div><div class="guide-chevron">${I.chevR}</div></div>`;
}
function notif(icon, title, sub, time, onclick, opts={}) {
  const urgent = opts.urgent ? ' notif-urgent' : '';
  const unread = opts.unread ? '<div class="notif-unread"></div>' : '';
  return `<div class="notif-item${urgent}" onclick="${onclick||''}">${unread}<div class="notif-icon">${I[icon]||''}</div><div class="notif-body"><div class="notif-title">${title}</div><div class="notif-sub">${sub}</div><div class="notif-time">${time}</div></div></div>`;
}

// ===== GROUPED ROW HELPER =====
function renderGroupedRows(groups) {
  return groups.map(g =>
    `<div class="group-label">${g.label}</div><div class="space-y">${g.items.map(i => row(i[0],i[1],i[2],i[3])).join('')}</div>`
  ).join('');
}

// ===== HTML SHELL =====
function buildShell() {
  const s = _data.screens;
  const p = _data.persona;

  // Today feed cards
  const feedCardsHtml = s.todayFeed.map(f => `
    <div class="feed-card" onclick="${f.action}">
      <div class="feed-icon">${I[f.icon]||''}</div>
      <div class="feed-body"><div class="feed-title">${f.title}</div><div class="feed-subtitle">${f.subtitle}</div></div>
      <div class="feed-chevron">${I.chevR}</div>
    </div>`).join('');

  // State pills
  const statePillsHtml = s.todayStatePills.map(sp => {
    const iconHtml = sp.icon ? `${I[sp.icon]||''}` : '';
    return `<div class="state-pill${sp.urgent?' urgent':''}">${iconHtml} ${sp.text}</div>`;
  }).join('');

  // Pattern hero bars
  const heroBarsHtml = s.patternHero.bars.map(h => {
    const cls = h > 70 ? 'active' : h < 30 ? 'muted' : '';
    return `<div class="bar ${cls}" style="height:${h}%"></div>`;
  }).join('');

  // Signal rows
  const signalRowsHtml = s.patternHero.signalRows.map(sr =>
    `<div class="signal-row"><div class="signal-dot ${sr.color}"></div><div class="signal-label">${sr.label}</div><div class="signal-value">${sr.value}</div></div>`
  ).join('');

  // Trends chart bars
  const trendsChartBars = s.patternTrendsChart.bars.map(h => {
    const cls = h > 70 ? 'active' : h < 30 ? 'muted' : '';
    return `<div class="bar ${cls}" style="height:${h}%"></div>`;
  }).join('');

  // Care habits
  const careHabitsHtml = s.careHabits.map(h => `
    <div class="guided-card"><div class="guided-icon">${I[h.icon]||''}</div><div class="guided-body"><div class="guided-name">${h.name}</div><div class="guided-meta">${h.meta}</div>${h.tag?`<div class="guided-tag">${I.clock} ${h.tag}</div>`:''}</div></div>`).join('');

  // Care flare
  const careFlareHtml = s.careFlare.map(h => `
    <div class="guided-card"><div class="guided-icon">${I[h.icon]||''}</div><div class="guided-body"><div class="guided-name">${h.name}</div><div class="guided-meta">${h.meta}</div></div></div>`).join('');

  // Clinical timeline
  const timelineHtml = s.careClinical.timeline.map(t => `
    <div class="timeline-item"><div class="timeline-dot-col"><div class="timeline-dot${t.status?' '+t.status:''}"></div>${!t.last?'<div class="timeline-line"></div>':''}</div><div class="timeline-body"><div class="timeline-title">${t.title}</div><div class="timeline-sub">${t.sub}</div></div></div>`).join('');

  // Visit checklist
  const checklistHtml = s.visitPrep.checklist.map(c => `
    <div class="checklist-item"><div class="check-box${c.done?' checked':''}"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><div class="check-label${c.done?' done':''}">${c.label}</div></div>`).join('');

  // Visit questions
  const visitQuestionsHtml = s.visitPrep.questions.map(q => `<div class="question-item">${q}</div>`).join('');

  // Profile sections
  const profileHtml = s.profileSections.map(([label, items]) => `
    <div class="group-label">${label}</div>
    <div class="card"><div class="space-y">${items.map(([ic,t,sub])=>row(ic,t,sub)).join('')}</div></div>
  `).join('');

  document.body.innerHTML = `
<div class="shell" id="app">
  <!-- HEADER -->
  <div class="header" id="header">
    <div class="header-row">
      <div class="header-left" id="header-left"><div class="avatar-sm" onclick="nav('profile')">${p.initials}</div></div>
      <div class="header-title" id="header-title">Today</div>
      <div class="header-right" id="header-right">
        <div class="header-icon" onclick="nav('notifications')">
          ${I.bell}
          <span class="badge">2</span>
        </div>
      </div>
    </div>
  </div>

  <!-- CONTENT -->
  <div class="content" id="content">

    <!-- TODAY -->
    <div class="page screen" id="screen-today">
      <div class="page-title anim">${s.todayGreeting}</div>
      <div class="page-subtitle anim anim-1">${s.todaySubtitle}</div>
      <div class="state-bar anim anim-2">${statePillsHtml}</div>
      <div class="gap-lg"></div>
      <div class="card coral-fill anim anim-3" style="cursor:pointer" onclick="${s.todayTopPriority.action}">
        <div class="card-header">
          <div>
            <div class="card-title" style="color:#fff;font-size:15px">${s.todayTopPriority.title}</div>
            <div class="card-subtitle" style="color:rgba(255,255,255,.88)">${s.todayTopPriority.subtitle}</div>
          </div>
          <div style="font-size:20px;opacity:.8">✦</div>
        </div>
        <div class="mt-3"><button class="btn btn-sm" style="background:#fff;color:var(--coral);width:auto">${s.todayTopPriority.ctaText}</button></div>
      </div>
      <div class="card anim anim-4">
        <div class="card-title" style="font-size:15px">Ranked care feed</div>
        <div class="mt-3" style="display:flex;flex-direction:column;gap:6px">${feedCardsHtml}</div>
      </div>
    </div>

    <!-- TRACK -->
    <div class="page screen hidden" id="screen-track">
      <div class="page-title">Track</div>
      <div class="page-subtitle">Fast capture, personalised priority, continuity, and full library.</div>
      <div class="gap-md"></div>
      <div class="segments" id="seg-track">
        <button class="seg active" data-seg="track" data-key="quick">Quick Add</button>
        <button class="seg" data-seg="track" data-key="main">Main</button>
        <button class="seg" data-seg="track" data-key="continue">Continue</button>
        <button class="seg" data-seg="track" data-key="recent">Recent</button>
        <button class="seg" data-seg="track" data-key="more">More</button>
      </div>
      <div class="seg-panel" data-seg="track" data-panel="quick"><div class="card"><div class="flex-between mb-3"><div class="card-title">Quick Add</div><span style="font-size:12px;color:var(--text-muted)">Fastest path</span></div><div class="quick-grid" id="quick-grid"></div></div></div>
      <div class="seg-panel hidden" data-seg="track" data-panel="main"><div class="card"><div class="flex-between mb-3"><div class="card-title">Your Main Trackers</div><span style="font-size:12px;color:var(--text-muted)">Personalised</span></div><div class="space-y" id="main-trackers"></div></div></div>
      <div class="seg-panel hidden" data-seg="track" data-panel="continue"><div class="card"><div class="flex-between mb-3"><div class="card-title">Continue Tracking</div><span style="font-size:12px;color:var(--text-muted)">What's missing</span></div><div class="space-y" id="continue-trackers"></div></div></div>
      <div class="seg-panel hidden" data-seg="track" data-panel="recent"><div class="card"><div class="flex-between mb-3"><div class="card-title">Recent Entries</div><span style="font-size:12px;color:var(--text-muted)">Today</span></div><div class="space-y" id="recent-entries"></div></div></div>
      <div class="seg-panel hidden" data-seg="track" data-panel="more"><div class="card" id="more-trackers"></div></div>
    </div>

    <!-- ENTRY DETAIL -->
    <div class="page screen hidden" id="screen-entry">
      <div class="card" id="entry-card"></div>
      <div class="card" id="entry-context"></div>
      <div class="card coral-glow-bg interactive" onclick="nav('chat');openGuide('copilot')">
        <div class="card-header">
          <div><div class="card-title" style="color:var(--coral)">Ask Gutsphere about this</div><div class="card-subtitle">Turn one log into context and next steps.</div></div>
          <div style="color:var(--coral)">${I.msgCircle}</div>
        </div>
      </div>
    </div>

    <!-- PATTERNS -->
    <div class="page screen hidden" id="screen-patterns">
      <div class="page-title">Patterns</div>
      <div class="page-subtitle">Interpretation, relationships, and reportable summaries.</div>
      <div class="gap-md"></div>
      <div class="segments"><button class="seg active" data-seg="patterns" data-key="patterns">Patterns</button><button class="seg" data-seg="patterns" data-key="connections">Connections</button><button class="seg" data-seg="patterns" data-key="trends">Trends & Reports</button></div>
      <div class="seg-panel" data-seg="patterns" data-panel="patterns">
        <div class="card hl interactive" style="border-color:var(--green);box-shadow:0 0 0 3px rgba(46,125,50,.1)" onclick="${s.patternHero.action}">
          <div class="card-header"><div><div class="card-title" style="font-size:15px">${s.patternHero.title}</div><div class="card-subtitle">${s.patternHero.subtitle}</div></div><span class="chip ${s.patternHero.chip}">${s.patternHero.chipLabel}</span></div>
          <div class="mini-chart">${heroBarsHtml}</div>
          <div class="confidence-bar"><div class="confidence-track"><div class="confidence-fill" style="width:${s.patternHero.confidence}%;background:${s.patternHero.confidenceColor}"></div></div><div class="confidence-label">${s.patternHero.confidence}% confidence</div></div>
        </div>
        <div class="card"><div class="card-title">Signal summary</div><div class="mt-3">${signalRowsHtml}</div></div>
        <div class="card" id="pattern-feed"></div>
      </div>
      <div class="seg-panel hidden" data-seg="patterns" data-panel="connections">
        <div class="card" id="pattern-connections"></div>
        <div class="card" id="pattern-experiments"></div>
      </div>
      <div class="seg-panel hidden" data-seg="patterns" data-panel="trends">
        <div class="card"><div class="card-title">Bowel pattern — last 14 days</div>
          <div class="mini-chart" style="height:56px">${trendsChartBars}</div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-hint);margin-top:4px"><span>14 days ago</span><span>Today</span></div>
        </div>
        <div class="card" id="pattern-trends-list"></div>
        <div class="report-card" onclick="nav('care');setSegment('care','navigation');navSub('visit')">
          <div class="flex-between mb-3"><div class="card-title">Doctor summary</div><span class="report-badge report-ready">Ready</span></div>
          <div class="card-subtitle">3 patterns, 14 days of data, visit-ready format.</div>
          <div class="mt-3"><button class="btn btn-sm" style="width:auto">Preview & export</button></div>
        </div>
        <div class="card" id="pattern-reports-list"></div>
      </div>
    </div>

    <!-- PATTERN DETAIL -->
    <div class="page screen hidden" id="screen-pattern-detail"><div id="pattern-detail-content"></div></div>

    <!-- CARE -->
    <div class="page screen hidden" id="screen-care">
      <div class="page-title">Care</div>
      <div class="page-subtitle">Action, guided support, care navigation, and clinical organisation.</div>
      <div class="gap-md"></div>
      <div class="segments"><button class="seg active" data-seg="care" data-key="self">Self Care</button><button class="seg" data-seg="care" data-key="navigation">Navigation</button><button class="seg" data-seg="care" data-key="clinical">Clinical Care</button></div>
      <div class="seg-panel" data-seg="care" data-panel="self">
        <div class="segments" style="margin-top:0"><button class="seg active" data-seg="self" data-key="habits">Daily Habits</button><button class="seg" data-seg="self" data-key="plans">Guided Plans</button><button class="seg" data-seg="self" data-key="flare">Flare Support</button><button class="seg" data-seg="self" data-key="recs">Recommendations</button><button class="seg" data-seg="self" data-key="experiments">Experiments</button></div>
        <div class="seg-panel" data-seg="self" data-panel="habits"><div class="card"><div class="card-title">Daily Habits</div><div class="card-subtitle">Lightweight, repeatable habits and guided support.</div><div class="mt-3">${careHabitsHtml}</div></div></div>
        <div class="seg-panel hidden" data-seg="self" data-panel="plans"><div class="card" id="care-plans"></div></div>
        <div class="seg-panel hidden" data-seg="self" data-panel="flare"><div class="card"><div class="card-title">Flare Support</div><div class="card-subtitle">Practical, calm steps for bad days. You are not alone.</div><div class="mt-3">${careFlareHtml}</div></div></div>
        <div class="seg-panel hidden" data-seg="self" data-panel="recs"><div class="card" id="care-recs"></div></div>
        <div class="seg-panel hidden" data-seg="self" data-panel="experiments"><div class="card" id="care-experiments"></div></div>
      </div>
      <div class="seg-panel hidden" data-seg="care" data-panel="navigation">
        <div class="card coral-glow-bg interactive" onclick="navSub('visit')"><div class="card-header"><div><div class="card-title" style="color:var(--coral);font-size:15px">Visit Prep</div><div class="card-subtitle">Prepare for visits, tests, procedures, and next care steps.</div></div><div style="font-size:20px;opacity:.6">🗓</div></div></div>
        <div class="card" id="care-nav-items"></div>
      </div>
      <div class="seg-panel hidden" data-seg="care" data-panel="clinical">
        <div class="card coral-glow-bg"><div class="card-title" style="color:var(--coral)">Clinical Care</div><div class="card-subtitle">Organise clinician-directed treatment, medications, follow-up, and monitoring.</div></div>
        <div class="card">
          <div class="card-title">Treatment timeline</div>
          <div class="mt-3">${timelineHtml}</div>
          <div class="mt-3 space-y">${s.careClinical.items.map(i => row(i[0],i[1],i[2])).join('')}</div>
        </div>
      </div>
    </div>

    <!-- VISIT PREP -->
    <div class="page screen hidden" id="screen-visit">
      <div class="card">
        <div class="card-title" style="font-size:15px">${s.visitPrep.title}</div>
        <div class="card-subtitle">${s.visitPrep.subtitle}</div>
        <div class="prep-progress">${Array.from({length:s.visitPrep.stepsTotal},(_,i)=>`<div class="prep-step${i<s.visitPrep.stepsDone?' done':i===s.visitPrep.stepsDone?' active':''}"></div>`).join('')}</div>
        <div class="prep-label">${s.visitPrep.stepsDone} of ${s.visitPrep.stepsTotal} steps complete</div>
      </div>
      <div class="card">
        <div class="card-title">Checklist</div>
        <div class="mt-3">${checklistHtml}</div>
      </div>
      <div class="card">
        <div class="card-title">Main concern</div>
        <div class="mt-3"><div class="question-item">${s.visitPrep.mainConcern}</div></div>
      </div>
      <div class="card">
        <div class="card-title">Questions to ask</div>
        <div class="mt-3">${visitQuestionsHtml}</div>
      </div>
      <div class="card coral-glow-bg">
        <div class="card-title" style="color:var(--coral)">Doctor summary</div>
        <div class="card-subtitle">${s.visitPrep.summaryNote}</div>
        <div class="mt-3" style="display:flex;gap:8px">
          <button class="btn btn-sm" style="width:auto">Preview</button>
          <button class="btn btn-sm btn-outline" style="width:auto">Export</button>
        </div>
      </div>
    </div>

    <!-- CHAT -->
    <div class="page screen hidden" id="screen-chat">
      <div class="page-title">Chat</div>
      <div class="page-subtitle">Pick the right guide for the moment.</div>
      <div class="gap-md"></div>
      <div class="segments"><button class="seg active" data-seg="chat" data-key="conversations">Conversations</button><button class="seg" data-seg="chat" data-key="your-guides">Your Guides</button><button class="seg" data-seg="chat" data-key="specialists">Specialists</button><button class="seg" data-seg="chat" data-key="group">Group Chats</button></div>
      <div class="seg-panel" data-seg="chat" data-panel="conversations" id="chat-conversations"></div>
      <div class="seg-panel hidden" data-seg="chat" data-panel="your-guides" id="chat-your-guides"></div>
      <div class="seg-panel hidden" data-seg="chat" data-panel="specialists" id="chat-specialists"></div>
      <div class="seg-panel hidden" data-seg="chat" data-panel="group" id="chat-group"></div>
    </div>

    <!-- CHAT THREAD -->
    <div class="page screen hidden" id="screen-chat-thread"><div id="thread-content"></div></div>

    <!-- PROFILE -->
    <div class="page screen hidden" id="screen-profile">
      <div class="card">
        <div class="profile-header"><div class="avatar-lg">${p.initials}</div><div><div class="profile-name">${p.fullName}</div><div class="profile-desc">${p.profileDesc}</div></div></div>
        <div class="care-context-bar">
          <div class="care-tag active-tag">${I.search} ${p.stage}</div>
          <div class="care-tag">${I.calendar} ${p.visitNote}</div>
          <div class="care-tag">${p.focus}</div>
        </div>
      </div>
      <div id="profile-sections">${profileHtml}</div>
    </div>

    <!-- NOTIFICATIONS -->
    <div class="page screen hidden" id="screen-notifications">
      <div class="page-title">Notifications</div>
      <div class="page-subtitle">High-signal inbox for reminders, updates, and care alerts.</div>
      <div class="gap-md"></div>
      <div class="segments"><button class="seg active" data-seg="notifications" data-key="action">Action Needed</button><button class="seg" data-seg="notifications" data-key="updates">Updates</button><button class="seg" data-seg="notifications" data-key="inbox">Inbox</button><button class="seg" data-seg="notifications" data-key="settings">Settings</button></div>
      <div class="seg-panel" data-seg="notifications" data-panel="action"><div class="card" id="notif-action"></div></div>
      <div class="seg-panel hidden" data-seg="notifications" data-panel="updates"><div class="card" id="notif-updates"></div></div>
      <div class="seg-panel hidden" data-seg="notifications" data-panel="inbox"><div class="card" id="notif-inbox"></div></div>
      <div class="seg-panel hidden" data-seg="notifications" data-panel="settings"><div class="card" id="notif-settings"></div></div>
    </div>

  </div><!-- /content -->

  <!-- BOTTOM NAV -->
  <div class="bottom-nav" id="bottom-nav"><div class="bottom-nav-inner">
    <button class="nav-tab active" data-tab="today" onclick="nav('today')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg><span class="nav-label">Today</span></button>
    <button class="nav-tab" data-tab="track" onclick="nav('track')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z"/></svg><span class="nav-label">Track</span></button>
    <button class="nav-tab" data-tab="patterns" onclick="nav('patterns')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h.01M11 12h.01M15 8h.01M19 12h.01"/></svg><span class="nav-label">Pattern</span></button>
    <button class="nav-tab" data-tab="care" onclick="nav('care')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg><span class="nav-label">Care</span></button>
    <button class="nav-tab" data-tab="chat" onclick="nav('chat')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg><span class="nav-label">Chat</span></button>
  </div></div>

  <!-- FAB -->
  <button class="fab" id="fab" onclick="openSheet('quick')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M12 5v14"/></svg></button>

  <!-- SHEET -->
  <div class="sheet-overlay" id="sheet-overlay" onclick="closeSheetOnOverlay(event)">
    <div class="sheet-panel" onclick="event.stopPropagation()">
      <div class="sheet-handle"></div>
      <div class="sheet-header"><div class="sheet-title" id="sheet-title">Quick Add</div><div class="header-icon" onclick="closeSheet()">${I.x}</div></div>
      <div id="sheet-body"></div>
    </div>
  </div>

</div>`;
}

// ===== POPULATE DYNAMIC CONTENT =====
function populateScreens() {
  const s = _data.screens;

  // Track - Quick Add
  $('quick-grid').innerHTML = s.quickGrid.map(([ic,l,fn])=>`<div class="quick-item" onclick="${fn}"><div class="qi-icon">${I[ic]}</div><div class="qi-label">${l}</div></div>`).join('');

  // Track - Main
  $('main-trackers').innerHTML = s.mainTrackers.map(([ic,t,sub,fn])=>row(ic,t,sub,fn)).join('');

  // Track - Continue
  $('continue-trackers').innerHTML = renderGroupedRows(s.continueTrackers.groups);

  // Track - Recent
  $('recent-entries').innerHTML = renderGroupedRows(s.recentEntries.groups);

  // Track - More
  $('more-trackers').innerHTML = `<div class="flex-between mb-3"><div class="card-title">More Trackers</div><span style="font-size:12px;color:var(--text-muted)">Browse all</span></div>${renderGroupedRows(s.moreTrackers.groups)}`;

  // Entry context
  $('entry-context').innerHTML = `<div class="card-title">Nearby context</div><div class="mt-3 space-y">${s.entryContext.map(i=>row(i[0],i[1],i[2],i[3])).join('')}</div>`;

  // Patterns
  $('pattern-feed').innerHTML = `<div class="card-title">Pattern Feed</div><div class="mt-3 space-y">${renderGroupedRows(s.patternFeed.groups)}</div>`;
  $('pattern-connections').innerHTML = `<div class="card-title">Connections</div><div class="card-subtitle">Explore relationships between what you track and how you feel.</div><div class="mt-3 space-y">${s.patternConnections.map(i=>row(i[0],i[1],i[2],i[3])).join('')}</div>`;
  $('pattern-experiments').innerHTML = `<div class="card-title">Experiments</div><div class="card-subtitle">Test a theory with structured tracking.</div><div class="mt-3 space-y">${s.patternExperiments.map(i=>row(i[0],i[1],i[2],i[3])).join('')}</div>`;
  $('pattern-trends-list').innerHTML = `<div class="card-title">Trends</div><div class="mt-3 space-y">${s.patternTrends.map(i=>row(i[0],i[1],i[2])).join('')}</div>`;
  $('pattern-reports-list').innerHTML = `<div class="card-title">Summaries</div><div class="mt-3 space-y">${s.patternReports.map(i=>row(i[0],i[1],i[2],i[3])).join('')}</div>`;

  // Care
  $('care-plans').innerHTML = `<div class="card-title">Guided Plans</div><div class="card-subtitle">Structured support you can follow over time.</div><div class="mt-3 space-y">${s.carePlans.map(i=>row(i[0],i[1],i[2])).join('')}</div>`;
  $('care-recs').innerHTML = `<div class="card-title">Recommendations</div><div class="card-subtitle">Personalised suggestions based on your patterns.</div><div class="mt-3 space-y">${s.careRecs.map(i=>row(i[0],i[1],i[2])).join('')}</div>`;
  $('care-experiments').innerHTML = `<div class="card-title">Experiments</div><div class="card-subtitle">Test a hypothesis with structured tracking.</div><div class="mt-3 space-y">${s.careExperiments.map(i=>row(i[0],i[1],i[2],i[3])).join('')}</div>`;
  $('care-nav-items').innerHTML = `<div class="space-y">${s.careNavItems.map(i=>row(i[0],i[1],i[2],i[3])).join('')}</div>`;

  // Chat
  $('chat-conversations').innerHTML = `
    <div class="card"><div class="flex-between mb-3"><div class="card-title">Conversations</div>
      <div style="display:flex;gap:4px">
        <span class="chip coral" style="cursor:pointer">Recent</span>
        <span class="chip" style="background:var(--sand-light);color:var(--text-muted);cursor:pointer">Pinned</span>
        <span class="chip" style="background:var(--sand-light);color:var(--text-muted);cursor:pointer">Unread</span>
      </div>
    </div>
    <div class="space-y">${s.chatConversations.map(i=>row(i[0],i[1],i[2])).join('')}</div></div>
    <div class="chat-input-bar" style="margin-top:12px"><input type="text" placeholder="Search conversations..." readonly><button class="chat-send" style="background:var(--sand-light);color:var(--text-muted)">${I.search}</button></div>`;

  $('chat-your-guides').innerHTML = _data.guides.filter(g=>g.group==='Your Guides').map(g=>g.items.map(gi=>guideRow(gi)).join('')).join('');
  $('chat-specialists').innerHTML = _data.guides.filter(g=>g.group==='Specialist Guides').map(g=>g.items.map(gi=>guideRow(gi)).join('')).join('');
  $('chat-group').innerHTML = _data.guides.filter(g=>g.group==='Group Chats').map(g=>g.items.map(gi=>guideRow(gi)).join('')).join('');

  // Notifications
  const renderNotifGroup = (groups) => groups.map(g =>
    `<div class="group-label">${g.group}</div>${g.items.map(n => notif(n.icon, n.title, n.sub, n.time, n.action||'', {unread:n.unread,urgent:n.urgent})).join('')}`
  ).join('');

  $('notif-action').innerHTML = renderNotifGroup(s.notifications.action);
  $('notif-updates').innerHTML = renderNotifGroup(s.notifications.updates);

  // Inbox
  $('notif-inbox').innerHTML = `
    <div style="display:flex;gap:4px;margin-bottom:12px">
      <span class="chip coral" style="cursor:pointer">All</span>
      <span class="chip" style="background:var(--sand-light);color:var(--text-muted);cursor:pointer">Unread</span>
      <span class="chip" style="background:var(--sand-light);color:var(--text-muted);cursor:pointer">Archived</span>
    </div>
    ${s.notifications.inbox.map(n => {
      if (n.type === 'time-group') return `<div class="time-group">${n.label}</div>`;
      return notif(n.icon, n.title, n.sub, n.time, n.action||'', {unread:n.unread,urgent:n.urgent});
    }).join('')}`;

  $('notif-settings').innerHTML = `<div class="card-title">Notification Settings</div><div class="mt-3 space-y">
    ${row('bell','Notification Types','Choose which notifications you receive')}
    ${row('msgCircle','Channels','Push, email, and in-app preferences')}
    ${row('clock','Frequency','How often you want to be notified')}
    ${row('moon','Quiet Hours','Set do-not-disturb periods')}
  </div>`;
}

// ===== NAVIGATION =====
function nav(tab) {
  closeSheet();
  currentSub = null;
  currentGuide = null;
  currentTab = tab;
  render();
}
function navSub(sub) { closeSheet(); currentSub = sub; render(); }
function goBack() {
  closeSheet();
  if (currentGuide) { currentGuide = null; render(); return; }
  if (currentSub) { currentSub = null; render(); return; }
  if (currentTab === 'profile' || currentTab === 'notifications') { currentTab = 'today'; currentSub = null; render(); }
}

function render() {
  $$('.screen').forEach(s => { s.classList.add('hidden'); s.classList.remove('entering'); });
  let screenId, title, isDetail = false;

  if (currentSub === 'entry') { screenId='screen-entry'; title='Entry Detail'; isDetail=true; renderEntry(); }
  else if (currentSub === 'pattern-detail') { screenId='screen-pattern-detail'; title='Pattern Detail'; isDetail=true; renderPatternDetail(); }
  else if (currentSub === 'visit') { screenId='screen-visit'; title='Prepare for Visit'; isDetail=true; }
  else if (currentGuide) { screenId='screen-chat-thread'; title=_data.guides.flatMap(g=>g.items).find(g=>g.id===currentGuide)?.name||'Chat'; isDetail=true; renderThread(); }
  else {
    screenId = 'screen-'+currentTab;
    title = {today:'Today',track:'Track',patterns:'Pattern',care:'Care',chat:'Chat',profile:'Profile',notifications:'Notifications'}[currentTab];
    isDetail = (currentTab==='profile'||currentTab==='notifications');
  }

  const el = $(screenId);
  if (el) {
    el.classList.remove('hidden');
    requestAnimationFrame(() => el.classList.add('entering'));
  }
  $('header-title').textContent = title;

  const hl = $('header-left');
  if (isDetail || currentGuide) {
    hl.innerHTML = `<div class="header-icon" onclick="goBack()">${I.chevL}</div>`;
  } else {
    hl.innerHTML = `<div class="avatar-sm" onclick="nav('profile')">${_data.persona.initials}</div>`;
  }

  const overlay = currentTab==='profile'||currentTab==='notifications';
  $('bottom-nav').style.display = overlay ? 'none' : '';
  $('fab').style.display = overlay ? 'none' : '';

  $$('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === currentTab));
  $('content').scrollTop = 0;

  // Stagger animate
  if (el) {
    const items = el.querySelectorAll('.feed-card, .row, .guided-card, .notif-item, .card, .report-card');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(8px)';
      item.style.transition = 'opacity .3s ease, transform .3s ease';
      item.style.transitionDelay = (i * 0.03) + 's';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        });
      });
    });
  }

  requestAnimationFrame(updateSegmentFades);
}

// ===== ENTRY DETAIL =====
function openEntry(kind) { currentEntry=kind; currentTab='track'; currentSub='entry'; closeSheet(); render(); }
function renderEntry() {
  const d = _data.entries[currentEntry]; if (!d) return;
  $('entry-card').innerHTML = `
    <div class="card-header"><div><div style="font-family:var(--font-d);font-size:16px;font-weight:600">${d.title}</div><div class="card-subtitle">${d.subtitle}</div></div><button class="btn btn-sm btn-outline" style="width:auto">Edit</button></div>
    <div class="detail-grid">${d.details.map(([k,v])=>`<div class="detail-cell"><div class="detail-cell-label">${k}</div><div class="detail-cell-value">${v}</div></div>`).join('')}</div>`;
}

// ===== PATTERN DETAIL =====
function openPattern(id) { currentPattern=id; currentSub='pattern-detail'; closeSheet(); render(); }
function renderPatternDetail() {
  const p = _data.patterns[currentPattern];
  if (!p) return;
  const el = $('pattern-detail-content');
  const barsHtml = p.bars.map(h => {
    const cls = h > 70 ? 'active' : h < 30 ? 'muted' : '';
    return `<div class="bar ${cls}" style="height:${h}%"></div>`;
  }).join('');
  const factorsHtml = p.factors.map(([ic,name,strength,color,width,bg])=>`
    <div class="factor-row"><div class="factor-icon" style="background:${bg};color:${color}">${I[ic]}</div><div class="factor-body"><div class="factor-name">${name}</div><div class="factor-strength">${strength}</div></div><div class="factor-bar"><div class="factor-bar-fill" style="width:${width};background:${color}"></div></div></div>
  `).join('');
  const clarifyHtml = p.clarify.map(c => `<div class="question-item">${c}</div>`).join('');

  el.innerHTML = `
    <div class="card">
      <div class="card-header"><div><div style="font-family:var(--font-d);font-size:18px;font-weight:600">${p.title}</div><div class="card-subtitle">Educational signal, not a diagnosis.</div></div><span class="chip ${p.chip}">${p.chipLabel}</span></div>
      <div class="mini-chart" style="height:48px">${barsHtml}</div>
      <div class="confidence-bar"><div class="confidence-track"><div class="confidence-fill" style="width:${p.confidence}%"></div></div><div class="confidence-label">${p.confidence}% confidence</div></div>
      <div class="info-box amber">${p.summary}</div>
    </div>
    <div class="card">
      <div class="card-title">Contributing factors</div>
      <div class="mt-3">${factorsHtml}</div>
    </div>
    <div class="card">
      <div class="card-title">What could clarify this</div>
      <div class="mt-3">${clarifyHtml}</div>
      <div class="mt-4"><button class="btn" onclick="${p.trackAction}">Track this now</button></div>
    </div>
    <div class="card coral-glow-bg interactive" onclick="nav('chat');openGuide('${p.chatGuide}')">
      <div class="card-header">
        <div><div class="card-title" style="color:var(--coral)">Ask a guide about this</div><div class="card-subtitle">Explore this pattern in conversation.</div></div>
        <div style="color:var(--coral)">${I.msgCircle}</div>
      </div>
    </div>`;
}

// ===== CHAT THREAD =====
function openGuide(id) { currentGuide=id; render(); }
function renderThread() {
  const guide = _data.guides.flatMap(g=>g.items).find(g=>g.id===currentGuide);
  if (!guide) return;
  const el = $('thread-content');

  const d = _data.guideData[currentGuide] || {
    intro: guide.desc,
    focuses: ['Multi-perspective support','Coordinated guidance','Shared context'],
    prompts: ['How can you help me?','What should I know?','What should I do next?'],
    userMsg: 'How can you help me?',
    assistantMsg: 'I\'m here to help. Tell me what\'s on your mind and I\'ll provide guidance based on your context and recent logs.',
    routeOuts: [],
  };

  el.innerHTML = `
    <div class="card coral-glow-bg" style="border-color:var(--coral-light)">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
        <div class="guide-avatar neutral" style="width:40px;height:40px">${I[guide.icon]||''}</div>
        <div>
          <div style="font-family:var(--font-d);font-size:15px;font-weight:600;color:var(--text-primary)">${guide.name}</div>
          <div style="font-size:12px;color:var(--text-secondary);margin-top:1px">${guide.desc}</div>
        </div>
      </div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.45">${d.intro}</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:10px">
        ${d.focuses.map(f => `<span style="padding:3px 8px;border-radius:6px;font-size:11px;font-weight:500;background:var(--sand-light);color:var(--text-muted)">${f}</span>`).join('')}
      </div>
    </div>
    <div class="prompt-chips" style="margin-top:12px">${d.prompts.map(t=>`<div class="prompt-chip">${t}</div>`).join('')}</div>
    <div class="chat-bubbles">
      <div class="bubble user">${d.userMsg}</div>
      <div class="bubble assistant">${d.assistantMsg}</div>
    </div>
    ${d.routeOuts.length ? `<div style="display:flex;gap:8px;margin-top:12px">${d.routeOuts.map(([label,fn])=>`<button class="btn btn-sm btn-outline" style="width:auto;font-size:12px" onclick="${fn}">${label}</button>`).join('')}</div>` : ''}
    <div class="chat-input-bar" style="margin-top:16px"><input type="text" placeholder="Type a question..." readonly><button class="chat-send">${I.arrowUp}</button></div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-hint);text-align:center">Tip: Use @guide name to bring another perspective into this thread</div>`;
}

// ===== SEGMENTS =====
function setSegment(group, key) {
  segState[group] = key;
  $$(`[data-seg="${group}"]`).forEach(el => {
    if (el.classList.contains('seg')) el.classList.toggle('active', el.dataset.key === key);
  });
  $$(`[data-seg="${group}"][data-panel]`).forEach(p => {
    p.classList.toggle('hidden', p.dataset.panel !== key);
  });
}

// ===== SHEETS =====
function openSheet(type) {
  $('sheet-title').textContent = _data.sheetTitles[type] || 'Add';
  const body = $('sheet-body');
  if (type === 'quick') {
    const items = [['bm','Bowel movement','poop'],['food','Food','utensils'],['symptom','Symptom','thermom'],['meds','Medication','pill'],['note','Note','fileText']];
    body.innerHTML = items.map(([k,l,ic])=>`<div class="row" onclick="${k==='bm'||k==='food'?`openEntry('${k}')`:`openSheet('${k}')`}"><div class="row-icon">${I[ic]}</div><div class="row-body"><div class="row-title">Log ${l.toLowerCase()}</div></div><div class="row-chevron">${I.chevR}</div></div>`).join('');
  } else {
    body.innerHTML = `<div class="placeholder">Detailed logging form for <strong>${(_data.sheetTitles[type]||'').toLowerCase()}</strong> will go here.<br><br>This prototype focuses on navigation architecture validation.</div>`;
  }
  requestAnimationFrame(() => $('sheet-overlay').classList.add('open'));
  $('fab').classList.add('open');
}
function closeSheet() {
  $('sheet-overlay').classList.remove('open');
  $('fab').classList.remove('open');
}
function closeSheetOnOverlay(e) { if (e.target === $('sheet-overlay')) closeSheet(); }

// ===== SEGMENT SCROLL FADE =====
function updateSegmentFades() {
  document.querySelectorAll('.segments').forEach(seg => {
    const atStart = seg.scrollLeft < 4;
    const atEnd = seg.scrollLeft + seg.clientWidth >= seg.scrollWidth - 4;
    seg.classList.remove('scrolled-end', 'scrolled-mid');
    if (atEnd) seg.classList.add('scrolled-end');
    else if (!atStart) seg.classList.add('scrolled-mid');
  });
}

// ===== CHECKLIST INTERACTIVITY =====
function setupChecklist() {
  document.addEventListener('click', e => {
    const item = e.target.closest('.checklist-item');
    if (!item) return;
    const box = item.querySelector('.check-box');
    const label = item.querySelector('.check-label');
    if (box && label) {
      box.classList.toggle('checked');
      label.classList.toggle('done');
      updatePrepProgress();
    }
  });
}

function updatePrepProgress() {
  const checks = document.querySelectorAll('#screen-visit .check-box');
  const steps = document.querySelectorAll('#screen-visit .prep-step');
  const label = document.querySelector('#screen-visit .prep-label');
  if (!checks.length || !steps.length) return;
  let done = 0;
  checks.forEach(c => { if (c.classList.contains('checked')) done++; });
  steps.forEach((s, i) => {
    s.classList.remove('done', 'active');
    if (i < done) s.classList.add('done');
    else if (i === done) s.classList.add('active');
  });
  if (label) label.textContent = done + ' of ' + checks.length + ' steps complete';
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('shown');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  function observeReveals() {
    $$('.reveal').forEach(el => revealObserver.observe(el));
  }

  const mo = new MutationObserver(() => observeReveals());
  mo.observe(document.getElementById('content'), { childList: true, subtree: true });
  observeReveals();
}

// ===== BOOT =====
export function boot(conditionData) {
  _data = conditionData;
  currentPattern = Object.keys(_data.patterns)[0] || 'late-meals';

  // Build HTML shell
  buildShell();

  // Populate dynamic content
  populateScreens();

  // Bind globals for onclick handlers
  window.nav = nav;
  window.navSub = navSub;
  window.goBack = goBack;
  window.openEntry = openEntry;
  window.openPattern = openPattern;
  window.openGuide = openGuide;
  window.openSheet = openSheet;
  window.closeSheet = closeSheet;
  window.closeSheetOnOverlay = closeSheetOnOverlay;
  window.setSegment = setSegment;

  // Event listeners
  document.addEventListener('click', e => {
    const seg = e.target.closest('.seg[data-seg][data-key]');
    if (seg) setSegment(seg.dataset.seg, seg.dataset.key);
  });

  document.addEventListener('scroll', e => {
    if (e.target.classList && e.target.classList.contains('segments')) updateSegmentFades();
  }, true);

  window.addEventListener('resize', updateSegmentFades);

  setupChecklist();
  setupScrollReveal();

  // Initial render
  render();
}
