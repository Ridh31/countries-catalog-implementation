(function(){"use strict";var e={672:function(e,t,n){var o=n(3751),r=n(641);const a={class:"flex justify-center items-center bg-white p-5 shadow-md sticky top-0 z-30"},s=(0,r.Lk)("svg",{class:"w-4 h-4",viewBox:"0 0 24 24","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:cc":"http://creativecommons.org/ns#","xmlns:dc":"http://purl.org/dc/elements/1.1/"},[(0,r.Lk)("g",{transform:"translate(0 -1028.4)"},[(0,r.Lk)("rect",{height:"5.9999",width:"3",y:"1031.4",x:"17",fill:"#c0392b"}),(0,r.Lk)("path",{d:"m12 3.0312l-9 8.9688v1.812 5.376 1.812h1 8 8 1v-1.812-5.376-1.812l-9-8.9688z",transform:"translate(0 1028.4)",fill:"#bdc3c7"}),(0,r.Lk)("path",{fill:"#95a5a6",d:"m12 1032-9 8.9v1.9 0.1l9-9 9 9v-0.1-1.9l-9-8.9z"}),(0,r.Lk)("g",null,[(0,r.Lk)("path",{d:"m12 1029.4-11.314 11.3 1.4145 1.4 9.8995-9.9 9.899 9.9 1.415-1.4-11.314-11.3z",fill:"#e74c3c"}),(0,r.Lk)("path",{d:"m14 9a2 2 0 1 1 -4 0 2 2 0 1 1 4 0z",transform:"translate(0 1029.4)",fill:"#3498db"}),(0,r.Lk)("rect",{height:"6",width:"4",y:"1043.4",x:"10",fill:"#e67e22"}),(0,r.Lk)("path",{d:"m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z",transform:"translate(1.5 1029.4)",fill:"#d35400"}),(0,r.Lk)("path",{d:"m12 1036.4c-1.105 0-2 0.9-2 2 0 0.1 0.021 0.3 0.062 0.5 0.222-0.9 1.006-1.5 1.938-1.5s1.716 0.6 1.938 1.5c0.041-0.2 0.062-0.4 0.062-0.5 0-1.1-0.895-2-2-2z",fill:"#2980b9"}),(0,r.Lk)("path",{d:"m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z",transform:"translate(1.5 1028.9)",fill:"#f1c40f"}),(0,r.Lk)("rect",{height:"1",width:"4",y:"1042.4",x:"10",fill:"#d35400"})])])],-1),l=(0,r.Lk)("span",null,"Home",-1),i=(0,r.Lk)("svg",{class:"w-4 h-4 icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[(0,r.Lk)("path",{d:"M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z",fill:"#2196F3"}),(0,r.Lk)("path",{d:"M469.333333 426.666667h85.333334v234.666666h-85.333334z",fill:"#FFFFFF"}),(0,r.Lk)("path",{d:"M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z",fill:"#FFFFFF"})],-1),c=(0,r.Lk)("span",null,"About",-1);function u(e,t){const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",a,[(0,r.bF)(n,{to:"/",class:"flex justify-center items-center gap-1 font-bold px-2 hover:text-orange-400 transition delay-75"},{default:(0,r.k6)((()=>[s,l])),_:1}),(0,r.bF)(n,{to:"/about",class:"flex justify-center items-center gap-1 font-bold px-2 hover:text-blue-400 transition delay-75"},{default:(0,r.k6)((()=>[i,c])),_:1})]),(0,r.bF)(o)],64)}var d=n(6262);const p={},f=(0,d.A)(p,[["render",u]]);var m=f,h=n(5220);const v={class:"h-screen bg-gray-100 overflow-hidden"},g={class:"flex justify-center items-center"};function b(e,t,n,o,a,s){const l=(0,r.g2)("AppHeader"),i=(0,r.g2)("AppContent");return(0,r.uX)(),(0,r.CE)("div",v,[(0,r.Lk)("div",g,[(0,r.bF)(l),(0,r.bF)(i)])])}var k=n(33);const w={class:""};function x(e,t,n,o,a,s){return(0,r.uX)(),(0,r.CE)("div",w,[(0,r.Lk)("h1",null,(0,k.v_)(n.msg),1)])}var y={name:"AppHeader",props:{msg:String}};const L=(0,d.A)(y,[["render",x]]);var j=L;n(9479);const C={id:"country-catalog",class:"h-screen flex justify-center items-start bg-gray-100 p-5"},F={class:"flex flex-col gap-5"},A=(0,r.Fv)('<div class="grid grid-cols-1 md:grid-cols-2 gap-5"><div class="flex justify-start items-center"><input type="text" placeholder="Search..." id="search-bar" class="focus:outline-none max-w-xl w-full p-3 shadow-md rounded-md"></div><div class="flex justify-end items-center"><select name="" id="" class="focus:outline-none max-w-sm w-52 md:w-full p-3 shadow-md rounded-md"><option value="" selected disabled>Sort (Country name)</option><option value="asc">Asending</option><option value="desc">Decending</option></select></div></div>',1),E={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5"},_={class:"select-none border border-gray-200 flex-shrink-0 rounded-sm hover:scale-95 transition delay-75"},O=["src","alt"],S={class:"flex gap-1 text-start"},z=(0,r.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"Official Name: ",-1),P={class:"text-red-400 line-clamp-1"},T={class:"flex gap-1 text-start"},X=(0,r.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"CCA2: ",-1),H={class:"bg-blue-200 px-3 py-0.5 rounded-xl"},M={class:"flex gap-1 text-start"},N=(0,r.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"CCA3: ",-1),B={class:"bg-green-200 px-3 py-0.5 rounded-xl"},D={class:"flex gap-1 text-start"},I=(0,r.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"Native name: ",-1),K={class:"flex gap-1 text-start"},V=(0,r.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"ALT Spellings: ",-1),q={class:"line-clamp-1"},G={class:"flex gap-1 text-start"},Q=(0,r.Lk)("span",{class:"select-none font-semibold"},"IDD: ",-1),Z={class:"bg-gray-200 px-3 py-0.5 rounded-xl"},$={class:"flex bg-gray-200 ml-1 px-3 py-0.5 rounded-xl line-clamp-1"};function J(e,t,n,o,a,s){return(0,r.uX)(),(0,r.CE)("div",C,[(0,r.Lk)("div",F,[A,(0,r.Lk)("ul",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.countries,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e,class:"flex flex-col gap-3 bg-gradient-to-r from-white hover:from-blue-100 to-white hover:to-cyan-100 p-5 shadow-md rounded-md cursor-pointer hover:scale-105 transition delay-75"},[(0,r.Lk)("div",_,[(0,r.Lk)("img",{class:"object-cover h-48 w-full",src:e.flags.png??"",alt:e.name.common??""},null,8,O)]),(0,r.Lk)("div",S,[z,(0,r.Lk)("span",P,(0,k.v_)(e.name.official??""),1)]),(0,r.Lk)("div",T,[X,(0,r.Lk)("span",H,(0,k.v_)(e.cca2??""),1)]),(0,r.Lk)("div",M,[N,(0,r.Lk)("span",B,(0,k.v_)(e.cca3??""),1)]),(0,r.Lk)("div",D,[I,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.name.nativeName,(e=>((0,r.uX)(),(0,r.CE)("span",{key:e,class:"line-clamp-1"},(0,k.v_)(e.official??""),1)))),128))]),(0,r.Lk)("div",K,[V,(0,r.Lk)("span",q,(0,k.v_)(e.altSpellings.join(", ")??""),1)]),(0,r.Lk)("div",G,[Q,(0,r.Lk)("span",Z,(0,k.v_)(e.idd.root??""),1),(0,r.Lk)("span",$,(0,k.v_)(String(e.idd.suffixes).split(",").join(", ")??""),1)])])))),128))])])])}n(4114);var R={name:"AppContent",props:{msg:String},data(){return{countries:[],page:1,perPage:25,pages:[]}},methods:{fetchCountries(){fetch("https://restcountries.com/v3.1/all",{method:"GET"}).then((e=>{var t=e.json();return t})).then((e=>{this.countries=e})).catch((e=>{console.error(e)}))},setPages(){let e=Math.ceil(this.posts.length/this.perPage);for(let t=1;t<=e;t++)this.pages.push(t)}},mounted(){this.fetchCountries()}};const U=(0,d.A)(R,[["render",J]]);var W=U,Y={name:"HomeView",components:{AppHeader:j,AppContent:W}};const ee=(0,d.A)(Y,[["render",b]]);var te=ee;const ne=[{path:"/",name:"home",component:te},{path:"/about",name:"about",component:()=>n.e(839).then(n.bind(n,4839))}],oe=(0,h.aE)({history:(0,h.LA)("/counties-catalog-implementation/"),routes:ne});var re=oe;window.$=window.jQuery=n(4692),(0,o.Ef)(m).use(re).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".df9f895a.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="countries-catalog-implementation:";n.l=function(o,r,a,s){if(e[o])e[o].push(r);else{var l,i;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/counties-catalog-implementation/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(t),l=new Error,i=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,r[1](l)}};n.l(s,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],l=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var u=i(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkcountries_catalog_implementation"]=self["webpackChunkcountries_catalog_implementation"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(672)}));o=n.O(o)})();
//# sourceMappingURL=app.eea87dff.js.map