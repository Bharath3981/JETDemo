define(['exports', 'preact/jsx-runtime', './useComponentTheme-5aa41a8f', './UNSAFE_Badge/themes/redwood/BadgeTheme', './useTooltip-d28e9b0f', './useTooltipControlled-abf886f2', './useDetectTruncation-fcf6c1aa', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317'], (function(e,t,a,o,n,s,i,d,c){"use strict";e.TruncatingBadge=function({variant:e,size:s,edge:d,children:r}){const{classes:u}=a.useComponentTheme(o.BadgeRedwoodTheme,{variant:e,size:s,edge:d}),{isTabbable:l}=c.useTabbableMode(),{detectTruncationProps:T,isTextTruncated:b}=i.useDetectTruncation(),{tooltipContent:p,tooltipProps:f}=n.useTooltip({text:r,isDisabled:!b});return t.jsxs(t.Fragment,{children:[t.jsx("span",{...T,...f,tabIndex:b&&l?0:-1,class:u,children:r}),p]})}}));
//# sourceMappingURL=TruncatingBadge-67192c05.js.map