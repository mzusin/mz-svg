/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.8
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var xe=Object.defineProperty,Se=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var se=(e,a,t)=>a in e?xe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,N=(e,a)=>{for(var t in a||(a={}))Ce.call(a,t)&&se(e,t,a[t]);if(ie)for(var t of ie(a))Te.call(a,t)&&se(e,t,a[t]);return e},D=(e,a)=>Se(e,Pe(a));var T="http://www.w3.org/2000/svg",Ae="http://www.w3.org/2000/xmlns/",X=2,Fe=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"svg");t.setAttributeNS(Ae,"xmlns",T);let n=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(n=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",n],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...R(e)]),t},Ze=e=>{let{document:a,svg:t}=e,i=(a||window.document).createElement("div");return i.innerHTML=t,i.firstElementChild},me=e=>e.outerHTML,A=(e,a)=>{if(!(!e||!a))for(let t of a){if(t.length!==2)continue;let n=t[0];if(n==null)continue;let i=t[1];i!=null&&e.setAttribute(n,i.toString())}},R=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var G=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),A(t,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t},Ke=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"rect");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t},Je=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"circle");return A(t,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t},Oe=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"ellipse");return A(t,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t},pe=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"line");return A(t,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t},et=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"polygon");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t},tt=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"polyline");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...R(e)]),t};var we=Math.pow,f=(e,a=1/0)=>{if(a===1/0)return e;a<0&&(a=0);let t=we(10,a);return Math.round(e*t)/t};var W=(e,a=1/0)=>{let t=e*(Math.PI/180);return f(t,a)};var Ie=(e,a,t=1/0)=>{let n=[];for(let i=0;i<e.length;i++)n.push(f(e[i]*a,t));return n};var oe=(e,a,t=1/0)=>Ie(e,a,t);var ue=(e,a,t=1/0)=>{let n=0;for(let i=0;i<e.length;i++)n+=e[i]*a[i];return f(n,t)};var Re=e=>{let a=e.length;if(a<=0)return e;let t=e[0].length;if(t<=0)return e;let n=[];for(let i=0;i<t;i++)n.push([]);for(let i=0;i<a;i++)for(let s=0;s<t;s++)n[s].push(e[i][s]);return n};var Z=(e,a,t=1/0)=>{let n=[];for(let s=0;s<e.length;s++)n.push([]);let i=Re(a);if(n.length!==i.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let s=0;s<e.length;s++){let r=e[s];for(let m=0;m<i.length;m++){let c=i[m],o=ue(r,c,t);n[s].push(o)}}return n},te=(e,a,t=1/0)=>{if(e.length<0)return[];if(e[0].length!==a.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let i=0;i<e.length;i++)n[i]=ue(e[i],a,t);return n};var j=(e,a=1/0)=>[[1,0,f(e[0],a)],[0,1,f(e[1],a)],[0,0,1]];var ke=(e,a=!0,t=1/0)=>{let n=f(Math.cos(e),t),i=f(Math.sin(e),t);return a?[[n,-i,0],[i,n,0],[0,0,1]]:[[n,i,0],[-i,n,0],[0,0,1]]},ye=(e,a,t=!0,n=1/0)=>{let i=j(a,n),s=ke(e,t,n),r=j(oe(a,-1),n),m=Z(i,s);return Z(m,r)},le=(e,a,t,n=!0,i=1/0)=>{let s=ye(e,a,n,i);return te(s,t)};var Ve=(e,a,t=1/0)=>{let n=j(a,t),i=Ee(e),s=j(oe(a,-1),t),r=Z(n,i);return Z(r,s)},he=(e,a,t,n=1/0)=>{let i=Ve(e,a,n);return te(i,t)};var Ee=e=>[[e[0],0,0],[0,e[1],0],[0,0,1]];var K=(e,a)=>(e%a+a)%a;var p=e=>!isNaN(parseFloat(e))&&isFinite(e);var ee=(e,a=1/0)=>{let t=e[0],n=e[1],i=e[2]-n;return t===0&&i===0?1/0:t===0?NaN:f(i/t,a)};var ce=(e,a=1/0)=>{let t=e[0],n=e[1],i=e[2],s=e[3];if(t===0){let u=ee([n,i,s],a);return p(u)?[u]:[]}let r=i-s,m=n*n-4*t*r;if(m<0)return[];if(m===0)return[f(-n/(2*t),a)];let c=2*t,o=Math.sqrt(m);return[f((-n+o)/c,a),f((-n-o)/c,a)]},Le=(e,a,t,n,i=1/0)=>{let s=Math.pow(1-e,2),r=(1-e)*2*e,m=e*e;return[f(s*a[0]+r*t[0]+m*n[0],i),f(s*a[1]+r*t[1]+m*n[1],i)]};var $e=(e,a,t,n,i,s=1/0)=>{let r=Math.pow(1-e,3),m=Math.pow(1-e,2)*3*e,c=(1-e)*3*e*e,o=e*e*e;return[f(r*a[0]+m*t[0]+c*n[0]+o*i[0],s),f(r*a[1]+m*t[1]+c*n[1]+o*i[1],s)]};var Ne=(e,a,t,n=1/0)=>{let i=2*e[0]-4*a[0]+2*t[0],s=-2*e[0]+2*a[0],r=ee([i,s,0],n),m=2*e[1]-4*a[1]+2*t[1],c=-2*e[1]+2*a[1],o=ee([m,c,0],n),u=[];return p(r)&&u.push(r),p(o)&&u.push(o),u},De=(e,a,t,n,i=1/0)=>{let s=-3*e[0]+9*a[0]-9*t[0]+3*n[0],r=6*e[0]-12*a[0]+6*t[0],m=-3*e[0]+3*a[0],c=[s,r,m,0],o=-3*e[1]+9*a[1]-9*t[1]+3*n[1],u=6*e[1]-12*a[1]+6*t[1],l=-3*e[1]+3*a[1],b=[o,u,l,0],h=ce(c,i).filter(M=>M>=0&&M<=1),d=ce(b,i).filter(M=>M>=0&&M<=1);return[...h,...d].length===2?[...h,...d]:null},be=(e,a,t,n=1/0)=>{let i=Ne(e,a,t),s=1/0,r=1/0,m=-1/0,c=-1/0;for(let o of i){let u=Le(o,e,a,t),l=u[0],b=u[1];s=Math.min(s,l),m=Math.max(m,l),r=Math.min(r,b),c=Math.max(c,b)}return s=f(Math.min(s,e[0],t[0]),n),m=f(Math.max(m,e[0],t[0]),n),r=f(Math.min(r,e[1],t[1]),n),c=f(Math.max(c,e[1],t[1]),n),{x:s,y:r,w:Math.abs(m-s),h:Math.abs(c-r),x2:m,y2:c}},fe=(e,a,t,n,i=1/0)=>{let s=De(e,a,t,n)||[],r=1/0,m=1/0,c=-1/0,o=-1/0;for(let u of s){let l=$e(u,e,a,t,n),b=l[0],h=l[1];r=Math.min(r,b!=null?b:1/0),c=Math.max(c,b!=null?b:-1/0),m=Math.min(m,h!=null?h:1/0),o=Math.max(o,h!=null?h:-1/0)}return r=f(Math.min(r,e[0],n[0]),i),c=f(Math.max(c,e[0],n[0]),i),m=f(Math.min(m,e[1],n[1]),i),o=f(Math.max(o,e[1],n[1]),i),{x:r,y:m,w:Math.abs(c-r),h:Math.abs(o-m),x2:c,y2:o}};var de=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),ge=e=>{let a={tokens:[],errors:[]};if(!e||e.trim()==="")return a;let t=0,n=0,i=0,s=()=>t>=e.length,r=l=>{a.tokens.push({tokenType:l,line:n,col:i})},m=l=>{a.tokens.push({tokenType:"num",value:l,line:n,col:i})},c=l=>{a.errors.push({line:n,col:i,msg:l})},o=()=>s()?!1:de.test(e.substring(t)),u=()=>{let l=e[t];if(l.charAt(0)===`
`||l.charAt(0)==="\r"){t++,i=0,n++;return}if(/\s/.test(l)||l===","){t++,i++;return}if(o()){let b=e.substring(t).match(de);if(b&&b.length>0){let h=b[0];m(h),t+=h.length,i+=h.length;return}}switch(l){case"M":r("M");break;case"m":r("m");break;case"Z":r("Z");break;case"z":r("z");break;case"L":r("L");break;case"l":r("l");break;case"H":r("H");break;case"h":r("h");break;case"V":r("V");break;case"v":r("v");break;case"C":r("C");break;case"c":r("c");break;case"S":r("S");break;case"s":r("s");break;case"Q":r("Q");break;case"q":r("q");break;case"T":r("T");break;case"t":r("t");break;case"A":r("A");break;case"a":r("a");break;default:{c(`Unexpected character ${l}`);break}}t++,i++};for(;!s();)u();return a};var Me=e=>{let a={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return a;let{tokens:t,errors:n}=e,i=(u,l)=>{n.push({line:u==null?void 0:u.line,col:u==null?void 0:u.col,msg:l})};if(t[0].tokenType!=="M"&&t[0].tokenType!=="m")return i(t[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),a;let s=0,r=()=>s>=t.length,m=u=>{var h,d;if(!u||u.toLowerCase()!=="a")return!0;let l=(((h=t[s+4])==null?void 0:h.value)||"").toString(),b=(((d=t[s+5])==null?void 0:d.value)||"").toString();return(l==="0"||l==="1")&&(b==="0"||b==="1")},c=(u,l,b)=>{var g;let h=t[s].tokenType,d=[];if(u>0)for(let v=1;v<=u;v++){if(!t[s+v]||t[s+v].tokenType!=="num"){i(t[s],`Expected number(s) after command ${h}.`),s+=u;return}d.push(Number(t[s+v].value))}if(!m(h)){i(t[s],"Arc flags must be 0 or 1."),s+=u+1;return}if(!m(h)){i(t[s],"Arc flags must be 0 or 1."),s+=u+1;return}if(a.commands.push({command:t[s].tokenType,params:d}),s+=u+1,u<=0)return;let M=[];for(;((g=t[s])==null?void 0:g.tokenType)==="num";)M.push(t[s]),s++;if(M.length%u!==0){i(M[M.length-1],"Expected a number.");return}let $=b?l.toLowerCase():l.toUpperCase();for(let v=0;v<M.length;v+=u){let P=[];for(let C=0;C<u;C++)P.push(Number(M[v+C].value));a.commands.push({command:$,params:P})}},o=()=>{let u=t[s],l=u.tokenType.toLowerCase()===u.tokenType;switch(u.tokenType){case"M":case"m":case"L":case"l":{c(2,"L",l);break}case"Z":case"z":{c(0,"L",l);break}case"H":case"h":case"V":case"v":{c(1,u.tokenType,l);break}case"C":case"c":{c(6,u.tokenType,l);break}case"S":case"s":case"Q":case"q":{c(4,u.tokenType,l);break}case"T":case"t":{c(2,u.tokenType,l);break}case"A":case"a":{c(7,u.tokenType,l);break}default:{i(t[s],"Wrong path command."),s++;break}}};for(c(2,"L",t[0].tokenType==="m");!r();)o();return a};var Q=(e,a=2)=>{if(Number.isInteger(e))return e.toString();let t=f(e,a).toString(),n=t.split("."),i=n[0],s=n[1];return i==="0"?`.${s}`:i==="-0"?`-.${s}`:t},ve=(e,a)=>{if(!e||e.length<=0)return"";let t=Q(e[0],a);for(let n=1;n<e.length;n++){let i=e[n],s=Q(i,a);i<0?t+=s:t+=` ${s}`}return t},J=(e,a=2)=>{let t="",n=null;for(let i of e.commands){if(i.command==="L"){if(i.params[0]===0){t+=`V${Q(i.params[1],a)}`,n="V";continue}if(i.params[1]===0){t+=`H${Q(i.params[0],a)}`,n="H";continue}}if(i.command==="l"){if(i.params[0]===0){t+=`v${Q(i.params[1],a)}`,n="v";continue}if(i.params[1]===0){t+=`h${Q(i.params[0],a)}`,n="h";continue}}if(i.command==="c"&&(n==null?void 0:n.toLowerCase())!=="C".toLowerCase()&&(n==null?void 0:n.toLowerCase())!=="S".toLowerCase()&&i.params[0]===0&&i.params[1]===0){let r=ve([i.params[2],i.params[3],i.params[4],i.params[5]],a);t+=`s${r}`,n="s";continue}n===i.command||n==="M"&&i.command==="L"||n==="m"&&i.command==="l"?i.params.length>0&&i.params[0]>=0&&(t+=" "):t+=i.command,t+=ve(i.params,a),n=i.command}return t.trim()};var _=e=>{let{commands:a}=e;if(a.length<=0)return e;let t=a[0].params[0],n=a[0].params[1],i=t,s=n;a[0].command="M";for(let r=1;r<a.length;r++){switch(a[r].command){case"M":{a[r].params[0]-=t,a[r].params[1]-=n,i=a[r].params[0],s=a[r].params[1];break}case"Z":case"z":{t=i,n=s;break}case"L":case"T":{let c=a[r].params[0],o=a[r].params[1];a[r].params[0]-=t,a[r].params[1]-=n,t=c,n=o;break}case"m":case"l":{t+=a[r].params[0],n+=a[r].params[1];break}case"H":{let c=a[r].params[0];a[r].params[0]-=t,t=c;break}case"h":{t+=a[r].params[0];break}case"V":{let c=a[r].params[0];a[r].params[0]-=n,n=c;break}case"v":{n+=a[r].params[0];break}case"C":{let c=a[r].params[4],o=a[r].params[5];a[r].params[0]-=t,a[r].params[1]-=n,a[r].params[2]-=t,a[r].params[3]-=n,a[r].params[4]-=t,a[r].params[5]-=n,t=c,n=o;break}case"c":{t+=a[r].params[4],n+=a[r].params[5];break}case"S":case"Q":{let c=a[r].params[2],o=a[r].params[3];a[r].params[0]-=t,a[r].params[1]-=n,a[r].params[2]-=t,a[r].params[3]-=n,t=c,n=o;break}case"s":case"q":{t+=a[r].params[2],n+=a[r].params[3];break}case"A":{let c=a[r].params[5],o=a[r].params[6];a[r].params[5]-=t,a[r].params[6]-=n,t=c,n=o;break}case"a":{t+=a[r].params[5],n+=a[r].params[6];break}}a[r].command=a[r].command.toLowerCase()}return e},H=e=>{let{commands:a}=e;if(a.length<=0)return e;let t=a[0].params[0],n=a[0].params[1],i=t,s=n;a[0].command="M";for(let r=1;r<a.length;r++){switch(a[r].command){case"m":{a[r].params[0]+=t,a[r].params[1]+=n,i=a[r].params[0],s=a[r].params[1];break}case"Z":case"z":{t=i,n=s;break}case"l":case"t":{let c=a[r].params[0],o=a[r].params[1];a[r].params[0]+=t,a[r].params[1]+=n,t+=c,n+=o;break}case"M":case"L":{t=a[r].params[0],n=a[r].params[1];break}case"h":{let c=a[r].params[0];a[r].params[0]+=t,t+=c;break}case"H":{t=a[r].params[0];break}case"v":{let c=a[r].params[0];a[r].params[0]+=n,n+=c;break}case"V":{n=a[r].params[0];break}case"c":{let c=a[r].params[4],o=a[r].params[5];a[r].params[0]+=t,a[r].params[1]+=n,a[r].params[2]+=t,a[r].params[3]+=n,a[r].params[4]+=t,a[r].params[5]+=n,t+=c,n+=o;break}case"C":{t=a[r].params[4],n=a[r].params[5];break}case"s":case"q":{let c=a[r].params[2],o=a[r].params[3];a[r].params[0]+=t,a[r].params[1]+=n,a[r].params[2]+=t,a[r].params[3]+=n,t+=c,n+=o;break}case"S":case"Q":{t=a[r].params[2],n=a[r].params[3];break}case"a":{let c=a[r].params[5],o=a[r].params[6];a[r].params[5]+=t,a[r].params[6]+=n,t+=c,n+=o;break}case"A":{t=a[r].params[5],n=a[r].params[6];break}}a[r].command=a[r].command.toUpperCase()}return e},B=(e,a,t=2)=>{if(!e||e.commands.length<=0)return"";let n="";if(a)return J(e,t);for(let i of e.commands)n+=i.command,i.params.length>0?n+=` ${i.params.map(s=>Number.isInteger(s)?s:f(s,t)).join(" ")} `:n+=" ";return n.trim()},F=e=>{let{commands:a}=e;if(a.length<=0)return e;a[0].command="M";for(let t=1;t<a.length;t++)switch(a[t].command){case"H":{let i=a[t-1];if(!i)continue;a[t].command="L",a[t].params[1]=i.params[1];break}case"V":{let i=a[t-1];if(!i)continue;a[t].command="L";let s=a[t].params[0];a[t].params[0]=i.params[0],a[t].params.push(s);break}case"S":{let i=a[t-1];if(!i)continue;a[t].command="C",a[t].params.unshift(i.params[3]),a[t].params.unshift(i.params[2]);break}case"T":{let i=a[t-1];if(!i)continue;a[t].command="Q",a[t].params.unshift(i.params[1]),a[t].params.unshift(i.params[0]);break}}return e};var It=e=>V(e).errors.length<=0,V=e=>{let a=ge(e);return Me(a)},q=(e,a=!1,t=2)=>{if(!e)return e;let n=V(e);return n.errors.length>0?e:B(_(n),!a,t)},Rt=(e,a=!1,t=2)=>{if(!e)return e;let n=V(e);return n.errors.length>0?e:B(H(n),!a,t)},kt=(e,a=2)=>{if(!e)return e;let t=V(e);return t.errors.length>0?e:J(t,a)},yt=(e,a=2)=>{if(!e)return e;let t=V(e);return t.errors.length>0?e:B(t,!1,a)};var Dt=e=>{switch(e.type){case 2:return Be(e);case 3:return He(e)}return Ge(e)},Ge=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:i}=e,s=3,r=[],m=Math.max(s,Number(e.raysNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,o=2*Math.PI/m,u=o/2;for(let h=0,d=1.5*Math.PI;h<m;h++,d+=o)r.push([f(a+Math.cos(d)*n,c),f(t+Math.sin(d)*n,c)]),r.push([f(a+Math.cos(d+u)*i,c),f(t+Math.sin(d+u)*i,c)]);let l=`M ${r[0][0]} ${r[0][1]} `;l+=r.map(h=>`L ${h[0]} ${h[1]}`).join(" "),l+="Z",l=q(l)||l;let b=D(N({},e),{d:l});return G(b)},Be=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:i}=e,s=3,r=[],m=Math.max(s,Number(e.raysNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,o=2*Math.PI/m,u=o/2;for(let h=0,d=1.5*Math.PI;h<=m;h++,d+=o)r.push([f(a+Math.cos(d)*i,c),f(t+Math.sin(d)*i,c)]),r.push([f(a+Math.cos(d+u)*n,c),f(t+Math.sin(d+u)*n,c)]);let l=`M ${r[0][0]} ${r[0][1]} `;for(let h=0;h<r.length;h+=2){let d=r[h],M=r[h+1];l+=`S${d[0]} ${d[1]} ${M[0]} ${M[1]}`}l+="Z",l=q(l)||l;let b=D(N({},e),{d:l});return G(b)},He=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:i}=e,s=3,r=[],m=Math.max(s,Number(e.raysNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,o=2*Math.PI/m,u=o/2;for(let h=0,d=1.5*Math.PI;h<=m;h++,d+=o)r.push([f(a+Math.cos(d)*i,c),f(t+Math.sin(d)*i,c)]),r.push([f(a+Math.cos(d+u)*n,c),f(t+Math.sin(d+u)*n,c)]);let l=`M ${r[0][0]} ${r[0][1]} `;for(let h=0;h<r.length;h+=2){let d=r[h],M=r[h+1];l+=`S${d[0]} ${d[1]} ${M[0]} ${M[1]} L ${M[0]} ${M[1]}`}l+="Z",l=q(l)||l;let b=D(N({},e),{d:l});return G(b)};var qt=e=>{let{centerX:a,centerY:t,outerRadius:n,innerRadius:i}=e,s=3,r=[],m=Math.max(s,Number(e.petalsNumber)||s),c=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,o=2*Math.PI/m;for(let b=0,h=1.5*Math.PI;b<m;b++,h+=o)r.push([f(a+Math.cos(h)*i,c),f(t+Math.sin(h)*i,c)]),r.push([f(a+Math.cos(h)*n,c),f(t+Math.sin(h)*n,c)]);let u=`M ${r[0][0]} ${r[0][1]} `;for(let b=0;b<r.length;b+=2){let h=r[K(b+1,r.length)],d=r[K(b+2,r.length)],M=r[K(b+3,r.length)];u+=`C ${h[0]} ${h[1]} ${M[0]} ${M[1]} ${d[0]} ${d[1]} `}u+="Z",u=q(u)||u;let l=D(N({},e),{d:u});return G(l)};import ze from"fs";var Ye="Either an SVG element or an SVG string must be provided.",jt=e=>{if(!e.$svg&&!e.svgString)throw new Error(Ye);let t=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?me(e.$svg):e.svgString}`;ze.writeFileSync(e.absOutFilePath,(t!=null?t:"").trim(),"utf8")};var Xe=e=>{let{x:a,y:t,width:n,height:i,rx:s,ry:r}=e,m=s||0,c=r||0;if(m||c){let o=n-2*m,u=i-2*c;return`M${a+m} ${t}h${o}s${m} 0 ${m} ${c}v${u}s0 ${c} ${-m} ${c}h${-o}s${-m} 0 ${-m} ${-c}v${-u}s0 ${-c} ${m} ${-c}z`}return`M${a} ${t}h${n}v${i}h${-n}z`},Jt=e=>{let a=D(N({},e),{d:Xe({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return G(a)};var ta=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"g");return A(t,[...R(e)]),t},aa=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"defs");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),t},na=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"use");return A(t,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...R(e)]),t},ra=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"pattern");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...R(e)]),t},ia=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"clipPath");return A(t,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...R(e)]),t},sa=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"mask");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...R(e)]),t},ma=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"symbol");return A(t,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...R(e)]),t};var oa=(e,a)=>{let t=a.tagName.toLowerCase().trim();e.querySelector(t)||e.append(a)},ua=(e,a)=>{let t=a.tagName.toLowerCase().trim();e.querySelector(t)||e.prepend(a)};var y=(e,a)=>{let t=2*Math.PI,n=a>0?1:-1;return(t+n*Math.acos(e/Math.sqrt(e*e+a*a)))%t},ae=(e,a,t,n)=>({x:e,y:t,w:Math.abs(n-t),h:Math.abs(a-e),x2:a,y2:n}),Qe=(e,a,t,n,i,s,r,m,c)=>{let o,u,l,b;if(t<0&&(t*=-1),n<0&&(n*=-1),t===0||n===0)return o=e<m?e:m,u=e>m?e:m,l=a<c?a:c,b=a>c?a:c,ae(o,u,l,b);let h=Math.cos(i)*(e-m)/2+Math.sin(i)*(a-c)/2,d=-Math.sin(i)*(e-m)/2+Math.cos(i)*(a-c)/2,M=t*t*n*n-t*t*d*d-n*n*h*h;M/=t*t*d*d+n*n*h*h;let $=0,g=0;if(M<0){let E=t/n;if(M=d*d+h*h/(E*E),M<0)return o=e<m?e:m,u=e>m?e:m,l=a<c?a:c,b=a>c?a:c,ae(o,u,l,b);n=Math.sqrt(M),t=E*n}else{let E=(s==r?-1:1)*Math.sqrt(M);$=E*t*d/n,g=-E*n*h/t}let v=$*Math.cos(i)-g*Math.sin(i)+(e+m)/2,P=$*Math.sin(i)+g*Math.cos(i)+(a+c)/2,C,S,w,I;if(i===0||i===Math.PI)o=v-t,C=y(-t,0),u=v+t,S=y(t,0),l=P-n,w=y(0,-n),b=P+n,I=y(0,n);else if(i===Math.PI/2||i===3*Math.PI/2)o=v-n,C=y(-n,0),u=v+n,S=y(n,0),l=P-t,w=y(0,-t),b=P+t,I=y(0,t);else{C=-Math.atan(n*Math.tan(i)/t),S=Math.PI-Math.atan(n*Math.tan(i)/t),o=v+t*Math.cos(S)*Math.cos(i)-n*Math.sin(C)*Math.sin(i),u=v+t*Math.cos(S)*Math.cos(i)-n*Math.sin(S)*Math.sin(i),o>u&&([o,u]=[u,o],[C,S]=[S,C]);let E=P+t*Math.cos(C)*Math.sin(i)+n*Math.sin(C)*Math.cos(i);C=y(o-v,E-P),E=P+t*Math.cos(S)*Math.sin(i)+n*Math.sin(S)*Math.cos(i),S=y(u-v,E-P),w=Math.atan(n/(Math.tan(i)*t)),I=Math.atan(n/(Math.tan(i)*t))+Math.PI,l=P+t*Math.cos(w)*Math.sin(i)+n*Math.sin(w)*Math.cos(i),b=P+t*Math.cos(I)*Math.sin(i)+n*Math.sin(I)*Math.cos(i),l>b&&([l,b]=[b,l],[w,I]=[I,w]);let O=v+t*Math.cos(w)*Math.cos(i)-n*Math.sin(w)*Math.sin(i);w=y(O-v,l-P),O=v+t*Math.cos(I)*Math.cos(i)-n*Math.sin(I)*Math.sin(i),I=y(O-v,b-P)}let k=y(e-v,a-P),x=y(m-v,c-P);r||([k,x]=[x,k]);let L=!1;return k>x&&([k,x]=[x,k],L=!0),(!L&&(k>C||x<C)||L&&!(k>C||x<C))&&(o=Math.min(e,m)),(!L&&(k>S||x<S)||L&&!(k>S||x<S))&&(u=Math.max(e,m)),(!L&&(k>w||x<w)||L&&!(k>w||x<w))&&(l=Math.min(a,c)),(!L&&(k>I||x<I)||L&&!(k>I||x<I))&&(b=Math.max(a,c)),ae(o,u,l,b)},ne=(e,a=2)=>{var h,d,M,$;if(!e||e.trim()==="")return null;let t=V(e);if(t.errors.length>0)return null;let n=H(t);if(!n||n.commands.length<=0)return null;let i=1/0,s=1/0,r=-1/0,m=-1/0,c=F(n),o=c.commands[0].params[0],u=c.commands[0].params[1],l=o,b=u;for(let g of c.commands)switch(g.command){case"M":{i=Math.min(i,g.params[0]),s=Math.min(s,g.params[1]),r=Math.max(r,g.params[0]),m=Math.max(m,g.params[1]),l=g.params[0],b=g.params[1];break}case"Z":{o=l,u=b;break}case"L":{i=Math.min(i,g.params[0]),s=Math.min(s,g.params[1]),r=Math.max(r,g.params[0]),m=Math.max(m,g.params[1]),o=g.params[0],u=g.params[1];break}case"C":{let v=[o,u],P=[g.params[0],g.params[1]],C=[g.params[2],g.params[3]],S=[g.params[4],g.params[5]],w=fe(v,P,C,S);i=Math.min(i,w.x),s=Math.min(s,w.y),r=Math.max(r,w.x2),m=Math.max(m,w.y2),o=g.params[4],u=g.params[5];break}case"Q":{let v=[o,u],P=[g.params[0],g.params[1]],C=[g.params[2],g.params[3]],S=be(v,P,C);i=Math.min(i,S.x),s=Math.min(s,S.y),r=Math.max(r,S.x2),m=Math.max(m,S.y2),o=g.params[2],u=g.params[3];break}case"A":{let v=g.params[0],P=g.params[1],C=g.params[2],S=g.params[3],w=g.params[4],I=g.params[5],k=g.params[6],x=Qe(o,u,v,P,W(C),S===1,w===1,I,k);i=Math.min(i,(h=x==null?void 0:x.x)!=null?h:0),s=Math.min(s,(d=x==null?void 0:x.y)!=null?d:0),r=Math.max(r,(M=x==null?void 0:x.x2)!=null?M:0),m=Math.max(m,($=x==null?void 0:x.y2)!=null?$:0),o=g.params[5],u=g.params[6];break}}return{x:f(i,a),y:f(s,a),w:f(Math.abs(r-i),a),h:f(Math.abs(m-s),a),x2:f(r,a),y2:f(m,a)}};var Va=(e,a,t,n=2)=>{if(!e)return e;let i=V(e);if(i.errors.length>0)return e;let s=_(i);if(!s||s.commands.length<=0)return e;let r=s.commands[0];return r.params[0]=a,r.params[1]=t,B(s,!0,n)},z=(e,a,t,n=2)=>le(t,[a[0],a[1],1],[e[0],e[1],1],!0,n),qe=(e,a,t,n=2)=>{if(!e)return e;let i=V(e);if(i.errors.length>0)return e;let s=H(i);if(!s||s.commands.length<=0)return e;let r=W(t,n),m=F(s);for(let o of m.commands)switch(o.command){case"M":case"L":{let u=z([o.params[0],o.params[1]],a,r,n);o.params[0]=u[0],o.params[1]=u[1];break}case"C":{let u=z([o.params[0],o.params[1]],a,r,n);o.params[0]=u[0],o.params[1]=u[1];let l=z([o.params[2],o.params[3]],a,r,n);o.params[2]=l[0],o.params[3]=l[1];let b=z([o.params[4],o.params[5]],a,r,n);o.params[4]=b[0],o.params[5]=b[1];break}case"Q":{let u=z([o.params[0],o.params[1]],a,r,n);o.params[0]=u[0],o.params[1]=u[1];let l=z([o.params[2],o.params[3]],a,r,n);o.params[2]=l[0],o.params[3]=l[1];break}case"A":{let u=z([o.params[5],o.params[6]],a,r,n);o.params[5]=u[0],o.params[6]=u[1];break}}let c=_(s);return B(c,!0,n)},Ea=(e,a,t=2)=>{var u,l,b,h;let n=ne(e),i=(u=n==null?void 0:n.x)!=null?u:0,s=(l=n==null?void 0:n.y)!=null?l:0,r=(b=n==null?void 0:n.w)!=null?b:0,m=(h=n==null?void 0:n.h)!=null?h:0,c=i+r/2,o=s+m/2;return qe(e,[c,o],a,t)},Y=(e,a,t,n=2)=>he([a[0],a[1],1],[t[0],t[1],1],[e[0],e[1],1],n),Ue=(e,a,t,n=2)=>{if(!e)return e;let i=V(e);if(i.errors.length>0)return e;let s=H(i);if(!s||s.commands.length<=0)return e;let r=F(s);for(let m of r.commands)switch(m.command){case"M":case"L":{let c=Y([m.params[0],m.params[1]],a,t,n);m.params[0]=c[0],m.params[1]=c[1];break}case"C":{let c=Y([m.params[0],m.params[1]],a,t,n);m.params[0]=c[0],m.params[1]=c[1];let o=Y([m.params[2],m.params[3]],a,t,n);m.params[2]=o[0],m.params[3]=o[1];let u=Y([m.params[4],m.params[5]],a,t,n);m.params[4]=u[0],m.params[5]=u[1];break}case"Q":{let c=Y([m.params[0],m.params[1]],a,t,n);m.params[0]=c[0],m.params[1]=c[1];let o=Y([m.params[2],m.params[3]],a,t,n);m.params[2]=o[0],m.params[3]=o[1];break}case"A":{let c=Y([m.params[5],m.params[6]],a,t,n);m.params[5]=c[0],m.params[6]=c[1];break}}return B(s,!1,n)},La=(e,a,t=2)=>{var u,l,b,h;let n=ne(e),i=(u=n==null?void 0:n.x)!=null?u:0,s=(l=n==null?void 0:n.y)!=null?l:0,r=(b=n==null?void 0:n.w)!=null?b:0,m=(h=n==null?void 0:n.h)!=null?h:0,c=i+r/2,o=s+m/2;return Ue(e,a,[c,o],t)};var re=e=>e?[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["begin",e==null?void 0:e.begin],["dur",e==null?void 0:e.dur],["end",e==null?void 0:e.end],["min",e==null?void 0:e.min],["max",e==null?void 0:e.max],["restart",e==null?void 0:e.restart],["repeatCount",e==null?void 0:e.repeatCount],["repeatDur",e==null?void 0:e.repeatDur],["fill",e==null?void 0:e.fill],["calcMode",e==null?void 0:e.calcMode],["values",e==null?void 0:e.values],["keyTimes",e==null?void 0:e.keyTimes],["keySplines",e==null?void 0:e.keySplines],["from",e==null?void 0:e.from],["to",e==null?void 0:e.to],["by",e==null?void 0:e.by],["attributeName",e==null?void 0:e.attributeName],["additive",e==null?void 0:e.additive],["accumulate",e==null?void 0:e.accumulate]]:[],Da=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"animate");return A(t,[...re(e)]),t},Ga=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"animateMotion");return A(t,[["keyPoints",e==null?void 0:e.keyPoints],["path",e==null?void 0:e.path],["rotate",e==null?void 0:e.rotate],...re(e)]),t},Ba=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"animateTransform");return A(t,[["type",e==null?void 0:e.type],["attributeType",e==null?void 0:e.attributeType],...re(e)]),t},Ha=e=>{let t=((e==null?void 0:e.document)||window.document).createElementNS(T,"mpath");return A(t,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["xlink:href",e==null?void 0:e.xlinkHref]]),t};export{X as DEFAULT_DECIMAL_PLACES,T as SVG_NAMESPACE,Ae as XMLNS_NAMESPACE,oa as appendOnce,yt as beautifyPath,Da as createAnimate,Ga as createAnimateMotion,Ba as createAnimateTransform,Je as createCircle,ia as createClipPath,aa as createDefs,Oe as createEllipse,qt as createFlower,ta as createGroup,pe as createLine,Ha as createMPath,sa as createMask,G as createPath,ra as createPattern,et as createPolygon,tt as createPolyline,Ke as createRect,Jt as createRectPath,Fe as createSVG,Ze as createSVGFromString,Dt as createStar,Ge as createStar1,Be as createStar2,He as createStar3,ma as createSymbol,na as createUse,re as getCommonAnimationAttributes,R as getCommonAttributes,Xe as getRectPathD,me as getSVGAsString,It as isPathValid,kt as minifyPath,V as parsePath,Rt as pathToAbs,q as pathToRel,ua as prependOnce,Ea as rotatePath,qe as rotatePathAroundPoint,jt as saveSVG,La as scalePath,Ue as scalePathAroundPoint,A as setAttributes,Va as translatePath};
//# sourceMappingURL=mz-svg.esm-node.js.map
