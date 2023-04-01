/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var N=Object.create;var m=Object.defineProperty,C=Object.defineProperties,G=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,O=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var S=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&S(e,r,t[r]);if(x)for(var r of x(t))_.call(t,r)&&S(e,r,t[r]);return e},R=(e,t)=>C(e,V(t));var j=(e,t)=>{for(var r in t)m(e,r,{get:t[r],enumerable:!0})},E=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of T(t))!w.call(e,i)&&i!==r&&m(e,i,{get:()=>t[i],enumerable:!(n=G(t,i))||n.enumerable});return e};var I=(e,t,r)=>(r=e!=null?N(O(e)):{},E(t||!e||!e.__esModule?m(r,"default",{value:e,enumerable:!0}):r,e)),$=e=>E(m({},"__esModule",{value:!0}),e);var J={};j(J,{DEFAULT_DECIMAL_PLACES:()=>D,SVG_NAMESPACE:()=>l,XMLNS_NAMESPACE:()=>L,createCircle:()=>H,createEllipse:()=>B,createLine:()=>z,createPath:()=>k,createRect:()=>F,createSVG:()=>q,createSVGFromString:()=>W,createStar:()=>X,getSVGAsString:()=>b,saveSVG:()=>Q,setAttributes:()=>o});module.exports=$(J);var l="http://www.w3.org/2000/svg",L="http://www.w3.org/2000/xmlns/",D=2,q=e=>{let{width:t,height:r,document:n}=e,s=(n||window.document).createElementNS(l,"svg"),a=Math.max(0,Number(t)||0),u=Math.max(0,Number(r)||0);return s.setAttributeNS(L,"xmlns",l),s.setAttribute("width",a.toString()),s.setAttribute("height",u.toString()),s.setAttribute("viewBox",`0 0 ${a} ${u}`),s},W=e=>{let{document:t,svg:r}=e,i=(t||window.document).createElement("div");return i.innerHTML=r,i.firstElementChild},b=e=>e.outerHTML,o=(e,t)=>{if(!(!e||!t))for(let r of t){if(r.length!==2)continue;let n=r[0];if(n==null)continue;let i=r[1];i!=null&&e.setAttribute(n,i.toString())}};var k=e=>{let{document:t,d:r}=e,i=(t||window.document).createElementNS(l,"path");if(r){let s=r.replace(/\s\s+/g," ");i.setAttribute("d",s)}return o(i,[["id",e.id],["class",e.classes],["style",e.style],["d",r],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),i},F=e=>{let{document:t}=e,n=(t||window.document).createElementNS(l,"rect");return o(n,[["x",e.x],["y",e.y],["rx",e.rx],["ry",e.ry],["width",e.width],["height",e.height],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n},H=e=>{let{document:t}=e,n=(t||window.document).createElementNS(l,"circle");return o(n,[["cx",e.cx],["cy",e.cy],["r",e.r],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n},B=e=>{let{document:t}=e,n=(t||window.document).createElementNS(l,"ellipse");return o(n,[["cx",e.cx],["cy",e.cy],["rx",e.rx],["ry",e.ry],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n},z=e=>{let{document:t}=e,n=(t||window.document).createElementNS(l,"line");return o(n,[["x1",e.x1],["x2",e.x2],["y1",e.y1],["y2",e.y2],["id",e.id],["class",e.classes],["style",e.style],["pathLength",e.pathLength],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]),n};var U=Math.pow,c=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=U(10,t);return Math.round(e*r)/r};var X=e=>{let{centerX:t,centerY:r,outerRadius:n,innerRadius:i}=e,s=4,a=[],u=Math.max(s,Number(e.raysNumber)||s),f=e.decimalPlaces===null||e.decimalPlaces===void 0?2:e.decimalPlaces,v=2*Math.PI/u,y=v/2;for(let h=0,g=1.5*Math.PI;h<u;h++,g+=v)a.push([c(t+Math.cos(g)*n,f),c(r+Math.sin(g)*n,f)]),a.push([c(t+Math.cos(g+y)*i,f),c(r+Math.sin(g+y)*i,f)]);let d=`M ${a[0][0]},${a[0][1]} `;d+=a.map(h=>` L ${h[0]},${h[1]} `),d+="Z";let A=R(M({},e),{d});return k(A)};var P=I(require("fs"),1),Y="Either an SVG element or an SVG string must be provided.",Q=e=>{if(!e.$svg&&!e.svgString)throw new Error(Y);let r=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?b(e.$svg):e.svgString}`;P.default.writeFileSync(e.absOutFilePath,(r!=null?r:"").trim(),"utf8")};0&&(module.exports={DEFAULT_DECIMAL_PLACES,SVG_NAMESPACE,XMLNS_NAMESPACE,createCircle,createEllipse,createLine,createPath,createRect,createSVG,createSVGFromString,createStar,getSVGAsString,saveSVG,setAttributes});
//# sourceMappingURL=mz-svg.node.cjs.map
