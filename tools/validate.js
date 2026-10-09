// Usage: node tools/validate.js file1.js [file2.js ...]   (or no args = all data/*.js)
const fs=require('fs'),vm=require('vm'),path=require('path');
const ROOT=path.join(__dirname,'..');
const U6=('apple bean biscuit broccoli burger butter cabbage carrot chicken cream crisps cucumber curry egg fish garlic grape honey jam lemonade lentil lettuce melon milkshake mushroom nut onion orangejuice pancake pasta pear pepper pizza rice salad salt sausage softdrink soup spinach strawberry sugar tea toast tomato water yoghurt bag bottle box can carton cup glass jar packet tin diet takeaway sweets').split(' ');
const U7=('bear bee butterfly eagle fox hippo jellyfish leopard lizard monkey owl penguin rat rhino scorpion shark snake tiger whale wolf beach field flowers forest grass hill island lake mountain ocean plants river sky valley waterfall cloud cloudy cold dry fog foggy hot ice icy rain rainy snow snowy storm stormy sun sunny warm wet wind windy rare species horn destroy shocking').split(' ');
const ALL=new Set([...U6,...U7]);
const TYPES=new Set(['gap','dialogue','error','choose','situation','meaning','odd','picture','classify','cloze','read']);
let files=process.argv.slice(2); if(!files.length) files=fs.readdirSync(path.join(ROOT,'data')).filter(f=>f.endsWith('.js')).map(f=>path.join(ROOT,'data',f));
let errors=0, warns=0; const E=(m)=>{errors++;console.log('  ERROR',m)}, W=(m)=>{warns++;console.log('  warn ',m)};
for(const f of files){
  console.log('==',f);
  const win={}; const ctx={window:win,console}; ctx.window=win;
  try{ vm.runInNewContext(fs.readFileSync(f,'utf8'),new Proxy(ctx,{get:(t,k)=>k in t?t[k]:win[k],set:(t,k,v)=>{win[k]=v;return true},has:()=>true})); }
  catch(e){ E('does not parse: '+e.message); continue; }
  const items=[]; const ids=new Set();
  (function walk(o,trail){ if(!o||typeof o!=='object') return;
    if(Array.isArray(o)){o.forEach((x,i)=>walk(x,trail));return;}
    if(Array.isArray(o.options)&&('answer' in o)) items.push({it:o,trail});
    for(const k in o) if(k!=='options') walk(o[k], o.id?o.id:trail); })(win,'');
  const pos=[0,0,0,0]; let longest=0, cefr={}, run=0, last=-1;
  for(const {it,trail} of items){
    const id=it.id||('(no id in '+trail+')');
    if(!it.id) E('item without id in '+trail); else if(ids.has(it.id)) E('duplicate id '+it.id); else ids.add(it.id);
    if(!TYPES.has(it.type)) E(id+' bad type '+it.type);
    if(it.options.length!==4) E(id+' has '+it.options.length+' options');
    if(!(Number.isInteger(it.answer)&&it.answer>=0&&it.answer<it.options.length)) E(id+' bad answer index');
    if(new Set(it.options.map(s=>String(s).trim().toLowerCase())).size!==it.options.length) E(id+' duplicate options');
    if(!it.why) E(id+' no why'); if(!it.hint && it.type!=='read' && it.type!=='cloze') W(id+' no hint');
    if(!['A2','B1'].includes(it.cefr)) E(id+' cefr must be A2|B1, got '+it.cefr); else cefr[it.cefr]=(cefr[it.cefr]||0)+1;
    const txt=JSON.stringify([it.why,it.hint]);
    if(/\b(option|answer)\s*[A-D1-4]\b|\(\s*[a-d1-4]\s*\)\s*is/i.test(txt)) W(id+' why/hint refers to option letter/number');
    if(it.type==='gap'&&!/___/.test(it.stem||'')) E(id+' gap without ___');
    if(it.type==='dialogue'&&!(it.lines||[]).some(l=>/___/.test(l.text))) E(id+' dialogue without ___ in lines');
    if(it.type==='error'){ const segs=[...(it.stem||'').matchAll(/\[\[(.+?)\]\]/g)].map(m=>m[1]);
      if(segs.length!==4) E(id+' error item needs 4 [[segments]], has '+segs.length);
      else if(segs.join('|')!==it.options.join('|')) E(id+' error options must equal segments in order');
      if(!it.fix) W(id+' error item without fix'); }
    if(it.type==='picture'&&!ALL.has(it.img)) E(id+' picture img not a word id: '+it.img);
    if(it.img&&!ALL.has(it.img)) E(id+' img not a word id: '+it.img);
    if(it.hint&&it.options[it.answer]&&it.hint.toLowerCase().includes(String(it.options[it.answer]).toLowerCase())&&String(it.options[it.answer]).length>3) W(id+' hint contains the key text');
    if(it.type!=='error'){ pos[it.answer]++; const L=it.options.map(s=>String(s).replace(/<[^>]+>/g,'').length); const mx=Math.max(...L);
      if(L[it.answer]===mx && L.filter(x=>x===mx).length===1) longest++;
      if(it.answer===last){run++; if(run>=3) W(id+' 4+ identical keys in a row');} else run=0; last=it.answer; }
  }
  // module checks
  (function walkMods(o){ if(!o||typeof o!=='object') return; if(Array.isArray(o)){o.forEach(walkMods);return;}
    if(o.id&&/^[gv][67]m\d+$/.test(o.id)){ const its=o.items||[]; const t=new Set(its.map(i=>i.type));
      if(its.length<5||its.length>7) E(o.id+' has '+its.length+' items (5–7)');
      if(t.size<4) E(o.id+' uses only '+t.size+' item types (need ≥4)');
      if(!o.rule||!o.rule.key||!o.rule.body) E(o.id+' missing rule.key/body');
      if(o.id[0]==='v'&&!(o.rule&&Array.isArray(o.rule.words))) W(o.id+' vocab module without rule.words');
      if(o.rule&&o.rule.words) o.rule.words.forEach(w=>{if(!ALL.has(w)) E(o.id+' unknown word id '+w)}); }
    if(o.id&&/ck$/.test(o.id)&&(o.items||[]).length<5) E(o.id+' checkpoint too short');
    for(const k in o) walkMods(o[k]); })(win);
  const n=pos.reduce((a,b)=>a+b,0);
  if(n) console.log(`  items ${items.length} | key positions ${pos.map(p=>Math.round(100*p/n)+'%').join(' ')} | key is unique-longest ${Math.round(100*longest/n)}% | cefr ${JSON.stringify(cefr)}`);
  if(n>=12){ pos.forEach((p,i)=>{ if(p/n<0.17||p/n>0.33) W('key position '+i+' at '+Math.round(100*p/n)+'%')}); if(longest/n>0.3) W('key is longest option too often'); }
  // sorting trees: every keyword in exactly one leaf, every branch reachable and pointing somewhere real
  if(win.TREES) for(const u of ['u6','u7']){ const T=win.TREES[u]; if(!T){E('TREES.'+u+' missing');continue;} const need=u==='u6'?U6:U7, seen={};
    for(const k in T.leaves){ const L=T.leaves[k]; if(!L.title||!L.rule) E('TREES.'+u+' leaf '+k+' needs title+rule'); (L.words||[]).forEach(w=>{ if(!ALL.has(w)) E('TREES.'+u+' leaf '+k+' unknown word '+w); seen[w]=(seen[w]||0)+1; }); }
    need.forEach(id=>{ if(!seen[id]) E('TREES.'+u+' word not in any leaf: '+id); else if(seen[id]>1) E('TREES.'+u+' word in '+seen[id]+' leaves: '+id); });
    const reach=new Set(); (function go(id){ if(reach.has(id)) return; reach.add(id); const n=T.nodes[id]; if(!n) { if(!T.leaves[id]) E('TREES.'+u+' branch to nowhere: '+id); return; }
      if(!n.q||!(n.opts||[]).length||n.opts.length<2) E('TREES.'+u+' node '+id+' needs q and 2+ opts'); n.opts.forEach(o=>go(o.to)); })(T.root);
    Object.keys(T.nodes).concat(Object.keys(T.leaves)).forEach(k=>{ if(!reach.has(k)) E('TREES.'+u+' unreachable '+k); });
    Object.keys(T.notes||{}).forEach(k=>{ if(!need.includes(k)) E('TREES.'+u+' note for unknown word '+k); });
    console.log('  tree '+u+': '+Object.keys(T.nodes).length+' questions, '+Object.keys(T.leaves).length+' leaves, '+Object.keys(seen).length+' words'); }
  // word files
  for(const u of ['u6','u7']) if(win.WORDS&&win.WORDS[u]){ const need=u==='u6'?U6:U7; const have=new Set((win.WORDS[u].words||[]).map(w=>w.id));
    need.forEach(id=>{ if(!have.has(id)) E('WORDS.'+u+' missing '+id)});
    (win.WORDS[u].words||[]).forEach(w=>{ ['word','pos','level','def','ex','cat'].forEach(k=>{ if(!w[k]) E('word '+w.id+' missing '+k)});
      (w.related||[]).forEach(r=>{ if(!ALL.has(r)) E('word '+w.id+' related unknown '+r)}); if(w.ex&&w.ex.length<2) W('word '+w.id+' <2 examples'); }); }
  if(win.STORIES) for(const u in win.STORIES){ const need=u==='u6'?U6:U7; const txt=JSON.stringify(win.STORIES[u]);
    const used=new Set([...txt.matchAll(/\{\{([a-z]+)\|/g)].map(m=>m[1]));
    need.forEach(id=>{ if(!used.has(id)) E('story '+u+' never uses '+id)}); used.forEach(id=>{ if(!ALL.has(id)) E('story '+u+' unknown id '+id)}); }
  if(win.PATTERNS) for(const u in win.PATTERNS) (win.PATTERNS[u]||[]).forEach(p=>(p.items||[]).forEach(id=>{ if(!ALL.has(id)) E('pattern '+p.id+' unknown word '+id)}));
}
console.log(`\n${errors} errors, ${warns} warnings`); process.exit(errors?1:0);
