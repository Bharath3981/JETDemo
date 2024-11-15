define(['exports'], (function(e){"use strict";const n={accAnnounceMovedKey:e=>e.itemKey+" "+e.position+" "+e.referenceKey+" verschoben.",accCommandKey:()=>"Befehl",accControlKey:()=>"Schließen",accPositionAfter:()=>"nach",accPositionBefore:()=>"vor",accReorderInstructions:e=>"Halten Sie "+e.keyPressed+" und die Umschalttaste gedrückt, und ändern Sie die Reihenfolge mit den Pfeiltasten.",calendarDateConverter_parseError:e=>"Geben Sie ein vollständiges Datum wie folgt ein: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Geben Sie einen Monat und ein Jahr wie folgt ein: "+e.dateExample+".",chart_labelGroup:()=>"Gruppe",chart_labelSeries:()=>"Reihe",chart_labelValue:()=>"Wert",checkboxSet_requiredMessageDetail:()=>"Erforderlich",checkbox_requiredMessageDetail:()=>"Erforderlich",close:()=>"Schließen",collection_noData:()=>"Keine anzuzeigenden Daten.",collection_selectAllRows:()=>"Alle Zeilen auswählen",collection_selectRow:e=>"Zeile "+e.ROW_NAME+" auswählen",collection_sortDisabled:()=>"Nicht sortierbar",collection_sortEnabled:()=>"Sortierbar",confirmation:()=>"Bestätigung",datePicker_currentDate:()=>"Aktuelles Datum",datePicker_goToToday:()=>"Heute",datePicker_label:()=>"Datumsauswahl",datePicker_month:()=>"Monat",datePicker_months:()=>"Monate",datePicker_next:()=>"Nächste",datePicker_nextDecade:()=>"Nächstes Jahrzehnt",datePicker_nextMonth:()=>"Nächster Monat",datePicker_prev:()=>"Vorherige",datePicker_prevDecade:()=>"Vorheriges Jahrzehnt",datePicker_prevMonth:()=>"Vorheriger Monat",datePicker_restricted:()=>"Eingeschränkt",datePicker_selected:()=>"Ausgewählt",datePicker_today:()=>"Heute",datePicker_weekNum:e=>"Woche "+e.NUM,datePicker_weekNumColLabel:()=>"Wochennummer",datePicker_year:()=>"Jahr",datePicker_years:()=>"Jahre",error:()=>"Fehler",expandableList_expandCollapseInstructionText:()=>"Pfeiltasten zum Ein- und Ausblenden verwenden",expandableList_groupCollapse:()=>"Ausgeblendet",expandableList_groupExpand:()=>"Eingeblendet",filePicker_addFiles:()=>"Dateien hinzufügen",filePicker_dropzonePrimaryText:()=>"Drag-and-Drop",filePicker_dropzoneSecondaryText:()=>"Datei auswählen oder hier ablegen",filePicker_dropzoneSecondaryTextMultiple:()=>"Dateien auswählen oder hier ablegen",filePicker_multipleFileTypeUploadError:e=>"Sie können keine Dateien des folgenden Typs hochladen: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Laden Sie jeweils nur eine Datei hoch",filePicker_singleTypeUploadError:e=>"Sie können keine Dateien des Typs "+e.fileType+" hochladen",filePicker_unknownFileTypeUploadError:()=>"unbekannt",formControl_clear:()=>"Leeren",formControl_day:()=>"Tag",formControl_helpAvailable:()=>"Hilfe verfügbar",formControl_hide:()=>"Verbergen",formControl_limitReached:e=>"Sie haben den Grenzwert von "+({one:new Intl.NumberFormat("de").format(e.CHARACTER_LIMIT)+" Zeichen"}[new Intl.PluralRules("de").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("de").format(e.CHARACTER_LIMIT)+" Zeichen")+" erreicht.",formControl_loading:()=>"Wird geladen",formControl_maxLength:e=>"Sie können bis zu "+e.MAX_LENGTH+" Zeichen eingeben.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" Zeichen übrig.",formControl_month:()=>"Monat",formControl_readOnly:()=>"Schreibgeschützt",formControl_requiredMessageDetail:()=>"Geben Sie einen Wert ein.",formControl_show:()=>"Anzeigen",formControl_year:()=>"Jahr",gantt_labelDate:()=>"Datum",gantt_labelEnd:()=>"Ende",gantt_labelLabel:()=>"Label",gantt_labelRow:()=>"Zeile",gantt_labelStart:()=>"Start",indexer_disabledLabel:e=>e.SECTION+". Kein übereinstimmender Abschnitt gefunden.",indexer_keyboardInstructionText:()=>"Drücken Sie die Eingabetaste, um einen Wert auszuwählen.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Zwischen "+e.FROM_SECTION+" und "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Doppeltippen und halten, um den Gestenmodus aufzurufen, und anschließend nach oben oder unten ziehen, um den Wert anzupassen.",info:()=>"Info",inputDateMask_date_cleared:()=>"Datum gelöscht",inputDateMask_dayPlaceholder:()=>"TT",inputDateMask_empty_segment:()=>"Leer",inputDateMask_monthPlaceholder:()=>"MM",inputDateMask_yearPlaceholder:()=>"JJJJ",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Geben Sie ein Datum ein, das "+e.max+" entspricht oder davor liegt.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Geben Sie ein Datum ein, das "+e.min+" entspricht oder danach liegt.",inputDatePicker_dateRestrictionMessageDetail:()=>"Geben Sie ein verfügbares Datum ein.",inputDatePicker_instruction:()=>"Drücken Sie die Tabulatortaste, um auf den Kalender zuzugreifen.",inputDatePicker_selectDate:()=>"Datum auswählen",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Geben Sie einen Monat und ein Jahr am oder vor "+e.max+" ein.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Geben Sie einen Monat und ein Jahr am oder nach "+e.min+" ein.",inputNumber_converterParseError:()=>"Geben Sie eine Zahl ein.",inputNumber_decrease:()=>"Verringern",inputNumber_increase:()=>"Erhöhen",inputPassword_hidden:()=>"Kennwort ausgeblendet",inputPassword_hide:()=>"Kennwort ausblenden",inputPassword_show:()=>"Kennwort anzeigen",inputSensitiveText_hidden:()=>"Sensibler Text ausgeblendet",list_msgFetchCompleted:()=>"Geladen",list_msgFetchingData:()=>"Wird geladen",list_suggestion:()=>"Vorschlag",messageToast_allMessagesClosed:()=>"Alle Popup-Nachrichten sind geschlossen.",message_close:()=>"Schließen",message_confirmation:()=>"Erfolg",message_error:()=>"Fehler",message_info:()=>"Info",message_navigationFromMessagesRegion:()=>"Meldungsbereich wird geöffnet. Drücken Sie F6, um zum vorherigen fokussierten Element zurückzukehren.",message_navigationToMessagesRegion:()=>"Meldungsbereich enthält neue Meldungen. Drücken Sie F6, um zum aktuellen Meldungsbereich zu navigieren.",message_warning:()=>"Warnung",noData_message:()=>"Keine anzuzeigenden Elemente",overflowItemLabel:()=>"Weitere Registerkarten",plural_separator:()=>", ",progressIndeterminate:()=>"Wird ausgeführt",radio_helpForRadio:()=>"Hilfe für Optionsfeld",radio_requiredMessageDetail:()=>"Wählen Sie einen Wert.",selectMultiple_apply:()=>"Anwenden",selectMultiple_back:()=>"Zurück",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Verwenden Sie die Pfeiltasten nach links und rechts, um ausgewählte Werte hervorzuheben.",selectMultiple_removeSelectedTagInstructionText:()=>"Drücken Sie die Rücktaste oder ENTF, um den ausgewählten Wert zu entfernen.",selectMultiple_selectedValues:()=>"Ausgewählte Werte",selectMultiple_showSelectedValues:()=>"Nur ausgewählte Werte anzeigen.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" Werte ausgewählt.",select_addToList:()=>"Zu Liste hinzufügen",select_addToListAvailable:()=>'"Zu Liste hinzufügen" verfügbar',select_moreSearchOptions:()=>"Weitere Suchoptionen",select_moreSearchOptionsAvailable:()=>"Weitere Suchoptionen verfügbar",select_noMatchesFound:()=>"Keine Übereinstimmungen gefunden.",select_oneMatchFound:()=>"Eine Übereinstimmung gefunden",select_requiredMessageDetail:()=>"Wählen Sie einen Wert.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" Übereinstimmungen gefunden",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" oder mehr Übereinstimmungen gefunden",selectorAll_deselectAll:()=>"Gesamte Auswahl aufheben",selectorAll_selectAll:()=>"Alle auswählen",selector_selected:()=>"Kontrollkästchen aktiviert",selector_unselected:()=>"Kontrollkästchen nicht aktiviert",tabBarNavigationList_removeCueText:()=>"Kann entfernt werden",timeComponent_tooltipZoomIn:()=>"Vergrößern",timeComponent_tooltipZoomOut:()=>"Verkleinern",train_current:()=>"Aktuell",train_message_type:()=>"Meldungstyp",train_not_visited:()=>"Nicht besucht",train_status:e=>"Schritt "+e.currentStep+" von "+e.numberOfSteps,train_visited:()=>"Besucht",userAssistance_learnMore:()=>"Weitere Informationen",userAssistance_required:()=>"Erforderlich",vis_clearSelection:()=>"Auswahl löschen",vis_drillable:()=>"Drillfähig",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" von "+e.totalCount,vis_marqueeSelectTooltip:()=>"Auswahlbereich",vis_marqueeZoomTooltip:()=>"Auswahlzoom",vis_noData:()=>"Keine anzuzeigenden Daten",vis_panTooltip:()=>"Schwenken",vis_stateLoaded:()=>"Geladen",vis_stateLoading:()=>"Wird geladen",vis_stateSelected:()=>"Ausgewählt",vis_stateUnselected:()=>"Auswahl aufgehoben",warn:()=>"Warnung"};e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map