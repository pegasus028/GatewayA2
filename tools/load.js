const vm=require("vm"),fs=require("fs"),path=require("path");
module.exports=function(dir){const ctx={};ctx.window=ctx;vm.createContext(ctx);for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.js')).sort()) vm.runInContext(fs.readFileSync(path.join(dir,f),"utf8"),ctx,{filename:f});return ctx;}
