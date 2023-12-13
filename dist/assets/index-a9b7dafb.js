var sa=Object.defineProperty;var fa=(n,t,a)=>t in n?sa(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var cn=(n,t,a)=>(fa(n,typeof t!="symbol"?t+"":t,a),a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();class la{constructor(){cn(this,"max",100);cn(this,"size",50);cn(this,"map",new Map)}seed(t,a){const e=t/this.size,r=a/this.size;for(let i=0;i<r;i++)for(let o=0;o<e;o++)Math.floor(Math.random()*5)==0&&this.bloom(o,i)}bloom(t,a){this.map.set(this.key(t,a),1)}key(t,a){return t+a*this.max}unkey(t){return[t%this.max,Math.floor(t/this.max)]}step(){const t=new Map;for(const a of this.map.keys()){const[e,r]=this.unkey(a),[i,o]=this.neighbors(e,r);(i.length==2||i.length==3)&&t.set(this.key(e,r),1);for(const s of o){const[f,u]=this.unkey(s),[l,d]=this.neighbors(f,u);l.length==3&&t.set(s,1)}}this.map=t}neighbors(t,a){const e=[],r=[];for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)if(o!=0||i!=0){const s=this.key(t+o,a+i);this.map.has(s)?e.push(s):r.push(s)}return[e,r]}draw(t,a,e){t.clearRect(0,0,a,e),t.fillStyle="#012201";for(const r of this.map.keys()){const[i,o]=this.unkey(r);t.fillRect(i*this.size,o*this.size,this.size,this.size)}}}function it(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function c(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?it(Object(a),!0).forEach(function(e){y(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):it(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function xn(n){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(n)}function ca(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function ot(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function ua(n,t,a){return t&&ot(n.prototype,t),a&&ot(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function y(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Xn(n,t){return da(n)||ga(n,t)||It(n,t)||ba()}function sn(n){return ma(n)||va(n)||It(n)||pa()}function ma(n){if(Array.isArray(n))return zn(n)}function da(n){if(Array.isArray(n))return n}function va(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ga(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(n);!(r=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function It(n,t){if(n){if(typeof n=="string")return zn(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return zn(n,t)}}function zn(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var st=function(){},Vn={},Tt={},Mt=null,_t={mark:st,measure:st};try{typeof window<"u"&&(Vn=window),typeof document<"u"&&(Tt=document),typeof MutationObserver<"u"&&(Mt=MutationObserver),typeof performance<"u"&&(_t=performance)}catch{}var ha=Vn.navigator||{},ft=ha.userAgent,lt=ft===void 0?"":ft,D=Vn,b=Tt,ct=Mt,un=_t;D.document;var z=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Lt=~lt.indexOf("MSIE")||~lt.indexOf("Trident/"),mn,dn,vn,gn,pn,M="___FONT_AWESOME___",Rn=16,zt="fa",Rt="svg-inline--fa",G="data-fa-i2svg",Fn="data-fa-pseudo-element",ya="data-fa-pseudo-element-pending",Bn="data-prefix",qn="data-icon",ut="fontawesome-i2svg",ka="async",wa=["HTML","HEAD","STYLE","SCRIPT"],Ft=function(){try{return!0}catch{return!1}}(),p="classic",h="sharp",Kn=[p,h];function fn(n){return new Proxy(n,{get:function(a,e){return e in a?a[e]:a[p]}})}var tn=fn((mn={},y(mn,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),y(mn,h,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),mn)),an=fn((dn={},y(dn,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(dn,h,{solid:"fass",regular:"fasr",light:"fasl"}),dn)),en=fn((vn={},y(vn,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(vn,h,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),vn)),xa=fn((gn={},y(gn,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(gn,h,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gn)),Aa=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Dt="fa-layers-text",Sa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ea=fn((pn={},y(pn,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(pn,h,{900:"fass",400:"fasr",300:"fasl"}),pn)),jt=[1,2,3,4,5,6,7,8,9,10],Oa=jt.concat([11,12,13,14,15,16,17,18,19,20]),Pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(an[p]).map(rn.add.bind(rn));Object.keys(an[h]).map(rn.add.bind(rn));var Ca=[].concat(Kn,sn(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(jt.map(function(n){return"".concat(n,"x")})).concat(Oa.map(function(n){return"w-".concat(n)})),Z=D.FontAwesomeConfig||{};function Na(n){var t=b.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Ia(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(b&&typeof b.querySelector=="function"){var Ta=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ta.forEach(function(n){var t=Xn(n,2),a=t[0],e=t[1],r=Ia(Na(a));r!=null&&(Z[e]=r)})}var Yt={styleDefault:"solid",familyDefault:"classic",cssPrefix:zt,replacementClass:Rt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var K=c(c({},Yt),Z);K.autoReplaceSvg||(K.observeMutations=!1);var m={};Object.keys(Yt).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(a){K[n]=a,nn.forEach(function(e){return e(m)})},get:function(){return K[n]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,nn.forEach(function(a){return a(m)})},get:function(){return K.cssPrefix}});D.FontAwesomeConfig=m;var nn=[];function Ma(n){return nn.push(n),function(){nn.splice(nn.indexOf(n),1)}}var F=Rn,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _a(n){if(!(!n||!z)){var t=b.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=b.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return b.head.insertBefore(t,e),n}}var La="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var n=12,t="";n-- >0;)t+=La[Math.random()*62|0];return t}function Q(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}function Qn(n){return n.classList?Q(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $t(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function za(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat($t(n[a]),'" ')},"").trim()}function On(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}function Jn(n){return n.size!==I.size||n.x!==I.x||n.y!==I.y||n.rotate!==I.rotate||n.flipX||n.flipY}function Ra(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Fa(n){var t=n.transform,a=n.width,e=a===void 0?Rn:a,r=n.height,i=r===void 0?Rn:r,o=n.startCentered,s=o===void 0?!1:o,f="";return s&&Lt?f+="translate(".concat(t.x/F-e/2,"em, ").concat(t.y/F-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/F,"em), calc(-50% + ").concat(t.y/F,"em)) "):f+="translate(".concat(t.x/F,"em, ").concat(t.y/F,"em) "),f+="scale(".concat(t.size/F*(t.flipX?-1:1),", ").concat(t.size/F*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Da=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ut(){var n=zt,t=Rt,a=m.cssPrefix,e=m.replacementClass,r=Da;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var mt=!1;function Tn(){m.autoAddCss&&!mt&&(_a(Ut()),mt=!0)}var ja={mixout:function(){return{dom:{css:Ut,insertCss:Tn}}},hooks:function(){return{beforeDOMElementCreation:function(){Tn()},beforeI2svg:function(){Tn()}}}},_=D||{};_[M]||(_[M]={});_[M].styles||(_[M].styles={});_[M].hooks||(_[M].hooks={});_[M].shims||(_[M].shims=[]);var P=_[M],Ht=[],Ya=function n(){b.removeEventListener("DOMContentLoaded",n),An=1,Ht.map(function(t){return t()})},An=!1;z&&(An=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),An||b.addEventListener("DOMContentLoaded",Ya));function $a(n){z&&(An?setTimeout(n,0):Ht.push(n))}function ln(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?$t(n):"<".concat(t," ").concat(za(e),">").concat(i.map(ln).join(""),"</").concat(t,">")}function dt(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}var Ua=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},Mn=function(t,a,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Ua(a,r):a,f,u,l;for(e===void 0?(f=1,l=t[i[0]]):(f=0,l=e);f<o;f++)u=i[f],l=s(l,t[u],u,t);return l};function Ha(n){for(var t=[],a=0,e=n.length;a<e;){var r=n.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=n.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function Dn(n){var t=Ha(n);return t.length===1?t[0].toString(16):null}function Wa(n,t){var a=n.length,e=n.charCodeAt(t),r;return e>=55296&&e<=56319&&a>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function vt(n){return Object.keys(n).reduce(function(t,a){var e=n[a],r=!!e.icon;return r?t[e.iconName]=e.icon:t[a]=e,t},{})}function jn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=vt(t);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(n,vt(t)):P.styles[n]=c(c({},P.styles[n]||{}),i),n==="fas"&&jn("fa",t)}var bn,hn,yn,V=P.styles,Ga=P.shims,Xa=(bn={},y(bn,p,Object.values(en[p])),y(bn,h,Object.values(en[h])),bn),Zn=null,Wt={},Gt={},Xt={},Vt={},Bt={},Va=(hn={},y(hn,p,Object.keys(tn[p])),y(hn,h,Object.keys(tn[h])),hn);function Ba(n){return~Ca.indexOf(n)}function qa(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!Ba(r)?r:null}var qt=function(){var t=function(i){return Mn(V,function(o,s,f){return o[f]=Mn(s,i,{}),o},{})};Wt=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Gt=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Bt=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in V||m.autoFetchSvg,e=Mn(Ga,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Xt=e.names,Vt=e.unicodes,Zn=Pn(m.styleDefault,{family:m.familyDefault})};Ma(function(n){Zn=Pn(n.styleDefault,{family:m.familyDefault})});qt();function nt(n,t){return(Wt[n]||{})[t]}function Ka(n,t){return(Gt[n]||{})[t]}function W(n,t){return(Bt[n]||{})[t]}function Kt(n){return Xt[n]||{prefix:null,iconName:null}}function Qa(n){var t=Vt[n],a=nt("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function j(){return Zn}var tt=function(){return{prefix:null,iconName:null,rest:[]}};function Pn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,e=a===void 0?p:a,r=tn[e][n],i=an[e][n]||an[e][r],o=n in P.styles?n:null;return i||o||null}var gt=(yn={},y(yn,p,Object.keys(en[p])),y(yn,h,Object.keys(en[h])),yn);function Cn(n){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(t={},y(t,p,"".concat(m.cssPrefix,"-").concat(p)),y(t,h,"".concat(m.cssPrefix,"-").concat(h)),t),o=null,s=p;(n.includes(i[p])||n.some(function(u){return gt[p].includes(u)}))&&(s=p),(n.includes(i[h])||n.some(function(u){return gt[h].includes(u)}))&&(s=h);var f=n.reduce(function(u,l){var d=qa(m.cssPrefix,l);if(V[l]?(l=Xa[s].includes(l)?xa[s][l]:l,o=l,u.prefix=l):Va[s].indexOf(l)>-1?(o=l,u.prefix=Pn(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[p]&&l!==i[h]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var v=o==="fa"?Kt(u.iconName):{},g=W(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||g||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!V.far&&V.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},tt());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===h&&(V.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=W(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=j()||"fas"),f}var Ja=function(){function n(){ca(this,n),this.definitions={}}return ua(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c(c({},a.definitions[s]||{}),o[s]),jn(s,o[s]);var f=en[p][s];f&&jn(f,o[s]),qt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][f]=u}),a}}]),n}(),pt=[],B={},q={},Za=Object.keys(q);function ne(n,t){var a=t.mixoutsTo;return pt=n,B={},Object.keys(q).forEach(function(e){Za.indexOf(e)===-1&&delete q[e]}),pt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),xn(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){B[o]||(B[o]=[]),B[o].push(i[o])})}e.provides&&e.provides(q)}),a}function Yn(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=B[n]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(e))}),t}function X(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var r=B[n]||[];r.forEach(function(i){i.apply(null,a)})}function L(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[n]?q[n].apply(null,t):void 0}function $n(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||j();if(t)return t=W(a,t)||t,dt(Qt.definitions,a,t)||dt(P.styles,a,t)}var Qt=new Ja,te=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},ae={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(X("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,$a(function(){re({autoReplaceSvgRoot:a}),X("watch",t)})}},ee={icon:function(t){if(t===null)return null;if(xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=Pn(t[0]);return{prefix:e,iconName:W(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Aa))){var r=Cn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=j();return{prefix:i,iconName:W(i,t)||t}}}},S={noAuto:te,config:m,dom:ae,parse:ee,library:Qt,findIconDefinition:$n,toHtml:ln},re=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?b:a;(Object.keys(P.styles).length>0||m.autoFetchSvg)&&z&&m.autoReplaceSvg&&S.dom.i2svg({node:e})};function Nn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return ln(e)})}}),Object.defineProperty(n,"node",{get:function(){if(z){var e=b.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function ie(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(Jn(o)&&a.found&&!e.found){var s=a.width,f=a.height,u={x:s/f/2,y:.5};r.style=On(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function oe(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:e}]}]}function at(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,u=n.maskId,l=n.titleId,d=n.extra,v=n.watchable,g=v===void 0?!1:v,w=e.found?e:a,E=w.width,O=w.height,C=r==="fak",k=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(R){return d.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(d.classes).join(" "),x={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(O)})},N=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/O*16*.0625,"em")}:{};g&&(x.attributes[G]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||on())},children:[f]}),delete x.attributes.title);var A=c(c({},x),{},{prefix:r,iconName:i,main:a,mask:e,maskId:u,transform:o,symbol:s,styles:c(c({},N),d.styles)}),$=e.found&&a.found?L("generateAbstractMask",A)||{children:[],attributes:{}}:L("generateAbstractIcon",A)||{children:[],attributes:{}},U=$.children,In=$.attributes;return A.children=U,A.attributes=In,s?oe(A):ie(A)}function bt(n){var t=n.content,a=n.width,e=n.height,r=n.transform,i=n.title,o=n.extra,s=n.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[G]="");var l=c({},o.styles);Jn(r)&&(l.transform=Fa({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var d=On(l);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function se(n){var t=n.content,a=n.title,e=n.extra,r=c(c(c({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=On(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var _n=P.styles;function Un(n){var t=n[0],a=n[1],e=n.slice(4),r=Xn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var fe={found:!1,width:512,height:512};function le(n,t){!Ft&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Hn(n,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=j()),new Promise(function(e,r){if(L("missingIconAbstract"),a==="fa"){var i=Kt(n)||{};n=i.iconName||n,t=i.prefix||t}if(n&&t&&_n[t]&&_n[t][n]){var o=_n[t][n];return e(Un(o))}le(n,t),e(c(c({},fe),{},{icon:m.showMissingIcons&&n?L("missingIconAbstract")||{}:{}}))})}var ht=function(){},Wn=m.measurePerformance&&un&&un.mark&&un.measure?un:{mark:ht,measure:ht},J='FA "6.4.0"',ce=function(t){return Wn.mark("".concat(J," ").concat(t," begins")),function(){return Jt(t)}},Jt=function(t){Wn.mark("".concat(J," ").concat(t," ends")),Wn.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))},et={begin:ce,end:Jt},kn=function(){};function yt(n){var t=n.getAttribute?n.getAttribute(G):null;return typeof t=="string"}function ue(n){var t=n.getAttribute?n.getAttribute(Bn):null,a=n.getAttribute?n.getAttribute(qn):null;return t&&a}function me(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function de(){if(m.autoReplaceSvg===!0)return wn.replace;var n=wn[m.autoReplaceSvg];return n||wn.replace}function ve(n){return b.createElementNS("http://www.w3.org/2000/svg",n)}function ge(n){return b.createElement(n)}function Zt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,e=a===void 0?n.tag==="svg"?ve:ge:a;if(typeof n=="string")return b.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var i=n.children||[];return i.forEach(function(o){r.appendChild(Zt(o,{ceFn:e}))}),r}function pe(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var wn={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Zt(r),a)}),a.getAttribute(G)===null&&m.keepOriginalSource){var e=b.createComment(pe(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~Qn(a).indexOf(m.replacementClass))return wn.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ln(s)}).join(`
`);a.setAttribute(G,""),a.innerHTML=o}};function kt(n){n()}function na(n,t){var a=typeof t=="function"?t:kn;if(n.length===0)a();else{var e=kt;m.mutateApproach===ka&&(e=D.requestAnimationFrame||kt),e(function(){var r=de(),i=et.begin("mutate");n.map(r),i(),a()})}}var rt=!1;function ta(){rt=!0}function Gn(){rt=!1}var Sn=null;function wt(n){if(ct&&m.observeMutations){var t=n.treeCallback,a=t===void 0?kn:t,e=n.nodeCallback,r=e===void 0?kn:e,i=n.pseudoElementsCallback,o=i===void 0?kn:i,s=n.observeMutationsRoot,f=s===void 0?b:s;Sn=new ct(function(u){if(!rt){var l=j();Q(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!yt(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&yt(d.target)&&~Pa.indexOf(d.attributeName))if(d.attributeName==="class"&&ue(d.target)){var v=Cn(Qn(d.target)),g=v.prefix,w=v.iconName;d.target.setAttribute(Bn,g||l),w&&d.target.setAttribute(qn,w)}else me(d.target)&&r(d.target)})}}),z&&Sn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function be(){Sn&&Sn.disconnect()}function he(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function ye(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=Cn(Qn(n));return r.prefix||(r.prefix=j()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Ka(r.prefix,n.innerText)||nt(r.prefix,Dn(n.innerText))),!r.iconName&&m.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function ke(n){var t=Q(n.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return m.autoA11y&&(a?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||on()):(t["aria-hidden"]="true",t.focusable="false")),t}function we(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=ye(n),e=a.iconName,r=a.prefix,i=a.rest,o=ke(n),s=Yn("parseNodeAttributes",{},n),f=t.styleParser?he(n):[];return c({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var xe=P.styles;function aa(n){var t=m.autoReplaceSvg==="nest"?xt(n,{styleParser:!1}):xt(n);return~t.extra.classes.indexOf(Dt)?L("generateLayersText",n,t):L("generateSvgReplacementMutation",n,t)}var Y=new Set;Kn.map(function(n){Y.add("fa-".concat(n))});Object.keys(tn[p]).map(Y.add.bind(Y));Object.keys(tn[h]).map(Y.add.bind(Y));Y=sn(Y);function At(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=b.documentElement.classList,e=function(d){return a.add("".concat(ut,"-").concat(d))},r=function(d){return a.remove("".concat(ut,"-").concat(d))},i=m.autoFetchSvg?Y:Kn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(xe));i.includes("fa")||i.push("fa");var o=[".".concat(Dt,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Q(n.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=et.begin("onTree"),u=s.reduce(function(l,d){try{var v=aa(d);v&&l.push(v)}catch(g){Ft||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(v){na(v,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),f(),l()})}).catch(function(v){f(),d(v)})})}function Ae(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aa(n).then(function(a){a&&na([a],t)})}function Se(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:$n(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:$n(r||{})),n(e,c(c({},a),{},{mask:r}))}}var Ee=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?I:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,u=a.maskId,l=u===void 0?null:u,d=a.title,v=d===void 0?null:d,g=a.titleId,w=g===void 0?null:g,E=a.classes,O=E===void 0?[]:E,C=a.attributes,k=C===void 0?{}:C,x=a.styles,N=x===void 0?{}:x;if(t){var A=t.prefix,$=t.iconName,U=t.icon;return Nn(c({type:"icon"},t),function(){return X("beforeDOMElementCreation",{iconDefinition:t,params:a}),m.autoA11y&&(v?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(w||on()):(k["aria-hidden"]="true",k.focusable="false")),at({icons:{main:Un(U),mask:f?Un(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:$,transform:c(c({},I),r),symbol:o,title:v,maskId:l,titleId:w,extra:{attributes:k,styles:N,classes:O}})})}},Oe={mixout:function(){return{icon:Se(Ee)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=At,a.nodeCallback=Ae,a}}},provides:function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?b:e,i=a.callback,o=i===void 0?function(){}:i;return At(r,o)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,u=e.symbol,l=e.mask,d=e.maskId,v=e.extra;return new Promise(function(g,w){Promise.all([Hn(r,s),l.iconName?Hn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var O=Xn(E,2),C=O[0],k=O[1];g([a,at({icons:{main:C,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=On(s);f.length>0&&(r.style=f);var u;return Jn(o)&&(u=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},Pe={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Nn({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:o}]})}}}},Ce={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,u=f===void 0?{}:f,l=e.styles,d=l===void 0?{}:l;return Nn({type:"counter",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:e}),se({content:a.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(sn(s))}})})}}}},Ne={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?I:r,o=e.title,s=o===void 0?null:o,f=e.classes,u=f===void 0?[]:f,l=e.attributes,d=l===void 0?{}:l,v=e.styles,g=v===void 0?{}:v;return Nn({type:"text",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:e}),bt({content:a,transform:c(c({},I),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(sn(u))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Lt){var u=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,bt({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ie=new RegExp('"',"ug"),St=[1105920,1112319];function Te(n){var t=n.replace(Ie,""),a=Wa(t,0),e=a>=St[0]&&a<=St[1],r=t.length===2?t[0]===t[1]:!1;return{value:Dn(r?t[0]:t),isSecondary:e||r}}function Et(n,t){var a="".concat(ya).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var i=Q(n.children),o=i.filter(function(U){return U.getAttribute(Fn)===t})[0],s=D.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(Sa),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return n.removeChild(o),e();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?h:p,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?an[v][f[2].toLowerCase()]:Ea[v][u],w=Te(d),E=w.value,O=w.isSecondary,C=f[0].startsWith("FontAwesome"),k=nt(g,E),x=k;if(C){var N=Qa(E);N.iconName&&N.prefix&&(k=N.iconName,g=N.prefix)}if(k&&!O&&(!o||o.getAttribute(Bn)!==g||o.getAttribute(qn)!==x)){n.setAttribute(a,x),o&&n.removeChild(o);var A=we(),$=A.extra;$.attributes[Fn]=t,Hn(k,g).then(function(U){var In=at(c(c({},A),{},{icons:{main:U,mask:tt()},prefix:g,iconName:x,extra:$,watchable:!0})),R=b.createElement("svg");t==="::before"?n.insertBefore(R,n.firstChild):n.appendChild(R),R.outerHTML=In.map(function(oa){return ln(oa)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Me(n){return Promise.all([Et(n,"::before"),Et(n,"::after")])}function _e(n){return n.parentNode!==document.head&&!~wa.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Fn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Ot(n){if(z)return new Promise(function(t,a){var e=Q(n.querySelectorAll("*")).filter(_e).map(Me),r=et.begin("searchPseudoElements");ta(),Promise.all(e).then(function(){r(),Gn(),t()}).catch(function(){r(),Gn(),a()})})}var Le={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ot,a}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?b:e;m.searchPseudoElements&&Ot(r)}}},Pt=!1,ze={mixout:function(){return{dom:{unwatch:function(){ta(),Pt=!0}}}},hooks:function(){return{bootstrap:function(){wt(Yn("mutationObserverCallbacks",{}))},noAuto:function(){be()},watch:function(a){var e=a.observeMutationsRoot;Pt?Gn():wt(Yn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ct=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Re={mixout:function(){return{parse:{transform:function(a){return Ct(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=Ct(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:v};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c(c({},e.icon.attributes),g.path)}]}]}}}},Ln={x:0,y:0,width:"100%",height:"100%"};function Nt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Fe(n){return n.tag==="g"?n.children:[n]}var De={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Cn(r.split(" ").map(function(o){return o.trim()})):tt();return i.prefix||(i.prefix=j()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,u=i.width,l=i.icon,d=o.width,v=o.icon,g=Ra({transform:f,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:c(c({},Ln),{},{fill:"white"})},E=l.children?{children:l.children.map(Nt)}:{},O={tag:"g",attributes:c({},g.inner),children:[Nt(c({tag:l.tag,attributes:c(c({},l.attributes),g.path)},E))]},C={tag:"g",attributes:c({},g.outer),children:[O]},k="mask-".concat(s||on()),x="clip-".concat(s||on()),N={tag:"mask",attributes:c(c({},Ln),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,C]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Fe(v)},N]};return e.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},Ln)}),{children:e,attributes:r}}}},je={provides:function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ye={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},$e=[ja,Oe,Pe,Ce,Ne,Le,ze,Re,De,je,Ye];ne($e,{mixoutsTo:S});S.noAuto;S.config;var Ue=S.library,He=S.dom;S.parse;S.findIconDefinition;S.toHtml;S.icon;S.layer;S.text;S.counter;var We={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Ge={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Xe={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ve={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]},Be={prefix:"fas",iconName:"at",icon:[512,512,[61946],"40","M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]};Ue.add(Ge,Ve,Xe,We,Be);He.watch();const En=new la,T=document.querySelector("canvas"),ea=T.getContext("2d");window.addEventListener("resize",ra);function ra(){T.width=window.innerWidth,T.height=window.innerHeight,En.draw(ea,T.width,T.height)}ra();En.seed(T.width,T.height);setInterval(ia,1e3);function ia(){En.draw(ea,T.width,T.height),En.step()}ia();
