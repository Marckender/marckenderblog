(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0638":function(e,t,n){"use strict";n("4fae")},"066c":function(e,t,n){"use strict";n("6543")},"0a85":function(e,t,n){},1267:function(e,t,n){"use strict";n("98fd")},"446d":function(e,t,n){"use strict";n("d67d")},4652:function(e,t,n){"use strict";n("e67b")},"4fae":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"app"};function a(e,t,n,a,c,i){var s=Object(o["y"])("Navbar"),l=Object(o["y"])("router-view");return Object(o["r"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(s),Object(o["e"])("div",r,[Object(o["h"])(l)])],64)}var c={class:"__logo"},i={class:"nav_menu"},s=Object(o["g"])("Home"),l=Object(o["g"])("Portfolio");function u(e,t,n,r,a,u){var d=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["d"])("nav",{class:Object(o["n"])({change_color:a.scrollPosition>20})},[Object(o["e"])("div",c,[Object(o["e"])("a",{class:Object(o["n"])({logo_change:a.scrollPosition>20}),href:"#welcome"}," Marckender.me",2)]),Object(o["e"])("div",i,[Object(o["h"])(d,{to:{name:"Home"},class:Object(o["n"])({logo_change:a.scrollPosition>20})},{default:Object(o["C"])((function(){return[s]})),_:1},8,["class"]),Object(o["h"])(d,{to:{name:"Portfolio"}},{default:Object(o["C"])((function(){return[l]})),_:1})])],2)}var d={name:"Navbar",components:{},data:function(){return{scrollPosition:null,drawer:!1}},computed:{},methods:{updateScroll:function(){this.scrollPosition=window.scrollY},showDrawer:function(){this.drawer=!0}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},f=(n("0638"),n("6b0d")),b=n.n(f);const p=b()(d,[["render",u],["__scopeId","data-v-434815aa"]]);var v=p,h={components:{Navbar:v},name:"App"};n("5d1f");const m=b()(h,[["render",a]]);var O=m,j=n("6c02"),g={class:"principalHome"},w={class:"first_content"};function y(e,t,n,r,a,c){var i=Object(o["y"])("first"),s=Object(o["y"])("Hero");return Object(o["r"])(),Object(o["d"])("section",g,[Object(o["h"])(s,null,{heroside:Object(o["C"])((function(){return[Object(o["e"])("div",w,[Object(o["h"])(i)])]})),_:1})])}var _={id:"main",class:"hero_container"},k=Object(o["f"])('<div class="grid_1"><div></div><div class="hero_footer"><ul><li><a href="https://twitter.com/Makender103" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/in/marckender/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://www.instagram.com/makender103/" target="_blank"><i class="fab fa-instagram"></i></a></li><li><a href="https://github.com/Marckender" target="_blank"><i class="fab fa-github"></i></a></li></ul></div></div>',1),S={class:"grid_2"};function P(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("section",_,[k,Object(o["e"])("div",S,[Object(o["x"])(e.$slots,"heroside")])])}var C={name:"Hero",components:{}};n("bfef");const H=b()(C,[["render",P]]);var x=H,J={class:"principal"};function z(e,t,n,r,a,c){var i=Object(o["y"])("About");return Object(o["r"])(),Object(o["d"])("section",J,[Object(o["h"])(i)])}var A={class:"home_description"},T=Object(o["f"])('<h3>Software Developer</h3><h2>Marckender R. Jean Charles</h2><p>Hi, I am a student in Systems analysis and development, <strong>and work at Compass as a systems programmer ( Javascript ).</strong> Passionate about technology and always willing to learn more every day. I like to work in a team to have different perspectives on my work and to learn new things and be very active in the contexts in which I am inserted. <strong>Today, I work mainly with Javascript and related technologies such as : Typescript, NodeJS, ReactJS and React Native, VueJS </strong>. I value the organization of codes and projects, using versioning based on Git, as well as good practices such as the application of Git Flow and Conventional Commits in the maintenance of my codebases. </p><div class="desc_infos"><div><p><i class="fas fa-envelope"></i> : <span><a href="mailto:makender103@gmail.com">makender103@gmail.com</a></span></p></div><div><p><i class="fas fa-birthday-cake"></i> : <span>13 Semptember</span></p></div></div>',4),M=Object(o["e"])("div",{class:"divider1"},null,-1);function U(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("section",A,[T,Object(o["e"])("button",{onClick:t[0]||(t[0]=function(){return c.downloadCV&&c.downloadCV.apply(c,arguments)})},"Download CV"),M])}var F={methods:{downloadCV:function(){var e="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2451948E7&tokenCaptchar=03ANYolqtM8sa_iX-aeGJ3zxz4OCx1V8FrzzzTZQwSSpKIvdvmPJPUPU1V17jGuxJZ4F6vDzsq1s5_F4hWeU8UgV7nHFRFbnpqg5pUeBya74VFb_5T_y6kUgsOZBYnJrEXHnua657Mj9vwHENeQMQ_QFwgAsw04eU9d1rmjbrKwm0_FzXdxckigJA7CnWJxKkIKhUq-B_k89m8l4agEsfQUXslB-jCoGBQtuwJF5sou1SEMSvFD-5CcsjHLXuQ7at2_g6jz6q8-Bfsg3uOikUp8nRpyhtYosETf_XEGhoJj4AlXTaOeuhPuAg6qvKen7AdHNKjniVzWSqHn8O6pP6tcBO9LUUgAM_iRT_WzDdGmc5YDAoz5zjXYrMaaRS1s6WOnB-0QRss0yA5SIKc6NenqL1QndkKXx08-CvDS4wDQYhB0ExI6cmeLv0OgTBkWUDDzrEkdLnm8fe5dR9WGSv87ilSHxonJphmYw";window.open(e,"_blank")}}};n("446d");const D=b()(F,[["render",U]]);var E=D,K={name:"Home",components:{About:E}};n("066c");const B=b()(K,[["render",z]]);var I=B,Q={name:"Home",components:{Hero:x,First:I}};n("1267");const V=b()(Q,[["render",y]]);var q=V,N={class:"principalHome"},R={class:"first_content"},X=Object(o["g"])(" TAKE A LOOK AT "),G=Object(o["g"])(" Projects ");function Y(e,t,n,r,a,c){var i=Object(o["y"])("Title"),s=Object(o["y"])("Hero");return Object(o["r"])(),Object(o["d"])("section",N,[Object(o["h"])(s,null,{heroside:Object(o["C"])((function(){return[Object(o["e"])("div",R,[Object(o["h"])(i,null,{title:Object(o["C"])((function(){return[X]})),subtitle:Object(o["C"])((function(){return[G]})),_:1})])]})),_:1})])}var L={class:"home_description"};function W(e,t,n,r,a,c){return Object(o["r"])(),Object(o["d"])("section",L,[Object(o["e"])("h3",null,[Object(o["x"])(e.$slots,"title")]),Object(o["e"])("h2",null,[Object(o["x"])(e.$slots,"subtitle")])])}var Z={name:"Title",components:{}};n("b0fd");const $=b()(Z,[["render",W]]);var ee=$,te={name:"Home",components:{Hero:x,Title:ee}};n("4652");const ne=b()(te,[["render",Y]]);var oe=ne,re=[{path:"/",name:"Home",component:q},{path:"/portfolio",name:"Portfolio",component:oe}],ae=re,ce=new j["a"]({history:Object(j["b"])(),routes:ae}),ie=ce,se=(n("0fae"),Object(o["c"])(O));se.use(ie),se.mount("#app")},"5d1f":function(e,t,n){"use strict";n("ce6f")},6543:function(e,t,n){},"98fd":function(e,t,n){},b0fd:function(e,t,n){"use strict";n("0a85")},bfef:function(e,t,n){"use strict";n("c11f")},c11f:function(e,t,n){},ce6f:function(e,t,n){},d67d:function(e,t,n){},e67b:function(e,t,n){}});
//# sourceMappingURL=app.9fe8ed1f.js.map