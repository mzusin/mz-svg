/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var s="http://www.w3.org/2000/svg",g="http://www.w3.org/2000/xmlns/",w=c=>{let{width:u,height:i,document:n}=c,t=(n||window.document).createElementNS(s,"svg"),o=Math.max(0,Number(u)||0),r=Math.max(0,Number(i)||0);return t.setAttributeNS(g,"xmlns",s),t.setAttribute("width",o.toString()),t.setAttribute("height",r.toString()),t.setAttribute("viewBox",`0 0 ${o} ${r}`),t};var b=c=>{let{document:u,d:i,stroke:n,strokeWidth:d,fill:t,strokeLinecap:o,strokeLinejoin:r,vectorEffect:m}=c,e=(u||window.document).createElementNS(s,"path");if(i){let h=i.replace(/\s\s+/g," ");e.setAttribute("d",h)}return t&&e.setAttribute("fill",t),n&&e.setAttribute("stroke",n),d&&e.setAttribute("stroke-width",d.toString()),o&&e.setAttribute("stroke-linecap",o),r&&e.setAttribute("stroke-linejoin",r),m&&e.setAttribute("vector-effect",m),e};export{s as SVG_NAMESPACE,g as XMLNS_NAMESPACE,b as createPath,w as createSVG};
//# sourceMappingURL=mz-svg.esm.js.map
