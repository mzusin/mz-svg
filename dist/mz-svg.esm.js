/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var A=Object.defineProperty,G=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(t,e,r)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e||(e={}))T.call(e,r)&&$(t,r,e[r]);if(R)for(var r of R(e))O.call(e,r)&&$(t,r,e[r]);return t},k=(t,e)=>G(t,V(e));var m="http://www.w3.org/2000/svg",_="http://www.w3.org/2000/xmlns/",p=2,B=t=>{let{width:e,height:r,document:n}=t,o=(n||window.document).createElementNS(m,"svg"),l=Math.max(0,Number(e)||0),a=Math.max(0,Number(r)||0);return o.setAttributeNS(_,"xmlns",m),o.setAttribute("width",l.toString()),o.setAttribute("height",a.toString()),o.setAttribute("viewBox",`0 0 ${l} ${a}`),o},D=t=>{let{document:e,svg:r}=t,i=(e||window.document).createElement("div");return i.innerHTML=r,i.firstElementChild},P=t=>t.outerHTML,h=(t,e)=>{if(!(!t||!e))for(let r of e){if(r.length!==2)continue;let n=r[0];if(n==null)continue;let i=r[1];i!=null&&t.setAttribute(n,i.toString())}},f=t=>[["id",t.id],["class",t.classes],["style",t.style],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]];var M=t=>{let{document:e,d:r}=t,i=(e||window.document).createElementNS(m,"path");if(r){let o=r.replace(/\s\s+/g," ");i.setAttribute("d",o)}return h(i,[["d",r],["pathLength",t.pathLength],...f(t)]),i},z=t=>{let{document:e}=t,n=(e||window.document).createElementNS(m,"rect");return h(n,[["x",t.x],["y",t.y],["rx",t.rx],["ry",t.ry],["width",t.width],["height",t.height],["pathLength",t.pathLength],...f(t)]),n},X=t=>{let{document:e}=t,n=(e||window.document).createElementNS(m,"circle");return h(n,[["cx",t.cx],["cy",t.cy],["r",t.r],["pathLength",t.pathLength],...f(t)]),n},Y=t=>{let{document:e}=t,n=(e||window.document).createElementNS(m,"ellipse");return h(n,[["cx",t.cx],["cy",t.cy],["rx",t.rx],["ry",t.ry],["pathLength",t.pathLength],...f(t)]),n},Z=t=>{let{document:e}=t,n=(e||window.document).createElementNS(m,"line");return h(n,[["x1",t.x1],["x2",t.x2],["y1",t.y1],["y2",t.y2],["pathLength",t.pathLength],...f(t)]),n},Q=t=>{let{document:e}=t,n=(e||window.document).createElementNS(m,"polygon");return h(n,[["id",t.id],["class",t.classes],["style",t.style],["points",t.points],["pathLength",t.pathLength],...f(t)]),n};var j=Math.pow,y=(t,e=1/0)=>{if(e===1/0)return t;e<0&&(e=0);let r=j(10,e);return Math.round(t*r)/r};var nt=t=>{let{centerX:e,centerY:r,outerRadius:n,innerRadius:i}=t,o=4,l=[],a=Math.max(o,Number(t.raysNumber)||o),s=t.decimalPlaces===null||t.decimalPlaces===void 0?2:t.decimalPlaces,u=2*Math.PI/a,b=u/2;for(let g=0,c=1.5*Math.PI;g<a;g++,c+=u)l.push([y(e+Math.cos(c)*n,s),y(r+Math.sin(c)*n,s)]),l.push([y(e+Math.cos(c+b)*i,s),y(r+Math.sin(c+b)*i,s)]);let d=`M ${l[0][0]} ${l[0][1]} `;d+=l.map(g=>`L ${g[0]} ${g[1]}`).join(" "),d+=" Z";let v=k(w({},t),{d});return M(v)};var I=t=>{let{x:e,y:r,width:n,height:i,rx:o,ry:l}=t,a=o||0,s=l||0;if(a||s){let u=`${e} ${r}`,b=`${e+a} ${r}`,d=`${e+n-a} ${r}`,v=`${e+n} ${r}`,g=`${e+n} ${r+s}`,c=`${e+n} ${r+i-s}`,S=`${e+n} ${r+i}`,x=`${e+n-a} ${r+i}`,E=`${e+a} ${r+i}`,C=`${e} ${r+i}`,N=`${e} ${r+i-s}`,L=`${e} ${r+s}`;return`
            M${b} 
            L${d}
            C${d} ${v} ${g} 
            L${c} 
            C${c} ${S} ${x} 
            L${E} 
            C${E} ${C} ${N} 
            L${L} 
            C${L} ${u} ${b} Z`.replace(/\s\s+/g," ").trim()}return`M${e+n} ${r} L${e+n} ${i+r} L${e} ${i+r} L${e} ${r} L${e+n} ${r} Z`},ot=t=>{let e=k(w({},t),{d:I({x:t.x,y:t.y,width:t.width,height:t.height,rx:t.rx,ry:t.ry})});return M(e)};var U="Either an SVG element or an SVG string must be provided.",q=t=>!t||!t.trim()?"svg":t.trim().toLowerCase(),mt=t=>new Promise((e,r)=>{if(!t.$svg&&!t.svgString){r({isError:!0,msg:U});return}let i=`<?xml version="1.0" encoding="UTF-8"?>${t.$svg?P(t.$svg):t.svgString}`,o=q(t.ext),l=`${t.outfileName||"out"}.${o}`;if(o==="svg"){let a=new Blob([i],{type:"text/plain"}),s=URL.createObjectURL(a),u=document.createElement("a");u.href=s,u.title="",u.download=l,u.click(),URL.revokeObjectURL(s),e({isError:!1})}else{let a=t.$svg||D({svg:t.svgString||""}),s=document.createElement("canvas");s.width=a.width.baseVal.value,s.height=a.height.baseVal.value;let u=s.getContext("2d");if(!u){r({isError:!0});return}let b=new XMLSerializer().serializeToString(a),d=new Blob([b],{type:"image/svg+xml;charset=utf-8"}),v=URL.createObjectURL(d),g=new Image;g.onload=()=>{u.clearRect(0,0,s.width,s.height),u.drawImage(g,0,0),URL.revokeObjectURL(v),s.toBlob(c=>{if(!c){e({isError:!0});return}let S=URL.createObjectURL(c),x=document.createElement("a");x.href=S,x.title="",x.download=l,x.click(),URL.revokeObjectURL(S),e({isError:!1})})},g.onerror=()=>{e({isError:!0})},g.src=v}});var ft=t=>{let r=((t==null?void 0:t.document)||window.document).createElementNS(m,"defs");return h(r,[["id",t==null?void 0:t.id],["class",t==null?void 0:t.classes]]),r},dt=t=>{let{document:e}=t,n=(e||window.document).createElementNS(m,"pattern");return h(n,[["x",t.x],["y",t.y],["width",t.width],["height",t.height],["href",t.href],["patternContentUnits",t.patternContentUnits],["patternTransform",t.patternTransform],["patternUnits",t.patternUnits],["preserveAspectRatio",t.preserveAspectRatio],["viewBox",t.viewBox],...f(t)]),n};var vt=(t,e)=>{let r=e.tagName.toLowerCase().trim();t.querySelector(r)||t.append(e)},xt=(t,e)=>{let r=e.tagName.toLowerCase().trim();t.querySelector(r)||t.prepend(e)};export{p as DEFAULT_DECIMAL_PLACES,m as SVG_NAMESPACE,_ as XMLNS_NAMESPACE,vt as appendOnce,X as createCircle,ft as createDefs,Y as createEllipse,Z as createLine,M as createPath,dt as createPattern,Q as createPolygon,z as createRect,ot as createRectPath,B as createSVG,D as createSVGFromString,nt as createStar,mt as download,f as getCommonAttributes,I as getRectPathD,P as getSVGAsString,xt as prependOnce,h as setAttributes};
//# sourceMappingURL=mz-svg.esm.js.map
