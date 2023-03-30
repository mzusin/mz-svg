/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var m=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var b=(e,t)=>{for(var o in t)m(e,o,{get:t[o],enumerable:!0})},S=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of A(t))!a.call(e,r)&&r!==o&&m(e,r,{get:()=>t[r],enumerable:!(s=w(t,r))||s.enumerable});return e};var l=e=>S(m({},"__esModule",{value:!0}),e);var E={};b(E,{SVG_NAMESPACE:()=>d,XMLNS_NAMESPACE:()=>g,createPath:()=>k,createSVG:()=>p});module.exports=l(E);var d="http://www.w3.org/2000/svg",g="http://www.w3.org/2000/xmlns/",p=e=>{let{width:t,height:o,document:s}=e,i=(s||window.document).createElementNS(d,"svg"),c=Math.max(0,Number(t)||0),u=Math.max(0,Number(o)||0);return i.setAttributeNS(g,"xmlns",d),i.setAttribute("width",c.toString()),i.setAttribute("height",u.toString()),i.setAttribute("viewBox",`0 0 ${c} ${u}`),i};var k=e=>{let{document:t,d:o,stroke:s,strokeWidth:r,fill:i,strokeLinecap:c,strokeLinejoin:u,vectorEffect:h}=e,n=(t||window.document).createElementNS(d,"path");if(o){let f=o.replace(/\s\s+/g," ");n.setAttribute("d",f)}return i&&n.setAttribute("fill",i),s&&n.setAttribute("stroke",s),r&&n.setAttribute("stroke-width",r.toString()),c&&n.setAttribute("stroke-linecap",c),u&&n.setAttribute("stroke-linejoin",u),h&&n.setAttribute("vector-effect",h),n};0&&(module.exports={SVG_NAMESPACE,XMLNS_NAMESPACE,createPath,createSVG});
//# sourceMappingURL=mz-svg.node.cjs.map
