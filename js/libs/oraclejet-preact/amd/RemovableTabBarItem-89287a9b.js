define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useHover-1890d6a0', './Close-479a300b', './Flex-1f27b601', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './useTabBarContext-15a23bb6', './TabBarItem-7f4a5e0b', './useTranslationBundle-6ef0dab6', './EmbeddedIconButton-b22df710'], (function(e,a,t,o,r,n,s,l,i,c,b,d){"use strict";e.RemovableTabBarItem=function({itemKey:e,label:u,icon:m,badge:x,metadata:v,severity:f,"aria-controls":B}){const{selection:j,currentKey:p,layout:I,onRemove:T}=i.useTabBarContext(),h=j===e,y=p===e,g=t.useCallback((()=>{T?.({value:e})}),[T,e]),{hoverProps:C,isHover:H}=o.useHover({}),K=s.mergeInterpolations([...Object.values(l.flexitemInterpolations)])({flex:"stretch"===I?"1 0 auto":"0 0 auto"}),k=b.useTranslationBundle("@oracle/oraclejet-preact");return a.jsx("div",{...C,style:K,children:a.jsx(n.Flex,{children:a.jsx(c.BaseTabBarItem,{"aria-controls":B,itemKey:e,label:u,icon:m,badge:x,metadata:v,severity:f,removeIcon:a.jsx("span",{"data-oj-tabbar-item-remove-icon":"true",children:a.jsx(d.EmbeddedIconButton,{"aria-label":k.tabBarNavigationList_removeCueText(),size:"xs",onAction:g,children:(H||h||y)&&a.jsx(r.SvgClose,{})})})})})})}}));
//# sourceMappingURL=RemovableTabBarItem-89287a9b.js.map