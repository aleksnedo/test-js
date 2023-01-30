var a={}.promises;a.readdir("src/partials").then((e=>Promise.all(e.map((async e=>{const t=await a.stat(e);return{Name:e,Size:t.size,Date:t.mtime}}))))).then((a=>console.table(a)));
//# sourceMappingURL=files.22c4549c.js.map
