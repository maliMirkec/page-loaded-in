const e=e=>{window.addEventListener("load",()=>{if(console.log(e),!e)return"Provide selector.";const o=document.querySelector(e);if(console.log(o),!e)return"Element not found.";if(o){const e=performance.mark("pageLoadedIn");o.innerHTML+=`Page loaded in ${e.startTime/1e3}s.</p>`}})};export{e as default};
//# sourceMappingURL=index.modern.mjs.map
