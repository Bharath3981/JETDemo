define("oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useMergedFormContext=void 0,e.useMergedFormContext=function({propContainerReadonly:e,propLabelWrapping:a,propReadonly:s,propUserAssistanceDensity:r}){const n=(0,t.useFormContext)(),o=r??n.userAssistanceDensity,l=s??n.isReadonly,{isFormLayout:i,isReadonly:u,labelWrapping:d,...c}=n;return{containerProps:{...c,isFormLayout:void 0!==e||i,isReadonly:e??u,labelWrapping:a??d},readonlyValue:l,uadValue:o}}})),define("oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText",["require","exports","preact/hooks"],(function(require,e,t){"use strict";function a(e,t,a,s,r,n){const o="compact"!==n?a?.definition:void 0;return e?.instruction||("none"===r?.validatorHint?void 0:t)||o||("none"===r?.converterHint?void 0:s)}function s(e){if(!e.length)return;return e.map((e=>"function"==typeof e.getHint?e.getHint():void 0)).filter(Boolean).join("\n")}Object.defineProperty(e,"__esModule",{value:!0}),e.useAssistiveText=void 0,e.useAssistiveText=function({addBusyState:e,converter:r,displayOptions:n,help:o,helpHints:l,userAssistanceDensity:i,validators:u}){const[d,c]=(0,t.useState)(u&&u.length?s(u):void 0),p=(0,t.useRef)();(0,t.useEffect)((()=>{if(!u||!u.length)return void c(void 0);c(s(u));const t=u.map((e=>e.hint)).filter(Boolean),a=p.current=Symbol(),r=e?.("resolving the async validator hints");Promise.allSettled(t).then((e=>{c((t=>{const s=e.map((e=>"fulfilled"===e.status?e.value:void 0)).filter(Boolean);return a===p.current&&s.length?[t,...s].join("\n"):t})),r?.()}))}),[u]);const v="compact"!==i?l?.sourceText:l?.definition||l?.sourceText;return{assistiveText:a(o,d,l,r?.getHint?.()??void 0,n,i),helpSourceLink:l?.source,helpSourceText:v}}})),define("oj-c/editable-value/utils/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isShallowEqual=e.normalizeValue=e.treatNull=e.createMessageFromError=void 0,e.createMessageFromError=function(e){return"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message}},e.treatNull=function(e,t){return null===e?t:e},e.normalizeValue=function(e){return"string"==typeof e&&""===e?null:e};e.isShallowEqual=(e,t)=>e===t||e.length===t.length&&e.every(((e,a)=>e===t[a]))})),define("oj-c/hooks/UNSAFE_useEditableValue/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.treatNull=e.normalizeValue=e.isShallowEqual=e.hasErrorMessages=e.createMessageFromError=void 0;e.createMessageFromError=e=>"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message};e.treatNull=(e,t)=>null===e?t:e;e.normalizeValue=e=>"string"==typeof e&&""===e?null:e;e.isShallowEqual=(e,t)=>e===t||e.length===t.length&&e.every(((e,a)=>e===t[a]));e.hasErrorMessages=e=>!!e&&e.some((e=>"error"===e.severity))})),define("oj-c/hooks/UNSAFE_useEditableValue/converterUtils",["require","exports","./utils"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parse=e.format=void 0,e.parse=function(e,a){if(void 0===e)return{result:"success",value:null};if(""===(s=e)||null===s)return{result:"success",value:e};var s;try{return{result:"success",value:a.parse(e)}}catch(e){return{result:"failure",error:(0,t.createMessageFromError)(e)}}},e.format=function(e,a,s){if(function(e){return null===e}(e))return{result:"success",value:a};try{return{result:"success",value:s.format(e)}}catch(e){return{result:"failure",error:(0,t.createMessageFromError)(e)}}}})),define("oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useStaleIdentity=void 0,e.useStaleIdentity=function(){const e=(0,t.useRef)(new Map);return{setStaleIdentity:(0,t.useCallback)((t=>{const a=Symbol();return e.current.set(t,a),{isStale:()=>a!==e.current.get(t)}}),[])}}})),define("oj-c/hooks/UNSAFE_useEditableValue/reducer",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateValue=e.updateValidStatus=e.updatePreviousValue=e.updatePreviousValidators=e.updatePreviousReadonly=e.updatePreviousDisabled=e.updatePreviousDeferredValidators=e.updatePreviousConverter=e.updateHiddenMessages=e.updateDisplayValue=e.updateCustomMessages=e.updateComponentMessages=e.showHiddenMessages=e.clearAllMessages=e.addComponentMessage=e.reducer=void 0,e.reducer=function(e,t){const a=e.customMessages??[],s=e.hiddenMessages,r=e.componentMessages,n=e.shownMessages;switch(t.type){case"UPDATE_DISPLAY_VALUE":return{...e,displayValue:t.payload};case"UPDATE_VALID":return{...e,valid:t.payload};case"UPDATE_VALUE":return{...e,value:t.payload};case"UPDATE_PREVIOUS_CONVERTER":return{...e,previousConverter:t.payload};case"UPDATE_PREVIOUS_DEFERRED_VALIDATORS":return{...e,previousDeferredValidators:t.payload};case"UPDATE_PREVIOUS_DISABLED":return{...e,previousDisabled:t.payload};case"UPDATE_PREVIOUS_READONLY":return{...e,previousReadonly:t.payload};case"UPDATE_PREVIOUS_VALIDATORS":return{...e,previousValidators:t.payload};case"UPDATE_PREVIOUS_VALUE":return{...e,previousValue:t.payload};case"UPDATE_COMPONENT_MESSAGES":return{...e,componentMessages:t.payload,shownMessages:[...a,...t.payload]};case"UPDATE_HIDDEN_MESSAGES":return{...e,hiddenMessages:t.payload};case"UPDATE_CUSTOM_MESSAGES":return{...e,customMessages:t.payload,shownMessages:[...t.payload,...r]};case"CLEAR_ALL_MESSAGES":return{...e,shownMessages:[],hiddenMessages:[],customMessages:[],componentMessages:[]};case"ADD_COMPONENT_MESSAGE":return{...e,componentMessages:[...r,t.payload],shownMessages:[...n,t.payload]};case"SHOW_HIDDEN_MESSAGES":return 0===s.length?e:{...e,hiddenMessages:[],shownMessages:[...a,...r,...s]};default:return e}},e.updateDisplayValue=function(e,t,{onRawValueChanged:a}){e({type:"UPDATE_DISPLAY_VALUE",payload:t}),a?.(t)},e.updateValidStatus=function(e,t,{onValidChanged:a}){e({type:"UPDATE_VALID",payload:t}),a?.(t)},e.updateValue=function(e,t,{onValueChanged:a}){e({type:"UPDATE_VALUE",payload:t}),a?.(t)},e.updateComponentMessages=function(e,t){e({type:"UPDATE_COMPONENT_MESSAGES",payload:t})},e.updateHiddenMessages=function(e,t){e({type:"UPDATE_HIDDEN_MESSAGES",payload:t})},e.updateCustomMessages=function(e,t){e({type:"UPDATE_CUSTOM_MESSAGES",payload:t})},e.updatePreviousValue=function(e,t){e({type:"UPDATE_PREVIOUS_VALUE",payload:t})},e.updatePreviousConverter=function(e,t){e({type:"UPDATE_PREVIOUS_CONVERTER",payload:t})},e.updatePreviousDeferredValidators=function(e,t){e({type:"UPDATE_PREVIOUS_DEFERRED_VALIDATORS",payload:t})},e.updatePreviousDisabled=function(e,t){e({type:"UPDATE_PREVIOUS_DISABLED",payload:t})},e.updatePreviousReadonly=function(e,t){e({type:"UPDATE_PREVIOUS_READONLY",payload:t})},e.updatePreviousValidators=function(e,t){e({type:"UPDATE_PREVIOUS_VALIDATORS",payload:t})},e.clearAllMessages=function(e,t,{onMessagesCustomChanged:a}){e({type:"CLEAR_ALL_MESSAGES"}),a?.([])},e.showHiddenMessages=function(e){e({type:"SHOW_HIDDEN_MESSAGES"})},e.addComponentMessage=function(e,t){e({type:"ADD_COMPONENT_MESSAGE",payload:t})}})),define("oj-c/hooks/UNSAFE_useEditableValue/validationUtils",["require","exports","./utils"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.validateSync=e.validateAsync=void 0,e.validateSync=function({validators:e,value:a}){const s=[];for(const r of e)try{r.validate(a)}catch(e){s.push((0,t.createMessageFromError)(e))}return s.length?{result:"failure",errors:s}:{result:"success"}},e.validateAsync=function({validators:e,value:a}){const s=(e,a)=>{try{const s=e.validate(a);if(s instanceof Promise)return s.then((()=>{}),(e=>(0,t.createMessageFromError)(e)))}catch(e){return(0,t.createMessageFromError)(e)}},r=[],n=[];for(const t of e){const e=s(t,a);void 0!==e&&(e instanceof Promise?n.push(e):r.push(e))}return{errors:r,maybeErrorPromises:n}}})),define("oj-c/hooks/UNSAFE_useEditableValue/useEditableValue",["require","exports","preact/hooks","./converterUtils","./utils","oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity","./reducer","./validationUtils"],(function(require,e,t,a,s,r,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=void 0;const l=Symbol("ConverterError");e.useEditableValue=function({addBusyState:e,ariaDescribedBy:i,converter:u,defaultDisplayValue:d,deferredValidators:c,disabled:p,displayOptions:v,messagesCustom:y,onMessagesCustomChanged:g,onRawValueChanged:f,onValidChanged:m,onValueChanged:S,readonly:h,validators:E,value:V}){const b=(0,t.useRef)(!0),{setStaleIdentity:M}=(0,r.useStaleIdentity)(),[A,_]=(0,t.useReducer)(n.reducer,{shownMessages:[],hiddenMessages:[],customMessages:y,componentMessages:[],value:V,valid:"pending"},(e=>{const t=u?(0,a.format)(V,d,u):{result:"success",value:(0,s.treatNull)(V,d)};return{...e,displayValue:"success"===t.result?t.value:d}})),C=(0,t.useCallback)(((e,t)=>(e(_,t,{onMessagesCustomChanged:g,onRawValueChanged:f,onValidChanged:m,onValueChanged:S}),!0)),[_,g,f,m,S]),P=(0,t.useCallback)((e=>{let t;if(u){const r=(0,a.format)(e,d,u);"failure"===r.result?(C(n.updateComponentMessages,[r.error]),C(n.updateValidStatus,"invalidShown"),t=(0,s.treatNull)(e,d)):t=r.value}else t=(0,s.treatNull)(e,d);return C(n.updateDisplayValue,t),!0}),[u,C,d]),D=(0,t.useCallback)((()=>{if("invalidShown"!==A.valid)return A.value;if(!u)return(0,s.normalizeValue)(A.displayValue);const e=(0,a.parse)((0,s.normalizeValue)(A.displayValue),u);return"failure"===e.result?(C(n.updateComponentMessages,[e.error]),C(n.updateValidStatus,"invalidShown"),l):e.value}),[u,C,A.displayValue,A.valid,A.value]),x=(0,t.useCallback)((e=>{if(!u)return(0,s.normalizeValue)(e);const t=(0,a.parse)((0,s.normalizeValue)(e),u);return"failure"===t.result&&C(n.updateComponentMessages,[t.error])&&C(n.updateValidStatus,"invalidShown"),"success"===t.result?t.value:l}),[u,C]),U=(0,t.useCallback)((async(t,a={})=>{const{doNotClearMessagesCustom:r=!1}=a,l=r&&(0,s.hasErrorMessages)(y);if(C(n.updateValidStatus,"pending"),r?(C(n.updateComponentMessages,[]),C(n.updateHiddenMessages,[])):C(n.clearAllMessages),!(E&&0!==E.length||c&&0!==c.length))return C(n.updateValidStatus,l?"invalidShown":"valid"),!0;const i=[],u=(0,o.validateSync)({validators:c??[],value:t});let d;"failure"===u.result&&i.push(...u.errors),null!=t&&(d=(0,o.validateAsync)({validators:E??[],value:t})),i.push(...d?.errors??[]);const p=d?.maybeErrorPromises??[];if(!i.length&&!p.length)return C(n.updateValidStatus,l?"invalidShown":"valid"),!0;const v=0!==i.length;if(v&&C(n.updateComponentMessages,i)&&C(n.updateValidStatus,"invalidShown"),!p.length)return!v;const g=e?.("running asynchronous validation"),{isStale:f}=M("useEditableValue-full-validate");let m=!1;const S=[];for(const e of p){const t=e.then((e=>{e&&!f()&&(C(n.addComponentMessage,e),C(n.updateValidStatus,"invalidShown"),m=!0)}));S.push(t)}return await Promise.all(S),v||m||f()||C(n.updateValidStatus,l?"invalidShown":"valid"),g?.(),!v&&!m}),[e,C,c,y,M,E]),j=async()=>{if(p||h)return;const e=D();if(e===l)return;const t=e;await R(t,{doNotClearMessagesCustom:!0})&&C(n.updateValue,t)&&P(t)},R=(0,t.useCallback)((async(t,a={})=>{const{isStale:s}=M("useEditableValue-validateValueOnInternalChange"),r=e?.("Running validateValueOnInternalChange"),n=await U(t,a);return r?.(),!s()&&n}),[e,U,M]),T=(0,t.useCallback)((async({value:e})=>{const t=x(e);if(t===l)return;const a=t;await R(a)&&C(n.updateValue,a)&&P(a)}),[C,x,P,R]),O=(0,t.useCallback)((({value:e})=>{C(n.updateDisplayValue,e??d)}),[C,d]),w=(0,t.useCallback)((async()=>{if(h||p)return"valid";const t=x(A.displayValue);if(t===l)return"invalid";const a=t,s=e?.("Running component method validate"),r=await U(a);return s?.(),r?(a!==A.value&&(C(n.updateValue,a),P(a)),"valid"):"invalid"}),[e,p,C,U,x,h,P,A.displayValue,A.value]),I=(0,t.useCallback)((()=>{C(n.clearAllMessages);const e=A.value,t=(0,o.validateSync)({validators:c??[],value:e});"failure"===t.result&&C(n.updateHiddenMessages,t.errors),C(n.updateValidStatus,"failure"===t.result?"invalidHidden":"valid"),P(A.value)}),[c,C,P,A.value]),F=(0,t.useCallback)((()=>{A.hiddenMessages&&A.hiddenMessages.length>0&&(C(n.showHiddenMessages),C(n.updateValidStatus,"invalidShown"))}),[C,A.hiddenMessages]);if(!b.current&&A.previousValue!==V&&(C(n.updatePreviousValue,V),V!==A.value)){C(n.clearAllMessages);const e=(0,o.validateSync)({validators:c??[],value:V});"success"===e.result&&C(n.updateValidStatus,"valid"),"failure"===e.result&&C(n.updateValidStatus,"invalidHidden")&&C(n.updateHiddenMessages,e.errors),C(n.updateValue,V),P(V)}if(b.current||A.previousConverter===u||(C(n.updatePreviousConverter,u),"invalidShown"!==A.valid&&P(V),"invalidShown"===A.valid&&j()),b.current||A.previousValidators===E||(C(n.updatePreviousValidators,E),"invalidShown"===A.valid&&j()),!b.current&&(!A.customMessages&&y||A.customMessages&&!y||A.customMessages&&y&&!(0,s.isShallowEqual)(A.customMessages,y))){const e=A.componentMessages??[],t=A.hiddenMessages??[],a=y??[],r=(0,s.hasErrorMessages)(a),o=t.length>0,l=0===e.length&&0===t.length&&0===a.length;C(n.updateCustomMessages,a),r&&C(n.updateValidStatus,"invalidShown"),!r&&"pending"!==A.valid&&(l&&C(n.updateValidStatus,"valid")||o&&C(n.updateValidStatus,"invalidHidden"))}if(!b.current&&(A.previousDeferredValidators!==c||A.previousDisabled!==p||A.previousReadonly!==h)){const e=0===c?.length;if(A.previousDeferredValidators!==c&&C(n.updatePreviousDeferredValidators,c),A.previousDisabled!==p&&C(n.updatePreviousDisabled,p),A.previousReadonly!==h&&C(n.updatePreviousReadonly,h),e||!h&&!p)switch(A.valid){case"valid":const e=D();if(e!==l){const t=(0,o.validateSync)({validators:c??[],value:e});"failure"===t.result&&C(n.updateHiddenMessages,t.errors)&&C(n.updateValidStatus,"invalidHidden")}break;case"invalidHidden":0===c?.length&&(C(n.updateValidStatus,"valid"),C(n.updateHiddenMessages,[]));break;case"invalidShown":j()}}return b.current&&(b.current=!1),(0,t.useEffect)((()=>{if(C(n.updatePreviousValue,V),C(n.updatePreviousConverter,u),C(n.updatePreviousValidators,E),C(n.updatePreviousDeferredValidators,c),C(n.updatePreviousDisabled,p),C(n.updatePreviousReadonly,h),C(n.updateCustomMessages,y),p||h)C(n.updateValidStatus,"valid"),P(V);else{const e=(0,o.validateSync)({validators:c??[],value:V});"failure"===e.result&&C(n.updateHiddenMessages,e.errors)&&C(n.updateValidStatus,"invalidHidden"),"success"===e.result&&C(n.updateValidStatus,(0,s.hasErrorMessages)(y)?"invalidShown":"valid")&&P(V)}}),[]),{value:A.value,displayValue:A.displayValue,methods:{reset:I,showMessages:F,validate:w},textFieldProps:{"aria-describedby":i,messages:"none"!==v?.messages?A.shownMessages:void 0,onCommit:T,onInput:O,value:A.displayValue}}}})),define("oj-c/hooks/UNSAFE_useEditableValue/index",["require","exports","./useEditableValue"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=void 0,Object.defineProperty(e,"useEditableValue",{enumerable:!0,get:function(){return t.useEditableValue}})})),define("oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators",["require","exports","ojs/ojvalidator-required","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDeferredValidators=void 0,e.useDeferredValidators=function({labelHint:e,required:r,requiredMessageDetail:n}){const o=(0,s.useTranslationBundle)("@oracle/oraclejet-preact"),l=n||o.formControl_requiredMessageDetail(),i=(0,a.useMemo)((()=>r?new t({label:e,messageDetail:l}):null),[r]);return(0,a.useMemo)((()=>[i].filter(Boolean)),[i])}})),define("oj-c/input-text/useInputTextPreact",["require","exports","oj-c/editable-value/utils/utils","oj-c/hooks/UNSAFE_useEditableValue/index","oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators"],(function(require,e,t,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useInputTextPreact=void 0,e.useInputTextPreact=function({autocomplete:e="on",autofocus:r,clearIcon:n="never",converter:o,disabled:l,displayOptions:i,end:u,inputPrefix:d,inputSuffix:c,labelEdge:p,labelHint:v,labelStartWidth:y,length:g,messagesCustom:f,placeholder:m,readonly:S,required:h,requiredMessageDetail:E,start:V,textAlign:b,userAssistanceDensity:M,validators:A,value:_,virtualKeyboard:C,onMessagesCustomChanged:P,onRawValueChanged:D,onValidChanged:x,onValueChanged:U,...j},R){const T=(0,s.useDeferredValidators)({labelHint:v,required:h,requiredMessageDetail:E}),{methods:O,textFieldProps:w,value:I}=(0,a.useEditableValue)({addBusyState:R,ariaDescribedBy:j["aria-describedby"],converter:o,defaultDisplayValue:"",deferredValidators:T,disabled:l,displayOptions:i,messagesCustom:f,onMessagesCustomChanged:P,onRawValueChanged:D,onValidChanged:x,onValueChanged:U,readonly:S,validators:null===A?void 0:A,value:_});return{methods:O,inputTextProps:{autoComplete:e,autoFocus:r,hasClearIcon:"conditional"===n?"conditionally":n,endContent:u,isDisabled:l,isReadonly:S,isRequired:h,isRequiredShown:h&&("compact"===M||(null===I||"string"==typeof I&&""===I)),label:v,labelEdge:p,labelStartWidth:y,maxLength:(0,t.treatNull)(g?.max),maxLengthUnit:g?.countBy,placeholder:m,prefix:d,startContent:V,suffix:c,textAlign:b,userAssistanceDensity:M,virtualKeyboard:C,...w}}}})),define("oj-c/input-text/input-text",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/hooks/UNSAFE_useAccessibleContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext","oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormVariantContext","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/UNSAFE_InputText","oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText","ojs/ojcontext","ojs/ojvcomponent","preact/compat","preact/hooks","./useInputTextPreact","@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout","css!oj-c/input-text/input-text-styles.css"],(function(require,e,t,a,s,r,n,o,l,i,u,d,c,p,v,y,g){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputText=void 0;const f={converterHint:"display",messages:"display",validatorHint:"display"},m={instruction:""},S={definition:"",source:""},h={countBy:"codePoint",max:null},E=[],V=[];e.InputText=(0,c.registerCustomElement)("oj-c-input-text",(0,p.forwardRef)((function({autocomplete:e="on",clearIcon:a="never",columnSpan:l=1,containerReadonly:p,converter:b=null,disabled:M=!1,displayOptions:A=f,help:_=m,helpHints:C=S,id:P,labelWrapping:D,length:x=h,messagesCustom:U=E,readonly:j,required:R=!1,userAssistanceDensity:T,validators:O=V,value:w=null,virtualKeyboard:I="auto",...F},N){const H=(0,v.useRef)(),k=(0,v.useRef)(),L=(0,v.useCallback)(((e="InputText: busyState")=>H.current?d.getContext(H.current).getBusyContext().addBusyState({description:`oj-c-input-text id=${P} is ${e}`}):()=>{}),[P]),{containerProps:q,uadValue:B,readonlyValue:W}=(0,n.useMergedFormContext)({propContainerReadonly:p,propLabelWrapping:D,propReadonly:j,propUserAssistanceDensity:T}),{inputTextProps:G,methods:z}=(0,y.useInputTextPreact)({autocomplete:e,clearIcon:a,converter:b,disabled:M,displayOptions:A,length:x,messagesCustom:U,readonly:W,required:R,userAssistanceDensity:B,validators:O,value:w,virtualKeyboard:I,...F},L);(0,v.useImperativeHandle)(N,(()=>({blur:()=>k.current?.blur(),focus:()=>{k.current?.focus()},...z})),[z]);const K=(0,u.useAssistiveText)({converter:b,displayOptions:A,help:_,helpHints:C,userAssistanceDensity:G.userAssistanceDensity,validators:O}),Y=(0,o.useFormVariantContext)(),$={UNSAFE_ariaLabelledBy:F.unsafe_labelledBy};return(0,t.jsx)(c.Root,{id:P,ref:H,class:g.layoutSpanStyles.layoutSpanColumn[l],children:(0,t.jsx)(r.FormContext.Provider,{value:q,children:(0,t.jsx)(s.AccessibleContext.Provider,{value:$,children:(0,t.jsx)(i.InputText,{ref:k,...K,...G,variant:Y})})})})})),"InputText",{properties:{autocomplete:{type:"string"},clearIcon:{type:"string",enumValues:["conditional","always","never"]},columnSpan:{type:"number"},containerReadonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},converter:{type:"object|null"},disabled:{type:"boolean"},displayOptions:{type:"object",properties:{converterHint:{type:"string",enumValues:["none","display"]},messages:{type:"string",enumValues:["none","display"]},validatorHint:{type:"string",enumValues:["none","display"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string"},source:{type:"string"},sourceText:{type:"string"}}},inputPrefix:{type:"string"},inputSuffix:{type:"string"},labelEdge:{type:"string",enumValues:["none","start","top","inside"],binding:{consume:{name:"containerLabelEdge"}}},labelHint:{type:"string"},labelStartWidth:{type:"number|string",binding:{consume:{name:"labelWidth"}}},labelWrapping:{type:"string",enumValues:["truncate","wrap"],binding:{consume:{name:"labelWrapping"}}},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"]},max:{type:"number|null"}}},messagesCustom:{type:"Array<object>",writeback:!0},placeholder:{type:"string"},readonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},required:{type:"boolean"},requiredMessageDetail:{type:"string"},textAlign:{type:"string",enumValues:["end","start","right"]},unsafe_labelledBy:{type:"string"},userAssistanceDensity:{type:"string",enumValues:["compact","reflow","efficient"],binding:{consume:{name:"containerUserAssistanceDensity"}}},validators:{type:"Array<object>|null"},value:{type:"any",writeback:!0},virtualKeyboard:{type:"string",enumValues:["number","search","auto","url","text","email","tel"]},rawValue:{type:"string",readOnly:!0,writeback:!0},valid:{type:"string",enumValues:["pending","valid","invalidHidden","invalidShown"],readOnly:!0,writeback:!0}},slots:{end:{},start:{}},extension:{_WRITEBACK_PROPS:["messagesCustom","rawValue","valid","value"],_READ_ONLY_PROPS:["rawValue","valid"],_OBSERVED_GLOBAL_PROPS:["aria-describedby","id","autofocus"]},methods:{blur:{},focus:{},showMessages:{},reset:{},validate:{}}},{autocomplete:"on",clearIcon:"never",columnSpan:1,converter:null,disabled:!1,displayOptions:{converterHint:"display",messages:"display",validatorHint:"display"},help:{instruction:""},helpHints:{definition:"",source:""},length:{countBy:"codePoint",max:null},messagesCustom:[],required:!1,validators:[],value:null,virtualKeyboard:"auto"},{"@oracle/oraclejet-preact":a.default},{consume:[o.FormVariantContext,l.TabbableModeContext]})})),define("oj-c/input-text",["require","exports","oj-c/input-text/input-text"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputText=void 0,Object.defineProperty(e,"InputText",{enumerable:!0,get:function(){return t.InputText}})}));
//# sourceMappingURL=input-text.js.map