define(['exports', 'preact/jsx-runtime', '@testing-library/preact', '@testing-library/user-event', 'chai', './resources/nls/en/bundle', './clientHints-030d25aa', './Text-e132dec0', './View-8701dec6', './Flex-1f27b601', './LayerHost-eab40731', './EnvironmentProvider-46d0a245', './Center-5f845605', './DragHandle-351a20be', './Button-43090a22', './Avatar-27526b67'], (function(e,t,a,i,r,c,s,l,n,d,u,o,p,x,g,f){"use strict";function b(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var y=b(i);const w=(e,t)=>[...Array(e)].map(((e,a)=>({id:t?a:`${a}`,name:`Employee ${a}`,title:`Employee title ${a}`,initials:`E${a}`}))),q=async()=>a.screen.findByRole("grid"),A=async(e="row")=>a.screen.findAllByRole(e),h=async(e="gridcell")=>a.screen.findAllByRole(e),k=(e,t)=>{a.fireEvent.click(e,t)},m=(e,t)=>{a.fireEvent.keyDown(e,{key:t,code:t,shiftKey:!0,metaKey:!0})};e.CardContent=({context:e,showButton:a,isReorderEnabled:i})=>{const r=i&&t.jsx(o.RootEnvironmentProvider,{environment:{mode:"test"},children:t.jsx(p.Center,{children:t.jsx(x.DragHandle,{testId:`drag-icon-${e.metadata.key}`})})}),c=a&&t.jsx(n.View,{paddingBlockStart:"1x",children:t.jsxs(d.Flex,{direction:"row",wrap:"wrap",gap:"1x",width:"100%",children:[t.jsx(g.Button,{variant:"outlined",size:"md",label:"A"}),t.jsx(g.Button,{variant:"outlined",size:"md",label:"B"})]})});return t.jsxs(n.View,{padding:"6px",children:[r,t.jsxs(n.View,{padding:"10px",paddingBlockEnd:0,children:[t.jsx(f.Avatar,{initials:e.data.initials,size:"xl"}),t.jsxs(n.View,{paddingBlockStart:"2x",children:[t.jsx(l.Text,{variant:"primary",size:"md",lineClamp:1,children:e.data.name}),t.jsx(l.Text,{variant:"secondary",size:"md",lineClamp:1,children:e.data.title})]})]}),t.jsxs(n.View,{padding:"10px",paddingBlockStart:0,children:[c,e.selector?.()]})]})},e.getItems=A,e.getRoot=q,e.keyboardReorder=m,e.mouseItemSelection=k,e.populateData=w,e.testRender=({GenericCardGrid:e,ActionCardGrid:i,SelectionCardGrid:l,ContentUpdatableCardGrid:n})=>{it("initial render",(async function(){const i=w(100);a.render(t.jsx(e,{data:i}));const c=await A("gridcell");r.expect(c.length).eq(25)})),it("checking key type - string key",(async()=>{const i=w(3);a.render(t.jsx(e,{data:i}));const c=await A("gridcell");r.expect(void 0===c[0].dataset.ojKeyType).eq(!0),r.expect(void 0===c[1].dataset.ojKeyType).eq(!0),r.expect(void 0===c[2].dataset.ojKeyType).eq(!0)})),it("checking key type - numeric key",(async()=>{const i=w(3,!0);a.render(t.jsx(e,{data:i}));const c=await A("gridcell");r.expect(c[0].dataset.ojKeyType).eq("number"),r.expect(c[1].dataset.ojKeyType).eq("number"),r.expect(c[2].dataset.ojKeyType).eq("number")})),it("aria attributes - multiselectable and selected, selectionMode is none",(async()=>{const e=w(2);a.render(t.jsx(l,{data:e}));const i=await A("gridcell"),c=await q();r.expect(c.getAttribute("aria-multiselectable")).eq(null),r.expect(i[0].getAttribute("aria-selected")).eq(null),r.expect(i[1].getAttribute("aria-selected")).eq(null)})),it("aria attributes - multiselectable and selected, selectionMode is single",(async()=>{const e=w(2);a.render(t.jsx(l,{data:e,selectionMode:"single",selectedKeys:new Set(["1"])}));const i=await A("gridcell"),c=await q();r.expect(c.getAttribute("aria-multiselectable")).eq("false"),r.expect(i[0].getAttribute("aria-selected")).eq("false"),r.expect(i[1].getAttribute("aria-selected")).eq("true")})),it("aria attributes - multiselectable and selected, selectionMode is multiple",(async()=>{const e=w(3);a.render(t.jsx(l,{data:e,selectionMode:"multiple",selectedKeys:new Set(["1","2"])}));const i=await A("gridcell"),c=await q();r.expect(c.getAttribute("aria-multiselectable")).eq("true"),r.expect(i[0].getAttribute("aria-selected")).eq("false"),r.expect(i[1].getAttribute("aria-selected")).eq("true"),r.expect(i[2].getAttribute("aria-selected")).eq("true")})),"undefined"==typeof jest&&(it("content focusBehavior - valid case",(async()=>{const e=w(3);a.render(t.jsx(i,{data:e}));const c=await A("gridcell");await y.default.tab(),await a.waitFor((()=>{r.expect(c[0].matches(":focus-within")).to.be.true}))})),it("content focusBehavior - invalid case",(async()=>{const e=w(3);a.render(t.jsx(i,{data:e,showButton:!0}));const c=await q();await y.default.tab(),await a.waitFor((()=>{r.expect(c.matches(":focus")).to.be.true}))}))),it("memoization - update memoized children",(async()=>{const e=w(3),{queryByTestId:i}=a.render(t.jsx(n,{data:e})),c=i(e[0].id),s=i(e[1].id),l=i(e[2].id);r.expect(c?.innerHTML,"the 1st item initial count should be 0").eq("0"),r.expect(s?.innerHTML,"the 2nd item initial count should be 0").eq("0"),r.expect(l?.innerHTML,"the 3rd item initial count should be 0").eq("0");const d=i("mybutton");await y.default.click(d),r.expect(c?.innerHTML,"the 1st item new count should be 1").eq("1"),r.expect(s?.innerHTML,"the 2nd item new count should be 1").eq("1"),r.expect(l?.innerHTML,"the 3rd item new count should be 1").eq("1")})),it("reorder - fire Drag and Drop Event",(async()=>{const i=w(5),{queryByTestId:c}=a.render(t.jsx(e,{data:i,isReorderEnabled:!0}));let s=await A("gridcell");const l=s.length,n=c("drag-icon-0"),d=c("drag-icon-2"),u=s[0];var o,p;o=n,p=d,a.fireEvent.dragStart(o),a.fireEvent.dragEnter(p),a.fireEvent.drop(p),a.fireEvent.dragEnd(o),await a.waitFor((async()=>{s=await A("gridcell");const e=s[2];r.expect(u).equals(e),r.expect(s.length).equal(l)}))})),it("reorder - reorder the first item to right using keyboard",(async()=>{const i=w(5);a.render(t.jsx(e,{data:i,isReorderEnabled:!0}));const c=await q();let s=await A("gridcell");const l=s.length,n=s[0];k(n),m(c,"ArrowLeft"),await a.waitFor((async()=>{s=await A("gridcell");const e=s[0];r.expect(n).equals(e),r.expect(s.length).equal(l)})),m(c,"ArrowRight"),await a.waitFor((async()=>{s=await A("gridcell");const e=s[1];r.expect(n).equals(e),r.expect(s.length).equal(l)})),m(c,"ArrowRight"),await a.waitFor((async()=>{s=await A("gridcell");const e=s[2];r.expect(n).equals(e),r.expect(s.length).equal(l)}))})),it("reorder - reorder the last item to left using keyboard",(async()=>{const i=w(5);a.render(t.jsx(e,{data:i,isReorderEnabled:!0}));const c=await q();let s=await A("gridcell");const l=s.length,n=s[s.length-1];k(n),m(c,"ArrowRight"),await a.waitFor((async()=>{s=await A("gridcell");const e=s[s.length-1];r.expect(n).equals(e),r.expect(s.length).equal(l)})),m(c,"ArrowLeft"),await a.waitFor((async()=>{s=await A("gridcell");const e=s[s.length-2];r.expect(n).equals(e),r.expect(s.length).equal(l)})),m(c,"ArrowLeft"),await a.waitFor((async()=>{s=await A("gridcell");const e=s[s.length-3];r.expect(n).equals(e),r.expect(s.length).equal(l)}))})),"undefined"==typeof jest&&it("reorder - instruction text should exist when reorder is enabled",(async()=>{const{deviceType:i,platform:l}=s.getClientHints(),n="windows"===l?c.default.accControlKey():c.default.accCommandKey(),d="phone"===i||"tablet"===i?"":c.default.accReorderInstructions({keyPressed:n}),u=w(3),{rerender:o}=a.render(t.jsx(e,{data:u,isReorderEnabled:!0}));let p=a.screen.queryByText(d);r.expect(p).not.to.be.null,o(t.jsx(e,{data:u})),p=a.screen.queryByText(d),r.expect(p).to.be.null})),"undefined"==typeof jest&&it("scroll into view - when cardview regains focus",(async()=>{const i=w(10);a.render(t.jsx(e,{data:i,initialCurrentKey:i[9].id}));const c=await q();await a.waitFor((()=>{r.expect(c.scrollTop).to.greaterThanOrEqual(450)})),c.scrollTop=0,await a.waitFor((()=>{r.expect(c.scrollTop).to.eq(0)})),c.focus(),await a.waitFor((()=>{r.expect(c.scrollTop).to.greaterThanOrEqual(450)}))})),"undefined"==typeof jest&&it("load more on scroll - should fetch data once during keyboard navigation",(async()=>{const i=w(21);a.render(t.jsx(e,{data:i,fetchSize:7}));let c=await A("gridcell");const s=c[3];await y.default.click(s);const l=await q();r.expect(l.matches(":focus")).to.be.true,a.fireEvent.keyDown(l,{key:"ArrowDown"}),await a.waitFor((async()=>{c=await A("gridcell"),r.expect(c.length).to.eq(14)}));try{await a.waitFor((async()=>{c=await A("gridcell"),r.expect(c.length).to.eq(21)}))}catch(e){r.expect(e).not.null}}),6e3)},e.testSelectionRender=({SelectionCardGrid:e})=>{it("multiple selection - multiple selected items can be preserved",(async()=>{const i=w(3);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await h();k(c[0]),k(c[1]),await a.waitFor((()=>{r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true")}))})),it("range selection - space and then shift+space",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.keyUp(s[0],{key:" "}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("false"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyDown(c,{key:"ArrowRight"}),a.fireEvent.keyDown(c,{key:"ArrowRight"}),a.fireEvent.keyUp(s[2],{key:" ",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),it("range selection - click and then shift+space",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();k(s[0]),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("false"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyDown(c,{key:"ArrowRight"}),a.fireEvent.keyDown(c,{key:"ArrowRight"}),a.fireEvent.keyUp(s[2],{key:" ",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),it("range selection - space and then shift+click",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.keyUp(s[0],{key:" "}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("false"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),k(s[2],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),it("range selection - click and then shift+click",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await h();k(c[0]),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("false"),r.expect(c[2].getAttribute("aria-selected")).eq("false"),r.expect(c[3].getAttribute("aria-selected")).eq("false"),k(c[2],{shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("false")})),it("range selection - from current item to shift+click item",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.click(s[2],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),it("range selection - from current item to shift+arrow items",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),it("range selection - from current item to shift+click and then shift+click",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.click(s[1],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.click(s[3],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true")})),it("range selection - from current item to shift+click and then shift+arrow  ",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.click(s[1],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true")})),it("range selection - from current item to shift+click and then shift+space",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.click(s[1],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyUp(s[3],{key:" ",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("false"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true")})),it("range selection - from current item to shift+arrow and then shift+click",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.click(s[0]),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.click(s[3],{shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true")})),it("range selection - from current item to shift+arrow and then shift+arrow",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyDown(c,{key:"ArrowRight"}),a.fireEvent.keyDown(c,{key:"ArrowRight"}),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("false"),r.expect(s[1].getAttribute("aria-selected")).eq("false"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true")})),it("range selection - from current item to shift+arrow and then shift+space",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.click(s[0]),a.fireEvent.keyDown(c,{key:"ArrowRight",shiftKey:!0}),await a.waitFor((()=>{r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),a.fireEvent.keyUp(s[3],{key:" ",shiftKey:!0}),await a.waitFor((()=>{r.expect(s[0].getAttribute("aria-selected")).eq("false"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true")}))})),it("range selection - from current item to shift+space and then shift+space",(async()=>{const i=w(4);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();await y.default.tab(),r.expect(c.matches(":focus")).to.be.true,a.fireEvent.keyUp(s[0],{key:" ",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("false"),r.expect(s[2].getAttribute("aria-selected")).eq("false"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyDown(c,{key:"ArrowDown"}),a.fireEvent.keyDown(c,{key:"ArrowDown"}),a.fireEvent.keyUp(s[2],{key:" ",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false")})),it("range selection - shift+space and then shift+space",(async()=>{const i=w(5);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await h();k(c[0]),a.fireEvent.keyUp(c[2],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("false"),r.expect(c[4].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyUp(c[4],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("true"),r.expect(c[4].getAttribute("aria-selected")).eq("true")})),it("range selection - deselect selected item by shift+space",(async()=>{const i=w(3);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await h();k(c[0]),a.fireEvent.keyUp(c[2],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),a.fireEvent.keyUp(c[1],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("false"),r.expect(c[2].getAttribute("aria-selected")).eq("true")})),it("range selection backward - shift+space and then shift+space",(async()=>{const i=w(5);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await h();k(c[2]),a.fireEvent.keyUp(c[0],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("false"),r.expect(c[4].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyUp(c[4],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("false"),r.expect(c[1].getAttribute("aria-selected")).eq("false"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("true"),r.expect(c[4].getAttribute("aria-selected")).eq("true")})),it("range selection backward - shift+click and then shift+space",(async()=>{const i=w(5);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await h();k(c[2]),k(c[0],{shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("false"),r.expect(c[4].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyUp(c[4],{key:" ",shiftKey:!0}),r.expect(c[0].getAttribute("aria-selected")).eq("true"),r.expect(c[1].getAttribute("aria-selected")).eq("true"),r.expect(c[2].getAttribute("aria-selected")).eq("true"),r.expect(c[3].getAttribute("aria-selected")).eq("true"),r.expect(c[4].getAttribute("aria-selected")).eq("true")})),it("range selection backward - shift+arrow and then shift+space",(async()=>{const i=w(5);a.render(t.jsx(e,{data:i,selectionMode:"multiple"}));const c=await q(),s=await h();k(s[2]),a.fireEvent.keyDown(c,{key:"ArrowLeft",shiftKey:!0}),a.fireEvent.keyDown(c,{key:"ArrowLeft",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("false"),r.expect(s[4].getAttribute("aria-selected")).eq("false"),a.fireEvent.keyUp(s[4],{key:" ",shiftKey:!0}),r.expect(s[0].getAttribute("aria-selected")).eq("true"),r.expect(s[1].getAttribute("aria-selected")).eq("true"),r.expect(s[2].getAttribute("aria-selected")).eq("true"),r.expect(s[3].getAttribute("aria-selected")).eq("true"),r.expect(s[4].getAttribute("aria-selected")).eq("true")}))}}));
//# sourceMappingURL=BaseCardViewSelectionTest-28e25f08.js.map
