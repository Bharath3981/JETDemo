define(['exports', 'preact/jsx-runtime', './useTooltip-d28e9b0f', './useTooltipControlled-abf886f2', './useTranslationBundle-6ef0dab6', './classNames-08d99695', './CompactHelpSource-7de24d56', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css'], (function(e,s,t,r,a,o,l,n){"use strict";e.CompactLabelAssistance=({helpIconId:e,helpSourceLink:r,helpSourceText:c,isRequiredShown:i,labelEdge:d})=>{const u=a.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_required(),{tooltipContent:p,tooltipProps:m}=t.useTooltip({text:u,offset:{mainAxis:8}}),x=o.classNames([n.requiredIconBase,"start"===d&&n.requiredIconLabelEdgeStart]),f=i&&s.jsxs("span",{children:[s.jsx("span",{class:x,...m}),p]}),h=(r||c)&&s.jsx(l.CompactHelpSource,{id:e,labelEdge:d,source:r,children:c});return s.jsxs(s.Fragment,{children:["start"!==d&&f,h,"start"===d&&f]})}}));
//# sourceMappingURL=CompactLabelAssistance-91aeaa2e.js.map