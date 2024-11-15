define(['exports', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', 'preact/compat', './useUser-6dd85af9'], (function(e,o,a,t,s){"use strict";const c=(e,o)=>"string"==typeof e?e:e[o];e.useCellNavigation=({navigationMap:e,payload:o,onAction:a,onNavigation:n})=>{const{direction:i}=s.useUser(),r=t.useCallback((()=>{a(o)}),[o,a]),l=t.useCallback((a=>{const t=()=>{a.preventDefault(),a.stopPropagation()};if(["Enter","Space"].includes(a.code))return t(),void r();if("KeyT"===a.code&&a.ctrlKey&&a.altKey){const a=e.CtrlAltT;void 0!==a&&(t(),n({direction:c(a,i),...o}))}const{key:s,shiftKey:l}=a;switch(s){case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":case"End":case"Home":case"PageUp":case"PageDown":const a=!l||"PageUp"!==s&&"PageDown"!==s?s:`Shift${s}`;if(void 0!==e[a]){t();const s=e[a];n({direction:c(s,i),...o})}}}),[i,r,e,n,o]);return{onClick:r,onKeyDown:l}},e.useFocusableCell=({isFocusable:e,isFocused:o})=>{const s=t.useRef(null),{isTabbable:c}=a.useTabbableMode();return t.useLayoutEffect((()=>{e&&o&&s.current?.focus()}),[e,o]),{ref:s,tabIndex:e&&c?0:-1}}}));
//# sourceMappingURL=useCellNavigation-37e0539a.js.map