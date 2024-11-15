define(['exports', 'preact/jsx-runtime', 'preact/compat', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', 'preact/hooks', './useFocusableTextField-c2f98a8b', './Label-3f8fc274', './TextFieldInput-dfd9529f', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-a5e85e5d', './StyledTextField-8ac3bbb4', './TextField-0fc70892', './MaxLengthLiveRegion-23d7e335', './useTextField-e6877c79', './logger-0f873e29', './TabbableModeContext-a9c97640', './useId-c9578d26', './useTranslationBundle-6ef0dab6', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-f4d1fa1b', './CompactUserAssistance-b2cbdbad', './useTooltipControlled-abf886f2', 'preact', 'css!./IconStyle.styles.css', './Popup-249d77c3', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', './LayerHost-eab40731', './HiddenAccessible-037ef42d', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useLengthFilter-ed8959a4', './classNames-08d99695', './usePress-a9ed1488', './useFormFieldContext-8196183c', 'css!./MaxLengthCounterStyles.styles.css', './useCurrentValueReducer-faded381'], (function(e,s,t,a,n,i,l,o,r,d,c,u,x,m,p,h,b,F,f,y,g,L,C,v,A,S,R,T,I,j,U,_,E,w,P,D,M,k,N,V,B,H,q){"use strict";var z="MaxLengthCounterStyles_spanStyles__7dy9j72";const W=()=>{};function $({maxLength:e,valueLength:t=0,onClick:a}){const{isFocused:n}=B.useFormFieldContext(),i=l.useCallback((e=>e.preventDefault()),[]),o=N.classNames([!n&&"MaxLengthCounterStyles_hide__7dy9j71"]),{pressProps:r}=V.usePress(a??W);return s.jsx("div",{class:"MaxLengthCounterStyles_maxLengthCounterBase__7dy9j70",onMouseDown:i,...r,children:s.jsxs("span",{class:o,children:[s.jsx("span",{class:z,children:t}),s.jsx("span",{class:z,children:"/"}),s.jsx("span",{class:z,children:e})]})})}const G=t.forwardRef((({"aria-describedby":e,assistiveText:a,autoComplete:l="off",autoFocus:c=!1,columnSpan:b,helpSourceLink:F,helpSourceText:g,isDisabled:L,isReadonly:C,isRequired:S=!1,isRequiredShown:R,label:T,labelEdge:I,labelStartWidth:j,maxLength:U,maxLengthCounter:_="remaining",maxLengthUnit:E,messages:w,placeholder:D,resize:M,role:N,rows:V,textAlign:B,userAssistanceDensity:H,value:z,variant:W="default",onInput:G,onCommit:O,testId:X},J)=>{const K=y.useTranslationBundle("@oracle/oraclejet-preact"),Q=U?K.formControl_limitReached({CHARACTER_LIMIT:U}):"",{currentCommitValue:Y,dispatch:Z}=q.useCurrentValueReducer({value:z}),ee=t.useCallback((e=>{Z({type:"input",payload:e.value}),G?.(e)}),[G,Z]),se=t.useCallback((e=>{Z({type:"commit",payload:e.value}),O?.(e)}),[O,Z]),{isDisabled:te,isReadonly:ae,labelEdge:ne,labelStartWidth:ie,textAlign:le,userAssistanceDensity:oe}=n.useFormContext(),re=L??te,de=C??ae,ce=I??ne,ue=j??ie,xe=B??le,me=H??oe,pe=t.useRef(f.useId()),he=e?`${e} ${pe.current}`:pe.current,{enabledElementRef:be,readonlyElementRef:Fe,focusProps:fe,isFocused:ye}=o.useFocusableTextField({isDisabled:re,isReadonly:de,ref:J}),{isMaxLengthReached:ge,valueLength:Le,onFilteredInput:Ce}=k.useLengthFilter({maxLength:U,maxLengthUnit:E,value:z,onInput:ee,onCommit:se}),ve=[...w??[],...ge?[{detail:Q,severity:"info"}]:[]],{formFieldContext:Ae,inputProps:Se,labelProps:Re,textFieldProps:Te,userAssistanceProps:Ie}=h.useTextField({ariaDescribedBy:de||re?e:he,contentVariant:"textarea",helpSourceLink:F,helpSourceText:g,isDisabled:re,isFocused:ye,isReadonly:de,isRequiredShown:R,labelEdge:ce,messages:ve,styleVariant:W,userAssistanceDensity:me,value:z}),je=t.useCallback((()=>{const e=be.current,s=e?e.value.length:null;be.current?.setSelectionRange(s,s),be.current?.focus()}),[be]),Ue="none"!==ce?s.jsx(r.Label,{...Re,children:T}):void 0,_e={label:"none"!==ce?Ue:void 0,labelEdge:"none"!==ce?ce:void 0,labelStartWidth:"none"!==ce?ue:void 0},Ee="none"===ce?T:void 0,we="efficient"===me||"reflow"===me?re||de?"efficient"!==me?void 0:s.jsx(v.InlineUserAssistance,{userAssistanceDensity:me,...Ie}):s.jsx(v.InlineUserAssistance,{assistiveText:a,fieldLabel:T,helpSourceLink:F,helpSourceText:g,messages:ve,isRequiredShown:R,userAssistanceDensity:me,...Ie}):void 0,Pe=t.useRef(null),De="compact"===me?s.jsx(A.CompactUserAssistance,{anchorRef:Pe,messages:ve,assistiveText:a,...Ie}):void 0;if(de){const e=s.jsx(u.ReadonlyTextFieldInput,{"aria-describedby":Se["aria-describedby"],"aria-label":Ee,"aria-labelledby":Re.id,as:"textarea",elementRef:Fe,rows:V,autoFocus:c,textAlign:xe,value:z,variant:"textarea",hasEmptyLabel:""===T&&"none"===ce,hasInsideLabel:void 0!==T&&"inside"===ce});return s.jsx(i.FormFieldContext.Provider,{value:Ae,children:s.jsx(x.ReadonlyTextField,{role:"presentation",columnSpan:b,compactUserAssistance:De,inlineUserAssistance:we,ref:Pe,testId:X,variant:"textarea",mainContent:e,resize:M,..._e})})}const Me=void 0!==U,ke=s.jsxs(s.Fragment,{children:[s.jsx(d.TextFieldInput,{as:"textarea","aria-label":Ee,autoComplete:l,autoFocus:c,currentCommitValue:Y,hasEmptyLabel:""===T&&"none"===ce,hasInsideLabel:void 0!==Ue&&"inside"===ce,isRequired:S,inputRef:be,onCommit:se,onInput:Ce,placeholder:D,role:N,rows:V,textAlign:xe,value:z,...Se}),"remaining"===_&&Me&&s.jsx($,{maxLength:U,valueLength:Le,onClick:je}),Me&&s.jsx(P.HiddenAccessible,{id:pe.current,isHidden:!0,children:K.formControl_maxLength({MAX_LENGTH:`${U}`})}),Me&&ye&&s.jsx(p.MaxLengthLiveRegion,{maxLength:U,valueLength:Le,testId:X+"_remainingChars"})]});return s.jsx(i.FormFieldContext.Provider,{value:Ae,children:s.jsx(m.TextField,{mainContent:ke,columnSpan:b,compactUserAssistance:De,inlineUserAssistance:we,onBlur:fe?.onFocusOut,onFocus:fe?.onFocusIn,mainFieldRef:Pe,resize:M,testId:X,...Te,..._e})})}));e.MaxLengthCounter=$,e.TextArea=G}));
//# sourceMappingURL=TextArea-2c7af40c.js.map