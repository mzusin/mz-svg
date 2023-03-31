/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var s="http://www.w3.org/2000/svg",o="http://www.w3.org/2000/xmlns/",m=t=>{let{width:i,height:n,document:e}=t,l=(e||window.document).createElementNS(s,"svg"),a=Math.max(0,Number(i)||0),g=Math.max(0,Number(n)||0);return l.setAttributeNS(o,"xmlns",s),l.setAttribute("width",a.toString()),l.setAttribute("height",g.toString()),l.setAttribute("viewBox",`0 0 ${a} ${g}`),l},f=t=>{let{document:i,svg:n}=t,r=(i||window.document).createElement("div");return r.innerHTML=n,r.firstElementChild},c=(t,i)=>{if(!(!t||!i))for(let n of i){if(n.length!==2)continue;let e=n[0];if(e==null)continue;let r=n[1];r!=null&&t.setAttribute(e,r.toString())}};var k=t=>{let{document:i,d:n}=t,r=(i||window.document).createElementNS(s,"path");if(n){let l=n.replace(/\s\s+/g," ");r.setAttribute("d",l)}return c(r,[["id",t.id],["class",t.classes],["style",t.style],["d",n],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),r},d=t=>{let{document:i}=t,e=(i||window.document).createElementNS(s,"rect");return c(e,[["x",t.x],["y",t.y],["rx",t.rx],["ry",t.ry],["width",t.width],["height",t.height],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),e},y=t=>{let{document:i}=t,e=(i||window.document).createElementNS(s,"circle");return c(e,[["cx",t.cx],["cy",t.cy],["r",t.r],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),e},b=t=>{let{document:i}=t,e=(i||window.document).createElementNS(s,"ellipse");return c(e,[["cx",t.cx],["cy",t.cy],["rx",t.rx],["ry",t.ry],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),e},x=t=>{let{document:i}=t,e=(i||window.document).createElementNS(s,"line");return c(e,[["x1",t.x1],["x2",t.x2],["y1",t.y1],["y2",t.y2],["id",t.id],["class",t.classes],["style",t.style],["pathLength",t.pathLength],["stroke",t.stroke],["stroke-width",t.strokeWidth],["stroke-opacity",t.strokeOpacity],["stroke-linecap",t.strokeLinecap],["stroke-linejoin",t.strokeLinejoin],["stroke-dasharray",t.strokeDasharray],["stroke-dashoffset",t.strokeDashoffset],["stroke-miterlimit",t.strokeMiterlimit],["fill",t.fill],["fill-opacity",t.fillOpacity],["fill-rule",t.fillRule],["filter",t.filter],["mask",t.mask],["transform",t.transform],["vector-effect",t.vectorEffect],["shape-rendering",t.shapeRendering],["clip-path",t.clipPath],["clip-rule",t.clipRule],["opacity",t.opacity],["visibility",t.visibility]]),e};export{s as SVG_NAMESPACE,o as XMLNS_NAMESPACE,y as createCircle,b as createEllipse,x as createLine,k as createPath,d as createRect,m as createSVG,f as createSVGFromString,c as setAttributes};
//# sourceMappingURL=mz-svg.esm.js.map
