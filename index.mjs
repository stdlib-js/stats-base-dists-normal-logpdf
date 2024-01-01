// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two-pi@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@v0.1.0-esm/index.mjs";function a(t,m,o){var a;return d(t)||d(m)||d(o)||o<0?NaN:0===o?t===m?r:i:(a=e(o,2),-.5*(2*s(o)+n)+-1/(2*a)*e(t-m,2))}function l(t,i){var r,a,l;return d(t)||d(i)||i<0?m(NaN):0===i?o(t):(r=e(i,2),a=-.5*(2*s(i)+n),l=-1/(2*r),function(s){return a+l*e(s-t,2)})}t(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map
