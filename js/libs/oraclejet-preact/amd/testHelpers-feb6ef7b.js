define(['exports', '@testing-library/preact'], (function(e,n){"use strict";e.fireDragAndDropEvent=(e,t)=>{n.fireEvent.dragStart(e),n.fireEvent.dragEnter(t),n.fireEvent.drop(t),n.fireEvent.dragEnd(e)},e.getContents=async(e="gridcell")=>n.screen.findAllByRole(e),e.getItems=async(e="row")=>n.screen.findAllByRole(e),e.getRoot=async(e="grid")=>n.screen.findByRole(e),e.keyboardReorder=(e,t)=>{n.fireEvent.keyDown(e,{key:t,code:t,shiftKey:!0,metaKey:!0})},e.mouseCheckboxSelection=(e,t)=>{const r=n.screen.getAllByRole("img",{hidden:!0})[e];if(!r)throw new Error("Cannot find checkbox!");"undefined"!=typeof jest?n.fireEvent.click(r,t):setTimeout((()=>{n.fireEvent.click(r,t)}),100)},e.mouseItemSelection=(e,t)=>{n.fireEvent.click(e,t)}}));
//# sourceMappingURL=testHelpers-feb6ef7b.js.map
