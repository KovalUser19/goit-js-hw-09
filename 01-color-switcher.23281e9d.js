const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){d=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(d),e.setAttribute("disabled",""),t.removeAttribute("disabled")})),e.setAttribute("disabled","");let d=null;
//# sourceMappingURL=01-color-switcher.23281e9d.js.map
