"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(R,q){
var d=require('@stdlib/math-base-special-ln/dist'),o=require('@stdlib/math-base-special-pow/dist'),I=require('@stdlib/constants-float64-ln-two-pi/dist'),_=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist'),i=require('@stdlib/math-base-assert-is-nan/dist');function O(t,r,e){var n,a,u;return i(t)||i(r)||i(e)||e<0?NaN:e===0?t===r?F:_:(n=o(e,2),a=-.5*(2*d(e)+I),u=-1/(2*n),a+u*o(t-r,2))}q.exports=O
});var s=v(function(b,p){
var P=require('@stdlib/utils-constant-function/dist'),w=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,A=require('@stdlib/constants-float64-ln-two-pi/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist'),B=require('@stdlib/math-base-special-ln/dist');function L(t,r){var e,n,a;if(c(t)||c(r)||r<0)return P(NaN);if(r===0)return w(t);return e=N(r,2),n=-.5*(2*B(r)+A),a=-1/(2*e),u;function u(y){return n+a*N(y-t,2)}}p.exports=L
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),W=s();T(l,"factory",W);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
