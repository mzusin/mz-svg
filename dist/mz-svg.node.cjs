/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var q=Object.create;var x=Object.defineProperty,F=Object.defineProperties,U=Object.getOwnPropertyDescriptor,B=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertyNames,$=Object.getOwnPropertySymbols,j=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var L=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&L(e,r,t[r]);if($)for(var r of $(t))O.call(t,r)&&L(e,r,t[r]);return e},P=(e,t)=>F(e,B(t));var z=(e,t)=>{for(var r in t)x(e,r,{get:t[r],enumerable:!0})},I=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of H(t))!R.call(e,i)&&i!==r&&x(e,i,{get:()=>t[i],enumerable:!(n=U(t,i))||n.enumerable});return e};var W=(e,t,r)=>(r=e!=null?q(j(e)):{},I(t||!e||!e.__esModule?x(r,"default",{value:e,enumerable:!0}):r,e)),X=e=>I(x({},"__esModule",{value:!0}),e);var de={};z(de,{DEFAULT_DECIMAL_PLACES:()=>N,SVG_NAMESPACE:()=>a,XMLNS_NAMESPACE:()=>G,appendOnce:()=>ce,createCircle:()=>J,createClipPath:()=>me,createDefs:()=>le,createEllipse:()=>K,createGroup:()=>oe,createLine:()=>p,createPath:()=>S,createPattern:()=>he,createPolygon:()=>ee,createPolyline:()=>te,createRect:()=>Q,createRectPath:()=>se,createSVG:()=>Y,createSVGFromString:()=>Z,createStar:()=>ne,createUse:()=>ue,getCommonAttributes:()=>o,getRectPathD:()=>A,getSVGAsString:()=>M,prependOnce:()=>ge,saveSVG:()=>ae,setAttributes:()=>s});module.exports=X(de);var a="http://www.w3.org/2000/svg",G="http://www.w3.org/2000/xmlns/",N=2,Y=e=>{let{width:t,height:r,document:n}=e,l=(n||window.document).createElementNS(a,"svg"),h=Math.max(0,Number(t)||0),u=Math.max(0,Number(r)||0);return l.setAttributeNS(G,"xmlns",a),l.setAttribute("width",h.toString()),l.setAttribute("height",u.toString()),l.setAttribute("viewBox",`0 0 ${h} ${u}`),l},Z=e=>{let{document:t,svg:r}=e,i=(t||window.document).createElement("div");return i.innerHTML=r,i.firstElementChild},M=e=>e.outerHTML,s=(e,t)=>{if(!(!e||!t))for(let r of t){if(r.length!==2)continue;let n=r[0];if(n==null)continue;let i=r[1];i!=null&&e.setAttribute(n,i.toString())}},o=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var S=e=>{let{document:t,d:r}=e,i=(t||window.document).createElementNS(a,"path");if(r){let l=r.replace(/\s\s+/g," ");i.setAttribute("d",l)}return s(i,[["d",r],["pathLength",e.pathLength],...o(e)]),i},Q=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"rect");return s(n,[["x",e.x],["y",e.y],["rx",e.rx],["ry",e.ry],["width",e.width],["height",e.height],["pathLength",e.pathLength],...o(e)]),n},J=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"circle");return s(n,[["cx",e.cx],["cy",e.cy],["r",e.r],["pathLength",e.pathLength],...o(e)]),n},K=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"ellipse");return s(n,[["cx",e.cx],["cy",e.cy],["rx",e.rx],["ry",e.ry],["pathLength",e.pathLength],...o(e)]),n},p=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"line");return s(n,[["x1",e.x1],["x2",e.x2],["y1",e.y1],["y2",e.y2],["pathLength",e.pathLength],...o(e)]),n},ee=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"polygon");return s(n,[["id",e.id],["class",e.classes],["style",e.style],["points",e.points],["pathLength",e.pathLength],...o(e)]),n},te=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"polyline");return s(n,[["id",e.id],["class",e.classes],["style",e.style],["points",e.points],["pathLength",e.pathLength],...o(e)]),n};var re=Math.pow,b=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=re(10,t);return Math.round(e*r)/r};var ne=e=>{let{centerX:t,centerY:r,outerRadius:n,innerRadius:i}=e,l=4,h=[],u=Math.max(l,Number(e.raysNumber)||l),m=e.decimalPlaces===null||e.decimalPlaces===void 0?2:e.decimalPlaces,v=2*Math.PI/u,f=v/2;for(let g=0,c=1.5*Math.PI;g<u;g++,c+=v)h.push([b(t+Math.cos(c)*n,m),b(r+Math.sin(c)*n,m)]),h.push([b(t+Math.cos(c+f)*i,m),b(r+Math.sin(c+f)*i,m)]);let d=`M ${h[0][0]} ${h[0][1]} `;d+=h.map(g=>`L ${g[0]} ${g[1]}`).join(" "),d+=" Z";let y=P(w({},e),{d});return S(y)};var V=W(require("fs"),1),ie="Either an SVG element or an SVG string must be provided.",ae=e=>{if(!e.$svg&&!e.svgString)throw new Error(ie);let r=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?M(e.$svg):e.svgString}`;V.default.writeFileSync(e.absOutFilePath,(r!=null?r:"").trim(),"utf8")};var A=e=>{let{x:t,y:r,width:n,height:i,rx:l,ry:h}=e,u=l||0,m=h||0;if(u||m){let v=`${t} ${r}`,f=`${t+u} ${r}`,d=`${t+n-u} ${r}`,y=`${t+n} ${r}`,g=`${t+n} ${r+m}`,c=`${t+n} ${r+i-m}`,D=`${t+n} ${r+i}`,k=`${t+n-u} ${r+i}`,E=`${t+u} ${r+i}`,T=`${t} ${r+i}`,_=`${t} ${r+i-m}`,C=`${t} ${r+m}`;return`
            M${f} 
            L${d}
            C${d} ${y} ${g} 
            L${c} 
            C${c} ${D} ${k} 
            L${E} 
            C${E} ${T} ${_} 
            L${C} 
            C${C} ${v} ${f} Z`.replace(/\s\s+/g," ").trim()}return`M${t+n} ${r} L${t+n} ${i+r} L${t} ${i+r} L${t} ${r} L${t+n} ${r} Z`},se=e=>{let t=P(w({},e),{d:A({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return S(t)};var oe=e=>{let r=((e==null?void 0:e.document)||window.document).createElementNS(a,"g");return s(r,[...o(e)]),r},le=e=>{let r=((e==null?void 0:e.document)||window.document).createElementNS(a,"defs");return s(r,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),r},ue=e=>{let r=((e==null?void 0:e.document)||window.document).createElementNS(a,"use");return s(r,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height]]),r},he=e=>{let{document:t}=e,n=(t||window.document).createElementNS(a,"pattern");return s(n,[["x",e.x],["y",e.y],["width",e.width],["height",e.height],["href",e.href],["patternContentUnits",e.patternContentUnits],["patternTransform",e.patternTransform],["patternUnits",e.patternUnits],["preserveAspectRatio",e.preserveAspectRatio],["viewBox",e.viewBox],...o(e)]),n},me=e=>{let r=((e==null?void 0:e.document)||window.document).createElementNS(a,"clipPath");return s(r,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...o(e)]),r};var ce=(e,t)=>{let r=t.tagName.toLowerCase().trim();e.querySelector(r)||e.append(t)},ge=(e,t)=>{let r=t.tagName.toLowerCase().trim();e.querySelector(r)||e.prepend(t)};0&&(module.exports={DEFAULT_DECIMAL_PLACES,SVG_NAMESPACE,XMLNS_NAMESPACE,appendOnce,createCircle,createClipPath,createDefs,createEllipse,createGroup,createLine,createPath,createPattern,createPolygon,createPolyline,createRect,createRectPath,createSVG,createSVGFromString,createStar,createUse,getCommonAttributes,getRectPathD,getSVGAsString,prependOnce,saveSVG,setAttributes});
//# sourceMappingURL=mz-svg.node.cjs.map
