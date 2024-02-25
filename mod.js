// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,v,y,g;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,_(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var C=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var P="function"==typeof Symbol?Symbol:void 0,R="function"==typeof P?P.toStringTag:"";var Z=W&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return C.call(r);n=r[R],a=R,e=null!=(i=r)&&L.call(i,a);try{r[R]=void 0}catch(e){return C.call(r)}return t=C.call(r),e?r[R]=n:delete r[R],t}:function(r){return C.call(r)},M="function"==typeof Uint32Array;var X="function"==typeof Uint32Array?Uint32Array:null;var Y,q="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,e,n;if("function"!=typeof X)return!1;try{e=new X(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(M&&n instanceof Uint32Array||"[object Uint32Array]"===Z(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")};var z=Y,B="function"==typeof Float64Array;var D="function"==typeof Float64Array?Float64Array:null;var J,K="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D([1,3.14,-3.14,NaN]),n=e,r=(B&&n instanceof Float64Array||"[object Float64Array]"===Z(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var nr,tr="function"==typeof Uint8Array?Uint8Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,256,257]),n=e,r=(rr&&n instanceof Uint8Array||"[object Uint8Array]"===Z(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Uint16Array;var or="function"==typeof Uint16Array?Uint16Array:null;var ur,cr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,65536,65537]),n=e,r=(ar&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,sr={uint16:ur,uint8:ir};(fr=new sr.uint16(1))[0]=4660;var lr=52===new sr.uint8(fr.buffer)[0],pr=!0===lr?1:0,vr=new Q(1),yr=new z(vr.buffer);function gr(r){return vr[0]=r,yr[pr]}var dr=!0===lr?1:0,hr=new Q(1),wr=new z(hr.buffer);function br(r,e){return hr[0]=r,wr[dr]=e>>>0,hr[0]}function mr(r){return r!=r}var Ar=1023,_r=Number.NEGATIVE_INFINITY;var Er=.6931471803691238,Nr=1.9082149292705877e-10,Ur=0x40000000000000,Ir=.3333333333333333,Sr=1048575,xr=2146435072,kr=1048576,Fr=1072693248;function jr(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?_r:mr(r)||r<0?NaN:(a=0,(n=gr(r))<kr&&(a-=54,n=gr(r*=Ur)),n>=xr?r+r:(a+=(n>>20)-Ar|0,a+=(c=(n&=Sr)+614244&1048576|0)>>20|0,u=(r=br(r,n|c^Fr))-1,(Sr&2+n)<3?0===u?0===a?0:a*Er+a*Nr:(o=u*u*(.5-Ir*u),0===a?u-o:a*Er-(o-a*Nr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Er-(e-(s*(e+o)+a*Nr)-u)):0===a?u-s*(u-o):a*Er-(s*(u-o)-a*Nr-u))))}var Tr=Math.floor;function Or(r){return Tr(r)===r}function Vr(r){return Or(r/2)}function $r(r){return Vr(r>0?r-1:r+1)}var Gr=Number.POSITIVE_INFINITY;function Hr(r){return r===Gr||r===_r}var Wr,Cr,Lr=Math.sqrt;function Pr(r){return Math.abs(r)}!0===lr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Rr={HIGH:Wr,LOW:Cr},Zr=new Q(1),Mr=new z(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function qr(r,e,n,t){return Zr[0]=r,e[t]=Mr[Xr],e[t+n]=Mr[Yr],e}function zr(r){return qr(r,[0,0],1,0)}H(zr,"assign",qr);var Br=!0===lr?0:1,Dr=new Q(1),Jr=new z(Dr.buffer);function Kr(r,e){return Dr[0]=r,Jr[Br]=e>>>0,Dr[0]}function Qr(r){return 0|r}var re,ee,ne=2147483647,te=2147483648;!0===lr?(re=1,ee=0):(re=0,ee=1);var ie={HIGH:re,LOW:ee},ae=new Q(1),oe=new z(ae.buffer),ue=ie.HIGH,ce=ie.LOW;function fe(r,e){return oe[ue]=r,oe[ce]=e,ae[0]}var se=[0,0];function le(r,e){var n,t;return zr.assign(r,se,1,0),n=se[0],n&=ne,t=gr(e),fe(n|=t&=te,se[1])}var pe=1072693247,ve=1e300,ye=1e-300;var ge=1048575,de=1048576,he=1072693248,we=536870912,be=524288,me=20,Ae=9007199254740992,_e=.9617966939259756,Ee=.9617967009544373,Ne=-7.028461650952758e-9,Ue=[1,1.5],Ie=[0,.5849624872207642],Se=[0,1.350039202129749e-8];var xe=1.4426950408889634,ke=1.4426950216293335,Fe=1.9259629911266175e-8;var je=1023,Te=-1023,Oe=-1074,Ve=22250738585072014e-324,$e=4503599627370496;function Ge(r,e,n,t){return mr(r)||Hr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Pr(r)<Ve?(e[t]=r*$e,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Ge(r,[0,0],1,0)}),"assign",Ge);var He=2146435072;var We=2220446049250313e-31,Ce=2148532223,Le=[0,0],Pe=[0,0];function Re(r,e){var n,t;return 0===e||0===r||mr(r)||Hr(r)?r:(Ge(r,Le,1,0),r=Le[0],e+=Le[1],e+=function(r){var e=gr(r);return(e=(e&He)>>>20)-Ar|0}(r),e<Oe?le(0,r):e>je?r<0?_r:Gr:(e<=Te?(e+=52,t=We):t=1,zr.assign(r,Pe,1,0),n=Pe[0],n&=Ce,t*fe(n|=e+Ar<<20,Pe[1])))}var Ze=.6931471805599453,Me=1048575;var Xe=1048576,Ye=1071644672,qe=20,ze=.6931471824645996,Be=-1.904654299957768e-9;var De=1072693247,Je=1105199104,Ke=1139802112,Qe=1083179008,rn=1072693248,en=1083231232,nn=3230714880,tn=31,an=1e300,on=1e-300,un=8008566259537294e-32,cn=[0,0],fn=[0,0];function sn(r,e){var n,t,i,a,o,u,c,f,s,l,p,v,y,g;if(mr(r)||mr(e))return NaN;if(zr.assign(e,cn,1,0),o=cn[0],0===cn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Lr(r);if(-.5===e)return 1/Lr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Hr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Pr(r)<1==(e===Gr)?0:Gr}(r,e)}if(zr.assign(r,cn,1,0),a=cn[0],0===cn[1]){if(0===a)return function(r,e){return e===_r?Gr:e===Gr?0:e>0?$r(e)?r:0:$r(e)?le(Gr,r):Gr}(r,e);if(1===r)return 1;if(-1===r&&$r(e))return-1;if(Hr(r))return r===_r?sn(-0,-e):e<0?0:Gr}if(r<0&&!1===Or(e))return(r-r)/(r-r);if(i=Pr(r),n=a&ne|0,t=o&ne|0,c=o>>>tn|0,u=(u=a>>>tn|0)&&$r(e)?-1:1,t>Je){if(t>Ke)return function(r,e){return(gr(r)&ne)<=pe?e<0?ve*ve:ye*ye:e>0?ve*ve:ye*ye}(r,e);if(n<De)return 1===c?u*an*an:u*on*on;if(n>rn)return 0===c?u*an*an:u*on*on;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Fe-a*xe)-((t=Kr(t=(o=ke*i)+u,0))-o),r[0]=t,r[1]=n,r}(fn,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,v,y,g,d,h,w,b,m,A,_,E;return m=0,n<de&&(m-=53,n=gr(e*=Ae)),m+=(n>>me)-Ar|0,n=(A=n&ge|0)|he|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=de),o=Kr(i=(w=(e=br(e,n))-(f=Ue[_]))*(b=1/(e+f)),0),t=(n>>1|we)+be,c=br(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Kr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Kr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0),p=Ee*l,g=(v=Ne*l+(b-(l-w))*_e+Se[_])-((y=Kr(y=p+v+(s=Ie[_])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(fn,i,n);if(v=(l=(e-(f=Kr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),zr.assign(v,cn,1,0),y=Qr(cn[0]),g=Qr(cn[1]),y>=Qe){if(0!=(y-Qe|g))return u*an*an;if(l+un>v-s)return u*an*an}else if((y&ne)>=en){if(0!=(y-nn|g))return u*on*on;if(l<=v-s)return u*on*on}return v=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&ne|0)>>qe)-Ar|0,f=0,s>Ye&&(i=br(0,((f=r+(Xe>>l+1)>>>0)&~(Me>>(l=((f&ne)>>qe)-Ar|0)))>>>0),f=(f&Me|Xe)>>qe-l>>>0,r<0&&(f=-f),e-=i),r=Qr(r=gr(c=1-((c=(a=(i=Kr(i=n+e,0))*ze)+(o=(n-(i-e))*Ze+i*Be))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<qe>>>0)>>qe<=0?Re(c,f):br(c,r)}(y,s,l),u*v}var ln=1.8378770664093456;function pn(r,e,n){var t;return mr(r)||mr(e)||mr(n)||n<0?NaN:0===n?r===e?Gr:_r:(t=sn(n,2),-.5*(2*jr(n)+ln)+-1/(2*t)*sn(r-e,2))}function vn(r){return function(){return r}}function yn(r){return mr(r)?vn(NaN):function(e){if(mr(e))return NaN;return e===r?Gr:_r}}function gn(r,e){var n,t,i;return mr(r)||mr(e)||e<0?vn(NaN):0===e?yn(r):(n=sn(e,2),t=-.5*(2*jr(e)+ln),i=-1/(2*n),function(e){return t+i*sn(e-r,2)})}H((function(r,e){return mr(r)||mr(e)?NaN:r===e?Gr:_r}),"factory",yn),H(pn,"factory",gn);export{pn as default,gn as factory};
//# sourceMappingURL=mod.js.map
