define(['exports', 'preact/jsx-runtime', './LabelValueLayout-89e9f1be', './useComponentTheme-5aa41a8f', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './Flex-1f27b601', './classNames-08d99695', './InputGroupContext-372087af', './useInputGroupContext-e6e19f4f', './useUser-6dd85af9', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './StyledTextField-8ac3bbb4', './useTestId-82cf22a4'], (function(e,t,n,s,a,i,o,r,d,l,u,c,x,h){"use strict";const p=({contentVariant:e="input",insideLabel:n,mainContent:a,startContent:d,statusVariant:x="none",styleVariant:h="default",endContent:p,resize:b,rootRef:m,hasZeroStartMargin:C})=>{const{isDisabled:F,isFocused:g,isLoading:f}=i.useFormFieldContext(),{direction:L}=u.useUser(),T="ltr"===L,M=void 0!==n,v=l.useInputGroupContext(),y=null!==v,V=v?v.last?T?"groupRight":"groupLeft":0===v.index?T?"groupLeft":"groupRight":"groupMiddle":void 0,{variantClasses:j,styles:{textFieldContainerBase:I}}=s.useComponentTheme(c.TextFieldRedwoodTheme,{statusVariant:x,styleVariant:h,contentVariant:e,insideLabel:M?"hasInsideLabel":"noInsideLabel",focused:g?"isFocused":"notFocused",disabled:F?"isDisabled":"notDisabled",loading:f?"isLoading":"notLoading",resize:b??"none",withinGroup:y?"isWithinGroup":void 0,inputGroupPosition:V}),{variantClasses:S}=s.useComponentTheme(c.TextFieldRedwoodTheme,{startContent:M?"hasInsideLabel":"noInsideLabel",startContentMargin:C?"noStartMargin":"hasStartMargin",startContentDisabled:F?"isDisabled":"notDisabled"}),{variantClasses:D,styles:{textFieldEndContent:R}}=s.useComponentTheme(c.TextFieldRedwoodTheme,{middleContent:e,textAreaResizeDirection:b&&"textarea"===e?L:void 0});return t.jsxs("div",{role:"presentation",class:r.classNames([j,I]),ref:m,children:[d&&t.jsx("span",{class:S,children:t.jsx(o.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:d})}),t.jsxs("div",{class:D,children:[n,a]}),p&&t.jsx("span",{class:R,children:t.jsx(o.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:p})})]})};e.TextField=({contentVariant:e,id:s,endContent:a,mainContent:i,startContent:o,columnSpan:r,compactUserAssistance:d,inlineUserAssistance:l,label:u,labelEdge:c,labelStartWidth:b,mainFieldRef:m,resize:C,statusVariant:F,styleVariant:g,hasZeroStartMargin:f,rootRef:L,onFocus:T,onBlur:M,onKeyDown:v,onMouseDown:y,onMouseEnter:V,onMouseLeave:j,testId:I})=>{const S=h.useTestId(I),D=void 0!==u&&("start"===c||"top"===c),R=t.jsx(p,{contentVariant:e,endContent:a,mainContent:i,resize:C,rootRef:m,startContent:o,statusVariant:F,styleVariant:g,hasZeroStartMargin:f,...D?{}:{insideLabel:u}}),w=t.jsxs(t.Fragment,{children:[d,R,l]}),E=D?t.jsx(n.LabelValueLayout,{label:u,labelEdge:c,labelStartWidth:b,children:w}):w;return t.jsx(x.StyledTextField,{id:s,columnSpan:r,hasInsideLabel:void 0!==u&&"inside"===c,onFocusIn:T,onFocusOut:M,onKeyDown:v,onMouseDown:y,onMouseEnter:V,onMouseLeave:j,ref:L,variant:g,...S,children:E})}}));
//# sourceMappingURL=TextField-0fc70892.js.map