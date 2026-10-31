"use strict";var a=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=a(function(x,i){
var s=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/math-base-special-abs2/dist'),p=require('@stdlib/constants-float64-ln-two-pi/dist'),y=require('@stdlib/constants-float64-ninf/dist'),d=require('@stdlib/constants-float64-pinf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function I(t,r,e){var n;return u(t)||u(r)||u(e)||e<0?NaN:e===0?t===r?d:y:(n=-.5*(2*s(e)+p),n-.5*l((t-r)/e))}i.exports=I
});var f=a(function(R,o){
var _=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,O=require('@stdlib/constants-float64-ln-two-pi/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-abs2/dist'),b=require('@stdlib/math-base-special-ln/dist');function A(t,r){var e;if(q(t)||q(r)||r<0)return _(NaN);if(r===0)return F(t);return e=-.5*(2*b(r)+O),n;function n(N){return e-.5*P((N-t)/r)}}o.exports=A
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),T=f();L(c,"factory",T);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
