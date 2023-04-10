/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.3
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var _=Object.defineProperty,j=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var D=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))Y.call(t,n)&&D(e,n,t[n]);if($)for(var n of $(t))F.call(t,n)&&D(e,n,t[n]);return e},y=(e,t)=>j(e,X(t));var g="http://www.w3.org/2000/svg",O="http://www.w3.org/2000/xmlns/",N=2,ee=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"svg");n.setAttributeNS(O,"xmlns",g);let a=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(a=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),d(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",a],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...b(e)]),n},G=e=>{let{document:t,svg:n}=e,i=(t||window.document).createElement("div");return i.innerHTML=n,i.firstElementChild},U=e=>e.outerHTML,d=(e,t)=>{if(!(!e||!t))for(let n of t){if(n.length!==2)continue;let a=n[0];if(a==null)continue;let i=n[1];i!=null&&e.setAttribute(a,i.toString())}},b=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var A=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),d(n,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n},re=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"rect");return d(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n},ae=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"circle");return d(n,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n},ie=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"ellipse");return d(n,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n},se=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"line");return d(n,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n},le=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"polygon");return d(n,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n},ce=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"polyline");return d(n,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...b(e)]),n};var W=Math.pow,P=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let n=W(10,t);return Math.round(e*n)/n};var de=e=>{let{centerX:t,centerY:n,outerRadius:a,innerRadius:i}=e,l=4,r=[],u=Math.max(l,Number(e.raysNumber)||l),s=e.decimalPlaces===null||e.decimalPlaces===void 0?N:e.decimalPlaces,m=2*Math.PI/u,c=m/2;for(let h=0,f=1.5*Math.PI;h<u;h++,f+=m)r.push([P(t+Math.cos(f)*a,s),P(n+Math.sin(f)*a,s)]),r.push([P(t+Math.cos(f+c)*i,s),P(n+Math.sin(f+c)*i,s)]);let o=`M ${r[0][0]} ${r[0][1]} `;o+=r.map(h=>`L ${h[0]} ${h[1]}`).join(" "),o+=" Z";let v=y(R({},e),{d:o});return A(v)};var Z=e=>{let{x:t,y:n,width:a,height:i,rx:l,ry:r}=e,u=l||0,s=r||0;if(u||s){let m=a-2*u,c=i-2*s;return`M${t+u} ${n}h${m}s${u} 0 ${u} ${s}v${c}s0 ${s} ${-u} ${s}h${-m}s${-u} 0 ${-u} ${-s}v${-c}s0 ${-s} ${u} ${-s}z`}return`M${t} ${n}h${a}v${i}h${-a}z`},xe=e=>{let t=y(R({},e),{d:Z({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return A(t)};var K="Either an SVG element or an SVG string must be provided.",J=e=>!e||!e.trim()?"svg":e.trim().toLowerCase(),Te=e=>new Promise((t,n)=>{if(!e.$svg&&!e.svgString){n({isError:!0,msg:K});return}let i=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?U(e.$svg):e.svgString}`,l=J(e.ext),r=`${e.outfileName||"out"}.${l}`;if(l==="svg"){let u=new Blob([i],{type:"text/plain"}),s=URL.createObjectURL(u),m=document.createElement("a");m.href=s,m.title="",m.download=r,m.click(),URL.revokeObjectURL(s),t({isError:!1})}else{let u=e.$svg||G({svg:e.svgString||""}),s=document.createElement("canvas");s.width=u.width.baseVal.value,s.height=u.height.baseVal.value;let m=s.getContext("2d");if(!m){n({isError:!0});return}let c=new XMLSerializer().serializeToString(u),o=new Blob([c],{type:"image/svg+xml;charset=utf-8"}),v=URL.createObjectURL(o),h=new Image;h.onload=()=>{m.clearRect(0,0,s.width,s.height),m.drawImage(h,0,0),URL.revokeObjectURL(v),s.toBlob(f=>{if(!f){t({isError:!0});return}let x=URL.createObjectURL(f),w=document.createElement("a");w.href=x,w.title="",w.download=r,w.click(),URL.revokeObjectURL(x),t({isError:!1})})},h.onerror=()=>{t({isError:!0})},h.src=v}});var ye=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"g");return d(n,[...b(e)]),n},Ae=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"defs");return d(n,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),n},ke=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"use");return d(n,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...b(e)]),n},Me=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"pattern");return d(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...b(e)]),n},Le=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"clipPath");return d(n,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...b(e)]),n},Ie=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"mask");return d(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...b(e)]),n},Ee=e=>{let n=((e==null?void 0:e.document)||window.document).createElementNS(g,"symbol");return d(n,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...b(e)]),n};var $e=(e,t)=>{let n=t.tagName.toLowerCase().trim();e.querySelector(n)||e.append(t)},De=(e,t)=>{let n=t.tagName.toLowerCase().trim();e.querySelector(n)||e.prepend(t)};var H=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),z=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let n=0,a=0,i=0,l=()=>n>=e.length,r=o=>{t.tokens.push({tokenType:o,line:a,col:i})},u=o=>{t.tokens.push({tokenType:"num",value:o,line:a,col:i})},s=o=>{t.errors.push({line:a,col:i,msg:o})},m=()=>l()?!1:H.test(e.substring(n)),c=()=>{let o=e[n];if(o.charAt(0)===`
`||o.charAt(0)==="\r"){n++,i=0,a++;return}if(/\s/.test(o)||o===","){n++,i++;return}if(m()){let v=e.substring(n).match(H);if(v&&v.length>0){let h=v[0];u(h),n+=h.length,i+=h.length;return}}switch(o){case"M":r("M");break;case"m":r("m");break;case"Z":r("Z");break;case"z":r("z");break;case"L":r("L");break;case"l":r("l");break;case"H":r("H");break;case"h":r("h");break;case"V":r("V");break;case"v":r("v");break;case"C":r("C");break;case"c":r("c");break;case"S":r("S");break;case"s":r("s");break;case"Q":r("Q");break;case"q":r("q");break;case"T":r("T");break;case"t":r("t");break;case"A":r("A");break;case"a":r("a");break;default:{s(`Unexpected character ${o}`);break}}n++,i++};for(;!l();)c();return t};var B=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:n,errors:a}=e,i=(c,o)=>{a.push({line:c==null?void 0:c.line,col:c==null?void 0:c.col,msg:o})};if(n[0].tokenType!=="M"&&n[0].tokenType!=="m")return i(n[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let l=0,r=()=>l>=n.length,u=c=>{var h,f;if(!c||c.toLowerCase()!=="a")return!0;let o=(((h=n[l+4])==null?void 0:h.value)||"").toString(),v=(((f=n[l+5])==null?void 0:f.value)||"").toString();return(o==="0"||o==="1")&&(v==="0"||v==="1")},s=(c,o,v)=>{var E;let h=n[l].tokenType,f=[];if(c>0)for(let S=1;S<=c;S++){if(!n[l+S]||n[l+S].tokenType!=="num"){i(n[l],`Expected number(s) after command ${h}.`),l+=c;return}f.push(Number(n[l+S].value))}if(!u(h)){i(n[l],"Arc flags must be 0 or 1."),l+=c+1;return}if(!u(h)){i(n[l],"Arc flags must be 0 or 1."),l+=c+1;return}if(t.commands.push({command:n[l].tokenType,params:f}),l+=c+1,c<=0)return;let x=[];for(;((E=n[l])==null?void 0:E.tokenType)==="num";)x.push(n[l]),l++;if(x.length%c!==0){i(x[x.length-1],"Expected a number.");return}let w=v?o.toLowerCase():o.toUpperCase();for(let S=0;S<x.length;S+=c){let V=[];for(let L=0;L<c;L++)V.push(Number(x[S+L].value));t.commands.push({command:w,params:V})}},m=()=>{let c=n[l],o=c.tokenType.toLowerCase()===c.tokenType;switch(c.tokenType){case"M":case"m":case"L":case"l":{s(2,"L",o);break}case"Z":case"z":{s(0,"L",o);break}case"H":case"h":case"V":case"v":{s(1,c.tokenType,o);break}case"C":case"c":{s(6,c.tokenType,o);break}case"S":case"s":case"Q":case"q":{s(4,c.tokenType,o);break}case"T":case"t":{s(2,c.tokenType,o);break}case"A":case"a":{s(7,c.tokenType,o);break}default:{i(n[l],"Wrong path command."),l++;break}}};for(s(2,"L",n[0].tokenType==="m");!r();)m();return t};var T=(e,t=2)=>{if(Number.isInteger(e))return e.toString();let n=P(e,t).toString(),a=n.split("."),i=a[0],l=a[1];return i==="0"?`.${l}`:i==="-0"?`-.${l}`:n},k=(e,t=2)=>{let n="",a=null;for(let i of e.commands){if(i.command==="L"){if(i.params[0]===0){n+=`V${T(i.params[1],t)}`,a="V";continue}if(i.params[1]===0){n+=`H${T(i.params[0],t)}`,a="H";continue}}if(i.command==="l"){if(i.params[0]===0){n+=`v${T(i.params[1],t)}`,a="v";continue}if(i.params[1]===0){n+=`h${T(i.params[0],t)}`,a="h";continue}}if(i.command==="c"&&i.params[0]===0&&i.params[1]===0){let r=[i.params[2],i.params[3],i.params[4],i.params[5]].map(u=>T(u,t)).join(" ");n+=`s${r}`,a="c";continue}let l=a===i.command||a==="M"&&i.command==="L"||a==="m"&&i.command==="l";n+=l?" ":i.command,n+=i.params.length<=0?" ":i.params.map(r=>T(r,t)).join(" "),a=i.command}return n.trim()};var q=e=>{let{commands:t}=e;if(t.length<=0)return e;let n=t[0].params[0],a=t[0].params[1],i=n,l=a;t[0].command="M";for(let r=1;r<t.length;r++){switch(t[r].command){case"M":{t[r].params[0]-=n,t[r].params[1]-=a,i=t[r].params[0],l=t[r].params[1];break}case"Z":case"z":{n=i,a=l;break}case"L":case"T":{let s=t[r].params[0],m=t[r].params[1];t[r].params[0]-=n,t[r].params[1]-=a,n=s,a=m;break}case"m":case"l":{n+=t[r].params[0],a+=t[r].params[1];break}case"H":{let s=t[r].params[0];t[r].params[0]-=n,n=s;break}case"h":{n+=t[r].params[0];break}case"V":{let s=t[r].params[0];t[r].params[0]-=a,a=s;break}case"v":{a+=t[r].params[0];break}case"C":{let s=t[r].params[4],m=t[r].params[5];t[r].params[0]-=n,t[r].params[1]-=a,t[r].params[2]-=n,t[r].params[3]-=a,t[r].params[4]-=n,t[r].params[5]-=a,n=s,a=m;break}case"c":{n+=t[r].params[4],a+=t[r].params[5];break}case"S":case"Q":{let s=t[r].params[2],m=t[r].params[3];t[r].params[0]-=n,t[r].params[1]-=a,t[r].params[2]-=n,t[r].params[3]-=a,n=s,a=m;break}case"s":case"q":{n+=t[r].params[2],a+=t[r].params[3];break}case"A":{let s=t[r].params[5],m=t[r].params[6];t[r].params[5]-=n,t[r].params[6]-=a,n=s,a=m;break}case"a":{n+=t[r].params[5],a+=t[r].params[6];break}}t[r].command=t[r].command.toLowerCase()}return e},Q=e=>{let{commands:t}=e;if(t.length<=0)return e;let n=t[0].params[0],a=t[0].params[1],i=n,l=a;t[0].command="M";for(let r=1;r<t.length;r++){switch(t[r].command){case"m":{t[r].params[0]+=n,t[r].params[1]+=a,i=t[r].params[0],l=t[r].params[1];break}case"Z":case"z":{n=i,a=l;break}case"l":case"t":{let s=t[r].params[0],m=t[r].params[1];t[r].params[0]+=n,t[r].params[1]+=a,n+=s,a+=m;break}case"M":case"L":{n=t[r].params[0],a=t[r].params[1];break}case"h":{let s=t[r].params[0];t[r].params[0]+=n,n+=s;break}case"H":{n=t[r].params[0];break}case"v":{let s=t[r].params[0];t[r].params[0]+=a,a+=s;break}case"V":{a=t[r].params[0];break}case"c":{let s=t[r].params[4],m=t[r].params[5];t[r].params[0]+=n,t[r].params[1]+=a,t[r].params[2]+=n,t[r].params[3]+=a,t[r].params[4]+=n,t[r].params[5]+=a,n+=s,a+=m;break}case"C":{n=t[r].params[4],a=t[r].params[5];break}case"s":case"q":{let s=t[r].params[2],m=t[r].params[3];t[r].params[0]+=n,t[r].params[1]+=a,t[r].params[2]+=n,t[r].params[3]+=a,n+=s,a+=m;break}case"S":case"Q":{n=t[r].params[2],a=t[r].params[3];break}case"a":{let s=t[r].params[5],m=t[r].params[6];t[r].params[5]+=n,t[r].params[6]+=a,n+=s,a+=m;break}case"A":{n=t[r].params[5],a=t[r].params[6];break}}t[r].command=t[r].command.toUpperCase()}return e},M=(e,t,n=2)=>{if(!e||e.commands.length<=0)return"";let a="";if(t)return k(e,n);for(let i of e.commands)a+=i.command,i.params.length>0?a+=` ${i.params.map(l=>Number.isInteger(l)?l:P(l,n)).join(" ")} `:a+=" ";return a.trim()};var at=e=>C(e).errors.length<=0,C=e=>{let t=z(e);return B(t)},it=(e,t=!1,n=2)=>{if(!e)return e;let a=C(e);return a.errors.length>0?e:M(q(a),!t,n)},st=(e,t=!1,n=2)=>{if(!e)return e;let a=C(e);return a.errors.length>0?e:M(Q(a),!t,n)},lt=(e,t=2)=>{if(!e)return e;let n=C(e);return n.errors.length>0?e:k(n,t)},ct=(e,t=2)=>{if(!e)return e;let n=C(e);return n.errors.length>0?e:M(n,!1,t)};export{N as DEFAULT_DECIMAL_PLACES,g as SVG_NAMESPACE,O as XMLNS_NAMESPACE,$e as appendOnce,ct as beautifyPath,ae as createCircle,Le as createClipPath,Ae as createDefs,ie as createEllipse,ye as createGroup,se as createLine,Ie as createMask,A as createPath,Me as createPattern,le as createPolygon,ce as createPolyline,re as createRect,xe as createRectPath,ee as createSVG,G as createSVGFromString,de as createStar,Ee as createSymbol,ke as createUse,Te as download,b as getCommonAttributes,Z as getRectPathD,U as getSVGAsString,at as isPathValid,lt as minifyPath,C as parsePath,st as pathToAbs,it as pathToRel,De as prependOnce,d as setAttributes};
//# sourceMappingURL=mz-svg.esm.js.map
