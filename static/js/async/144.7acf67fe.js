"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["144"],{4482:function(e,t,r){r.d(t,{ZP:()=>tg});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function s(e,t,r){if(r||2==arguments.length)for(var n,s=0,o=t.length;s<o;s++)(n||!(s in t))&&(!n&&(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))}var o=r("7294"),a=r("6774"),i=r.n(a),c="-ms-",u="-moz-",l="-webkit-",p="comm",f="rule",h="decl",d="@keyframes",g=Math.abs,m=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function S(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,r){return e.replace(t,r)}function w(e,t,r){return e.indexOf(t,r)}function C(e,t){return 0|e.charCodeAt(t)}function I(e,t,r){return e.slice(t,r)}function P(e){return e.length}function x(e){return e.length}function A(e,t){return t.push(e),e}function k(e,t){return e.filter(function(e){return!S(e,t)})}var E=1,$=1,R=0,_=0,O=0,N="";function j(e,t,r,n,s,o,a,i){return{value:e,root:t,parent:r,type:n,props:s,children:o,line:E,column:$,length:a,return:"",siblings:i}}function D(e,t){return v(j("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function T(e){for(;e.root;)e=D(e.root,{children:[e]});A(e,e.siblings)}function F(){return O=_<R?C(N,_++):0,$++,10===O&&($=1,E++),O}function z(){return C(N,_)}function G(){return _}function M(e,t){return I(N,e,t)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L(e){var t,r;return(t=_-1,r=function e(t){for(;F();)switch(O){case t:return _;case 34:case 39:34!==t&&39!==t&&e(O);break;case 40:41===t&&e(t);break;case 92:F()}return _}(91===e?e+2:40===e?e+1:e),I(N,t,r)).trim()}function W(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Y(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case h:return e.return=e.return||e.value;case p:return"";case d:return e.return=e.value+"{"+W(e.children,n)+"}";case f:if(!P(e.value=e.props.join(",")))return""}return P(r=W(e.children,n))?e.return=e.value+"{"+r+"}":""}function H(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case h:e.return=function e(t,r,n){var s,o;switch(s=t,o=r,45^C(s,0)?(((o<<2^C(s,0))<<2^C(s,1))<<2^C(s,2))<<2^C(s,3):0){case 5103:return l+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+t+t;case 4789:return u+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return l+t+u+t+c+t+t;case 5936:switch(C(t,r+11)){case 114:return l+t+c+b(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return l+t+c+b(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return l+t+c+b(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return l+t+c+t+t;case 6165:return l+t+c+"flex-"+t+t;case 5187:return l+t+b(t,/(\w+).+(:[^]+)/,l+"box-$1$2"+c+"flex-$1$2")+t;case 5443:return l+t+c+"flex-item-"+b(t,/flex-|-self/g,"")+(S(t,/flex-|baseline/)?"":c+"grid-row-"+b(t,/flex-|-self/g,""))+t;case 4675:return l+t+c+"flex-line-pack"+b(t,/align-content|flex-|-self/g,"")+t;case 5548:return l+t+c+b(t,"shrink","negative")+t;case 5292:return l+t+c+b(t,"basis","preferred-size")+t;case 6060:return l+"box-"+b(t,"-grow","")+l+t+c+b(t,"grow","positive")+t;case 4554:return l+b(t,/([^-])(transform)/g,"$1"+l+"$2")+t;case 6187:return b(b(b(t,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),t,"")+t;case 5495:case 3959:return b(t,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return b(b(t,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+t+t;case 4200:if(!S(t,/flex-|baseline/))return c+"grid-column-align"+I(t,r)+t;break;case 2592:case 3360:return c+b(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,S(e.props,/grid-\w+-end/)}))return~w(t+(n=n[r].value),"span",0)?t:c+b(t,"-start","")+t+c+"grid-row-span:"+(~w(n,"span",0)?S(n,/\d+/):+S(n,/\d+/)-+S(t,/\d+/))+";";return c+b(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return S(e.props,/grid-\w+-start/)})?t:c+b(b(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return b(t,/(.+)-inline(.+)/,l+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(t)-1-r>6)switch(C(t,r+1)){case 109:if(45!==C(t,r+4))break;case 102:return b(t,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+u+(108==C(t,r+3)?"$3":"$2-$3"))+t;case 115:return~w(t,"stretch",0)?e(b(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return b(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,s,o,a,i){return c+r+":"+n+i+(s?c+r+"-span:"+(o?a:+a-+n)+i:"")+t});case 4949:if(121===C(t,r+6))return b(t,":",":"+l)+t;break;case 6444:switch(C(t,45===C(t,14)?18:11)){case 120:return b(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===C(t,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+c+"$2box$3")+t;case 100:return b(t,":",":"+c)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case d:return W([D(e,{value:b(e.value,"@","@"+l)})],n);case f:if(e.length){var s,o;return s=r=e.props,o=function(t){switch(S(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":T(D(e,{props:[b(t,/:(read-\w+)/,":"+u+"$1")]})),T(D(e,{props:[t]})),v(e,{props:k(r,n)});break;case"::placeholder":T(D(e,{props:[b(t,/:(plac\w+)/,":"+l+"input-$1")]})),T(D(e,{props:[b(t,/:(plac\w+)/,":"+u+"$1")]})),T(D(e,{props:[b(t,/:(plac\w+)/,c+"input-$1")]})),T(D(e,{props:[t]})),v(e,{props:k(r,n)})}return""},s.map(o).join("")}}}function q(e,t,r,n,s,o,a,i,c,u,l,p){for(var h=s-1,d=0===s?o:[""],m=d.length,v=0,y=0,S=0;v<n;++v)for(var w=0,C=I(e,h+1,h=g(y=a[v])),P=e;w<m;++w)if(P=(y>0?d[w]+" "+C:b(C,/&\f/g,d[w])).trim())c[S++]=P;return j(e,t,r,0===s?f:i,c,u,l,p)}function U(e,t,r,n,s){return j(e,t,r,h,I(e,0,n),I(e,n+1,-1),n,s)}var V={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Z="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",J="active",K="data-styled-version",Q="6.1.13",X="/*!sc*/\n",ee="undefined"!=typeof window&&"HTMLElement"in window,et=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),er=Object.freeze([]),en=Object.freeze({}),es=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ea=/(^-|-$)/g;function ei(e){return e.replace(eo,"-").replace(ea,"")}var ec=/(a)(d)/gi,eu=function(e){return String.fromCharCode(e+(e>25?39:97))};function el(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=eu(t%52)+r;return(eu(t%52)+r).replace(ec,"$1-$2")}var ep,ef=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},eh=function(e){return ef(5381,e)};function ed(e){return"string"==typeof e}var eg="function"==typeof Symbol&&Symbol.for,em=eg?Symbol.for("react.memo"):60115,ev=eg?Symbol.for("react.forward_ref"):60112,ey={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ew=((ep={})[ev]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ep[em]=eb,ep);function eC(e){return("type"in e&&e.type.$$typeof)===em?eb:"$$typeof"in e?ew[e.$$typeof]:ey}var eI=Object.defineProperty,eP=Object.getOwnPropertyNames,ex=Object.getOwnPropertySymbols,eA=Object.getOwnPropertyDescriptor,ek=Object.getPrototypeOf,eE=Object.prototype;function e$(e){return"function"==typeof e}function eR(e){return"object"==typeof e&&"styledComponentId"in e}function e_(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eO(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function eN(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ej(e,t){Object.defineProperty(e,"toString",{value:t})}function eD(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eT=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,s=n;e>=s;)if((s<<=1)<0)throw eD(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=n;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),i=(o=0,t.length);o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var s=r;s<n;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r,o=n;o<s;o++)t+="".concat(this.tag.getRule(o)).concat(X);return t},e}(),eF=new Map,ez=new Map,eG=1,eM=function(e){if(eF.has(e))return eF.get(e);for(;ez.has(eG);)eG++;var t=eG++;return eF.set(e,t),ez.set(t,e),t},eB=function(e,t){eG=t+1,eF.set(e,t),ez.set(t,e)},eL="style[".concat(Z,"][").concat(K,'="').concat(Q,'"]'),eW=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eY=function(e,t,r){for(var n,s=r.split(","),o=0,a=s.length;o<a;o++)(n=s[o])&&e.registerName(t,n)},eH=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(X),s=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var c=i.match(eW);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(eB(l,u),eY(e,l,c[3]),e.getTag().insertRules(u,s)),s.length=0}else s.push(i)}}},eq=function(e){for(var t=document.querySelectorAll(eL),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(Z)!==J&&(eH(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function eU(){return r.nc}var eV=function(e){var t,n=document.head,s=e||n,o=document.createElement("style"),a=(t=Array.from(s.querySelectorAll("style[".concat(Z,"]"))))[t.length-1],i=void 0!==a?a.nextSibling:null;o.setAttribute(Z,J),o.setAttribute(K,Q);var c=r.nc;return c&&o.setAttribute("nonce",c),s.insertBefore(o,i),o},eZ=function(){function e(e){this.element=eV(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var s=t[r];if(s.ownerNode===e)return s}throw eD(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eJ=function(){function e(e){this.element=eV(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eK=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eQ=ee,eX={isServer:!ee,useCSSOMInjection:!et},e0=function(){function e(e,t,r){void 0===e&&(e=en),void 0===t&&(t={});var s=this;this.options=n(n({},eX),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ee&&eQ&&(eQ=!1,eq(this)),ej(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",s=0;s<r;s++)(function(r){var s,o=(s=r,ez.get(s));if(void 0===o)return;var a=e.names.get(o),i=t.getGroup(r);if(void 0===a||!a.size||0===i.length)return;var c="".concat(Z,".g").concat(r,'[id="').concat(o,'"]'),u="";void 0!==a&&a.forEach(function(e){e.length>0&&(u+="".concat(e,","))}),n+="".concat(i).concat(c,'{content:"').concat(u,'"}').concat(X)})(s);return n}(s)})}return e.registerId=function(e){return eM(e)},e.prototype.rehydrate=function(){!this.server&&ee&&eq(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new eT(e.isServer?new eK(r):t?new eZ(r):new eJ(r))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(eM(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(eM(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(eM(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e1=/&/g,e5=/^\s*\/\/.*$/gm;function e2(e){var t,r,n,s=void 0===e?en:e,o=s.options,a=void 0===o?en:o,i=s.plugins,c=void 0===i?er:i,u=function(e,n,s){return s.startsWith(r)&&s.endsWith(r)&&s.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push(function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(e1,r).replace(n,u))}),a.prefix&&l.push(H),l.push(Y);var h=function(e,s,o,i){void 0===s&&(s=""),void 0===o&&(o=""),void 0===i&&(i="&"),t=i,r=s,n=RegExp("\\".concat(r,"\\b"),"g");var c,u,f,h,d=e.replace(e5,""),v=(f=function e(t,r,n,s,o,a,i,c,u){for(var l=0,f=0,h=i,d=0,v=0,y=0,S=1,x=1,k=1,R=0,D="",T=o,G=a,M=s,W=D;x;)switch(y=R,R=F()){case 40:if(108!=y&&58==C(W,h-1)){-1!=w(W+=b(L(R),"&","&\f"),"&\f",g(l?c[l-1]:0))&&(k=-1);break}case 34:case 39:case 91:W+=L(R);break;case 9:case 10:case 13:case 32:W+=function(e){for(;O=z();)if(O<33)F();else break;return B(e)>2||B(O)>3?"":" "}(y);break;case 92:W+=function(e,t){for(var r,n;--t&&F()&&!(O<48)&&!(O>102)&&(!(O>57)||!(O<65))&&(!(O>70)||!(O<97)););return r=e,n=_+(t<6&&32==z()&&32==F()),I(N,r,n)}(_-1,7);continue;case 47:switch(z()){case 42:case 47:A(function(e,t,r,n){return j(e,t,r,p,m(O),I(e,2,-2),0,n)}(function(e,t){for(;F();)if(e+O===57)break;else if(e+O===84&&47===z())break;return"/*"+I(N,t,_-1)+"*"+m(47===e?e:F())}(F(),_),r,n,u),u);break;default:W+="/"}break;case 123*S:c[l++]=P(W)*k;case 125*S:case 59:case 0:switch(R){case 0:case 125:x=0;case 59+f:-1==k&&(W=b(W,/\f/g,"")),v>0&&P(W)-h&&A(v>32?U(W+";",s,n,h-1,u):U(b(W," ","")+";",s,n,h-2,u),u);break;case 59:W+=";";default:if(A(M=q(W,r,n,l,f,o,c,D,T=[],G=[],h,a),a),123===R){if(0===f)e(W,r,M,M,T,a,h,c,G);else switch(99===d&&110===C(W,3)?100:d){case 100:case 108:case 109:case 115:e(t,M,M,s&&A(q(t,M,M,0,0,o,c,D,o,T=[],h,G),G),o,G,h,c,s?T:G);break;default:e(W,M,M,M,[""],G,0,c,G)}}}l=f=v=0,S=k=1,D=W="",h=i;break;case 58:h=1+P(W),v=y;default:if(S<1){if(123==R)--S;else if(125==R&&0==S++&&125==(O=_>0?C(N,--_):0,$--,10===O&&($=1,E--),O))continue}switch(W+=m(R),R*S){case 38:k=f>0?1:(W+="\f",-1);break;case 44:c[l++]=(P(W)-1)*k,k=1;break;case 64:45===z()&&(W+=L(F())),d=z(),f=h=P(D=W+=function(e){for(;!B(z());)F();return I(N,e,_)}(_)),R++;break;case 45:45===y&&2==P(W)&&(S=0)}}return a}("",null,null,null,[""],(u=c=o||s?"".concat(o," ").concat(s," { ").concat(d," }"):d,E=$=1,R=P(N=u),_=0,c=[]),0,[0],c),N="",f);a.namespace&&(v=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(v,a.namespace));var y=[];return W(v,function(e){var t=e.length;return function(r,n,s,o){for(var a="",i=0;i<t;i++)a+=e[i](r,n,s,o)||"";return a}}(l.concat((h=function(e){return y.push(e)},function(e){!e.root&&(e=e.return)&&h(e)})))),y};return h.hash=c.length?c.reduce(function(e,t){return t.name||eD(15),ef(e,t.name)},5381).toString():"",h}var e4=new e0,e3=e2(),e9=o.createContext({shouldForwardProp:void 0,styleSheet:e4,stylis:e3}),e6=(e9.Consumer,o.createContext(void 0));function e7(){return(0,o.useContext)(e9)}function e8(e){var t=(0,o.useState)(e.stylisPlugins),r=t[0],n=t[1],s=e7().styleSheet,a=(0,o.useMemo)(function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,s]),c=(0,o.useMemo)(function(){return e2({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,o.useEffect)(function(){i()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var u=(0,o.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:c}},[e.shouldForwardProp,a,c]);return o.createElement(e9.Provider,{value:u},o.createElement(e6.Provider,{value:c},e.children))}var te=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=e3);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ej(this,function(){throw eD(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e3),this.name+e.hash},e}();function tt(e){for(var t="",r=0;r<e.length;r++){var n,s=e[r];if(1===r&&"-"===s&&"-"===e[0])return e;(n=s)>="A"&&n<="Z"?t+="-"+s.toLowerCase():t+=s}return t.startsWith("ms-")?"-"+t:t}var tr=function(e){return null==e||!1===e||""===e},tn=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!tr(n)&&(Array.isArray(n)&&n.isCss||e$(n)?t.push("".concat(tt(r),":"),n,";"):eN(n)?t.push.apply(t,s(s(["".concat(r," {")],tn(n),!1),["}"],!1)):t.push("".concat(tt(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in V||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function ts(e,t,r,n){if(tr(e))return[];if(eR(e))return[".".concat(e.styledComponentId)];if(e$(e)){if(!e$(e)||e.prototype&&e.prototype.isReactComponent||!t)return[e];return ts(e(t),t,r,n)}return e instanceof te?r?(e.inject(r,n),[e.getName(n)]):[e]:eN(e)?tn(e):Array.isArray(e)?Array.prototype.concat.apply(er,e.map(function(e){return ts(e,t,r,n)})):[e.toString()]}function to(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(e$(r)&&!eR(r))return!1}return!0}var ta=eh(Q),ti=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&to(e),this.componentId=t,this.baseHash=ef(ta,t),this.baseStyle=r,e0.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=e_(n,this.staticRulesId);else{var s=eO(ts(this.rules,e,t,r)),o=el(ef(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=e_(n,o),this.staticRulesId=o}}else{for(var i=ef(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var p=eO(ts(l,e,t,r));i=ef(i,p+u),c+=p}}if(c){var f=el(i>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(c,".".concat(f),void 0,this.componentId)),n=e_(n,f)}}return n},e}(),tc=o.createContext(void 0);tc.Consumer;var tu={};function tl(e,t,r){var s,a,i,c,u,l,p=eR(e),f=!ed(e),h=t.attrs,d=void 0===h?er:h,g=t.componentId,m=void 0===g?(s=t.displayName,a=t.parentComponentId,tu[i="string"!=typeof s?"sc":ei(s)]=(tu[i]||0)+1,c="".concat(i,"-").concat(el(eh(Q+i+tu[i])>>>0)),a?"".concat(a,"-").concat(c):c):g,v=t.displayName,y=void 0===v?ed(u=e)?"styled.".concat(u):"Styled(".concat((l=u).displayName||l.name||"Component",")"):v,S=t.displayName&&t.componentId?"".concat(ei(t.displayName),"-").concat(t.componentId):t.componentId||m,b=p&&e.attrs?e.attrs.concat(d).filter(Boolean):d,w=t.shouldForwardProp;if(p&&e.shouldForwardProp){var C=e.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;w=function(e,t){return C(e,t)&&I(e,t)}}else w=C}var P=new ti(r,S,p?e.componentStyle:void 0);function x(e,t){return function(e,t,r){var s,a,i,c,u,l,p=e.attrs,f=e.componentStyle,h=e.defaultProps,d=e.foldedComponentIds,g=e.styledComponentId,m=e.target,v=o.useContext(tc),y=e7(),S=e.shouldForwardProp||y.shouldForwardProp;var b=(s=t,a=v,void 0===(i=h)&&(i=en),s.theme!==i.theme&&s.theme||a||i.theme||en),w=function(e,t,r){for(var s,o=n(n({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=e$(s=e[a])?s(o):s;for(var c in i)o[c]="className"===c?e_(o[c],i[c]):"style"===c?n(n({},o[c]),i[c]):i[c]}return t.className&&(o.className=e_(o.className,t.className)),o}(p,t,b),C=w.as||m,I={};for(var P in w)void 0===w[P]||"$"===P[0]||"as"===P||"theme"===P&&w.theme===b||("forwardedAs"===P?I.as=w.forwardedAs:S&&!S(P,C)||(I[P]=w[P]));var x=(c=f,u=w,l=e7(),c.generateAndInjectStyles(u,l.styleSheet,l.stylis)),A=e_(d,g);return x&&(A+=" "+x),w.className&&(A+=" "+w.className),I[ed(C)&&!es.has(C)?"class":"className"]=A,I.ref=r,(0,o.createElement)(C,I)}(A,e,t)}x.displayName=y;var A=o.forwardRef(x);return A.attrs=b,A.componentStyle=P,A.displayName=y,A.shouldForwardProp=w,A.foldedComponentIds=p?e_(e.foldedComponentIds,e.styledComponentId):"",A.styledComponentId=S,A.target=p?e.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=p?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eN(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)t[s]=e(t[s],r[s]);else if(eN(r))for(var s in r)t[s]=e(t[s],r[s]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),ej(A,function(){return".".concat(A.styledComponentId)}),f&&function e(t,r,n){if("string"!=typeof r){if(eE){var s=ek(r);s&&s!==eE&&e(t,s,n)}var o=eP(r);ex&&(o=o.concat(ex(r)));for(var a=eC(t),i=eC(r),c=0;c<o.length;++c){var u=o[c];if(!(u in eS||n&&n[u]||i&&u in i||a&&u in a)){var l=eA(r,u);try{eI(t,u,l)}catch(e){}}}}return t}(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function tp(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var tf=function(e){return Object.assign(e,{isCss:!0})};function th(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e$(e)||eN(e)?tf(ts(tp(er,s([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?ts(e):tf(ts(tp(e,t)))}var td=function(e){return function e(t,r,o){if(void 0===o&&(o=en),!r)throw eD(1,r);var a=function(e){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return t(r,o,th.apply(void 0,s([e],n,!1)))};return a.attrs=function(s){return e(t,r,n(n({},o),{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return e(t,r,n(n({},o),s))},a}(tl,e)},tg=td;es.forEach(function(e){tg[e]=td(e)}),!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=to(e),e0.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var s=n(eO(ts(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,s)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&e0.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=r.nc,s=eO([n&&'nonce="'.concat(n,'"'),"".concat(Z,'="true"'),"".concat(K,'="').concat(Q,'"')].filter(Boolean)," ");return"<style ".concat(s,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eD(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eD(2);var t,s=e.instance.toString();if(!s)return[];var a=((t={})[Z]="",t[K]=Q,t.dangerouslySetInnerHTML={__html:s},t),i=r.nc;return i&&(a.nonce=i),[o.createElement("style",n({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new e0({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw eD(2);return o.createElement(e8,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw eD(3)}}()}}]);