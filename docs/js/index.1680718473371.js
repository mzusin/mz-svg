(()=>{var A=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var w=(e,n,t)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,M=(e,n)=>{for(var t in n||(n={}))$.call(n,t)&&w(e,t,n[t]);if(S)for(var t of S(n))G.call(n,t)&&w(e,t,n[t]);return e},y=(e,n)=>k(e,T(n));var x="http://www.w3.org/2000/svg",V="http://www.w3.org/2000/xmlns/";var P=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(x,"svg"),r=Number(e==null?void 0:e.x)||0,a=Number(e==null?void 0:e.y)||0,s=Math.max(0,Number(e==null?void 0:e.width)||0),i=Math.max(0,Number(e==null?void 0:e.height)||0);return t.setAttributeNS(V,"xmlns",x),v(t,[["x",r],["y",a],["width",s],["height",i],["viewBox",e!=null&&e.viewBox?e==null?void 0:e.viewBox:`${r} ${a} ${s} ${i}`],["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio]]),t};var v=(e,n)=>{if(!(!e||!n))for(let t of n){if(t.length!==2)continue;let r=t[0];if(r==null)continue;let a=t[1];a!=null&&e.setAttribute(r,a.toString())}},E=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var L=e=>{let{document:n,d:t}=e,a=(n||window.document).createElementNS(x,"path");if(t){let s=t.replace(/\s\s+/g," ");a.setAttribute("d",s)}return v(a,[["d",t],["pathLength",e.pathLength],...E(e)]),a};var q=Math.pow,g=(e,n=1/0)=>{if(n===1/0)return e;n<0&&(n=0);let t=q(10,n);return Math.round(e*t)/t};var b=(e,n,t=1/0)=>g(Math.random()*(n-e)+e,t),C=(e,n)=>Math.floor(Math.random()*(n-e+1)+e);var R=(e=1,n=360,t=0,r=100,a=0,s=100)=>{let i=b(e,n),m=b(t,r),o=b(a,s);return[i,m,o]};var I=e=>{if(e[0]>360||e[1]>100||e[2]>100)return"#ffffff";if(e[0]<0||e[1]<0||e[2]<0)return"#000000";let n=e[0]/360,t=e[1]/100,r=e[2]/100,a,s,i;if(t===0)a=s=i=r;else{let o=(h,d,l)=>(l<0&&(l+=1),l>1&&(l-=1),l<.16666666666666666?h+(d-h)*6*l:l<.5?d:l<.6666666666666666?h+(d-h)*(.6666666666666666-l)*6:h),u=r<.5?r*(1+t):r+t-r*t,c=2*r-u;a=o(c,u,n+1/3),s=o(c,u,n),i=o(c,u,n-1/3)}let m=o=>{let u=Math.round(o*255).toString(16);return u.length===1?"0"+u:u};return`#${m(a)}${m(s)}${m(i)}`};var N=e=>{let{centerX:n,centerY:t,outerRadius:r,innerRadius:a}=e,s=4,i=[],m=Math.max(s,Number(e.raysNumber)||s),o=e.decimalPlaces===null||e.decimalPlaces===void 0?2:e.decimalPlaces,u=2*Math.PI/m,c=u/2;for(let l=0,f=1.5*Math.PI;l<m;l++,f+=u)i.push([g(n+Math.cos(f)*r,o),g(t+Math.sin(f)*r,o)]),i.push([g(n+Math.cos(f+c)*a,o),g(t+Math.sin(f+c)*a,o)]);let h=`M ${i[0][0]} ${i[0][1]} `;h+=i.map(l=>`L ${l[0]} ${l[1]}`).join(" "),h+=" Z";let d=y(M({},e),{d:h});return L(d)};var D=()=>{if(document.querySelector('[data-examples="star-examples"]'))try{let e=document.getElementById("star-random-btn"),n=document.getElementById("star-ph"),t=()=>{n.innerHTML="";let r=P({width:200,height:200}),a=R(0,360,60,100,30,50),s=I(a),i=C(4,12),m=N({raysNumber:i,centerX:100,centerY:100,outerRadius:100,innerRadius:50,fill:s});r.append(m),n.append(r)};e.addEventListener("click",()=>{t()}),t()}catch(e){console.error(e)}};var _=()=>{let e=document.getElementById("mobile-menu-btn");if(!e)return;e.addEventListener("click",r=>{r.stopPropagation(),document.body.classList.toggle("mobile-menu-opened")}),document.body.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")});let n=document.getElementById("side-menu");if(!n)return;n.addEventListener("click",r=>{r.stopPropagation()});let t=document.getElementById("mobile-menu-close-btn");t&&t.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")})},H=()=>{let e=document.querySelector(".side-menu");if(!e)return;let n=window.location.pathname,t=e.querySelector(`a[href='${n}']`);t&&t.scrollIntoView({block:"center"})},p=()=>{_(),H()};document.addEventListener("DOMContentLoaded",()=>{p(),D()});})();
//# sourceMappingURL=index.1680718473371.js.map
