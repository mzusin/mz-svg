/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.6
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var Ae=Object.defineProperty,we=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var q=Math.pow,me=(e,t,a)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,N=(e,t)=>{for(var a in t||(t={}))Ie.call(t,a)&&me(e,a,t[a]);if(se)for(var a of se(t))ke.call(t,a)&&me(e,a,t[a]);return e},D=(e,t)=>we(e,Re(t));var A="http://www.w3.org/2000/svg",ye="http://www.w3.org/2000/xmlns/",X=2,Je=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"svg");a.setAttributeNS(ye,"xmlns",A);let n=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(n=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),w(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",n],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...y(e)]),a},oe=e=>{let{document:t,svg:a}=e,r=(t||window.document).createElement("div");return r.innerHTML=a,r.firstElementChild},ce=e=>e.outerHTML,w=(e,t)=>{if(!(!e||!t))for(let a of t){if(a.length!==2)continue;let n=a[0];if(n==null)continue;let r=a[1];r!=null&&e.setAttribute(n,r.toString())}},y=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var B=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),w(a,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a},et=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"rect");return w(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a},tt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"circle");return w(a,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a},at=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"ellipse");return w(a,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a},nt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"line");return w(a,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a},rt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"polygon");return w(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a},it=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"polyline");return w(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...y(e)]),a};var Le=Math.pow,f=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=Le(10,t);return Math.round(e*a)/a};var J=(e,t=1/0)=>{let a=e*(Math.PI/180);return f(a,t)};var Ee=(e,t,a=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(f(e[r]+t[r],a));return n},le=(e,t,a=1/0)=>Ee(e,t,a);var he=(e,t,a=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(f(e[r]*t,a));return n},be=(e,t,a=1/0)=>he(e,t,a),de=(e,t,a=1/0)=>he(e,t,a);var fe=(e,t,a=1/0)=>{let n=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r];return f(n,a)};var Ve=e=>{let t=e.length;if(t<=0)return e;let a=e[0].length;if(a<=0)return e;let n=[];for(let r=0;r<a;r++)n.push([]);for(let r=0;r<t;r++)for(let m=0;m<a;m++)n[m].push(e[r][m]);return n};var W=(e,t,a=1/0)=>{let n=[];for(let m=0;m<e.length;m++)n.push([]);let r=Ve(t);if(n.length!==r.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let m=0;m<e.length;m++){let i=e[m];for(let o=0;o<r.length;o++){let s=r[o],c=fe(i,s,a);n[m].push(c)}}return n},_=(e,t,a=1/0)=>{if(e.length<0)return[];if(e[0].length!==t.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let r=0;r<e.length;r++)n[r]=fe(e[r],t,a);return n};var K=(e,t=1/0)=>[[1,0,f(e[0],t)],[0,1,f(e[1],t)],[0,0,1]];var $e=(e,t=!0,a=1/0)=>{let n=f(Math.cos(e),a),r=f(Math.sin(e),a);return t?[[n,-r,0],[r,n,0],[0,0,1]]:[[n,r,0],[-r,n,0],[0,0,1]]},Ne=(e,t,a=!0,n=1/0)=>{let r=K(t,n),m=$e(e,a,n),i=K(de(t,-1),n),o=W(r,m);return W(o,i)},ge=(e,t,a,n=!0,r=1/0)=>{let m=Ne(e,t,n,r);return _(m,a)};var De=(e,t,a=1/0)=>{let n=K(t,a),r=Be(e),m=K(de(t,-1),a),i=W(n,r);return W(i,m)},ve=(e,t,a,n=1/0)=>{let r=De(e,t,n);return _(r,a)};var Be=e=>[[e[0],0,0],[0,e[1],0],[0,0,1]];var O=(e,t)=>(e%t+t)%t;var te=e=>!isNaN(parseFloat(e))&&isFinite(e);var ae=(e,t=1/0)=>{let a=e[0],n=e[1],r=e[2]-n;return a===0&&r===0?1/0:a===0?NaN:f(r/a,t)};var ue=(e,t=1/0)=>{let a=e[0],n=e[1],r=e[2],m=e[3];if(a===0){let u=ae([n,r,m],t);return te(u)?[u]:[]}let i=r-m,o=n*n-4*a*i;if(o<0)return[];if(o===0)return[f(-n/(2*a),t)];let s=2*a,c=Math.sqrt(o);return[f((-n+c)/s,t),f((-n-c)/s,t)]},Ge=(e,t,a,n,r=1/0)=>{let m=Math.pow(1-e,2),i=(1-e)*2*e,o=e*e;return[f(m*t[0]+i*a[0]+o*n[0],r),f(m*t[1]+i*a[1]+o*n[1],r)]};var He=(e,t,a,n,r,m=1/0)=>{let i=Math.pow(1-e,3),o=Math.pow(1-e,2)*3*e,s=(1-e)*3*e*e,c=e*e*e;return[f(i*t[0]+o*a[0]+s*n[0]+c*r[0],m),f(i*t[1]+o*a[1]+s*n[1]+c*r[1],m)]};var ze=(e,t,a,n=1/0)=>{let r=2*e[0]-4*t[0]+2*a[0],m=-2*e[0]+2*t[0],i=ae([r,m,0],n),o=2*e[1]-4*t[1]+2*a[1],s=-2*e[1]+2*t[1],c=ae([o,s,0],n),u=[];return te(i)&&u.push(i),te(c)&&u.push(c),u},Ue=(e,t,a,n,r=1/0)=>{let m=-3*e[0]+9*t[0]-9*a[0]+3*n[0],i=6*e[0]-12*t[0]+6*a[0],o=-3*e[0]+3*t[0],s=[m,i,o,0],c=-3*e[1]+9*t[1]-9*a[1]+3*n[1],u=6*e[1]-12*t[1]+6*a[1],l=-3*e[1]+3*t[1],b=[c,u,l,0],h=ue(s,r).filter(v=>v>=0&&v<=1),d=ue(b,r).filter(v=>v>=0&&v<=1);return[...h,...d].length===2?[...h,...d]:null},Me=(e,t,a,n=1/0)=>{let r=ze(e,t,a),m=1/0,i=1/0,o=-1/0,s=-1/0;for(let c of r){let u=Ge(c,e,t,a),l=u[0],b=u[1];m=Math.min(m,l),o=Math.max(o,l),i=Math.min(i,b),s=Math.max(s,b)}return m=f(Math.min(m,e[0],a[0]),n),o=f(Math.max(o,e[0],a[0]),n),i=f(Math.min(i,e[1],a[1]),n),s=f(Math.max(s,e[1],a[1]),n),{x:m,y:i,w:Math.abs(o-m),h:Math.abs(s-i),x2:o,y2:s}},xe=(e,t,a,n,r=1/0)=>{let m=Ue(e,t,a,n)||[],i=1/0,o=1/0,s=-1/0,c=-1/0;for(let u of m){let l=He(u,e,t,a,n),b=l[0],h=l[1];i=Math.min(i,b!=null?b:1/0),s=Math.max(s,b!=null?b:-1/0),o=Math.min(o,h!=null?h:1/0),c=Math.max(c,h!=null?h:-1/0)}return i=f(Math.min(i,e[0],n[0]),r),s=f(Math.max(s,e[0],n[0]),r),o=f(Math.min(o,e[1],n[1]),r),c=f(Math.max(c,e[1],n[1]),r),{x:i,y:o,w:Math.abs(s-i),h:Math.abs(c-o),x2:s,y2:c}};var Se=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),Pe=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let a=0,n=0,r=0,m=()=>a>=e.length,i=l=>{t.tokens.push({tokenType:l,line:n,col:r})},o=l=>{t.tokens.push({tokenType:"num",value:l,line:n,col:r})},s=l=>{t.errors.push({line:n,col:r,msg:l})},c=()=>m()?!1:Se.test(e.substring(a)),u=()=>{let l=e[a];if(l.charAt(0)===`
`||l.charAt(0)==="\r"){a++,r=0,n++;return}if(/\s/.test(l)||l===","){a++,r++;return}if(c()){let b=e.substring(a).match(Se);if(b&&b.length>0){let h=b[0];o(h),a+=h.length,r+=h.length;return}}switch(l){case"M":i("M");break;case"m":i("m");break;case"Z":i("Z");break;case"z":i("z");break;case"L":i("L");break;case"l":i("l");break;case"H":i("H");break;case"h":i("h");break;case"V":i("V");break;case"v":i("v");break;case"C":i("C");break;case"c":i("c");break;case"S":i("S");break;case"s":i("s");break;case"Q":i("Q");break;case"q":i("q");break;case"T":i("T");break;case"t":i("t");break;case"A":i("A");break;case"a":i("a");break;default:{s(`Unexpected character ${l}`);break}}a++,r++};for(;!m();)u();return t};var Ce=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:a,errors:n}=e,r=(u,l)=>{n.push({line:u==null?void 0:u.line,col:u==null?void 0:u.col,msg:l})};if(a[0].tokenType!=="M"&&a[0].tokenType!=="m")return r(a[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let m=0,i=()=>m>=a.length,o=u=>{var h,d;if(!u||u.toLowerCase()!=="a")return!0;let l=(((h=a[m+4])==null?void 0:h.value)||"").toString(),b=(((d=a[m+5])==null?void 0:d.value)||"").toString();return(l==="0"||l==="1")&&(b==="0"||b==="1")},s=(u,l,b)=>{var g;let h=a[m].tokenType,d=[];if(u>0)for(let M=1;M<=u;M++){if(!a[m+M]||a[m+M].tokenType!=="num"){r(a[m],`Expected number(s) after command ${h}.`),m+=u;return}d.push(Number(a[m+M].value))}if(!o(h)){r(a[m],"Arc flags must be 0 or 1."),m+=u+1;return}if(!o(h)){r(a[m],"Arc flags must be 0 or 1."),m+=u+1;return}if(t.commands.push({command:a[m].tokenType,params:d}),m+=u+1,u<=0)return;let v=[];for(;((g=a[m])==null?void 0:g.tokenType)==="num";)v.push(a[m]),m++;if(v.length%u!==0){r(v[v.length-1],"Expected a number.");return}let k=b?l.toLowerCase():l.toUpperCase();for(let M=0;M<v.length;M+=u){let P=[];for(let C=0;C<u;C++)P.push(Number(v[M+C].value));t.commands.push({command:k,params:P})}},c=()=>{let u=a[m],l=u.tokenType.toLowerCase()===u.tokenType;switch(u.tokenType){case"M":case"m":case"L":case"l":{s(2,"L",l);break}case"Z":case"z":{s(0,"L",l);break}case"H":case"h":case"V":case"v":{s(1,u.tokenType,l);break}case"C":case"c":{s(6,u.tokenType,l);break}case"S":case"s":case"Q":case"q":{s(4,u.tokenType,l);break}case"T":case"t":{s(2,u.tokenType,l);break}case"A":case"a":{s(7,u.tokenType,l);break}default:{r(a[m],"Wrong path command."),m++;break}}};for(s(2,"L",a[0].tokenType==="m");!i();)c();return t};var Y=(e,t=2)=>{if(Number.isInteger(e))return e.toString();let a=f(e,t).toString(),n=a.split("."),r=n[0],m=n[1];return r==="0"?`.${m}`:r==="-0"?`-.${m}`:a},Te=(e,t)=>{if(!e||e.length<=0)return"";let a=Y(e[0],t);for(let n=1;n<e.length;n++){let r=e[n],m=Y(r,t);r<0?a+=m:a+=` ${m}`}return a},p=(e,t=2)=>{let a="",n=null;for(let r of e.commands){if(r.command==="L"){if(r.params[0]===0){a+=`V${Y(r.params[1],t)}`,n="V";continue}if(r.params[1]===0){a+=`H${Y(r.params[0],t)}`,n="H";continue}}if(r.command==="l"){if(r.params[0]===0){a+=`v${Y(r.params[1],t)}`,n="v";continue}if(r.params[1]===0){a+=`h${Y(r.params[0],t)}`,n="h";continue}}if(r.command==="c"&&(n==null?void 0:n.toLowerCase())!=="C".toLowerCase()&&(n==null?void 0:n.toLowerCase())!=="S".toLowerCase()&&r.params[0]===0&&r.params[1]===0){let i=Te([r.params[2],r.params[3],r.params[4],r.params[5]],t);a+=`s${i}`,n="s";continue}n===r.command||n==="M"&&r.command==="L"||n==="m"&&r.command==="l"?r.params.length>0&&r.params[0]>=0&&(a+=" "):a+=r.command,a+=Te(r.params,t),n=r.command}return a.trim()};var j=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],n=t[0].params[1],r=a,m=n;t[0].command="M";for(let i=1;i<t.length;i++){switch(t[i].command){case"M":{t[i].params[0]-=a,t[i].params[1]-=n,r=t[i].params[0],m=t[i].params[1];break}case"Z":case"z":{a=r,n=m;break}case"L":case"T":{let s=t[i].params[0],c=t[i].params[1];t[i].params[0]-=a,t[i].params[1]-=n,a=s,n=c;break}case"m":case"l":{a+=t[i].params[0],n+=t[i].params[1];break}case"H":{let s=t[i].params[0];t[i].params[0]-=a,a=s;break}case"h":{a+=t[i].params[0];break}case"V":{let s=t[i].params[0];t[i].params[0]-=n,n=s;break}case"v":{n+=t[i].params[0];break}case"C":{let s=t[i].params[4],c=t[i].params[5];t[i].params[0]-=a,t[i].params[1]-=n,t[i].params[2]-=a,t[i].params[3]-=n,t[i].params[4]-=a,t[i].params[5]-=n,a=s,n=c;break}case"c":{a+=t[i].params[4],n+=t[i].params[5];break}case"S":case"Q":{let s=t[i].params[2],c=t[i].params[3];t[i].params[0]-=a,t[i].params[1]-=n,t[i].params[2]-=a,t[i].params[3]-=n,a=s,n=c;break}case"s":case"q":{a+=t[i].params[2],n+=t[i].params[3];break}case"A":{let s=t[i].params[5],c=t[i].params[6];t[i].params[5]-=a,t[i].params[6]-=n,a=s,n=c;break}case"a":{a+=t[i].params[5],n+=t[i].params[6];break}}t[i].command=t[i].command.toLowerCase()}return e},H=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],n=t[0].params[1],r=a,m=n;t[0].command="M";for(let i=1;i<t.length;i++){switch(t[i].command){case"m":{t[i].params[0]+=a,t[i].params[1]+=n,r=t[i].params[0],m=t[i].params[1];break}case"Z":case"z":{a=r,n=m;break}case"l":case"t":{let s=t[i].params[0],c=t[i].params[1];t[i].params[0]+=a,t[i].params[1]+=n,a+=s,n+=c;break}case"M":case"L":{a=t[i].params[0],n=t[i].params[1];break}case"h":{let s=t[i].params[0];t[i].params[0]+=a,a+=s;break}case"H":{a=t[i].params[0];break}case"v":{let s=t[i].params[0];t[i].params[0]+=n,n+=s;break}case"V":{n=t[i].params[0];break}case"c":{let s=t[i].params[4],c=t[i].params[5];t[i].params[0]+=a,t[i].params[1]+=n,t[i].params[2]+=a,t[i].params[3]+=n,t[i].params[4]+=a,t[i].params[5]+=n,a+=s,n+=c;break}case"C":{a=t[i].params[4],n=t[i].params[5];break}case"s":case"q":{let s=t[i].params[2],c=t[i].params[3];t[i].params[0]+=a,t[i].params[1]+=n,t[i].params[2]+=a,t[i].params[3]+=n,a+=s,n+=c;break}case"S":case"Q":{a=t[i].params[2],n=t[i].params[3];break}case"a":{let s=t[i].params[5],c=t[i].params[6];t[i].params[5]+=a,t[i].params[6]+=n,a+=s,n+=c;break}case"A":{a=t[i].params[5],n=t[i].params[6];break}}t[i].command=t[i].command.toUpperCase()}return e},G=(e,t,a=2)=>{if(!e||e.commands.length<=0)return"";let n="";if(t)return p(e,a);for(let r of e.commands)n+=r.command,r.params.length>0?n+=` ${r.params.map(m=>Number.isInteger(m)?m:f(m,a)).join(" ")} `:n+=" ";return n.trim()},Z=e=>{let{commands:t}=e;if(t.length<=0)return e;t[0].command="M";for(let a=1;a<t.length;a++)switch(t[a].command){case"H":{let r=t[a-1];if(!r)continue;t[a].command="L",t[a].params[1]=r.params[1];break}case"V":{let r=t[a-1];if(!r)continue;t[a].command="L";let m=t[a].params[0];t[a].params[0]=r.params[0],t[a].params.push(m);break}case"S":{let r=t[a-1];if(!r)continue;t[a].command="C",t[a].params.unshift(r.params[3]),t[a].params.unshift(r.params[2]);break}case"T":{let r=t[a-1];if(!r)continue;t[a].command="Q",t[a].params.unshift(r.params[1]),t[a].params.unshift(r.params[0]);break}}return e};var Lt=e=>V(e).errors.length<=0,V=e=>{let t=Pe(e);return Ce(t)},Q=(e,t=!1,a=2)=>{if(!e)return e;let n=V(e);return n.errors.length>0?e:G(j(n),!t,a)},Et=(e,t=!1,a=2)=>{if(!e)return e;let n=V(e);return n.errors.length>0?e:G(H(n),!t,a)},Vt=(e,t=2)=>{if(!e)return e;let a=V(e);return a.errors.length>0?e:p(a,t)},$t=(e,t=2)=>{if(!e)return e;let a=V(e);return a.errors.length>0?e:G(a,!1,t)};var zt=e=>{switch(e.type){case 2:return Ye(e);case 3:return Qe(e)}return Xe(e)},Xe=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,m=3,i=[],o=Math.max(m,Number(e.raysNumber)||m),s=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,c=2*Math.PI/o,u=c/2;for(let h=0,d=1.5*Math.PI;h<o;h++,d+=c)i.push([f(t+Math.cos(d)*n,s),f(a+Math.sin(d)*n,s)]),i.push([f(t+Math.cos(d+u)*r,s),f(a+Math.sin(d+u)*r,s)]);let l=`M ${i[0][0]} ${i[0][1]} `;l+=i.map(h=>`L ${h[0]} ${h[1]}`).join(" "),l+="Z",l=Q(l)||l;let b=D(N({},e),{d:l});return B(b)},Ye=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,m=3,i=[],o=Math.max(m,Number(e.raysNumber)||m),s=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,c=2*Math.PI/o,u=c/2;for(let h=0,d=1.5*Math.PI;h<=o;h++,d+=c)i.push([f(t+Math.cos(d)*r,s),f(a+Math.sin(d)*r,s)]),i.push([f(t+Math.cos(d+u)*n,s),f(a+Math.sin(d+u)*n,s)]);let l=`M ${i[0][0]} ${i[0][1]} `;for(let h=0;h<i.length;h+=2){let d=i[h],v=i[h+1];l+=`S${d[0]} ${d[1]} ${v[0]} ${v[1]}`}l+="Z",l=Q(l)||l;let b=D(N({},e),{d:l});return B(b)},Qe=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,m=3,i=[],o=Math.max(m,Number(e.raysNumber)||m),s=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,c=2*Math.PI/o,u=c/2;for(let h=0,d=1.5*Math.PI;h<=o;h++,d+=c)i.push([f(t+Math.cos(d)*r,s),f(a+Math.sin(d)*r,s)]),i.push([f(t+Math.cos(d+u)*n,s),f(a+Math.sin(d+u)*n,s)]);let l=`M ${i[0][0]} ${i[0][1]} `;for(let h=0;h<i.length;h+=2){let d=i[h],v=i[h+1];l+=`S${d[0]} ${d[1]} ${v[0]} ${v[1]} L ${v[0]} ${v[1]}`}l+="Z",l=Q(l)||l;let b=D(N({},e),{d:l});return B(b)};var jt=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,m=3,i=[],o=Math.max(m,Number(e.petalsNumber)||m),s=e.decimalPlaces===null||e.decimalPlaces===void 0?X:e.decimalPlaces,c=2*Math.PI/o;for(let b=0,h=1.5*Math.PI;b<o;b++,h+=c)i.push([f(t+Math.cos(h)*r,s),f(a+Math.sin(h)*r,s)]),i.push([f(t+Math.cos(h)*n,s),f(a+Math.sin(h)*n,s)]);let u=`M ${i[0][0]} ${i[0][1]} `;for(let b=0;b<i.length;b+=2){let h=i[O(b+1,i.length)],d=i[O(b+2,i.length)],v=i[O(b+3,i.length)];u+=`C ${h[0]} ${h[1]} ${v[0]} ${v[1]} ${d[0]} ${d[1]} `}u+="Z",u=Q(u)||u;let l=D(N({},e),{d:u});return B(l)};var qe=e=>{let{x:t,y:a,width:n,height:r,rx:m,ry:i}=e,o=m||0,s=i||0;if(o||s){let c=n-2*o,u=r-2*s;return`M${t+o} ${a}h${c}s${o} 0 ${o} ${s}v${u}s0 ${s} ${-o} ${s}h${-c}s${-o} 0 ${-o} ${-s}v${-u}s0 ${-s} ${o} ${-s}z`}return`M${t} ${a}h${n}v${r}h${-n}z`},Jt=e=>{let t=D(N({},e),{d:qe({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return B(t)};var _e="Either an SVG element or an SVG string must be provided.",Fe=e=>!e||!e.trim()?"svg":e.trim().toLowerCase(),ta=e=>new Promise((t,a)=>{if(!e.$svg&&!e.svgString){a({isError:!0,msg:_e});return}let r=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?ce(e.$svg):e.svgString}`,m=Fe(e.ext),i=`${e.outfileName||"out"}.${m}`;if(m==="svg"){let o=new Blob([r],{type:"text/plain"}),s=URL.createObjectURL(o),c=document.createElement("a");c.href=s,c.title="",c.download=i,c.click(),URL.revokeObjectURL(s),t({isError:!1})}else{let o=e.$svg||oe({svg:e.svgString||""}),s=document.createElement("canvas");s.width=o.width.baseVal.value,s.height=o.height.baseVal.value;let c=s.getContext("2d");if(!c){a({isError:!0});return}let u=new XMLSerializer().serializeToString(o),l=new Blob([u],{type:"image/svg+xml;charset=utf-8"}),b=URL.createObjectURL(l),h=new Image;h.onload=()=>{c.clearRect(0,0,s.width,s.height),c.drawImage(h,0,0),URL.revokeObjectURL(b),s.toBlob(d=>{if(!d){t({isError:!0});return}let v=URL.createObjectURL(d),k=document.createElement("a");k.href=v,k.title="",k.download=i,k.click(),URL.revokeObjectURL(v),t({isError:!1})})},h.onerror=()=>{t({isError:!0})},h.src=b}});var ra=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"g");return w(a,[...y(e)]),a},ia=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"defs");return w(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),a},sa=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"use");return w(a,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...y(e)]),a},ma=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"pattern");return w(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...y(e)]),a},oa=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"clipPath");return w(a,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...y(e)]),a},ca=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"mask");return w(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...y(e)]),a},ua=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"symbol");return w(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...y(e)]),a};var ha=(e,t)=>{let a=t.tagName.toLowerCase().trim();e.querySelector(a)||e.append(t)},ba=(e,t)=>{let a=t.tagName.toLowerCase().trim();e.querySelector(a)||e.prepend(t)};var Pa=(e,t,a,n,r,m,i,o,s)=>{let c=Math.cos(r),u=Math.sin(r),l=[[c,-u],[u,c]],b=[(e-o)/2,(t-s)/2],h=_(l,b),d=q(a,2),v=q(n,2),k=q(h[0],2),g=q(h[1],2),M=d*v-d*g-v*k,P=d*g+v*k;if(P===0)return null;let C=M/P;if(C<0)return null;let x=Math.sqrt(C),T=[a*h[1]/n,-n*h[0]/a];m===i&&(x=-x);let R=be(T,x),I=[[c,u],[-u,c]],S=_(I,R),E=[(e+o)/2,(t+s)/2];return le(S,E)},L=(e,t)=>{let a=2*Math.PI,n=t>0?1:-1;return(a+n*Math.acos(e/Math.sqrt(e*e+t*t)))%a},ne=(e,t,a,n)=>({x:e,y:a,w:Math.abs(n-a),h:Math.abs(t-e),x2:t,y2:n}),je=(e,t,a,n,r,m,i,o,s)=>{let c,u,l,b;if(a<0&&(a*=-1),n<0&&(n*=-1),a===0||n===0)return c=e<o?e:o,u=e>o?e:o,l=t<s?t:s,b=t>s?t:s,ne(c,u,l,b);let h=Math.cos(r)*(e-o)/2+Math.sin(r)*(t-s)/2,d=-Math.sin(r)*(e-o)/2+Math.cos(r)*(t-s)/2,v=a*a*n*n-a*a*d*d-n*n*h*h;v/=a*a*d*d+n*n*h*h;let k=0,g=0;if(v<0){let $=a/n;if(v=d*d+h*h/($*$),v<0)return c=e<o?e:o,u=e>o?e:o,l=t<s?t:s,b=t>s?t:s,ne(c,u,l,b);n=Math.sqrt(v),a=$*n}else{let $=(m==i?-1:1)*Math.sqrt(v);k=$*a*d/n,g=-$*n*h/a}let M=k*Math.cos(r)-g*Math.sin(r)+(e+o)/2,P=k*Math.sin(r)+g*Math.cos(r)+(t+s)/2,C,x,T,R;if(r===0||r===Math.PI)c=M-a,C=L(-a,0),u=M+a,x=L(a,0),l=P-n,T=L(0,-n),b=P+n,R=L(0,n);else if(r===Math.PI/2||r===3*Math.PI/2)c=M-n,C=L(-n,0),u=M+n,x=L(n,0),l=P-a,T=L(0,-a),b=P+a,R=L(0,a);else{C=-Math.atan(n*Math.tan(r)/a),x=Math.PI-Math.atan(n*Math.tan(r)/a),c=M+a*Math.cos(x)*Math.cos(r)-n*Math.sin(C)*Math.sin(r),u=M+a*Math.cos(x)*Math.cos(r)-n*Math.sin(x)*Math.sin(r),c>u&&([c,u]=[u,c],[C,x]=[x,C]);let $=P+a*Math.cos(C)*Math.sin(r)+n*Math.sin(C)*Math.cos(r);C=L(c-M,$-P),$=P+a*Math.cos(x)*Math.sin(r)+n*Math.sin(x)*Math.cos(r),x=L(u-M,$-P),T=Math.atan(n/(Math.tan(r)*a)),R=Math.atan(n/(Math.tan(r)*a))+Math.PI,l=P+a*Math.cos(T)*Math.sin(r)+n*Math.sin(T)*Math.cos(r),b=P+a*Math.cos(R)*Math.sin(r)+n*Math.sin(R)*Math.cos(r),l>b&&([l,b]=[b,l],[T,R]=[R,T]);let ee=M+a*Math.cos(T)*Math.cos(r)-n*Math.sin(T)*Math.sin(r);T=L(ee-M,l-P),ee=M+a*Math.cos(R)*Math.cos(r)-n*Math.sin(R)*Math.sin(r),R=L(ee-M,b-P)}let I=L(e-M,t-P),S=L(o-M,s-P);i||([I,S]=[S,I]);let E=!1;return I>S&&([I,S]=[S,I],E=!0),(!E&&(I>C||S<C)||E&&!(I>C||S<C))&&(c=Math.min(e,o)),(!E&&(I>x||S<x)||E&&!(I>x||S<x))&&(u=Math.max(e,o)),(!E&&(I>T||S<T)||E&&!(I>T||S<T))&&(l=Math.min(t,s)),(!E&&(I>R||S<R)||E&&!(I>R||S<R))&&(b=Math.max(t,s)),ne(c,u,l,b)},re=(e,t=2)=>{var h,d,v,k;if(!e||e.trim()==="")return null;let a=V(e);if(a.errors.length>0)return null;let n=H(a);if(!n||n.commands.length<=0)return null;let r=1/0,m=1/0,i=-1/0,o=-1/0,s=Z(n),c=s.commands[0].params[0],u=s.commands[0].params[1],l=c,b=u;for(let g of s.commands)switch(g.command){case"M":{r=Math.min(r,g.params[0]),m=Math.min(m,g.params[1]),i=Math.max(i,g.params[0]),o=Math.max(o,g.params[1]),l=g.params[0],b=g.params[1];break}case"Z":{c=l,u=b;break}case"L":{r=Math.min(r,g.params[0]),m=Math.min(m,g.params[1]),i=Math.max(i,g.params[0]),o=Math.max(o,g.params[1]),c=g.params[0],u=g.params[1];break}case"C":{let M=[c,u],P=[g.params[0],g.params[1]],C=[g.params[2],g.params[3]],x=[g.params[4],g.params[5]],T=xe(M,P,C,x);r=Math.min(r,T.x),m=Math.min(m,T.y),i=Math.max(i,T.x2),o=Math.max(o,T.y2),c=g.params[4],u=g.params[5];break}case"Q":{let M=[c,u],P=[g.params[0],g.params[1]],C=[g.params[2],g.params[3]],x=Me(M,P,C);r=Math.min(r,x.x),m=Math.min(m,x.y),i=Math.max(i,x.x2),o=Math.max(o,x.y2),c=g.params[2],u=g.params[3];break}case"A":{let M=g.params[0],P=g.params[1],C=g.params[2],x=g.params[3],T=g.params[4],R=g.params[5],I=g.params[6],S=je(c,u,M,P,J(C),x===1,T===1,R,I);r=Math.min(r,(h=S==null?void 0:S.x)!=null?h:0),m=Math.min(m,(d=S==null?void 0:S.y)!=null?d:0),i=Math.max(i,(v=S==null?void 0:S.x2)!=null?v:0),o=Math.max(o,(k=S==null?void 0:S.y2)!=null?k:0),c=g.params[5],u=g.params[6];break}}return{x:f(r,t),y:f(m,t),w:f(Math.abs(i-r),t),h:f(Math.abs(o-m),t),x2:f(i,t),y2:f(o,t)}};var Ea=(e,t,a,n=2)=>{if(!e)return e;let r=V(e);if(r.errors.length>0)return e;let m=j(r);if(!m||m.commands.length<=0)return e;let i=m.commands[0];return i.params[0]=t,i.params[1]=a,G(m,!0,n)},z=(e,t,a,n=2)=>ge(a,[t[0],t[1],1],[e[0],e[1],1],!0,n),Ze=(e,t,a,n=2)=>{if(!e)return e;let r=V(e);if(r.errors.length>0)return e;let m=H(r);if(!m||m.commands.length<=0)return e;let i=J(a,n),o=Z(m);for(let c of o.commands)switch(c.command){case"M":case"L":{let u=z([c.params[0],c.params[1]],t,i,n);c.params[0]=u[0],c.params[1]=u[1];break}case"C":{let u=z([c.params[0],c.params[1]],t,i,n);c.params[0]=u[0],c.params[1]=u[1];let l=z([c.params[2],c.params[3]],t,i,n);c.params[2]=l[0],c.params[3]=l[1];let b=z([c.params[4],c.params[5]],t,i,n);c.params[4]=b[0],c.params[5]=b[1];break}case"Q":{let u=z([c.params[0],c.params[1]],t,i,n);c.params[0]=u[0],c.params[1]=u[1];let l=z([c.params[2],c.params[3]],t,i,n);c.params[2]=l[0],c.params[3]=l[1];break}case"A":{let u=z([c.params[5],c.params[6]],t,i,n);c.params[5]=u[0],c.params[6]=u[1];break}}let s=j(m);return G(s,!0,n)},Va=(e,t,a=2)=>{var u,l,b,h;let n=re(e),r=(u=n==null?void 0:n.x)!=null?u:0,m=(l=n==null?void 0:n.y)!=null?l:0,i=(b=n==null?void 0:n.w)!=null?b:0,o=(h=n==null?void 0:n.h)!=null?h:0,s=r+i/2,c=m+o/2;return Ze(e,[s,c],t,a)},U=(e,t,a,n=2)=>ve([t[0],t[1],1],[a[0],a[1],1],[e[0],e[1],1],n),We=(e,t,a,n=2)=>{if(!e)return e;let r=V(e);if(r.errors.length>0)return e;let m=H(r);if(!m||m.commands.length<=0)return e;let i=Z(m);for(let o of i.commands)switch(o.command){case"M":case"L":{let s=U([o.params[0],o.params[1]],t,a,n);o.params[0]=s[0],o.params[1]=s[1];break}case"C":{let s=U([o.params[0],o.params[1]],t,a,n);o.params[0]=s[0],o.params[1]=s[1];let c=U([o.params[2],o.params[3]],t,a,n);o.params[2]=c[0],o.params[3]=c[1];let u=U([o.params[4],o.params[5]],t,a,n);o.params[4]=u[0],o.params[5]=u[1];break}case"Q":{let s=U([o.params[0],o.params[1]],t,a,n);o.params[0]=s[0],o.params[1]=s[1];let c=U([o.params[2],o.params[3]],t,a,n);o.params[2]=c[0],o.params[3]=c[1];break}case"A":{let s=U([o.params[5],o.params[6]],t,a,n);o.params[5]=s[0],o.params[6]=s[1];break}}return G(m,!1,n)},$a=(e,t,a=2)=>{var u,l,b,h;let n=re(e),r=(u=n==null?void 0:n.x)!=null?u:0,m=(l=n==null?void 0:n.y)!=null?l:0,i=(b=n==null?void 0:n.w)!=null?b:0,o=(h=n==null?void 0:n.h)!=null?h:0,s=r+i/2,c=m+o/2;return We(e,t,[s,c],a)};var ie=e=>e?[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["begin",e==null?void 0:e.begin],["dur",e==null?void 0:e.dur],["end",e==null?void 0:e.end],["min",e==null?void 0:e.min],["max",e==null?void 0:e.max],["restart",e==null?void 0:e.restart],["repeatCount",e==null?void 0:e.repeatCount],["repeatDur",e==null?void 0:e.repeatDur],["fill",e==null?void 0:e.fill],["calcMode",e==null?void 0:e.calcMode],["values",e==null?void 0:e.values],["keyTimes",e==null?void 0:e.keyTimes],["keySplines",e==null?void 0:e.keySplines],["from",e==null?void 0:e.from],["to",e==null?void 0:e.to],["by",e==null?void 0:e.by],["attributeName",e==null?void 0:e.attributeName],["additive",e==null?void 0:e.additive],["accumulate",e==null?void 0:e.accumulate]]:[],Ba=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"animate");return w(a,[...ie(e)]),a},Ga=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"animateMotion");return w(a,[["keyPoints",e==null?void 0:e.keyPoints],["path",e==null?void 0:e.path],["rotate",e==null?void 0:e.rotate],...ie(e)]),a},Ha=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"animateTransform");return w(a,[["type",e==null?void 0:e.type],["attributeType",e==null?void 0:e.attributeType],...ie(e)]),a},za=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(A,"mpath");return w(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["xlink:href",e==null?void 0:e.xlinkHref]]),a};export{X as DEFAULT_DECIMAL_PLACES,A as SVG_NAMESPACE,ye as XMLNS_NAMESPACE,ha as appendOnce,$t as beautifyPath,Ba as createAnimate,Ga as createAnimateMotion,Ha as createAnimateTransform,tt as createCircle,oa as createClipPath,ia as createDefs,at as createEllipse,jt as createFlower,ra as createGroup,nt as createLine,za as createMPath,ca as createMask,B as createPath,ma as createPattern,rt as createPolygon,it as createPolyline,et as createRect,Jt as createRectPath,Je as createSVG,oe as createSVGFromString,zt as createStar,Xe as createStar1,Ye as createStar2,Qe as createStar3,ua as createSymbol,sa as createUse,ta as download,ie as getCommonAnimationAttributes,y as getCommonAttributes,re as getPathBBox,qe as getRectPathD,Pa as getSVGArcCenter,ce as getSVGAsString,Lt as isPathValid,Vt as minifyPath,V as parsePath,Et as pathToAbs,Q as pathToRel,ba as prependOnce,Va as rotatePath,Ze as rotatePathAroundPoint,$a as scalePath,We as scalePathAroundPoint,w as setAttributes,Ea as translatePath};
//# sourceMappingURL=mz-svg.esm.js.map
