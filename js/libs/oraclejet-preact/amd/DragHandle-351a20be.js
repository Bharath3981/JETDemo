define(['exports', 'preact/jsx-runtime', './classNames-08d99695', './mergeProps-bcfa6a92', './useActive-59e52f97', './useTestId-82cf22a4', './Icon-599f55f3', './UNSAFE_DragHandle/themes/DragHandleStyles.css'], (function(e,s,t,c,r,n,a,i){"use strict";const l=e=>s.jsx(a.Icon,{viewBox:"0 0 24 24",...e,children:s.jsx("g",{fill:"none",children:s.jsx("path",{d:"M20 11H4v-1h16v1zm0 3H4v-1h16v1z",fill:"currentcolor"})})});e.DragHandle=function({testId:e}){const{isActive:a,activeProps:o}=r.useActive(),d=n.useTestId(e),v=t.classNames([i.iconStyle,a?i.activeStyle:i.hoverStyle]);return s.jsx("div",{...c.mergeProps(o,d),draggable:!0,class:v,role:"presentation",children:s.jsx(l,{})})}}));
//# sourceMappingURL=DragHandle-351a20be.js.map
