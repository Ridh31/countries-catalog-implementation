(function(){"use strict";var e={7433:function(e,t,n){var s=n(3751),a=n(641);const l={class:"flex justify-center items-center bg-white p-5 shadow-md sticky top-0 z-30"},o=(0,a.Lk)("svg",{class:"w-4 h-4",viewBox:"0 0 24 24","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:cc":"http://creativecommons.org/ns#","xmlns:dc":"http://purl.org/dc/elements/1.1/"},[(0,a.Lk)("g",{transform:"translate(0 -1028.4)"},[(0,a.Lk)("rect",{height:"5.9999",width:"3",y:"1031.4",x:"17",fill:"#c0392b"}),(0,a.Lk)("path",{d:"m12 3.0312l-9 8.9688v1.812 5.376 1.812h1 8 8 1v-1.812-5.376-1.812l-9-8.9688z",transform:"translate(0 1028.4)",fill:"#bdc3c7"}),(0,a.Lk)("path",{fill:"#95a5a6",d:"m12 1032-9 8.9v1.9 0.1l9-9 9 9v-0.1-1.9l-9-8.9z"}),(0,a.Lk)("g",null,[(0,a.Lk)("path",{d:"m12 1029.4-11.314 11.3 1.4145 1.4 9.8995-9.9 9.899 9.9 1.415-1.4-11.314-11.3z",fill:"#e74c3c"}),(0,a.Lk)("path",{d:"m14 9a2 2 0 1 1 -4 0 2 2 0 1 1 4 0z",transform:"translate(0 1029.4)",fill:"#3498db"}),(0,a.Lk)("rect",{height:"6",width:"4",y:"1043.4",x:"10",fill:"#e67e22"}),(0,a.Lk)("path",{d:"m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z",transform:"translate(1.5 1029.4)",fill:"#d35400"}),(0,a.Lk)("path",{d:"m12 1036.4c-1.105 0-2 0.9-2 2 0 0.1 0.021 0.3 0.062 0.5 0.222-0.9 1.006-1.5 1.938-1.5s1.716 0.6 1.938 1.5c0.041-0.2 0.062-0.4 0.062-0.5 0-1.1-0.895-2-2-2z",fill:"#2980b9"}),(0,a.Lk)("path",{d:"m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z",transform:"translate(1.5 1028.9)",fill:"#f1c40f"}),(0,a.Lk)("rect",{height:"1",width:"4",y:"1042.4",x:"10",fill:"#d35400"})])])],-1),i=(0,a.Lk)("span",null,"Home",-1),r=(0,a.Lk)("svg",{class:"w-4 h-4 icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{d:"M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z",fill:"#2196F3"}),(0,a.Lk)("path",{d:"M469.333333 426.666667h85.333334v234.666666h-85.333334z",fill:"#FFFFFF"}),(0,a.Lk)("path",{d:"M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z",fill:"#FFFFFF"})],-1),c=(0,a.Lk)("span",null,"About",-1);function d(e,t){const n=(0,a.g2)("router-link"),s=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",l,[(0,a.bF)(n,{to:"/",class:"flex justify-center items-center gap-1 font-bold px-2 hover:text-orange-400 transition delay-75"},{default:(0,a.k6)((()=>[o,i])),_:1}),(0,a.bF)(n,{to:"/about",class:"flex justify-center items-center gap-1 font-bold px-2 hover:text-blue-400 transition delay-75"},{default:(0,a.k6)((()=>[r,c])),_:1})]),(0,a.bF)(s)],64)}var p=n(6262);const u={},f=(0,p.A)(u,[["render",d]]);var m=f,g=n(5220);const v={class:"bg-gray-100 overflow-hidden"},h={class:"flex justify-center items-center"};function x(e,t,n,s,l,o){const i=(0,a.g2)("AppHeader"),r=(0,a.g2)("AppContent");return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("div",h,[(0,a.bF)(i),(0,a.bF)(r)])])}var k=n(33);const b={class:""};function w(e,t,n,s,l,o){return(0,a.uX)(),(0,a.CE)("div",b,[(0,a.Lk)("h1",null,(0,k.v_)(n.msg),1)])}var L={name:"AppHeader",props:{msg:String}};const y=(0,p.A)(L,[["render",w]]);var C=y;n(9479);const j={id:"country-catalog",class:"flex justify-center items-start bg-gray-100 p-5 overflow-auto"},F={class:"flex flex-col gap-5"},_=(0,a.Fv)('<div class="grid grid-cols-1 md:grid-cols-2 gap-5"><div class="flex justify-start items-center"><input type="text" placeholder="Search..." id="search-bar" class="focus:outline-none max-w-xl w-full p-3 shadow-md rounded-md"></div><div class="flex justify-end items-center"><select name="" id="" class="focus:outline-none max-w-sm w-52 md:w-full p-3 shadow-md rounded-md"><option value="" selected disabled>Sort (Country name)</option><option value="asc">Asending</option><option value="desc">Decending</option></select></div></div>',1),A={class:"pagination hidden",role:"navigation","aria-label":"pagination"},E={class:"pagination-list"},O=(0,a.Lk)("a",{class:"pagination-link"},null,-1),M=["onClick"],S={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5"},z=["onClick"],P={class:"select-none border border-gray-200 flex-shrink-0 rounded-sm"},X=["src","alt"],T={class:"flex gap-1 text-start"},N=(0,a.Lk)("span",{class:"select-none font-semibold text-sm whitespace-nowrap"},"Official Name: ",-1),H={class:"text-red-400 line-clamp-1 text-sm"},B={class:"flex gap-1 text-start"},I=(0,a.Lk)("span",{class:"select-none font-semibold text-sm whitespace-nowrap"},"CCA2: ",-1),K={class:"bg-blue-200 px-3 py-0.5 text-sm rounded-xl"},D={class:"flex gap-1 text-start"},R=(0,a.Lk)("span",{class:"select-none font-semibold text-sm whitespace-nowrap"},"CCA3: ",-1),V={class:"bg-green-200 px-3 py-0.5 text-sm rounded-xl"},q={class:"flex gap-1 text-start"},G=(0,a.Lk)("span",{class:"select-none font-semibold text-sm whitespace-nowrap"},"Native name: ",-1),Q={class:"flex gap-1 text-start"},Z=(0,a.Lk)("span",{class:"select-none font-semibold text-sm whitespace-nowrap"},"ALT Spellings: ",-1),$={class:"line-clamp-1 text-sm"},J={class:"flex gap-1 text-start"},U=(0,a.Lk)("span",{class:"select-none font-semibold text-sm"},"IDD: ",-1),W={class:"bg-gray-200 px-3 py-0.5 rounded-xl"},Y={class:"flex bg-gray-200 ml-1 px-3 py-0.5 rounded-xl"},ee={class:"line-clamp-1 text-sm"},te={class:"fixed z-10 overflow-y-auto top-auto w-full left-0 hidden",id:"modal"},ne={class:"flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"},se=(0,a.Lk)("div",{class:"fixed inset-0 transition-opacity"},[(0,a.Lk)("div",{class:"absolute inset-0 bg-gray-900 opacity-75"})],-1),ae=(0,a.Lk)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​",-1),le={class:"inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},oe={class:"grid grid-cols-2 border-b border-gray-300 p-5"},ie=(0,a.Lk)("div",{class:"flex justify-start items-center font-bold text-sm text-gray-800"},"Country",-1),re=(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[(0,a.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})],-1),ce=[re],de={class:"flex flex-col gap-3 p-5"},pe={class:"flex gap-1 text-start text-xs"},ue=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"Name: ",-1),fe={class:"flex gap-1 text-start text-xs"},me=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"CCA2: ",-1),ge={class:"flex gap-1 text-start text-xs"},ve=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"CCA3: ",-1),he={class:"flex gap-1 text-start text-xs"},xe=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"CCA2: ",-1),ke={class:"flex gap-1 text-start text-xs"},be=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"Languages: ",-1),we={class:"flex gap-1 text-start text-xs"},Le=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"Region: ",-1),ye={class:"flex gap-1 text-start text-xs"},Ce=(0,a.Lk)("span",{class:"select-none font-semibold whitespace-nowrap"},"Region: ",-1);function je(e,t,n,s,l,o){return(0,a.uX)(),(0,a.CE)("div",j,[(0,a.Lk)("div",F,[_,(0,a.Lk)("nav",A,[(0,a.Lk)("ul",E,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(Math.ceil(l.countries.length/l.perPage),(e=>((0,a.uX)(),(0,a.CE)("li",{key:e},[O,(0,a.Lk)("a",{class:(0,k.C4)(["pagination-link",{"font-bold":l.paginate==e}]),onClick:t=>l.paginate=e},(0,k.v_)(e),11,M)])))),128))])]),(0,a.Lk)("ul",S,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.countries,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:e,onClick:e=>o.displayModal(t),class:"flex flex-col gap-3 hover:border-2 hover:border-sky-300 bg-white p-5 shadow-md rounded-md cursor-pointer hover:scale-105 transition delay-75"},[(0,a.Lk)("div",P,[(0,a.Lk)("img",{class:"object-cover h-48 w-full",src:e.flags.png??"",alt:e.name.common??""},null,8,X)]),(0,a.Lk)("div",T,[N,(0,a.Lk)("span",H,(0,k.v_)(e.name.official??""),1)]),(0,a.Lk)("div",B,[I,(0,a.Lk)("span",K,(0,k.v_)(e.cca2??""),1)]),(0,a.Lk)("div",D,[R,(0,a.Lk)("span",V,(0,k.v_)(e.cca3??""),1)]),(0,a.Lk)("div",q,[G,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.name.nativeName,(e=>((0,a.uX)(),(0,a.CE)("span",{key:e,class:"line-clamp-1 text-sm"},(0,k.v_)(e.official??""),1)))),128))]),(0,a.Lk)("div",Q,[Z,(0,a.Lk)("span",$,(0,k.v_)(e.altSpellings.join(", ")??""),1)]),(0,a.Lk)("div",J,[U,(0,a.Lk)("span",W,(0,k.v_)(e.idd.root??""),1),(0,a.Lk)("span",Y,[(0,a.Lk)("span",ee,(0,k.v_)(String(e.idd.suffixes).split(",").join(", ")??""),1)])])],8,z)))),128))]),(0,a.Lk)("div",te,[(0,a.Lk)("div",ne,[se,ae,(0,a.Lk)("div",le,[(0,a.Lk)("div",oe,[ie,(0,a.Lk)("div",{class:"flex justify-end items-center cursor-pointer hover:text-red-500",onClick:t[0]||(t[0]=(...e)=>o.toggleModal&&o.toggleModal(...e))},ce)]),(0,a.Lk)("div",de,[(0,a.Lk)("div",pe,[ue,(0,a.Lk)("span",null,(0,k.v_)(l.details.name??""),1)]),(0,a.Lk)("div",fe,[me,(0,a.Lk)("span",null,(0,k.v_)(l.details.cca2??""),1)]),(0,a.Lk)("div",ge,[ve,(0,a.Lk)("span",null,(0,k.v_)(l.details.cca3??""),1)]),(0,a.Lk)("div",he,[xe,(0,a.Lk)("span",null,(0,k.v_)(l.details.ccn3??""),1)]),(0,a.Lk)("div",ke,[be,(0,a.Lk)("span",null,(0,k.v_)(l.details.languages??""),1)]),(0,a.Lk)("div",we,[Le,(0,a.Lk)("span",null,(0,k.v_)(l.details.region??""),1)]),(0,a.Lk)("div",ye,[Ce,(0,a.Lk)("span",null,(0,k.v_)(l.details.currencies??""),1)])])])])])])])}var Fe={name:"AppContent",props:{msg:String},data(){return{country:[],countries:[],paginate:1,perPage:25,pages:[],details:{}}},methods:{fetchCountries(){fetch("https://restcountries.com/v3.1/all",{method:"GET"}).then((e=>{var t=e.json();return t})).then((e=>{this.countries=e;const t=this.perPage*(this.paginate-1),n=t+this.perPage;return this.country=e.slice(t,n),this.country})).catch((e=>{console.error(e)}))},displayModal(e){this.toggleModal(),this.details=this.countries[e]},toggleModal(){document.getElementById("modal").classList.toggle("hidden")}},mounted(){this.fetchCountries()}};const _e=(0,p.A)(Fe,[["render",je]]);var Ae=_e,Ee={name:"HomeView",components:{AppHeader:C,AppContent:Ae}};const Oe=(0,p.A)(Ee,[["render",x]]);var Me=Oe;const Se=[{path:"/",name:"home",component:Me},{path:"/about",name:"about",component:()=>n.e(839).then(n.bind(n,4839))}],ze=(0,g.aE)({history:(0,g.LA)("/countries-catalog-implementation/"),routes:Se});var Pe=ze;window.$=window.jQuery=n(4692),(0,s.Ef)(m).use(Pe).mount("#app")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,l){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],l=e[d][2];for(var i=!0,r=0;r<s.length;r++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](s[r])}))?s.splice(r--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[s,a,l]}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".df9f895a.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="countries-catalog-implementation:";n.l=function(s,a,l,o){if(e[s])e[s].push(a);else{var i,r;if(void 0!==l)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==s||p.getAttribute("data-webpack")==t+l){i=p;break}}i||(r=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+l),i.src=s),e[s]=[a];var u=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var a=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),r&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/countries-catalog-implementation/"}(),function(){var e={524:0};n.f.j=function(t,s){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)s.push(a[2]);else{var l=new Promise((function(n,s){a=e[t]=[n,s]}));s.push(a[2]=l);var o=n.p+n.u(t),i=new Error,r=function(s){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var l=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+o+")",i.name="ChunkLoadError",i.type=l,i.request=o,a[1](i)}};n.l(o,r,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,l,o=s[0],i=s[1],r=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(r)var d=r(n)}for(t&&t(s);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},s=self["webpackChunkcountries_catalog_implementation"]=self["webpackChunkcountries_catalog_implementation"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(7433)}));s=n.O(s)})();
//# sourceMappingURL=app.994f5255.js.map