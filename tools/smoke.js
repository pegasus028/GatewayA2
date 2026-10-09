const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
 const p=await b.newPage({viewport:{width:1280,height:900}}); const errs=[];
 p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
 const base='file:///home/claude/trailmix/index.html';
 const shots=(process.argv[2]||'home,u6/vocab/story,u6/grammar,m/g6m5,u7/vocab/patterns,u7/vocab/words,tests,record').split(',');
 for(const h of shots){ await p.goto(base+'#/'+h); await p.waitForTimeout(500); await p.screenshot({path:'/home/claude/shots/'+h.replace(/\//g,'_')+'.png',fullPage:false}); }
 console.log(errs.join('\n')||'no errors'); await b.close();
})();
