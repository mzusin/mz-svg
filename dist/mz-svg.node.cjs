/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var O=Object.create;var b=Object.defineProperty,q=Object.defineProperties,I=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,F=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var L=(t,e,r)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))$.call(e,r)&&L(t,r,e[r]);if(D)for(var r of D(e))B.call(e,r)&&L(t,r,e[r]);return t},S=(t,e)=>q(t,j(e));var H=(t,e)=>{for(var r in e)b(t,r,{get:e[r],enumerable:!0})},P=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W(e))!$.call(t,i)&&i!==r&&b(t,i,{get:()=>e[i],enumerable:!(n=I(e,i))||n.enumerable});return t};var U=(t,e,r)=>(r=t!=null?O(F(t)):{},P(e||!t||!t.__esModule?b(r,"default",{value:t,enumerable:!0}):r,t)),z=t=>P(b({},"__esModule",{value:!0}),t);var gt={};H(gt,{DEFAULT_DECIMAL_PLACES:()=>C,SVG_NAMESPACE:()=>s,XMLNS_NAMESPACE:()=>p,appendOnce:()=>ot,createCircle:()=>Q,createDefs:()=>at,createEllipse:()=>J,createLine:()=>K,createPath:()=>y,createPattern:()=>lt,createPolygon:()=>tt,createRect:()=>Z,createRectPath:()=>st,createSVG:()=>X,createSVGFromString:()=>Y,createStar:()=>rt,getRectPathD:()=>N,getSVGAsString:()=>M,prependOnce:()=>ut,saveSVG:()=>it,setAttributes:()=>o});module.exports=z(gt);var s="http://www.w3.org/2000/svg",p="http://www.w3.org/2000/xmlns/",C=2,X=t=>{let{width:e,height:r,document:n}=t,a=(n||window.document).createElementNS(s,"svg"),u=Math.max(0,Number(e)||0),l=Math.max(0,Number(r)||0);return a.setAttributeNS(p,"xmlns",s),a.setAttribute("width",u.toString()),a.setAttribute("height",l.toString()),a.setAttribute("viewBox",`0 0 ${u} ${l}`),a},Y=t=>{let{document:e,svg:r}=t,i=(e||window.document).createElement("div");return i.innerHTML=r,i.firstElementChild},M=t=>t.outerHTML,o=(t,e)=>{if(!(!t||!e))for(let r of e){if(r.length!==2)continue;let n=r[0];if(n==null)continue;let i=r[1];i!=null&&t.setAttribute(n,i.toString())}};var f=t=>[["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]],y=t=>{let{document:e,d:r}=t,i=(e||window.document).createElementNS(s,"path");if(r){let a=r.replace(/\s\s+/g," ");i.setAttribute("d",a)}return o(i,[["d",r],...f(t)]),i},Z=t=>{let{document:e}=t,n=(e||window.document).createElementNS(s,"rect");return o(n,[["x",t.x],["y",t.y],["rx",t.rx],["ry",t.ry],["width",t.width],["height",t.height],...f(t)]),n},Q=t=>{let{document:e}=t,n=(e||window.document).createElementNS(s,"circle");return o(n,[["cx",t.cx],["cy",t.cy],["r",t.r],...f(t)]),n},J=t=>{let{document:e}=t,n=(e||window.document).createElementNS(s,"ellipse");return o(n,[["cx",t.cx],["cy",t.cy],["rx",t.rx],["ry",t.ry],...f(t)]),n},K=t=>{let{document:e}=t,n=(e||window.document).createElementNS(s,"line");return o(n,[["x1",t.x1],["x2",t.x2],["y1",t.y1],["y2",t.y2],...f(t)]),n},tt=t=>{let{document:e}=t,n=(e||window.document).createElementNS(s,"polygon");return o(n,[["id",t.id],["class",t.classes],["style",t.style],["points",t.points],...f(t)]),n};var et=Math.pow,v=(t,e=1/0)=>{if(e===1/0)return t;e<0&&(e=0);let r=et(10,e);return Math.round(t*r)/r};var rt=t=>{let{centerX:e,centerY:r,outerRadius:n,innerRadius:i}=t,a=4,u=[],l=Math.max(a,Number(t.raysNumber)||a),g=t.decimalPlaces===null||t.decimalPlaces===void 0?2:t.decimalPlaces,x=2*Math.PI/l,d=x/2;for(let c=0,m=1.5*Math.PI;c<l;c++,m+=x)u.push([v(e+Math.cos(m)*n,g),v(r+Math.sin(m)*n,g)]),u.push([v(e+Math.cos(m+d)*i,g),v(r+Math.sin(m+d)*i,g)]);let h=`M ${u[0][0]} ${u[0][1]} `;h+=u.map(c=>`L ${c[0]} ${c[1]}`).join(" "),h+=" Z";let w=S(k({},t),{d:h});return y(w)};var G=U(require("fs"),1),nt="Either an SVG element or an SVG string must be provided.",it=t=>{if(!t.$svg&&!t.svgString)throw new Error(nt);let r=`<?xml version="1.0" encoding="UTF-8"?>${t.$svg?M(t.$svg):t.svgString}`;G.default.writeFileSync(t.absOutFilePath,(r!=null?r:"").trim(),"utf8")};var N=t=>{let{x:e,y:r,width:n,height:i,rx:a,ry:u}=t,l=a||0,g=u||0;if(l||g){let x=`${e} ${r}`,d=`${e+l} ${r}`,h=`${e+n-l} ${r}`,w=`${e+n} ${r}`,c=`${e+n} ${r+g}`,m=`${e+n} ${r+i-g}`,A=`${e+n} ${r+i}`,V=`${e+n-l} ${r+i}`,E=`${e+l} ${r+i}`,T=`${e} ${r+i}`,_=`${e} ${r+i-g}`,R=`${e} ${r+g}`;return`
            M${d} 
            L${h}
            C${h} ${w} ${c} 
            L${m} 
            C${m} ${A} ${V} 
            L${E} 
            C${E} ${T} ${_} 
            L${R} 
            C${R} ${x} ${d} Z`.replace(/\s\s+/g," ").trim()}return`M${e+n} ${r} L${e+n} ${i+r} L${e} ${i+r} L${e} ${r} L${e+n} ${r} Z`},st=t=>{let e=S(k({},t),{d:N({x:t.x,y:t.y,width:t.width,height:t.height,rx:t.rx,ry:t.ry})});return y(e)};var at=t=>{let r=((t==null?void 0:t.document)||window.document).createElementNS(s,"defs");return o(r,[["id",t==null?void 0:t.id],["class",t==null?void 0:t.classes]]),r},lt=t=>{let{document:e}=t,n=(e||window.document).createElementNS(s,"pattern");return o(n,[["x",t.x],["y",t.y],["width",t.width],["height",t.height],["href",t.href],["patternContentUnits",t.patternContentUnits],["patternTransform",t.patternTransform],["patternUnits",t.patternUnits],["preserveAspectRatio",t.preserveAspectRatio],["viewBox",t.viewBox],["id",t.id],["class",t.classes],["style",t.style],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),n};var ot=(t,e)=>{let r=e.tagName.toLowerCase().trim();t.querySelector(r)||t.append(e)},ut=(t,e)=>{let r=e.tagName.toLowerCase().trim();t.querySelector(r)||t.prepend(e)};0&&(module.exports={DEFAULT_DECIMAL_PLACES,SVG_NAMESPACE,XMLNS_NAMESPACE,appendOnce,createCircle,createDefs,createEllipse,createLine,createPath,createPattern,createPolygon,createRect,createRectPath,createSVG,createSVGFromString,createStar,getRectPathD,getSVGAsString,prependOnce,saveSVG,setAttributes});
//# sourceMappingURL=mz-svg.node.cjs.map
