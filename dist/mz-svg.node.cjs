/* 
mzSVG v1.0.10 
TypeScript-based library for manipulating and animating SVG.  
https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md    
Copyright (c) 2023-present, Miriam Zusin         
*/
var Ve=Object.create;var U=Object.defineProperty,Ee=Object.defineProperties,Le=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertyNames,me=Object.getOwnPropertySymbols,De=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var ce=(e,a,t)=>a in e?U(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,D=(e,a)=>{for(var t in a||(a={}))oe.call(a,t)&&ce(e,t,a[t]);if(me)for(var t of me(a))Ge.call(a,t)&&ce(e,t,a[t]);return e},G=(e,a)=>Ee(e,$e(a));var Be=(e,a)=>{for(var t in a)U(e,t,{get:a[t],enumerable:!0})},ue=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Ne(a))!oe.call(e,r)&&r!==t&&U(e,r,{get:()=>a[r],enumerable:!(n=Le(a,r))||n.enumerable});return e};var He=(e,a,t)=>(t=e!=null?Ve(De(e)):{},ue(a||!e||!e.__esModule?U(t,"default",{value:e,enumerable:!0}):t,e)),ze=e=>ue(U({},"__esModule",{value:!0}),e);var Et={};Be(Et,{DEFAULT_DECIMAL_PLACES:()=>H,SVG_NAMESPACE:()=>P,XMLNS_NAMESPACE:()=>le,appendOnce:()=>Pt,beautifyPath:()=>ct,createAnimate:()=>Rt,createAnimateMotion:()=>kt,createAnimateTransform:()=>yt,createCircle:()=>qe,createClipPath:()=>vt,createDefs:()=>dt,createEllipse:()=>Ue,createFlower:()=>ut,createGroup:()=>ft,createLine:()=>_e,createMPath:()=>Vt,createMask:()=>xt,createPath:()=>$,createPattern:()=>Mt,createPolygon:()=>Fe,createPolyline:()=>Ze,createRect:()=>Qe,createRectPath:()=>bt,createSVG:()=>Ye,createSVGFromString:()=>Xe,createStar:()=>ot,createStar1:()=>Te,createStar2:()=>Ae,createStar3:()=>we,createSymbol:()=>St,createUse:()=>gt,getCommonAnimationAttributes:()=>p,getCommonAttributes:()=>I,getRectPathD:()=>Re,getSVGAsString:()=>te,isPathValid:()=>it,minifyPath:()=>mt,parsePath:()=>V,pathToAbs:()=>st,pathToRel:()=>Y,prependOnce:()=>Ct,rotatePath:()=>wt,rotatePathAroundPoint:()=>ke,saveSVG:()=>ht,scalePath:()=>It,scalePathAroundPoint:()=>ye,setAttributes:()=>A,translatePath:()=>At});module.exports=ze(Et);var P="http://www.w3.org/2000/svg",le="http://www.w3.org/2000/xmlns/",H=2,Ye=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"svg");t.setAttributeNS(le,"xmlns",P);let n=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(n=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",n],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...I(e)]),t},Xe=e=>{let{document:a,svg:t}=e,r=(a||window.document).createElement("div");return r.innerHTML=t,r.firstElementChild},te=e=>e.outerHTML,A=(e,a)=>{if(!(!e||!a))for(let t of a){if(t.length!==2)continue;let n=t[0];if(n==null)continue;let r=t[1];r!=null&&e.setAttribute(n,r.toString())}},I=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var $=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),A(t,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t},Qe=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"rect");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t},qe=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"circle");return A(t,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t},Ue=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"ellipse");return A(t,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t},_e=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"line");return A(t,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t},Fe=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"polygon");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t},Ze=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"polyline");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...I(e)]),t};var je=Math.pow,f=(e,a=1/0)=>{if(a===1/0)return e;a<0&&(a=0);let t=je(10,a);return Math.round(e*t)/t};var K=(e,a=1/0)=>{let t=e*(Math.PI/180);return f(t,a)};var We=(e,a,t=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(f(e[r]*a,t));return n};var be=(e,a,t=1/0)=>We(e,a,t);var fe=(e,a,t=1/0)=>{let n=0;for(let r=0;r<e.length;r++)n+=e[r]*a[r];return f(n,t)};var Ke=e=>{let a=e.length;if(a<=0)return e;let t=e[0].length;if(t<=0)return e;let n=[];for(let r=0;r<t;r++)n.push([]);for(let r=0;r<a;r++)for(let s=0;s<t;s++)n[s].push(e[r][s]);return n};var j=(e,a,t=1/0)=>{let n=[];for(let s=0;s<e.length;s++)n.push([]);let r=Ke(a);if(n.length!==r.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let s=0;s<e.length;s++){let i=e[s];for(let m=0;m<r.length;m++){let c=r[m],o=fe(i,c,t);n[s].push(o)}}return n},re=(e,a,t=1/0)=>{if(e.length<0)return[];if(e[0].length!==a.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let r=0;r<e.length;r++)n[r]=fe(e[r],a,t);return n};var W=(e,a=1/0)=>[[1,0,f(e[0],a)],[0,1,f(e[1],a)],[0,0,1]];var Je=(e,a=!0,t=1/0)=>{let n=f(Math.cos(e),t),r=f(Math.sin(e),t);return a?[[n,-r,0],[r,n,0],[0,0,1]]:[[n,r,0],[-r,n,0],[0,0,1]]},Oe=(e,a,t=!0,n=1/0)=>{let r=W(a,n),s=Je(e,t,n),i=W(be(a,-1),n),m=j(r,s);return j(m,i)},de=(e,a,t,n=!0,r=1/0)=>{let s=Oe(e,a,n,r);return re(s,t)};var pe=(e,a,t=1/0)=>{let n=W(a,t),r=et(e),s=W(be(a,-1),t),i=j(n,r);return j(i,s)},ge=(e,a,t,n=1/0)=>{let r=pe(e,a,n);return re(r,t)};var et=e=>[[e[0],0,0],[0,e[1],0],[0,0,1]];var J=(e,a)=>(e%a+a)%a;var ae=e=>!isNaN(parseFloat(e))&&isFinite(e);var ne=(e,a=1/0)=>{let t=e[0],n=e[1],r=e[2]-n;return t===0&&r===0?1/0:t===0?NaN:f(r/t,a)};var he=(e,a=1/0)=>{let t=e[0],n=e[1],r=e[2],s=e[3];if(t===0){let u=ne([n,r,s],a);return ae(u)?[u]:[]}let i=r-s,m=n*n-4*t*i;if(m<0)return[];if(m===0)return[f(-n/(2*t),a)];let c=2*t,o=Math.sqrt(m);return[f((-n+o)/c,a),f((-n-o)/c,a)]},tt=(e,a,t,n,r=1/0)=>{let s=Math.pow(1-e,2),i=(1-e)*2*e,m=e*e;return[f(s*a[0]+i*t[0]+m*n[0],r),f(s*a[1]+i*t[1]+m*n[1],r)]};var at=(e,a,t,n,r,s=1/0)=>{let i=Math.pow(1-e,3),m=Math.pow(1-e,2)*3*e,c=(1-e)*3*e*e,o=e*e*e;return[f(i*a[0]+m*t[0]+c*n[0]+o*r[0],s),f(i*a[1]+m*t[1]+c*n[1]+o*r[1],s)]};var nt=(e,a,t,n=1/0)=>{let r=2*e[0]-4*a[0]+2*t[0],s=-2*e[0]+2*a[0],i=ne([r,s,0],n),m=2*e[1]-4*a[1]+2*t[1],c=-2*e[1]+2*a[1],o=ne([m,c,0],n),u=[];return ae(i)&&u.push(i),ae(o)&&u.push(o),u},rt=(e,a,t,n,r=1/0)=>{let s=-3*e[0]+9*a[0]-9*t[0]+3*n[0],i=6*e[0]-12*a[0]+6*t[0],m=-3*e[0]+3*a[0],c=[s,i,m,0],o=-3*e[1]+9*a[1]-9*t[1]+3*n[1],u=6*e[1]-12*a[1]+6*t[1],l=-3*e[1]+3*a[1],b=[o,u,l,0],h=he(c,r).filter(M=>M>=0&&M<=1),d=he(b,r).filter(M=>M>=0&&M<=1);return[...h,...d].length===2?[...h,...d]:null},Me=(e,a,t,n=1/0)=>{let r=nt(e,a,t),s=1/0,i=1/0,m=-1/0,c=-1/0;for(let o of r){let u=tt(o,e,a,t),l=u[0],b=u[1];s=Math.min(s,l),m=Math.max(m,l),i=Math.min(i,b),c=Math.max(c,b)}return s=f(Math.min(s,e[0],t[0]),n),m=f(Math.max(m,e[0],t[0]),n),i=f(Math.min(i,e[1],t[1]),n),c=f(Math.max(c,e[1],t[1]),n),{x:s,y:i,w:Math.abs(m-s),h:Math.abs(c-i),x2:m,y2:c}},ve=(e,a,t,n,r=1/0)=>{let s=rt(e,a,t,n)||[],i=1/0,m=1/0,c=-1/0,o=-1/0;for(let u of s){let l=at(u,e,a,t,n),b=l[0],h=l[1];i=Math.min(i,b!=null?b:1/0),c=Math.max(c,b!=null?b:-1/0),m=Math.min(m,h!=null?h:1/0),o=Math.max(o,h!=null?h:-1/0)}return i=f(Math.min(i,e[0],n[0]),r),c=f(Math.max(c,e[0],n[0]),r),m=f(Math.min(m,e[1],n[1]),r),o=f(Math.max(o,e[1],n[1]),r),{x:i,y:m,w:Math.abs(c-i),h:Math.abs(o-m),x2:c,y2:o}};var xe=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),Se=e=>{let a={tokens:[],errors:[]};if(!e||e.trim()==="")return a;let t=0,n=0,r=0,s=()=>t>=e.length,i=l=>{a.tokens.push({tokenType:l,line:n,col:r})},m=l=>{a.tokens.push({tokenType:"num",value:l,line:n,col:r})},c=l=>{a.errors.push({line:n,col:r,msg:l})},o=()=>s()?!1:xe.test(e.substring(t)),u=()=>{let l=e[t];if(l.charAt(0)===`
`||l.charAt(0)==="\r"){t++,r=0,n++;return}if(/\s/.test(l)||l===","){t++,r++;return}if(o()){let b=e.substring(t).match(xe);if(b&&b.length>0){let h=b[0];m(h),t+=h.length,r+=h.length;return}}switch(l){case"M":i("M");break;case"m":i("m");break;case"Z":i("Z");break;case"z":i("z");break;case"L":i("L");break;case"l":i("l");break;case"H":i("H");break;case"h":i("h");break;case"V":i("V");break;case"v":i("v");break;case"C":i("C");break;case"c":i("c");break;case"S":i("S");break;case"s":i("s");break;case"Q":i("Q");break;case"q":i("q");break;case"T":i("T");break;case"t":i("t");break;case"A":i("A");break;case"a":i("a");break;default:{c(`Unexpected character ${l}`);break}}t++,r++};for(;!s();)u();return a};var Pe=e=>{let a={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return a;let{tokens:t,errors:n}=e,r=(u,l)=>{n.push({line:u==null?void 0:u.line,col:u==null?void 0:u.col,msg:l})};if(t[0].tokenType!=="M"&&t[0].tokenType!=="m")return r(t[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),a;let s=0,i=()=>s>=t.length,m=u=>{var h,d;if(!u||u.toLowerCase()!=="a")return!0;let l=(((h=t[s+4])==null?void 0:h.value)||"").toString(),b=(((d=t[s+5])==null?void 0:d.value)||"").toString();return(l==="0"||l==="1")&&(b==="0"||b==="1")},c=(u,l,b)=>{var g;let h=t[s].tokenType,d=[];if(u>0)for(let v=1;v<=u;v++){if(!t[s+v]||t[s+v].tokenType!=="num"){r(t[s],`Expected number(s) after command ${h}.`),s+=u;return}d.push(Number(t[s+v].value))}if(!m(h)){r(t[s],"Arc flags must be 0 or 1."),s+=u+1;return}if(!m(h)){r(t[s],"Arc flags must be 0 or 1."),s+=u+1;return}if(a.commands.push({command:t[s].tokenType,params:d}),s+=u+1,u<=0)return;let M=[];for(;((g=t[s])==null?void 0:g.tokenType)==="num";)M.push(t[s]),s++;if(M.length%u!==0){r(M[M.length-1],"Expected a number.");return}let N=b?l.toLowerCase():l.toUpperCase();for(let v=0;v<M.length;v+=u){let C=[];for(let T=0;T<u;T++)C.push(Number(M[v+T].value));a.commands.push({command:N,params:C})}},o=()=>{let u=t[s],l=u.tokenType.toLowerCase()===u.tokenType;switch(u.tokenType){case"M":case"m":case"L":case"l":{c(2,"L",l);break}case"Z":case"z":{c(0,"L",l);break}case"H":case"h":case"V":case"v":{c(1,u.tokenType,l);break}case"C":case"c":{c(6,u.tokenType,l);break}case"S":case"s":case"Q":case"q":{c(4,u.tokenType,l);break}case"T":case"t":{c(2,u.tokenType,l);break}case"A":case"a":{c(7,u.tokenType,l);break}default:{r(t[s],"Wrong path command."),s++;break}}};for(c(2,"L",t[0].tokenType==="m");!i();)o();return a};var q=(e,a=2)=>{if(Number.isInteger(e))return e.toString();let t=f(e,a).toString(),n=t.split("."),r=n[0],s=n[1];return r==="0"?`.${s}`:r==="-0"?`-.${s}`:t},Ce=(e,a)=>{if(!e||e.length<=0)return"";let t=q(e[0],a);for(let n=1;n<e.length;n++){let r=e[n],s=q(r,a);r<0?t+=s:t+=` ${s}`}return t},O=(e,a=2)=>{let t="",n=null;for(let r of e.commands){if(r.command==="L"){if(r.params[0]===0){t+=`V${q(r.params[1],a)}`,n="V";continue}if(r.params[1]===0){t+=`H${q(r.params[0],a)}`,n="H";continue}}if(r.command==="l"){if(r.params[0]===0){t+=`v${q(r.params[1],a)}`,n="v";continue}if(r.params[1]===0){t+=`h${q(r.params[0],a)}`,n="h";continue}}if(r.command==="c"&&(n==null?void 0:n.toLowerCase())!=="C".toLowerCase()&&(n==null?void 0:n.toLowerCase())!=="S".toLowerCase()&&r.params[0]===0&&r.params[1]===0){let i=Ce([r.params[2],r.params[3],r.params[4],r.params[5]],a);t+=`s${i}`,n="s";continue}n===r.command||n==="M"&&r.command==="L"||n==="m"&&r.command==="l"?r.params.length>0&&r.params[0]>=0&&(t+=" "):t+=r.command,t+=Ce(r.params,a),n=r.command}return t.trim()};var F=e=>{let{commands:a}=e;if(a.length<=0)return e;let t=a[0].params[0],n=a[0].params[1],r=t,s=n;a[0].command="M";for(let i=1;i<a.length;i++){switch(a[i].command){case"M":{a[i].params[0]-=t,a[i].params[1]-=n,r=a[i].params[0],s=a[i].params[1];break}case"Z":case"z":{t=r,n=s;break}case"L":case"T":{let c=a[i].params[0],o=a[i].params[1];a[i].params[0]-=t,a[i].params[1]-=n,t=c,n=o;break}case"m":case"l":{t+=a[i].params[0],n+=a[i].params[1];break}case"H":{let c=a[i].params[0];a[i].params[0]-=t,t=c;break}case"h":{t+=a[i].params[0];break}case"V":{let c=a[i].params[0];a[i].params[0]-=n,n=c;break}case"v":{n+=a[i].params[0];break}case"C":{let c=a[i].params[4],o=a[i].params[5];a[i].params[0]-=t,a[i].params[1]-=n,a[i].params[2]-=t,a[i].params[3]-=n,a[i].params[4]-=t,a[i].params[5]-=n,t=c,n=o;break}case"c":{t+=a[i].params[4],n+=a[i].params[5];break}case"S":case"Q":{let c=a[i].params[2],o=a[i].params[3];a[i].params[0]-=t,a[i].params[1]-=n,a[i].params[2]-=t,a[i].params[3]-=n,t=c,n=o;break}case"s":case"q":{t+=a[i].params[2],n+=a[i].params[3];break}case"A":{let c=a[i].params[5],o=a[i].params[6];a[i].params[5]-=t,a[i].params[6]-=n,t=c,n=o;break}case"a":{t+=a[i].params[5],n+=a[i].params[6];break}}a[i].command=a[i].command.toLowerCase()}return e},z=e=>{let{commands:a}=e;if(a.length<=0)return e;let t=a[0].params[0],n=a[0].params[1],r=t,s=n;a[0].command="M";for(let i=1;i<a.length;i++){switch(a[i].command){case"m":{a[i].params[0]+=t,a[i].params[1]+=n,r=a[i].params[0],s=a[i].params[1];break}case"Z":case"z":{t=r,n=s;break}case"l":case"t":{let c=a[i].params[0],o=a[i].params[1];a[i].params[0]+=t,a[i].params[1]+=n,t+=c,n+=o;break}case"M":case"L":{t=a[i].params[0],n=a[i].params[1];break}case"h":{let c=a[i].params[0];a[i].params[0]+=t,t+=c;break}case"H":{t=a[i].params[0];break}case"v":{let c=a[i].params[0];a[i].params[0]+=n,n+=c;break}case"V":{n=a[i].params[0];break}case"c":{let c=a[i].params[4],o=a[i].params[5];a[i].params[0]+=t,a[i].params[1]+=n,a[i].params[2]+=t,a[i].params[3]+=n,a[i].params[4]+=t,a[i].params[5]+=n,t+=c,n+=o;break}case"C":{t=a[i].params[4],n=a[i].params[5];break}case"s":case"q":{let c=a[i].params[2],o=a[i].params[3];a[i].params[0]+=t,a[i].params[1]+=n,a[i].params[2]+=t,a[i].params[3]+=n,t+=c,n+=o;break}case"S":case"Q":{t=a[i].params[2],n=a[i].params[3];break}case"a":{let c=a[i].params[5],o=a[i].params[6];a[i].params[5]+=t,a[i].params[6]+=n,t+=c,n+=o;break}case"A":{t=a[i].params[5],n=a[i].params[6];break}}a[i].command=a[i].command.toUpperCase()}return e},B=(e,a,t=2)=>{if(!e||e.commands.length<=0)return"";let n="";if(a)return O(e,t);for(let r of e.commands)n+=r.command,r.params.length>0?n+=` ${r.params.map(s=>Number.isInteger(s)?s:f(s,t)).join(" ")} `:n+=" ";return n.trim()},Z=e=>{let{commands:a}=e;if(a.length<=0)return e;a[0].command="M";for(let t=1;t<a.length;t++)switch(a[t].command){case"H":{let r=a[t-1];if(!r)continue;a[t].command="L",a[t].params[1]=r.params[1];break}case"V":{let r=a[t-1];if(!r)continue;a[t].command="L";let s=a[t].params[0];a[t].params[0]=r.params[0],a[t].params.push(s);break}case"S":{let r=a[t-1];if(!r)continue;a[t].command="C",a[t].params.unshift(r.params[3]),a[t].params.unshift(r.params[2]);break}case"T":{let r=a[t-1];if(!r)continue;a[t].command="Q",a[t].params.unshift(r.params[1]),a[t].params.unshift(r.params[0]);break}}return e};var it=e=>V(e).errors.length<=0,V=e=>{let a=Se(e);return Pe(a)},Y=(e,a=!1,t=2)=>{if(!e)return e;let n=V(e);return n.errors.length>0?e:B(F(n),!a,t)},st=(e,a=!1,t=2)=>{if(!e)return e;let n=V(e);return n.errors.length>0?e:B(z(n),!a,t)},mt=(e,a=2)=>{if(!e)return e;let t=V(e);return t.errors.length>0?e:O(t,a)},ct=(e,a=2)=>{if(!e)return e;let t=V(e);return t.errors.length>0?e:B(t,!1,a)};var ot=e=>{switch(e.type){case 2:return Ae(e);case 3:return we(e)}return Te(e)},Te=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:r}=e,s=3,i=[],m=Math.max(s,Number(e.raysNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?H:e.decimalPlaces,o=2*Math.PI/m,u=o/2;for(let h=0,d=1.5*Math.PI;h<m;h++,d+=o)i.push([f(a+Math.cos(d)*n,c),f(t+Math.sin(d)*n,c)]),i.push([f(a+Math.cos(d+u)*r,c),f(t+Math.sin(d+u)*r,c)]);let l=`M ${i[0][0]} ${i[0][1]} `;l+=i.map(h=>`L ${h[0]} ${h[1]}`).join(" "),l+="Z",l=Y(l)||l;let b=G(D({},e),{d:l});return $(b)},Ae=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:r}=e,s=3,i=[],m=Math.max(s,Number(e.raysNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?H:e.decimalPlaces,o=2*Math.PI/m,u=o/2;for(let h=0,d=1.5*Math.PI;h<=m;h++,d+=o)i.push([f(a+Math.cos(d)*r,c),f(t+Math.sin(d)*r,c)]),i.push([f(a+Math.cos(d+u)*n,c),f(t+Math.sin(d+u)*n,c)]);let l=`M ${i[0][0]} ${i[0][1]} `;for(let h=0;h<i.length;h+=2){let d=i[h],M=i[h+1];l+=`S${d[0]} ${d[1]} ${M[0]} ${M[1]}`}l+="Z",l=Y(l)||l;let b=G(D({},e),{d:l});return $(b)},we=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:r}=e,s=3,i=[],m=Math.max(s,Number(e.raysNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?H:e.decimalPlaces,o=2*Math.PI/m,u=o/2;for(let h=0,d=1.5*Math.PI;h<=m;h++,d+=o)i.push([f(a+Math.cos(d)*r,c),f(t+Math.sin(d)*r,c)]),i.push([f(a+Math.cos(d+u)*n,c),f(t+Math.sin(d+u)*n,c)]);let l=`M ${i[0][0]} ${i[0][1]} `;for(let h=0;h<i.length;h+=2){let d=i[h],M=i[h+1];l+=`S${d[0]} ${d[1]} ${M[0]} ${M[1]} L ${M[0]} ${M[1]}`}l+="Z",l=Y(l)||l;let b=G(D({},e),{d:l});return $(b)};var ut=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:r}=e,s=3,i=[],m=Math.max(s,Number(e.petalsNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?H:e.decimalPlaces,o=2*Math.PI/m;for(let b=0,h=1.5*Math.PI;b<m;b++,h+=o)i.push([f(a+Math.cos(h)*r,c),f(t+Math.sin(h)*r,c)]),i.push([f(a+Math.cos(h)*n,c),f(t+Math.sin(h)*n,c)]);let u=`M ${i[0][0]} ${i[0][1]} `;for(let b=0;b<i.length;b+=2){let h=i[J(b+1,i.length)],d=i[J(b+2,i.length)],M=i[J(b+3,i.length)];u+=`C ${h[0]} ${h[1]} ${M[0]} ${M[1]} ${d[0]} ${d[1]} `}u+="Z",u=Y(u)||u;let l=G(D({},e),{d:u});return $(l)};var Ie=He(require("fs"),1),lt="Either an SVG element or an SVG string must be provided.",ht=e=>{if(!e.$svg&&!e.svgString)throw new Error(lt);let t=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?te(e.$svg):e.svgString}`;Ie.default.writeFileSync(e.absOutFilePath,(t!=null?t:"").trim(),"utf8")};var Re=e=>{let{x:a,y:t,width:n,height:r,rx:s,ry:i}=e,m=s||0,c=i||0;if(m||c){let o=n-2*m,u=r-2*c;return`M${a+m} ${t}h${o}s${m} 0 ${m} ${c}v${u}s0 ${c} ${-m} ${c}h${-o}s${-m} 0 ${-m} ${-c}v${-u}s0 ${-c} ${m} ${-c}z`}return`M${a} ${t}h${n}v${r}h${-n}z`},bt=e=>{let a=G(D({},e),{d:Re({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return $(a)};var ft=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"g");return A(t,[...I(e)]),t},dt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"defs");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),t},gt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"use");return A(t,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...I(e)]),t},Mt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"pattern");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...I(e)]),t},vt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"clipPath");return A(t,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...I(e)]),t},xt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"mask");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...I(e)]),t},St=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"symbol");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...I(e)]),t};var Pt=(e,a)=>{let t=a.tagName.toLowerCase().trim();e.querySelector(t)||e.append(a)},Ct=(e,a)=>{let t=a.tagName.toLowerCase().trim();e.querySelector(t)||e.prepend(a)};var y=(e,a)=>{let t=2*Math.PI,n=a>0?1:-1;return(t+n*Math.acos(e/Math.sqrt(e*e+a*a)))%t},ie=(e,a,t,n)=>({x:e,y:t,w:Math.abs(n-t),h:Math.abs(a-e),x2:a,y2:n}),Tt=(e,a,t,n,r,s,i,m,c)=>{let o,u,l,b;if(t<0&&(t*=-1),n<0&&(n*=-1),t===0||n===0)return o=e<m?e:m,u=e>m?e:m,l=a<c?a:c,b=a>c?a:c,ie(o,u,l,b);let h=Math.cos(r)*(e-m)/2+Math.sin(r)*(a-c)/2,d=-Math.sin(r)*(e-m)/2+Math.cos(r)*(a-c)/2,M=t*t*n*n-t*t*d*d-n*n*h*h;M/=t*t*d*d+n*n*h*h;let N=0,g=0;if(M<0){let E=t/n;if(M=d*d+h*h/(E*E),M<0)return o=e<m?e:m,u=e>m?e:m,l=a<c?a:c,b=a>c?a:c,ie(o,u,l,b);n=Math.sqrt(M),t=E*n}else{let E=(s==i?-1:1)*Math.sqrt(M);N=E*t*d/n,g=-E*n*h/t}let v=N*Math.cos(r)-g*Math.sin(r)+(e+m)/2,C=N*Math.sin(r)+g*Math.cos(r)+(a+c)/2,T,S,w,R;if(r===0||r===Math.PI)o=v-t,T=y(-t,0),u=v+t,S=y(t,0),l=C-n,w=y(0,-n),b=C+n,R=y(0,n);else if(r===Math.PI/2||r===3*Math.PI/2)o=v-n,T=y(-n,0),u=v+n,S=y(n,0),l=C-t,w=y(0,-t),b=C+t,R=y(0,t);else{T=-Math.atan(n*Math.tan(r)/t),S=Math.PI-Math.atan(n*Math.tan(r)/t),o=v+t*Math.cos(S)*Math.cos(r)-n*Math.sin(T)*Math.sin(r),u=v+t*Math.cos(S)*Math.cos(r)-n*Math.sin(S)*Math.sin(r),o>u&&([o,u]=[u,o],[T,S]=[S,T]);let E=C+t*Math.cos(T)*Math.sin(r)+n*Math.sin(T)*Math.cos(r);T=y(o-v,E-C),E=C+t*Math.cos(S)*Math.sin(r)+n*Math.sin(S)*Math.cos(r),S=y(u-v,E-C),w=Math.atan(n/(Math.tan(r)*t)),R=Math.atan(n/(Math.tan(r)*t))+Math.PI,l=C+t*Math.cos(w)*Math.sin(r)+n*Math.sin(w)*Math.cos(r),b=C+t*Math.cos(R)*Math.sin(r)+n*Math.sin(R)*Math.cos(r),l>b&&([l,b]=[b,l],[w,R]=[R,w]);let ee=v+t*Math.cos(w)*Math.cos(r)-n*Math.sin(w)*Math.sin(r);w=y(ee-v,l-C),ee=v+t*Math.cos(R)*Math.cos(r)-n*Math.sin(R)*Math.sin(r),R=y(ee-v,b-C)}let k=y(e-v,a-C),x=y(m-v,c-C);i||([k,x]=[x,k]);let L=!1;return k>x&&([k,x]=[x,k],L=!0),(!L&&(k>T||x<T)||L&&!(k>T||x<T))&&(o=Math.min(e,m)),(!L&&(k>S||x<S)||L&&!(k>S||x<S))&&(u=Math.max(e,m)),(!L&&(k>w||x<w)||L&&!(k>w||x<w))&&(l=Math.min(a,c)),(!L&&(k>R||x<R)||L&&!(k>R||x<R))&&(b=Math.max(a,c)),ie(o,u,l,b)},se=(e,a=2)=>{var h,d,M,N;if(!e||e.trim()==="")return null;let t=V(e);if(t.errors.length>0)return null;let n=z(t);if(!n||n.commands.length<=0)return null;let r=1/0,s=1/0,i=-1/0,m=-1/0,c=Z(n),o=c.commands[0].params[0],u=c.commands[0].params[1],l=o,b=u;for(let g of c.commands)switch(g.command){case"M":{r=Math.min(r,g.params[0]),s=Math.min(s,g.params[1]),i=Math.max(i,g.params[0]),m=Math.max(m,g.params[1]),l=g.params[0],b=g.params[1];break}case"Z":{o=l,u=b;break}case"L":{r=Math.min(r,g.params[0]),s=Math.min(s,g.params[1]),i=Math.max(i,g.params[0]),m=Math.max(m,g.params[1]),o=g.params[0],u=g.params[1];break}case"C":{let v=[o,u],C=[g.params[0],g.params[1]],T=[g.params[2],g.params[3]],S=[g.params[4],g.params[5]],w=ve(v,C,T,S);r=Math.min(r,w.x),s=Math.min(s,w.y),i=Math.max(i,w.x2),m=Math.max(m,w.y2),o=g.params[4],u=g.params[5];break}case"Q":{let v=[o,u],C=[g.params[0],g.params[1]],T=[g.params[2],g.params[3]],S=Me(v,C,T);r=Math.min(r,S.x),s=Math.min(s,S.y),i=Math.max(i,S.x2),m=Math.max(m,S.y2),o=g.params[2],u=g.params[3];break}case"A":{let v=g.params[0],C=g.params[1],T=g.params[2],S=g.params[3],w=g.params[4],R=g.params[5],k=g.params[6],x=Tt(o,u,v,C,K(T),S===1,w===1,R,k);r=Math.min(r,(h=x==null?void 0:x.x)!=null?h:0),s=Math.min(s,(d=x==null?void 0:x.y)!=null?d:0),i=Math.max(i,(M=x==null?void 0:x.x2)!=null?M:0),m=Math.max(m,(N=x==null?void 0:x.y2)!=null?N:0),o=g.params[5],u=g.params[6];break}}return{x:f(r,a),y:f(s,a),w:f(Math.abs(i-r),a),h:f(Math.abs(m-s),a),x2:f(i,a),y2:f(m,a)}};var At=(e,a,t,n=2)=>{if(!e)return e;let r=V(e);if(r.errors.length>0)return e;let s=F(r);if(!s||s.commands.length<=0)return e;let i=s.commands[0];return i.params[0]=a,i.params[1]=t,B(s,!0,n)},X=(e,a,t,n=2)=>de(t,[a[0],a[1],1],[e[0],e[1],1],!0,n),ke=(e,a,t,n=2)=>{if(!e)return e;let r=V(e);if(r.errors.length>0)return e;let s=z(r);if(!s||s.commands.length<=0)return e;let i=K(t,n),m=Z(s);for(let o of m.commands)switch(o.command){case"M":case"L":{let u=X([o.params[0],o.params[1]],a,i,n);o.params[0]=u[0],o.params[1]=u[1];break}case"C":{let u=X([o.params[0],o.params[1]],a,i,n);o.params[0]=u[0],o.params[1]=u[1];let l=X([o.params[2],o.params[3]],a,i,n);o.params[2]=l[0],o.params[3]=l[1];let b=X([o.params[4],o.params[5]],a,i,n);o.params[4]=b[0],o.params[5]=b[1];break}case"Q":{let u=X([o.params[0],o.params[1]],a,i,n);o.params[0]=u[0],o.params[1]=u[1];let l=X([o.params[2],o.params[3]],a,i,n);o.params[2]=l[0],o.params[3]=l[1];break}case"A":{let u=X([o.params[5],o.params[6]],a,i,n);o.params[5]=u[0],o.params[6]=u[1];break}}let c=F(s);return B(c,!0,n)},wt=(e,a,t=2)=>{var u,l,b,h;let n=se(e),r=(u=n==null?void 0:n.x)!=null?u:0,s=(l=n==null?void 0:n.y)!=null?l:0,i=(b=n==null?void 0:n.w)!=null?b:0,m=(h=n==null?void 0:n.h)!=null?h:0,c=r+i/2,o=s+m/2;return ke(e,[c,o],a,t)},Q=(e,a,t,n=2)=>ge([a[0],a[1],1],[t[0],t[1],1],[e[0],e[1],1],n),ye=(e,a,t,n=2)=>{if(!e)return e;let r=V(e);if(r.errors.length>0)return e;let s=z(r);if(!s||s.commands.length<=0)return e;let i=Z(s);for(let m of i.commands)switch(m.command){case"M":case"L":{let c=Q([m.params[0],m.params[1]],a,t,n);m.params[0]=c[0],m.params[1]=c[1];break}case"C":{let c=Q([m.params[0],m.params[1]],a,t,n);m.params[0]=c[0],m.params[1]=c[1];let o=Q([m.params[2],m.params[3]],a,t,n);m.params[2]=o[0],m.params[3]=o[1];let u=Q([m.params[4],m.params[5]],a,t,n);m.params[4]=u[0],m.params[5]=u[1];break}case"Q":{let c=Q([m.params[0],m.params[1]],a,t,n);m.params[0]=c[0],m.params[1]=c[1];let o=Q([m.params[2],m.params[3]],a,t,n);m.params[2]=o[0],m.params[3]=o[1];break}case"A":{let c=Q([m.params[5],m.params[6]],a,t,n);m.params[5]=c[0],m.params[6]=c[1];break}}return B(s,!1,n)},It=(e,a,t=2)=>{var u,l,b,h;let n=se(e),r=(u=n==null?void 0:n.x)!=null?u:0,s=(l=n==null?void 0:n.y)!=null?l:0,i=(b=n==null?void 0:n.w)!=null?b:0,m=(h=n==null?void 0:n.h)!=null?h:0,c=r+i/2,o=s+m/2;return ye(e,a,[c,o],t)};var p=e=>e?[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["begin",e==null?void 0:e.begin],["dur",e==null?void 0:e.dur],["end",e==null?void 0:e.end],["min",e==null?void 0:e.min],["max",e==null?void 0:e.max],["restart",e==null?void 0:e.restart],["repeatCount",e==null?void 0:e.repeatCount],["repeatDur",e==null?void 0:e.repeatDur],["fill",e==null?void 0:e.fill],["calcMode",e==null?void 0:e.calcMode],["values",e==null?void 0:e.values],["keyTimes",e==null?void 0:e.keyTimes],["keySplines",e==null?void 0:e.keySplines],["from",e==null?void 0:e.from],["to",e==null?void 0:e.to],["by",e==null?void 0:e.by],["attributeName",e==null?void 0:e.attributeName],["additive",e==null?void 0:e.additive],["accumulate",e==null?void 0:e.accumulate]]:[],Rt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"animate");return A(t,[...p(e)]),t},kt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"animateMotion");return A(t,[["keyPoints",e==null?void 0:e.keyPoints],["path",e==null?void 0:e.path],["rotate",e==null?void 0:e.rotate],...p(e)]),t},yt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"animateTransform");return A(t,[["type",e==null?void 0:e.type],["attributeType",e==null?void 0:e.attributeType],...p(e)]),t},Vt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(P,"mpath");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["xlink:href",e==null?void 0:e.xlinkHref]]),t};0&&(module.exports={DEFAULT_DECIMAL_PLACES,SVG_NAMESPACE,XMLNS_NAMESPACE,appendOnce,beautifyPath,createAnimate,createAnimateMotion,createAnimateTransform,createCircle,createClipPath,createDefs,createEllipse,createFlower,createGroup,createLine,createMPath,createMask,createPath,createPattern,createPolygon,createPolyline,createRect,createRectPath,createSVG,createSVGFromString,createStar,createStar1,createStar2,createStar3,createSymbol,createUse,getCommonAnimationAttributes,getCommonAttributes,getRectPathD,getSVGAsString,isPathValid,minifyPath,parsePath,pathToAbs,pathToRel,prependOnce,rotatePath,rotatePathAroundPoint,saveSVG,scalePath,scalePathAroundPoint,setAttributes,translatePath});
//# sourceMappingURL=mz-svg.node.cjs.map
