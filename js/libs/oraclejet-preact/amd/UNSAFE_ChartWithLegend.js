define(['exports', 'preact/jsx-runtime', './Flex-1f27b601', './useTestId-82cf22a4', './LayerHost-eab40731', 'preact', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', 'preact/hooks', './classNames-08d99695', './boxalignment-1e23a8e6', './size-4e81acac', './utils-61ef4ad6', './colorUtils-7c069766', './_curry1-df649359', './arrayUtils-6ee96a35', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-84d30764', './dimensions-89f18413', './flexbox-8521f6aa', 'css!./flexbox.styles.css', './flexitem-5db48325', 'css!./flexitem.styles.css', './mergeInterpolations-9ede4cf7', './mergeDeepWithKey-aaab9019', './_curry3-83878f86', './_curry2-86c52b86', './_isObject-42bafc94', 'css!./FlexStyles.styles.css'], (function(e,t,r,s,n,i,o,c,a,l,d,m,f,h,u,x,y,g,p,b,j,v,w,C,O,_,F,I,W,k){"use strict";e.ChartWithLegend=function({chart:e,legend:s,position:n,maxSize:i,size:o}){const c="start"===n||"end"===n?"row":"column",{chartOrder:a,legendOrder:l}=function(e){const t="start"===e||"top"===e;return{chartOrder:t?2:1,legendOrder:t?1:2}}(n),{justifyContent:d,alignItem:m}=function(e){let t,r;return"top"===e?(t="center",r="end"):"bottom"===e?(t="center",r="start"):"start"===e?(t="end",r="center"):(t="start",r="center"),{justifyContent:t,alignItem:r}}(n);return t.jsxs(r.Flex,{width:"100%",height:"100%",direction:c,children:[t.jsx("div",{style:{order:a,flexGrow:1,minWidth:0},children:e}),s&&t.jsx(r.Flex,{order:l,justify:d,align:m,maxHeight:"column"===c?i:void 0,maxWidth:"row"===c?i:void 0,height:"column"===c?o:void 0,width:"row"===c?o:void 0,children:s})]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_ChartWithLegend.js.map