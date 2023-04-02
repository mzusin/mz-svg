/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var A=Object.defineProperty,G=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&E(e,r,t[r]);if(R)for(var r of R(t))O.call(t,r)&&E(e,r,t[r]);return e},w=(e,t)=>G(e,V(t));var m="http://www.w3.org/2000/svg",j="http://www.w3.org/2000/xmlns/",$=2,F=e=>{let{width:t,height:r,document:n}=e,l=(n||window.document).createElementNS(m,"svg"),o=Math.max(0,Number(t)||0),a=Math.max(0,Number(r)||0);return l.setAttributeNS(j,"xmlns",m),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),l.setAttribute("viewBox",`0 0 ${o} ${a}`),l},D=e=>{let{document:t,svg:r}=e,i=(t||window.document).createElement("div");return i.innerHTML=r,i.firstElementChild},P=e=>e.outerHTML,k=(e,t)=>{if(!(!e||!t))for(let r of t){if(r.length!==2)continue;let n=r[0];if(n==null)continue;let i=r[1];i!=null&&e.setAttribute(n,i.toString())}};var S=e=>{let{document:t,d:r}=e,i=(t||window.document).createElementNS(m,"path");if(r){let l=r.replace(/\s\s+/g," ");i.setAttribute("d",l)}return k(i,[["id",e.id],["class",e.classes],["style",e.style],["d",r],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),i},z=e=>{let{document:t}=e,n=(t||window.document).createElementNS(m,"rect");return k(n,[["x",e.x],["y",e.y],["rx",e.rx],["ry",e.ry],["width",e.width],["height",e.height],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n},X=e=>{let{document:t}=e,n=(t||window.document).createElementNS(m,"circle");return k(n,[["cx",e.cx],["cy",e.cy],["r",e.r],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n},Y=e=>{let{document:t}=e,n=(t||window.document).createElementNS(m,"ellipse");return k(n,[["cx",e.cx],["cy",e.cy],["rx",e.rx],["ry",e.ry],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n},Z=e=>{let{document:t}=e,n=(t||window.document).createElementNS(m,"line");return k(n,[["x1",e.x1],["x2",e.x2],["y1",e.y1],["y2",e.y2],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n};var _=Math.pow,y=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=_(10,t);return Math.round(e*r)/r};var te=e=>{let{centerX:t,centerY:r,outerRadius:n,innerRadius:i}=e,l=4,o=[],a=Math.max(l,Number(e.raysNumber)||l),s=e.decimalPlaces===null||e.decimalPlaces===void 0?2:e.decimalPlaces,u=2*Math.PI/a,f=u/2;for(let g=0,c=1.5*Math.PI;g<a;g++,c+=u)o.push([y(t+Math.cos(c)*n,s),y(r+Math.sin(c)*n,s)]),o.push([y(t+Math.cos(c+f)*i,s),y(r+Math.sin(c+f)*i,s)]);let h=`M ${o[0][0]} ${o[0][1]} `;h+=o.map(g=>`L ${g[0]} ${g[1]}`).join(" "),h+=" Z";let d=w(x({},e),{d:h});return S(d)};var I=e=>{let{x:t,y:r,width:n,height:i,rx:l,ry:o}=e,a=l||0,s=o||0;if(a||s){let u=`${t} ${r}`,f=`${t+a} ${r}`,h=`${t+n-a} ${r}`,d=`${t+n} ${r}`,g=`${t+n} ${r+s}`,c=`${t+n} ${r+i-s}`,v=`${t+n} ${r+i}`,b=`${t+n-a} ${r+i}`,M=`${t+a} ${r+i}`,C=`${t} ${r+i}`,N=`${t} ${r+i-s}`,L=`${t} ${r+s}`;return`
            M${f} 
            L${h}
            C${h} ${d} ${g} 
            L${c} 
            C${c} ${v} ${b} 
            L${M} 
            C${M} ${C} ${N} 
            L${L} 
            C${L} ${u} ${f} Z`.replace(/\s\s+/g," ").trim()}return`M${t+n} ${r} L${t+n} ${i+r} L${t} ${i+r} L${t} ${r} L${t+n} ${r} Z`},se=e=>{let t=w(x({},e),{d:I({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return S(t)};var q="Either an SVG element or an SVG string must be provided.",W=e=>!e||!e.trim()?"svg":e.trim().toLowerCase(),ue=e=>new Promise((t,r)=>{if(!e.$svg&&!e.svgString){r({isError:!0,msg:q});return}let i=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?P(e.$svg):e.svgString}`,l=W(e.ext),o=`${e.outfileName||"out"}.${l}`;if(l==="svg"){let a=new Blob([i],{type:"text/plain"}),s=URL.createObjectURL(a),u=document.createElement("a");u.href=s,u.title="",u.download=o,u.click(),URL.revokeObjectURL(s),t({isError:!1})}else{let a=e.$svg||D({svg:e.svgString||""}),s=document.createElement("canvas");s.width=a.width.baseVal.value,s.height=a.height.baseVal.value;let u=s.getContext("2d");if(!u){r({isError:!0});return}let f=new XMLSerializer().serializeToString(a),h=new Blob([f],{type:"image/svg+xml;charset=utf-8"}),d=URL.createObjectURL(h),g=new Image;g.onload=()=>{u.clearRect(0,0,s.width,s.height),u.drawImage(g,0,0),URL.revokeObjectURL(d),s.toBlob(c=>{if(!c){t({isError:!0});return}let v=URL.createObjectURL(c),b=document.createElement("a");b.href=v,b.title="",b.download=o,b.click(),URL.revokeObjectURL(v),t({isError:!1})})},g.onerror=()=>{t({isError:!0})},g.src=d}});export{$ as DEFAULT_DECIMAL_PLACES,m as SVG_NAMESPACE,j as XMLNS_NAMESPACE,X as createCircle,Y as createEllipse,Z as createLine,S as createPath,z as createRect,se as createRectPath,F as createSVG,D as createSVGFromString,te as createStar,ue as download,I as getRectPathD,P as getSVGAsString,k as setAttributes};
//# sourceMappingURL=mz-svg.esm.js.map
