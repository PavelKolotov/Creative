(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("._anim-items"),t=document.querySelector(".navbar"),n=document.querySelector(".home__container").offsetTop,o=document.querySelectorAll(".mobile-nav__link"),i=document.querySelector("#toggleMenu"),c=function(){window.pageYOffset>=n?t.classList.add("sticky"):t.classList.remove("sticky");for(var o=0;o<e.length;o++){var i=e[o],c=i.offsetHeight,d=(l=i,a=void 0,r=void 0,u=void 0,a=l.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,u=window.pageYOffset||document.documentElement.scrollTop,{top:a.top+u,left:a.left+r}).top,s=window.innerHeight-c/4;c>window.innerHeight&&(s=window.innerHeight-window.innerHeight/4),pageYOffset>d-s&&pageYOffset<d+c?i.classList.add("_active"):i.classList.contains("_anim-no-hide")||i.classList.remove("_active")}var l,a,r,u};setTimeout((function(){c()}),300),window.addEventListener("scroll",c),o.forEach((function(e){e.addEventListener("click",(function(){i.checked=!1,document.body.classList.remove("open-menu")}))})),i.addEventListener("click",(function(){document.body.classList.toggle("open-menu")}))}))})();