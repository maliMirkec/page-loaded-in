module.exports=function(e){window.addEventListener("load",function(){if(console.log(e),!e)return"Provide selector.";var o=document.querySelector(e);if(console.log(o),!e)return"Element not found.";if(o){var n=performance.mark("pageLoadedIn");o.innerHTML+="Page loaded in "+n.startTime/1e3+"s.</p>"}})};
//# sourceMappingURL=index.js.map
