"use strict";var e=document.getElementById("content"),t=document.getElementById("ciska"),n=document.getElementById("clear"),a=document.getElementById("outp"),i=document.getElementById("descr"),r=document.getElementById("drata"),c=document.getElementById("citri"),s=document.getElementById("sidju"),o=document.getElementById("kernelo_lo_cpacu"),l=new Worker("worker.js?sisku=1591512351862"),u=document.querySelector("#title > font"),d=document.querySelector("#site-title"),p=[],g=[],m=!1,h=3500;d.classList.add("desktop-mode-title-color");var f=document.getElementById("galtu-dasri"),v=document.getElementById("catni"),y=document.getElementById("cnano"),k=document.getElementById("rimni"),w=document.querySelectorAll("#title > img"),b=document.getElementById("scrollToTop");function switchBorderScroll(){e.scrollTop>200?e.scrollTop=0:e.scrollTop=e.scrollHeight}e.onscroll=function(){e.scrollTop>200?(b.style.display="block",b.classList.remove("dizlo")):b.classList.add("dizlo")};var E,L,q,x={BE:"bei",BEI:"be'o",BY:"boi",COI:"do'u",DOI:"do'u",FIhO:"fe'u",FUhE:"fu'o",GIhA:"vau",GOI:"ge'u",JOhI:"te'u",KE:"ke'e",LAhE:"lu'u",LA:"ku",LE:"ku",LI:"lo'o",LOhU:"le'u",LU:"li'u",ME:"me'u","NAhE+BO":"lu'u",NOI:"ku'o",NUhI:"nu'u",NU:"kei",PA:"boi",PEhO:"ku'e",SEI:"se'u",SOI:"se'u",TO:"toi",TUhE:"tu'u",VEI:"ve'o",LOhAI:"sa'ai",SAhAI:"le'ai",LOhOI:"ku'au",NAhU:"te'u",NIhE:"te'u",MOhE:"te'u"},I=[],C=function(e,t){clearTimeout(q),q=setTimeout(e,t)},_={searching:{seskari:"cnano",query:""},displaying:{seskari:"cnano",query:""},citri:[]};function j(){_.citri.length>0&&(c.innerHTML=" ".concat(window.purc).concat(_.citri.filter((function(e){return"velcusku"!==e.seskari})).map((function(e){var t=e.seskari,n=e.query;return'<a class="a-'.concat(t,'" href="#seskari=').concat(t,"&sisku=").concat(Ee(n),'">').concat(qe(n),"</a>")})).join(", ")))}function S(e,t){var n=["velcusku","arxivo","cnano","rimni","catni"];n.includes(e)||(e="cnano"),f.className="kampu-dasri ".concat(e,"-dasri noselect"),d.classList.add("".concat(e,"-search-mode-title-color")),d.classList.remove("desktop-mode-title-color"),document.getElementById(e)&&document.getElementById(e).classList.add("".concat(e,"-tutci-hover"),"tutci-hover"),n.map((function(t){t!==e&&(d.classList.remove("".concat(t,"-search-mode-title-color")),document.getElementById(t)&&document.getElementById(t).classList.remove("".concat(t,"-tutci-hover"),"tutci-hover"))}));for(var a=0;a<w.length;a++)w[a].style.filter=t}function T(e){var a=e.action;if("complete"===document.readyState){var i=["logo"];"start"===a?(i.map((function(e){document.getElementById(e).classList.remove("stopRotate"),document.getElementById(e).classList.add("rotate")})),n.classList.add("pulsate-css"),setTimeout((function(){n.classList.contains("pulsate-css")&&t.classList.add("granim-css")}),500)):(i.map((function(e){document.getElementById(e).classList.add("stopRotate")})),t.classList.remove("granim-css"),n.classList.remove("pulsate-css"))}}function A(){Ce&&Ce.open()}function N(t){var n=t.query,c=t.seskari;switch(O(),B(),window.jimte="velcusku"===c?201:30,E=0,T({action:"stop"}),a.innerHTML="",xe({query:n,seskari:c}),_.displaying.query=n,_.displaying.seskari=c,a.style.display="block",i.style.display="none",r.style.display="none",s.style.display="flex",e.scrollTop=0,_.displaying.seskari){case"rimni":MathJax.typeset(),S("rimni","sepia(1.0)");break;case"arxivo":S("arxivo","none");break;case"velcusku":S("velcusku","none");break;case"catni":MathJax.typeset(),S("catni","none");break;case"cnano":default:MathJax.typesetPromise().then((function(){H(),M(!0)})),S("cnano","none")}C((function(){Z(),ga("send","pageview","#sisku/".concat(_.displaying.query));var e={dl:window.location.href,dt:document.title,dr:document.referrer,dp:"#sisku/".concat(_.displaying.query),dh:"".concat(window.location.protocol,"//").concat(window.location.hostname),z:Math.round(1e12*Math.random())};Ie&&Ie.emit("sisku",e)}),2e3)}function O(){p.map((function(e){e.remove()})),p=[]}function B(){g.map((function(e){e.remove()})),g=[]}function M(e){B(),te=setTimeout((function(){if(!0!==e){var t=document.getElementsByClassName("jvo_plumber");m=!m;for(var n=0;n<t.length;n++){var a=t[n];a.value=ye(),m?a.classList.add("tutci-hover"):a.classList.remove("tutci-hover")}}if(m){var i=Array.from(document.querySelectorAll("[data-arr]")),r=function(){var e=i[n],t=e.id,a=e.attributes["data-arr"].nodeValue.split(","),r=e.id.split("_");if(3===r.length)return"continue";var c=r[0],s=z(e);i.filter((function(e){var n=e.id.split("_"),i=n[0],r=e.attributes["data-arr"].nodeValue.split(","),o=r[0].split(/(?=[0-9]+)/);if(1===r.length&&3===n.length&&i===c&&a.filter((function(e){var t=e.split(/(?=[0-9])/);return 0===o[0].indexOf(t[0])&&o[1]===t[1]})).length>0&&(s||z(e))){var l=e.attributes["data-color"].nodeValue;l="hsla(".concat(l,",100%,70%,0.62)");var u=new LeaderLine(document.getElementById(e.id),document.getElementById(t),{endPlugColor:l,color:l,dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3});g.push(u)}}))};for(n=0;n<i.length;n++)r()}}),!0===e?450:0)}function H(){O(),ee=setTimeout((function(){for(var e=document.querySelectorAll("[data-target]"),t=0;t<e.length;t++){var n=e[t];if(z(n)){var a=n.id,i=n.attributes["data-target"].nodeValue,r=new LeaderLine(document.getElementById(i),document.getElementById(a),{endPlugColor:"rgba(255, 120, 0, 0.33)",color:"rgba(255, 120, 0, 0.33)",dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3});p.push(r)}}h=450}),h)}function z(e){var t=e.getBoundingClientRect();return t=t.top>=48&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function $(e){var t={},n="";n=0===e.search(/^#sisku\//)?[e.replace(/#sisku\/(.*)/,"sisku=$1")]:("#"===e[0]?e.substr(1):e).split("&");for(var a=0;a<n.length;a++){var i=n[a].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return t}function J(e){var t=e.href,n=e.replace;t&&(t=t.substring(t.indexOf("#")+1),localStorage.setItem("url","#".concat(t)));var a=$(t||window.location.hash);if(a.sisku){var i=Le(a.sisku).trim();_.searching.seskari===a.seskari&&_.searching.query===i||(a.seskari&&["velcusku","cnano","catni","rimni","arxivo"].includes(a.seskari)&&(_.searching.seskari=a.seskari),a.sisku&&(_.searching.query=i,W({replace:n})))}}function D(e){var t=e.target;if("A"===t.nodeName){var n=t;if(n.ctrlKey||n.metaKey)return;J({replace:!1,href:n.getAttribute("href")})}}function R(e){var t=e.replace,n="#seskari=".concat(_.searching.seskari,"&sisku=").concat(Ee(_.searching.query));""===_.searching.query?(n="",document.title="la sutysisku"):document.title="".concat(_.searching.query," - la sutysisku");var a=localStorage.getItem("url")||"";!0===t?window.history.replaceState({},null,n):window.location.hash!==n&&a!==n&&window.history.pushState({},null,n),localStorage.setItem("url",n)}function U(){_.searching.query=be(t.value),W({caller:"GetCiskaAndDispatch"})}function P(e){clearTimeout(L),L=setTimeout(U,e||250)}function G(){_.searching.query=be(t.value),W({})}function V(){W({empty:!0})}function Z(){if(""!==_.displaying.query&&"velcusku"!==_.displaying.seskari){var e=0;for(e=0;e<_.citri.length;e++)if(_.citri[e].query===_.displaying.query&&_.citri[e].seskari===_.displaying.seskari){_.citri.splice(e,1);break}_.citri.unshift(JSON.parse(JSON.stringify(_.displaying))),_.citri.length>10&&(_.citri.length=10),localStorage.setItem("citri",JSON.stringify(_.citri)),j()}}function W(e){var n=e.replace,a=e.caller,i=e.empty;if(Ce&&Ce.close(),_.searching.query=_.searching.query.trim(),R({replace:n}),localStorage.setItem("tcini",JSON.stringify(_.searching)),1==i)return _.searching.query="",K();if("velcusku"!==_.searching.seskari){if(""===_.searching.query)return K();if(JSON.stringify(_.searching)===JSON.stringify(_.displaying))return}switch(t.value=_.searching.query,T({action:"start"}),"GetCiskaAndDispatch"===a&&"velcusku"===_.searching.seskari&&(_.searching.seskari="cnano"),_.searching.seskari){case"arxivo":var r=JSON.parse(JSON.stringify(_.searching));"^"!==_.searching.query.charAt(0)&&"$"!==_.searching.query.slice(-1)[0]&&(r.query="\\b".concat(_.searching.query,"\\b")),r.max=20,Ie&&Ie.emit("cpedu_fi_la_arxivo",r);break;case"velcusku":A();break;default:l.postMessage({kind:"newSearch",query:_.searching.query,seskari:_.searching.seskari})}}function K(){O(),B(),T({action:"stop"}),e.scrollTop=0;var t=_.displaying.query;_.displaying.query="",d.classList.add("desktop-mode-title-color"),d.classList.remove("catni-search-mode-title-color","cnano-search-mode-title-color","velcusku-search-mode-title-color","rimni-search-mode-title-color","arxivo-search-mode-title-color"),v.classList.remove("catni-tutci-hover","tutci-hover");try{y.classList.remove("cnano-tutci-hover","tutci-hover")}catch(e){}k.classList.remove("rimni-tutci-hover","tutci-hover"),f.className="kampu-dasri cnano-dasri",a.style.display="none",i.style.display="block";var n={"@CLL":[".inglic.","Reference Grammar","../pixra/cll.png",1,"https://lojban.pw/cll/uncll-1.2.7/xhtml_section_chunks/"],"@lojban.pw":[".inglic.","Lojban-Chan","../pixra/jbotcan.svg",1,"https://lojban.pw"],muplis:[0,"la muplis","../pixra/taplamuplis.svg",2.1],jb:[0,"English - Lojban examples","../pixra/snime-1.svg",1],en:[0,"English-Lojban","../pixra/selsku_lanci_eng.svg",1],jbo:[0,"fanva fi le'e lojbo ri","../pixra/lanci_jbo.svg",1],ja:[0,'日本 - <span style="white-space:pre;">ロジバン</span>',"../pixra/selsku_lanci_jpn.svg",1],"fr-facile":[0,"français facile - lojban","../pixra/selsku_lanci_fra.svg",1],ru:[0,"русский - ложбан","../pixra/selsku_lanci_rus.svg",1],eo:[0,"Esperanto - Loĵbano","../pixra/lanci_epo.svg",1],es:[0,"español - lojban","../pixra/selsku_lanci_spa.svg",1],zh:[0,"中文 - 逻辑语","../pixra/selsku_lanci_zho.svg",1],"@CC":[".inglic.","The Crash Course","../pixra/cogwheel-5.svg",1,"https://mw.lojban.org/papri/The_Crash_Course_in_Lojban"]},c="";for(var s in n)0!==n[s][0]&&n[s][0]!==window.bangu||(c+="<div class='DIV_1' style='height:".concat(100,"px;width:").concat(100*n[s][3],"px;'><div class='DIV_2' style='height:").concat(100,"px;width:").concat(100*n[s][3],"px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>").concat(n[s][1],"</b></span><a").concat(0===(n[s][4]||"").indexOf("http")?" rel='noreferrer' target='_blank'":"",' aria-label="').concat(n[s][1].replace(/<[^>]+?>/g,""),'" href="').concat(0===s.indexOf("@")?n[s][4]:"https://la-lojban.github.io/sutysisku/".concat(s,"/#seskari=").concat(_.displaying.seskari,"&sisku=").concat(Ee(t)),"\" class='A_7'><div class='DIV_8' style='height:").concat(100,"px;width:").concat(100*n[s][3],'px;background-image:url("').concat(n[s][2],"\")'></div></a></div></div>"));r.innerHTML=c,r.style.display="block"}function F(e){var n=e.keyCode;n&&191===n&&t.focus()}function Y(){e.setAttribute("style","height:".concat(Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;"))}function Q(e){return window.arrcll[e]}function X(e){var t;if(!("rimni"===_.searching.seskari||!window.cll_url|0===(window.arrcll||[]).length||!e&&I[0].s&&I[0].s.replace(/[0-9]+[a-z]*\*?$/,"")===_.searching.query||e&&!/^[A-Zh]+/.test(_.searching.query))&&(e?t=Q(_.searching.query):!(t=Q(_.searching.query))&&I&&I[0]&&I[0].s&&(t=Q(I[0].s)||Q(_.searching.query.toLowerCase().replace(/h/g,"'"))),t)){var n="".concat(window.cllnotci,"<ul class='uoldeliste'>").concat(Object.keys(t).map((function(e){return"<li><a rel='noreferrer' target='_blank' href=\"".concat(window.cll_url).concat(e,'">').concat(qe(t[e]),"</a></li>")})).join(""),"</ul>"),a=document.createElement("div");return a.className="".concat(e?"sidju":"definition"," cll noselect"),a.innerHTML=n,a}}!function(){try{var e=JSON.parse(localStorage.getItem("tcini"));e.seskari&&(_.searching.seskari=e.seskari),e.query&&(_.searching.query=e.query)}catch(e){}try{_.citri=JSON.parse(localStorage.getItem("citri"))||[]}catch(e){}}(),j(),l.onmessage=function(e){var t=e.data;if("ready"==t.kind){document.title="la sutysisku";var n=document.getElementById("loading");n.parentNode.removeChild(n),J({replace:!0})}else if("searchResults"==t.kind){if(JSON.stringify(t.req)!==JSON.stringify(_.searching))return;if(JSON.stringify(t.req)===JSON.stringify(_.displaying))return;I=t.results||[],N({query:t.req.query,seskari:t.req.seskari})}else"loading"==t.kind?(document.getElementById("caho_cpacu").textContent=window.bangubuild,o.style.width="51%"):"progress"==t.kind&&(o.style.width="".concat(100*t.percent,"%"))},Ie&&Ie.on("la_arxivo_cu_cusku",(function(e){var t=e.seskari,n=e.query,a=e.message;_.searching.seskari===t&&_.searching.query===n&&(I=a||[],N({query:n,seskari:t}))})),c.addEventListener("click",D),window.addEventListener("popstate",J),t.addEventListener("paste",P(0)),t.addEventListener("keyup",(function(){P()})),t.addEventListener("keydown",(function(){clearTimeout(L)})),t.addEventListener("input",P()),t.addEventListener("textInput",P()),t.addEventListener("focus",G),n.addEventListener("click",V),document.getElementById("title").addEventListener("click",V),document.getElementById("rimni").addEventListener("click",(function(){_.searching={seskari:"rimni",query:be(t.value)},W({replace:!1})})),document.getElementById("cnano").addEventListener("click",(function(){_.searching={seskari:"cnano",query:be(t.value)},W({replace:!1})})),document.getElementById("catni").addEventListener("click",(function(){_.searching={seskari:"catni",query:be(t.value)},W({replace:!1})})),window.addEventListener("resize",Y,!0),e.addEventListener("scroll",ne),Y(),document.attachEvent?document.attachEvent("onkeyup",F):document.addEventListener("keyup",F),"loading"===document.readyState&&(o.style.width="37%",document.title="la sutysisku");var ee=null,te=null;function ne(e){var t=e.target;O(),B(),null!==ee&&clearTimeout(ee),null!==te&&clearTimeout(te),"velcusku"!==_.displaying.seskari&&t.scrollTop+window.innerHeight>=a.clientHeight-700?(window.jimte+=10,xe(_.displaying),MathJax.typesetPromise().then((function(){H(),M(!0)}))):(H(),M(!0))}function ae(e,t,n){return e=e.replace(/[\{\}_]/g,""),Math.abs(Math.round(e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)%t/n)*n)}function ie(e){var t=(e=e.substr(1,e.length-2).split("=")).map((function(e){return e.replace(/[^A-Za-z']/g,"")}));return{jalge:t,hasExpansion:e.length>1||t[0]&&"x"!==t[0]}}function re(e){var t=e.v,n=e.fullDef,a=e.subtype,i=e.dataArrAdded,r=e.b,c=e.veljvoLs;return i.includes(r)||"r"!==a&&"lujvo"!==n.t?"":(t=(t=(t=t.substr(1,t.length-2).split("=").map((function(e){return"r"===a?n.w+e.replace(/[^0-9]/g,""):e.replace(/[^0-9A-Za-z']/g,"")}))).filter((function(e){var t=e.replace(/[0-9]/g,"");if(!(c.filter((function(e){return 0===e.indexOf(t)&&e!==t})).length>0))return!0}))).join(","),' data-arr="'.concat(t,'"'))}function ce(e){var t=e.def,n=e.fullDef,a=e.query,i=e.seskari,r=e.type,c=e.subtype,s=e.index,o=0,l=[],u=[],d=[],p=[],g=!1;["cnano","catni","rimni"].includes(i)||(i="cnano");var m=t.replace(/\$.*?\$/g,(function(e,t,n){if("d"===r&&void 0!==s){var a=ie(e);a.hasExpansion&&(g=!0),p=p.concat(a.jalge);var i=n.substr(t),c=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^\\(\\)<>]+?\\)).*")),o=e;0===i.search(c)&&(o=i.replace(c,"$1"));var l={};l[e]=o,u.push(l)}return e}));return{tergeha:"<span>".concat(m.replace(/\$.*?\$/g,(function(e,t,a){if("d"===r&&void 0!==s){var i=a.substr(t),g=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^()<>]+?\\)).*")),m=e;if(0===i.search(g))m=i.replace(g,"$1");else{var h=u.filter((function(t){return t[e]&&t[e]!==m}))[0];h&&(m=h[e])}o++;var f="".concat(s,"_").concat(o),v={};v[e]=f,l.push(v);var y=e.replace(/[^a-zA-Z0-9]/g,""),k=re({subtype:c,v:e,fullDef:n,dataArrAdded:d,b:y,veljvoLs:p});e='<span id="'.concat(f,'" class="terbricmi" style="background-color: hsl(').concat(ae(m,256,16),", 100%, 90%);border-radius:").concat(ae(m,9,1)+3,'px"').concat(k,' data-color="').concat(ae(m,256,16),'">').concat(e,"</span>"),d.push(y)}return e})).replace(/(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,(function(e,t,n,a){if("d"===r){var i=l.filter((function(e){return e[a]!==n&&e[a]}));i[0]&&i[0][a]&&(e=e.replace(/^<span /,'<span data-target="'.concat(i[0][a],'" ')))}return e})).replace(/\$.*?\$/g,(function(e){return e.replace(/\{/g,"\\curlyleft").replace(/\}/g,"\\curlyright")})).replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(function(e){var t='</span><a href="'.concat(e,'" rel="noreferrer" target="_blank">').concat(oe({def:e,query:a}),"</a><span>");return e.match(/^https?:\/\/.*\.(jpg|png)$/)&&(t+="<img class='se-tcidu-pixra' alt='secusku' src=\"".concat(e,'"/>\n')),t})).replace(/\{.*?\}/g,(function(e){e=e.substring(1,e.length-1);return'</span><a class="a-'.concat(i,'" href="#seskari=').concat(i,"&sisku=").concat(Ee(e),'">').concat(oe({def:qe(e,!0),query:a}),"</a><span>")})).replace(/\$.*?\$/g,(function(e){return e.replace(/\\curlyleft/g,"{").replace(/\\curlyright/g,"}")})),"</span>").replace(/<span><\/span>/g,"").replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g,(function(e){return oe({def:e,query:a})})),hasExpansion:g}}function se(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oe(e){var t=e.def,n=e.query;if(!n||""===n)return t;var a="(".concat(se(n).replace(/ /g,"|"),"|").concat(se(n).replace(/'/g,"h").replace(/ /g,"|"),")"),i=new RegExp(a,"igm");return t.replace(i,"<span class='basna'>$1</span>")}var le=60800,ue="ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY";function de(e){return e.replace(/\./g,"").replace(/^/,".").toLowerCase().replace(/([aeiou\.])u([aeiou])/g,"$1w$2").replace(/([aeiou\.])i([aeiou])/g,"$1ɩ$2").replace(/au/g,"ḁ").replace(/ai/g,"ą").replace(/ei/g,"ę").replace(/oi/g,"ǫ").replace(/\./g,"")}function pe(e){return e.replace(/w/g,"u").replace(/ɩ/g,"i").replace(/ḁ/g,"au").replace(/ą/g,"ai").replace(/ę/g,"ei").replace(/ǫ/g,"oi")}function ge(e){var t=e.w,n=e.ot,a=e.rafsiDocuments,i=de(t);return n&&"vlaza'umei"===n?a.map((function(e){return ge(e)})).join(" "):(i=i.split(/(?=[ɩw])/).map((function(e){return pe(e).split("").map((function(e){return me(e)})).join("")})).join("")).replace(/,/g,"")}function me(e){return e.codePointAt(0)>=60800?e:" "==e?" ":("h"!=e&&"H"!=e||(e="'"),ue.includes(e)?String.fromCodePoint(le+ue.indexOf(e)):ue.includes(e.toLowerCase())?String.fromCodePoint(le+ue.indexOf(e.toLowerCase())):"\n"==e?"\n":"\t"==e?"\t":e)}function he(e,t){for(var n,a=new RegExp(e,"g"),i=[];n=a.exec(t);)i.push(n.index);return i}function fe(e,t,n){return n.indexOf(e)===t}function ve(e,t,n){var a=he(t,e);a=a.map((function(t){return(t=[t-n,t+n])[0]<0&&(t[0]=0),t[0]>=e.length&&(t[0]=e.length-1),t}));for(var i=0;i<a.length-1;i++)a[i][1]>a[i+1][0]&&(a[i][1]=a[i+1][1],a[i+1][0]=a[i][0]);if((a=a.map((function(e){return JSON.stringify(e)}))).length>0)a=(a=a.filter(fe).map((function(n){n=JSON.parse(n);var a=e.substr(n[0],n[1]-n[0]);return a=oe({def:a,query:t}),n[0]>3&&(a="...".concat(a)),n[1]<e.length-4&&(a="".concat(a,"...")),a}))).join("<br/>");else{var r=e.substr(0,Math.min(100,e.length));r.length<e.length&&(r="".concat(r,"...")),a=r=oe({def:r,query:t})}return a}function ye(){return m?"⇔":"↔"}function ke(e){var t=e.def,n=e.inner,a=e.query,i=e.seskari,r=e.index,c=e.subtype;a||(a=_.searching.query),i||(i=_.searching.seskari),t||(t=[]);var s=document.createElement("div");if(s.className=n?"terminner":"termouter",s.classList.add("term"),!n&&t.d&&t.d.nasezvafahi&&0===(t.rafsiDocuments||[]).length&&(s.className="sidju cll noselect"),void 0!==x[t.s]){var o=document.createElement("h4");o.className="tfm",o.innerHTML='&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari='.concat(i,"&sisku=").concat(Ee(x[t.s]),'">').concat(qe(x[t.s]),"</a>]</sup></i>")}var l=[];for(var u in x)x[u]===t.w&&l.push('<a href="#seskari='.concat(i,"&sisku=").concat(Ee(u),'">').concat(qe(u),"</a>"));if(0!==l.length){var d=document.createElement("div");d.classList.add("valsi"),t.l&&d.classList.add("nalojbo"),d.innerHTML="<i><sup>[".concat(l.join(", "),"&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;")}if(t.s){var p;(p=document.createElement("a")).className="tutci klesi klesi-tutci";var g=oe({def:qe(t.s),query:a});p.innerHTML=g,"velcusku"!==i&&(p.href="#seskari=".concat(i,"&sisku=").concat(Ee(t.s)))}if(t.t){var m;(m=document.createElement("a")).className="klesi link noselect";g=t.t;var h=Ee(t.w).replace(/_/g,"%20");m.href=window.judri?window.judri+h:"#seskari=".concat("catni"===i?"catni":"cnano","&sisku=").concat(h),window.judri&&(m.setAttribute("target","_blank"),m.setAttribute("rel","noreferrer")),window.xuzganalojudri&&!t.l&&(g="".concat(qe(t.t),"# "),t.d&&t.d.nasezvafahi&&(g="➕ ".concat(g))),m.innerHTML=g}t.date&&((m=document.createElement("div")).className="tutci klesi klesi-tutci",m.style.whiteSpace="nowrap",m.innerHTML=t.date);t.from&&((p=document.createElement("div")).className="tutci klesi klesi-tutci",p.innerHTML=t.from);var f=document.createElement("h4");f.classList.add("valsi"),f.setAttribute("data-valsi",encodeURIComponent(t.w)),t.l&&f.classList.add("nalojbo"),be(t.w)==a||"velcusku"==i?f.innerHTML="".concat(oe({def:t.w,query:a})," "):f.innerHTML='<a class="valsi'.concat(t.l?"":" nalojbo",'" href="#seskari=').concat(i,"&sisku=").concat(Ee(t.w),'">').concat(oe({def:qe(t.w,!0),query:a}),"</a> ");var v={};t.d&&!t.d.nasezvafahi&&(v=ce({def:t.d,fullDef:t,query:a,seskari:i,type:"d",index:r,subtype:c}));var y=document.createElement("h4");y.classList.add("valsi","zbalermorna"),y.textContent=ge(t);var k=document.createElement("heading");if(k.classList.add("heading"),d&&k.appendChild(d),k.appendChild(f),y&&t.w.length<=20&&!window.muplis&&k.appendChild(y),o&&k.appendChild(o),"lujvo"===t.t&&(t.rafsiDocuments||[]).length>0&&v.hasExpansion){var w=document.createElement("input");w.type="button",w.classList.add("tutci","sance","jvo_plumber"),w.value=ye(),w.onclick=M,k.appendChild(w)}var b=document.createElement("heading");b.style.flex=1,k.appendChild(b),m&&k.appendChild(m),p&&k.appendChild(p);try{var E=new Audio("/sutysisku/sance/vreji/".concat(we(t.w),".mp3"));E.id="sance_".concat(we(t.w)),E.addEventListener("canplaythrough",(function(e){var n=Array.from(document.querySelectorAll('[data-valsi="'.concat(we(t.w),'"]')))[0];n&&!document.getElementById("sance_".concat(we(t.w)))&&(n.innerHTML+='<button class="tutci sance" onclick="document.getElementById(\'sance_'.concat(we(t.w),"').play()\">▶</button>"),n.appendChild(E))}))}catch(e){}if(s.appendChild(k),y&&(window.muplis||t.w.length>20)&&s.appendChild(y),"arxivo"!==i&&t.d){if((q=document.createElement("div")).classList.add("definition","valsi"),t.d&&t.d.nasezvafahi)q.classList.add("nasezvafahi","noselect"),q.innerHTML=window.nasezvafahi;else{var L=v.tergeha;"velcusku"!==i&&(L="".concat(L.replace(/\n/g,"<br/>")," ")),q.innerHTML=L}s.appendChild(q)}if("arxivo"===i){var q,I=document.createElement("div");I.classList.add("definition","valsi","pointer"),I.innerHTML=ve(t.d,a,50),I.addEventListener("click",(function(){I.style.display="none",I.nextElementSibling.style.display="block"})),s.appendChild(I),(q=document.createElement("div")).classList.add("definition","valsi"),q.style.display="none",t.d&&t.d.nasezvafahi?(q.classList.add("nasezvafahi","noselect"),q.innerHTML=window.nasezvafahi):(q.innerHTML="".concat(oe({def:t.d,query:a}).replace(/\n/g,"<br/>")," "),q.addEventListener("click",(function(){q.style.display="none",q.previousElementSibling.style.display="block",q.parentElement.scrollIntoView()}))),s.appendChild(q)}t.n&&((q=document.createElement("div")).classList.add("notes","valsi"),q.innerHTML="".concat(ce({def:t.n,query:a,seskari:i}).tergeha," "),s.appendChild(q));if(0==r&&"velcusku"!==i){var C=X();C&&s.appendChild(C)}t.e&&((q=document.createElement("div")).classList.add("examples","valsi"),q.innerHTML="<table class='ciksi'>".concat(ce({def:"".concat(t.e,"\n").replace(/%/g,"\n").replace(/(.*?) — (.*?)\n/g,"<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"),query:a,seskari:i}).tergeha,"</table> "),s.appendChild(q));t.k&&((q=document.createElement("div")).className="related",q.innerHTML="See also: ".concat(ce({def:t.k,query:a,seskari:i}).tergeha," "),s.appendChild(q));if((t.r||[]).length>0&&!t.l&&window.xuzganalojudri){var j=document.createElement("div");for(j.className="rafsi noselect",j.innerHTML="rafsi: ",O=0;O<t.r.length;O++){var S=document.createElement("span");S.className="pamei";var T=t.r[O];if((t.t||"").match(/lujvo/)){var A=document.createElement("a");A.setAttribute("href","#seskari=".concat(i,"&sisku=").concat(Ee(T))),A.text=T,S.appendChild(A)}else S.innerHTML=oe({def:T,query:a});S.innerHTML="".concat(S.innerHTML," "),j.appendChild(S)}s.appendChild(j)}if((t.rafsiDocuments||[]).length>0){var N=document.createElement("div");N.classList.add("definition","subdefinitions");for(var O=0;O<t.rafsiDocuments.length;O++)N.appendChild(ke({def:t.rafsiDocuments[O],inner:!0,index:"".concat(r,"_").concat(O),subtype:"r"}));s.appendChild(N)}return s.addEventListener("click",D),s}function we(e){return encodeURIComponent(e).replace(/'/g,"h")}function be(e){return"^"!==e.charAt(0)&&"$"!==e.slice(-1)?e.replace(/\./g," ").replace(/ {2,}/g," ").replace(/’/g,"'").trim():e}function Ee(e){return encodeURIComponent((e||"").replace(/ /g,"_")).replace(/'/g,"%27")}function Le(e){return decodeURIComponent(e.replace(/&amp;/g,"&").replace(/%27/g,"'")).replace(/[_\+]/g," ")}function qe(e,t){return e=(e||"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;"),t||(e=e.replace(/'/g,"&#039;")),e}function xe(e){var t=e.query,n=e.seskari,i=Math.min(window.jimte,I.length);if(0===E){var r=X(!0);r&&a.appendChild(r)}for(;E<i;E++)a.appendChild(ke({def:I[E],query:t,seskari:n,length:I.length,index:E}))}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(e){var t=e.scope;console.log("ServiceWorker registration successful with scope: ",t)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var Ie,Ce,_e=[["p","t","k","f","s","c"],["b","d","g","v","z","j"],["m","l","n","r",,"x","'"],["a","e","i","o","u","y"],[],["aia","aua"],["au","ai","ei","oi"]],je=document.querySelector("#audio");function Se(e,t,n){var a=document.createElement(e);return a.textContent=t,n&&(a.className=n),a}function Te(e,t,n){var a=document.createElement(e);return n&&(a.className=n),Array.isArray(t)?t.forEach((function(e){a.appendChild(e)})):t&&a.appendChild(t),a}function Ae(e){je.src=e,je.play()}document.querySelector("#table").appendChild(Te("table",_e.map((function(e){return Te("tr",e.map((function(e){var t=Se("button",e,"bangu");return t.onclick=function(){Ae("/sutysisku/sance/lerfu/".concat(encodeURIComponent(e),".ogg"))},Te("td",t)})))})),"centero")),t.focus();