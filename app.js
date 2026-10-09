/* ============================================================
   TRAIL MIX — app engine
   Reads everything from data/*.js and media.js; never hard-codes content.
   Progress lives in localStorage ("trailmix.v1").
   ============================================================ */
(function () {
'use strict';

/* ---------------- data wiring ---------------- */
var W = window.WORDS || {}, G = window.GRAMMAR || {}, V = window.VOCAB || {}, P = window.PATTERNS || {},
    ST = window.STORIES || {}, T = window.TESTS || [], IMG = window.IMAGES || {}, MEDIA = window.MEDIA || {podcasts:[],videos:[],extras:[]};
var UNITS = {
  u6: { key:'u6', n:6, title:'Fabulous food!', pages:'pp.78–91, 146', icon:'🍲', words:W.u6, story:ST.u6, pats:P.u6||[], g:G.u6, v:V.u6 },
  u7: { key:'u7', n:7, title:'Into the wild', pages:'pp.92–103, 147', icon:'🌿', words:W.u7, story:ST.u7, pats:P.u7||[], g:G.u7, v:V.u7 }
};
var WMAP = {}, MODS = {}, CKS = {}, STAGES = {}, ITEMS = {}, PATMAP = {};
['u6','u7'].forEach(function (u) {
  var U = UNITS[u];
  (U.words && U.words.words || []).forEach(function (w) { w.unit = u; WMAP[w.id] = w; });
  U.pats.forEach(function (p) { p.unit = u; PATMAP[p.id + '@' + u] = p; });
  [['g', U.g], ['v', U.v]].forEach(function (pair) {
    var kind = pair[0], data = pair[1]; if (!data) return;
    data.stages.forEach(function (s) {
      s.unit = u; s.kind = kind; STAGES[s.id] = s;
      s.modules.forEach(function (m) { m.unit = u; m.kind = kind; m.stage = s; MODS[m.id] = m;
        m.items.forEach(function (it) { ITEMS[it.id] = { it: it, src: m.id }; }); });
      if (s.checkpoint) { var c = s.checkpoint; c.unit = u; c.kind = kind; c.stage = s; CKS[c.id] = c;
        c.items.forEach(function (it) { ITEMS[it.id] = { it: it, src: c.id }; }); }
    });
  });
});
var TMAP = {}; T.forEach(function (t) { TMAP[t.id] = t;
  (t.items || []).forEach(function (it) { ITEMS[it.id] = { it: it, src: t.id }; });
  (t.sections || []).forEach(function (s) { s.items.forEach(function (it) { it._sec = s; ITEMS[it.id] = { it: it, src: t.id }; }); }); });
function allMods(u, kind) { var d = UNITS[u][kind]; var out = []; if (d) d.stages.forEach(function (s) { out = out.concat(s.modules); }); return out; }

/* ---------------- state ---------------- */
var KEY = 'trailmix.v1', S;
function fresh() { return { v:1, xp:0, mods:{}, cks:{}, faults:{}, fixed:0, words:{}, pages:{}, pats:{}, tests:{}, tree:{}, badges:{}, streak:{last:'',n:0,best:0}, bestCombo:0, perfect:0, route:[] }; }
function load() { try { S = JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch (e) { S = fresh(); }
  var f = fresh(); for (var k in f) if (!(k in S)) S[k] = f[k]; }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
load();
function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
function touchStreak() {
  var t = today(), st = S.streak; if (st.last === t) return;
  var y = new Date(); y.setDate(y.getDate() - 1);
  var ys = y.getFullYear() + '-' + ('0' + (y.getMonth() + 1)).slice(-2) + '-' + ('0' + y.getDate()).slice(-2);
  st.n = (st.last === ys) ? st.n + 1 : 1; st.last = t; st.best = Math.max(st.best || 0, st.n); save(); }

/* ---------------- ranks & badges ---------------- */
var RANKS = [
  {xp:0, name:'Day Tripper', note:'Boots on. The trail starts here.'},
  {xp:120, name:'Trail Walker', note:'You know where the path goes.'},
  {xp:350, name:'Camp Cook', note:'Food words and quantities are under control.'},
  {xp:700, name:'Pathfinder', note:'You spot the clue in a sentence before you answer.'},
  {xp:1150, name:'Scout', note:'Plans, predictions and arrangements — sorted.'},
  {xp:1700, name:'Ranger', note:'You can explain why a wrong answer is wrong.'},
  {xp:2400, name:'Trail Guide', note:'Ready to lead someone else up this mountain.'},
  {xp:3200, name:'Expedition Leader', note:'TU-style traps don’t catch you any more.'},
  {xp:4200, name:'Summit Legend', note:'Every trail walked. Nothing left to fear in Units 6 and 7.'}
];
function rankOf(xp) { var r = RANKS[0], i = 0; RANKS.forEach(function (x, j) { if (xp >= x.xp) { r = x; i = j; } }); return { r:r, i:i, next:RANKS[i + 1] }; }
var BADGES = [
  {id:'first', icon:'🥾', name:'First Steps', how:'Finish your first practice module.'},
  {id:'triage', icon:'🧭', name:'Trailhead', how:'Finish the Trailhead Check (both units).'},
  {id:'pantry', icon:'🧺', name:'Full Pantry', how:'Open all 60 Unit 6 word cards.'},
  {id:'field', icon:'🔭', name:'Field Guide', how:'Open all 61 Unit 7 word cards.'},
  {id:'reader', icon:'📖', name:'Bookworm', how:'Read every page of both storybooks.'},
  {id:'patterns', icon:'🧠', name:'Pattern Spotter', how:'Open every pattern card in both units.'},
  {id:'three', icon:'⭐', name:'Three Stars', how:'Get 3 stars in any module.'},
  {id:'hat', icon:'🎩', name:'Hat-trick', how:'Get 3 stars in 3 modules.'},
  {id:'boss', icon:'🏔️', name:'Checkpoint Cleared', how:'Pass any checkpoint with 2 stars or more.'},
  {id:'clean', icon:'✨', name:'Clean Sweep', how:'Score 100% on any checkpoint.'},
  {id:'nohint', icon:'🙈', name:'No Map Needed', how:'Score 100% in a module without hints.'},
  {id:'combo10', icon:'🔥', name:'On Fire', how:'Answer 10 in a row right first time.'},
  {id:'fixer', icon:'🩹', name:'Fault Fixer', how:'Fix 10 questions from your Fault List.'},
  {id:'streak3', icon:'📅', name:'Three-Day Trek', how:'Study 3 days in a row.'},
  {id:'streak7', icon:'🗓️', name:'Week on the Trail', how:'Study 7 days in a row.'},
  {id:'base', icon:'⛺', name:'Base Camp', how:'Finish TU-style Mock 1.'},
  {id:'summit', icon:'🚩', name:'Summit', how:'Finish TU-style Mock 2.'},
  {id:'mock30', icon:'🏆', name:'30 Club', how:'Score 30/40 or more in a TU-style mock.'},
  {id:'sorter', icon:'🌳', name:'Word Sorter', how:'Sort 30 words right first time in the Sorting Trees.'},
  {id:'u6master', icon:'🌶️', name:'Unit 6 Master', how:'2+ stars in every Unit 6 module.'},
  {id:'u7master', icon:'🐅', name:'Unit 7 Master', how:'2+ stars in every Unit 7 module.'}
];
function count(o) { return Object.keys(o || {}).length; }
function checkBadges() {
  var got = [], b = S.badges, ms = Object.keys(S.mods).map(function (k) { return S.mods[k]; });
  function give(id) { if (!b[id]) { b[id] = today(); got.push(id); } }
  if (ms.some(function (m) { return m.n > 0; })) give('first');
  var tri = S.tests.triage; if (tri && tri.res && count(tri.res) >= (TMAP.triage ? TMAP.triage.items.length : 99)) give('triage');
  var u6w = (W.u6.words || []).filter(function (w) { return S.words[w.id]; }).length; if (u6w >= (W.u6.words || []).length) give('pantry');
  var u7w = (W.u7.words || []).filter(function (w) { return S.words[w.id]; }).length; if (u7w >= (W.u7.words || []).length) give('field');
  var pagesAll = 0, pagesRead = 0; ['u6','u7'].forEach(function (u) { (UNITS[u].story.chapters || []).forEach(function (c, ci) { c.pages.forEach(function (p, pi) { pagesAll++; if ((S.pages[u] || {})[ci + '.' + pi]) pagesRead++; }); }); });
  if (pagesAll && pagesRead >= pagesAll) give('reader');
  if (count(S.pats) >= UNITS.u6.pats.length + UNITS.u7.pats.length) give('patterns');
  var three = ms.filter(function (m) { return m.stars === 3; }).length; if (three >= 1) give('three'); if (three >= 3) give('hat');
  Object.keys(S.cks).forEach(function (k) { var c = S.cks[k]; if (c.stars >= 2) give('boss'); if (c.best >= 1) give('clean'); });
  if (ms.some(function (m) { return m.nohint; })) give('nohint');
  if (count(S.tree) >= 30) give('sorter');
  if (S.bestCombo >= 10) give('combo10'); if (S.fixed >= 10) give('fixer');
  if (S.streak.best >= 3) give('streak3'); if (S.streak.best >= 7) give('streak7');
  var m1 = S.tests.mock1, m2 = S.tests.mock2; if (m1 && m1.hist && m1.hist.length) give('base'); if (m2 && m2.hist && m2.hist.length) give('summit');
  if ([m1, m2].some(function (m) { return m && (m.best || 0) >= 30; })) give('mock30');
  ['u6','u7'].forEach(function (u) { var all = allMods(u, 'g').concat(allMods(u, 'v'));
    if (all.length && all.every(function (m) { return (S.mods[m.id] || {}).stars >= 2; })) give(u + 'master'); });
  if (got.length) { save(); got.forEach(function (id, i) { var bd = BADGES.filter(function (x) { return x.id === id; })[0];
    setTimeout(function () { toast(bd.icon + ' Badge earned: ' + bd.name); confetti(); }, 900 * i + 300); }); }
}
function addXP(n) { S.xp += n; touchStreak(); save(); paintChips(); }

/* ---------------- helpers ---------------- */
var app = document.getElementById('app');
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function stars(n) { var s = ''; for (var i = 1; i <= 3; i++) s += i <= n ? '★' : '<span class="off">★</span>'; return '<span class="stars" aria-label="' + (n || 0) + ' of 3 stars">' + s + '</span>'; }
function lvl(c) { return c ? '<span class="tag ' + (c === 'A2' ? 'a2' : c === 'B1' ? 'b1' : '') + '">' + esc(c) + '</span>' : ''; }
function imgOf(id) { return IMG[id] || null; }
function wordImg(id, cls) { var im = imgOf(id), w = WMAP[id] || {};
  return im && im.src ? '<img src="' + im.src + '" alt="' + esc(w.word || id) + '" loading="lazy"' + (cls ? ' class="' + cls + '"' : '') + '>' : '<span class="em" aria-hidden="true">' + (w.emoji || '•') + '</span>'; }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function toast(msg) { document.querySelectorAll('.toast').forEach(function (x) { x.remove(); }); var t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.innerHTML = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2600); }
function confetti() {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var c = document.createElement('canvas'); c.className = 'confetti'; c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
  var x = c.getContext('2d'), cols = ['#F2AE1C','#D9325F','#16936A','#2F6FEB','#ffffff'], ps = [];
  for (var i = 0; i < 120; i++) ps.push({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35, vx: (Math.random() - .5) * 12, vy: -Math.random() * 12 - 4, s: 4 + Math.random() * 6, c: cols[i % cols.length], r: Math.random() * 6 });
  var f = 0; (function tick() { x.clearRect(0, 0, c.width, c.height); ps.forEach(function (p) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += .2; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); x.restore(); });
    if (++f < 110) requestAnimationFrame(tick); else c.remove(); })();
}
function speak(text) { try { var u = new SpeechSynthesisUtterance(text); u.lang = 'en-GB'; u.rate = .9;
  var v = speechSynthesis.getVoices().filter(function (v) { return /en-GB/i.test(v.lang); })[0]; if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) { toast('Sound is not available in this browser.'); } }
function stripTags(s) { return String(s || '').replace(/<[^>]+>/g, ''); }
function modUrl(m) { return '#/m/' + m.id; }

/* ---------------- header chips ---------------- */
function paintChips() {
  var rk = rankOf(S.xp).r, got = count(S.words), all = (W.u6.words || []).length + (W.u7.words || []).length;
  document.getElementById('chips').innerHTML =
    '<span class="chip xp" title="Experience points">⭐ ' + S.xp + '<span class="lbl"> XP</span></span>' +
    '<span class="chip" title="Days in a row">🔥 ' + (S.streak.last === today() ? S.streak.n : 0) + '</span>' +
    '<span class="chip" title="Word cards collected">📖 ' + got + '/' + all + '</span>' +
    '<span class="chip rank" title="Your rank">' + esc(rk.name) + '</span>' +
    '<button class="iconbtn" data-act="theme" aria-label="Switch light or dark mode">◐</button>';
}

/* ---------------- router ---------------- */
var RUN = null, EXAM = null;
function route() {
  var h = location.hash.replace(/^#\/?/, '') || 'home', parts = h.split('?')[0].split('/'), q = {};
  (h.split('?')[1] || '').split('&').forEach(function (kv) { if (kv) { var a = kv.split('='); q[a[0]] = decodeURIComponent(a[1] || ''); } });
  RUN = null; if (parts[0] !== 'mock') EXAM = null;
  var nav = parts[0] === 'm' || parts[0] === 'ck' ? (MODS[parts[1]] || CKS[parts[1]] || {}).unit : parts[0];
  if (parts[0] === 'triage' || parts[0] === 'mock') nav = 'tests'; if (parts[0] === 'faults') nav = 'record';
  document.querySelectorAll('#nav a').forEach(function (a) { if (a.getAttribute('data-nav') === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  document.body.className = (nav === 'u6' || nav === 'u7') ? nav : '';
  closeSheet(true);
  if (parts[0] === 'u6' || parts[0] === 'u7') viewUnit(parts[0], parts[1] || 'vocab', parts[2] || 'story', q);
  else if (parts[0] === 'm') viewModule(parts[1]);
  else if (parts[0] === 'ck') viewCheckpoint(parts[1]);
  else if (parts[0] === 'tests') viewTests();
  else if (parts[0] === 'triage') viewTriage(parts[1]);
  else if (parts[0] === 'mock') viewMock(parts[1]);
  else if (parts[0] === 'record') viewRecord();
  else if (parts[0] === 'faults') startFaults();
  else viewHome();
  paintChips(); window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

/* ---------------- HOME ---------------- */
function modProgress(u, kind) { var ms = allMods(u, kind), done = 0, st = 0;
  ms.forEach(function (m) { var r = S.mods[m.id]; if (r && r.n) done++; st += r ? r.stars || 0 : 0; });
  return { n: ms.length, done: done, stars: st, max: ms.length * 3 }; }
function nextStep() {
  var tri = S.tests.triage;
  if (!tri || !tri.res || !count(tri.res)) return { t:'Start with the Trailhead Check', d:'44 quick questions (or one unit at a time). It finds the modules you need and builds your route.', href:'#/triage', b:'Take the check' };
  var r = (S.route || []).filter(function (id) { return MODS[id] && !((S.mods[id] || {}).stars >= 2); });
  if (r.length) { var m = MODS[r[0]]; return { t:'Next on your route: ' + stripTags(m.name), d:'Unit ' + UNITS[m.unit].n + ' · ' + (m.kind === 'g' ? 'Grammar' : 'Vocabulary') + '. ' + r.length + ' module' + (r.length > 1 ? 's' : '') + ' left on your route.', href: modUrl(m), b:'Open module' }; }
  var nf = count(S.faults); if (nf >= 5) return { t:'Fix your faults', d:nf + ' questions are waiting on your Fault List. Fixing them is the fastest way to improve.', href:'#/faults', b:'Review faults' };
  var all = allMods('u6','v').concat(allMods('u6','g'), allMods('u7','v'), allMods('u7','g'));
  var todo = all.filter(function (m) { return !((S.mods[m.id] || {}).stars >= 2); })[0];
  if (todo) return { t:'Keep climbing: ' + stripTags(todo.name), d:'Unit ' + UNITS[todo.unit].n + ' · ' + (todo.kind === 'g' ? 'Grammar' : 'Vocabulary') + '. Aim for 2 stars or more.', href:modUrl(todo), b:'Open module' };
  var m1 = S.tests.mock1; if (!m1 || !m1.hist) return { t:'Try TU-style Mock 1', d:'40 questions, 60 minutes, just like a real paper.', href:'#/mock/mock1', b:'Start Mock 1' };
  return { t:'Try TU-style Mock 2', d:'The harder paper. Beat your best score.', href:'#/mock/mock2', b:'Start Mock 2' };
}
function viewHome() {
  var rk = rankOf(S.xp), nx = rk.next, pct = nx ? Math.round(100 * (S.xp - rk.r.xp) / (nx.xp - rk.r.xp)) : 100, ns = nextStep();
  var html = '<section class="hero"><div class="hello"><h1>Two units, one trail.</h1><p class="muted" style="max-width:56ch">Unit 6 is food: what you can count, what goes in a jar, and how to order it. Unit 7 is the wild: animals, places, the weather, and how to talk about the future. Read the stories, collect the words, climb the grammar trails, then test yourself the TU way.</p>' +
    '<div class="row"><a class="btn" href="#/u6/vocab/story">🍲 Start Unit 6</a><a class="btn ghost" href="#/u7/vocab/story">🌿 Start Unit 7</a></div></div>' +
    '<div class="rankcard"><div class="muted small">Your rank</div><div class="rk">' + esc(rk.r.name) + '</div><div class="muted small">' + esc(rk.r.note) + '</div>' +
    '<div class="bar"><i style="width:' + pct + '%"></i></div><div class="small">' + (nx ? (nx.xp - S.xp) + ' XP to <b>' + esc(nx.name) + '</b>' : 'Top rank reached') + '</div>' +
    '<div class="small muted">🔥 ' + (S.streak.last === today() ? S.streak.n : 0) + ' day streak · best ' + (S.streak.best || 0) + ' · 🏅 ' + count(S.badges) + '/' + BADGES.length + ' badges</div></div></section>';
  html += '<div class="next"><div><h3>' + esc(ns.t) + '</h3><div class="muted">' + esc(ns.d) + '</div></div><a class="btn mango" href="' + ns.href + '">' + esc(ns.b) + '</a></div>';
  html += '<div class="unitcards">' + ['u6','u7'].map(function (u) { var U = UNITS[u], gp = modProgress(u, 'g'), vp = modProgress(u, 'v'),
      wl = (U.words.words || []), wg = wl.filter(function (w) { return S.words[w.id]; }).length;
    return '<a class="unitcard ' + u + '" href="#/' + u + '/vocab/story"><span class="big" aria-hidden="true">' + U.icon + '</span><div class="small muted">Unit ' + U.n + ' · Student’s Book ' + U.pages + '</div><h2 style="color:var(--accent)">' + U.title + '</h2>' +
      '<div class="prog"><span>Words</span><div class="bar"><i style="width:' + Math.round(100 * wg / Math.max(1, wl.length)) + '%"></i></div><span>' + wg + '/' + wl.length + '</span>' +
      '<span>Vocab trail</span><div class="bar"><i style="width:' + Math.round(100 * vp.stars / Math.max(1, vp.max)) + '%"></i></div><span>' + vp.stars + '/' + vp.max + '★</span>' +
      '<span>Grammar trail</span><div class="bar"><i style="width:' + Math.round(100 * gp.stars / Math.max(1, gp.max)) + '%"></i></div><span>' + gp.stars + '/' + gp.max + '★</span></div></a>'; }).join('') + '</div>';
  var r = (S.route || []).filter(function (id) { return MODS[id]; });
  if (r.length) html += '<div class="section"><h2>Your route</h2><span class="muted small">From your Trailhead Check. A module leaves the route at 2★.</span></div><div class="modlinks">' +
    r.map(function (id) { var m = MODS[id], s = (S.mods[id] || {}).stars || 0; return '<a class="linkchip ' + m.unit + '" href="' + modUrl(m) + '" style="' + (s >= 2 ? 'opacity:.5' : '') + '">' + (s >= 2 ? '✓ ' : '') + 'U' + UNITS[m.unit].n + ' ' + (m.kind === 'g' ? '⚙️ ' : '📚 ') + stripTags(m.name) + '</a>'; }).join('') + '</div>';
  html += '<div class="section"><h2>Listen and watch</h2></div>' + mediaShelf(null, null);
  html += '<div class="section"><h2>Badges</h2><a class="small" href="#/record">See all</a></div><div class="badges">' +
    BADGES.filter(function (b) { return S.badges[b.id]; }).concat(BADGES.filter(function (b) { return !S.badges[b.id]; })).slice(0, 6).map(badgeHtml).join('') + '</div>';
  app.innerHTML = html;
}
function badgeHtml(b) { return '<div class="badge' + (S.badges[b.id] ? '' : ' off') + '"><div class="bi" aria-hidden="true">' + b.icon + '</div><b>' + esc(b.name) + '</b><div class="tiny muted">' + esc(b.how) + '</div></div>'; }
function mediaShelf(unit, module) {
  function f(x) { return (unit == null || x.unit == unit) && (module == null || x.module === module); }
  var pods = (MEDIA.podcasts || []).filter(f), vids = (MEDIA.videos || []).filter(f), ex = (MEDIA.extras || []).filter(f);
  if (!pods.length && !vids.length && !ex.length) return module ? '' : '<div class="media"><div class="mitem"><span aria-hidden="true">🎧</span><div><b>Podcasts and videos are coming.</b><div class="small muted">When T.Chris adds an episode, it appears here and on the module it belongs to.</div></div></div></div>';
  var h = '<div class="media">';
  pods.forEach(function (p) { h += '<div class="mitem"><span aria-hidden="true">🎧</span><div style="flex:1"><b>' + esc(p.title) + '</b> <span class="small muted">' + esc(p.duration || '') + '</span>' +
    (p.external ? '<div><a class="btn sm ghost" target="_blank" rel="noopener" href="' + esc(p.url) + '">Listen</a></div>' : '<audio controls preload="none" src="' + esc(p.url) + '" style="width:100%;margin-top:6px"></audio>') +
    (p.transcript ? '<details><summary class="small">Transcript</summary><div class="small">' + p.transcript + '</div></details>' : '') + '</div></div>'; });
  vids.forEach(function (v) { var src = v.youtube ? 'https://www.youtube-nocookie.com/embed/' + esc(v.youtube) : esc(v.iframe || '');
    h += '<div class="mitem" style="display:block"><b>🎬 ' + esc(v.title) + '</b> <span class="small muted">' + esc(v.duration || '') + '</span><div style="position:relative;aspect-ratio:16/9;margin-top:8px"><iframe src="' + src + '" title="' + esc(v.title) + '" style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:10px" allowfullscreen loading="lazy"></iframe></div></div>'; });
  ex.forEach(function (x) { h += '<div class="mitem"><span aria-hidden="true">🧩</span><a href="' + esc(x.url) + '" target="_blank" rel="noopener"><b>' + esc(x.title) + '</b></a></div>'; });
  return h + '</div>';
}

/* ---------------- UNIT pages ---------------- */
function viewUnit(u, tab, sub, q) {
  var U = UNITS[u];
  var html = '<div class="unit-hero"><div><div class="num">Unit ' + U.n + ' · Student’s Book ' + U.pages + '</div><h1>' + U.icon + ' ' + U.title + '</h1></div>' +
    '<nav class="seg" aria-label="Unit sections"><a href="#/' + u + '/vocab/story"' + (tab === 'vocab' ? ' aria-current="page"' : '') + '>📚 Vocabulary</a><a href="#/' + u + '/grammar"' + (tab === 'grammar' ? ' aria-current="page"' : '') + '>⚙️ Grammar</a></nav></div>';
  if (tab === 'grammar') { app.innerHTML = html + '<p class="muted" style="max-width:70ch">Each stage is a camp on the trail. Open a module, read the rule, then answer 5–7 questions. Clear every module in a stage to unlock its checkpoint.</p>' + treeCallout(u) + trailMap(U.g) + unitMedia(u); return; }
  var subs = [['story','📖 Storybook'],['train','🧭 Word trail'],['patterns','🧠 Patterns'],['tree','🌳 Sorting tree'],['words','📇 Word bank']];
  html += '<nav class="subseg" aria-label="Vocabulary sections">' + subs.map(function (s) { return '<a href="#/' + u + '/vocab/' + s[0] + '"' + (sub === s[0] ? ' aria-current="page"' : '') + '>' + s[1] + '</a>'; }).join('') + '</nav>';
  app.innerHTML = html + '<div id="vbody"></div>';
  var body = document.getElementById('vbody');
  if (sub === 'train') body.innerHTML = '<p class="muted" style="max-width:70ch">The words in small groups, with the idea that links each group. Every module has picture, sorting and gap questions.</p>' + trailMap(U.v) + unitMedia(u);
  else if (sub === 'patterns') { body.innerHTML = patternsView(u); if (q.p) { var el = document.getElementById('pat-' + q.p); if (el) { el.classList.add('open'); markPattern(u, q.p); setTimeout(function () { el.scrollIntoView({ block:'start' }); }, 50); } } }
  else if (sub === 'words') wordBank(u, body);
  else if (sub === 'tree') treeView(u, body, q);
  else storyView(u, body, q);
}
function treeCallout(u) { return TR[u] ? '<a class="next tcall" href="#/' + u + '/vocab/tree"><div><h3>🌳 Sorting tree: ' + esc(TR[u].title) + '</h3><div class="muted">Answer 2–3 questions about any word and see which group it belongs to — and what that means for the grammar.</div></div><span class="btn accent sm">Open the tree</span></a>' : ''; }
function unitMedia(u) { var m = mediaShelf(UNITS[u].n, null); return '<div class="section"><h2>Listen and watch</h2></div>' + m; }
function trailMap(data) {
  if (!data) return '<div class="empty">This trail is not loaded.</div>';
  return '<div class="trail">' + data.stages.map(function (s) {
    var done = s.modules.filter(function (m) { return (S.mods[m.id] || {}).n; }).length, all = s.modules.length,
        ck = s.checkpoint, ckr = ck ? S.cks[ck.id] : null, unlocked = done === all;
    return '<section class="stage' + (ckr && ckr.stars >= 2 ? ' done' : '') + '"><div class="waypt" aria-hidden="true">' + (s.icon || '•') + '</div>' +
      '<div class="stage-head"><h3>Stage ' + s.n + ': ' + esc(s.name) + '</h3><span class="of">' + done + '/' + all + ' modules</span></div>' +
      (s.blurb ? '<p class="blurb">' + s.blurb + '</p>' : '') + '<div class="mods">' +
      s.modules.map(function (m) { var r = S.mods[m.id] || {}, onRoute = (S.route || []).indexOf(m.id) >= 0 && !(r.stars >= 2);
        return '<a class="mod' + (onRoute ? ' route' : '') + '" href="' + modUrl(m) + '"><b>' + m.name + '</b>' + stars(r.stars || 0) +
          '<span class="meta">' + lvl(m.cefr) + (m.extra ? '<span class="tag extra">Extra</span>' : '') + '<span>' + m.items.length + ' questions</span>' + (m.page ? '<span>Book ' + esc(m.page) + '</span>' : '') + (onRoute ? '<span class="tag b1">On your route</span>' : '') + '</span></a>'; }).join('') +
      (ck ? '<a class="mod boss' + (unlocked ? '' : ' locked') + '" href="#/ck/' + ck.id + '"><b>🏔️ Checkpoint: ' + esc(s.name) + '</b>' + stars((ckr || {}).stars || 0) +
        '<span class="meta">' + (unlocked ? ck.items.length + ' new questions mixing the whole stage. No hints.' : '🔒 Try every module in this stage to unlock.') + '</span></a>' : '') +
      '</div></section>'; }).join('') + '</div>';
}

/* ---------------- storybook ---------------- */
var BOOK = { u6:{c:0,p:0}, u7:{c:0,p:0} };
function storyView(u, body) {
  var U = UNITS[u], st = U.story; if (!st) { body.innerHTML = '<div class="empty">No story loaded.</div>'; return; }
  var wl = U.words.words || [], got = wl.filter(function (w) { return S.words[w.id]; }).length;
  function paint() {
    var b = BOOK[u], ch = st.chapters[b.c], pg = ch.pages[b.p];
    S.pages[u] = S.pages[u] || {}; if (!S.pages[u][b.c + '.' + b.p]) { S.pages[u][b.c + '.' + b.p] = 1; addXP(3); checkBadges(); }
    var ids = []; (pg.text.match(/\{\{([a-z]+)\|/g) || []).forEach(function (m) { var id = m.slice(2, -1); if (ids.indexOf(id) < 0 && imgOf(id)) ids.push(id); });
    var panel = pg.img ? '<img src="' + esc(pg.img) + '" alt="' + esc(pg.alt || '') + '">' :
      (ids.length ? '<div class="mosaic n' + Math.min(4, ids.length) + '" role="img" aria-label="Photos of words on this page">' : '<div class="em" style="font-size:90px;display:grid;place-items:center;height:100%">' + (pg.art || '📖')) + ids.slice(0, 4).map(function (id) { return '<figure>' + wordImg(id) + '<figcaption>' + esc(WMAP[id] ? WMAP[id].word : id) + '</figcaption></figure>'; }).join('') + '</div>';
    var text = pg.text.split(/\n\s*\n/).map(function (para) {
      return '<p>' + para.replace(/\{\{([a-z]+)\|([^}]+)\}\}/g, function (_, id, surf) { return '<button class="kw' + (S.words[id] ? ' got' : '') + '" data-w="' + id + '">' + surf + '</button>'; }) + '</p>'; }).join('');
    var pagesTotal = 0, before = 0; st.chapters.forEach(function (c, ci) { if (ci < b.c) before += c.pages.length; pagesTotal += c.pages.length; });
    body.innerHTML = '<div class="book"><div><h2 style="margin-bottom:4px">' + esc(st.title) + '</h2><p class="muted" style="max-width:70ch">' + esc(st.blurb || '') + '</p>' +
      '<div class="row small muted" style="margin-bottom:8px"><span>📖 ' + got + '/' + wl.length + ' word cards collected</span><div class="bar" style="flex:1;max-width:240px"><i style="width:' + Math.round(100 * got / Math.max(1, wl.length)) + '%"></i></div></div>' +
      '<div class="chapters" role="group" aria-label="Chapters">' + st.chapters.map(function (c, ci) { return '<button data-act="chap" data-u="' + u + '" data-c="' + ci + '" aria-pressed="' + (ci === b.c) + '"><b>Chapter ' + c.n + '</b><small>' + esc(c.title) + '</small></button>'; }).join('') + '</div></div>' +
      '<article class="card page"><div class="panel">' + panel + '<span class="pno">Page ' + (before + b.p + 1) + ' of ' + pagesTotal + '</span></div>' +
      '<div class="story"><div class="small muted" style="margin-bottom:6px">Chapter ' + ch.n + ': ' + esc(ch.title) + (ch.subtitle ? ' · ' + esc(ch.subtitle) : '') + '</div>' + text + '</div>' +
      '<div class="pager"><button class="btn ghost sm" data-act="page" data-u="' + u + '" data-d="-1"' + (b.c === 0 && b.p === 0 ? ' disabled' : '') + '>← Back</button>' +
      '<button class="btn ghost sm" data-act="readpage" aria-label="Read this page aloud">🔊 Listen</button>' +
      '<div class="dots" aria-hidden="true">' + ch.pages.map(function (_, pi) { return '<i' + (pi === b.p ? ' class="on"' : '') + '></i>'; }).join('') + '</div>' +
      (b.c === st.chapters.length - 1 && b.p === ch.pages.length - 1 ? '<a class="btn accent sm" href="#/' + u + '/vocab/train">Go to the word trail</a>' : '<button class="btn accent sm" data-act="page" data-u="' + u + '" data-d="1">Next page →</button>') + '</div></article>' +
      (st.cast ? '<div class="small muted">' + st.cast.map(function (c) { return '<b>' + esc(c.name) + '</b>: ' + esc(c.desc); }).join(' &nbsp; ') + '</div>' : '') + '</div>';
  }
  storyView.paint = storyView.paint || {}; storyView.paint[u] = paint; paint();
}
function turnPage(u, d) { var st = UNITS[u].story, b = BOOK[u];
  if (d > 0) { if (b.p < st.chapters[b.c].pages.length - 1) b.p++; else if (b.c < st.chapters.length - 1) { b.c++; b.p = 0; } }
  else { if (b.p > 0) b.p--; else if (b.c > 0) { b.c--; b.p = st.chapters[b.c].pages.length - 1; } }
  storyView.paint[u](); var a = document.querySelector('.page'); if (a) a.scrollIntoView({ block:'start' }); }

/* ---------------- word bank ---------------- */
function wordBank(u, body) {
  var U = UNITS[u], cats = U.words.categories || [];
  body.innerHTML = '<div class="filters"><input type="search" id="wq" placeholder="Search a word, meaning or collocation" aria-label="Search words">' +
    '<select id="wc" aria-label="Category"><option value="">All groups</option>' + cats.map(function (c) { return '<option value="' + c.id + '">' + c.icon + ' ' + esc(c.name) + '</option>'; }).join('') + '</select>' +
    '<select id="wl" aria-label="Level"><option value="">All levels</option><option>A2</option><option>B1</option><option>Book word</option></select>' +
    '<select id="ws" aria-label="Collected"><option value="">All cards</option><option value="new">Not opened yet</option><option value="got">Collected</option></select></div><div class="wgrid" id="wgrid"></div>';
  function paint() {
    var q = document.getElementById('wq').value.trim().toLowerCase(), c = document.getElementById('wc').value, l = document.getElementById('wl').value, s = document.getElementById('ws').value;
    var list = (U.words.words || []).filter(function (w) {
      if (c && w.cat !== c) return false; if (l && w.level !== l) return false; if (s === 'new' && S.words[w.id]) return false; if (s === 'got' && !S.words[w.id]) return false;
      if (q && (w.word + ' ' + w.def + ' ' + (w.colls || []).join(' ')).toLowerCase().indexOf(q) < 0) return false; return true; });
    document.getElementById('wgrid').innerHTML = list.length ? list.map(function (w) { return '<button class="wcard" data-w="' + w.id + '"><div class="th">' + wordImg(w.id) + (S.words[w.id] ? '<span class="got">✓</span>' : '') + '</div><div class="lb"><b>' + esc(w.word) + '</b>' + lvl(w.level) + '</div></button>'; }).join('') : '<div class="empty">No words match. Clear the search or choose another group.</div>';
  }
  body.addEventListener('input', paint); paint();
}

/* ---------------- patterns ---------------- */
function patternsView(u) {
  var ps = UNITS[u].pats;
  var intro = u === 'u6' ? 'why some foods can’t be counted, why jam lives in a jar, how <em>pancake</em> and <em>milkshake</em> are built' : 'how <em>sun</em> becomes <em>sunny</em>, why a jellyfish isn’t a fish, and why you are <em>on</em> a beach but <em>in</em> a forest';
  return '<p class="muted" style="max-width:70ch">The words in this unit are not a random list. These cards show the systems underneath: ' + intro + '. Learn a pattern and you learn ten words at once.</p>' + treeCallout(u) + '<div class="grid2 wide">' +
    ps.map(function (p) { var seen = S.pats[u + ':' + p.id];
      return '<article class="card pcard" id="pat-' + p.id + '"><div class="row" style="justify-content:space-between"><span class="pi" aria-hidden="true">' + p.icon + '</span><span class="tag">' + esc(p.kind) + (seen ? ' · ✓ read' : '') + '</span></div>' +
        '<h3>' + p.title + '</h3><p class="insight">' + p.insight + '</p>' +
        '<div class="wordchips">' + (p.items || []).map(function (id) { return wchip(id); }).join('') + '</div>' +
        (p.examples && p.examples.length ? '<ol>' + p.examples.map(function (e) { return '<li>' + e + '</li>'; }).join('') + '</ol>' : '') +
        (p.drill ? '<div class="boxx tip"><h4>Try it now</h4>' + p.drill + '</div>' : '') +
        (seen ? '' : '<button class="btn ghost sm" data-act="patread" data-u="' + u + '" data-p="' + p.id + '">✓ I’ve got this pattern (+5 XP)</button>') + '</article>'; }).join('') + '</div>';
}
function markPattern(u, id) { var k = u + ':' + id; if (!S.pats[k]) { S.pats[k] = 1; addXP(5); checkBadges(); } }
function wchip(id) { var w = WMAP[id]; if (!w) return ''; return '<button class="wchip' + (S.words[id] ? ' got' : '') + '" data-w="' + id + '">' + wordImg(id) + esc(w.word) + '</button>'; }

/* ---------------- sorting tree ---------------- */
var TR = window.TREES || {}, TSORT = null;
function treeLeafOf(u, id) { var T = TR[u]; if (!T) return null; for (var k in T.leaves) if (T.leaves[k].words.indexOf(id) >= 0) return k; return null; }
function treePath(u, id) { // correct route: [{node, opt index}] ending at the word's leaf
  var T = TR[u], leaf = treeLeafOf(u, id), out = null;
  (function go(nid, acc) { if (out) return; if (nid === leaf) { out = acc; return; } var n = T.nodes[nid]; if (!n) return;
    n.opts.forEach(function (o, i) { go(o.to, acc.concat([{ node: nid, i: i }])); }); })(T.root, []);
  return out || [];
}
function treeWords(u) { return (UNITS[u].words.words || []).filter(function (w) { return treeLeafOf(u, w.id); }); }
function treeDone(u) { return treeWords(u).filter(function (w) { return S.tree[u + ':' + w.id]; }).length; }
function treePickNew(u, not) { var ws = treeWords(u), left = ws.filter(function (w) { return !S.tree[u + ':' + w.id] && w.id !== not; });
  var pool = left.length ? left : ws.filter(function (w) { return w.id !== not; }); return pool[Math.floor(Math.random() * pool.length)].id; }
function treeStart(u, id) { TSORT = { u: u, w: id, path: treePath(u, id), step: 0, miss: 0, picked: null, done: false }; }
function treeView(u, body, q) {
  var T = TR[u]; if (!T) { body.innerHTML = '<div class="empty">No sorting tree for this unit yet.</div>'; return; }
  if (q.w && WMAP[q.w] && WMAP[q.w].unit === u) treeStart(u, q.w);
  else if (!TSORT || TSORT.u !== u) treeStart(u, treePickNew(u));
  treeView.body = body; treePaint();
}
function treePaint() {
  var R = TSORT, u = R.u, T = TR[u], w = WMAP[R.w], body = treeView.body; if (!body || !w) return;
  var ws = treeWords(u), done = treeDone(u), cur = R.path[R.step], leafId = treeLeafOf(u, R.w), leaf = T.leaves[leafId];
  var h = '<p class="muted" style="max-width:72ch">' + T.intro + '</p>' +
    '<div class="row small muted" style="margin-bottom:12px"><span>🌳 ' + done + '/' + ws.length + ' words sorted right first time</span><div class="bar" style="flex:1;max-width:240px"><i style="width:' + Math.round(100 * done / Math.max(1, ws.length)) + '%"></i></div></div>' +
    '<div class="tsort">';
  // left: the sorter
  h += '<section class="card tpanel"><div class="tword"><div class="tpic">' + wordImg(w.id) + '</div><div><div class="small muted">Sort this word</div><h2>' + esc(w.word) + '</h2>' +
    '<div class="row small">' + lvl(w.level) + (S.tree[u + ':' + w.id] ? '<span class="tag a2">✓ sorted</span>' : '') + '<button class="say" data-act="say" data-t="' + esc(w.word) + '">🔊</button></div></div></div>' +
    '<div class="row" style="margin:10px 0 4px"><button class="btn ghost sm" data-act="tnew">🎲 Another word</button>' +
    '<select class="tsel" aria-label="Choose a word to sort"><option value="">Choose a word…</option>' + ws.map(function (x) { return '<option value="' + x.id + '"' + (x.id === R.w ? ' selected' : '') + '>' + (S.tree[u + ':' + x.id] ? '✓ ' : '') + esc(x.word) + '</option>'; }).join('') + '</select></div>';
  // breadcrumb of answered steps
  if (R.step) h += '<ol class="tcrumbs">' + R.path.slice(0, R.step).map(function (p) { var n = T.nodes[p.node]; return '<li><span class="muted">' + esc(n.q) + '</span> <b>' + esc(n.opts[p.i].label) + '</b></li>'; }).join('') + '</ol>';
  if (!R.done) {
    var n = T.nodes[cur.node];
    h += '<div class="tq"><div class="small muted">Question ' + (R.step + 1) + '</div><h3>' + esc(n.q) + '</h3>' + (n.help ? '<p class="small muted">' + esc(n.help) + '</p>' : '') +
      '<div class="opts" role="group" aria-label="Answers">' + n.opts.map(function (o, i) {
        var cls = R.picked == null ? '' : (i === cur.i ? ' right' : (i === R.picked ? ' wrong' : ''));
        return '<button class="opt' + cls + '" data-act="tans" data-i="' + i + '"' + (R.picked != null ? ' disabled' : '') + '><span class="k">' + 'ABCDEFG'[i] + '</span><span>' + esc(o.label) + '</span></button>'; }).join('') + '</div>';
    if (R.picked != null) h += '<div class="fb bad" role="status"><b>Not quite.</b> ' + (T.notes[R.w] || leaf.sum) + '</div><div class="qactions"><span></span><button class="btn accent" data-act="tgo">Follow the right branch →</button></div>';
    h += '</div>';
  } else {
    var first = R.miss === 0;
    h += '<div class="tres tone-' + leaf.tone + '"><div class="fb ' + (first ? 'good' : 'hint') + '" role="status"><b>' + (first ? 'Sorted right first time!' : 'Sorted — with ' + R.miss + ' wrong turn' + (R.miss > 1 ? 's' : '') + '.') + '</b>' + (R.xp ? ' +' + R.xp + ' XP' : '') + '</div>' +
      '<div class="tleafhead"><span class="ti" aria-hidden="true">' + leaf.icon + '</span><div><div class="small muted">' + esc(w.word) + ' goes here</div><h3>' + esc(leaf.title) + '</h3></div></div>' +
      '<p>' + leaf.rule + '</p>' + treeGrid(leaf) +
      (w.grammar ? '<div class="boxx tip"><h4>' + esc(w.word) + '</h4>' + w.grammar + (w.ex && w.ex[0] ? '<div style="margin-top:6px"><em>' + w.ex[0] + '</em></div>' : '') + '</div>' : '') +
      '<div class="modlinks">' + leaf.pats.map(function (pid) { var p = PATMAP[pid + '@' + u]; return p ? '<a class="linkchip" href="#/' + u + '/vocab/patterns?p=' + pid + '">' + p.icon + ' ' + stripTags(p.title) + '</a>' : ''; }).join('') + '</div>' +
      '<div class="row" style="margin-top:12px"><button class="btn mango" data-act="tnext">Next word →</button><button class="btn ghost" data-w="' + w.id + '">📇 Word card</button><button class="btn ghost" data-act="tagain">Sort it again</button></div></div>';
  }
  h += '</section>';
  // right: the whole tree, with the route lit up
  var on = {}, stepNode = R.done ? null : cur.node;
  R.path.slice(0, R.step).forEach(function (p) { on[p.node + '#' + p.i] = 1; on[p.node] = 1; });
  if (stepNode) on[stepNode] = 1;
  h += '<section class="ttree"><div class="row" style="justify-content:space-between;margin-bottom:6px"><h3 style="margin:0">' + esc(T.title) + '</h3><span class="small muted">Tap a word to open its card</span></div>' +
    '<div class="tlegend small"><span class="lg c">countable</span><span class="lg u">uncountable</span><span class="lg b">both</span>' + (u === 'u7' ? '<span class="lg p">in / on</span><span class="lg a">adjective</span>' : '<span class="lg k">container</span>') + '</div>' +
    '<ul class="tree' + (R.step || R.done ? ' lit' : '') + '">' + treeNodeHtml(T, T.root, on, stepNode, R.done ? leafId : null, R.w) + '</ul></section></div>';
  body.innerHTML = h;
  if (R.step && window.innerWidth >= 1000) { var tgt = document.querySelector('.tnode.cur > .tbox, .tleaf.hit > .tbox'); if (tgt) { var bx = tgt.getBoundingClientRect();
    if (bx.top < 130 || bx.bottom > innerHeight) tgt.scrollIntoView({ block:'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); } }
}
function treeGrid(leaf) { return leaf.grid && leaf.grid.length ? '<table class="parts tgrid"><tbody>' + leaf.grid.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td><b>' + esc(r[1]) + '</b></td></tr>'; }).join('') + '</tbody></table>' : ''; }
function treeNodeHtml(T, id, on, cur, hit, wid) {
  var n = T.nodes[id];
  if (!n) { var L = T.leaves[id];
    return '<li class="tleaf tone-' + L.tone + (hit === id ? ' hit' : '') + '"><div class="tbox"><b>' + L.icon + ' ' + esc(L.title) + '</b><span class="small muted">' + esc(L.sum) + '</span>' +
      '<div class="wordchips">' + L.words.map(function (x) { return x === wid && hit === id ? wchip(x).replace('class="wchip', 'class="wchip me') : wchip(x); }).join('') + '</div></div></li>'; }
  return '<li class="tnode' + (on[id] ? ' on' : '') + (cur === id ? ' cur' : '') + '"><div class="tbox q">❓ ' + esc(n.q) + '</div><ul>' +
    n.opts.map(function (o, i) { var lit = on[id + '#' + i];
      return '<li class="tbranch' + (lit ? ' on' : '') + '"><span class="tlabel">' + esc(o.label) + '</span><ul>' + treeNodeHtml(T, o.to, on, cur, hit, wid) + '</ul></li>'; }).join('') + '</ul></li>';
}
function treeAnswer(i) {
  var R = TSORT; if (!R || R.done || R.picked != null) return; var cur = R.path[R.step];
  if (i === cur.i) { R.step++; treeMaybeFinish(); treePaint(); }
  else { R.miss++; R.picked = i; treePaint(); }
}
function treeFollow() { var R = TSORT; R.picked = null; R.step++; treeMaybeFinish(); treePaint(); }
function treeMaybeFinish() {
  var R = TSORT; if (R.step < R.path.length) return; R.done = true; R.xp = 0;
  var k = R.u + ':' + R.w; touchStreak();
  if (R.miss === 0 && !S.tree[k]) { S.tree[k] = today(); R.xp = 3; addXP(3); checkBadges(); } else save();
}

/* ---------------- word card sheet ---------------- */
var SHEET = [];
function openWord(id, push) {
  var w = WMAP[id]; if (!w) return;
  if (!push) SHEET = []; SHEET.push(id);
  if (!S.words[id]) { S.words[id] = today(); addXP(2); checkBadges(); }
  document.querySelectorAll('[data-w="' + id + '"]').forEach(function (el) { el.classList.add('got'); });
  var im = imgOf(id), pats = (w.patterns || []).map(function (pid) { return PATMAP[pid + '@' + w.unit]; }).filter(Boolean);
  function sec(t, h) { return h ? '<div><h4>' + t + '</h4>' + h + '</div>' : ''; }
  var html = '<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-label="Word card: ' + esc(w.word) + '">' +
    '<div class="photo">' + (im && im.src ? '<img src="' + im.src + '" alt="' + esc(w.word) + '">' + (im.credit ? '<a class="credit" href="' + esc(im.link || '#') + '" target="_blank" rel="noopener">📷 ' + esc(im.credit) + '</a>' : '') : '<div class="em">' + (w.emoji || '•') + '</div>') +
    (SHEET.length > 1 ? '<button class="back" data-act="wback">← ' + esc(WMAP[SHEET[SHEET.length - 2]].word) + '</button>' : '') + '<button class="x" data-act="close" aria-label="Close">×</button></div>' +
    '<div class="in"><div class="wtitle"><h2>' + (w.emoji ? w.emoji + ' ' : '') + esc(w.word) + '</h2><span class="ipa">' + esc(w.ipa || '') + '</span><button class="say" data-act="say" data-t="' + esc(w.word) + '">🔊 Say it</button></div>' +
    '<div class="row small" style="margin:6px 0 10px">' + '<span class="tag">' + esc(w.pos) + '</span>' + (w.count && w.count !== '—' ? '<span class="tag">' + ({C:'Countable',U:'Uncountable','C/U':'Countable + uncountable'}[w.count] || esc(w.count)) + '</span>' : '') + lvl(w.level) +
    '<span class="tag">Unit ' + UNITS[w.unit].n + '</span>' + (w.plural && w.plural !== '—' ? '<span class="small muted">plural: <b>' + esc(w.plural) + '</b></span>' : '') + '</div>' +
    '<p style="font-size:19px">' + w.def + '</p><div class="facts">' +
    sec('Examples', '<ul>' + (w.ex || []).map(function (e) { return '<li>' + e + ' <button class="say" style="padding:0 6px" data-act="say" data-t="' + esc(stripTags(e)) + '" aria-label="Listen">🔊</button></li>'; }).join('') + '</ul>') +
    sec('Goes with', (w.colls || []).length ? '<div class="colls">' + w.colls.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>' : '') +
    sec('Grammar', w.grammar) + sec('Word family', w.forms) + sec('Say it right', w.say) + sec('British / American', w.uk_us) +
    sec('Watch out', w.trap ? '<span>' + w.trap + '</span>' : '') + sec('Did you know?', w.fact) +
    sec('Related words', (w.related || []).filter(function (r) { return WMAP[r]; }).map(function (r) { return '<button class="linkchip" data-act="wrel" data-w2="' + r + '">' + (WMAP[r].emoji || '') + ' ' + esc(WMAP[r].word) + '</button>'; }).join(' ')) +
    sec('Sorting tree', TR[w.unit] && treeLeafOf(w.unit, id) ? '<a class="linkchip" href="#/' + w.unit + '/vocab/tree?w=' + id + '">🌳 Sort ' + esc(w.word) + ' in the tree</a>' : '') +
    sec('Patterns', pats.map(function (p) { return '<a class="linkchip" href="#/' + w.unit + '/vocab/patterns?p=' + p.id + '">' + p.icon + ' ' + stripTags(p.title) + '</a>'; }).join(' ')) +
    '</div></div></div></div>';
  closeSheet(true); var d = document.createElement('div'); d.id = 'sheet'; d.innerHTML = html; document.body.appendChild(d);
  document.body.style.overflow = 'hidden'; var x = d.querySelector('.x'); if (x) x.focus();
}
function closeSheet(silent) { var d = document.getElementById('sheet'); if (d) d.remove(); document.body.style.overflow = ''; if (!silent) SHEET = []; }
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });

/* ---------------- module page ---------------- */
function ruleHtml(m) {
  var r = m.rule || {}, U = UNITS[m.unit];
  var h = '<article class="card rule"><div class="key">' + (r.key || '') + '</div>';
  if (r.words && r.words.length) h += '<div class="wordchips">' + r.words.map(wchip).join('') + '</div>';
  h += '<div class="body">' + (r.body || []).map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
  if (r.table && r.table.length) h += '<div class="tablewrap"><table class="t"><thead><tr>' + r.table[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
    r.table.slice(1).map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  if (r.examples && r.examples.length) h += '<ul class="ex">' + r.examples.map(function (e) { return '<li class="' + (e.ok ? 'ok' : 'no') + '"><span class="s">' + e.s + '</span>' + (e.fix ? '<span class="fix">✓ ' + e.fix + '</span>' : '') + '</li>'; }).join('') + '</ul>';
  if (r.extra) h += '<div class="boxx extra"><h4>Extra</h4>' + r.extra + '</div>';
  if (r.tip) h += '<div class="boxx tip"><h4>Remember</h4>' + r.tip + '</div>';
  return h + '</article>';
}
function viewModule(id) {
  var m = MODS[id]; if (!m) return viewHome();
  var U = UNITS[m.unit], s = m.stage, r = S.mods[id] || {}, idx = s.modules.indexOf(m), nxt = s.modules[idx + 1];
  document.body.className = m.unit;
  var back = m.kind === 'g' ? '#/' + m.unit + '/grammar' : '#/' + m.unit + '/vocab/train';
  app.innerHTML = '<div class="row small" style="margin-bottom:10px"><a href="' + back + '">← Unit ' + U.n + ' ' + (m.kind === 'g' ? 'grammar' : 'word') + ' trail</a></div>' +
    '<div class="unit-hero"><div><div class="num">Unit ' + U.n + ' · ' + (m.kind === 'g' ? 'Grammar' : 'Vocabulary') + ' · Stage ' + s.n + ': ' + esc(s.name) + '</div><h1>' + m.name + '</h1>' +
    '<div class="row small">' + lvl(m.cefr) + (m.extra ? '<span class="tag extra">Extra: beyond the book’s rule box</span>' : '') + (m.page ? '<span class="muted">Student’s Book ' + esc(m.page) + '</span>' : '') + '<span>' + stars(r.stars || 0) + '</span>' + (r.n ? '<span class="muted">Best ' + Math.round(100 * (r.best || 0)) + '%</span>' : '') + '</div></div></div>' +
    ruleHtml(m) + mediaShelf(null, m.id) + (['g6m1','g6m2','g6m3','g6m5','g6m6','g6m8','g6m9','g7m10'].indexOf(m.id) >= 0 ? treeCallout(m.unit) : '') +
    '<div class="next" style="margin-top:18px"><div><h3>Practice: ' + m.items.length + ' questions</h3><div class="muted">Wrong first time? You get a hint and a second try. 3★ = everything right first time.</div></div><button class="btn mango" data-act="start" data-id="' + id + '">' + (r.n ? 'Practise again' : 'Start practice') + '</button></div>' +
    (nxt ? '<div class="small">Next module: <a href="' + modUrl(nxt) + '">' + nxt.name + '</a></div>' : (s.checkpoint ? '<div class="small">End of the stage: <a href="#/ck/' + s.checkpoint.id + '">🏔️ Checkpoint</a></div>' : ''));
}
function viewCheckpoint(id) {
  var c = CKS[id]; if (!c) return viewHome();
  var s = c.stage, U = UNITS[c.unit], r = S.cks[id] || {}, done = s.modules.filter(function (m) { return (S.mods[m.id] || {}).n; }).length;
  document.body.className = c.unit;
  var back = c.kind === 'g' ? '#/' + c.unit + '/grammar' : '#/' + c.unit + '/vocab/train';
  var locked = done < s.modules.length;
  app.innerHTML = '<div class="row small" style="margin-bottom:10px"><a href="' + back + '">← Back to the trail</a></div><div class="card result"><div style="font-size:54px" aria-hidden="true">🏔️</div><h1>Checkpoint: ' + esc(s.name) + '</h1>' +
    '<p class="muted">Unit ' + U.n + ' · ' + c.items.length + ' new questions mixing the whole stage. No hints, one try each.</p><div>' + stars(r.stars || 0) + '</div>' +
    (locked ? '<p>🔒 Try every module in this stage first (' + done + '/' + s.modules.length + ' done).</p><div class="modlinks" style="justify-content:center">' + s.modules.map(function (m) { return '<a class="linkchip" href="' + modUrl(m) + '">' + ((S.mods[m.id] || {}).n ? '✓ ' : '') + m.name + '</a>'; }).join('') + '</div>'
      : '<button class="btn mango" data-act="startck" data-id="' + id + '">' + (r.n ? 'Try again' : 'Start the checkpoint') + '</button>') + '</div>';
}

/* ---------------- quiz runner ---------------- */
var TYPE_LABEL = { gap:'Fill the gap', dialogue:'Complete the conversation', error:'Find the mistake', choose:'Choose the best answer', situation:'What would you say?', meaning:'What does it mean?', odd:'Odd one out', picture:'Picture question', classify:'Which group?', cloze:'Passage cloze', read:'Reading' };
function startRun(kind, id, items, opts) {
  opts = opts || {};
  RUN = { kind: kind, id: id, items: items, i: 0, pts: 0, tries: 0, hint: false, hints: 0, res: [], combo: 0, mode: opts.mode || 'practice', title: opts.title || '', back: opts.back || '#/home',
    order: items.map(function (it) { var o = it.options.map(function (_, j) { return j; }); return it.type === 'error' ? o : shuffle(o); }) };
  touchStreak(); renderQ();
}
function fmtStem(it, n) {
  var s = it.stem || '';
  if (it.type === 'error') { var k = 0; return s.replace(/\[\[(.+?)\]\]/g, function (_, seg) { k++; return '<span class="seg-u">' + seg + '<sup>' + k + '</sup></span>'; }); }
  return s.replace(/_{3,}/g, '<span class="gap" aria-label="blank">' + (n ? '&nbsp;' : '&nbsp;') + '</span>');
}
function qBody(it) {
  var h = '';
  if (it.context) h += '<div class="ctx">' + it.context + '</div>';
  if (it.img) { var im = imgOf(it.img); h += '<div class="qpic">' + (im && im.src ? '<img src="' + im.src + '" alt="A photo for this question">' : '<div class="em" style="font-size:80px;display:grid;place-items:center;height:100%">' + ((WMAP[it.img] || {}).emoji || '🖼️') + '</div>') + '</div>'; }
  if (it.lines && it.lines.length) h += '<div class="dlg">' + it.lines.map(function (l) { return '<div><b>' + esc(l.who) + ':</b><span>' + String(l.text).replace(/_{3,}/g, '<span class="gap">&nbsp;</span>') + '</span></div>'; }).join('') + '</div>';
  if (it.stem) h += '<div class="stem">' + fmtStem(it) + '</div>';
  return h;
}
function renderQ() {
  var R = RUN, it = R.items[R.i], ord = R.order[R.i], n = R.items.length;
  var letters = it.type === 'error' ? ['1','2','3','4'] : ['A','B','C','D'];
  app.innerHTML = '<div class="qwrap"><div class="qtop"><a class="small" href="' + R.back + '">✕ Quit</a><div class="bar"><i style="width:' + Math.round(100 * R.i / n) + '%"></i></div><span class="small"><b>' + (R.i + 1) + '</b>/' + n + '</span></div>' +
    '<div class="small muted" style="margin-bottom:6px">' + R.title + '</div>' +
    '<article class="card qcard"><div class="qtype"><span>' + (TYPE_LABEL[it.type] || 'Question') + '</span><span>' + (R.combo >= 3 ? '<span class="combo">🔥 ' + R.combo + ' in a row</span> ' : '') + lvl(it.cefr) + '</span></div>' + qBody(it) +
    (it.type === 'error' ? '<p class="small muted">Which underlined part is wrong?</p>' : '') +
    '<div class="opts" role="group" aria-label="Answers">' + ord.map(function (j, k) { return '<button class="opt" data-act="ans" data-j="' + j + '"><span class="k">' + letters[k] + '</span><span>' + it.options[j] + '</span></button>'; }).join('') + '</div>' +
    '<div id="fb"></div><div class="qactions">' + (R.mode === 'practice' && it.hint ? '<button class="btn ghost sm" data-act="hint">💡 Hint</button>' : '<span></span>') + '<span id="nextslot"></span></div></article></div>';
  R.tries = 0; R.hint = false; R.locked = false;
}
function answer(j) {
  var R = RUN; if (!R || R.locked) return; var it = R.items[R.i], ok = j === it.answer, fb = document.getElementById('fb');
  var btn = document.querySelector('.opt[data-j="' + j + '"]');
  function finishItem(points, first) {
    R.locked = true; R.pts += points; R.res.push({ id: it.id, ok: first, pts: points });
    document.querySelectorAll('.opt').forEach(function (b) { b.disabled = true; if (+b.getAttribute('data-j') === it.answer) b.classList.add('right'); });
    if (!first) addFault(it.id, R.id); else if (R.kind === 'faults' && S.faults[it.id]) { delete S.faults[it.id]; S.fixed++; save(); }
    var why = (it.why || '') + (it.fix ? '<div style="margin-top:6px">✓ Correct form: <b>' + it.fix + '</b></div>' : '');
    fb.innerHTML = '<div class="fb ' + (first ? 'good' : (points ? 'hint' : 'bad')) + '" role="status"><b>' + (first ? pick(['Spot on!','Nailed it.','Exactly right.','Yes!','Perfect.']) : points ? 'Got it on the second try.' : 'Not this time.') + '</b> ' + why + '</div>';
    document.getElementById('nextslot').innerHTML = '<button class="btn accent" data-act="next">' + (R.i < R.items.length - 1 ? 'Next question' : 'See results') + '</button>';
    var nb = document.querySelector('[data-act="next"]'); if (nb) nb.focus();
    save();
  }
  if (ok) {
    btn.classList.add('right');
    if (R.tries === 0) { R.combo++; S.bestCombo = Math.max(S.bestCombo || 0, R.combo); addXP(R.hint ? 7 : 10 + (R.combo >= 3 ? 2 : 0)); finishItem(1, true); }
    else { R.combo = 0; addXP(4); finishItem(.5, false); }
  } else {
    btn.classList.add('wrong'); btn.disabled = true; R.combo = 0;
    if (R.mode === 'practice' && R.tries === 0) { R.tries = 1;
      fb.innerHTML = '<div class="fb hint" role="status"><b>Not quite.</b> ' + (it.hint ? 'Hint: ' + it.hint + ' ' : '') + 'Try again.</div>';
      if (it.hint) { R.hint = true; var hb = document.querySelector('[data-act="hint"]'); if (hb) hb.remove(); } }
    else finishItem(0, false);
  }
}
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function addFault(itemId, src) { S.faults[itemId] = { t: Date.now(), src: src }; }
function showHint() { var R = RUN, it = R.items[R.i]; R.hint = true; R.hints++; document.getElementById('fb').innerHTML = '<div class="fb hint"><b>Hint:</b> ' + esc(stripTags(it.hint)) + '</div>'; var hb = document.querySelector('[data-act="hint"]'); if (hb) hb.remove(); }
function nextQ() { var R = RUN; if (R.i < R.items.length - 1) { R.i++; renderQ(); window.scrollTo(0, 0); } else finishRun(); }
function finishRun() {
  var R = RUN, n = R.items.length, sc = R.pts / n, st = sc >= 1 ? 3 : sc >= .75 ? 2 : sc >= .5 ? 1 : 0, html = '', extra = '';
  if (R.kind === 'mod' || R.kind === 'ck') {
    var store = R.kind === 'mod' ? S.mods : S.cks, rec = store[R.id] || { n: 0, best: 0, stars: 0 }, wasStars = rec.stars || 0;
    rec.n++; rec.best = Math.max(rec.best, sc); rec.stars = Math.max(rec.stars || 0, st); if (sc >= 1 && R.hints === 0 && R.kind === 'mod') rec.nohint = 1; store[R.id] = rec;
    var bonus = st > wasStars ? (st - wasStars) * 15 : 0; if (bonus) { addXP(bonus); extra = '<p><b>+' + bonus + ' XP</b> for new stars.</p>'; }
    if (st === 3) S.perfect++;
  }
  if (R.kind === 'triage') return finishTriage();
  save(); checkBadges(); if (st === 3) confetti();
  var wrong = R.res.filter(function (r) { return !r.ok; });
  var obj = MODS[R.id] || CKS[R.id], nextLink = '';
  if (R.kind === 'mod') { var m = MODS[R.id], s = m.stage, idx = s.modules.indexOf(m), nx = s.modules[idx + 1];
    nextLink = nx ? '<a class="btn accent" href="' + modUrl(nx) + '">Next module</a>' : (s.checkpoint ? '<a class="btn accent" href="#/ck/' + s.checkpoint.id + '">Go to the checkpoint</a>' : ''); }
  html = '<div class="qwrap"><div class="card result"><div class="bigstars">' + [1,2,3].map(function (i) { return i <= st ? '★' : '<span class="off">★</span>'; }).join('') + '</div>' +
    '<div class="score">' + Math.round(sc * 100) + '%</div><p class="muted">' + (R.kind === 'faults' ? 'Fault review' : esc(stripTags(R.title))) + '</p>' +
    '<p>' + (st === 3 ? 'Every answer right first time. Brilliant.' : st === 2 ? 'Strong work. One more run for 3★?' : st === 1 ? 'Getting there. Read the rule card again, then retry.' : 'This one needs another look. Reread the rule, then try again.') + '</p>' + extra +
    '<div class="row" style="justify-content:center">' + (R.kind === 'mod' ? '<button class="btn ghost" data-act="start" data-id="' + R.id + '">Practise again</button>' : R.kind === 'ck' ? '<button class="btn ghost" data-act="startck" data-id="' + R.id + '">Try again</button>' : '') +
    nextLink + '<a class="btn ghost" href="' + R.back + '">Back</a></div></div>';
  if (wrong.length) html += '<div class="section"><h2>Look again</h2><span class="small muted">These are on your Fault List now.</span></div>' + reviewList(wrong.map(function (r) { return ITEMS[r.id].it; }));
  app.innerHTML = html + '</div>'; window.scrollTo(0, 0);
}
function reviewList(items, given) {
  return '<div style="display:grid;gap:10px">' + items.map(function (it, i) {
    var g = given ? given[i] : null;
    return '<div class="card"><div class="small muted">' + (TYPE_LABEL[it.type] || '') + '</div>' + qBody(it) +
      (g != null && g !== it.answer ? '<div class="small" style="color:var(--bad)">Your answer: ' + (g == null || g < 0 ? '—' : it.options[g]) + '</div>' : '') +
      '<div><b style="color:var(--ok)">✓ ' + it.options[it.answer] + '</b>' + (it.fix ? ' → ' + it.fix : '') + '</div><div class="small" style="margin-top:4px">' + (it.why || '') + '</div></div>'; }).join('') + '</div>';
}

/* ---------------- faults ---------------- */
function startFaults() {
  var ids = Object.keys(S.faults).filter(function (id) { return ITEMS[id] && ITEMS[id].it.type !== 'cloze' && ITEMS[id].it.type !== 'read'; })
    .sort(function (a, b) { return S.faults[a].t - S.faults[b].t; }).slice(0, 10);
  if (!ids.length) { app.innerHTML = '<div class="empty"><h2>Your Fault List is empty.</h2><p>Questions you miss in practice land here. Clear one by answering it right first time.</p><a class="btn" href="#/home">Back to Base Camp</a></div>'; return; }
  startRun('faults', 'faults', shuffle(ids.map(function (id) { return ITEMS[id].it; })), { title:'Fault review: answer right first time to clear each one', back:'#/record' });
}

/* ---------------- tests ---------------- */
function viewTests() {
  var tri = TMAP.triage, tr = S.tests.triage || {};
  var h = '<h1>Tests</h1><p class="muted" style="max-width:70ch">Start with the Trailhead Check. It tells you which modules to study. When the trails are done, sit the TU-style mocks: 40 questions in 60 minutes, no hints, results at the end.</p>';
  h += '<div class="grid2">';
  if (tri) { var u6n = tri.items.filter(function (i) { return i.unit === 6; }).length, u7n = tri.items.length - u6n;
    h += '<article class="card testcard"><div style="font-size:34px" aria-hidden="true">🧭</div><h2>' + esc(tri.name) + '</h2><p class="muted">' + esc(tri.blurb || 'One question for every module. Wrong answers build your route.') + '</p>' +
      (count(tr.res) ? '<p>Last result: <b>' + triageScore() + '</b> · ' + (S.route || []).length + ' modules on your route</p>' : '') +
      '<div class="row"><a class="btn" href="#/triage/all">Both units (' + tri.items.length + ')</a><a class="btn ghost u6" href="#/triage/6">Unit 6 only (' + u6n + ')</a><a class="btn ghost" href="#/triage/7">Unit 7 only (' + u7n + ')</a></div>' +
      (count(tr.res) ? '<a class="small" href="#/triage/result">See my last result</a>' : '') + '</article>'; }
  T.filter(function (t) { return t.kind === 'mock'; }).forEach(function (t) { var r = S.tests[t.id] || {}, n = 0; t.sections.forEach(function (s) { n += s.items.length; });
    h += '<article class="card testcard"><div style="font-size:34px" aria-hidden="true">' + (t.id === 'mock1' ? '⛺' : '🚩') + '</div><h2>' + esc(t.name) + '</h2><div class="label">' + esc(t.label || 'TU-style practice (format unofficial)') + '</div>' +
      '<p class="muted">' + esc(t.blurb || '') + '</p><p class="small">' + n + ' questions · ' + t.minutes + ' minutes · 6 parts: error identification, sentence completion, vocabulary, conversation, passage cloze, reading.</p>' +
      (r.hist && r.hist.length ? '<p>Best: <b>' + r.best + '/' + n + '</b> · ' + r.hist.length + ' attempt' + (r.hist.length > 1 ? 's' : '') + '</p>' : '') +
      '<div class="row"><a class="btn mango" href="#/mock/' + t.id + '">' + (r.prog ? 'Continue' : r.hist && r.hist.length ? 'Sit it again' : 'Start') + '</a>' + (r.last ? '<a class="btn ghost" href="#/mock/' + t.id + '/result">Last result</a>' : '') + '</div></article>'; });
  h += '</div><p class="small muted" style="margin-top:16px;max-width:75ch">About the TU-style papers: Triam Udom Suksa publishes no official blueprint or past papers. These mocks copy the format tutors describe (40 four-option questions in 60 minutes) but stay inside Units 6–7. The real English paper covers much more. Target exam for M2 students: TU91, expected about March 2028.</p>';
  app.innerHTML = h;
}
function triageScore() { var r = S.tests.triage.res, k = Object.keys(r); return k.filter(function (x) { return r[x]; }).length + '/' + k.length; }
function viewTriage(which) {
  var tri = TMAP.triage; if (!tri) return viewTests();
  if (which === 'result') return showTriageResult();
  var items = tri.items.filter(function (i) { return which === '6' ? i.unit === 6 : which === '7' ? i.unit === 7 : true; });
  startRun('triage', 'triage', items, { mode:'test', title:'🧭 ' + tri.name + (which === '6' ? ' · Unit 6' : which === '7' ? ' · Unit 7' : ''), back:'#/tests' });
}
function finishTriage() {
  var R = RUN, tr = S.tests.triage = S.tests.triage || { res:{} }; tr.res = tr.res || {};
  R.res.forEach(function (r) { tr.res[r.id] = r.ok ? 1 : 0; }); tr.date = today();
  rebuildRoute(); addXP(20); save(); checkBadges(); location.hash = '#/triage/result';
}
function rebuildRoute() {
  var tri = TMAP.triage, res = S.tests.triage.res, route = [];
  tri.items.forEach(function (it) { if (res[it.id] === 0 && it.module && route.indexOf(it.module) < 0) route.push(it.module); });
  S.route = route;
}
function showTriageResult() {
  var tri = TMAP.triage, res = (S.tests.triage || {}).res || {};
  if (!count(res)) return viewTests();
  function block(u) { var its = tri.items.filter(function (i) { return i.unit === u && res[i.id] != null; }); if (!its.length) return '';
    var ok = its.filter(function (i) { return res[i.id]; }).length;
    return '<article class="card u' + u + '"><h2 style="color:var(--accent)">Unit ' + u + ': ' + ok + '/' + its.length + '</h2><div class="mods">' + its.map(function (i) { var m = MODS[i.module]; if (!m) return '';
      return '<a class="mod' + (res[i.id] ? '' : ' route') + '" href="' + modUrl(m) + '"><b>' + (res[i.id] ? '✅ ' : '🧭 ') + m.name + '</b><span class="small muted">' + (m.kind === 'g' ? 'Grammar' : 'Vocab') + '</span></a>'; }).join('') + '</div></article>'; }
  app.innerHTML = '<div class="row small" style="margin-bottom:10px"><a href="#/tests">← Tests</a></div><h1>Your Trailhead result</h1><p class="muted" style="max-width:70ch">Modules with 🧭 are on your route: open them first. Modules with ✅ you can do later for stars. Your route also shows on Base Camp and on the trail maps.</p>' +
    '<div class="grid2">' + block(6) + block(7) + '</div><div class="row" style="margin-top:16px"><a class="btn mango" href="#/home">Go to Base Camp</a></div>';
}

/* ---------------- mock exam ---------------- */
function mockItems(t) { var out = []; t.sections.forEach(function (s) { s.items.forEach(function (it) { out.push(it); }); }); return out; }
function viewMock(id) {
  var parts = location.hash.split('/'), t = TMAP[id]; if (!t) return viewTests();
  document.body.className = '';
  if (parts[3] === 'result') return showMockResult(t);
  var r = S.tests[id] = S.tests[id] || {};
  if (!r.prog) {
    app.innerHTML = '<div class="row small" style="margin-bottom:10px"><a href="#/tests">← Tests</a></div><div class="card" style="max-width:720px"><div class="tiny" style="color:var(--u6);font-weight:700">' + esc(t.label || 'TU-style practice (format unofficial)') + '</div><h1>' + esc(t.name) + '</h1><p class="muted">' + esc(t.blurb || '') + '</p>' +
      '<ul><li>' + mockItems(t).length + ' questions, 4 options each, <b>' + t.minutes + ' minutes</b>. The timer keeps running if you leave the page.</li><li>No hints and no marking until you submit. You can jump between questions and flag any to check later.</li><li>Parts: ' + t.sections.map(function (s) { return esc(s.title.replace(/ \(Passage [A-Z]\)/, '')); }).filter(function (x, i, a) { return a.indexOf(x) === i; }).join(', ') + '.</li><li>Tip from tutors: do the grammar parts first (they are fastest), read the whole cloze text before choosing, and find proof in the passage for every reading answer.</li></ul>' +
      '<button class="btn mango" data-act="mockstart" data-id="' + id + '">Start the clock</button></div>';
    return;
  }
  EXAM = { t: t, items: mockItems(t), r: r }; if (r.prog.cur == null) r.prog.cur = 0; renderExam();
  clearInterval(viewMock.tick); viewMock.tick = setInterval(tickExam, 1000);
}
function examLeft() { var p = EXAM.r.prog; return Math.max(0, Math.round(EXAM.t.minutes * 60 - (Date.now() - p.start) / 1000)); }
function tickExam() { if (!EXAM || !document.getElementById('timer')) { clearInterval(viewMock.tick); return; }
  var l = examLeft(), el = document.getElementById('timer'); el.textContent = Math.floor(l / 60) + ':' + ('0' + l % 60).slice(-2); el.classList.toggle('low', l < 300);
  if (l <= 0) { clearInterval(viewMock.tick); submitExam(true); } }
function passageHtml(s, curBlank, ans) {
  return String(s.passage || '').replace(/\((\d+)\)\s*_{3,}/g, function (_, n) { var it = ans ? s.items.filter(function (x) { return x.blank === +n; })[0] : null, a = it && ans[it.id] != null ? ' ' + it.options[ans[it.id]] : '';
    return '<span class="blank' + (+n === curBlank ? ' cur' : '') + '">(' + n + ')' + a + '</span>'; });
}
function renderExam() {
  var E = EXAM, p = E.r.prog, it = E.items[p.cur], sec = it._sec, num = p.cur + 1, l = examLeft();
  var nav = '<div class="navgrid">' + E.items.map(function (x, k) { return '<button data-act="goto" data-k="' + k + '" class="' + (p.ans[x.id] != null ? 'ans ' : '') + (k === p.cur ? 'cur ' : '') + ((p.flags || {})[x.id] ? 'flag' : '') + '" aria-label="Question ' + (k + 1) + '">' + (k + 1) + '</button>'; }).join('') + '</div>';
  var answered = E.items.filter(function (x) { return p.ans[x.id] != null; }).length;
  var stem = it.type === 'cloze' ? '<div class="stem">Blank <b>(' + it.blank + ')</b></div>' : qBody(it);
  app.innerHTML = '<div class="exam"><div><div class="small muted">' + esc(E.t.name) + ' · ' + esc(E.t.label || '') + '</div><h2 style="margin:4px 0">' + esc(sec.part) + ': ' + esc(sec.title) + '</h2><p class="small muted">' + esc(sec.instructions || '') + '</p>' +
    (sec.passage ? '<div class="passage" id="passage">' + passageHtml(sec, it.blank, p.ans) + '</div>' : '') +
    '<article class="card qcard"><div class="qtype"><span>Question ' + num + ' of ' + E.items.length + '</span><button class="btn ghost sm" data-act="flag">' + ((p.flags || {})[it.id] ? '🚩 Flagged' : '⚑ Flag') + '</button></div>' + stem +
    (it.type === 'error' ? '<p class="small muted">Which underlined part is NOT correct?</p>' : '') +
    '<div class="opts">' + it.options.map(function (o, j) { return '<button class="opt' + (p.ans[it.id] === j ? ' picked' : '') + '" data-act="mans" data-j="' + j + '"><span class="k">(' + (j + 1) + ')</span><span>' + o + '</span></button>'; }).join('') + '</div>' +
    '<div class="qactions"><button class="btn ghost sm" data-act="mprev"' + (p.cur === 0 ? ' disabled' : '') + '>← Previous</button><button class="btn sm" data-act="mnext">' + (p.cur < E.items.length - 1 ? 'Next →' : 'Review and submit') + '</button></div></article></div>' +
    '<aside class="card" style="position:sticky;top:120px"><div class="small muted">Time left</div><div class="timer" id="timer">' + Math.floor(l / 60) + ':' + ('0' + l % 60).slice(-2) + '</div><div class="small" style="margin:6px 0 10px">' + answered + '/' + E.items.length + ' answered</div>' + nav +
    '<button class="btn mango" style="width:100%;margin-top:14px" data-act="msubmit">Submit paper</button></aside></div>';
  var cb = document.querySelector('.passage .blank.cur'); if (cb) { var ps = document.getElementById('passage'); ps.scrollTop = cb.offsetTop - ps.offsetTop - 60; }
}
function submitExam(timedOut) {
  var E = EXAM; if (!E) return; clearInterval(viewMock.tick);
  var p = E.r.prog, score = 0, parts = {}, wrongMods = {};
  E.items.forEach(function (it) { var ok = p.ans[it.id] === it.answer; if (ok) score++;
    var key = it._sec.part + ': ' + it._sec.title.replace(/ \(Passage [AB]\)/, ''); parts[key] = parts[key] || [0, 0]; parts[key][1]++; if (ok) parts[key][0]++;
    if (!ok && it.module && MODS[it.module]) wrongMods[it.module] = (wrongMods[it.module] || 0) + 1; });
  var secs = Math.round((Date.now() - p.start) / 1000);
  E.r.last = { date: today(), score: score, n: E.items.length, parts: parts, ans: p.ans, secs: Math.min(secs, E.t.minutes * 60), timedOut: !!timedOut, wrongMods: wrongMods };
  E.r.hist = (E.r.hist || []).concat([{ date: today(), score: score }]); E.r.best = Math.max(E.r.best || 0, score); delete E.r.prog;
  addXP(score * 5); save(); checkBadges(); if (score >= 30) confetti();
  location.hash = '#/mock/' + E.t.id + '/result';
}
function showMockResult(t) {
  var r = (S.tests[t.id] || {}).last; if (!r) { location.hash = '#/mock/' + t.id; return; }
  var items = mockItems(t), wrong = items.filter(function (it) { return r.ans[it.id] !== it.answer; });
  var mods = Object.keys(r.wrongMods || {}).sort(function (a, b) { return r.wrongMods[b] - r.wrongMods[a]; });
  var h = '<div class="row small" style="margin-bottom:10px"><a href="#/tests">← Tests</a></div><div class="card result"><div class="tiny" style="color:var(--u6);font-weight:700">' + esc(t.label || '') + '</div><h1>' + esc(t.name) + '</h1><div class="score">' + r.score + '/' + r.n + '</div>' +
    '<p class="muted">' + (r.timedOut ? 'Time ran out. ' : '') + 'Time used: ' + Math.floor(r.secs / 60) + ' min ' + (r.secs % 60) + ' s · Best: ' + (S.tests[t.id].best || r.score) + '/' + r.n + '</p>' +
    '<table class="parts" style="max-width:520px;margin:0 auto 14px"><tbody>' + Object.keys(r.parts).map(function (k) { var v = r.parts[k]; return '<tr><td>' + esc(k) + '</td><td style="text-align:right"><b>' + v[0] + '/' + v[1] + '</b></td></tr>'; }).join('') + '</tbody></table>' +
    '<div class="row" style="justify-content:center"><button class="btn mango" data-act="mockretry" data-id="' + t.id + '">Sit it again</button><a class="btn ghost" href="#/tests">All tests</a></div></div>';
  if (mods.length) h += '<div class="section"><h2>Study these next</h2><span class="small muted">The modules behind your wrong answers, most mistakes first.</span></div><div class="modlinks">' + mods.map(function (id) { var m = MODS[id]; return '<a class="linkchip" href="' + modUrl(m) + '">U' + UNITS[m.unit].n + ' ' + (m.kind === 'g' ? '⚙️ ' : '📚 ') + m.name + ' ×' + r.wrongMods[id] + '</a>'; }).join('') + '</div>';
  if (wrong.length) { h += '<div class="section"><h2>Your ' + wrong.length + ' wrong answers</h2></div><div style="display:grid;gap:10px">' + wrong.map(function (it) {
      var g = r.ans[it.id], sec = it._sec, num = items.indexOf(it) + 1;
      return '<div class="card"><div class="small muted">Question ' + num + ' · ' + esc(sec.part) + ': ' + esc(sec.title) + '</div>' +
        (it.type === 'cloze' || it.type === 'read' ? '<details><summary class="small">Show the passage</summary><div class="passage">' + passageHtml(sec, it.blank) + '</div></details>' + (it.type === 'cloze' ? '<div class="stem">Blank (' + it.blank + ')</div>' : '<div class="stem">' + it.stem + '</div>') : qBody(it)) +
        '<div class="small" style="color:var(--bad)">Your answer: ' + (g == null ? 'no answer' : it.options[g]) + '</div><div><b style="color:var(--ok)">✓ ' + it.options[it.answer] + '</b>' + (it.fix ? ' → ' + it.fix : '') + '</div><div class="small" style="margin-top:4px">' + (it.why || '') + '</div></div>'; }).join('') + '</div>'; }
  app.innerHTML = h;
}

/* ---------------- record ---------------- */
function viewRecord() {
  var nf = count(S.faults), h = '<h1>My Trail</h1><div class="grid2">' +
    '<article class="card"><h3>Fault List</h3><p><b style="font-size:28px">' + nf + '</b> question' + (nf === 1 ? '' : 's') + ' to fix · ' + (S.fixed || 0) + ' fixed so far</p><p class="small muted">Every question you miss in practice comes here. Answer it right first time and it leaves the list.</p>' + (nf ? '<a class="btn mango" href="#/faults">Review 10 faults</a>' : '') + '</article>' +
    '<article class="card"><h3>Numbers</h3><table class="parts"><tbody>' +
    '<tr><td>XP</td><td><b>' + S.xp + '</b> (' + esc(rankOf(S.xp).r.name) + ')</td></tr><tr><td>Streak</td><td><b>' + (S.streak.last === today() ? S.streak.n : 0) + '</b> days · best ' + (S.streak.best || 0) + '</td></tr>' +
    '<tr><td>Word cards</td><td><b>' + count(S.words) + '</b> collected</td></tr><tr><td>Modules tried</td><td><b>' + Object.keys(S.mods).filter(function (k) { return S.mods[k].n; }).length + '</b> / ' + count(MODS) + '</td></tr>' +
    '<tr><td>Best run</td><td><b>' + (S.bestCombo || 0) + '</b> right in a row</td></tr>' +
    T.filter(function (t) { return t.kind === 'mock'; }).map(function (t) { var r = S.tests[t.id] || {}; return '<tr><td>' + esc(t.name) + '</td><td>' + (r.best != null ? '<b>' + r.best + '/40</b> best · ' + (r.hist || []).length + ' tries' : '—') + '</td></tr>'; }).join('') +
    '</tbody></table></article></div>';
  h += '<div class="section"><h2>Badges</h2><span class="muted small">' + count(S.badges) + '/' + BADGES.length + '</span></div><div class="badges">' + BADGES.map(badgeHtml).join('') + '</div>';
  h += '<div class="section"><h2>Ranks</h2></div><div class="card"><table class="parts"><tbody>' + RANKS.map(function (r) { return '<tr' + (rankOf(S.xp).r === r ? ' style="background:var(--mango-soft)"' : '') + '><td><b>' + esc(r.name) + '</b></td><td class="small muted">' + esc(r.note) + '</td><td style="text-align:right">' + r.xp + ' XP</td></tr>'; }).join('') + '</tbody></table></div>';
  h += '<div class="section"><h2>Share with your teacher</h2></div><div class="card"><p class="small muted">Copy a short report of your progress and send it to T.Chris (Line or chat).</p><button class="btn" data-act="report">Copy my report</button> <button class="btn ghost" data-act="reset">Reset all progress</button></div>';
  app.innerHTML = h;
}
function reportText() {
  var L = ['Trail Mix report — ' + today(), 'XP ' + S.xp + ' (' + rankOf(S.xp).r.name + '), streak best ' + (S.streak.best || 0), 'Word cards: ' + count(S.words) + '/121'];
  ['u6','u7'].forEach(function (u) { var g = modProgress(u, 'g'), v = modProgress(u, 'v'); L.push('Unit ' + UNITS[u].n + ': grammar ' + g.stars + '/' + g.max + '★, vocab ' + v.stars + '/' + v.max + '★'); });
  if (S.tests.triage && S.tests.triage.res) L.push('Trailhead Check: ' + triageScore() + '; route: ' + (S.route || []).map(function (id) { return stripTags(MODS[id].name); }).join(', '));
  ['mock1','mock2'].forEach(function (id) { var r = S.tests[id]; if (r && r.last) L.push(TMAP[id].name + ': last ' + r.last.score + '/40, best ' + r.best + '/40'); });
  L.push('Faults waiting: ' + count(S.faults)); return L.join('\n');
}

/* ---------------- events ---------------- */
document.addEventListener('click', function (e) {
  var w = e.target.closest('[data-w]'); if (w && !e.target.closest('[data-act="wrel"]')) { e.preventDefault(); openWord(w.getAttribute('data-w')); return; }
  var a = e.target.closest('[data-act]'); if (!a) return; var act = a.getAttribute('data-act');
  if (act === 'scrim') { if (e.target === a) closeSheet(); return; }
  if (act === 'close') return closeSheet();
  if (act === 'wrel') return openWord(a.getAttribute('data-w2'), true);
  if (act === 'wback') { SHEET.pop(); var prev = SHEET.pop(); return openWord(prev, true); }
  if (act === 'say') return speak(a.getAttribute('data-t'));
  if (act === 'theme') { var cur = document.documentElement.getAttribute('data-theme'), dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    var nt = dark ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', nt); try { localStorage.setItem('trailmix.theme', nt); } catch (er) {} return; }
  if (act === 'chap') { var u = a.getAttribute('data-u'); BOOK[u] = { c: +a.getAttribute('data-c'), p: 0 }; return storyView.paint[u](); }
  if (act === 'page') return turnPage(a.getAttribute('data-u'), +a.getAttribute('data-d'));
  if (act === 'readpage') { var st = document.querySelector('.story'); if (st) speak(Array.prototype.map.call(st.querySelectorAll('p'), function (p) { return p.textContent; }).join(' ')); return; }
  if (act === 'patread') { markPattern(a.getAttribute('data-u'), a.getAttribute('data-p')); a.outerHTML = '<span class="tag">✓ read</span>'; return; }
  if (act === 'start') { var m = MODS[a.getAttribute('data-id')]; return startRun('mod', m.id, m.items, { title: (m.kind === 'g' ? '⚙️ ' : '📚 ') + 'Unit ' + UNITS[m.unit].n + ' · ' + m.name, back: modUrl(m) }); }
  if (act === 'startck') { var c = CKS[a.getAttribute('data-id')]; return startRun('ck', c.id, shuffle(c.items), { mode:'test', title:'🏔️ Checkpoint · ' + c.stage.name, back:'#/ck/' + c.id }); }
  if (act === 'ans') return answer(+a.getAttribute('data-j'));
  if (act === 'tans') return treeAnswer(+a.getAttribute('data-i'));
  if (act === 'tgo') return treeFollow();
  if (act === 'tnew' || act === 'tnext') { treeStart(TSORT.u, treePickNew(TSORT.u, TSORT.w)); treePaint(); var tp = document.querySelector('.tpanel'); if (tp && tp.getBoundingClientRect().top < 0) tp.scrollIntoView({ block:'start' }); return; }
  if (act === 'tagain') { treeStart(TSORT.u, TSORT.w); return treePaint(); }
  if (act === 'hint') return showHint();
  if (act === 'next') return nextQ();
  if (act === 'mockstart' || act === 'mockretry') { var id = a.getAttribute('data-id'); S.tests[id] = S.tests[id] || {}; S.tests[id].prog = { ans:{}, flags:{}, start: Date.now(), cur: 0 }; save(); touchStreak();
    if (location.hash === '#/mock/' + id) viewMock(id); else location.hash = '#/mock/' + id; return; }
  if (act === 'mans') { var p = EXAM.r.prog, it = EXAM.items[p.cur]; p.ans[it.id] = +a.getAttribute('data-j'); save(); return renderExam(); }
  if (act === 'goto') { EXAM.r.prog.cur = +a.getAttribute('data-k'); save(); renderExam(); return; }
  if (act === 'mprev') { EXAM.r.prog.cur--; save(); renderExam(); window.scrollTo(0, 0); return; }
  if (act === 'mnext') { if (EXAM.r.prog.cur < EXAM.items.length - 1) { EXAM.r.prog.cur++; save(); renderExam(); window.scrollTo(0, 0); } else { var un = EXAM.items.filter(function (x) { return EXAM.r.prog.ans[x.id] == null; }).length; toast(un ? un + ' unanswered. Use the grid to check, then Submit paper.' : 'All answered. Press Submit paper when you’re ready.'); } return; }
  if (act === 'flag') { var pr = EXAM.r.prog, itm = EXAM.items[pr.cur]; pr.flags = pr.flags || {}; pr.flags[itm.id] = !pr.flags[itm.id]; save(); return renderExam(); }
  if (act === 'msubmit') { if (a.getAttribute('data-sure')) return submitExam(false);
    var left = EXAM.items.filter(function (x) { return EXAM.r.prog.ans[x.id] == null; }).length; a.setAttribute('data-sure', '1'); a.textContent = left ? 'Submit with ' + left + ' blank?' : 'Yes, submit'; return; }
  if (act === 'report') { var txt = reportText(); (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { toast('Report copied. Paste it into Line for T.Chris.'); }, function () { app.insertAdjacentHTML('beforeend', '<pre class="card" style="white-space:pre-wrap">' + esc(txt) + '</pre>'); }); return; }
  if (act === 'reset') { if (a.getAttribute('data-sure')) { S = fresh(); save(); toast('Progress cleared.'); location.hash = '#/home'; route(); return; } a.setAttribute('data-sure', '1'); a.textContent = 'Press again to erase everything'; return; }
});
document.addEventListener('change', function (e) {
  if (e.target.matches && e.target.matches('.tsel') && e.target.value && TSORT) { treeStart(TSORT.u, e.target.value); treePaint(); }
});
document.addEventListener('keydown', function (e) {
  if (!RUN || document.getElementById('sheet')) return;
  if (/^[1-4]$/.test(e.key) && !RUN.locked) { var b = document.querySelectorAll('.opt')[+e.key - 1]; if (b && !b.disabled) b.click(); }
  else if (/^[a-d]$/i.test(e.key) && !RUN.locked) { var b2 = document.querySelectorAll('.opt')['abcd'.indexOf(e.key.toLowerCase())]; if (b2 && !b2.disabled) b2.click(); }
  else if (e.key === 'Enter' && RUN.locked) { var n = document.querySelector('[data-act="next"]'); if (n && document.activeElement !== n) { e.preventDefault(); n.click(); } }
});

touchStreak(); route(); checkBadges();
})();
