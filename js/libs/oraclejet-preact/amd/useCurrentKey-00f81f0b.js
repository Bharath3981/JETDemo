define(['exports', 'preact/hooks', './keys-cc1cb01d', './useUser-6dd85af9'], (function(e,t,r,s){"use strict";e.useCurrentKey=function(e,n,c,i,o,u,l,a,f){const{direction:y}=s.useUser(),K=t.useCallback(((e,t)=>f?f(e,t):e===t),[f]),d=t.useCallback((e=>{if(a&&r.isKeyDefined(l)){const t="rtl"===y,s={ArrowUp:c,ArrowDown:i,ArrowLeft:t?u:o,ArrowRight:t?o:u};if(Object.keys(s).includes(e.key)&&(n||!e.shiftKey)&&!e.metaKey&&!e.ctrlKey){const t=s[e.key]?.();r.isKeyDefined(t)&&!K(l,t)&&a({value:t}),e.preventDefault()}}}),[l,a,c,i,o,u,K,n,y]),k=t.useCallback((t=>{if(a&&!t.shiftKey){const s=e(t.target);r.isKeyDefined(s)&&!K(l,s)&&a({value:s})}}),[l,e,a,K]);return{currentKeyProps:null==a?{}:{onClickCapture:k,onKeyDown:d}}}}));
//# sourceMappingURL=useCurrentKey-00f81f0b.js.map