/* =============================================================================
   TRAIL MIX — progress server (Google Apps Script, bound to a Google Sheet)

   What it does
   • Students sign in with a name + 4-digit PIN. Their whole progress is saved
     here, so it follows them to any phone or computer.
   • The "Students" tab is your dashboard: one row per student, updated every
     time they study (XP, stars per unit, mocks, faults, minutes, weak modules…).
   • The "Activity" tab logs every finished module, checkpoint, Trailhead Check,
     mock paper, Sorting-tree word and badge, newest at the bottom.

   Set up (once)
   1. Create a new Google Sheet (e.g. "Trail Mix — progress").
   2. Extensions → Apps Script. Delete what is there, paste this whole file, Save.
   3. Run the function  setup  once (▶ Run) and allow the permissions.
   4. Deploy → New deployment → type "Web app" →
        Execute as: Me      Who has access: Anyone      → Deploy.
      Copy the Web app URL (ends in /exec) and send it to Claude, or paste it into
      index.html where it says TRAILMIX_API_URL.
   After any later change to this file: Deploy → Manage deployments → ✏️ →
   Version: New version → Deploy. (Saving alone does not update the /exec URL.)

   Teacher menu (in the Sheet, after reload): Trail Mix → Reset a student's PIN.
   ============================================================================= */

var TAB_STUDENTS = 'Students';
var TAB_ACTIVITY = 'Activity';
var TAB_ACCOUNTS = '_accounts';            // hidden: PIN hashes, tokens, saved progress
var ACT_HEAD = ['Time', 'Student', 'Type', 'Unit', 'What', 'Score', 'Result', 'Detail'];
var ACC_HEAD = ['Key', 'Name', 'PinHash', 'Token', 'Created', 'Updated', 'State1', 'State2', 'State3', 'State4', 'State5'];
var CHUNK = 45000;                          // a cell holds 50,000 characters

/* ------------------------------------------------------------------ setup */
function setup() {
  var ss = SpreadsheetApp.getActive();
  var st = sheet_(TAB_STUDENTS, ['Student', 'Last active']);
  st.setFrozenRows(1); st.setFrozenColumns(1);
  st.getRange('1:1').setFontWeight('bold').setBackground('#12352E').setFontColor('#FFFFFF').setWrap(true);
  st.getRange('B:B').setNumberFormat('ddd d mmm, HH:mm');
  var rules = [];
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=AND($B2<>"",NOW()-$B2>3)')
    .setBackground('#FBE4E1').setRanges([st.getRange('A2:B1000')]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=AND($B2<>"",NOW()-$B2<=1)')
    .setBackground('#DFF3E6').setRanges([st.getRange('A2:B1000')]).build());
  st.setConditionalFormatRules(rules);

  var ac = sheet_(TAB_ACTIVITY, ACT_HEAD);
  ac.setFrozenRows(1);
  ac.getRange('1:1').setFontWeight('bold').setBackground('#12352E').setFontColor('#FFFFFF');
  ac.getRange('A:A').setNumberFormat('ddd d mmm, HH:mm');
  ac.setColumnWidth(5, 260); ac.setColumnWidth(8, 320);

  var acc = sheet_(TAB_ACCOUNTS, ACC_HEAD);
  acc.hideSheet();

  var p = PropertiesService.getScriptProperties();
  if (!p.getProperty('SALT')) p.setProperty('SALT', Utilities.getUuid());
  var s1 = ss.getSheetByName('Sheet1'); if (s1 && s1.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(s1);
  ss.setActiveSheet(st);
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Trail Mix')
    .addItem('Set up / repair the tabs', 'setup')
    .addItem("Reset a student's PIN", 'resetPin')
    .addToUi();
}

function resetPin() {
  var ui = SpreadsheetApp.getUi();
  var r = ui.prompt('Reset PIN', 'Student name (as shown in the Students tab):', ui.ButtonSet.OK_CANCEL);
  if (r.getSelectedButton() !== ui.Button.OK) return;
  var row = findAccount_(key_(r.getResponseText()));
  if (!row) { ui.alert('No student with that name.'); return; }
  var acc = sheet_(TAB_ACCOUNTS, ACC_HEAD);
  acc.getRange(row, 3).setValue(''); acc.getRange(row, 4).setValue(Utilities.getUuid());
  ui.alert('Done. The next PIN this student types becomes their new PIN. Their progress is kept.');
}

/* ------------------------------------------------------------------ web app */
function doGet(e) {
  return json_({ ok: true, app: 'Trail Mix', time: new Date().toISOString() });
}

function doPost(e) {
  var body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'Bad request.' }); }
  var lock = LockService.getScriptLock();
  try { lock.waitLock(20000); } catch (err) { return json_({ ok: false, error: 'Server busy. Try again.' }); }
  try {
    var p = body.payload || {};
    if (body.action === 'login') return json_(login_(p));
    if (body.action === 'sync') return json_(sync_(p));
    return json_({ ok: false, error: 'Unknown action.' });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message || err) });
  } finally { lock.releaseLock(); }
}

/* ------------------------------------------------------------------ actions */
function login_(p) {
  var name = String(p.name || '').replace(/\s+/g, ' ').trim(), pin = String(p.pin || '').trim();
  if (!name || name.length > 30) return { ok: false, error: 'Type your name (up to 30 letters).' };
  if (!/^\d{4}$/.test(pin)) return { ok: false, error: 'Your PIN must be 4 numbers.' };
  var key = key_(name), acc = sheet_(TAB_ACCOUNTS, ACC_HEAD), row = findAccount_(key), now = new Date();
  if (!row) {
    var token = Utilities.getUuid();
    acc.appendRow([key, name, hash_(key, pin), token, now, now, '', '', '', '', '']);
    upsertStudent_(name, { 'Last active': now }, now);
    logRows_([[now, name, 'sign-up', '', 'New student', '', '', String(p.device || '')]]);
    return { ok: true, created: true, name: name, token: token, state: null };
  }
  var v = acc.getRange(row, 1, 1, ACC_HEAD.length).getValues()[0];
  if (!v[2]) acc.getRange(row, 3).setValue(hash_(key, pin));          // PIN was reset by the teacher
  else if (v[2] !== hash_(key, pin)) return { ok: false, error: 'That name is already used with a different PIN. Check your PIN, or ask T.Chris to reset it.' };
  var state = null, raw = v.slice(6).join('');
  if (raw) { try { state = JSON.parse(raw); } catch (err) { state = null; } }
  logRows_([[now, v[1], 'sign-in', '', 'Signed in', '', '', String(p.device || '')]]);
  return { ok: true, created: false, name: v[1], token: v[3], state: state };
}

function sync_(p) {
  var key = key_(p.name), acc = sheet_(TAB_ACCOUNTS, ACC_HEAD), row = findAccount_(key), now = new Date();
  if (!row) return { ok: false, error: 'Unknown student.', relogin: true };
  var v = acc.getRange(row, 1, 1, 6).getValues()[0];
  if (!p.token || p.token !== v[3]) return { ok: false, error: 'Please sign in again.', relogin: true };
  if (p.state) {
    var s = JSON.stringify(p.state), cells = [];
    for (var i = 0; i < 5; i++) cells.push(s.substr(i * CHUNK, CHUNK));
    if (s.length > CHUNK * 5) return { ok: false, error: 'Progress too large to save.' };
    acc.getRange(row, 6, 1, 6).setValues([[now].concat(cells)]);
  }
  if (p.summary) upsertStudent_(v[1], p.summary, now);
  var ev = (p.events || []).slice(0, 300).map(function (x) {
    return [x.t ? new Date(x.t) : now, v[1], x.type || '', x.unit || '', x.what || '', x.score == null ? '' : x.score, x.result || '', x.detail || ''];
  });
  if (ev.length) logRows_(ev);
  return { ok: true, at: now.toISOString() };
}

/* ------------------------------------------------------------------ helpers */
function upsertStudent_(name, summary, now) {
  var st = sheet_(TAB_STUDENTS, ['Student', 'Last active']);
  var head = st.getRange(1, 1, 1, Math.max(2, st.getLastColumn())).getValues()[0].map(String);
  var keys = Object.keys(summary);
  keys.forEach(function (k) { if (head.indexOf(k) < 0) { head.push(k); st.getRange(1, head.length).setValue(k); } });
  var last = st.getLastRow(), row = 0;
  if (last > 1) {
    var names = st.getRange(2, 1, last - 1, 1).getValues();
    for (var i = 0; i < names.length; i++) if (key_(names[i][0]) === key_(name)) { row = i + 2; break; }
  }
  if (!row) { row = last + 1; st.getRange(row, 1).setValue(name); }
  var vals = st.getRange(row, 1, 1, head.length).getValues()[0];
  vals[0] = name; vals[1] = now;
  keys.forEach(function (k) { if (k !== 'Last active') vals[head.indexOf(k)] = summary[k]; });
  st.getRange(row, 1, 1, head.length).setValues([vals]);
}

function logRows_(rows) {
  var ac = sheet_(TAB_ACTIVITY, ACT_HEAD);
  ac.getRange(ac.getLastRow() + 1, 1, rows.length, ACT_HEAD.length).setValues(rows);
}

function findAccount_(key) {
  var acc = sheet_(TAB_ACCOUNTS, ACC_HEAD), last = acc.getLastRow();
  if (last < 2) return 0;
  var keys = acc.getRange(2, 1, last - 1, 1).getValues();
  for (var i = 0; i < keys.length; i++) if (keys[i][0] === key) return i + 2;
  return 0;
}

function sheet_(name, head) {
  var ss = SpreadsheetApp.getActive(), sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); }
  if (sh.getLastRow() === 0) sh.getRange(1, 1, 1, head.length).setValues([head]);
  return sh;
}

function key_(name) { return String(name || '').replace(/\s+/g, ' ').trim().toLowerCase(); }

function hash_(key, pin) {
  var p = PropertiesService.getScriptProperties(), salt = p.getProperty('SALT');
  if (!salt) { salt = Utilities.getUuid(); p.setProperty('SALT', salt); }
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt + '|' + key + '|' + pin)
    .map(function (b) { return ('0' + (b & 255).toString(16)).slice(-2); }).join('');
}

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
