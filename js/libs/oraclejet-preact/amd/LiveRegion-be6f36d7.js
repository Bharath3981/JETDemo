define(['exports', 'preact/jsx-runtime', 'preact/hooks', 'css!./LiveRegionStyles.styles.css', './useTestId-82cf22a4'], (function(e,t,s,i,c){"use strict";e.LiveRegion=function({testId:e,atomic:i="false",children:n="",timeout:o=100,type:a="polite"}){const u=function(e,t){const[i,c]=s.useState(""),n=s.useCallback((()=>c(e)),[e]),o=s.useCallback((()=>setTimeout(n,t)),[n,t]);return s.useEffect((()=>{const e=o();return()=>clearTimeout(e)}),[o]),i}(n,o),r=c.useTestId(e);return t.jsx("span",{"aria-live":a,"aria-atomic":i,class:"LiveRegionStyles_offScreenStyle__1uvpdtw0",...r,children:u})}}));
//# sourceMappingURL=LiveRegion-be6f36d7.js.map