"use strict";var e=document.getElementById("content"),t=document.getElementById("ciska"),n=document.getElementById("clear"),a=document.getElementById("outp"),i=document.getElementById("descr"),r=document.getElementById("drata"),c=document.getElementById("citri"),s=document.getElementById("sidju"),o=document.getElementById("kernelo_lo_cpacu"),l=new Worker("worker.js?sisku=1591790573054"),u=document.querySelector("#title > font"),d=document.querySelector("#site-title"),p=!1,g=3500;d.classList.add("desktop-mode-title-color");var m=document.getElementById("galtu-dasri"),h=document.getElementById("catni"),f=document.getElementById("cnano"),v=document.getElementById("rimni"),y=document.querySelectorAll("#title > img"),k=document.getElementById("scrollToTop");function switchBorderScroll(){e.scrollTop>200?e.scrollTop=0:e.scrollTop=e.scrollHeight}e.onscroll=function(){e.scrollTop>200?(k.style.display="block",k.classList.remove("dizlo")):k.classList.add("dizlo")};var w,b,E,L={BE:"bei",BEI:"be'o",BY:"boi",COI:"do'u",DOI:"do'u",FIhO:"fe'u",FUhE:"fu'o",GIhA:"vau",GOI:"ge'u",JOhI:"te'u",KE:"ke'e",LAhE:"lu'u",LA:"ku",LE:"ku",LI:"lo'o",LOhU:"le'u",LU:"li'u",ME:"me'u","NAhE+BO":"lu'u",NOI:"ku'o",NUhI:"nu'u",NU:"kei",PA:"boi",PEhO:"ku'e",SEI:"se'u",SOI:"se'u",TO:"toi",TUhE:"tu'u",VEI:"ve'o",LOhAI:"sa'ai",SAhAI:"le'ai",LOhOI:"ku'au",NAhU:"te'u",NIhE:"te'u",MOhE:"te'u"},q=[],x=function(e,t){clearTimeout(E),E=setTimeout(e,t)},I={searching:{seskari:"cnano",query:""},displaying:{seskari:"cnano",query:""},citri:[]};function C(){I.citri.length>0&&(c.innerHTML=" ".concat(window.purc).concat(I.citri.filter((function(e){return"velcusku"!==e.seskari})).map((function(e){var t=e.seskari,n=e.query;return'<a class="a-'.concat(t,'" href="#seskari=').concat(t,"&sisku=").concat(be(n),'">').concat(Le(n),"</a>")})).join(", ")))}function j(e,t){var n=["velcusku","arxivo","cnano","rimni","catni"];n.includes(e)||(e="cnano"),m.className="kampu-dasri ".concat(e,"-dasri noselect"),d.classList.add("".concat(e,"-search-mode-title-color")),d.classList.remove("desktop-mode-title-color"),document.getElementById(e)&&document.getElementById(e).classList.add("".concat(e,"-tutci-hover"),"tutci-hover"),n.map((function(t){t!==e&&(d.classList.remove("".concat(t,"-search-mode-title-color")),document.getElementById(t)&&document.getElementById(t).classList.remove("".concat(t,"-tutci-hover"),"tutci-hover"))}));for(var a=0;a<y.length;a++)y[a].style.filter=t}function S(e){var a=e.action;if("complete"===document.readyState){var i=["logo"];"start"===a?(i.map((function(e){document.getElementById(e).classList.remove("stopRotate"),document.getElementById(e).classList.add("rotate")})),n.classList.add("pulsate-css"),setTimeout((function(){n.classList.contains("pulsate-css")&&t.classList.add("granim-css")}),500)):(i.map((function(e){document.getElementById(e).classList.add("stopRotate")})),t.classList.remove("granim-css"),n.classList.remove("pulsate-css"))}}function _(){Ie&&Ie.open()}function A(){MathJax.typesetPromise().then((function(){B(!0)}))}function T(t){var n=t.query,c=t.seskari;switch(N(),window.jimte="velcusku"===c?201:30,w=0,S({action:"stop"}),a.innerHTML="",qe({query:n,seskari:c}),I.displaying.query=n,I.displaying.seskari=c,a.style.display="block",i.style.display="none",r.style.display="none",s.style.display="flex",e.scrollTop=0,I.displaying.seskari){case"rimni":A(),j("rimni","sepia(1.0)");break;case"arxivo":j("arxivo","none");break;case"velcusku":j("velcusku","none");break;case"catni":A(),j("catni","none");break;case"cnano":default:A(),j("cnano","none")}x((function(){G(),ga("send","pageview","#sisku/".concat(I.displaying.query));var e={dl:window.location.href,dt:document.title,dr:document.referrer,dp:"#sisku/".concat(I.displaying.query),dh:"".concat(window.location.protocol,"//").concat(window.location.hostname),z:Math.round(1e12*Math.random())};xe&&xe.emit("sisku",e)}),2e3)}function N(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){e.parentNode.removeChild(e)}))}function O(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){document.querySelector("#content").appendChild(e)}))}function B(e){N(),M(!e),ee=setTimeout((function(){if(!0!==e){var t=document.getElementsByClassName("jvo_plumber");p=!p;for(var n=0;n<t.length;n++){var a=t[n];a.value=ve(),p?a.classList.add("tutci-hover"):a.classList.remove("tutci-hover")}}if(p){var i=Array.from(document.querySelectorAll("[data-arr]")),r=function(){var e=i[n];if(e.attributes["data-head"]&&"1"!==e.attributes["data-head"].nodeValue)return"continue";var t=e.id,a=e.attributes["data-arr"].nodeValue.split(","),r=e.id.split("_").slice(0,-1),c=H(e);i.filter((function(e){var n=e.id.split("_").slice(0,-2),i=e.attributes["data-arr"].nodeValue.split(","),s=i[0].split(/(?=[0-9]+)/);if(1===i.length&&n.length===r.length&&n.join("_")===r.join("_")&&a.filter((function(e){var t=e.split(/(?=[0-9])/);return 0===s[0].indexOf(t[0])&&s[1]===t[1]})).length>0&&(c||H(e))){var l=e.attributes["data-color"].nodeValue;l="hsla(".concat(l,",100%,70%,0.62)"),new LeaderLine(document.getElementById(e.id),document.getElementById(t),{endPlugColor:l,color:l,dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}})),O()};for(n=0;n<i.length;n++)r()}}),!0===e?450:0)}function M(e){N(),X=setTimeout((function(){for(var e=document.querySelectorAll("[data-target]"),t=0;t<e.length;t++){var n=e[t];if(H(n)){var a=n.id,i=n.attributes["data-target"].nodeValue;new LeaderLine(document.getElementById(i),document.getElementById(a),{endPlugColor:"rgba(255, 120, 0, 0.33)",color:"rgba(255, 120, 0, 0.33)",dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}}O(),g=450}),e?0:g)}function H(e){var t=e.getBoundingClientRect();return t=t.top>=48&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function z(e){var t={},n="";n=0===e.search(/^#sisku\//)?[e.replace(/#sisku\/(.*)/,"sisku=$1")]:("#"===e[0]?e.substr(1):e).split("&");for(var a=0;a<n.length;a++){var i=n[a].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return t}function $(e){var t=e.href,n=e.replace;t&&(t=t.substring(t.indexOf("#")+1),localStorage.setItem("url","#".concat(t)));var a=z(t||window.location.hash);if(a.sisku){var i=Ee(a.sisku).trim();I.searching.seskari===a.seskari&&I.searching.query===i||(a.seskari&&["velcusku","cnano","catni","rimni","arxivo"].includes(a.seskari)&&(I.searching.seskari=a.seskari),a.sisku&&(I.searching.query=i,Z({replace:n})))}}function J(e){var t=e.target;if("A"===t.nodeName){var n=t;if(n.ctrlKey||n.metaKey)return;$({replace:!1,href:n.getAttribute("href")})}}function R(e){var t=e.replace,n="#seskari=".concat(I.searching.seskari,"&sisku=").concat(be(I.searching.query));""===I.searching.query?(n="",document.title="la sutysisku"):document.title="".concat(I.searching.query," - la sutysisku");var a=localStorage.getItem("url")||"";!0===t?window.history.replaceState({},null,n):window.location.hash!==n&&a!==n&&window.history.pushState({},null,n),localStorage.setItem("url",n)}function U(){I.searching.query=we(t.value),Z({caller:"GetCiskaAndDispatch"})}function P(e){clearTimeout(b),b=setTimeout(U,e||250)}function D(){I.searching.query=we(t.value),Z({})}function V(){Z({empty:!0})}function G(){if(""!==I.displaying.query&&"velcusku"!==I.displaying.seskari){var e=0;for(e=0;e<I.citri.length;e++)if(I.citri[e].query===I.displaying.query&&I.citri[e].seskari===I.displaying.seskari){I.citri.splice(e,1);break}I.citri.unshift(JSON.parse(JSON.stringify(I.displaying))),I.citri.length>10&&(I.citri.length=10),localStorage.setItem("citri",JSON.stringify(I.citri)),C()}}function Z(e){var n=e.replace,a=e.caller,i=e.empty;if(Ie&&Ie.close(),I.searching.query=I.searching.query.trim(),R({replace:n}),localStorage.setItem("tcini",JSON.stringify(I.searching)),1==i)return I.searching.query="",W();if("velcusku"!==I.searching.seskari){if(""===I.searching.query)return W();if(JSON.stringify(I.searching)===JSON.stringify(I.displaying))return}switch(t.value=I.searching.query,S({action:"start"}),"GetCiskaAndDispatch"===a&&"velcusku"===I.searching.seskari&&(I.searching.seskari="cnano"),I.searching.seskari){case"arxivo":var r=JSON.parse(JSON.stringify(I.searching));"^"!==I.searching.query.charAt(0)&&"$"!==I.searching.query.slice(-1)[0]&&(r.query="\\b".concat(I.searching.query,"\\b")),r.max=20,xe&&xe.emit("cpedu_fi_la_arxivo",r);break;case"velcusku":_();break;default:l.postMessage({kind:"newSearch",query:I.searching.query,seskari:I.searching.seskari})}}function W(){N(),S({action:"stop"}),e.scrollTop=0;var t=I.displaying.query;I.displaying.query="",d.classList.add("desktop-mode-title-color"),d.classList.remove("catni-search-mode-title-color","cnano-search-mode-title-color","velcusku-search-mode-title-color","rimni-search-mode-title-color","arxivo-search-mode-title-color"),h.classList.remove("catni-tutci-hover","tutci-hover");try{f.classList.remove("cnano-tutci-hover","tutci-hover")}catch(e){}v.classList.remove("rimni-tutci-hover","tutci-hover"),m.className="kampu-dasri cnano-dasri",a.style.display="none",i.style.display="block";var n={"muplis-eng-pol":[0,"English - polski","../pixra/muplis-eng-pol.png",2.1],"en-pt-BR":[0,"English - Portugueze","../pixra/152.png",1],zamenhofo:[0,"Esperanto - English","../pixra/lanci_epo.svg",1],toki:[0,"toki pona - English","../pixra/Toki_pona.svg",1],laadan:[0,"English - Láadan","../pixra/Double_girl_sign.svg",1],"simplingua-zho":[0,"Simplingua - 中文","../pixra/simplingua.svg",1],"ktv-eng":[0,"Kotava - English","../pixra/ktv-eng.svg",1],ina:[0,"English - Interlingua","../pixra/Flag_of_Interlingua.svg",1],ldp:[0,"English - Lingwa de Planeta","../pixra/ldp.svg",1],ile:[0,"English - Occidental / Interlingue","../pixra/Flag_of_Interlingue.svg",1],"epo-thai":[0,"Esperanto - Thai","../pixra/lanci_epo.svg",1]},c="";for(var s in n)0!==n[s][0]&&n[s][0]!==window.bangu||(c+="<div class='DIV_1' style='height:".concat(100,"px;width:").concat(100*n[s][3],"px;'><div class='DIV_2' style='height:").concat(100,"px;width:").concat(100*n[s][3],"px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>").concat(n[s][1],"</b></span><a").concat(0===(n[s][4]||"").indexOf("http")?" rel='noreferrer' target='_blank'":"",' aria-label="').concat(n[s][1].replace(/<[^>]+?>/g,""),'" href="').concat(0===s.indexOf("@")?n[s][4]:"https://la-lojban.github.io/sutysisku/".concat(s,"/#seskari=").concat(I.displaying.seskari,"&sisku=").concat(be(t)),"\" class='A_7'><div class='DIV_8' style='height:").concat(100,"px;width:").concat(100*n[s][3],'px;background-image:url("').concat(n[s][2],"\")'></div></a></div></div>"));r.innerHTML=c,r.style.display="block"}function K(e){var n=e.keyCode;n&&191===n&&t.focus()}function F(){e.setAttribute("style","height:".concat(Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;"))}!function(){try{var e=JSON.parse(localStorage.getItem("tcini"));e.seskari&&(I.searching.seskari=e.seskari),e.query&&(I.searching.query=e.query)}catch(e){}try{I.citri=JSON.parse(localStorage.getItem("citri"))||[]}catch(e){}}(),C(),l.onmessage=function(e){var t=e.data;if("ready"==t.kind){document.title="la sutysisku";var n=document.getElementById("loading");n.parentNode.removeChild(n),$({replace:!0})}else if("searchResults"==t.kind){if(JSON.stringify(t.req)!==JSON.stringify(I.searching))return;if(JSON.stringify(t.req)===JSON.stringify(I.displaying))return;q=t.results||[],T({query:t.req.query,seskari:t.req.seskari})}else"loading"==t.kind?(document.getElementById("caho_cpacu").textContent=window.bangubuild,o.style.width="51%"):"progress"==t.kind&&(o.style.width="".concat(100*t.percent,"%"))},c.addEventListener("click",J),window.addEventListener("popstate",$),t.addEventListener("paste",P(0)),t.addEventListener("keyup",(function(){P()})),t.addEventListener("keydown",(function(){clearTimeout(b)})),t.addEventListener("input",P()),t.addEventListener("textInput",P()),t.addEventListener("focus",D),n.addEventListener("click",V),document.getElementById("title").addEventListener("click",V),document.getElementById("rimni").addEventListener("click",(function(){I.searching={seskari:"rimni",query:we(t.value)},Z({replace:!1})})),document.getElementById("cnano").addEventListener("click",(function(){I.searching={seskari:"cnano",query:we(t.value)},Z({replace:!1})})),document.getElementById("catni").addEventListener("click",(function(){I.searching={seskari:"catni",query:we(t.value)},Z({replace:!1})})),window.addEventListener("resize",F,!0),e.addEventListener("scroll",te),F(),document.attachEvent?document.attachEvent("onkeyup",K):document.addEventListener("keyup",K),"loading"===document.readyState&&(o.style.width="37%",document.title="la sutysisku");var X=null,ee=null;function te(e){var t=e.target;N(),null!==X&&clearTimeout(X),null!==ee&&clearTimeout(ee),"velcusku"!==I.displaying.seskari&&t.scrollTop+window.innerHeight>=a.clientHeight-700?(window.jimte+=10,qe(I.displaying),MathJax.typesetPromise().then((function(){B(!0)}))):B(!0)}function ne(e,t,n){return e=e.replace(/[\{\}_]/g,""),Math.abs(Math.round(e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)%t/n)*n)}function ae(e){var t=(e=e.substr(1,e.length-2).split("=")).map((function(e){return e.replace(/[^A-Za-z']/g,"")}));return{jalge:t,hasExpansion:e.length>1||t[0]&&"x"!==t[0]}}function ie(e){var t=e.v,n=e.fullDef,a=e.subtype,i=e.dataArrAdded,r=e.b,c=e.veljvoLs;return i.includes(r)||"r"!==a&&"lujvo"!==n.t?"":(t=(t=(t=t.substr(1,t.length-2).split("=").map((function(e){return"r"===a?n.w+e.replace(/[^0-9]/g,""):e.replace(/[^0-9A-Za-z']/g,"")}))).filter((function(e){var t=e.replace(/[0-9]/g,"");if(!(c.filter((function(e){return 0===e.indexOf(t)&&e!==t})).length>0))return!0}))).join(","),' data-arr="'.concat(t,'"'))}function re(e){var t=e.def,n=e.fullDef,a=e.query,i=e.seskari,r=e.type,c=e.index,s=0,l=[],o=[],u=[],d=[],p=!1;["cnano","catni","rimni"].includes(i)||(i="cnano");var g=t.replace(/\$.*?\$/g,(function(e,t,n){if("d"===r&&void 0!==c){var a=ae(e);a.hasExpansion&&(p=!0),d=d.concat(a.jalge);var i=n.substr(t),s=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^\\(\\)<>]+?\\)).*")),l=e;0===i.search(s)&&(l=i.replace(s,"$1"));var u={};u[e]=l,o.push(u)}return e}));return{tergeha:"<span>".concat(g.replace(/\$.*?\$/g,(function(e,t,a){if("d"===r&&void 0!==c){var i=a.substr(t),p=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^()<>]+?\\)).*")),g=e;if(0===i.search(p))g=i.replace(p,"$1");else{var h=o.filter((function(t){return t[e]&&t[e]!==g}))[0];h&&(g=h[e])}s++;var m="".concat(c,"_").concat(s),f={};f[e]=m,l.push(f);var v=e.replace(/[^a-zA-Z0-9]/g,""),y="";(n&&n.rfs||[]).length&&(y=' data-head="1"');var k=ie({subtype:""!==y?"d":"r",v:e,fullDef:n,dataArrAdded:u,b:v,veljvoLs:d});e='<span id="'.concat(m,'" class="terbricmi" style="background-color: hsl(').concat(ne(g,256,16),", 100%, 90%);border-radius:").concat(ne(g,9,1)+3,'px"').concat(k).concat(y,' data-color="').concat(ne(g,256,16),'">').concat(e,"</span>"),u.push(v)}return e})).replace(/(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,(function(e,t,n,a){if("d"===r){var i=l.filter((function(e){return e[a]!==n&&e[a]}));i[0]&&i[0][a]&&(e=e.replace(/^<span /,'<span data-target="'.concat(i[0][a],'" ')))}return e})).replace(/\$.*?\$/g,(function(e){return e.replace(/\{/g,"\\curlyleft").replace(/\}/g,"\\curlyright")})).replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(function(e){var t='</span><a href="'.concat(e,'" rel="noreferrer" target="_blank">').concat(se({def:e,query:a}),"</a><span>");return e.match(/^https?:\/\/.*\.(jpg|png)$/)&&(t+="<img class='se-tcidu-pixra' alt='secusku' src=\"".concat(e,'"/>\n')),t})).replace(/\{.*?\}/g,(function(e){e=e.substring(1,e.length-1);return'</span><a class="a-'.concat(i,'" href="#seskari=').concat(i,"&sisku=").concat(be(e),'">').concat(se({def:Le(e,!0),query:a}),"</a><span>")})).replace(/\$.*?\$/g,(function(e){return e.replace(/\\curlyleft/g,"{").replace(/\\curlyright/g,"}")})),"</span>").replace(/<span><\/span>/g,"").replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g,(function(e){return se({def:e,query:a})})),hasExpansion:p}}function ce(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function se(e){var t=e.def,n=e.query;if(!n||""===n)return t;var a="(".concat(ce(n).replace(/ /g,"|"),"|").concat(ce(n).replace(/'/g,"h").replace(/ /g,"|"),")"),i=new RegExp(a,"igm");return t.replace(i,"<span class='basna'>$1</span>")}var xe,Ie,oe=60800,le="ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY";function me(e,t){for(var n,a=new RegExp(e,"g"),i=[];n=a.exec(t);)i.push(n.index);return i}function he(e,t,n){return n.indexOf(e)===t}function fe(e,t,n){var a=me(t,e);a=a.map((function(t){return(t=[t-n,t+n])[0]<0&&(t[0]=0),t[0]>=e.length&&(t[0]=e.length-1),t}));for(var i=0;i<a.length-1;i++)a[i][1]>a[i+1][0]&&(a[i][1]=a[i+1][1],a[i+1][0]=a[i][0]);if((a=a.map((function(e){return JSON.stringify(e)}))).length>0)a=(a=a.filter(he).map((function(n){n=JSON.parse(n);var a=e.substr(n[0],n[1]-n[0]);return a=se({def:a,query:t}),n[0]>3&&(a="...".concat(a)),n[1]<e.length-4&&(a="".concat(a,"...")),a}))).join("<br/>");else{var r=e.substr(0,Math.min(100,e.length));r.length<e.length&&(r="".concat(r,"...")),a=r=se({def:r,query:t})}return a}function ve(){return p?"⇔":"↔"}function ye(e){var t=e.def,n=e.inner,a=e.query,i=e.seskari,r=e.index;a||(a=I.searching.query),i||(i=I.searching.seskari),t||(t=[]);var c=document.createElement("div");if(c.className=n?"terminner":"termouter",c.classList.add("term"),!n&&t.d&&t.d.nasezvafahi&&0===(t.rfs||[]).length&&(c.className="sidju cll noselect"),void 0!==L[t.s]){var s=document.createElement("h4");s.className="tfm",s.innerHTML='&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari='.concat(i,"&sisku=").concat(be(L[t.s]),'">').concat(Le(L[t.s]),"</a>]</sup></i>")}var l=[];for(var o in L)L[o]===t.w&&l.push('<a href="#seskari='.concat(i,"&sisku=").concat(be(o),'">').concat(Le(o),"</a>"));if(0!==l.length){var u=document.createElement("div");u.classList.add("valsi"),t.l&&u.classList.add("nalojbo"),u.innerHTML="<i><sup>[".concat(l.join(", "),"&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;")}if(t.s){var d;(d=document.createElement("a")).className="tutci klesi klesi-tutci";var p=se({def:Le(t.s),query:a});d.innerHTML=p,"velcusku"!==i&&(d.href="#seskari=".concat(i,"&sisku=").concat(be(t.s)))}if(t.t){var g;(g=document.createElement("a")).className="klesi link noselect";p=t.t;var h=be(t.w).replace(/_/g,"%20");g.href=window.judri?window.judri+h:"#seskari=".concat("catni"===i?"catni":"cnano","&sisku=").concat(h),window.judri&&(g.setAttribute("target","_blank"),g.setAttribute("rel","noreferrer"));var m="";t.t.search("sampu staile")>=0&&(m+="<img src='../pixra/plise.png' height='16' width='16' alt='lo staile poi sampu'>"),t.t.search("mansa staile")>=0&&(m+="<img src='../pixra/pelxuplise.png' height='16' width='16' alt=\"lo staile poi na mutce cinri\">"),t.t.search("plixau jufra")>=0&&(m+="<img src='../pixra/crinoplise.png' height='16' width='16' alt=\"lo jufra poi ka'e xamgu lo di'i fanva\">"),t.t.search("cnano staile")>=0&&(m+="<img src='../pixra/blabiplise.png' height='16' width='16' alt=\"lo staile poi ka'e pluja\">"),t.t.search("non-standard")>=0&&(m+="<img src='../pixra/cicnaplise.png' height='16' width='16' alt=\"na'e catni se ciska staile\">"),""!==m&&(p=m),window.xuzganalojudri&&!t.l&&(p="".concat(Le(t.t),"# "),t.d&&t.d.nasezvafahi&&(p="➕ ".concat(p))),g.innerHTML=p}t.date&&((g=document.createElement("div")).className="tutci klesi klesi-tutci",g.style.whiteSpace="nowrap",g.innerHTML=t.date);t.from&&((d=document.createElement("div")).className="tutci klesi klesi-tutci",d.innerHTML=t.from);var f=document.createElement("h4");f.classList.add("valsi"),f.setAttribute("data-valsi",encodeURIComponent(t.w)),t.l&&f.classList.add("nalojbo"),we(t.w)==a||"velcusku"==i?f.innerHTML="".concat(se({def:t.w,query:a})," "):f.innerHTML='<a class="valsi'.concat(t.l?"":" nalojbo",'" href="#seskari=').concat(i,"&sisku=").concat(be(t.w),'">').concat(se({def:Le(t.w,!0),query:a}),"</a> ");var v={};t.d&&!t.d.nasezvafahi&&(v=re({def:t.d,fullDef:t,query:a,seskari:i,type:"d",index:r}));var y=document.createElement("heading");y.classList.add("heading"),u&&y.appendChild(u),y.appendChild(f),zbalermorna&&t.w.length<=20&&!window.muplis&&y.appendChild(zbalermorna),s&&y.appendChild(s);var k=document.createElement("heading");if(k.style.flex=1,y.appendChild(k),g&&y.appendChild(g),d&&y.appendChild(d),c.appendChild(y),zbalermorna&&(window.muplis||t.w.length>20)&&c.appendChild(zbalermorna),"arxivo"!==i&&t.d){if((w=document.createElement("div")).classList.add("definition","valsi"),t.d&&t.d.nasezvafahi)w.classList.add("nasezvafahi","noselect"),w.innerHTML=window.nasezvafahi;else{var E=v.tergeha;"velcusku"!==i&&(E="".concat(E.replace(/\n/g,"<br/>")," ")),w.innerHTML=E}c.appendChild(w)}if("arxivo"===i){var w,b=document.createElement("div");b.classList.add("definition","valsi","pointer"),b.innerHTML=fe(t.d,a,50),b.addEventListener("click",(function(){b.style.display="none",b.nextElementSibling.style.display="block"})),c.appendChild(b),(w=document.createElement("div")).classList.add("definition","valsi"),w.style.display="none",t.d&&t.d.nasezvafahi?(w.classList.add("nasezvafahi","noselect"),w.innerHTML=window.nasezvafahi):(w.innerHTML="".concat(se({def:t.d,query:a}).replace(/\n/g,"<br/>")," "),w.addEventListener("click",(function(){w.style.display="none",w.previousElementSibling.style.display="block",w.parentElement.scrollIntoView()}))),c.appendChild(w)}t.n&&((w=document.createElement("div")).classList.add("notes","valsi"),w.innerHTML="".concat(re({def:t.n,query:a,seskari:i}).tergeha," "),c.appendChild(w));t.e&&((w=document.createElement("div")).classList.add("examples","valsi"),w.innerHTML="<table class='ciksi'>".concat(re({def:"".concat(t.e,"\n").replace(/%/g,"\n").replace(/(.*?) — (.*?)\n/g,"<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"),query:a,seskari:i}).tergeha,"</table> "),c.appendChild(w));t.k&&((w=document.createElement("div")).className="related",w.innerHTML="See also: ".concat(re({def:t.k,query:a,seskari:i}).tergeha," "),c.appendChild(w));if((t.r||[]).length>0&&!t.l&&window.xuzganalojudri){var q=document.createElement("div");for(q.className="rafsi noselect",q.innerHTML="rafsi: ",A=0;A<t.r.length;A++){var x=document.createElement("span");x.className="pamei";var S=t.r[A];if((t.t||"").match(/lujvo/)){var T=document.createElement("a");T.setAttribute("href","#seskari=".concat(i,"&sisku=").concat(be(S))),T.text=S,x.appendChild(T)}else x.innerHTML=se({def:S,query:a});x.innerHTML="".concat(x.innerHTML," "),q.appendChild(x)}c.appendChild(q)}if((t.rfs||[]).length>0){var C=document.createElement("div");C.classList.add("definition","subdefinitions");for(var A=0;A<t.rfs.length;A++)C.appendChild(ye({def:t.rfs[A],inner:!0,index:"".concat(r,"_").concat(A)}));c.appendChild(C)}return c.addEventListener("click",J),c}function ke(e){return encodeURIComponent(e).replace(/'/g,"h")}function we(e){return"^"!==e.charAt(0)&&"$"!==e.slice(-1)?e.replace(/\./g," ").replace(/ {2,}/g," ").replace(/’/g,"'").trim():e}function be(e){return encodeURIComponent((e||"").replace(/ /g,"_")).replace(/'/g,"%27")}function Ee(e){return decodeURIComponent(e.replace(/&amp;/g,"&").replace(/%27/g,"'").replace(/[\+]/g," ")).replace(/[_]/g," ")}function Le(e,t){return e=(e||"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;"),t||(e=e.replace(/'/g,"&#039;")),e}function qe(e){var t=e.query,n=e.seskari,i=Math.min(window.jimte,q.length);if(I.cll=void 0,0===w){var r=Q(!0);I.cll=r,r&&a.appendChild(r)}for(;w<i;w++)a.appendChild(ye({def:q[w],query:t,seskari:n,length:q.length,index:w}))}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(e){var t=e.scope;console.log("ServiceWorker registration successful with scope: ",t)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),t.focus();