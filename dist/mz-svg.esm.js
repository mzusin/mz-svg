/* 
mzSVG - the TypeScript-based library for manipulating and animating SVG.
Version: 1.0.4
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-svg
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var ve=Object.defineProperty,xe=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var X=Math.pow,K=(e,t,a)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,L=(e,t)=>{for(var a in t||(t={}))Se.call(t,a)&&K(e,a,t[a]);if(W)for(var a of W(t))Pe.call(t,a)&&K(e,a,t[a]);return e},E=(e,t)=>xe(e,Me(t));var w="http://www.w3.org/2000/svg",Ce="http://www.w3.org/2000/xmlns/",G=2,qe=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"svg");a.setAttributeNS(Ce,"xmlns",w);let n=e==null?void 0:e.viewBox;return e!=null&&e.autoViewBox&&(n=`${(e==null?void 0:e.x)||0} ${(e==null?void 0:e.y)||0} ${(e==null?void 0:e.width)||0} ${(e==null?void 0:e.height)||0}`),A(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["viewBox",n],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],...R(e)]),a},J=e=>{let{document:t,svg:a}=e,r=(t||window.document).createElement("div");return r.innerHTML=a,r.firstElementChild},p=e=>e.outerHTML,A=(e,t)=>{if(!(!e||!t))for(let a of t){if(a.length!==2)continue;let n=a[0];if(n==null)continue;let r=a[1];r!=null&&e.setAttribute(n,r.toString())}},R=e=>e?[["id",e.id],["class",e.classes],["style",e.style],["stroke",e.stroke],["stroke-width",e.strokeWidth],["stroke-opacity",e.strokeOpacity],["stroke-linecap",e.strokeLinecap],["stroke-linejoin",e.strokeLinejoin],["stroke-dasharray",e.strokeDasharray],["stroke-dashoffset",e.strokeDashoffset],["stroke-miterlimit",e.strokeMiterlimit],["fill",e.fill],["fill-opacity",e.fillOpacity],["fill-rule",e.fillRule],["filter",e.filter],["mask",e.mask],["transform",e.transform],["vector-effect",e.vectorEffect],["shape-rendering",e.shapeRendering],["clip-path",e.clipPath],["clip-rule",e.clipRule],["opacity",e.opacity],["visibility",e.visibility]]:[];var $=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"path");return e!=null&&e.d&&(e.d=e==null?void 0:e.d.replace(/\s\s+/g," ")),A(a,[["d",e==null?void 0:e.d],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a},je=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"rect");return A(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a},Oe=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"circle");return A(a,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["r",e==null?void 0:e.r],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a},Ze=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"ellipse");return A(a,[["cx",e==null?void 0:e.cx],["cy",e==null?void 0:e.cy],["rx",e==null?void 0:e.rx],["ry",e==null?void 0:e.ry],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a},We=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"line");return A(a,[["x1",e==null?void 0:e.x1],["x2",e==null?void 0:e.x2],["y1",e==null?void 0:e.y1],["y2",e==null?void 0:e.y2],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a},Ke=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"polygon");return A(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a},Je=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"polyline");return A(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes],["style",e==null?void 0:e.style],["points",e==null?void 0:e.points],["pathLength",e==null?void 0:e.pathLength],...R(e)]),a};var Te=Math.pow,d=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=Te(10,t);return Math.round(e*a)/a};var q=(e,t=1/0)=>{let a=e*(Math.PI/180);return d(a,t)};var we=(e,t,a=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(d(e[r]+t[r],a));return n},ne=(e,t,a=1/0)=>we(e,t,a);var re=(e,t,a=1/0)=>{let n=[];for(let r=0;r<e.length;r++)n.push(d(e[r]*t,a));return n},se=(e,t,a=1/0)=>re(e,t,a),Ae=(e,t,a=1/0)=>re(e,t,a);var ie=(e,t,a=1/0)=>{let n=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r];return d(n,a)};var Re=e=>{let t=e.length;if(t<=0)return e;let a=e[0].length;if(a<=0)return e;let n=[];for(let r=0;r<a;r++)n.push([]);for(let r=0;r<t;r++)for(let i=0;i<a;i++)n[i].push(e[r][i]);return n};var ee=(e,t,a=1/0)=>{let n=[];for(let i=0;i<e.length;i++)n.push([]);let r=Re(t);if(n.length!==r.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<e.length;i++){let s=e[i];for(let c=0;c<r.length;c++){let m=r[c],u=ie(s,m,a);n[i].push(u)}}return n},_=(e,t,a=1/0)=>{if(e.length<0)return[];if(e[0].length!==t.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let r=0;r<e.length;r++)n[r]=ie(e[r],t,a);return n};var te=(e,t=1/0)=>[[1,0,d(e[0],t)],[0,1,d(e[1],t)],[0,0,1]];var ye=(e,t=!0,a=1/0)=>{let n=d(Math.cos(e),a),r=d(Math.sin(e),a);return t?[[n,-r,0],[r,n,0],[0,0,1]]:[[n,r,0],[-r,n,0],[0,0,1]]},ke=(e,t,a=!0,n=1/0)=>{let r=te(t,n),i=ye(e,a,n),s=te(Ae(t,-1),n),c=ee(r,i);return ee(c,s)},oe=(e,t,a,n=!0,r=1/0)=>{let i=ke(e,t,n,r);return _(i,a)};var F=(e,t)=>(e%t+t)%t;var Ie=e=>!isNaN(parseFloat(e))&&isFinite(e);var Z=(e,t=1/0)=>{let a=e[0],n=e[1],r=e[2]-n;return a===0&&r===0?1/0:a===0?NaN:d(r/a,t)};var ae=(e,t=1/0)=>{let a=e[0],n=e[1],r=e[2],i=e[3];if(a===0){let o=Z([n,r,i],t);return Ie(o)?[o]:[]}let s=r-i,c=n*n-4*a*s;if(c<0)return[];if(c===0)return[d(-n/(2*a),t)];let m=2*a,u=Math.sqrt(c);return[d((-n+u)/m,t),d((-n-u)/m,t)]},Le=(e,t,a,n,r=1/0)=>{let i=Math.pow(1-e,2),s=(1-e)*2*e,c=e*e;return[d(i*t[0]+s*a[0]+c*n[0],r),d(i*t[1]+s*a[1]+c*n[1],r)]};var Ee=(e,t,a,n,r,i=1/0)=>{let s=Math.pow(1-e,3),c=Math.pow(1-e,2)*3*e,m=(1-e)*3*e*e,u=e*e*e;return[d(s*t[0]+c*a[0]+m*n[0]+u*r[0],i),d(s*t[1]+c*a[1]+m*n[1]+u*r[1],i)]};var $e=(e,t,a,n=1/0)=>{let r=2*e[0]-4*t[0]+2*a[0],i=-2*e[0]+2*t[0],s=[r,i,0],c=2*e[1]-4*t[1]+2*a[1],m=-2*e[1]+2*t[1],u=[c,m,0];return[Z(s,n),Z(u,n)]},Ve=(e,t,a,n,r=1/0)=>{let i=-3*e[0]+9*t[0]-9*a[0]+3*n[0],s=6*e[0]-12*t[0]+6*a[0],c=-3*e[0]+3*t[0],m=[i,s,c,0],u=-3*e[1]+9*t[1]-9*a[1]+3*n[1],o=6*e[1]-12*t[1]+6*a[1],l=-3*e[1]+3*t[1],g=[u,o,l,0],h=ae(m,r).filter(v=>v>=0&&v<=1),b=ae(g,r).filter(v=>v>=0&&v<=1);return[...h,...b].length===2?[...h,...b]:null},me=(e,t,a,n=1/0)=>{let r=$e(e,t,a),i=1/0,s=1/0,c=-1/0,m=-1/0;for(let u of r){let o=Le(u,e,t,a),l=o[0],g=o[1];i=Math.min(i,l),c=Math.max(c,l),s=Math.min(s,g),m=Math.max(m,g)}return i=d(Math.min(i,e[0],a[0]),n),c=d(Math.max(c,e[0],a[0]),n),s=d(Math.min(s,e[1],a[1]),n),m=d(Math.max(m,e[1],a[1]),n),{x:i,y:s,w:Math.abs(c-i),h:Math.abs(m-s),x2:c,y2:m}},ce=(e,t,a,n,r=1/0)=>{let i=Ve(e,t,a,n)||[],s=1/0,c=1/0,m=-1/0,u=-1/0;for(let o of i){let l=Ee(o,e,t,a,n),g=l[0],h=l[1];s=Math.min(s,g!=null?g:1/0),m=Math.max(m,g!=null?g:-1/0),c=Math.min(c,h!=null?h:1/0),u=Math.max(u,h!=null?h:-1/0)}return s=d(Math.min(s,e[0],n[0]),r),m=d(Math.max(m,e[0],n[0]),r),c=d(Math.min(c,e[1],n[1]),r),u=d(Math.max(u,e[1],n[1]),r),{x:s,y:c,w:Math.abs(m-s),h:Math.abs(u-c),x2:m,y2:u}};var ue=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),le=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let a=0,n=0,r=0,i=()=>a>=e.length,s=l=>{t.tokens.push({tokenType:l,line:n,col:r})},c=l=>{t.tokens.push({tokenType:"num",value:l,line:n,col:r})},m=l=>{t.errors.push({line:n,col:r,msg:l})},u=()=>i()?!1:ue.test(e.substring(a)),o=()=>{let l=e[a];if(l.charAt(0)===`
`||l.charAt(0)==="\r"){a++,r=0,n++;return}if(/\s/.test(l)||l===","){a++,r++;return}if(u()){let g=e.substring(a).match(ue);if(g&&g.length>0){let h=g[0];c(h),a+=h.length,r+=h.length;return}}switch(l){case"M":s("M");break;case"m":s("m");break;case"Z":s("Z");break;case"z":s("z");break;case"L":s("L");break;case"l":s("l");break;case"H":s("H");break;case"h":s("h");break;case"V":s("V");break;case"v":s("v");break;case"C":s("C");break;case"c":s("c");break;case"S":s("S");break;case"s":s("s");break;case"Q":s("Q");break;case"q":s("q");break;case"T":s("T");break;case"t":s("t");break;case"A":s("A");break;case"a":s("a");break;default:{m(`Unexpected character ${l}`);break}}a++,r++};for(;!i();)o();return t};var he=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:a,errors:n}=e,r=(o,l)=>{n.push({line:o==null?void 0:o.line,col:o==null?void 0:o.col,msg:l})};if(a[0].tokenType!=="M"&&a[0].tokenType!=="m")return r(a[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let i=0,s=()=>i>=a.length,c=o=>{var h,b;if(!o||o.toLowerCase()!=="a")return!0;let l=(((h=a[i+4])==null?void 0:h.value)||"").toString(),g=(((b=a[i+5])==null?void 0:b.value)||"").toString();return(l==="0"||l==="1")&&(g==="0"||g==="1")},m=(o,l,g)=>{var f;let h=a[i].tokenType,b=[];if(o>0)for(let x=1;x<=o;x++){if(!a[i+x]||a[i+x].tokenType!=="num"){r(a[i],`Expected number(s) after command ${h}.`),i+=o;return}b.push(Number(a[i+x].value))}if(!c(h)){r(a[i],"Arc flags must be 0 or 1."),i+=o+1;return}if(!c(h)){r(a[i],"Arc flags must be 0 or 1."),i+=o+1;return}if(t.commands.push({command:a[i].tokenType,params:b}),i+=o+1,o<=0)return;let v=[];for(;((f=a[i])==null?void 0:f.tokenType)==="num";)v.push(a[i]),i++;if(v.length%o!==0){r(v[v.length-1],"Expected a number.");return}let M=g?l.toLowerCase():l.toUpperCase();for(let x=0;x<v.length;x+=o){let S=[];for(let P=0;P<o;P++)S.push(Number(v[x+P].value));t.commands.push({command:M,params:S})}},u=()=>{let o=a[i],l=o.tokenType.toLowerCase()===o.tokenType;switch(o.tokenType){case"M":case"m":case"L":case"l":{m(2,"L",l);break}case"Z":case"z":{m(0,"L",l);break}case"H":case"h":case"V":case"v":{m(1,o.tokenType,l);break}case"C":case"c":{m(6,o.tokenType,l);break}case"S":case"s":case"Q":case"q":{m(4,o.tokenType,l);break}case"T":case"t":{m(2,o.tokenType,l);break}case"A":case"a":{m(7,o.tokenType,l);break}default:{r(a[i],"Wrong path command."),i++;break}}};for(m(2,"L",a[0].tokenType==="m");!s();)u();return t};var H=(e,t=2)=>{if(Number.isInteger(e))return e.toString();let a=d(e,t).toString(),n=a.split("."),r=n[0],i=n[1];return r==="0"?`.${i}`:r==="-0"?`-.${i}`:a},ge=(e,t)=>{if(!e||e.length<=0)return"";let a=H(e[0],t);for(let n=1;n<e.length;n++){let r=e[n],i=H(r,t);r<0?a+=i:a+=` ${i}`}return a},j=(e,t=2)=>{let a="",n=null;for(let r of e.commands){if(r.command==="L"){if(r.params[0]===0){a+=`V${H(r.params[1],t)}`,n="V";continue}if(r.params[1]===0){a+=`H${H(r.params[0],t)}`,n="H";continue}}if(r.command==="l"){if(r.params[0]===0){a+=`v${H(r.params[1],t)}`,n="v";continue}if(r.params[1]===0){a+=`h${H(r.params[0],t)}`,n="h";continue}}if(r.command==="c"&&(n==null?void 0:n.toLowerCase())!=="C".toLowerCase()&&(n==null?void 0:n.toLowerCase())!=="S".toLowerCase()&&r.params[0]===0&&r.params[1]===0){let s=ge([r.params[2],r.params[3],r.params[4],r.params[5]],t);a+=`s${s}`,n="s";continue}n===r.command||n==="M"&&r.command==="L"||n==="m"&&r.command==="l"?r.params.length>0&&r.params[0]>=0&&(a+=" "):a+=r.command,a+=ge(r.params,t),n=r.command}return a.trim()};var Q=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],n=t[0].params[1],r=a,i=n;t[0].command="M";for(let s=1;s<t.length;s++){switch(t[s].command){case"M":{t[s].params[0]-=a,t[s].params[1]-=n,r=t[s].params[0],i=t[s].params[1];break}case"Z":case"z":{a=r,n=i;break}case"L":case"T":{let m=t[s].params[0],u=t[s].params[1];t[s].params[0]-=a,t[s].params[1]-=n,a=m,n=u;break}case"m":case"l":{a+=t[s].params[0],n+=t[s].params[1];break}case"H":{let m=t[s].params[0];t[s].params[0]-=a,a=m;break}case"h":{a+=t[s].params[0];break}case"V":{let m=t[s].params[0];t[s].params[0]-=n,n=m;break}case"v":{n+=t[s].params[0];break}case"C":{let m=t[s].params[4],u=t[s].params[5];t[s].params[0]-=a,t[s].params[1]-=n,t[s].params[2]-=a,t[s].params[3]-=n,t[s].params[4]-=a,t[s].params[5]-=n,a=m,n=u;break}case"c":{a+=t[s].params[4],n+=t[s].params[5];break}case"S":case"Q":{let m=t[s].params[2],u=t[s].params[3];t[s].params[0]-=a,t[s].params[1]-=n,t[s].params[2]-=a,t[s].params[3]-=n,a=m,n=u;break}case"s":case"q":{a+=t[s].params[2],n+=t[s].params[3];break}case"A":{let m=t[s].params[5],u=t[s].params[6];t[s].params[5]-=a,t[s].params[6]-=n,a=m,n=u;break}case"a":{a+=t[s].params[5],n+=t[s].params[6];break}}t[s].command=t[s].command.toLowerCase()}return e},z=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],n=t[0].params[1],r=a,i=n;t[0].command="M";for(let s=1;s<t.length;s++){switch(t[s].command){case"m":{t[s].params[0]+=a,t[s].params[1]+=n,r=t[s].params[0],i=t[s].params[1];break}case"Z":case"z":{a=r,n=i;break}case"l":case"t":{let m=t[s].params[0],u=t[s].params[1];t[s].params[0]+=a,t[s].params[1]+=n,a+=m,n+=u;break}case"M":case"L":{a=t[s].params[0],n=t[s].params[1];break}case"h":{let m=t[s].params[0];t[s].params[0]+=a,a+=m;break}case"H":{a=t[s].params[0];break}case"v":{let m=t[s].params[0];t[s].params[0]+=n,n+=m;break}case"V":{n=t[s].params[0];break}case"c":{let m=t[s].params[4],u=t[s].params[5];t[s].params[0]+=a,t[s].params[1]+=n,t[s].params[2]+=a,t[s].params[3]+=n,t[s].params[4]+=a,t[s].params[5]+=n,a+=m,n+=u;break}case"C":{a=t[s].params[4],n=t[s].params[5];break}case"s":case"q":{let m=t[s].params[2],u=t[s].params[3];t[s].params[0]+=a,t[s].params[1]+=n,t[s].params[2]+=a,t[s].params[3]+=n,a+=m,n+=u;break}case"S":case"Q":{a=t[s].params[2],n=t[s].params[3];break}case"a":{let m=t[s].params[5],u=t[s].params[6];t[s].params[5]+=a,t[s].params[6]+=n,a+=m,n+=u;break}case"A":{a=t[s].params[5],n=t[s].params[6];break}}t[s].command=t[s].command.toUpperCase()}return e},B=(e,t,a=2)=>{if(!e||e.commands.length<=0)return"";let n="";if(t)return j(e,a);for(let r of e.commands)n+=r.command,r.params.length>0?n+=` ${r.params.map(i=>Number.isInteger(i)?i:d(i,a)).join(" ")} `:n+=" ";return n.trim()},O=e=>{let{commands:t}=e;if(t.length<=0)return e;t[0].command="M";for(let a=1;a<t.length;a++)switch(t[a].command){case"H":{let r=t[a-1];if(!r)continue;t[a].command="L",t[a].params[1]=r.params[1];break}case"V":{let r=t[a-1];if(!r)continue;t[a].command="L";let i=t[a].params[0];t[a].params[0]=r.params[0],t[a].params.push(i);break}case"S":{let r=t[a-1];if(!r)continue;t[a].command="C",t[a].params.unshift(r.params[3]),t[a].params.unshift(r.params[2]);break}case"T":{let r=t[a-1];if(!r)continue;t[a].command="Q",t[a].params.unshift(r.params[1]),t[a].params.unshift(r.params[0]);break}}return e};var Tt=e=>I(e).errors.length<=0,I=e=>{let t=le(e);return he(t)},U=(e,t=!1,a=2)=>{if(!e)return e;let n=I(e);return n.errors.length>0?e:B(Q(n),!t,a)},wt=(e,t=!1,a=2)=>{if(!e)return e;let n=I(e);return n.errors.length>0?e:B(z(n),!t,a)},At=(e,t=2)=>{if(!e)return e;let a=I(e);return a.errors.length>0?e:j(a,t)},Rt=(e,t=2)=>{if(!e)return e;let a=I(e);return a.errors.length>0?e:B(a,!1,t)};var $t=e=>{switch(e.type){case 2:return De(e);case 3:return Be(e)}return Ne(e)},Ne=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.raysNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?G:e.decimalPlaces,u=2*Math.PI/c,o=u/2;for(let h=0,b=1.5*Math.PI;h<c;h++,b+=u)s.push([d(t+Math.cos(b)*n,m),d(a+Math.sin(b)*n,m)]),s.push([d(t+Math.cos(b+o)*r,m),d(a+Math.sin(b+o)*r,m)]);let l=`M ${s[0][0]} ${s[0][1]} `;l+=s.map(h=>`L ${h[0]} ${h[1]}`).join(" "),l+="Z",l=U(l)||l;let g=E(L({},e),{d:l});return $(g)},De=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.raysNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?G:e.decimalPlaces,u=2*Math.PI/c,o=u/2;for(let h=0,b=1.5*Math.PI;h<=c;h++,b+=u)s.push([d(t+Math.cos(b)*r,m),d(a+Math.sin(b)*r,m)]),s.push([d(t+Math.cos(b+o)*n,m),d(a+Math.sin(b+o)*n,m)]);let l=`M ${s[0][0]} ${s[0][1]} `;for(let h=0;h<s.length;h+=2){let b=s[h],v=s[h+1];l+=`S${b[0]} ${b[1]} ${v[0]} ${v[1]}`}l+="Z",l=U(l)||l;let g=E(L({},e),{d:l});return $(g)},Be=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.raysNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?G:e.decimalPlaces,u=2*Math.PI/c,o=u/2;for(let h=0,b=1.5*Math.PI;h<=c;h++,b+=u)s.push([d(t+Math.cos(b)*r,m),d(a+Math.sin(b)*r,m)]),s.push([d(t+Math.cos(b+o)*n,m),d(a+Math.sin(b+o)*n,m)]);let l=`M ${s[0][0]} ${s[0][1]} `;for(let h=0;h<s.length;h+=2){let b=s[h],v=s[h+1];l+=`S${b[0]} ${b[1]} ${v[0]} ${v[1]} L ${v[0]} ${v[1]}`}l+="Z",l=U(l)||l;let g=E(L({},e),{d:l});return $(g)};var Ut=e=>{let{centerX:t,centerY:a,outerRadius:n,innerRadius:r}=e,i=3,s=[],c=Math.max(i,Number(e.petalsNumber)||i),m=e.decimalPlaces===null||e.decimalPlaces===void 0?G:e.decimalPlaces,u=2*Math.PI/c;for(let g=0,h=1.5*Math.PI;g<c;g++,h+=u)s.push([d(t+Math.cos(h)*r,m),d(a+Math.sin(h)*r,m)]),s.push([d(t+Math.cos(h)*n,m),d(a+Math.sin(h)*n,m)]);let o=`M ${s[0][0]} ${s[0][1]} `;for(let g=0;g<s.length;g+=2){let h=s[F(g+1,s.length)],b=s[F(g+2,s.length)],v=s[F(g+3,s.length)];o+=`C ${h[0]} ${h[1]} ${v[0]} ${v[1]} ${b[0]} ${b[1]} `}o+="Z",o=U(o)||o;let l=E(L({},e),{d:o});return $(l)};var Ge=e=>{let{x:t,y:a,width:n,height:r,rx:i,ry:s}=e,c=i||0,m=s||0;if(c||m){let u=n-2*c,o=r-2*m;return`M${t+c} ${a}h${u}s${c} 0 ${c} ${m}v${o}s0 ${m} ${-c} ${m}h${-u}s${-c} 0 ${-c} ${-m}v${-o}s0 ${-m} ${c} ${-m}z`}return`M${t} ${a}h${n}v${r}h${-n}z`},qt=e=>{let t=E(L({},e),{d:Ge({x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx,ry:e.ry})});return $(t)};var He="Either an SVG element or an SVG string must be provided.",ze=e=>!e||!e.trim()?"svg":e.trim().toLowerCase(),Ot=e=>new Promise((t,a)=>{if(!e.$svg&&!e.svgString){a({isError:!0,msg:He});return}let r=`<?xml version="1.0" encoding="UTF-8"?>${e.$svg?p(e.$svg):e.svgString}`,i=ze(e.ext),s=`${e.outfileName||"out"}.${i}`;if(i==="svg"){let c=new Blob([r],{type:"text/plain"}),m=URL.createObjectURL(c),u=document.createElement("a");u.href=m,u.title="",u.download=s,u.click(),URL.revokeObjectURL(m),t({isError:!1})}else{let c=e.$svg||J({svg:e.svgString||""}),m=document.createElement("canvas");m.width=c.width.baseVal.value,m.height=c.height.baseVal.value;let u=m.getContext("2d");if(!u){a({isError:!0});return}let o=new XMLSerializer().serializeToString(c),l=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),g=URL.createObjectURL(l),h=new Image;h.onload=()=>{u.clearRect(0,0,m.width,m.height),u.drawImage(h,0,0),URL.revokeObjectURL(g),m.toBlob(b=>{if(!b){t({isError:!0});return}let v=URL.createObjectURL(b),M=document.createElement("a");M.href=v,M.title="",M.download=s,M.click(),URL.revokeObjectURL(v),t({isError:!1})})},h.onerror=()=>{t({isError:!0})},h.src=g}});var Kt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"g");return A(a,[...R(e)]),a},Jt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"defs");return A(a,[["id",e==null?void 0:e.id],["class",e==null?void 0:e.classes]]),a},pt=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"use");return A(a,[["href",e==null?void 0:e.href],["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],...R(e)]),a},ea=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"pattern");return A(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["href",e==null?void 0:e.href],["patternContentUnits",e==null?void 0:e.patternContentUnits],["patternTransform",e==null?void 0:e.patternTransform],["patternUnits",e==null?void 0:e.patternUnits],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["viewBox",e==null?void 0:e.viewBox],...R(e)]),a},ta=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"clipPath");return A(a,[["clipPathUnits",e==null?void 0:e.clipPathUnits],...R(e)]),a},aa=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"mask");return A(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["maskContentUnits",e==null?void 0:e.maskContentUnits],["maskUnits",e==null?void 0:e.maskUnits],...R(e)]),a},na=e=>{let a=((e==null?void 0:e.document)||window.document).createElementNS(w,"symbol");return A(a,[["x",e==null?void 0:e.x],["y",e==null?void 0:e.y],["width",e==null?void 0:e.width],["height",e==null?void 0:e.height],["preserveAspectRatio",e==null?void 0:e.preserveAspectRatio],["refX",e==null?void 0:e.refX],["refY",e==null?void 0:e.refY],["viewBox",e==null?void 0:e.viewBox],...R(e)]),a};var sa=(e,t)=>{let a=t.tagName.toLowerCase().trim();e.querySelector(a)||e.append(t)},ia=(e,t)=>{let a=t.tagName.toLowerCase().trim();e.querySelector(a)||e.prepend(t)};var Ue=(e,t,a,n,r,i,s,c,m)=>{let u=Math.cos(r),o=Math.sin(r),l=[[u,-o],[o,u]],g=[(e-c)/2,(t-m)/2],h=_(l,g),b=X(a,2),v=X(n,2),M=X(h[0],2),f=X(h[1],2),x=b*v-b*f-v*M,S=b*f+v*M;if(S===0)return null;let P=x/S;if(P<0)return null;let C=Math.sqrt(P),T=[a*h[1]/n,-n*h[0]/a];i===s&&(C=-C);let N=se(T,C),D=[[u,o],[-o,u]],y=_(D,N),de=[(e+c)/2,(t+m)/2];return ne(y,de)},k=(e,t)=>{let a=2*Math.PI,n=t>0?1:-1;return(a+n*Math.acos(e/Math.sqrt(e*e+t*t)))%a},be=(e,t,a,n)=>({x:e,y:a,w:Math.abs(n-a),h:Math.abs(t-e),x2:t,y2:n}),Xe=(e,t,a,n,r,i,s,c,m)=>{let u,o,l,g,h=Ue(e,t,a,n,r,i?1:0,s?1:0,c,m);if(!h)return be(0,0,0,0);let b=h[0],v=h[1],M,f,x,S;if(r===0||r===Math.PI)u=b-a,M=k(-a,0),o=b+a,f=k(a,0),l=v-n,x=k(0,-n),g=v+n,S=k(0,n);else if(r===Math.PI/2||r===3*Math.PI/2)u=b-n,M=k(-n,0),o=b+n,f=k(n,0),l=v-a,x=k(0,-a),g=v+a,S=k(0,a);else{M=-Math.atan(n*Math.tan(r)/a),f=Math.PI-Math.atan(n*Math.tan(r)/a),u=b+a*Math.cos(f)*Math.cos(r)-n*Math.sin(M)*Math.sin(r),o=b+a*Math.cos(f)*Math.cos(r)-n*Math.sin(f)*Math.sin(r),u>o&&([u,o]=[o,u],[M,f]=[f,M]);let N=v+a*Math.cos(M)*Math.sin(r)+n*Math.sin(M)*Math.cos(r);M=k(u-b,N-v),N=v+a*Math.cos(f)*Math.sin(r)+n*Math.sin(f)*Math.cos(r),f=k(o-b,N-v),x=Math.atan(n/(Math.tan(r)*a)),S=Math.atan(n/(Math.tan(r)*a))+Math.PI,l=v+a*Math.cos(x)*Math.sin(r)+n*Math.sin(x)*Math.cos(r),g=v+a*Math.cos(S)*Math.sin(r)+n*Math.sin(S)*Math.cos(r),l>g&&([l,g]=[g,l],[x,S]=[S,x]);let D=b+a*Math.cos(x)*Math.cos(r)-n*Math.sin(x)*Math.sin(r);x=k(D-b,l-v),D=b+a*Math.cos(S)*Math.cos(r)-n*Math.sin(S)*Math.sin(r),S=k(D-b,g-v)}let P=k(e-b,t-v),C=k(c-b,m-v);s||([P,C]=[C,P]);let T=!1;return P>C&&([P,C]=[C,P],T=!0),(!T&&(P>M||C<M)||T&&!(P>M||C<M))&&(u=Math.min(e,c)),(!T&&(P>f||C<f)||T&&!(P>f||C<f))&&(o=Math.max(e,c)),(!T&&(P>x||C<x)||T&&!(P>x||C<x))&&(l=Math.min(t,m)),(!T&&(P>S||C<S)||T&&!(P>S||C<S))&&(g=Math.max(t,m)),be(u,o,l,g)},fe=(e,t=2)=>{var h,b,v,M;if(!e||e.trim()==="")return null;let a=I(e);if(a.errors.length>0)return null;let n=z(a);if(!n||n.commands.length<=0)return null;let r=1/0,i=1/0,s=-1/0,c=-1/0,m=O(n),u=m.commands[0].params[0],o=m.commands[0].params[1],l=u,g=o;for(let f of m.commands)switch(f.command){case"M":{r=Math.min(r,f.params[0]),i=Math.min(i,f.params[1]),s=Math.max(s,f.params[0]),c=Math.max(c,f.params[1]),l=f.params[0],g=f.params[1];break}case"Z":{u=l,o=g;break}case"L":{r=Math.min(r,f.params[0]),i=Math.min(i,f.params[1]),s=Math.max(s,f.params[0]),c=Math.max(c,f.params[1]),u=f.params[0],o=f.params[1];break}case"C":{let x=[u,o],S=[f.params[0],f.params[1]],P=[f.params[2],f.params[3]],C=[f.params[4],f.params[5]],T=ce(x,S,P,C);r=T.x,i=T.y,s=T.x2,c=T.y2,u=f.params[4],o=f.params[5];break}case"Q":{let x=[u,o],S=[f.params[0],f.params[1]],P=[f.params[2],f.params[3]],C=me(x,S,P);r=C.x,i=C.y,s=C.x2,c=C.y2,u=f.params[2],o=f.params[3];break}case"A":{let x=f.params[0],S=f.params[1],P=f.params[2],C=f.params[3],T=f.params[4],N=f.params[5],D=f.params[6],y=Xe(u,o,x,S,q(P),C===1,T===1,N,D);r=(h=y==null?void 0:y.x)!=null?h:0,i=(b=y==null?void 0:y.y)!=null?b:0,s=(v=y==null?void 0:y.x2)!=null?v:0,c=(M=y==null?void 0:y.y2)!=null?M:0,u=f.params[5],o=f.params[6];break}}return{x:d(r,t),y:d(i,t),w:d(Math.abs(s-r),t),h:d(Math.abs(c-i),t),x2:d(s,t),y2:d(c,t)}};var Ca=(e,t,a,n=2)=>{if(!e)return e;let r=I(e);if(r.errors.length>0)return e;let i=Q(r);if(!i||i.commands.length<=0)return e;let s=i.commands[0];return s.params[0]=t,s.params[1]=a,B(i,!0,n)},V=(e,t,a,n,r,i=2)=>oe(r,[a,n,1],[e,t,1],!0,i),Ye=(e,t,a,n,r=2)=>{if(!e)return e;let i=I(e);if(i.errors.length>0)return e;let s=z(i);if(!s||s.commands.length<=0)return e;let c=q(n,r),m=O(s);for(let o of m.commands)switch(o.command){case"M":case"L":{let l=V(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];break}case"C":{let l=V(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];let g=V(o.params[2],o.params[3],t,a,c,r);o.params[2]=g[0],o.params[3]=g[1];let h=V(o.params[4],o.params[5],t,a,c,r);o.params[4]=h[0],o.params[5]=h[1];break}case"Q":{let l=V(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];let g=V(o.params[2],o.params[3],t,a,c,r);o.params[2]=g[0],o.params[3]=g[1];break}case"A":{let l=V(o.params[0],o.params[1],t,a,c,r);o.params[0]=l[0],o.params[1]=l[1];let g=V(o.params[5],o.params[6],t,a,c,r);o.params[5]=g[0],o.params[6]=g[1];break}}let u=Q(s);return B(u,!0,r)},Ta=(e,t,a=2)=>{var o,l,g,h;let n=fe(e),r=(o=n==null?void 0:n.x)!=null?o:0,i=(l=n==null?void 0:n.y)!=null?l:0,s=(g=n==null?void 0:n.w)!=null?g:0,c=(h=n==null?void 0:n.h)!=null?h:0,m=r+s/2,u=i+c/2;return Ye(e,m,u,t,a)};export{G as DEFAULT_DECIMAL_PLACES,w as SVG_NAMESPACE,Ce as XMLNS_NAMESPACE,sa as appendOnce,Rt as beautifyPath,Oe as createCircle,ta as createClipPath,Jt as createDefs,Ze as createEllipse,Ut as createFlower,Kt as createGroup,We as createLine,aa as createMask,$ as createPath,ea as createPattern,Ke as createPolygon,Je as createPolyline,je as createRect,qt as createRectPath,qe as createSVG,J as createSVGFromString,$t as createStar,Ne as createStar1,De as createStar2,Be as createStar3,na as createSymbol,pt as createUse,Ot as download,R as getCommonAttributes,fe as getPathBBox,Ge as getRectPathD,Ue as getSVGArcCenter,p as getSVGAsString,Tt as isPathValid,At as minifyPath,I as parsePath,wt as pathToAbs,U as pathToRel,ia as prependOnce,Ta as rotatePath,Ye as rotatePathAroundDot,A as setAttributes,Ca as translatePath};
//# sourceMappingURL=mz-svg.esm.js.map
