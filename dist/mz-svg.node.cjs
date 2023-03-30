/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var f=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var w=(i,e)=>{for(var t in e)f(i,t,{get:e[t],enumerable:!0})},p=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of k(e))!x.call(i,r)&&r!==t&&f(i,r,{get:()=>e[r],enumerable:!(n=A(e,r))||n.enumerable});return i};var a=i=>p(f({},"__esModule",{value:!0}),i);var V={};w(V,{SVG_NAMESPACE:()=>l,XMLNS_NAMESPACE:()=>S,createCircle:()=>_,createEllipse:()=>G,createLine:()=>L,createPath:()=>y,createRect:()=>N,createSVG:()=>E,setAttributes:()=>h});module.exports=a(V);var l="http://www.w3.org/2000/svg",S="http://www.w3.org/2000/xmlns/",E=i=>{let{width:e,height:t,document:n}=i,o=(n||window.document).createElementNS(l,"svg"),s=Math.max(0,Number(e)||0),c=Math.max(0,Number(t)||0);return o.setAttributeNS(S,"xmlns",l),o.setAttribute("width",s.toString()),o.setAttribute("height",c.toString()),o.setAttribute("viewBox",`0 0 ${s} ${c}`),o},h=(i,e)=>{if(!(!i||!e))for(let t of e){if(t.length!==2)continue;let n=t[0];if(n==null)continue;let r=t[1];r!=null&&i.setAttribute(n,r.toString())}};var y=i=>{let{document:e,d:t,stroke:n,strokeWidth:r,fill:o,strokeLinecap:s,strokeLinejoin:c,vectorEffect:m}=i,u=(e||window.document).createElementNS(l,"path");if(t){let g=t.replace(/\s\s+/g," ");u.setAttribute("d",g)}return h(u,[["d",t],["fill",o],["stroke",n],["stroke-width",r],["stroke-linecap",s],["stroke-linejoin",c],["vector-effect",m]]),u},N=i=>{let{document:e,x:t,y:n,rx:r,ry:o,width:s,height:c,stroke:m,strokeWidth:d,fill:u}=i,b=(e||window.document).createElementNS(l,"rect");return t&&b.setAttribute("x",t.toString()),n&&b.setAttribute("y",n.toString()),r&&b.setAttribute("rx",r.toString()),o&&b.setAttribute("ry",o.toString()),s&&b.setAttribute("width",s.toString()),c&&b.setAttribute("height",c.toString()),m&&b.setAttribute("stroke",m),d&&b.setAttribute("stroke-width",d.toString()),u&&b.setAttribute("fill",u),b},_=i=>{let{document:e,cx:t,cy:n,r,stroke:o,strokeWidth:s,fill:c}=i,d=(e||window.document).createElementNS(l,"circle");return t&&d.setAttribute("cx",t.toString()),n&&d.setAttribute("cy",n.toString()),r&&d.setAttribute("r",r.toString()),o&&d.setAttribute("stroke",o),s&&d.setAttribute("stroke-width",s.toString()),c&&d.setAttribute("fill",c),d},G=i=>{let{document:e,cx:t,cy:n,rx:r,ry:o,stroke:s,strokeWidth:c,fill:m}=i,u=(e||window.document).createElementNS(l,"ellipse");return t&&u.setAttribute("cx",t.toString()),n&&u.setAttribute("cy",n.toString()),r&&u.setAttribute("rx",r.toString()),o&&u.setAttribute("ry",o.toString()),s&&u.setAttribute("stroke",s),c&&u.setAttribute("stroke-width",c.toString()),m&&u.setAttribute("fill",m),u},L=i=>{let{document:e,x1:t,y1:n,x2:r,y2:o,stroke:s,strokeWidth:c,strokeLinecap:m,strokeLinejoin:d}=i,g=(e||window.document).createElementNS(l,"line");return t&&g.setAttribute("x1",t.toString()),n&&g.setAttribute("y1",n.toString()),r&&g.setAttribute("x2",r.toString()),o&&g.setAttribute("y2",o.toString()),s&&g.setAttribute("stroke",s),c&&g.setAttribute("stroke-width",c.toString()),m&&g.setAttribute("stroke-linecap",m),d&&g.setAttribute("stroke-linejoin",d),g};0&&(module.exports={SVG_NAMESPACE,XMLNS_NAMESPACE,createCircle,createEllipse,createLine,createPath,createRect,createSVG,setAttributes});
//# sourceMappingURL=mz-svg.node.cjs.map
