define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>"Áthelyezve "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accCommandKey:()=>"Command",accControlKey:()=>"Bezárás",accPositionAfter:()=>"utána",accPositionBefore:()=>"előtte",accReorderInstructions:e=>"Tartsa lenyomva a(z) "+e.keyPressed+" és a Shift billentyűt, majd használja a nyílbillentyűket az átrendezéshez.",calendarDateConverter_parseError:e=>"Teljes dátumot adjon meg, például: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Adja meg a hónapot és az évet, például: "+e.dateExample+".",chart_labelGroup:()=>"Csoport",chart_labelSeries:()=>"Sorozat",chart_labelValue:()=>"Érték",checkboxSet_requiredMessageDetail:()=>"Kötelező",checkbox_requiredMessageDetail:()=>"Kötelező",close:()=>"Bezárás",collection_noData:()=>"Nincs megjeleníthető adat.",collection_selectAllRows:()=>"Minden sor kijelölése",collection_selectRow:e=>e.ROW_NAME+". sor kijelölése",collection_sortDisabled:()=>"Nem rendezhető",collection_sortEnabled:()=>"Rendezhető",confirmation:()=>"Megerősítés",datePicker_currentDate:()=>"Aktuális dátum",datePicker_goToToday:()=>"Ugrás a mai napra",datePicker_label:()=>"Dátumválasztó",datePicker_month:()=>"Hónap",datePicker_months:()=>"Hónapok",datePicker_next:()=>"Tovább",datePicker_nextDecade:()=>"Következő évtized",datePicker_nextMonth:()=>"Következő hónap",datePicker_prev:()=>"Vissza",datePicker_prevDecade:()=>"Előző évtized",datePicker_prevMonth:()=>"Előző hónap",datePicker_restricted:()=>"Korlátozott",datePicker_selected:()=>"Kijelölt",datePicker_today:()=>"Ma",datePicker_weekNum:e=>e.NUM+". hét",datePicker_weekNumColLabel:()=>"Hét száma",datePicker_year:()=>"Év",datePicker_years:()=>"Évek",error:()=>"Hiba",expandableList_expandCollapseInstructionText:()=>"A kibontáshoz és összecsukáshoz használja a nyílbillentyűket",expandableList_groupCollapse:()=>"Összecsukott",expandableList_groupExpand:()=>"Kibontott",filePicker_addFiles:()=>"Fájlok hozzáadása",filePicker_dropzonePrimaryText:()=>"Áthelyezés húzással",filePicker_dropzoneSecondaryText:()=>"Válassza ki a fájlt, vagy húzza át ide",filePicker_dropzoneSecondaryTextMultiple:()=>"Válassza ki a fájlokat, vagy húzza át ide",filePicker_multipleFileTypeUploadError:e=>"Nem tölthet fel "+e.fileTypes+" típusú fájlt",filePicker_singleFileUploadError:()=>"Egyszerre csak egy fájlt töltsön fel",filePicker_singleTypeUploadError:e=>"Nem tölthet fel "+e.fileType+" típusú fájlt",filePicker_unknownFileTypeUploadError:()=>"ismeretlen",formControl_clear:()=>"Törlés",formControl_day:()=>"Nap",formControl_helpAvailable:()=>"Elérhető súgó",formControl_hide:()=>"Elrejtés",formControl_limitReached:e=>"Elérte a(z) "+({one:new Intl.NumberFormat("hu").format(e.CHARACTER_LIMIT)+" karakteres"}[new Intl.PluralRules("hu").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("hu").format(e.CHARACTER_LIMIT)+" karakteres")+" korlátot.",formControl_loading:()=>"Betöltés",formControl_maxLength:e=>"Legfeljebb "+e.MAX_LENGTH+" karaktert adhat meg.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" karakter maradt.",formControl_month:()=>"Hónap",formControl_readOnly:()=>"Írásvédett",formControl_requiredMessageDetail:()=>"Adjon meg egy értéket.",formControl_show:()=>"Megjelenítés",formControl_year:()=>"Év",gantt_labelDate:()=>"Dátum",gantt_labelEnd:()=>"Befejezés",gantt_labelLabel:()=>"Címke",gantt_labelRow:()=>"Sor",gantt_labelStart:()=>"Kezdés",indexer_disabledLabel:e=>e.SECTION+". Nem található egyező szakasz.",indexer_keyboardInstructionText:()=>"Az érték kiválasztásához nyomja meg az Enter billentyűt.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>e.FROM_SECTION+" és "+e.TO_SECTION+" között.",indexer_touchInstructionText:()=>"A gesztus módba belépéshez dupla koppintás és megtartás, majd lefelé vagy felfelé húzás az érték beállításához.",info:()=>"Információ",inputDateMask_date_cleared:()=>"Törlés dátuma",inputDateMask_dayPlaceholder:()=>"nn",inputDateMask_empty_segment:()=>"Üres",inputDateMask_monthPlaceholder:()=>"hh",inputDateMask_yearPlaceholder:()=>"éééé",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Adjon meg a(z) "+e.max+" dátumnál nem későbbi dátumot.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Adjon meg a(z) "+e.min+" dátumnál nem korábbi dátumot.",inputDatePicker_dateRestrictionMessageDetail:()=>"Adjon meg egy elérhető dátumot.",inputDatePicker_instruction:()=>"A naptár eléréséhez nyomja meg a Tab billentyűt.",inputDatePicker_selectDate:()=>"Dátum kiválasztása",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Adjon meg a(z) "+e.max+" értéknél nem későbbi hónapot és évet.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Adjon meg a(z) "+e.min+" értéknél nem korábbi hónapot és évet.",inputNumber_converterParseError:()=>"Adjon meg egy számot.",inputNumber_decrease:()=>"Csökkentés",inputNumber_increase:()=>"Növelés",inputPassword_hidden:()=>"Jelszó elrejtve",inputPassword_hide:()=>"Jelszó elrejtése",inputPassword_show:()=>"Jelszó megjelenítése",inputSensitiveText_hidden:()=>"Bizalmas adatot tartalmazó szöveg elrejtve",list_msgFetchCompleted:()=>"Betöltve",list_msgFetchingData:()=>"Betöltés",list_suggestion:()=>"Javaslat",messageToast_allMessagesClosed:()=>"Az összes információs üzenet bezárva.",message_close:()=>"Bezárás",message_confirmation:()=>"Siker",message_error:()=>"Hiba",message_info:()=>"Információ",message_navigationFromMessagesRegion:()=>"Belépés az üzenetek régióba. Az F6 billentyűvel léphet a korábban kijelölt elemhez.",message_navigationToMessagesRegion:()=>"Az üzenetek régióban új üzenetek találhatók. Az F6 billentyűvel léphet a legutóbbi üzenetrégióhoz.",message_warning:()=>"Figyelmeztetés",noData_message:()=>"Nincs megjeleníthető elem",overflowItemLabel:()=>"További lapok",plural_separator:()=>", ",progressIndeterminate:()=>"Folyamatban",radio_helpForRadio:()=>"Súgó választógombhoz",radio_requiredMessageDetail:()=>"Jelöljön ki egy értéket.",selectMultiple_apply:()=>"Alkalmaz",selectMultiple_back:()=>"Vissza",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Az egyes értékek kiemeléséhez használja a balra és jobbra nyílbillentyűket.",selectMultiple_removeSelectedTagInstructionText:()=>"A kijelölt érték eltávolításához nyomja meg a Backspace vagy a Delete billentyűt.",selectMultiple_selectedValues:()=>"Kiválasztott értékek",selectMultiple_showSelectedValues:()=>"Csak a kijelölt értékek megjelenítése.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" kiválasztott érték.",select_addToList:()=>"Hozzáadás listához",select_addToListAvailable:()=>"Hozzáadás listához elérhető",select_moreSearchOptions:()=>"További keresési beállítások",select_moreSearchOptionsAvailable:()=>"További keresési beállítások elérhetők",select_noMatchesFound:()=>"Nincs találat.",select_oneMatchFound:()=>"Egy egyezés található",select_requiredMessageDetail:()=>"Jelöljön ki egy értéket.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" egyezés található",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" vagy több egyezés található",selectorAll_deselectAll:()=>"Összes kijelölés törlése",selectorAll_selectAll:()=>"Mindent kijelöl",selector_selected:()=>"Jelölőnégyzet bejelölve",selector_unselected:()=>"Jelölőnégyzet nincs bejelölve",tabBarNavigationList_removeCueText:()=>"Eltávolítható",timeComponent_tooltipZoomIn:()=>"Nagyítás",timeComponent_tooltipZoomOut:()=>"Kicsinyítés",train_current:()=>"Aktuális",train_message_type:()=>"Üzenet típusa",train_not_visited:()=>"Nem látogatott",train_status:e=>e.numberOfSteps+"/"+e.currentStep+". lépés",train_visited:()=>"Látogatott",userAssistance_learnMore:()=>"További tudnivalók",userAssistance_required:()=>"Kötelező",vis_clearSelection:()=>"Kijelölés megszüntetése",vis_drillable:()=>"Részletezhető",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.totalCount+"/"+e.itemCount,vis_marqueeSelectTooltip:()=>"Futószöveg kijelölése",vis_marqueeZoomTooltip:()=>"Kijelölés nagyítása",vis_noData:()=>"Nincs megjeleníthető adat",vis_panTooltip:()=>"Eltolás",vis_stateLoaded:()=>"Betöltve",vis_stateLoading:()=>"Betöltés",vis_stateSelected:()=>"Kijelölt",vis_stateUnselected:()=>"Nem kijelölt",warn:()=>"Figyelmeztetés"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map