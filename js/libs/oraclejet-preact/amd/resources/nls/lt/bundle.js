define(['exports'], (function(e){"use strict";const a={accAnnounceMovedKey:e=>"Perkelta "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accCommandKey:()=>"Komanda",accControlKey:()=>"Uždaryti",accPositionAfter:()=>"po",accPositionBefore:()=>"prieš",accReorderInstructions:e=>"Laikydami paspaudę "+e.keyPressed+" ir SHIFT klavišus naudokite rodyklės klavišus, kad pakeistumėte tvarką.",calendarDateConverter_parseError:e=>"Įveskite įvykdymo datą taip: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Įveskite mėnesį ir metus taip: "+e.dateExample+".",chart_labelGroup:()=>"Grupė",chart_labelSeries:()=>"Serija",chart_labelValue:()=>"Reikšmė",checkboxSet_requiredMessageDetail:()=>"Būtina",checkbox_requiredMessageDetail:()=>"Būtina",close:()=>"Uždaryti",collection_noData:()=>"Nėra rodytinų duomenų.",collection_selectAllRows:()=>"Pasirinkti visas eilutes",collection_selectRow:e=>"Pasirinkti eilutę "+e.ROW_NAME,collection_sortDisabled:()=>"Nerikiuojama",collection_sortEnabled:()=>"Rikiuojama",confirmation:()=>"Patvirtinimas",datePicker_currentDate:()=>"Dabartinė data",datePicker_goToToday:()=>"Eiti į šiandien",datePicker_label:()=>"Datos parinkiklis",datePicker_month:()=>"Mėnuo",datePicker_months:()=>"Mėnesiai",datePicker_next:()=>"Kitas",datePicker_nextDecade:()=>"Kitas dešimtmetis",datePicker_nextMonth:()=>"Kitas mėnuo",datePicker_prev:()=>"Ankstesnis",datePicker_prevDecade:()=>"Ankstesnis dešimtmetis",datePicker_prevMonth:()=>"Ankstesnis mėnuo",datePicker_restricted:()=>"Apribota",datePicker_selected:()=>"Pasirinkta",datePicker_today:()=>"Šiandien",datePicker_weekNum:e=>e.NUM+" savaitė",datePicker_weekNumColLabel:()=>"Savaitės numeris",datePicker_year:()=>"Metai",datePicker_years:()=>"Metai",error:()=>"Klaida",expandableList_expandCollapseInstructionText:()=>"Naudokite rodyklių klavišus norėdami išskleisti ir sutraukti",expandableList_groupCollapse:()=>"Sutraukta",expandableList_groupExpand:()=>"Išskleista",filePicker_addFiles:()=>"Įtraukti failų",filePicker_dropzonePrimaryText:()=>"Nuvilkimas",filePicker_dropzoneSecondaryText:()=>"Pasirinkite failą arba jį nuvilkite čia",filePicker_dropzoneSecondaryTextMultiple:()=>"Pasirinkite arba nuvilkite failus čia",filePicker_multipleFileTypeUploadError:e=>"Šio tipo failų įkelti negalima: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Vienu kartu galima įkelti vieną failą",filePicker_singleTypeUploadError:e=>e.fileType+" tipo failų įkelti negalima",filePicker_unknownFileTypeUploadError:()=>"nežinoma",formControl_clear:()=>"Valyti",formControl_day:()=>"Diena",formControl_helpAvailable:()=>"Žinynas pasiekiamas",formControl_hide:()=>"Slėpti",formControl_limitReached:e=>"Pasiekėte ribą  "+({one:new Intl.NumberFormat("lt").format(e.CHARACTER_LIMIT)+"-character",few:new Intl.NumberFormat("lt").format(e.CHARACTER_LIMIT)+"-character",many:new Intl.NumberFormat("lt").format(e.CHARACTER_LIMIT)+"-character"}[new Intl.PluralRules("lt").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("lt").format(e.CHARACTER_LIMIT)+"-character")+".",formControl_loading:()=>"Įkeliama",formControl_maxLength:e=>"Galite įvesti iki "+e.MAX_LENGTH+" simbolių.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" simboliai (-ių) liko.",formControl_month:()=>"Mėnuo",formControl_readOnly:()=>"Tik skaityti",formControl_requiredMessageDetail:()=>"Įveskite reikšmę.",formControl_show:()=>"Rodyti",formControl_year:()=>"Metai",gantt_labelDate:()=>"Data",gantt_labelEnd:()=>"Baigti",gantt_labelLabel:()=>"Žyma",gantt_labelRow:()=>"Eilutė",gantt_labelStart:()=>"Pradėti",indexer_disabledLabel:e=>e.SECTION+". Nerasta jokių atitinkančių skyrių.",indexer_keyboardInstructionText:()=>"Norėdami pasirinkti reikšmę, paspauskite Enter.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Tarp "+e.FROM_SECTION+"  ir "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Du kartus spustelėkite ir palaikykite, kad įjungtumėte gestų režimą, tada vilkite aukštyn arba žemyn, kad koreguotumėte reikšmę.",info:()=>"Informacija",inputDateMask_date_cleared:()=>"Data išvalyta",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"Tuščia",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"mmmm",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Įveskite "+e.max+" arba ankstesnę datą.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Įveskite "+e.min+" arba vėlesnę datą.",inputDatePicker_dateRestrictionMessageDetail:()=>"Įveskite galimą datą.",inputDatePicker_instruction:()=>"Paspauskite Tab, kad pasiektumėte kalendorių.",inputDatePicker_selectDate:()=>"Pasirinkite datą",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Įveskite mėnesį ir metus, kurie sutaptų su "+e.max+" arba būtų ankstesni.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Įveskite mėnesį ir metus, kurie sutaptų su "+e.min+" arba būtų vėlesni.",inputNumber_converterParseError:()=>"Įveskite skaičių.",inputNumber_decrease:()=>"Sumažinti",inputNumber_increase:()=>"Padidinti",inputPassword_hidden:()=>"Slaptažodis paslėptas",inputPassword_hide:()=>"Slėpti slaptažodį",inputPassword_show:()=>"Rodyti slaptažodį",inputSensitiveText_hidden:()=>"Slaptas tekstas paslėptas",list_msgFetchCompleted:()=>"Įkelta",list_msgFetchingData:()=>"Įkeliama",list_suggestion:()=>"Pasiūlymas",messageToast_allMessagesClosed:()=>"Visi informaciniai pranešimai uždaryti.",message_close:()=>"Uždaryti",message_confirmation:()=>"Pavyko",message_error:()=>"Klaida",message_info:()=>"Informacija",message_navigationFromMessagesRegion:()=>"Įeinama į pranešimų sritį. Paspauskite F6, kad grįžtumėte prie ankstesnio pasirinkto elemento.",message_navigationToMessagesRegion:()=>"Pranešimų srityje yra naujų pranešimų. Paspauskite F6, kad grįžtumėte prie naujausių pranešimų srities.",message_warning:()=>"Perspėjimas",noData_message:()=>"Nėra rodytinų elementų",overflowItemLabel:()=>"Daugiau skirtukų",plural_separator:()=>", ",progressIndeterminate:()=>"Vykdoma",radio_helpForRadio:()=>"Išrinkimo mygtuko žinynas",radio_requiredMessageDetail:()=>"Pasirinkite reikšmę.",selectMultiple_apply:()=>"Taikyti",selectMultiple_back:()=>"Atgal",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Naudokite rodyklių kairėn ir dešinėn klavišus, kad pažymėtumėte pasirinktas reikšmes.",selectMultiple_removeSelectedTagInstructionText:()=>"Paspauskite Grįžti arba Naikinti, kad pašalintumėte pasirinktą reikšmę.",selectMultiple_selectedValues:()=>"Parinktos reikšmės",selectMultiple_showSelectedValues:()=>"Rodyti tik pasirinktas reikšmes.",selectMultiple_valuesSelected:e=>"Pasirinkta reikšmių: "+e.VALUE_COUNT+".",select_addToList:()=>"Įtraukti į sąrašą",select_addToListAvailable:()=>"Įtraukimas į sąrašą prieinamas",select_moreSearchOptions:()=>"Daugiau paieškos parinkčių",select_moreSearchOptionsAvailable:()=>"Daugiau ieškos parinkčių prieinama",select_noMatchesFound:()=>"Atitikmenų nerasta.",select_oneMatchFound:()=>"Rastas vienas atitikmuo",select_requiredMessageDetail:()=>"Pasirinkite reikšmę.",select_sizeMatchesFound:e=>"Rasta "+e.TOTAL_SIZE+" atitikmenų",select_sizeOrMoreMatchesFound:e=>"Rasta "+e.TOTAL_SIZE+" arba daugiau atitikmenų",selectorAll_deselectAll:()=>"Atžymėti viską",selectorAll_selectAll:()=>"Pasirinkti viską",selector_selected:()=>"Žymės langelis pažymėtas",selector_unselected:()=>"Žymės langelis nepažymėtas",tabBarNavigationList_removeCueText:()=>"Pašalinama",timeComponent_tooltipZoomIn:()=>"Artinti",timeComponent_tooltipZoomOut:()=>"Tolinti",train_current:()=>"Dabartinis",train_message_type:()=>"Pranešimo tipas",train_not_visited:()=>"Neaplankyta",train_status:e=>e.currentStep+" žingsnis iš "+e.numberOfSteps,train_visited:()=>"Aplankyta",userAssistance_learnMore:()=>"Sužinokite daugiau",userAssistance_required:()=>"Būtina",vis_clearSelection:()=>"Išvalyti pasirinktą sritį",vis_drillable:()=>"Kilmė analizuojama",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" iš "+e.totalCount,vis_marqueeSelectTooltip:()=>"Nuosvyros pasirinkimas",vis_marqueeZoomTooltip:()=>"Nuosvyros mastelio keitimas",vis_noData:()=>"Nėra rodytinų duomenų",vis_panTooltip:()=>"Slinkti",vis_stateLoaded:()=>"Įkelta",vis_stateLoading:()=>"Įkeliama",vis_stateSelected:()=>"Pasirinkta",vis_stateUnselected:()=>"Nepasirinkta",warn:()=>"Perspėjimas"};e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
