define(['exports'], (function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var a=(e,r,t)=>{for(var n of Object.keys(e)){var a;if(e[n]!==(null!==(a=r[n])&&void 0!==a?a:t[n]))return!1}return!0};e.createRuntimeFn=e=>r=>{var t=e.defaultClassName,o=n(n({},e.defaultVariants),r);for(var i in o){var u,c=null!==(u=o[i])&&void 0!==u?u:e.defaultVariants[i];if(null!=c){var f=c;"boolean"==typeof f&&(f=!0===f?"true":"false");var l=e.variantClassNames[i][f];l&&(t+=" "+l)}}for(var[s,b]of e.compoundVariants)a(s,o,e.defaultVariants)&&(t+=" "+b);return t}}));
//# sourceMappingURL=vanilla-extract-recipes-createRuntimeFn.esm-d881c69a.js.map
