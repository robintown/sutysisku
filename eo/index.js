"use strict";var e=document.getElementById("content"),t=document.getElementById("ciska"),n=document.getElementById("clear"),a=document.getElementById("outp"),r=document.getElementById("descr"),i=document.getElementById("drata"),c=document.getElementById("citri"),s=document.getElementById("sidju"),o=document.getElementById("kernelo_lo_cpacu"),l=new Worker("worker.js?sisku=1591861353146"),u=document.querySelector("#title > font"),d=document.querySelector("#site-title"),p=!1,g=3500;d.classList.add("desktop-mode-title-color");var m=document.getElementById("galtu-dasri"),f=document.getElementById("catni"),h=document.getElementById("cnano"),v=document.getElementById("rimni"),y=document.querySelectorAll("#title > img"),k=document.getElementById("scrollToTop");function switchBorderScroll(){e.scrollTop>200?e.scrollTop=0:e.scrollTop=e.scrollHeight}e.onscroll=function(){e.scrollTop>200?(k.style.display="block",k.classList.remove("dizlo")):k.classList.add("dizlo")};var w,b,E,L={BE:"bei",BEI:"be'o",BY:"boi",COI:"do'u",DOI:"do'u",FIhO:"fe'u",FUhE:"fu'o",GIhA:"vau",GOI:"ge'u",JOhI:"te'u",KE:"ke'e",LAhE:"lu'u",LA:"ku",LE:"ku",LI:"lo'o",LOhU:"le'u",LU:"li'u",ME:"me'u","NAhE+BO":"lu'u",NOI:"ku'o",NUhI:"nu'u",NU:"kei",PA:"boi",PEhO:"ku'e",SEI:"se'u",SOI:"se'u",TO:"toi",TUhE:"tu'u",VEI:"ve'o",LOhAI:"sa'ai",SAhAI:"le'ai",LOhOI:"ku'au",NAhU:"te'u",NIhE:"te'u",MOhE:"te'u"},q=[],x=function(e,t){clearTimeout(E),E=setTimeout(e,t)},I={searching:{seskari:"cnano",query:""},displaying:{seskari:"cnano",query:""},citri:[]};function C(){I.citri.length>0&&(c.innerHTML=" ".concat(window.purc).concat(I.citri.filter((function(e){return"velcusku"!==e.seskari})).map((function(e){var t=e.seskari,n=e.query;return'<a class="a-'.concat(t,'" href="#seskari=').concat(t,"&sisku=").concat(be(n),'">').concat(Le(n),"</a>")})).join(", ")))}function S(e,t){var n=["velcusku","arxivo","cnano","rimni","catni"];n.includes(e)||(e="cnano"),m.className="kampu-dasri ".concat(e,"-dasri noselect"),d.classList.add("".concat(e,"-search-mode-title-color")),d.classList.remove("desktop-mode-title-color"),document.getElementById(e)&&document.getElementById(e).classList.add("".concat(e,"-tutci-hover"),"tutci-hover"),n.map((function(t){t!==e&&(d.classList.remove("".concat(t,"-search-mode-title-color")),document.getElementById(t)&&document.getElementById(t).classList.remove("".concat(t,"-tutci-hover"),"tutci-hover"))}));for(var a=0;a<y.length;a++)y[a].style.filter=t}function j(e){var a=e.action;if("complete"===document.readyState){var r=["logo"];"start"===a?(r.map((function(e){document.getElementById(e).classList.remove("stopRotate"),document.getElementById(e).classList.add("rotate")})),n.classList.add("pulsate-css"),setTimeout((function(){n.classList.contains("pulsate-css")&&t.classList.add("granim-css")}),500)):(r.map((function(e){document.getElementById(e).classList.add("stopRotate")})),t.classList.remove("granim-css"),n.classList.remove("pulsate-css"))}}function _(){Ie&&Ie.open()}function A(){MathJax.typesetPromise().then((function(){B(!0)}))}function T(t){var n=t.query,c=t.seskari;switch(N(),window.jimte="velcusku"===c?201:30,w=0,j({action:"stop"}),a.innerHTML="",qe({query:n,seskari:c}),I.displaying.query=n,I.displaying.seskari=c,a.style.display="block",r.style.display="none",i.style.display="none",s.style.display="flex",e.scrollTop=0,I.displaying.seskari){case"rimni":A(),S("rimni","sepia(1.0)");break;case"arxivo":S("arxivo","none");break;case"velcusku":S("velcusku","none");break;case"catni":A(),S("catni","none");break;case"cnano":default:A(),S("cnano","none")}x((function(){Z(),ga("send","pageview","#sisku/".concat(I.displaying.query));var e={dl:window.location.href,dt:document.title,dr:document.referrer,dp:"#sisku/".concat(I.displaying.query),dh:"".concat(window.location.protocol,"//").concat(window.location.hostname),z:Math.round(1e12*Math.random())};xe&&xe.emit("sisku",e)}),2e3)}function N(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){e.parentNode.removeChild(e)}))}function O(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){document.querySelector("#content").appendChild(e)}))}function B(e){N(),M(!e),ee=setTimeout((function(){if(!0!==e){var t=document.getElementsByClassName("jvo_plumber");p=!p;for(var n=0;n<t.length;n++){var a=t[n];a.value=ve(),p?a.classList.add("tutci-hover"):a.classList.remove("tutci-hover")}}if(p){var r=Array.from(document.querySelectorAll("[data-arr]")),i=function(){var e=r[n];if(e.attributes["data-head"]&&"1"!==e.attributes["data-head"].nodeValue)return"continue";var t=e.id,a=e.attributes["data-arr"].nodeValue.split(","),i=e.id.split("_").slice(0,-1),c=H(e);r.filter((function(e){var n=e.id.split("_").slice(0,-2),r=e.attributes["data-arr"].nodeValue.split(","),s=r[0].split(/(?=[0-9]+)/);if(1===r.length&&n.length===i.length&&n.join("_")===i.join("_")&&a.filter((function(e){var t=e.split(/(?=[0-9])/);return 0===s[0].indexOf(t[0])&&s[1]===t[1]})).length>0&&(c||H(e))){var o=e.attributes["data-color"].nodeValue;o="hsla(".concat(o,",100%,70%,0.62)"),new LeaderLine(document.getElementById(e.id),document.getElementById(t),{endPlugColor:o,color:o,dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}})),O()};for(n=0;n<r.length;n++)i()}}),!0===e?450:0)}function M(e){N(),X=setTimeout((function(){for(var e=document.querySelectorAll("[data-target]"),t=0;t<e.length;t++){var n=e[t];if(H(n)){var a=n.id,r=n.attributes["data-target"].nodeValue;new LeaderLine(document.getElementById(r),document.getElementById(a),{endPlugColor:"rgba(255, 120, 0, 0.33)",color:"rgba(255, 120, 0, 0.33)",dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}}O(),g=450}),e?0:g)}function H(e){var t=e.getBoundingClientRect();return t=t.top>=48&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function z(e){var t={},n="";n=0===e.search(/^#sisku\//)?[e.replace(/#sisku\/(.*)/,"sisku=$1")]:("#"===e[0]?e.substr(1):e).split("&");for(var a=0;a<n.length;a++){var r=n[a].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1].replace(/[\+]/g," ")||"")}return t}function $(e){var t=e.href,n=e.replace;t&&(t=t.substring(t.indexOf("#")+1),localStorage.setItem("url","#".concat(t)));var a,r=z(t||window.location.hash);if(r.sisku)a=Ee(r.sisku).trim();else{if(t=(t=t||window.location.search).substring(t.indexOf("?")+1),!(a=Ee(new URLSearchParams(t).get("focus")).trim()))return;r={sisku:a,seskari:"cnano"}}I.searching.seskari===r.seskari&&I.searching.query===a||(r.seskari&&["velcusku","cnano","catni","rimni","arxivo"].includes(r.seskari)&&(I.searching.seskari=r.seskari),r.sisku&&(I.searching.query=a,G({replace:n})))}function J(e){var t=e.target;if("A"===t.nodeName){var n=t;if(n.ctrlKey||n.metaKey)return;$({replace:!1,href:n.getAttribute("href")})}}function R(e){var t=e.replace,n="".concat(window.location.href.split("?")[0].split("#")[0],"#seskari=").concat(I.searching.seskari,"&sisku=").concat(be(I.searching.query));""===I.searching.query?(n="",document.title="la sutysisku"):document.title="".concat(I.searching.query," - la sutysisku");var a=localStorage.getItem("url")||"";!0===t?window.history.replaceState({},null,n):window.location.hash!==n&&a!==n&&window.history.pushState({},null,n),localStorage.setItem("url",n)}function U(){I.searching.query=we(t.value),G({caller:"GetCiskaAndDispatch"})}function P(e){clearTimeout(b),b=setTimeout(U,e||250)}function D(){I.searching.query=we(t.value),G({})}function V(){G({empty:!0})}function Z(){if(""!==I.displaying.query&&"velcusku"!==I.displaying.seskari){var e=0;for(e=0;e<I.citri.length;e++)if(I.citri[e].query===I.displaying.query&&I.citri[e].seskari===I.displaying.seskari){I.citri.splice(e,1);break}I.citri.unshift(JSON.parse(JSON.stringify(I.displaying))),I.citri.length>10&&(I.citri.length=10),localStorage.setItem("citri",JSON.stringify(I.citri)),C()}}function G(e){var n=e.replace,a=e.caller,r=e.empty;if(Ie&&Ie.close(),I.searching.query=I.searching.query.trim(),R({replace:n}),localStorage.setItem("tcini",JSON.stringify(I.searching)),1==r)return I.searching.query="",W();if("velcusku"!==I.searching.seskari){if(""===I.searching.query)return W();if(JSON.stringify(I.searching)===JSON.stringify(I.displaying))return}switch(t.value=I.searching.query,j({action:"start"}),"GetCiskaAndDispatch"===a&&"velcusku"===I.searching.seskari&&(I.searching.seskari="cnano"),I.searching.seskari){case"arxivo":var i=JSON.parse(JSON.stringify(I.searching));"^"!==I.searching.query.charAt(0)&&"$"!==I.searching.query.slice(-1)[0]&&(i.query="\\b".concat(I.searching.query,"\\b")),i.max=20,xe&&xe.emit("cpedu_fi_la_arxivo",i);break;case"velcusku":_();break;default:l.postMessage({kind:"newSearch",query:I.searching.query,seskari:I.searching.seskari})}}function W(){N(),j({action:"stop"}),e.scrollTop=0;var t=I.displaying.query;I.displaying.query="",d.classList.add("desktop-mode-title-color"),d.classList.remove("catni-search-mode-title-color","cnano-search-mode-title-color","velcusku-search-mode-title-color","rimni-search-mode-title-color","arxivo-search-mode-title-color"),f.classList.remove("catni-tutci-hover","tutci-hover");try{h.classList.remove("cnano-tutci-hover","tutci-hover")}catch(e){}v.classList.remove("rimni-tutci-hover","tutci-hover"),m.className="kampu-dasri cnano-dasri",a.style.display="none",r.style.display="block";var n={"@CLL":[".inglic.","Reference Grammar","../pixra/cll.png",1,"https://lojban.pw/cll/uncll-1.2.7/xhtml_section_chunks/"],"@lojban.pw":[".inglic.","Lojban-Chan","../pixra/jbotcan.svg",1,"https://lojban.pw"],muplis:[0,"la muplis","../pixra/taplamuplis.svg",2.1],jb:[0,"English - Lojban examples","../pixra/snime-1.svg",1],en:[0,"English-Lojban","../pixra/selsku_lanci_eng.svg",1],jbo:[0,"fanva fi le'e lojbo ri","../pixra/lanci_jbo.svg",1],ja:[0,'日本 - <span style="white-space:pre;">ロジバン</span>',"../pixra/selsku_lanci_jpn.svg",1],"fr-facile":[0,"français facile - lojban","../pixra/selsku_lanci_fra.svg",1],ru:[0,"русский - ложбан","../pixra/selsku_lanci_rus.svg",1],eo:[0,"Esperanto - Loĵbano","../pixra/lanci_epo.svg",1],es:[0,"español - lojban","../pixra/selsku_lanci_spa.svg",1],zh:[0,"中文 - 逻辑语","../pixra/selsku_lanci_zho.svg",1],"@CC":[".inglic.","The Crash Course","../pixra/cogwheel-5.svg",1,"https://mw.lojban.org/papri/The_Crash_Course_in_Lojban"]},c="";for(var s in n)0!==n[s][0]&&n[s][0]!==window.bangu||(c+="<div class='DIV_1' style='height:".concat(100,"px;width:").concat(100*n[s][3],"px;'><div class='DIV_2' style='height:").concat(100,"px;width:").concat(100*n[s][3],"px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>").concat(n[s][1],"</b></span><a").concat(0===(n[s][4]||"").indexOf("http")?" rel='noreferrer' target='_blank'":"",' aria-label="').concat(n[s][1].replace(/<[^>]+?>/g,""),'" href="').concat(0===s.indexOf("@")?n[s][4]:"https://la-lojban.github.io/sutysisku/".concat(s,"/#seskari=").concat(I.displaying.seskari,"&sisku=").concat(be(t)),"\" class='A_7'><div class='DIV_8' style='height:").concat(100,"px;width:").concat(100*n[s][3],'px;background-image:url("').concat(n[s][2],"\")'></div></a></div></div>"));i.innerHTML=c,i.style.display="block"}function F(e){var n=e.keyCode;n&&191===n&&t.focus()}function K(){e.setAttribute("style","height:".concat(Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;"))}function Y(e){var t=window.arrcll[e];return t||(t=window.arrcll[e.replace(/[^A-Z]+$/,"")]),t}function Q(e){var t=e.pre,n=e.valsi;if(!(!window.cll_url|0===(window.arrcll||[]).length)){if(t&&!n.match(/^[A-Zh]+[\+A-Zh0-9]*$/))return{};var a=Y(n);if(!a)return{};var r="".concat(window.cllnotci,"<ul class='uoldeliste'>").concat(Object.keys(a).map((function(e){return"<li><a rel='noreferrer' target='_blank' href=\"".concat(window.cll_url).concat(e,'">').concat(Le(a[e]),"</a></li>")})).join(""),"</ul>"),i=document.createElement("div");return i.className="".concat(t?"sidju":"definition"," cll noselect"),i.innerHTML=r,{secs:a,div:i}}}!function(){try{var e=JSON.parse(localStorage.getItem("tcini"));e.seskari&&(I.searching.seskari=e.seskari),e.query&&(I.searching.query=e.query)}catch(e){}try{I.citri=JSON.parse(localStorage.getItem("citri"))||[]}catch(e){}}(),C(),l.onmessage=function(e){var t=e.data;if("ready"==t.kind){document.title="la sutysisku";var n=document.getElementById("loading");n.parentNode.removeChild(n),$({replace:!0})}else if("searchResults"==t.kind){if(JSON.stringify(t.req)!==JSON.stringify(I.searching))return;if(JSON.stringify(t.req)===JSON.stringify(I.displaying))return;q=t.results||[],T({query:t.req.query,seskari:t.req.seskari})}else"loading"==t.kind?(document.getElementById("caho_cpacu").textContent=window.bangubuild,o.style.width="51%"):"progress"==t.kind&&(o.style.width="".concat(100*t.percent,"%"))},c.addEventListener("click",J),window.addEventListener("popstate",$),t.addEventListener("paste",P(0)),t.addEventListener("keyup",(function(){P()})),t.addEventListener("keydown",(function(){clearTimeout(b)})),t.addEventListener("input",P()),t.addEventListener("textInput",P()),t.addEventListener("focus",D),n.addEventListener("click",V),document.getElementById("title").addEventListener("click",V),document.getElementById("rimni").addEventListener("click",(function(){I.searching={seskari:"rimni",query:we(t.value)},G({replace:!1})})),document.getElementById("cnano").addEventListener("click",(function(){I.searching={seskari:"cnano",query:we(t.value)},G({replace:!1})})),document.getElementById("catni").addEventListener("click",(function(){I.searching={seskari:"catni",query:we(t.value)},G({replace:!1})})),window.addEventListener("resize",K,!0),e.addEventListener("scroll",te),K(),document.attachEvent?document.attachEvent("onkeyup",F):document.addEventListener("keyup",F),"loading"===document.readyState&&(o.style.width="37%",document.title="la sutysisku");var X=null,ee=null;function te(e){var t=e.target;N(),null!==X&&clearTimeout(X),null!==ee&&clearTimeout(ee),"velcusku"!==I.displaying.seskari&&t.scrollTop+window.innerHeight>=a.clientHeight-700?(window.jimte+=10,qe(I.displaying),MathJax.typesetPromise().then((function(){B(!0)}))):B(!0)}function ne(e,t,n){return e=e.replace(/[\{\}_]/g,""),Math.abs(Math.round(e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)%t/n)*n)}function ae(e){var t=(e=e.substr(1,e.length-2).split("=")).map((function(e){return e.replace(/[^A-Za-z']/g,"")}));return{jalge:t,hasExpansion:e.length>1||t[0]&&"x"!==t[0]}}function re(e){var t=e.v,n=e.fullDef,a=e.subtype,r=e.dataArrAdded,i=e.b,c=e.veljvoLs;return r.includes(i)||"r"!==a&&"lujvo"!==n.t?"":(t=(t=(t=t.substr(1,t.length-2).split("=").map((function(e){return"r"===a?n.w+e.replace(/[^0-9]/g,""):e.replace(/[^0-9A-Za-z']/g,"")}))).filter((function(e){var t=e.replace(/[0-9]/g,"");if(!(c.filter((function(e){return 0===e.indexOf(t)&&e!==t})).length>0))return!0}))).join(","),' data-arr="'.concat(t,'"'))}function ie(e){var t=e.def,n=e.fullDef,a=e.query,r=e.seskari,i=e.type,c=e.index,s=0,o=[],l=[],u=[],d=[],p=!1;["cnano","catni","rimni"].includes(r)||(r="cnano");var g=t.replace(/\$.*?\$/g,(function(e,t,n){if("d"===i&&void 0!==c){var a=ae(e);a.hasExpansion&&(p=!0),d=d.concat(a.jalge);var r=n.substr(t),s=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^\\(\\)<>]+?\\)).*")),o=e;0===r.search(s)&&(o=r.replace(s,"$1"));var u={};u[e]=o,l.push(u)}return e}));return{tergeha:"<span>".concat(g.replace(/\$.*?\$/g,(function(e,t,a){if("d"===i&&void 0!==c){var r=a.substr(t),p=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^()<>]+?\\)).*")),g=e;if(0===r.search(p))g=r.replace(p,"$1");else{var m=l.filter((function(t){return t[e]&&t[e]!==g}))[0];m&&(g=m[e])}s++;var f="".concat(c,"_").concat(s),h={};h[e]=f,o.push(h);var v=e.replace(/[^a-zA-Z0-9]/g,""),y="";(n&&n.rfs||[]).length&&(y=' data-head="1"');var k=re({subtype:""!==y?"d":"r",v:e,fullDef:n,dataArrAdded:u,b:v,veljvoLs:d});e='<span id="'.concat(f,'" class="terbricmi" style="background-color: hsl(').concat(ne(g,256,16),", 100%, 90%);border-radius:").concat(ne(g,9,1)+3,'px"').concat(k).concat(y,' data-color="').concat(ne(g,256,16),'">').concat(e,"</span>"),u.push(v)}return e})).replace(/(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,(function(e,t,n,a){if("d"===i){var r=o.filter((function(e){return e[a]!==n&&e[a]}));r[0]&&r[0][a]&&(e=e.replace(/^<span /,'<span data-target="'.concat(r[0][a],'" ')))}return e})).replace(/\$.*?\$/g,(function(e){return e.replace(/\{/g,"\\curlyleft").replace(/\}/g,"\\curlyright")})).replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(function(e){var t='</span><a href="'.concat(e,'" rel="noreferrer" target="_blank">').concat(se({def:e,query:a}),"</a><span>");return e.match(/^https?:\/\/.*\.(jpg|png)$/)&&(t+="<img class='se-tcidu-pixra' alt='secusku' src=\"".concat(e,'"/>\n')),t})).replace(/\{.*?\}/g,(function(e){e=e.substring(1,e.length-1);return'</span><a class="a-'.concat(r,'" href="#seskari=').concat(r,"&sisku=").concat(be(e),'">').concat(se({def:Le(e,!0),query:a}),"</a><span>")})).replace(/\$.*?\$/g,(function(e){return e.replace(/\\curlyleft/g,"{").replace(/\\curlyright/g,"}")})),"</span>").replace(/<span><\/span>/g,"").replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g,(function(e){return se({def:e,query:a})})),hasExpansion:p}}function ce(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function se(e){var t=e.def,n=e.query;if(!n||""===n)return t;var a="(".concat(ce(n).replace(/ /g,"|"),"|").concat(ce(n).replace(/'/g,"h").replace(/ /g,"|"),")"),r=new RegExp(a,"igm");return t.replace(r,"<span class='basna'>$1</span>")}var oe=60800,le="ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY";function ue(e){return e.replace(/\./g,"").replace(/^/,".").toLowerCase().replace(/([aeiou\.])u([aeiou])/g,"$1w$2").replace(/([aeiou\.])i([aeiou])/g,"$1ɩ$2").replace(/au/g,"ḁ").replace(/ai/g,"ą").replace(/ei/g,"ę").replace(/oi/g,"ǫ").replace(/\./g,"")}function de(e){return e.replace(/w/g,"u").replace(/ɩ/g,"i").replace(/ḁ/g,"au").replace(/ą/g,"ai").replace(/ę/g,"ei").replace(/ǫ/g,"oi")}function pe(e){var t=e.w,n=e.ot,a=e.rfs,r=ue(t);return n&&"vlaza'umei"===n?a.map((function(e){return pe(e)})).join(" "):(r=r.split(/(?=[ɩw])/).map((function(e){return de(e).split("").map((function(e){return ge(e)})).join("")})).join("")).replace(/,/g,"")}function ge(e){return e.codePointAt(0)>=60800?e:" "==e?" ":("h"!=e&&"H"!=e||(e="'"),le.includes(e)?String.fromCodePoint(oe+le.indexOf(e)):le.includes(e.toLowerCase())?String.fromCodePoint(oe+le.indexOf(e.toLowerCase())):"\n"==e?"\n":"\t"==e?"\t":e)}function me(e,t){for(var n,a=new RegExp(e,"g"),r=[];n=a.exec(t);)r.push(n.index);return r}function fe(e,t,n){return n.indexOf(e)===t}function he(e,t,n){var a=me(t,e);a=a.map((function(t){return(t=[t-n,t+n])[0]<0&&(t[0]=0),t[0]>=e.length&&(t[0]=e.length-1),t}));for(var r=0;r<a.length-1;r++)a[r][1]>a[r+1][0]&&(a[r][1]=a[r+1][1],a[r+1][0]=a[r][0]);if((a=a.map((function(e){return JSON.stringify(e)}))).length>0)a=(a=a.filter(fe).map((function(n){n=JSON.parse(n);var a=e.substr(n[0],n[1]-n[0]);return a=se({def:a,query:t}),n[0]>3&&(a="...".concat(a)),n[1]<e.length-4&&(a="".concat(a,"...")),a}))).join("<br/>");else{var i=e.substr(0,Math.min(100,e.length));i.length<e.length&&(i="".concat(i,"...")),a=i=se({def:i,query:t})}return a}function ve(){return p?"⇔":"↔"}function ye(e){var t=e.def,n=e.inner,a=e.query,r=e.seskari,i=e.index;a||(a=I.searching.query),r||(r=I.searching.seskari),t||(t=[]);var c=document.createElement("div");if(c.className=n?"terminner":"termouter",c.classList.add("term"),!n&&t.d&&t.d.nasezvafahi&&0===(t.rfs||[]).length&&(c.className="sidju cll noselect"),void 0!==L[t.s]){var s=document.createElement("h4");s.className="tfm",s.innerHTML='&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari='.concat(r,"&sisku=").concat(be(L[t.s]),'">').concat(Le(L[t.s]),"</a>]</sup></i>")}var o=[];for(var l in L)L[l]===t.w&&o.push('<a href="#seskari='.concat(r,"&sisku=").concat(be(l),'">').concat(Le(l),"</a>"));if(0!==o.length){var u=document.createElement("div");u.classList.add("valsi"),t.l&&u.classList.add("nalojbo"),u.innerHTML="<i><sup>[".concat(o.join(", "),"&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;")}if(t.s){var d;(d=document.createElement("a")).className="tutci klesi klesi-tutci";var g=se({def:Le(t.s),query:a});d.innerHTML=g,"velcusku"!==r&&(d.href="#seskari=".concat(r,"&sisku=").concat(be(t.s)))}if(t.t){var m;(m=document.createElement("a")).className="klesi link noselect";g=t.t;var f=be(t.w).replace(/_/g,"%20");m.href=window.judri?window.judri+f:"#seskari=".concat("catni"===r?"catni":"cnano","&sisku=").concat(f),window.judri&&(m.setAttribute("target","_blank"),m.setAttribute("rel","noreferrer")),window.xuzganalojudri&&!t.l&&(g="".concat(Le(t.t),"# "),t.d&&t.d.nasezvafahi&&(g="➕ ".concat(g))),m.innerHTML=g}t.date&&((m=document.createElement("div")).className="tutci klesi klesi-tutci",m.style.whiteSpace="nowrap",m.innerHTML=t.date);t.from&&((d=document.createElement("div")).className="tutci klesi klesi-tutci",d.innerHTML=t.from);var h=document.createElement("h4");h.classList.add("valsi"),h.setAttribute("data-valsi",encodeURIComponent(t.w)),t.l&&h.classList.add("nalojbo"),we(t.w)==a||"velcusku"==r?h.innerHTML="".concat(se({def:t.w,query:a})," "):h.innerHTML='<a class="valsi'.concat(t.l?"":" nalojbo",'" href="#seskari=').concat(r,"&sisku=").concat(be(t.w),'">').concat(se({def:Le(t.w,!0),query:a}),"</a> ");var v={};t.d&&!t.d.nasezvafahi&&(v=ie({def:t.d,fullDef:t,query:a,seskari:r,type:"d",index:i}));var y=document.createElement("h4");y.classList.add("valsi","zbalermorna"),y.textContent=pe(t);var k=document.createElement("heading");if(k.classList.add("heading"),u&&k.appendChild(u),k.appendChild(h),y&&t.w.length<=20&&!window.muplis&&k.appendChild(y),s&&k.appendChild(s),"lujvo"===t.t&&(t.rfs||[]).length>0&&v.hasExpansion){var w=document.createElement("input");w.type="button",w.classList.add("tutci","sance","jvo_plumber"),w.value=ve(),p?w.classList.add("tutci-hover"):w.classList.remove("tutci-hover"),w.onclick=B,k.appendChild(w)}var b=document.createElement("heading");b.style.flex=1,k.appendChild(b),m&&k.appendChild(m),d&&k.appendChild(d);try{var E=new Audio("/sutysisku/sance/vreji/".concat(ke(t.w),".mp3"));E.id="sance_".concat(ke(t.w)),E.addEventListener("canplaythrough",(function(){var e=Array.from(document.querySelectorAll('[data-valsi="'.concat(ke(t.w),'"]')))[0];e&&!document.getElementById("sance_".concat(ke(t.w)))&&(e.innerHTML+='<button class="tutci sance" onclick="document.getElementById(\'sance_'.concat(ke(t.w),"').play()\">▶</button>"),e.appendChild(E))}))}catch(e){}if(c.appendChild(k),y&&(window.muplis||t.w.length>20)&&c.appendChild(y),"arxivo"!==r&&t.d){if((x=document.createElement("div")).classList.add("definition","valsi"),t.d&&t.d.nasezvafahi){if(!t.t&&0===(t.rfs||[]).length)return;x.classList.add("nasezvafahi","noselect"),x.innerHTML=window.nasezvafahi}else{var q=v.tergeha;"velcusku"!==r&&(q="".concat(q.replace(/\n/g,"<br/>")," ")),x.innerHTML=q}c.appendChild(x)}if("arxivo"===r){var x,C=document.createElement("div");C.classList.add("definition","valsi","pointer"),C.innerHTML=he(t.d,a,50),C.addEventListener("click",(function(){C.style.display="none",C.nextElementSibling.style.display="block"})),c.appendChild(C),(x=document.createElement("div")).classList.add("definition","valsi"),x.style.display="none",t.d&&t.d.nasezvafahi?(x.classList.add("nasezvafahi","noselect"),x.innerHTML=window.nasezvafahi):(x.innerHTML="".concat(se({def:t.d,query:a}).replace(/\n/g,"<br/>")," "),x.addEventListener("click",(function(){x.style.display="none",x.previousElementSibling.style.display="block",x.parentElement.scrollIntoView()}))),c.appendChild(x)}t.n&&((x=document.createElement("div")).classList.add("notes","valsi"),x.innerHTML="".concat(ie({def:t.n,query:a,seskari:r}).tergeha," "),c.appendChild(x));if(0==i&&"velcusku"!==r){var S=Q({valsi:t.w}),j=S.secs,_=S.div;j&&j!==I.cll&&c.appendChild(_)}t.e&&((x=document.createElement("div")).classList.add("examples","valsi"),x.innerHTML="<table class='ciksi'>".concat(ie({def:"".concat(t.e,"\n").replace(/%/g,"\n").replace(/(.*?) — (.*?)\n/g,"<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"),query:a,seskari:r}).tergeha,"</table> "),c.appendChild(x));t.k&&((x=document.createElement("div")).className="related",x.innerHTML="See also: ".concat(ie({def:t.k,query:a,seskari:r}).tergeha," "),c.appendChild(x));if((t.r||[]).length>0&&!t.l&&window.xuzganalojudri){var A=document.createElement("div");for(A.className="rafsi noselect",A.innerHTML="rafsi: ",H=0;H<t.r.length;H++){var T=document.createElement("span");T.className="pamei";var N=t.r[H];if((t.t||"").match(/lujvo/)){var O=document.createElement("a");O.setAttribute("href","#seskari=".concat(r,"&sisku=").concat(be(N))),O.text=N,T.appendChild(O)}else T.innerHTML=se({def:N,query:a});T.innerHTML="".concat(T.innerHTML," "),A.appendChild(T)}c.appendChild(A)}if((t.rfs||[]).length>0){var M=document.createElement("div");M.classList.add("definition","subdefinitions");for(var H=0;H<t.rfs.length;H++){var z=ye({def:t.rfs[H],inner:!0,index:"".concat(i,"_").concat(H)});z&&M.appendChild(z)}c.appendChild(M)}return c.addEventListener("click",J),c}function ke(e){return encodeURIComponent(e).replace(/'/g,"h")}function we(e){return"^"!==e.charAt(0)&&"$"!==e.slice(-1)?e.replace(/\./g," ").replace(/ {2,}/g," ").replace(/’/g,"'").trim():e}function be(e){return encodeURIComponent((e||"").replace(/ /g,"_")).replace(/'/g,"%27")}function Ee(e){return decodeURIComponent(e.replace(/&amp;/g,"&").replace(/%27/g,"'")).replace(/[_]/g," ")}function Le(e,t){return e=(e||"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;"),t||(e=e.replace(/'/g,"&#039;")),e}function qe(e){var t=e.query,n=e.seskari,r=Math.min(window.jimte,q.length);if(I.cll=void 0,0===w){var i=Q({pre:!0,valsi:I.searching.query}),c=i.secs,s=i.div;I.cll=c,s&&a.appendChild(s)}for(;w<r;w++)a.appendChild(ye({def:q[w],query:t,seskari:n,length:q.length,index:w}))}"serviceWorker"in navigator?(navigator.serviceWorker.onmessage=function(e){console.log("e.data",e.data)},window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(e){var t=e.scope;console.log("ServiceWorker registration successful with scope: ",t)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}))):alert("Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari.");var xe,Ie,Ce=[["p","t","k","f","s","c"],["b","d","g","v","z","j"],["m","l","n","r",,"x","'"],["a","e","i","o","u","y"],[],["aia","aua"],["au","ai","ei","oi"]],Se=document.querySelector("#audio");function je(e,t,n){var a=document.createElement(e);return a.textContent=t,n&&(a.className=n),a}function _e(e,t,n){var a=document.createElement(e);return n&&(a.className=n),Array.isArray(t)?t.forEach((function(e){a.appendChild(e)})):t&&a.appendChild(t),a}function Ae(e){Se.src=e,Se.play()}document.querySelector("#table").appendChild(_e("table",Ce.map((function(e){return _e("tr",e.map((function(e){var t=je("button",e,"bangu");return t.onclick=function(){Ae("/sutysisku/sance/lerfu/".concat(encodeURIComponent(e),".ogg"))},_e("td",t)})))})),"centero")),t.focus();