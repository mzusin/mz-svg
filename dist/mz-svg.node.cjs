/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var i=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var S=(e,t)=>{for(var o in t)i(e,o,{get:t[o],enumerable:!0})},x=(e,t,o,h)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of d(t))!g.call(e,n)&&n!==o&&i(e,n,{get:()=>t[n],enumerable:!(h=u(t,n))||h.enumerable});return e};var b=e=>x(i({},"__esModule",{value:!0}),e);var N={};S(N,{SVG_NAMESPACE:()=>c,XMLNS_NAMESPACE:()=>w,createSVG:()=>A});module.exports=b(N);var c="http://www.w3.org/2000/svg",w="http://www.w3.org/2000/xmlns/",A=e=>{let{width:t,height:o,document:h}=e,r=(h||window.document).createElementNS(c,"svg"),s=Math.max(0,Number(t)||0),m=Math.max(0,Number(o)||0);return r.setAttributeNS(w,"xmlns",c),r.setAttribute("width",s.toString()),r.setAttribute("height",m.toString()),r.setAttribute("viewBox",`0 0 ${s} ${m}`),r};0&&(module.exports={SVG_NAMESPACE,XMLNS_NAMESPACE,createSVG});
//# sourceMappingURL=mz-svg.node.cjs.map
