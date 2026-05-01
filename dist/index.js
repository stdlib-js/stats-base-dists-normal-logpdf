"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(R,q){
var d=require('@stdlib/math-base-special-ln/dist'),o=require('@stdlib/math-base-special-pow/dist'),I=require('@stdlib/constants-float64-ln-two-pi/dist'),_=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist'),i=require('@stdlib/math-base-assert-is-nan/dist');function O(e,r,t){var n,a,u;return i(e)||i(r)||i(t)||t<0?NaN:t===0?e===r?F:_:(n=o(t,2),a=-.5*(2*d(t)+I),u=-1/(2*n),a+u*o(e-r,2))}q.exports=O
});var s=v(function(b,p){
var P=require('@stdlib/utils-constant-function/dist'),w=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,A=require('@stdlib/constants-float64-ln-two-pi/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist'),B=require('@stdlib/math-base-special-ln/dist');function L(e,r){var t,n,a;if(c(e)||c(r)||r<0)return P(NaN);if(r===0)return w(e);return t=N(r,2),n=-.5*(2*B(r)+A),a=-1/(2*t),u;function u(y){return n+a*N(y-e,2)}}p.exports=L
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),W=s();T(l,"factory",W);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
