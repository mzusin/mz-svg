/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.4
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var Se=Object.defineProperty,Pe=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var Q=Math.pow,ae=(e,t,a)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))Te.call(t,a)&&ae(e,a,t[a]);if(te)for(var a of te(t))we.call(t,a)&&ae(e,a,t[a]);return e},N=(e,t)=>Pe(e,Ce(t));var A="http://www.w3.org/2000/svg",Ae="http://www.w3.org/2000/xmlns/",z=2,_e=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"svg");a.setAttributeNS(Ae,"xmlns",A);let n=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(n=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),k(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",n],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...L(e)]),a},ne=e=>{let{document:t,svg:a}=e,r=(t||window.document).createElement("div");return r.innerHTML=a,r.firstElementChild},re=e=>e.outerHTML,k=(e,t)=>{if(!(!e||!t))for(let a of t){if(a.length!==2)continue;let n=a[0];if(n==null)continue;let r=a[1];r!=null&&e.setAttribute(n,r.toString())}},L=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var B=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),k(a,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a},Oe=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"rect");return k(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a},Ze=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"circle");return k(a,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a},We=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"ellipse");return k(a,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a},Ke=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"line");return k(a,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a},Je=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"polygon");return k(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a},pe=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"polyline");return k(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...L(e)]),a};var Re=Math.pow,g=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=Re(10,t);return Math.round(e*a)/a};var F=(e,t=1/0)=>{let a=e*(Math.PI/180);return g(a,t)};var ke=(e,t,a=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(g(e[r]+t[r],a));return n},me=(e,t,a=1/0)=>ke(e,t,a);var ce=(e,t,a=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(g(e[r]*t,a));return n},ue=(e,t,a=1/0)=>ce(e,t,a),Ie=(e,t,a=1/0)=>ce(e,t,a);var le=(e,t,a=1/0)=>{let n=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r];return g(n,a)};var Le=e=>{let t=e.length;if(t<=0)return e;let a=e[0].length;if(a<=0)return e;let n=[];for(let r=0;r<a;r++)n.push([]);for(let r=0;r<t;r++)for(let i=0;i<a;i++)n[i].push(e[r][i]);return n};var se=(e,t,a=1/0)=>{let n=[];for(let i=0;i<e.length;i++)n.push([]);let r=Le(t);if(n.length!==r.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<e.length;i++){let s=e[i];for(let c=0;c<r.length;c++){let m=r[c],u=le(s,m,a);n[i].push(u)}}return n},j=(e,t,a=1/0)=>{if(e.length<0)return[];if(e[0].length!==t.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let r=0;r<e.length;r++)n[r]=le(e[r],t,a);return n};var ie=(e,t=1/0)=>[[1,0,g(e[0],t)],[0,1,g(e[1],t)],[0,0,1]];var Ee=(e,t=!0,a=1/0)=>{let n=g(Math.cos(e),a),r=g(Math.sin(e),a);return t?[[n,-r,0],[r,n,0],[0,0,1]]:[[n,r,0],[-r,n,0],[0,0,1]]},$e=(e,t,a=!0,n=1/0)=>{let r=ie(t,n),i=Ee(e,a,n),s=ie(Ie(t,-1),n),c=se(r,i);return se(c,s)},he=(e,t,a,n=!0,r=1/0)=>{let i=$e(e,t,n,r);return j(i,a)};var O=(e,t)=>(e%t+t)%t;var J=e=>!isNaN(parseFloat(e))&&isFinite(e);var p=(e,t=1/0)=>{let a=e[0],n=e[1],r=e[2]-n;return a===0&&r===0?1/0:a===0?NaN:g(r/a,t)};var oe=(e,t=1/0)=>{let a=e[0],n=e[1],r=e[2],i=e[3];if(a===0){let o=p([n,r,i],t);return J(o)?[o]:[]}let s=r-i,c=n*n-4*a*s;if(c<0)return[];if(c===0)return[g(-n/(2*a),t)];let m=2*a,u=Math.sqrt(c);return[g((-n+u)/m,t),g((-n-u)/m,t)]},Ve=(e,t,a,n,r=1/0)=>{let i=Math.pow(1-e,2),s=(1-e)*2*e,c=e*e;return[g(i*t[0]+s*a[0]+c*n[0],r),g(i*t[1]+s*a[1]+c*n[1],r)]};var ye=(e,t,a,n,r,i=1/0)=>{let s=Math.pow(1-e,3),c=Math.pow(1-e,2)*3*e,m=(1-e)*3*e*e,u=e*e*e;return[g(s*t[0]+c*a[0]+m*n[0]+u*r[0],i),g(s*t[1]+c*a[1]+m*n[1]+u*r[1],i)]};var De=(e,t,a,n=1/0)=>{let r=2*e[0]-4*t[0]+2*a[0],i=-2*e[0]+2*t[0],s=p([r,i,0],n),c=2*e[1]-4*t[1]+2*a[1],m=-2*e[1]+2*t[1],u=p([c,m,0],n),o=[];return J(s)&&o.push(s),J(u)&&o.push(u),o},Ne=(e,t,a,n,r=1/0)=>{let i=-3*e[0]+9*t[0]-9*a[0]+3*n[0],s=6*e[0]-12*t[0]+6*a[0],c=-3*e[0]+3*t[0],m=[i,s,c,0],u=-3*e[1]+9*t[1]-9*a[1]+3*n[1],o=6*e[1]-12*t[1]+6*a[1],l=-3*e[1]+3*t[1],b=[u,o,l,0],h=oe(m,r).filter(v=>v>=0&&v<=1),f=oe(b,r).filter(v=>v>=0&&v<=1);return[...h,...f].length===2?[...h,...f]:null},be=(e,t,a,n=1/0)=>{let r=De(e,t,a),i=1/0,s=1/0,c=-1/0,m=-1/0;for(let u of r){let o=Ve(u,e,t,a),l=o[0],b=o[1];i=Math.min(i,l),c=Math.max(c,l),s=Math.min(s,b),m=Math.max(m,b)}return i=g(Math.min(i,e[0],a[0]),n),c=g(Math.max(c,e[0],a[0]),n),s=g(Math.min(s,e[1],a[1]),n),m=g(Math.max(m,e[1],a[1]),n),{x:i,y:s,w:Math.abs(c-i),h:Math.abs(m-s),x2:c,y2:m}},fe=(e,t,a,n,r=1/0)=>{let i=Ne(e,t,a,n)||[],s=1/0,c=1/0,m=-1/0,u=-1/0;for(let o of i){let l=ye(o,e,t,a,n),b=l[0],h=l[1];s=Math.min(s,b!=null?b:1/0),m=Math.max(m,b!=null?b:-1/0),c=Math.min(c,h!=null?h:1/0),u=Math.max(u,h!=null?h:-1/0)}return s=g(Math.min(s,e[0],n[0]),r),m=g(Math.max(m,e[0],n[0]),r),c=g(Math.min(c,e[1],n[1]),r),u=g(Math.max(u,e[1],n[1]),r),{x:s,y:c,w:Math.abs(m-s),h:Math.abs(u-c),x2:m,y2:u}};var ge=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),de=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let a=0,n=0,r=0,i=()=>a>=e.length,s=l=>{t.tokens.push({tokenType:l,line:n,col:r})},c=l=>{t.tokens.push({tokenType:"num",value:l,line:n,col:r})},m=l=>{t.errors.push({line:n,col:r,msg:l})},u=()=>i()?!1:ge.test(e.substring(a)),o=()=>{let l=e[a];if(l.charAt(0)===`
`||l.charAt(0)==="\r"){a++,r=0,n++;return}if(/\s/.test(l)||l===","){a++,r++;return}if(u()){let b=e.substring(a).match(ge);if(b&&b.length>0){let h=b[0];c(h),a+=h.length,r+=h.length;return}}switch(l){case"M":s("M");break;case"m":s("m");break;case"Z":s("Z");break;case"z":s("z");break;case"L":s("L");break;case"l":s("l");break;case"H":s("H");break;case"h":s("h");break;case"V":s("V");break;case"v":s("v");break;case"C":s("C");break;case"c":s("c");break;case"S":s("S");break;case"s":s("s");break;case"Q":s("Q");break;case"q":s("q");break;case"T":s("T");break;case"t":s("t");break;case"A":s("A");break;case"a":s("a");break;default:{m(`Unexpected character ${l}`);break}}a++,r++};for(;!i();)o();return t};var ve=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:a,errors:n}=e,r=(o,l)=>{n.push({line:o==null?void 0:o.line,col:o==null?void 0:o.col,msg:l})};if(a[0].tokenType!=="M"&&a[0].tokenType!=="m")return r(a[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let i=0,s=()=>i>=a.length,c=o=>{var h,f;if(!o||o.toLowerCase()!=="a")return!0;let l=(((h=a[i+4])==null?void 0:h.value)||"").toString(),b=(((f=a[i+5])==null?void 0:f.value)||"").toString();return(l==="0"||l==="1")&&(b==="0"||b==="1")},m=(o,l,b)=>{var d;let h=a[i].tokenType,f=[];if(o>0)for(let M=1;M<=o;M++){if(!a[i+M]||a[i+M].tokenType!=="num"){r(a[i],`Expected number(s) after command ${h}.`),i+=o;return}f.push(Number(a[i+M].value))}if(!c(h)){r(a[i],"Arc flags must be 0 or 1."),i+=o+1;return}if(!c(h)){r(a[i],"Arc flags must be 0 or 1."),i+=o+1;return}if(t.commands.push({command:a[i].tokenType,params:f}),i+=o+1,o<=0)return;let v=[];for(;((d=a[i])==null?void 0:d.tokenType)==="num";)v.push(a[i]),i++;if(v.length%o!==0){r(v[v.length-1],"Expected a number.");return}let I=b?l.toLowerCase():l.toUpperCase();for(let M=0;M<v.length;M+=o){let P=[];for(let C=0;C<o;C++)P.push(Number(v[M+C].value));t.commands.push({command:I,params:P})}},u=()=>{let o=a[i],l=o.tokenType.toLowerCase()===o.tokenType;switch(o.tokenType){case"M":case"m":case"L":case"l":{m(2,"L",l);break}case"Z":case"z":{m(0,"L",l);break}case"H":case"h":case"V":case"v":{m(1,o.tokenType,l);break}case"C":case"c":{m(6,o.tokenType,l);break}case"S":case"s":case"Q":case"q":{m(4,o.tokenType,l);break}case"T":case"t":{m(2,o.tokenType,l);break}case"A":case"a":{m(7,o.tokenType,l);break}default:{r(a[i],"Wrong path command."),i++;break}}};for(m(2,"L",a[0].tokenType==="m");!s();)u();return t};var U=(e,t=2)=>{if(Number.isInteger(e))return e.toString();let a=g(e,t).toString(),n=a.split("."),r=n[0],i=n[1];return r==="0"?`.${i}`:r==="-0"?`-.${i}`:a},Me=(e,t)=>{if(!e||e.length<=0)return"";let a=U(e[0],t);for(let n=1;n<e.length;n++){let r=e[n],i=U(r,t);r<0?a+=i:a+=` ${i}`}return a},Z=(e,t=2)=>{let a="",n=null;for(let r of e.commands){if(r.command==="L"){if(r.params[0]===0){a+=`V${U(r.params[1],t)}`,n="V";continue}if(r.params[1]===0){a+=`H${U(r.params[0],t)}`,n="H";continue}}if(r.command==="l"){if(r.params[0]===0){a+=`v${U(r.params[1],t)}`,n="v";continue}if(r.params[1]===0){a+=`h${U(r.params[0],t)}`,n="h";continue}}if(r.command==="c"&&(n==null?void 0:n.toLowerCase())!=="C".toLowerCase()&&(n==null?void 0:n.toLowerCase())!=="S".toLowerCase()&&r.params[0]===0&&r.params[1]===0){let s=Me([r.params[2],r.params[3],r.params[4],r.params[5]],t);a+=`s${s}`,n="s";continue}n===r.command||n==="M"&&r.command==="L"||n==="m"&&r.command==="l"?r.params.length>0&&r.params[0]>=0&&(a+=" "):a+=r.command,a+=Me(r.params,t),n=r.command}return a.trim()};var _=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],n=t[0].params[1],r=a,i=n;t[0].command="M";for(let s=1;s<t.length;s++){switch(t[s].command){case"M":{t[s].params[0]-=a,t[s].params[1]-=n,r=t[s].params[0],i=t[s].params[1];break}case"Z":case"z":{a=r,n=i;break}case"L":case"T":{let m=t[s].params[0],u=t[s].params[1];t[s].params[0]-=a,t[s].params[1]-=n,a=m,n=u;break}case"m":case"l":{a+=t[s].params[0],n+=t[s].params[1];break}case"H":{let m=t[s].params[0];t[s].params[0]-=a,a=m;break}case"h":{a+=t[s].params[0];break}case"V":{let m=t[s].params[0];t[s].params[0]-=n,n=m;break}case"v":{n+=t[s].params[0];break}case"C":{let m=t[s].params[4],u=t[s].params[5];t[s].params[0]-=a,t[s].params[1]-=n,t[s].params[2]-=a,t[s].params[3]-=n,t[s].params[4]-=a,t[s].params[5]-=n,a=m,n=u;break}case"c":{a+=t[s].params[4],n+=t[s].params[5];break}case"S":case"Q":{let m=t[s].params[2],u=t[s].params[3];t[s].params[0]-=a,t[s].params[1]-=n,t[s].params[2]-=a,t[s].params[3]-=n,a=m,n=u;break}case"s":case"q":{a+=t[s].params[2],n+=t[s].params[3];break}case"A":{let m=t[s].params[5],u=t[s].params[6];t[s].params[5]-=a,t[s].params[6]-=n,a=m,n=u;break}case"a":{a+=t[s].params[5],n+=t[s].params[6];break}}t[s].command=t[s].command.toLowerCase()}return e},X=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],n=t[0].params[1],r=a,i=n;t[0].command="M";for(let s=1;s<t.length;s++){switch(t[s].command){case"m":{t[s].params[0]+=a,t[s].params[1]+=n,r=t[s].params[0],i=t[s].params[1];break}case"Z":case"z":{a=r,n=i;break}case"l":case"t":{let m=t[s].params[0],u=t[s].params[1];t[s].params[0]+=a,t[s].params[1]+=n,a+=m,n+=u;break}case"M":case"L":{a=t[s].params[0],n=t[s].params[1];break}case"h":{let m=t[s].params[0];t[s].params[0]+=a,a+=m;break}case"H":{a=t[s].params[0];break}case"v":{let m=t[s].params[0];t[s].params[0]+=n,n+=m;break}case"V":{n=t[s].params[0];break}case"c":{let m=t[s].params[4],u=t[s].params[5];t[s].params[0]+=a,t[s].params[1]+=n,t[s].params[2]+=a,t[s].params[3]+=n,t[s].params[4]+=a,t[s].params[5]+=n,a+=m,n+=u;break}case"C":{a=t[s].params[4],n=t[s].params[5];break}case"s":case"q":{let m=t[s].params[2],u=t[s].params[3];t[s].params[0]+=a,t[s].params[1]+=n,t[s].params[2]+=a,t[s].params[3]+=n,a+=m,n+=u;break}case"S":case"Q":{a=t[s].params[2],n=t[s].params[3];break}case"a":{let m=t[s].params[5],u=t[s].params[6];t[s].params[5]+=a,t[s].params[6]+=n,a+=m,n+=u;break}case"A":{a=t[s].params[5],n=t[s].params[6];break}}t[s].command=t[s].command.toUpperCase()}return e},G=(e,t,a=2)=>{if(!e||e.commands.length<=0)return"";let n="";if(t)return Z(e,a);for(let r of e.commands)n+=r.command,r.params.length>0?n+=` ${r.params.map(i=>Number.isInteger(i)?i:g(i,a)).join(" ")} `:n+=" ";return n.trim()},W=e=>{let{commands:t}=e;if(t.length<=0)return e;t[0].command="M";for(let a=1;a<t.length;a++)switch(t[a].command){case"H":{let r=t[a-1];if(!r)continue;t[a].command="L",t[a].params[1]=r.params[1];break}case"V":{let r=t[a-1];if(!r)continue;t[a].command="L";let i=t[a].params[0];t[a].params[0]=r.params[0],t[a].params.push(i);break}case"S":{let r=t[a-1];if(!r)continue;t[a].command="C",t[a].params.unshift(r.params[3]),t[a].params.unshift(r.params[2]);break}case"T":{let r=t[a-1];if(!r)continue;t[a].command="Q",t[a].params.unshift(r.params[1]),t[a].params.unshift(r.params[0]);break}}return e};var wt=e=>y(e).errors.length<=0,y=e=>{let t=de(e);return ve(t)},Y=(e,t=!1,a=2)=>{if(!e)return e;let n=y(e);return n.errors.length>0?e:G(_(n),!t,a)},At=(e,t=!1,a=2)=>{if(!e)return e;let n=y(e);return n.errors.length>0?e:G(X(n),!t,a)},Rt=(e,t=2)=>{if(!e)return e;let a=y(e);return a.errors.length>0?e:Z(a,t)},kt=(e,t=2)=>{if(!e)return e;let a=y(e);return a.errors.length>0?e:G(a,!1,t)};var yt=e=>{switch(e.type){case 2:return Ge(e);case 3:return He(e)}return Be(e)},Be=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.raysNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?z:e.decimalPlaces,u=2*Math.PI/c,o=u/2;for(let h=0,f=1.5*Math.PI;h<c;h++,f+=u)s.push([g(t+Math.cos(f)*n,m),g(a+Math.sin(f)*n,m)]),s.push([g(t+Math.cos(f+o)*r,m),g(a+Math.sin(f+o)*r,m)]);let l=`M ${s[0][0]} ${s[0][1]} `;l+=s.map(h=>`L ${h[0]} ${h[1]}`).join(" "),l+="Z",l=Y(l)||l;let b=N(D({},e),{d:l});return B(b)},Ge=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.raysNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?z:e.decimalPlaces,u=2*Math.PI/c,o=u/2;for(let h=0,f=1.5*Math.PI;h<=c;h++,f+=u)s.push([g(t+Math.cos(f)*r,m),g(a+Math.sin(f)*r,m)]),s.push([g(t+Math.cos(f+o)*n,m),g(a+Math.sin(f+o)*n,m)]);let l=`M ${s[0][0]} ${s[0][1]} `;for(let h=0;h<s.length;h+=2){let f=s[h],v=s[h+1];l+=`S${f[0]} ${f[1]} ${v[0]} ${v[1]}`}l+="Z",l=Y(l)||l;let b=N(D({},e),{d:l});return B(b)},He=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.raysNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?z:e.decimalPlaces,u=2*Math.PI/c,o=u/2;for(let h=0,f=1.5*Math.PI;h<=c;h++,f+=u)s.push([g(t+Math.cos(f)*r,m),g(a+Math.sin(f)*r,m)]),s.push([g(t+Math.cos(f+o)*n,m),g(a+Math.sin(f+o)*n,m)]);let l=`M ${s[0][0]} ${s[0][1]} `;for(let h=0;h<s.length;h+=2){let f=s[h],v=s[h+1];l+=`S${f[0]} ${f[1]} ${v[0]} ${v[1]} L ${v[0]} ${v[1]}`}l+="Z",l=Y(l)||l;let b=N(D({},e),{d:l});return B(b)};var Xt=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.petalsNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?z:e.decimalPlaces,u=2*Math.PI/c;for(let b=0,h=1.5*Math.PI;b<c;b++,h+=u)s.push([g(t+Math.cos(h)*r,m),g(a+Math.sin(h)*r,m)]),s.push([g(t+Math.cos(h)*n,m),g(a+Math.sin(h)*n,m)]);let o=`M ${s[0][0]} ${s[0][1]} `;for(let b=0;b<s.length;b+=2){let h=s[O(b+1,s.length)],f=s[O(b+2,s.length)],v=s[O(b+3,s.length)];o+=`C ${h[0]} ${h[1]} ${v[0]} ${v[1]} ${f[0]} ${f[1]} `}o+="Z",o=Y(o)||o;let l=N(D({},e),{d:o});return B(l)};var ze=e=>{let{x:t,y:a,width:n,height:r,rx:i,ry:s}=e,c=i||0,m=s||0;if(c||m){let u=n-2*c,o=r-2*m;return`M${t+c} ${a}h${u}s${c} 0 ${c} ${m}v${o}s0 ${m} ${-c} ${m}h${-u}s${-c} 0 ${-c} ${-m}v${-o}s0 ${-m} ${c} ${-m}z`}return`M${t} ${a}h${n}v${r}h${-n}z`},_t=e=>{let t=N(D({},e),{d:ze({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return B(t)};var Ue="Either an SVG element or an SVG string must be provided.",Xe=e=>!e||!e.trim()?"svg":e.trim().toLowerCase(),Zt=e=>new Promise((t,a)=>{if(!e.$svg&&!e.svgString){a({isError:!0,msg:Ue});return}let r=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?re(e.$svg):e.svgString}`,i=Xe(e.ext),s=`${e.outfileName||"out"}.${i}`;if(i==="svg"){let c=new Blob([r],{type:"text/plain"}),m=URL.createObjectURL(c),u=document.createElement("a");u.href=m,u.title="",u.download=s,u.click(),URL.revokeObjectURL(m),t({isError:!1})}else{let c=e.$svg||ne({svg:e.svgString||""}),m=document.createElement("canvas");m.width=c.width.baseVal.value,m.height=c.height.baseVal.value;let u=m.getContext("2d");if(!u){a({isError:!0});return}let o=new XMLSerializer().serializeToString(c),l=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),b=URL.createObjectURL(l),h=new Image;h.onload=()=>{u.clearRect(0,0,m.width,m.height),u.drawImage(h,0,0),URL.revokeObjectURL(b),m.toBlob(f=>{if(!f){t({isError:!0});return}let v=URL.createObjectURL(f),I=document.createElement("a");I.href=v,I.title="",I.download=s,I.click(),URL.revokeObjectURL(v),t({isError:!1})})},h.onerror=()=>{t({isError:!0})},h.src=b}});var Jt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"g");return k(a,[...L(e)]),a},pt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"defs");return k(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),a},ea=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"use");return k(a,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...L(e)]),a},ta=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"pattern");return k(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...L(e)]),a},aa=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"clipPath");return k(a,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...L(e)]),a},na=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"mask");return k(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...L(e)]),a},ra=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"symbol");return k(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...L(e)]),a};var ia=(e,t)=>{let a=t.tagName.toLowerCase().trim();e.querySelector(a)||e.append(t)},oa=(e,t)=>{let a=t.tagName.toLowerCase().trim();e.querySelector(a)||e.prepend(t)};var ga=(e,t,a,n,r,i,s,c,m)=>{let u=Math.cos(r),o=Math.sin(r),l=[[u,-o],[o,u]],b=[(e-c)/2,(t-m)/2],h=j(l,b),f=Q(a,2),v=Q(n,2),I=Q(h[0],2),d=Q(h[1],2),M=f*v-f*d-v*I,P=f*d+v*I;if(P===0)return null;let C=M/P;if(C<0)return null;let x=Math.sqrt(C),T=[a*h[1]/n,-n*h[0]/a];i===s&&(x=-x);let w=ue(T,x),R=[[u,o],[-o,u]],S=j(R,w),$=[(e+c)/2,(t+m)/2];return me(S,$)},E=(e,t)=>{let a=2*Math.PI,n=t>0?1:-1;return(a+n*Math.acos(e/Math.sqrt(e*e+t*t)))%a},ee=(e,t,a,n)=>({x:e,y:a,w:Math.abs(n-a),h:Math.abs(t-e),x2:t,y2:n}),Ye=(e,t,a,n,r,i,s,c,m)=>{let u,o,l,b;if(a<0&&(a*=-1),n<0&&(n*=-1),a===0||n===0)return u=e<c?e:c,o=e>c?e:c,l=t<m?t:m,b=t>m?t:m,ee(u,o,l,b);let h=Math.cos(r)*(e-c)/2+Math.sin(r)*(t-m)/2,f=-Math.sin(r)*(e-c)/2+Math.cos(r)*(t-m)/2,v=a*a*n*n-a*a*f*f-n*n*h*h;v/=a*a*f*f+n*n*h*h;let I=0,d=0;if(v<0){let V=a/n;if(v=f*f+h*h/(V*V),v<0)return u=e<c?e:c,o=e>c?e:c,l=t<m?t:m,b=t>m?t:m,ee(u,o,l,b);n=Math.sqrt(v),a=V*n}else{let V=(i==s?-1:1)*Math.sqrt(v);I=V*a*f/n,d=-V*n*h/a}let M=I*Math.cos(r)-d*Math.sin(r)+(e+c)/2,P=I*Math.sin(r)+d*Math.cos(r)+(t+m)/2,C,x,T,w;if(r===0||r===Math.PI)u=M-a,C=E(-a,0),o=M+a,x=E(a,0),l=P-n,T=E(0,-n),b=P+n,w=E(0,n);else if(r===Math.PI/2||r===3*Math.PI/2)u=M-n,C=E(-n,0),o=M+n,x=E(n,0),l=P-a,T=E(0,-a),b=P+a,w=E(0,a);else{C=-Math.atan(n*Math.tan(r)/a),x=Math.PI-Math.atan(n*Math.tan(r)/a),u=M+a*Math.cos(x)*Math.cos(r)-n*Math.sin(C)*Math.sin(r),o=M+a*Math.cos(x)*Math.cos(r)-n*Math.sin(x)*Math.sin(r),u>o&&([u,o]=[o,u],[C,x]=[x,C]);let V=P+a*Math.cos(C)*Math.sin(r)+n*Math.sin(C)*Math.cos(r);C=E(u-M,V-P),V=P+a*Math.cos(x)*Math.sin(r)+n*Math.sin(x)*Math.cos(r),x=E(o-M,V-P),T=Math.atan(n/(Math.tan(r)*a)),w=Math.atan(n/(Math.tan(r)*a))+Math.PI,l=P+a*Math.cos(T)*Math.sin(r)+n*Math.sin(T)*Math.cos(r),b=P+a*Math.cos(w)*Math.sin(r)+n*Math.sin(w)*Math.cos(r),l>b&&([l,b]=[b,l],[T,w]=[w,T]);let K=M+a*Math.cos(T)*Math.cos(r)-n*Math.sin(T)*Math.sin(r);T=E(K-M,l-P),K=M+a*Math.cos(w)*Math.cos(r)-n*Math.sin(w)*Math.sin(r),w=E(K-M,b-P)}let R=E(e-M,t-P),S=E(c-M,m-P);s||([R,S]=[S,R]);let $=!1;return R>S&&([R,S]=[S,R],$=!0),(!$&&(R>C||S<C)||$&&!(R>C||S<C))&&(u=Math.min(e,c)),(!$&&(R>x||S<x)||$&&!(R>x||S<x))&&(o=Math.max(e,c)),(!$&&(R>T||S<T)||$&&!(R>T||S<T))&&(l=Math.min(t,m)),(!$&&(R>w||S<w)||$&&!(R>w||S<w))&&(b=Math.max(t,m)),ee(u,o,l,b)},xe=(e,t=2)=>{var h,f,v,I;if(!e||e.trim()==="")return null;let a=y(e);if(a.errors.length>0)return null;let n=X(a);if(!n||n.commands.length<=0)return null;let r=1/0,i=1/0,s=-1/0,c=-1/0,m=W(n),u=m.commands[0].params[0],o=m.commands[0].params[1],l=u,b=o;for(let d of m.commands)switch(d.command){case"M":{r=Math.min(r,d.params[0]),i=Math.min(i,d.params[1]),s=Math.max(s,d.params[0]),c=Math.max(c,d.params[1]),l=d.params[0],b=d.params[1];break}case"Z":{u=l,o=b;break}case"L":{r=Math.min(r,d.params[0]),i=Math.min(i,d.params[1]),s=Math.max(s,d.params[0]),c=Math.max(c,d.params[1]),u=d.params[0],o=d.params[1];break}case"C":{let M=[u,o],P=[d.params[0],d.params[1]],C=[d.params[2],d.params[3]],x=[d.params[4],d.params[5]],T=fe(M,P,C,x);r=Math.min(r,T.x),i=Math.min(i,T.y),s=Math.max(s,T.x2),c=Math.max(c,T.y2),u=d.params[4],o=d.params[5];break}case"Q":{let M=[u,o],P=[d.params[0],d.params[1]],C=[d.params[2],d.params[3]],x=be(M,P,C);r=Math.min(r,x.x),i=Math.min(i,x.y),s=Math.max(s,x.x2),c=Math.max(c,x.y2),u=d.params[2],o=d.params[3];break}case"A":{let M=d.params[0],P=d.params[1],C=d.params[2],x=d.params[3],T=d.params[4],w=d.params[5],R=d.params[6],S=Ye(u,o,M,P,F(C),x===1,T===1,w,R);r=Math.min(r,(h=S==null?void 0:S.x)!=null?h:0),i=Math.min(i,(f=S==null?void 0:S.y)!=null?f:0),s=Math.max(s,(v=S==null?void 0:S.x2)!=null?v:0),c=Math.max(c,(I=S==null?void 0:S.y2)!=null?I:0),u=d.params[5],o=d.params[6];break}}return{x:g(r,t),y:g(i,t),w:g(Math.abs(s-r),t),h:g(Math.abs(c-i),t),x2:g(s,t),y2:g(c,t)}};var wa=(e,t,a,n=2)=>{if(!e)return e;let r=y(e);if(r.errors.length>0)return e;let i=_(r);if(!i||i.commands.length<=0)return e;let s=i.commands[0];return s.params[0]=t,s.params[1]=a,G(i,!0,n)},H=(e,t,a,n,r,i=2)=>he(r,[a,n,1],[e,t,1],!0,i),Qe=(e,t,a,n,r=2)=>{if(!e)return e;let i=y(e);if(i.errors.length>0)return e;let s=X(i);if(!s||s.commands.length<=0)return e;let c=F(n,r),m=W(s);for(let o of m.commands)switch(o.command){case"M":case"L":{let l=H(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];break}case"C":{let l=H(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];let b=H(o.params[2],o.params[3],t,a,c,r);o.params[2]=b[0],o.params[3]=b[1];let h=H(o.params[4],o.params[5],t,a,c,r);o.params[4]=h[0],o.params[5]=h[1];break}case"Q":{let l=H(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];let b=H(o.params[2],o.params[3],t,a,c,r);o.params[2]=b[0],o.params[3]=b[1];break}case"A":{let l=H(o.params[5],o.params[6],t,a,c,r);o.params[5]=l[0],o.params[6]=l[1];break}}let u=_(s);return G(u,!0,r)},Aa=(e,t,a=2)=>{var o,l,b,h;let n=xe(e),r=(o=n==null?void 0:n.x)!=null?o:0,i=(l=n==null?void 0:n.y)!=null?l:0,s=(b=n==null?void 0:n.w)!=null?b:0,c=(h=n==null?void 0:n.h)!=null?h:0,m=r+s/2,u=i+c/2;return Qe(e,m,u,t,a)};export{z as DEFAULT_DECIMAL_PLACES,A as SVG_NAMESPACE,Ae as XMLNS_NAMESPACE,ia as appendOnce,kt as beautifyPath,Ze as createCircle,aa as createClipPath,pt as createDefs,We as createEllipse,Xt as createFlower,Jt as createGroup,Ke as createLine,na as createMask,B as createPath,ta as createPattern,Je as createPolygon,pe as createPolyline,Oe as createRect,_t as createRectPath,_e as createSVG,ne as createSVGFromString,yt as createStar,Be as createStar1,Ge as createStar2,He as createStar3,ra as createSymbol,ea as createUse,Zt as download,L as getCommonAttributes,xe as getPathBBox,ze as getRectPathD,ga as getSVGArcCenter,re as getSVGAsString,wt as isPathValid,Rt as minifyPath,y as parsePath,At as pathToAbs,Y as pathToRel,oa as prependOnce,Aa as rotatePath,Qe as rotatePathAroundDot,k as setAttributes,wa as translatePath};
//# sourceMappingURL=mz-svg.esm.js.map
