// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P,R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[Y],a=Y,e=null!=(i=r)&&M.call(i,a);try{r[Y]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return Z.call(r)},z="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var r,e,n;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(z&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=P,Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,e,n;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),n=e,r=(Q&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr,tr=J,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,or="function"==typeof Uint8Array?Uint8Array:void 0;nr=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),n=e,r=(ir&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,cr=nr,fr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,lr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(fr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr={uint16:ur,uint8:cr};(pr=new yr.uint16(1))[0]=4660;var gr=52===new yr.uint8(pr.buffer)[0],dr=!0===gr?1:0,hr=new tr(1),vr=new K(hr.buffer);function wr(r){return hr[0]=r,vr[dr]}var br=!0===gr?1:0,mr=new tr(1),Ar=new K(mr.buffer);function _r(r,e){return mr[0]=r,Ar[br]=e>>>0,mr[0]}function Er(r){return r!=r}var Nr=1023,Ur=Number.NEGATIVE_INFINITY,Ir=.6931471803691238,Sr=1.9082149292705877e-10,xr=1048575;function kr(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?Ur:Er(r)||r<0?NaN:(a=0,(n=wr(r))<1048576&&(a-=54,n=wr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Nr|0,a+=(c=614244+(n&=xr)&1048576|0)>>20|0,u=(r=_r(r,n|1072693248^c))-1,(xr&2+n)<3?0===u?0===a?0:a*Ir+a*Sr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ir-(o-a*Sr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ir-(e-(s*(e+o)+a*Sr)-u)):0===a?u-s*(u-o):a*Ir-(s*(u-o)-a*Sr-u))))}var Fr=Math.floor;function jr(r){return Fr(r)===r}function Tr(r){return jr(r/2)}function Or(r){return Tr(r>0?r-1:r+1)}var Vr=Number.POSITIVE_INFINITY;function $r(r){return r===Vr||r===Ur}var Gr,Hr,Wr=Math.sqrt;function Cr(r){return Math.abs(r)}!0===gr?(Gr=1,Hr=0):(Gr=0,Hr=1);var Lr={HIGH:Gr,LOW:Hr},Pr=new tr(1),Rr=new K(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e,n,t){return Pr[0]=r,e[t]=Rr[Zr],e[t+n]=Rr[Mr],e}function Yr(r){return Xr(r,[0,0],1,0)}L(Yr,"assign",Xr);var qr=!0===gr?0:1,zr=new tr(1),Br=new K(zr.buffer);function Dr(r,e){return zr[0]=r,Br[qr]=e>>>0,zr[0]}function Jr(r){return 0|r}var Kr,Qr,re=2147483647;!0===gr?(Kr=1,Qr=0):(Kr=0,Qr=1);var ee={HIGH:Kr,LOW:Qr},ne=new tr(1),te=new K(ne.buffer),ie=ee.HIGH,ae=ee.LOW;function oe(r,e){return te[ie]=r,te[ae]=e,ne[0]}var ue=[0,0];function ce(r,e){var n,t;return Yr.assign(r,ue,1,0),n=ue[0],n&=re,t=wr(e),oe(n|=t&=2147483648,ue[1])}var fe=1048576,se=[1,1.5],le=[0,.5849624872207642],pe=[0,1.350039202129749e-8];function ye(r,e,n,t){return Er(r)||$r(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Cr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ye(r,[0,0],1,0)}),"assign",ye);var ge=[0,0],de=[0,0];function he(r,e){var n,t;return 0===e||0===r||Er(r)||$r(r)?r:(ye(r,ge,1,0),e+=ge[1],e+=function(r){var e=wr(r);return(e=(2146435072&e)>>>20)-Nr|0}(r=ge[0]),e<-1074?ce(0,r):e>1023?r<0?Ur:Vr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Yr.assign(r,de,1,0),n=de[0],n&=2148532223,t*oe(n|=e+Nr<<20,de[1])))}var ve=1048575,we=1048576,be=1083179008,me=1e300,Ae=1e-300,_e=[0,0],Ee=[0,0];function Ne(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,d;if(Er(r)||Er(e))return NaN;if(Yr.assign(e,_e,1,0),o=_e[0],0===_e[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Wr(r);if(-.5===e)return 1/Wr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if($r(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Cr(r)<1==(e===Vr)?0:Vr}(r,e)}if(Yr.assign(r,_e,1,0),a=_e[0],0===_e[1]){if(0===a)return function(r,e){return e===Ur?Vr:e===Vr?0:e>0?Or(e)?r:0:Or(e)?ce(Vr,r):Vr}(r,e);if(1===r)return 1;if(-1===r&&Or(e))return-1;if($r(r))return r===Ur?Ne(-0,-e):e<0?0:Vr}if(r<0&&!1===jr(e))return(r-r)/(r-r);if(i=Cr(r),n=a&re|0,t=o&re|0,c=o>>>31|0,u=(u=a>>>31|0)&&Or(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(wr(r)&re)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*me*me:u*Ae*Ae;if(n>1072693248)return 0===c?u*me*me:u*Ae*Ae;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Dr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ee,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<fe&&(m-=53,n=wr(e*=9007199254740992)),m+=(n>>20)-Nr|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=fe),o=Dr(i=(w=(e=_r(e,n))-(f=se[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=_r(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Dr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Dr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+pe[_])-((g=Dr(g=(p=.9617967009544373*l)+y+(s=le[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ee,i,n);if(y=(l=(e-(f=Dr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Yr.assign(y,_e,1,0),g=Jr(_e[0]),d=Jr(_e[1]),g>=be){if(0!=(g-be|d))return u*me*me;if(l+8008566259537294e-32>y-s)return u*me*me}else if((g&re)>=1083231232){if(0!=(g-3230714880|d))return u*Ae*Ae;if(l<=y-s)return u*Ae*Ae}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&re|0)>>20)-Nr|0,f=0,s>1071644672&&(i=_r(0,((f=r+(we>>l+1)>>>0)&~(ve>>(l=((f&re)>>20)-Nr|0)))>>>0),f=(f&ve|we)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Jr(r=wr(c=1-((c=(a=.6931471824645996*(i=Dr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?he(c,f):_r(c,r)}(g,s,l),u*y}var Ue=1.8378770664093456;function Ie(r,e,n){var t;return Er(r)||Er(e)||Er(n)||n<0?NaN:0===n?r===e?Vr:Ur:(t=Ne(n,2),-.5*(2*kr(n)+Ue)+-1/(2*t)*Ne(r-e,2))}function Se(r){return function(){return r}}function xe(r){return Er(r)?Se(NaN):function(e){return Er(e)?NaN:e===r?Vr:Ur}}return L((function(r,e){return Er(r)||Er(e)?NaN:r===e?Vr:Ur}),"factory",xe),L(Ie,"factory",(function(r,e){var n,t,i;return Er(r)||Er(e)||e<0?Se(NaN):0===e?xe(r):(n=Ne(e,2),t=-.5*(2*kr(e)+Ue),i=-1/(2*n),function(e){return t+i*Ne(e-r,2)})})),Ie},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=e();
//# sourceMappingURL=index.js.map
