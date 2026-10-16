// Lists every text the app reads aloud (word 🔊, example 🔊, storybook "Listen"),
// exactly as app.js passes it to speak(), with the key app.js uses to find its MP3.
// Usage: node tools/tts-list.js  → JSON [{key, kind, ref, text}] on stdout.
// Keep ttsNorm/ttsKey identical to the copies in app.js.
const path = require('path');
const load = require('./load.js');

function ttsNorm(s) { return String(s || '').replace(/\s+/g, ' ').trim(); }
function ttsKey(s) { // FNV-1a 32-bit over UTF-16 code units, hex
  s = ttsNorm(s); var h = 0x811c9dc5;
  for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return ('0000000' + h.toString(16)).slice(-8);
}
function stripTags(s) { return String(s || '').replace(/<[^>]+>/g, ''); }

const c = load(path.join(__dirname, '..', 'data'));
const out = [], seen = {};
function add(kind, ref, text) {
  text = ttsNorm(text); if (!text) return;
  const key = ttsKey(text);
  if (seen[key]) { if (seen[key] !== text) throw new Error('Key collision: ' + key); return; }
  seen[key] = text; out.push({ key, kind, ref, text });
}
for (const u of ['u6', 'u7']) {
  for (const w of (c.WORDS[u].words || [])) {
    add('word', u + ':' + w.id, w.word);
    (w.ex || []).forEach((e, i) => add('example', u + ':' + w.id + ':' + i, stripTags(e)));
  }
  (c.STORIES[u].chapters || []).forEach((ch, ci) => ch.pages.forEach((pg, pi) => {
    // app.js: paragraphs split on blank lines, {{id|surface}} → surface, textContent of each <p>, joined with ' '
    const paras = pg.text.split(/\n\s*\n/).map(p => stripTags(p.replace(/\{\{([a-z]+)\|([^}]+)\}\}/g, (_, id, surf) => surf)));
    add('story', u + ':' + ci + '.' + pi, paras.join(' '));
  }));
}
if (require.main === module) process.stdout.write(JSON.stringify(out, null, 1));
module.exports = { list: out, ttsKey, ttsNorm };
