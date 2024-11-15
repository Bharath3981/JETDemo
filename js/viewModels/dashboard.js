/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  "../accUtils",
  "knockout",
  "quill",
  "ojs/ojlabelvalue",
  "ojs/ojbutton",
  "oj-c/input-text",
  "ojs/ojinputtext",
  "oj-c/input-number",
  "ojs/ojdatetimepicker",
  "ojs/ojswitch",
  "oj-c/button",
  "ojs/ojknockout",
  "ojs/ojlabel",
  "ojs/ojradioset",
  "ojs/ojcheckboxset",
  "oj-c/form-layout",
], function (accUtils, ko, Quill) {
  function DashboardViewModel() {
    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.
    this.isReadOnly = ko.observable(false);
    this.editorContent = ko.observable("");
    this.editorText = ko.observable("");
    let quill = null;
    let delta = null;

    this.initiateEditor = () => {
      quill = new Quill("#editor", {
        theme: "snow",
      });
      delta = quill.getContents();
      console.log("Quill: ", quill);
    };

    this.EditOrPreview = () => {
      this.isReadOnly(!this.isReadOnly());
      if (this.isReadOnly()) {
        text = quill.getContents();
        this.editorText(quill.getSemanticHTML());
        this.editorContent(text);
      } else {
        //this.initiateEditor();
        console.log(text);
        quill.setContents(this.editorContent());
      }
    };

    this.setContent = () => {
      quill.setContents("<p>Some initial <strong>bold</strong> text</p>\n");
    };

    this.connected = () => {
      accUtils.announce("Dashboard page loaded.", "assertive");
      document.title = "Dashboard";
      // Implement further logic if needed
      this.initiateEditor();
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    this.disconnected = () => {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    this.transitionCompleted = () => {
      // Implement if needed
    };
  }

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return DashboardViewModel;
});
