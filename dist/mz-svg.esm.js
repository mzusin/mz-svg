/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var n="http://www.w3.org/2000/svg",s="http://www.w3.org/2000/xmlns/",w=r=>{let{width:h,height:i,document:c}=r,t=(c||window.document).createElementNS(n,"svg"),e=Math.max(0,Number(h)||0),o=Math.max(0,Number(i)||0);return t.setAttributeNS(s,"xmlns",n),t.setAttribute("width",e.toString()),t.setAttribute("height",o.toString()),t.setAttribute("viewBox",`0 0 ${e} ${o}`),t};export{n as SVG_NAMESPACE,s as XMLNS_NAMESPACE,w as createSVG};
//# sourceMappingURL=mz-svg.esm.js.map
