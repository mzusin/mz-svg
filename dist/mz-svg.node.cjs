/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.3
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var W=Object.create;var C=Object.defineProperty,O=Object.defineProperties,Z=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertyNames,N=Object.getOwnPropertySymbols,p=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var G=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&G(e,n,t[n]);if(N)for(var n of N(t))ee.call(t,n)&&G(e,n,t[n]);return e},R=(e,t)=>O(e,K(t));var te=(e,t)=>{for(var n in t)C(e,n,{get:t[n],enumerable:!0})},U=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of J(t))!H.call(e,i)&&i!==n&&C(e,i,{get:()=>t[i],enumerable:!(r=Z(t,i))||r.enumerable});return e};var ne=(e,t,n)=>(n=e!=null?W(p(e)):{},U(t||!e||!e.__esModule?C(n,"default",{value:e,enumerable:!0}):n,e)),ae=e=>U(C({},"__esModule",{value:!0}),e);var Ee={};te(Ee,{DEFAULT_DECIMAL_PLACES:()=>I,SVG_NAMESPACE:()=>h,XMLNS_NAMESPACE:()=>z,appendOnce:()=>ye,beautifyPath:()=>Ie,createCircle:()=>le,createClipPath:()=>Te,createDefs:()=>xe,createEllipse:()=>me,createGroup:()=>ve,createLine:()=>ue,createMask:()=>we,createPath:()=>y,createPattern:()=>Pe,createPolygon:()=>ce,createPolyline:()=>oe,createRect:()=>se,createRectPath:()=>fe,createSVG:()=>re,createSVGFromString:()=>ie,createStar:()=>ge,createSymbol:()=>Ce,createUse:()=>Se,getCommonAttributes:()=>d,getRectPathD:()=>B,getSVGAsString:()=>E,isPathValid:()=>Re,minifyPath:()=>Le,parsePath:()=>w,pathToAbs:()=>Me,pathToRel:()=>ke,prependOnce:()=>Ae,saveSVG:()=>be,setAttributes:()=>g});module.exports=ae(Ee);var h="http://www.w3.org/2000/svg",z="http://www.w3.org/2000/xmlns/",I=2,re=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"svg");n.setAttributeNS(z,"xmlns",h);let r=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(r=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),g(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",r],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...d(e)]),n},ie=e=>{let{document:t,svg:n}=e,i=(t||window.document).createElement("div");return i.innerHTML=n,i.firstElementChild},E=e=>e.outerHTML,g=(e,t)=>{if(!(!e||!t))for(let n of t){if(n.length!==2)continue;let r=n[0];if(r==null)continue;let i=n[1];i!=null&&e.setAttribute(r,i.toString())}},d=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var y=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),g(n,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n},se=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"rect");return g(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n},le=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"circle");return g(n,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n},me=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"ellipse");return g(n,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n},ue=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"line");return g(n,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n},ce=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"polygon");return g(n,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n},oe=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"polyline");return g(n,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...d(e)]),n};var he=Math.pow,S=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let n=he(10,t);return Math.round(e*n)/n};var ge=e=>{let{centerX:t,centerY:n,outerRadius:r,innerRadius:i}=e,l=4,a=[],o=Math.max(l,Number(e.raysNumber)||l),s=e.decimalPlaces===null||e.decimalPlaces===void 0?I:e.decimalPlaces,c=2*Math.PI/o,m=c/2;for(let b=0,f=1.5*Math.PI;b<o;b++,f+=c)a.push([S(t+Math.cos(f)*r,s),S(n+Math.sin(f)*r,s)]),a.push([S(t+Math.cos(f+m)*i,s),S(n+Math.sin(f+m)*i,s)]);let u=`M ${a[0][0]} ${a[0][1]} `;u+=a.map(b=>`L ${b[0]} ${b[1]}`).join(" "),u+=" Z";let v=R(A({},e),{d:u});return y(v)};var q=ne(require("fs"),1),de="Either an SVG element or an SVG string must be provided.",be=e=>{if(!e.$svg&&!e.svgString)throw new Error(de);let n=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?E(e.$svg):e.svgString}`;q.default.writeFileSync(e.absOutFilePath,(n!=null?n:"").trim(),"utf8")};var B=e=>{let{x:t,y:n,width:r,height:i,rx:l,ry:a}=e,o=l||0,s=a||0;if(o||s){let c=r-2*o,m=i-2*s;return`M${t+o} ${n}h${c}s${o} 0 ${o} ${s}v${m}s0 ${s} ${-o} ${s}h${-c}s${-o} 0 ${-o} ${-s}v${-m}s0 ${-s} ${o} ${-s}z`}return`M${t} ${n}h${r}v${i}h${-r}z`},fe=e=>{let t=R(A({},e),{d:B({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return y(t)};var ve=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"g");return g(n,[...d(e)]),n},xe=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"defs");return g(n,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),n},Se=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"use");return g(n,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...d(e)]),n},Pe=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"pattern");return g(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...d(e)]),n},Te=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"clipPath");return g(n,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...d(e)]),n},we=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"mask");return g(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...d(e)]),n},Ce=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(h,"symbol");return g(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...d(e)]),n};var ye=(e,t)=>{let n=t.tagName.toLowerCase().trim();e.querySelector(n)||e.append(t)},Ae=(e,t)=>{let n=t.tagName.toLowerCase().trim();e.querySelector(n)||e.prepend(t)};var Q=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),_=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let n=0,r=0,i=0,l=()=>n>=e.length,a=u=>{t.tokens.push({tokenType:u,line:r,col:i})},o=u=>{t.tokens.push({tokenType:"num",value:u,line:r,col:i})},s=u=>{t.errors.push({line:r,col:i,msg:u})},c=()=>l()?!1:Q.test(e.substring(n)),m=()=>{let u=e[n];if(u.charAt(0)===`
`||u.charAt(0)==="\r"){n++,i=0,r++;return}if(/\s/.test(u)||u===","){n++,i++;return}if(c()){let v=e.substring(n).match(Q);if(v&&v.length>0){let b=v[0];o(b),n+=b.length,i+=b.length;return}}switch(u){case"M":a("M");break;case"m":a("m");break;case"Z":a("Z");break;case"z":a("z");break;case"L":a("L");break;case"l":a("l");break;case"H":a("H");break;case"h":a("h");break;case"V":a("V");break;case"v":a("v");break;case"C":a("C");break;case"c":a("c");break;case"S":a("S");break;case"s":a("s");break;case"Q":a("Q");break;case"q":a("q");break;case"T":a("T");break;case"t":a("t");break;case"A":a("A");break;case"a":a("a");break;default:{s(`Unexpected character ${u}`);break}}n++,i++};for(;!l();)m();return t};var X=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:n,errors:r}=e,i=(m,u)=>{r.push({line:m==null?void 0:m.line,col:m==null?void 0:m.col,msg:u})};if(n[0].tokenType!=="M"&&n[0].tokenType!=="m")return i(n[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let l=0,a=()=>l>=n.length,o=m=>{var b,f;if(!m||m.toLowerCase()!=="a")return!0;let u=(((b=n[l+4])==null?void 0:b.value)||"").toString(),v=(((f=n[l+5])==null?void 0:f.value)||"").toString();return(u==="0"||u==="1")&&(v==="0"||v==="1")},s=(m,u,v)=>{var D;let b=n[l].tokenType,f=[];if(m>0)for(let x=1;x<=m;x++){if(!n[l+x]||n[l+x].tokenType!=="num"){i(n[l],`Expected number(s) after command ${b}.`),l+=m;return}f.push(Number(n[l+x].value))}if(!o(b)){i(n[l],"Arc flags must be 0 or 1."),l+=m+1;return}if(!o(b)){i(n[l],"Arc flags must be 0 or 1."),l+=m+1;return}if(t.commands.push({command:n[l].tokenType,params:f}),l+=m+1,m<=0)return;let P=[];for(;((D=n[l])==null?void 0:D.tokenType)==="num";)P.push(n[l]),l++;if(P.length%m!==0){i(P[P.length-1],"Expected a number.");return}let j=v?u.toLowerCase():u.toUpperCase();for(let x=0;x<P.length;x+=m){let $=[];for(let L=0;L<m;L++)$.push(Number(P[x+L].value));t.commands.push({command:j,params:$})}},c=()=>{let m=n[l],u=m.tokenType.toLowerCase()===m.tokenType;switch(m.tokenType){case"M":case"m":case"L":case"l":{s(2,"L",u);break}case"Z":case"z":{s(0,"L",u);break}case"H":case"h":case"V":case"v":{s(1,m.tokenType,u);break}case"C":case"c":{s(6,m.tokenType,u);break}case"S":case"s":case"Q":case"q":{s(4,m.tokenType,u);break}case"T":case"t":{s(2,m.tokenType,u);break}case"A":case"a":{s(7,m.tokenType,u);break}default:{i(n[l],"Wrong path command."),l++;break}}};for(s(2,"L",n[0].tokenType==="m");!a();)c();return t};var T=(e,t=2)=>{if(Number.isInteger(e))return e.toString();let n=S(e,t).toString(),r=n.split("."),i=r[0],l=r[1];return i==="0"?`.${l}`:i==="-0"?`-.${l}`:n},k=(e,t=2)=>{let n="",r=null;for(let i of e.commands){if(i.command==="L"){if(i.params[0]===0){n+=`V${T(i.params[1],t)}`,r="V";continue}if(i.params[1]===0){n+=`H${T(i.params[0],t)}`,r="H";continue}}if(i.command==="l"){if(i.params[0]===0){n+=`v${T(i.params[1],t)}`,r="v";continue}if(i.params[1]===0){n+=`h${T(i.params[0],t)}`,r="h";continue}}if(i.command==="c"&&i.params[0]===0&&i.params[1]===0){let a=[i.params[2],i.params[3],i.params[4],i.params[5]].map(o=>T(o,t)).join(" ");n+=`s${a}`,r="c";continue}let l=r===i.command||r==="M"&&i.command==="L"||r==="m"&&i.command==="l";n+=l?" ":i.command,n+=i.params.length<=0?" ":i.params.map(a=>T(a,t)).join(" "),r=i.command}return n.trim()};var F=e=>{let{commands:t}=e;if(t.length<=0)return e;let n=t[0].params[0],r=t[0].params[1],i=n,l=r;t[0].command="M";for(let a=1;a<t.length;a++){switch(t[a].command){case"M":{t[a].params[0]-=n,t[a].params[1]-=r,i=t[a].params[0],l=t[a].params[1];break}case"Z":case"z":{n=i,r=l;break}case"L":case"T":{let s=t[a].params[0],c=t[a].params[1];t[a].params[0]-=n,t[a].params[1]-=r,n=s,r=c;break}case"m":case"l":{n+=t[a].params[0],r+=t[a].params[1];break}case"H":{let s=t[a].params[0];t[a].params[0]-=n,n=s;break}case"h":{n+=t[a].params[0];break}case"V":{let s=t[a].params[0];t[a].params[0]-=r,r=s;break}case"v":{r+=t[a].params[0];break}case"C":{let s=t[a].params[4],c=t[a].params[5];t[a].params[0]-=n,t[a].params[1]-=r,t[a].params[2]-=n,t[a].params[3]-=r,t[a].params[4]-=n,t[a].params[5]-=r,n=s,r=c;break}case"c":{n+=t[a].params[4],r+=t[a].params[5];break}case"S":case"Q":{let s=t[a].params[2],c=t[a].params[3];t[a].params[0]-=n,t[a].params[1]-=r,t[a].params[2]-=n,t[a].params[3]-=r,n=s,r=c;break}case"s":case"q":{n+=t[a].params[2],r+=t[a].params[3];break}case"A":{let s=t[a].params[5],c=t[a].params[6];t[a].params[5]-=n,t[a].params[6]-=r,n=s,r=c;break}case"a":{n+=t[a].params[5],r+=t[a].params[6];break}}t[a].command=t[a].command.toLowerCase()}return e},Y=e=>{let{commands:t}=e;if(t.length<=0)return e;let n=t[0].params[0],r=t[0].params[1],i=n,l=r;t[0].command="M";for(let a=1;a<t.length;a++){switch(t[a].command){case"m":{t[a].params[0]+=n,t[a].params[1]+=r,i=t[a].params[0],l=t[a].params[1];break}case"Z":case"z":{n=i,r=l;break}case"l":case"t":{let s=t[a].params[0],c=t[a].params[1];t[a].params[0]+=n,t[a].params[1]+=r,n+=s,r+=c;break}case"M":case"L":{n=t[a].params[0],r=t[a].params[1];break}case"h":{let s=t[a].params[0];t[a].params[0]+=n,n+=s;break}case"H":{n=t[a].params[0];break}case"v":{let s=t[a].params[0];t[a].params[0]+=r,r+=s;break}case"V":{r=t[a].params[0];break}case"c":{let s=t[a].params[4],c=t[a].params[5];t[a].params[0]+=n,t[a].params[1]+=r,t[a].params[2]+=n,t[a].params[3]+=r,t[a].params[4]+=n,t[a].params[5]+=r,n+=s,r+=c;break}case"C":{n=t[a].params[4],r=t[a].params[5];break}case"s":case"q":{let s=t[a].params[2],c=t[a].params[3];t[a].params[0]+=n,t[a].params[1]+=r,t[a].params[2]+=n,t[a].params[3]+=r,n+=s,r+=c;break}case"S":case"Q":{n=t[a].params[2],r=t[a].params[3];break}case"a":{let s=t[a].params[5],c=t[a].params[6];t[a].params[5]+=n,t[a].params[6]+=r,n+=s,r+=c;break}case"A":{n=t[a].params[5],r=t[a].params[6];break}}t[a].command=t[a].command.toUpperCase()}return e},M=(e,t,n=2)=>{if(!e||e.commands.length<=0)return"";let r="";if(t)return k(e,n);for(let i of e.commands)r+=i.command,i.params.length>0?r+=` ${i.params.map(l=>Number.isInteger(l)?l:S(l,n)).join(" ")} `:r+=" ";return r.trim()};var Re=e=>w(e).errors.length<=0,w=e=>{let t=_(e);return X(t)},ke=(e,t=!1,n=2)=>{if(!e)return e;let r=w(e);return r.errors.length>0?e:M(F(r),!t,n)},Me=(e,t=!1,n=2)=>{if(!e)return e;let r=w(e);return r.errors.length>0?e:M(Y(r),!t,n)},Le=(e,t=2)=>{if(!e)return e;let n=w(e);return n.errors.length>0?e:k(n,t)},Ie=(e,t=2)=>{if(!e)return e;let n=w(e);return n.errors.length>0?e:M(n,!1,t)};0&&(module.exports={DEFAULT_DECIMAL_PLACES,SVG_NAMESPACE,XMLNS_NAMESPACE,appendOnce,beautifyPath,createCircle,createClipPath,createDefs,createEllipse,createGroup,createLine,createMask,createPath,createPattern,createPolygon,createPolyline,createRect,createRectPath,createSVG,createSVGFromString,createStar,createSymbol,createUse,getCommonAttributes,getRectPathD,getSVGAsString,isPathValid,minifyPath,parsePath,pathToAbs,pathToRel,prependOnce,saveSVG,setAttributes});
//# sourceMappingURL=mz-svg.node.cjs.map
