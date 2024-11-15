define(['exports', './scale-3ae48ed5', './labelUtils-79523a0e', './dimensionUtils-61978138', './utils-2e2a48d1', './getLocale-ae79e654'], (function(t,e,i,n,a,o){"use strict";class r{constructor({scale:t="linear",baselineScaling:e="zero",dataMax:i,dataMin:n,min:a,max:o,viewportMin:r,viewportMax:s,...l}){this.isLog="log"===t,this.isZeroBaseline=!this.isLog&&"zero"===e,this.setDataRange(n,i),this.setViewportRange(r,s,a,o),this.majorIncrement=this.actualToLinear(l.step),this.minorIncrement=this.actualToLinear(l.minorStep),this.minMajorIncrement=this.actualToLinear(l.minStep),this.calcAxisExtents()}setDataRange(t,e){this.dataMin=this.actualToLinear(t),this.dataMax=this.actualToLinear(e),this.isZeroBaseline&&(this.dataMin=Math.min(0,this.dataMin),this.dataMax=Math.max(0,this.dataMax))}setViewportRange(t,e,i,n){this.min=this.actualToLinear(i),this.max=this.actualToLinear(n),this.viewportMin=null==t?this.min:this.actualToLinear(t),this.viewportMax=null==e?this.max:this.actualToLinear(e)}setDefaultMin(t){null==this.min&&(this.isZeroBaseline&&this.dataMin>=0?this.min=0:this.isZeroBaseline||null==this.max?this.min=(Math.ceil(this.dataMin/t)-1)*t:this.min=this.max-t*(Math.floor((this.max-this.dataMin)/t)+1),this.dataMin>=0&&!this.isLog&&(this.min=Math.max(this.min,0)))}setDefaultMax(t){null==this.max&&(this.isZeroBaseline&&this.dataMax<=0?this.max=0:this.isZeroBaseline||null==this.min?this.max=(Math.floor(this.dataMax/t)+1)*t:this.max=this.min+t*(Math.floor((this.dataMax-this.min)/t)+1),this.dataMax<=0&&(this.max=Math.min(this.max,0)))}calcAxisExtents(){const t=null!=this.max?this.max:this.dataMax,e=null!=this.min?this.min:this.dataMin,i=this.calcAxisStep(e,t);let n=this.minMajorIncrement?Math.max(i,this.minMajorIncrement):i;this.dataMin===this.dataMax&&(0===this.dataMin?this.dataMax+=5*n:(this.dataMin-=2*n,this.dataMax+=2*n)),this.setDefaultMin(n),this.setDefaultMax(n),this.max===this.min&&(this.max=100,this.min=0,n=(this.max-this.min)/10),this.viewportMin===this.min&&this.viewportMax===this.max||null==this.viewportMax||null==this.viewportMin||(n=this.calcAxisStep(this.viewportMin,this.viewportMax)),null==this.viewportMin&&(this.viewportMin=this.min),null==this.viewportMax&&(this.viewportMax=this.max),this.calcMajorMinorSteps(n)}calcMajorMinorSteps(t){null!=this.max&&null!=this.min&&(this.majorIncrement||(this.majorTickCount?this.majorIncrement=(this.viewportMax-this.viewportMin)/this.majorTickCount:this.majorIncrement=this.minMajorIncrement?Math.max(t,this.minMajorIncrement):t),this.majorTickCount||(this.majorTickCount=(this.viewportMax-this.viewportMin)/this.majorIncrement,Math.ceil(this.majorTickCount)-this.majorTickCount<1e-10&&(this.majorTickCount=Math.ceil(this.majorTickCount))),this.minorTickCount||(this.minorIncrement?this.minorTickCount=this.majorIncrement/this.minorIncrement:this.isLog?this.minorTickCount=this.majorIncrement:this.minorTickCount=2),this.minorIncrement||(this.minorIncrement=this.majorIncrement/this.minorTickCount))}calcAxisStep(t,e){if(this.majorIncrement)return this.majorIncrement;const i=e-t;if(0===i)return 0===t?10:Math.pow(10,Math.floor(Math.log10(t))-1);if(this.isLog)return Math.floor(i/8)+1;if(this.majorTickCount){const t=i/this.majorTickCount,e=Math.pow(10,Math.ceil(Math.log10(t)-1));let n=t/e;return n=n>1&&n<=1.5?1.5:n>5?10:Math.ceil(n),n*e}return this.getDefaultAxisStep(i)}getDefaultAxisStep(t){const e=Math.log10(t),i=Math.pow(10,Math.ceil(e)-2),n=Math.round(t/i);let a=1;return a=n>=10&&n<=14?2:n>=15&&n<=19?3:n>=20&&n<=24?4:n>=25&&n<=45?5:n>=46&&n<=80?10:20,a*i}linearToActual(t){return this.isLog?Math.pow(10,t):t}actualToLinear(t){if(null!=t)return this.isLog?Math.log10(t):t}getScale(t){const{viewportMin:i,viewportMax:n}=this.getAxisViewport(),a=[this.linearToActual(i),this.linearToActual(n)];return this.isLog?new e.ScaleLog(a,t):new e.ScaleLinear(a,t)}getFirstTick(){return this.isZeroBaseline?Math.ceil(this.viewportMin/this.majorIncrement)*this.majorIncrement:this.min+Math.ceil((this.viewportMin-this.min)/this.majorIncrement)*this.majorIncrement}getAxisViewport(){return{viewportMin:this.viewportMin,viewportMax:this.viewportMax}}getAxisExtent(){return{min:this.min,max:this.max}}getTicks(){let t=this.getFirstTick();const e=[];for(;t<=this.viewportMax;)e.push(this.linearToActual(t)),t+=this.majorIncrement;return e}getMinorTicks(){const t=[];for(let e=-1;e<=this.majorTickCount;e++){const i=e*this.majorIncrement+this.getFirstTick();if(this.isLog&&1==this.majorIncrement&&1==this.minorIncrement)for(let e=2;e<=9;e++){const n=i+Math.log10(e);if(n>this.max)break;n<this.min||t.push(this.linearToActual(n))}else for(let e=1;e<this.minorTickCount;e++){const n=i+e*this.minorIncrement;if(n>this.max)break;n<this.min||t.push(n)}}return t}getStep(){return this.majorIncrement}}const s=.3;function l(t,e,i){let n,a;if(e)a="top"===t?.position?"top":"bottom",n=i?"right":"left";else{n="bottom";a="end"===t?.position?i?"left":"right":i?"right":"left"}return{xAxisPosition:n,yAxisPosition:a}}function h(t,e){return e?"left"===t?"start":"right"===t?"end":"middle":"left"===t?"end":"right"===t?"start":"middle"}function c(t,e,i){const{x:n,y:a,width:o,height:r}=t,s=n+o;let l,h;return"left"===e||"right"===e?(l=a+r,h=a):(l=i?s:n,h=i?n:s),[l,h]}function u(t,e,i){const n=Math.max(0,Math.min(1,null!=i?i:s));return(e?t.height:t.width)*n}function m(t,e,n){if(!n)return 0;const a=n("MW",e),o=i.AXIS_DEFAULTS.labelGap;return Math.floor((.5*a.width+o)/(2*t))}const d={text:"",lines:[],lineProps:[],titleDim:0,dims:{width:0,height:0,x:0,y:0},isTruncated:!1,isRotated:!1};function f(t,e,i,o,r,s,l){if(!t||!l)return d;const h="top"===r||"bottom"===r?o.width:o.height,{lines:c,height:u,width:m,dims:f,lineHeight:g,isTruncated:x}=a.getTextInfo(t,e,h,i,!0,l);if(u>i||0===m||0===u)return d;const p="left"===r||"right"===r,M=a.positionMultilineText(c,f,g,r,o,s);return{text:t,dims:n.getSectionDims(o,r,m,u),titleDim:u,isTruncated:x,lines:"left"===r||"top"===r?c:c.reverse(),lineProps:M,isRotated:p}}const g=["none","thousand","million","billion","trillion","quadrillion"].map(((t,e)=>({scaleFactor:3*e})));function x(t,e,i,n){const a=function(t,e){const i=Math.max(Math.abs(t),Math.abs(e));return function(t){let e=0;if(t<=g[0].scaleFactor)e=g[0].scaleFactor;else if(t>=g[g.length-1].scaleFactor)e=g[g.length-1].scaleFactor;else{for(let i=g.length-1;i>=0;i--)if(g[i].scaleFactor<=t){e=g[i].scaleFactor;break}}return e}(p(i))}(t,e),o=function(t,e,i,n){let a;if(0===i&&t===e){const t=n-p(e);a=t<=0?Math.max(t+3,0):Math.max(t,4)}else{const t=p(i);a=Math.max(n-t,0)}return a}(t,e,i,a),r=Math.pow(10,a);let s=new Intl.NumberFormat(n,{style:"decimal",notation:"compact",numberingSystem:"latn",useGrouping:!1});const l=s.format(r),h=/(\d+)(.*$)/.exec(l),c={style:"decimal",minimumFractionDigits:o,maximumFractionDigits:o};return s=new Intl.NumberFormat(n,c),t=>{if(!h)return"";const e=h[2],i=Number(h[1])/r*t;let n=i.toString();return n=s.format(i),"string"==typeof e&&0!==t&&(n+=e),n}}function p(t){let e=t>=0?t:-t,i=0;if(e<1e-15)return 0;if(e===1/0)return Number.MAX_VALUE;if(e>=10)for(;e>=10;)i+=1,e/=10;else if(e<1)for(;e<1;)i-=1,e*=10;return i}function M(t,e,n,a,o,s,l,m){const[d,g]=c(e,t,n),p=s||new r({...o}),M=p.getScale([d,g]),w="top"===t||"bottom"===t,T=u(e,w,o?.size),b={fontSize:l,...o?.titleStyle},{titleDim:v,...A}=f(o?.title,b,T,e,t,n,m),{width:L,height:S}=A.dims,I=L>0&&S>0,D=I?v+i.AXIS_DEFAULTS.titleGap:0;I&&("left"===t||"right"===t?(e.width-=D,e.x+="left"===t?D:0):(e.height-=D,e.y+="top"===t?D:0));const y={fontSize:l,fill:o?.tickLabel?.style?.color,...o?.tickLabel?.style,textAnchor:h(t,n),dominantBaseline:"middle"},k=p.getTicks(),F=x(k[0],k[k.length-1],p.getStep(),a);let E=0!=o?.tickLabel?.isRendered;const j=E?k.map((t=>{if(o?.tickLabel?.format)return o.tickLabel.format(t);if("log"===o?.scale){return x(t,t,t,a)(t)}return F(t)})):[],G=T-D-i.AXIS_DEFAULTS.labelGap,{maxWidth:U,maxHeight:X,tickLabels:_}=i.getDataAxisLabelsInfo(j,((t,n,a)=>{const o=M.transform(k[n]);return i.getTickLabelInfo(o,t,y,w,!1,!1,!1,w?G:T-D,w?T-D:G,e,m)}),w);E=E&&w?X+i.AXIS_DEFAULTS.labelGap<T-D:U+i.AXIS_DEFAULTS.labelGap<T-D;const P=t=>M.transform(k[t]);let C=0;return E&&(i.updateLabelsDims(U,X,_,P,e,t),C=w?X+i.AXIS_DEFAULTS.labelGap:U+i.AXIS_DEFAULTS.labelGap),{title:I?o?.title:void 0,titleStyle:b,titleProps:I?A:void 0,axisDim:I?C+D:C,tickLabels:_,tickLabelStyle:y,scale:M}}const w=1e3,T=60*w,b=60*T,v=24*b,A=28*v,L=31*v,S=365*v,I=366*v;function D(t,e,n,a,r,s,l,h,d,g){const x="top"===e||"bottom"===e,p=u(n,x,h?.size),M={fontSize:d,...h?.titleStyle},w=h?.timeAxisType||"regular",{titleDim:T,...b}=f(h?.title,M,p,n,e,l,g),{width:v,height:A}=b.dims,L=v>0&&A>0;let S=L?T+i.AXIS_DEFAULTS.titleGap:0;L&&("left"===e||"right"===e?(n.width-=S,n.x+="left"===e?S:0):(n.height-=S,n.y+="top"===e?S:0));const[I,D]=c(n,e,l),F={fontSize:d,fill:h?.tickLabel?.style?.color,...h?.tickLabel?.style,textAnchor:"left"===e?"end":"bottom"===e?"middle":"start",dominantBaseline:"middle"},j=e=>function(t,e,i,n,a,o,r,s){let l;if("skipGaps"===s){if(r.length<1)return n;const a=P(e,o,r),s=P(i,o,r);l=(P(t,o,r)-a)/(s-a)}else l=(t-e)/(i-e);return n+l*(a-n)}(e,a,r,I,D,s,t,h?.timeAxisType),G=o.getLocale();let X=h?.step;const _=i.AXIS_DEFAULTS.labelGap;let V=[];if(null!=X)V=U(a,r,X);else if("mixedFrequency"===w)X=k(r-a),V=U(a,r,X);else{for(let e=0;e<t.length;e++){const i=new Date(t[e].id).getTime();i>=a&&i<=r&&V.push(i)}X=s}const N=Array.isArray(h?.tickLabel?.format)?h?.tickLabel?.format[0]:h?.tickLabel?.format,Y=Array.isArray(h?.tickLabel?.format)?h?.tickLabel?.format[1]:void 0;if("skipGaps"!=w){const t=y(X,r-a);V=function(t,e){let i;const n=new Set;let a=!1,o=t;const r=[],s=t.length;let l=new Date(t[0]);for(let o=1;o<s;o++){const s=new Date(t[o]),h=z(l,s,e);l=s,r.push(h),h<=0||(n.add(h),i?h!==i&&(a=!0):i=h)}if(a){const e=function(t){let e=t[0];for(let i=1;i<t.length;i++)if(e=B(e,t[i]),1===e)return 1;return e}([...n]);o=[],o.push(t[0]);for(let i=1;i<s;i++){const n=t[i];let a=t[i-1];const s=r[i-1];if(s<=e){o.push(n);continue}const l=s/e,h=l-1,c=Math.round((n-a)/l);for(let t=1;t<=h;t++)a+=c,o.push(a);o.push(n),a=n}}return o}(V,t),V.length>1&&(X=(V[V.length-1]-V[0])/(V.length-1));const e=E(new Date(V[0]||a),void 0,!x,!1,G,t,N,Y)[0],i=g?.(e,F);if(i){const t=((x?i.width:i.height)+function(t,e){return e?.79*t:.28*t}(i.height,x))*(V.length-1);t>Math.abs(D-I)&&(X=k(r-a),V=U(a,r,X))}}0===V.length&&(V=[a]);const R=y(X,r-a),W=0!=h?.tickLabel?.isRendered;let H=W,Z=W,q=[];const O=Math.abs(D-I)/V.length;if(W){const{labelInfos1:t,labelInfos2:a}=function(t,e,i,n,a){const r=o.getLocale(),s=[],l=[],h=[],c=[];let u,m=!0;for(let o=0;o<t.length;o++){const d=t[o],f=i(d),g=new Date(d),[x,p]=E(g,u,!1,!1,r,e,n,a);null!=x&&(s.push({text:x,coord:f}),l.push(f)),null!=p&&(h.push({label2:p,coord:f}),c.push(f),m=!1),u=g}return{labelInfos1:s,labelInfos2:h,coords1:l,coords2:c,isOneLevel:m}}(V,R,j,N,Y),r=m(O,F,g),s=(e,a)=>{const o=t[a].coord;return o&&e?i.getTickLabelInfo(o,e,F,x,!1,!1,!1,1/0,1/0,n,g):{text:"",dims:{width:0,height:0,x:0,y:0},lines:[],isTruncated:!1,didNotFit:!1,lineProps:[]}},l=(t,e)=>{const o=a[e]?.coord;return o&&t?i.getTickLabelInfo(o,t,F,x,!1,!1,!1,1/0,1/0,n,g):{text:"",dims:{width:0,height:0,x:0,y:0},lines:[],lineProps:[],didNotFit:!1,isTruncated:!1}},{maxWidth:h,maxHeight:c,tickLabels:u}=i.getGroupAxisLabelsInfo(t.map((t=>t.text)),s,x,!1,!1,r);S=x?c+_:h+_,H=S<p-A;const{maxWidth:d,maxHeight:f,tickLabels:M}=i.skipLabelsGreedy(a.map((t=>t.label2)),l,x),w=x?S+f+_:S+d+_;if(Z=w<p-A,H){const a=e=>t[e].coord;i.updateLabelsDims(h,c,u,a,n,e),q=q.concat(u),S+=A}if(Z){const t=t=>a[t].coord;i.updateLabelsDims(d,f,M,t,n,e),q.forEach((t=>{t.lineProps[0]&&(t.lineProps[0].y-=t.lineProps[0].height)})),q=q.concat(M),S=w+A}}const $={transform:j,range:()=>[I,D],domain:()=>[a,r],invert:e=>function(t,e,i,n,a,o,r,s){const l=(t-e)/(i-e);if("skipGaps"===s){const t=P(n,o,r);return function(t,e,i){const n=Math.min(Math.max(Math.ceil(t),0),i.length),a=n-1,o=void 0!==i[a]?C(i[a].id):C(i[0].id)-e,r=void 0!==i[n]?C(i[n].id):C(i[i.length-1].id)+e;return o+(t-a)*(r-o)}(t+l*(P(a,o,r)-t),o,r)}return n+l*(a-n)}(e,I,D,a,r,s,t,h?.timeAxisType||"enabled")};return{title:L?h?.title:void 0,titleProps:L?b:void 0,titleStyle:M,axisDim:S,scale:$,tickLabels:q,groupWidth:O,tickLabelStyle:F}}function y(t,e){return t>=S||e>=6*S?S:t>=A||e>=6*A?A:t>=v||e>=6*v?v:t>=b||e>=6*b?b:t>=T||e>=6*T?T:w}function k(t){return t>=6*S?S:t>=6*A?A:t>=6*v?v:t>=v?3*b:t>=6*b?b:t>=b?15*T:t>=30*T?5*T:t>=6*T?T:t>=T?15*w:t>=30*w?5*w:w}function F(t,e,i){if(!i)return"";const n=i(t.getTime());return(e?i?.(e.getTime()):void 0)!==n||null==n?n:""}function E(t,e,i,n,a,o,r,s){let l=null,h=null;return r||s?(r&&(l=F(t,e,r)),s&&(h=F(t,e,s)),[l,h]):(o===S?l=j(t,a,!1,!1,!0):o===A?(null!=e&&e.getMonth()==t.getMonth()||(l=j(t,a,!1,!0,!1)),null!=e&&e.getFullYear()==t.getFullYear()||(h=j(t,a,!1,!1,!0))):o===v?i?l=j(t,a,!0,!0,!0):(null!=e&&e.getDate()==t.getDate()||(l=j(t,a,!0,!1,!1)),null==e||e.getFullYear()!=t.getFullYear()?h=j(t,a,!1,!0,!0):e.getMonth()!=t.getMonth()&&(h=j(t,a,!1,!0,!1))):(o===b?null!=e&&e.getHours()==t.getHours()||(l=G(t,a,!1,!1)):o===T?null!=e&&e.getMinutes()==t.getMinutes()||(l=G(t,a,!0,!1)):null!=e&&e.getSeconds()==t.getSeconds()||(l=G(t,a,!0,!0)),n?null!=e&&e.getDate()==t.getDate()||(h=j(t,a,!0,!0,!1)):null==e||e.getFullYear()!=t.getFullYear()?h=j(t,a,!0,!0,!0):e.getMonth()!=t.getMonth()?h=j(t,a,!0,!0,!1):e.getDate()!=t.getDate()&&(h=j(t,a,!0,!1,!1))),[l,h])}function j(t,e,i,n,a){const o={year:a?"numeric":void 0,month:n?"short":void 0,day:i?"numeric":void 0};return t.toLocaleDateString(e,o)}function G(t,e,i,n){const a={hour:"2-digit",minute:i?"2-digit":void 0,second:n?"2-digit":void 0};return t.toLocaleTimeString(e,a)}function U(t,e,i){const n=new Date(t),a=n.getTimezoneOffset();n.setMonth(0,1),n.setHours(0,0,0,0);let o=n.getTime();const r=[];if(i>=S&&i<=I){for(;o<t;)o=X(o);for(;o<=e;)r.push(o),o=X(o)}else if(i>=A&&i<=L){for(;o<t;)o=_(o);for(;o<=e;)r.push(o),o=_(o)}else{const s=60*(a-n.getTimezoneOffset())*1e3,l=i<A?s:0;for(o+=Math.ceil((t-o-l)/i)*i+l;o<=e;)r.push(o),o+=i}return r}function X(t){const e=new Date(t);return e.setFullYear(e.getFullYear()+1),e.getTime()}function _(t){const e=new Date(t);return e.setMonth(e.getMonth()+1),e.getTime()}function P(t,e,i){let n=i.length;for(let e=0;e<i.length;e++)if(t<=new Date(i[e].id).getTime()){n=e;break}const a=n-1,o=void 0!==i[a]?new Date(i[a].id).getTime():new Date(i[0].id).getTime()-e;return a+(t-o)/((void 0!==i[n]?new Date(i[n].id).getTime():new Date(i[i.length-1].id).getTime()+e)-o)}function C(t){return new Date(t).getTime()}function V(t){if(t)return new Date(t).getTime()}function N(t,e={},i,n){let{start:a,end:o}=n;const{viewportMin:r,viewportMax:s,viewportEndGroup:l,viewportStartGroup:h}=e;let c=V(r||h),u=V(s||l);null==a&&(a=c),null==o&&(o=u);const m=function(t,e,i){return i!=e&&t.length>1?(i-e)/(t.length-1):i-e>0?i-e:6*T}(t,a,o),d=i*m,f=a-d,g=o+d;c=c||f,u=u||g;let x=0,p=Math.max(0,t.length-1);return t.forEach(((t,e)=>{const i=new Date(t.id).getTime();i<c&&(x=e),i<u&&(p=e)})),{viewportMin:c,viewportMax:u,viewportStartGroup:h,viewportEndGroup:l,startIndex:x,endIndex:p,min:f,max:g,averageInterval:m}}function z(t,e,i){const n=t.getTimezoneOffset(),a=e.getTimezoneOffset(),o=e.getTime(),r=1e3*(n-a)*60;let s;return r>0&&e.setTime(o+r),s=i===S?e.getFullYear()-t.getFullYear():i===A?12*(e.getFullYear()-t.getFullYear())+(e.getMonth()-t.getMonth()):Math.round((e.getTime()-t.getTime())/i),r>0&&e.setTime(o),s}function B(t,e){return 0===t?e:B(e%t,t)}function Y(t,e,i,n,a,o,r,s,l){let h=l?.dataMin,c=l?.dataMax;const u=function(t,e,i,n,a,o,r,s,l){let h=Number.MAX_VALUE,c=-Number.MAX_VALUE;const u=new Map;for(let m=0;m<e.length;m++){let e=0,d=0;t.forEach(((t,f)=>{const g=a(f,m);if(g&&null!=g.value&&(u.set(g.id,g),m>=i&&m<=n)){if(null!=g?.id&&s.has(g.id)&&"withRescale"===l||g.value<=0&&r)return;o?(e+=g.value>0?g.value:0,d+=g.value<0?g.value:0,h=Math.min(r?e:d,h),c=Math.max(e,c)):(h=Math.min(h,g.value),c=Math.max(c,g.value))}}))}return{dataMin:h,dataMax:c,idToDataMap:u}}(t,e,n,a,i,o,"log"===l?.scale,r,s);return null==h&&(h=u.dataMin),null==c&&(c=u.dataMax),{dataMax:c,dataMin:h,idToDataMap:u.idToDataMap}}function R(t,e,i,n){let a=t;for(;a<i.length;){if(!!n(e,a))return a;a+=1}return-1}function W(t,e,i){let n=t;for(;n>=0;){if(!!i(e,n))return n;n-=1}return-1}function H(t,e,i,n){const a=t=>C(e[t].id);if(e.length<2)return 0;if(a(0)>t)return Math.min(...i.map(((t,i)=>R(0,i,e,n))));if(a(e.length-1)<t)return Math.max(...i.map(((t,i)=>W(e.length-1,i,n))));const o=function(t,e,i,n){let a=t,o=e;const r=(t,e)=>e-t==1&&n(t)<=i&&i<=n(e);let s=0,l=Math.floor((o-a)/2);for(;!r(a,o);){const t=s?Math.floor(a+l):Math.ceil(o-l);0<=i-n(t)?(a=t,s=s?0:1):o=t,l=Math.floor((o-a)/2)}return i-n(a)<n(o)-i?a:o}(0,e.length-1,t,a),r=Math.max(...i.map(((t,e)=>W(o,e,n))));if(r===o)return r;const s=Math.min(...i.map(((t,i)=>R(o,i,e,n))));return a(s)-t<t-a(r)?s:r}const Z=10,q=8;function O(t,e,i,n,a){const o="left"===i;let r,s,l;return"bottom"===e||"top"===e?(r=J(t,e,o?a:0,o?0:a,n),s=$(t,i,"bottom"===e?n:0,"top"===e?n:0,a),l={x:r.x,y:s.y,width:r.width,height:s.height}):(r=$(t,e,"bottom"===i?a:0,"bottom"===i?0:a,n),s=J(t,i,"left"===e?n:0,"left"===e?0:n,a),l={x:s.x,y:r.y,width:s.width,height:r.height}),{xSpace:r,ySpace:s,plotAreaSpace:l}}function $(t,e,i,n,a){return{x:"left"===e?t.x:t.x+t.width-a,width:a,y:t.y+n,height:t.height-i-n}}function J(t,e,i,n,a){return{x:t.x+i,width:t.width-i-n,y:"top"===e?t.y:t.y+t.height-a,height:a}}t.findNearestDataPoint=function(t,e,i,n,a,o,r,s,l,h,c,u){return(m,d)=>{let f=[],g=Math.round(m),x=i.transform(g);const p="mixedFrequency"===u;"enabled"!==u&&"skipGaps"!==u||(g=H(m,e,t,a),x=i.transform(C(e[g].id))),f=t.map(((t,e)=>({groupIndex:g,seriesIndex:e}))),p&&(f=function(t,e,i,n){return e.map(((e,a)=>{let o=Number.MAX_VALUE,r=0;for(let e=0;e<i.length;e++){const i=n(a,e)?.x;if(!i)continue;const s=C(i),l=Math.abs(t-s);l<o&&(o=l,r=e)}return{seriesIndex:a,groupIndex:r}}))}(m,t,e,a));let M,w=0,T=0,b=Number.MAX_VALUE,v=Number.MAX_VALUE,A=0,L=x;return f.forEach((({seriesIndex:t,groupIndex:e})=>{const u=a(t,e);if(!u||c?.has(u.id)||null==u.value||l&&u.value<=0)return;let f=0,S=0;if(p)f=Math.abs(i.transform(C(u?.x))-i.transform(m)),S=Math.abs(n.transform(u.value)-n.transform(d));else if(o){const t=(u.value<0?T:w)+u.value/2;f=Math.abs(d-t)}else{const{offset:e,dataWidth:a}=r(t),o=e+x+a/2;0===a?f=Math.abs(n.transform(u.value)-n.transform(d)):(f=Math.abs(i.transform(m)-o),f<b&&(L=o))}f<b?(b=f,A=t,g=e,M=s(u.value,n,o,l,h,T,w),p&&(v=S)):f===b&&p&&S<v&&(b=f,A=t,g=e,v=S,M=s(u.value,n,o,l,h,T,w)),o&&(w+=u.value>0?u.value:0,T+=u.value<0?u.value:0)})),{seriesIndex:A,groupIndex:g,y:M,x:p?i.transform(C(a(A,g)?.x)):o?x:L}}},t.getAvailSpace=function(t,e){const i=function(t,e){const i=Math.min(t/400,1),n=Math.min(e/300,1);return{width:i*Z,height:n*q}}(t,e);return{width:t-2*i.width,height:e-2*i.height,x:i.width,y:i.height}},t.getAxesPosition=l,t.getGroupCenterCoord=function(t,e,i,n,a){return a?"mixedFrequency"===a?i.transform(new Date(n.x).getTime()):i.transform(new Date(t.id).getTime()):i.transform(e)},t.getLayoutInfo=function(t,a,o,s,d,g,x,p,w,T,b,v,A,L,S){const I=null!=s?.timeAxisType,{xAxisPosition:y,yAxisPosition:k}=l(d,w,T);let F;if(I){const e=function(t,e,i,n){const a={start:Number.MAX_VALUE,end:-Number.MAX_VALUE},o=t.length;return"mixedFrequency"!=n.timeAxisType&&o>0?(a.start=V(t[0].id),a.end=V(t[o-1].id)):e.forEach(((e,n)=>{t.forEach(((t,e)=>{const o=V(i(n,e)?.x);o&&(a.start=Math.min(a.start,o),a.end=Math.max(a.end,o))}))})),a.start===Number.MAX_VALUE&&a.end===-Number.MAX_VALUE&&(a.start=void 0,a.end=void 0),a}(a,t,o,s);F=N(a,s,A,e)}else F=function(t,e={},i){let{viewportMin:n,viewportMax:a,viewportEndGroup:o,viewportStartGroup:r}=e;return null!=n&&(r=t[Math.max(0,Math.ceil(n))].id),null!=r&&null==n&&(n=t.findIndex((t=>t.id===r))),null==n&&(n=-1*i,r=t[0]?.id),null!=a&&(o=t[Math.min(t.length-1,Math.floor(a))].id),null!=o&&null==a&&(a=t.findIndex((t=>t.id===o))),null==a&&(a=t.length-1+i,o=t[Math.floor(a)]?.id),{min:-1*i,max:t.length-i,viewportMin:n,viewportMax:a,viewportStartGroup:r,viewportEndGroup:o,startIndex:Math.max(0,Math.ceil(n)),endIndex:Math.min(Math.floor(a),a)}}(a,s,A);const{dataMax:E,dataMin:j,idToDataMap:G}=Y(t,a,o,F.startIndex,F.endIndex,b,x,p,d),U=new r({...d,dataMax:E,dataMin:j}),{axisDim:X}=M(k,n.cloneDimension(g),T,L,d,U,v,S),_="bottom"===y,{xSpace:P}=O(g,y,k,_?g.height:g.width,X),{axisDim:C,scale:z,groupWidth:B,...R}=I?D(a,y,P,F.viewportMin,F.viewportMax,F.averageInterval,T,s,v,S):function(t,n,a,o,r,s,l,d,g,x,p,M){const w="top"===n||"bottom"===n,T=u(a,w,x?.size),b={fontSize:p,...x?.titleStyle},{titleDim:v,...A}=f(x?.title,b,T,a,n,o,M),{width:L,height:S}=A.dims,I=L>0&&S>0,D=I?v+i.AXIS_DEFAULTS.titleGap:0;I&&("left"===n||"right"===n?(a.width-=D,a.x+="left"===n?D:0):(a.height-=D,a.y+="top"===n?D:0));const[y,k]=c(a,n,o),F=g?[s,r]:[r,s],E=new e.ScaleLinear(F,[y,k]),j=Math.abs(k-y)/(s-r),G={fontSize:p,fill:x?.tickLabel?.style?.color,...x?.tickLabel?.style,textAnchor:h(n,o),dominantBaseline:"middle"};let U=0!=x?.tickLabel?.isRendered;const X=function(t,e,i){const n=[];for(let a=e;a<=i;a++)n.push(t[a].name||t[a].id);return n}(t,l,d),_=m(j,G,M),P=T-D-i.AXIS_DEFAULTS.labelGap,C="nowrap"!=G.whiteSpace,V=0!=x?.tickLabel?.autoRotate,{maxWidth:N,maxHeight:z,tickLabels:B}=i.getGroupAxisLabelsInfo(X,((t,e,n,o,r)=>{const s=E.transform(e+l);return i.getTickLabelInfo(s,t,G,w,n,r,o,w?j:P,w?P:j,a,M)}),w,V,C,_);U=U&&w?z+i.AXIS_DEFAULTS.labelGap<T-D:N+i.AXIS_DEFAULTS.labelGap<T-D;const Y=t=>E.transform(l+t);let R=0;return U&&(i.updateLabelsDims(N,z,B,Y,a,n),R=w?z+i.AXIS_DEFAULTS.labelGap:N+i.AXIS_DEFAULTS.labelGap),B.forEach((t=>{t.dataProps={"data-oj-object":"group","data-oj-group-index":t.index.toString(),"data-oj-text":t.isTruncated?t.text:void 0}})),{title:I?x?.title:void 0,titleProps:I?A:void 0,titleStyle:b,tickLabels:B,tickLabelStyle:G,axisDim:I?R+D:R,scale:E,groupWidth:j}}(a,y,P,T,F.viewportMin,F.viewportMax,F.startIndex,F.endIndex,w,s,v,S),{ySpace:W}=O(g,y,k,C,_?g.width:g.height),H=M(k,W,T,L,d,U,v,S),{axisDim:Z,scale:q,...$}=H,{plotAreaSpace:J}=O(g,y,k,C,Z);return{xViewportExtent:{viewportMin:F.viewportMin,viewportMax:F.viewportMax},xIndexExtent:{startIndex:F.startIndex,endIndex:F.endIndex},yViewportExtent:U.getAxisViewport(),yAxisExtent:U.getAxisExtent(),xAxisExtent:{min:F.min,max:F.max},xProps:R,xScale:z,xAxisPosition:y,groupWidth:B,yProps:$,yScale:q,yMaxDim:Z,yAxisPosition:k,yMajorTicks:U.getTicks(),yMinorTicks:U.getMinorTicks(),plotAreaSpace:J,idToDataMap:G}},t.getMixedFreqGroupCenter=function(t,e){return t.transform(new Date(e.x).getTime())},t.getScrollBarSpace=function(t,e,i){const a={x:0,y:0,height:0,width:0},o=n.cloneDimension(t);return"off"===e||("left"===i?(a.x=t.x,a.y=t.y,a.width=12,a.height=t.height,o.x+=a.width+6,o.width-=a.width+6):"right"===i?(a.x=t.x+t.width-12,a.width=12,a.height=t.height,a.y=t.y,o.width-=a.width+6):(a.x=t.x,a.y=t.y+t.height-12,a.height=12,a.width=t.width,o.height-=a.height+6)),{scrollDims:a,availSpace:o}},t.updateScrollBarSpace=function(t,e,i,a){const o=n.cloneDimension(t);return e?(o.width-=a,o.x+=i?0:a):o.height-=a,o}}));
//# sourceMappingURL=layoutUtils-09c68ca9.js.map
