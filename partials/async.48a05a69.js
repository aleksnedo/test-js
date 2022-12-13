let o,t=o=>o;function n(n){return new Promise(((c,e)=>{n<500&&e(o||(o=t`Слишком мало сна!`)),setTimeout((()=>c(`Поспал ${n}`)),n)}))}(async()=>{try{const o=await n(2e3);console.log(o);const t=await n(1500);console.log(t);const c=await n(1e3);console.log(c);const e=await n(400);console.log(e)}catch(o){console.log(o)}})();
//# sourceMappingURL=async.48a05a69.js.map
