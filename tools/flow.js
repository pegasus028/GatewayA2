const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
 const p=await b.newPage({viewport:{width:1280,height:900}}); const errs=[];
 p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/ERR_FILE_NOT_FOUND|net::/.test(m.text()))errs.push('CONSOLE '+m.text())});
 const base='file:///home/claude/trailmix/index.html'; const S='/home/claude/shots/';
 // story + word card
 await p.goto(base+'#/u6/vocab/story'); await p.waitForTimeout(400);
 await p.screenshot({path:S+'f_story.png'});
 await p.click('.kw >> nth=0'); await p.waitForTimeout(300); await p.screenshot({path:S+'f_word.png'});
 await p.click('[data-act="wrel"] >> nth=0'); await p.waitForTimeout(200); await p.click('[data-act="wback"]'); await p.click('[data-act="close"]');
 for(let i=0;i<3;i++){ await p.click('[data-act="page"][data-d="1"]'); }
 // module run: answer all, picking first option each time (wrong/right mix)
 await p.goto(base+'#/m/g6m5'); await p.click('[data-act="start"]');
 for(let k=0;k<7;k++){ const n=await p.$('[data-act="next"]'); if(n){await n.click(); continue;}
   const opts=await p.$$('.opt:not([disabled])'); if(!opts.length) break; await opts[0].click(); await p.waitForTimeout(80);
   if(!(await p.$('[data-act="next"]'))){ const o2=await p.$$('.opt:not([disabled])'); if(o2.length) await o2[0].click(); }
   if(k===2) await p.screenshot({path:S+'f_q.png'}); await p.click('[data-act="next"]'); }
 await p.waitForTimeout(300); await p.screenshot({path:S+'f_res.png',fullPage:false});
 // picture item check
 await p.goto(base+'#/m/v6m1'); await p.click('[data-act="start"]'); await p.waitForTimeout(200); await p.screenshot({path:S+'f_pic.png'});
 // triage unit 7
 await p.goto(base+'#/triage/7'); for(let k=0;k<30;k++){ const o=await p.$$('.opt:not([disabled])'); if(!o.length) break; await o[k%4].click(); const n=await p.$('[data-act="next"]'); if(n) await n.click(); await p.waitForTimeout(30); }
 await p.waitForTimeout(400); await p.screenshot({path:S+'f_tri.png'});
 // mock
 await p.goto(base+'#/mock/mock1'); await p.click('[data-act="mockstart"]'); await p.waitForTimeout(200); await p.screenshot({path:S+'f_mock1.png'});
 for(let k=0;k<40;k++){ await p.click('.opt >> nth='+(k%4)); if(k===27) await p.screenshot({path:S+'f_mockcloze.png'}); if(k===34) await p.screenshot({path:S+'f_mockread.png'}); await p.click('[data-act="mnext"]'); }
 await p.click('[data-act="msubmit"]'); await p.click('[data-act="msubmit"]'); await p.waitForTimeout(500); await p.screenshot({path:S+'f_mockres.png'});
 await p.goto(base+'#/home'); await p.waitForTimeout(300); await p.screenshot({path:S+'f_home2.png'});
 await p.goto(base+'#/record'); await p.waitForTimeout(300);
 await p.goto(base+'#/faults'); await p.waitForTimeout(300); await p.screenshot({path:S+'f_faults.png'});
 // mobile
 const m=await b.newPage({viewport:{width:390,height:844},isMobile:true}); m.on('pageerror',e=>errs.push('M '+e.message));
 for(const h of ['home','u6/vocab/story','u7/grammar','m/g7m7','mock/mock2','u7/vocab/words']){ await m.goto(base+'#/'+h); await m.waitForTimeout(300); await m.screenshot({path:S+'mob_'+h.replace(/\//g,'_')+'.png'});
   const ov=await m.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth); if(ov) errs.push('H-OVERFLOW on '+h); }
 console.log(errs.join('\n')||'no errors'); await b.close();
})();
