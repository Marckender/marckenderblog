(function(e){function t(t){for(var o,a,l=t[0],u=t[1],i=t[2],f=0,b=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==c[u]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dd1":function(e,t,n){},"4b23":function(e,t,n){"use strict";n("8eb2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"app"};function r(e,t,n,r,a,l){var u=Object(o["u"])("router-view");return Object(o["o"])(),Object(o["c"])("div",c,[Object(o["e"])(u)])}var a={name:"App"},l=(n("ac7e"),n("6b0d")),u=n.n(l);const i=u()(a,[["render",r]]);var s=i,f=n("6c02"),b={class:"principal"};function d(e,t,n,c,r,a){var l=Object(o["u"])("Navbar");return Object(o["o"])(),Object(o["c"])("section",b,[Object(o["e"])(l)])}var p=function(e){return Object(o["r"])("data-v-e3b3fc60"),e=e(),Object(o["p"])(),e},O={class:"nav_menu"},j=p((function(){return Object(o["d"])("span",null,"Home",-1)})),h=[j],v=p((function(){return Object(o["d"])("span",null,"Resume",-1)})),m=[v],g=p((function(){return Object(o["d"])("span",null,"Portfolio",-1)})),w=[g],_=p((function(){return Object(o["d"])("span",null,"Blog",-1)})),y=[_],P=p((function(){return Object(o["d"])("span",null,"Contact",-1)})),k=[P];function S(e,t,n,c,r,a){return Object(o["o"])(),Object(o["c"])("nav",{class:Object(o["k"])({change_color:r.scrollPosition>20})},[Object(o["d"])("div",null,[Object(o["d"])("a",{class:Object(o["k"])({logo_change:r.scrollPosition>20}),href:"#welcome"}," Marckender",2)]),Object(o["d"])("div",O,[Object(o["d"])("a",{class:Object(o["k"])({logo_change:r.scrollPosition>20}),href:"#home_functionality"},h,2),Object(o["d"])("a",{href:"#home_plans",class:Object(o["k"])({logo_change:r.scrollPosition>20})},m,2),Object(o["d"])("a",{href:"#home_contact",class:Object(o["k"])({logo_change:r.scrollPosition>20})},w,2),Object(o["d"])("a",{href:"#home_contact",class:Object(o["k"])({logo_change:r.scrollPosition>20})},y,2),Object(o["d"])("a",{href:"#home_contact",class:Object(o["k"])({logo_change:r.scrollPosition>20})},k,2)])],2)}var x={name:"Navbar",components:{},data:function(){return{scrollPosition:null,drawer:!1}},computed:{},methods:{updateScroll:function(){this.scrollPosition=window.scrollY},showDrawer:function(){this.drawer=!0}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}};n("bf16");const M=u()(x,[["render",S],["__scopeId","data-v-e3b3fc60"]]);var H=M,N={name:"Home",components:{Navbar:H}};n("4b23");const J=u()(N,[["render",d]]);var T=J,A=[{path:"/",name:"Home",component:T}],B=A,C=new f["a"]({history:Object(f["b"])(),routes:B}),D=C,E=Object(o["b"])(s);E.use(D),E.mount("#app")},"8eb2":function(e,t,n){},ac7e:function(e,t,n){"use strict";n("0dd1")},bf16:function(e,t,n){"use strict";n("d61c")},d61c:function(e,t,n){}});
//# sourceMappingURL=app.277873e5.js.map