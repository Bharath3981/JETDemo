define(['exports', 'preact/hooks', './useId-c9578d26', './useUser-6dd85af9', './useTranslationBundle-6ef0dab6', './clientHints-030d25aa', './collectionUtils-6740111c', './classNames-08d99695', './mergeProps-bcfa6a92', './dndUtils-9d9ccdc5', 'preact', './hooks/PRIVATE_useReorderable/themes/ReorderableItemStyles.css'], (function(e,r,t,s,o,n,a,l,c,i,u,d){"use strict";const f=(e,r,t,s,o)=>{const n=t>0?t-1:0,a=t<s?t+1:s;switch(e){case"ArrowLeft":return r?a:n;case"ArrowRight":return r?n:a;case"ArrowUp":if(o)return t<o?t:t-o;case"ArrowDown":if(o)return t>s-o?t:t+o;default:return}},y=u.createContext(null);e.ReorderableContext=y,e.useReorderable=function(e){const{onReorder:l,rootRef:c,itemSelector:i,isDisabled:u,columns:d}=e,y=r.useRef(),{direction:m}=s.useUser(),g="rtl"===m,v=o.useTranslationBundle("@oracle/oraclejet-preact"),b="reorderable_"+t.useId(),{deviceType:p,platform:D}=n.getClientHints(),K="windows"===D?v.accControlKey():v.accCommandKey(),R="phone"===p||"tablet"===p?"":v.accReorderInstructions({keyPressed:K}),[A,I]=r.useState(""),w=r.useCallback((e=>{if((e.metaKey||e.ctrlKey)&&e.shiftKey&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)&&l&&c.current){e.metaKey&&e.preventDefault();const r=[...a.getItemKeysArray(c.current,i)],t=r.length-1,s=r.indexOf(y.current),o=f(e.key,g,s,t,d);if(void 0!==o&&s!==o){const t=r[o]?.toString();r.splice(s,1),r.splice(o,0,y.current),l?.({reorderedKeys:r,itemKeys:[y.current],referenceKey:0===o?null:r[o-1]});const n="ArrowLeft"===e.key||"ArrowUp"===e.key?v.accPositionBefore():v.accPositionAfter(),a=y?.current?.toString();t&&n&&a&&I(v.accAnnounceMovedKey({itemKey:a,position:n,referenceKey:t}))}}}),[y,l,d,g,i,c,v]);return{reorderProps:u?{}:{onKeyDown:w},reorderContext:{currentItemKey:y},reorderInstructionsId:b,reorderInstructions:R,reorderStatus:A}},e.useReorderableItem=function(e){const{isDisabled:t,draggable:o,dragKey:n,setDragKey:u,onReorder:f,ref:m,rootRef:g,currentKey:v,itemStyles:b,getItem:p,setTransferData:D,itemSelector:K,isVertical:R}=e,A=p(),I=null!=A?a.getKey(A):void 0,[w,O]=r.useState(),C=r.useRef(),h=r.useRef(void 0),k=l.classNames([d.styles.itemDragger,b.itemDragger]),{direction:P}=s.useUser(),S="rtl"===P,x=r.useCallback((e=>{const r=p(),t=null!=r?a.getKey(r):void 0;if(m?.current&&u){h.current=i.createDragImage(m.current,k);const r=m.current.querySelector("[draggable=true]");null!=r?e?.dataTransfer?.setDragImage(h.current,r.offsetLeft+r.offsetWidth/2,r.offsetTop+r.offsetHeight/2):e?.dataTransfer?.setDragImage(h.current,0,0),D(e),u(t)}}),[p,D,k,m,u]),T=r.useCallback((e=>{n&&e.preventDefault()}),[n]),U=r.useCallback((()=>{u?.(void 0),document.body.removeChild(h.current)}),[u]),B=r.useCallback((()=>{if(g?.current){const e=p(),r=null!=e?a.getKey(e):void 0,t=a.getItemKeysArray(g.current,K);let s;const o=[...t],l=o.indexOf(n);if(null!=r){const e=o.indexOf(r);null!=l&&null!=e&&l!=e&&(s=S?l<e?"before"===w?e:e-1:"before"===w?e+1:e:l<e?"before"===w?e-1:e:"before"===w?e:e+1)}if(void 0!==s&&l!==s){const e=t[l];o.splice(l,1),o.splice(s,0,e),f?.({reorderedKeys:o,itemKeys:[n],referenceKey:0===s?null:o[s-1]}),O(void 0),u(void 0)}}}),[n,w,p,S,K,f,g,u]),{currentItemKey:L}=r.useContext(y);if(r.useEffect((()=>{v===I&&(L.current=v)}),[v,I,L]),t)return{};const E=null!=I&&I===n,N=l.classNames([d.styles.itemDnd,E&&d.styles.itemDragged]),V=l.classNames([b.itemOverlayFront,R?d.styles.itemOverlayVertical:d.styles.itemOverlay,"before"===w&&d.styles.itemOverlayBefore,"before"===w&&S&&d.styles.itemOverlayBeforeRtl]),H=l.classNames([b.itemOverlayFront,b.itemOverlayRear,R?d.styles.itemOverlayVertical:d.styles.itemOverlay,"after"===w&&d.styles.itemOverlayAfter,"after"===w&&S&&d.styles.itemOverlayAfterRtl]);return{rootProps:c.mergeProps({ref:m,draggable:o,onDragStart:x,onDragEnd:U,onDragOver:T,onDrop:B,isDisabled:t,class:N}),isDragged:E,overlayZoneBeforeProps:c.mergeProps({onDragEnter:()=>{O("before"),C.current="before"},onDragLeave:()=>{"before"===C.current&&O(void 0)},class:V}),overlayZoneAfterProps:c.mergeProps({onDragEnter:()=>{O("after"),C.current="after"},onDragLeave:()=>{"after"===C.current&&O(void 0)},class:H})}}}));
//# sourceMappingURL=useReorderableItem-d977f935.js.map