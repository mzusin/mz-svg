/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var _=Object.create;var d=Object.defineProperty,j=Object.defineProperties,I=Object.getOwnPropertyDescriptor,q=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertyNames,L=Object.getOwnPropertySymbols,F=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var E=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))D.call(e,r)&&E(t,r,e[r]);if(L)for(var r of L(e))B.call(e,r)&&E(t,r,e[r]);return t},x=(t,e)=>j(t,q(e));var H=(t,e)=>{for(var r in e)d(t,r,{get:e[r],enumerable:!0})},$=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W(e))!D.call(t,i)&&i!==r&&d(t,i,{get:()=>e[i],enumerable:!(n=I(e,i))||n.enumerable});return t};var U=(t,e,r)=>(r=t!=null?_(F(t)):{},$(e||!t||!t.__esModule?d(r,"default",{value:t,enumerable:!0}):r,t)),z=t=>$(d({},"__esModule",{value:!0}),t);var st={};H(st,{DEFAULT_DECIMAL_PLACES:()=>C,SVG_NAMESPACE:()=>l,XMLNS_NAMESPACE:()=>P,createCircle:()=>Q,createEllipse:()=>J,createLine:()=>K,createPath:()=>b,createPattern:()=>it,createRect:()=>Z,createRectPath:()=>nt,createSVG:()=>X,createSVGFromString:()=>Y,createStar:()=>tt,getRectPathD:()=>N,getSVGAsString:()=>S,saveSVG:()=>rt,setAttributes:()=>g});module.exports=z(st);var l="http://www.w3.org/2000/svg",P="http://www.w3.org/2000/xmlns/",C=2,X=t=>{let{width:e,height:r,document:n}=t,s=(n||window.document).createElementNS(l,"svg"),o=Math.max(0,Number(e)||0),a=Math.max(0,Number(r)||0);return s.setAttributeNS(P,"xmlns",l),s.setAttribute("width",o.toString()),s.setAttribute("height",a.toString()),s.setAttribute("viewBox",`0 0 ${o} ${a}`),s},Y=t=>{let{document:e,svg:r}=t,i=(e||window.document).createElement("div");return i.innerHTML=r,i.firstElementChild},S=t=>t.outerHTML,g=(t,e)=>{if(!(!t||!e))for(let r of e){if(r.length!==2)continue;let n=r[0];if(n==null)continue;let i=r[1];i!=null&&t.setAttribute(n,i.toString())}};var b=t=>{let{document:e,d:r}=t,i=(e||window.document).createElementNS(l,"path");if(r){let s=r.replace(/\s\s+/g," ");i.setAttribute("d",s)}return g(i,[["id",t.id],["class",t.classes],["style",t.style],["d",r],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),i},Z=t=>{let{document:e}=t,n=(e||window.document).createElementNS(l,"rect");return g(n,[["x",t.x],["y",t.y],["rx",t.rx],["ry",t.ry],["width",t.width],["height",t.height],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),n},Q=t=>{let{document:e}=t,n=(e||window.document).createElementNS(l,"circle");return g(n,[["cx",t.cx],["cy",t.cy],["r",t.r],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),n},J=t=>{let{document:e}=t,n=(e||window.document).createElementNS(l,"ellipse");return g(n,[["cx",t.cx],["cy",t.cy],["rx",t.rx],["ry",t.ry],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),n},K=t=>{let{document:e}=t,n=(e||window.document).createElementNS(l,"line");return g(n,[["x1",t.x1],["x2",t.x2],["y1",t.y1],["y2",t.y2],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),n};var p=Math.pow,k=(t,e=1/0)=>{if(e===1/0)return t;e<0&&(e=0);let r=p(10,e);return Math.round(t*r)/r};var tt=t=>{let{centerX:e,centerY:r,outerRadius:n,innerRadius:i}=t,s=4,o=[],a=Math.max(s,Number(t.raysNumber)||s),u=t.decimalPlaces===null||t.decimalPlaces===void 0?2:t.decimalPlaces,y=2*Math.PI/a,f=y/2;for(let c=0,h=1.5*Math.PI;c<a;c++,h+=y)o.push([k(e+Math.cos(h)*n,u),k(r+Math.sin(h)*n,u)]),o.push([k(e+Math.cos(h+f)*i,u),k(r+Math.sin(h+f)*i,u)]);let m=`M ${o[0][0]} ${o[0][1]} `;m+=o.map(c=>`L ${c[0]} ${c[1]}`).join(" "),m+=" Z";let w=x(v({},t),{d:m});return b(w)};var A=U(require("fs"),1),et="Either an SVG element or an SVG string must be provided.",rt=t=>{if(!t.$svg&&!t.svgString)throw new Error(et);let r=`<?xml version="1.0" encoding="UTF-8"?>${t.$svg?S(t.$svg):t.svgString}`;A.default.writeFileSync(t.absOutFilePath,(r!=null?r:"").trim(),"utf8")};var N=t=>{let{x:e,y:r,width:n,height:i,rx:s,ry:o}=t,a=s||0,u=o||0;if(a||u){let y=`${e} ${r}`,f=`${e+a} ${r}`,m=`${e+n-a} ${r}`,w=`${e+n} ${r}`,c=`${e+n} ${r+u}`,h=`${e+n} ${r+i-u}`,G=`${e+n} ${r+i}`,V=`${e+n-a} ${r+i}`,M=`${e+a} ${r+i}`,T=`${e} ${r+i}`,O=`${e} ${r+i-u}`,R=`${e} ${r+u}`;return`
            M${f} 
            L${m}
            C${m} ${w} ${c} 
            L${h} 
            C${h} ${G} ${V} 
            L${M} 
            C${M} ${T} ${O} 
            L${R} 
            C${R} ${y} ${f} Z`.replace(/\s\s+/g," ").trim()}return`M${e+n} ${r} L${e+n} ${i+r} L${e} ${i+r} L${e} ${r} L${e+n} ${r} Z`},nt=t=>{let e=x(v({},t),{d:N({x:t.x,y:t.y,width:t.width,height:t.height,rx:t.rx,ry:t.ry})});return b(e)};var it=t=>{let{document:e}=t,n=(e||window.document).createElementNS(l,"pattern");return g(n,[["x",t.x],["y",t.y],["width",t.width],["height",t.height],["href",t.href],["patternContentUnits",t.patternContentUnits],["patternTransform",t.patternTransform],["patternUnits",t.patternUnits],["preserveAspectRatio",t.preserveAspectRatio],["viewBox",t.viewBox],["id",t.id],["class",t.classes],["style",t.style],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),n};0&&(module.exports={DEFAULT_DECIMAL_PLACES,SVG_NAMESPACE,XMLNS_NAMESPACE,createCircle,createEllipse,createLine,createPath,createPattern,createRect,createRectPath,createSVG,createSVGFromString,createStar,getRectPathD,getSVGAsString,saveSVG,setAttributes});
//# sourceMappingURL=mz-svg.node.cjs.map
