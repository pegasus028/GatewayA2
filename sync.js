/* ============================================================
   TRAIL MIX — online saving (talks to backend/Code.gs)
   • No server address → the app works exactly as before (this browser only).
   • Signed in → progress is pushed a few seconds after each change, when the
     tab is hidden, and when the connection comes back. Activity events wait in
     an outbox in localStorage until the server confirms them.
   • Requests are POST text/plain: a "simple request", so Apps Script needs no
     CORS preflight. Do not change that header.
   ============================================================ */
(function () {
'use strict';
var LS_ACC = 'trailmix.account', LS_OUT = 'trailmix.outbox', LS_URL = 'trailmix.apiUrl';
var URL = window.TRAILMIX_API_URL || '';
try { var o = localStorage.getItem(LS_URL); if (o === 'off') URL = ''; else if (o) URL = o; } catch (e) {}
function rd(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
function wr(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
var acc = rd(LS_ACC, null), st = { s: acc ? 'idle' : 'out', at: null, err: '' }, timer = null, busy = false, again = false;
function setSt(s, err) { st.s = s; st.err = err || ''; if (s === 'saved') st.at = new Date(); if (T.onStatus) try { T.onStatus(st); } catch (e) {} }

function post(action, payload, keepalive) {
  var ctrl = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
  return fetch(URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: action, payload: payload }),
    redirect: 'follow', keepalive: !!keepalive, signal: ctrl ? ctrl.signal : undefined })
    .then(function (r) { clearTimeout(to); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); },
          function (e) { clearTimeout(to); throw e; });
}
function device() { var u = navigator.userAgent; return /iPad|Tablet/i.test(u) ? 'tablet' : /Mobi|Android|iPhone/i.test(u) ? 'phone' : 'computer'; }

function login(name, pin) {
  if (!URL) return Promise.resolve({ ok: false, error: 'Online saving is not switched on yet.' });
  setSt('saving');
  return post('login', { name: name, pin: pin, device: device() }).then(function (r) {
    if (r.ok) { acc = { name: r.name, token: r.token }; wr(LS_ACC, acc); setSt('idle'); } else setSt('out', r.error);
    return r;
  }, function (e) { setSt(acc ? 'offline' : 'out'); return { ok: false, error: 'No connection to the server. Check the internet and try again.' }; });
}
function logout() { var p = acc ? push(true) : Promise.resolve(); return p.then(function () { acc = null; wr(LS_ACC, null); wr(LS_OUT, null); setSt('out'); }); }
function dirty(ms) { if (!acc || !URL) return; clearTimeout(timer); timer = setTimeout(function () { push(); }, ms == null ? 4000 : ms); }
function event(e) { if (!acc || !URL) return; e.t = Date.now(); var ob = rd(LS_OUT, []); ob.push(e); wr(LS_OUT, ob.slice(-500)); dirty(); }
function push(keepalive) {
  if (!acc || !URL || !window.TrailMix) return Promise.resolve();
  if (busy) { again = true; return Promise.resolve(); }
  busy = true; clearTimeout(timer); setSt('saving');
  var ob = rd(LS_OUT, []), sent = ob.slice(0, 300), n = sent.length;
  return post('sync', { name: acc.name, token: acc.token, state: TrailMix.state(), summary: TrailMix.summary(), events: sent }, keepalive).then(function (r) {
    if (r.ok) { var now = rd(LS_OUT, []); wr(LS_OUT, now.slice(n)); setSt('saved'); if (now.length > n) again = true; }
    else if (r.relogin) { acc = null; wr(LS_ACC, null); setSt('out', r.error); }
    else setSt('error', r.error);
  }, function () { setSt('offline'); }).then(function () { busy = false; if (again) { again = false; dirty(1500); } });
}
window.addEventListener('online', function () { dirty(500); });
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden' && acc) { clearTimeout(timer); if (!busy) push(true); } });

var T = window.TMSync = { enabled: !!URL, url: URL, account: function () { return acc; }, status: function () { return st; },
  login: login, logout: logout, dirty: dirty, event: event, push: push, onStatus: null };
})();
