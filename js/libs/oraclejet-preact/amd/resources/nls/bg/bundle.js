define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>"Преместени са "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accCommandKey:()=>"Команда",accControlKey:()=>"Затваряне",accPositionAfter:()=>"след",accPositionBefore:()=>"преди",accReorderInstructions:e=>"Натиснете и задръжте "+e.keyPressed+" и Shift клавишите, след което използвайте клавишите със стрелки, за да ги преподредите.",calendarDateConverter_parseError:e=>"Въведете пълна дата като тази: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Въведете месец и година като тази: "+e.dateExample+".",chart_labelGroup:()=>"Група",chart_labelSeries:()=>"Серия",chart_labelValue:()=>"Стойност",checkboxSet_requiredMessageDetail:()=>"Задължително",checkbox_requiredMessageDetail:()=>"Задължително",close:()=>"Затваряне",collection_noData:()=>"Няма данни за показване.",collection_selectAllRows:()=>"Изберете всички редове",collection_selectRow:e=>"Избор на ред "+e.ROW_NAME,collection_sortDisabled:()=>" Без възможност за сортиране",collection_sortEnabled:()=>" С възможност за сортиране",confirmation:()=>"Потвърждение",datePicker_currentDate:()=>"Текуща дата",datePicker_goToToday:()=>"Отиди на днешния ден",datePicker_label:()=>"Избор на дата",datePicker_month:()=>"Месец",datePicker_months:()=>"Месеци",datePicker_next:()=>"Следващ",datePicker_nextDecade:()=>"Следваща декада",datePicker_nextMonth:()=>"Следващ месец",datePicker_prev:()=>"Предишен",datePicker_prevDecade:()=>"Предишна декада",datePicker_prevMonth:()=>"Предишен месец",datePicker_restricted:()=>"Ограничен",datePicker_selected:()=>"Избрано",datePicker_today:()=>"Днес",datePicker_weekNum:e=>"Седмица "+e.NUM,datePicker_weekNumColLabel:()=>"Номер на седмица",datePicker_year:()=>"Година",datePicker_years:()=>"Години",error:()=>"Грешка",expandableList_expandCollapseInstructionText:()=>"Използвайте клавишите със стрелки, за да разширите и свиете",expandableList_groupCollapse:()=>"Свито",expandableList_groupExpand:()=>"Разширено",filePicker_addFiles:()=>"Добави файлове",filePicker_dropzonePrimaryText:()=>"Плъзгане и пускане",filePicker_dropzoneSecondaryText:()=>"Изберете файл или го пуснете тук",filePicker_dropzoneSecondaryTextMultiple:()=>"Изберете или пуснете файлове тук",filePicker_multipleFileTypeUploadError:e=>"Не можете да качвате файлове от тип: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Качвайте по един файл наведнъж",filePicker_singleTypeUploadError:e=>"Не можете да качвате файлове от тип "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"неизвестен",formControl_clear:()=>"Изчистване",formControl_day:()=>"Ден",formControl_helpAvailable:()=>"Налична е помощ",formControl_hide:()=>"Скриване",formControl_limitReached:e=>"Достигнахте ограничението от "+({one:new Intl.NumberFormat("bg").format(e.CHARACTER_LIMIT)+"-character"}[new Intl.PluralRules("bg").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("bg").format(e.CHARACTER_LIMIT)+"-character")+".",formControl_loading:()=>"Зареждане",formControl_maxLength:e=>"Можете да въведете дo "+e.MAX_LENGTH+" знака.",formControl_maxLengthRemaining:e=>"Остават "+e.CHARACTER_COUNT+" знака.",formControl_month:()=>"Месец",formControl_readOnly:()=>"Само за четене",formControl_requiredMessageDetail:()=>"Въведете стойност.",formControl_show:()=>"Покажи",formControl_year:()=>"Година",gantt_labelDate:()=>"Дата",gantt_labelEnd:()=>"Край",gantt_labelLabel:()=>"Етикет",gantt_labelRow:()=>"Ред",gantt_labelStart:()=>"Начало",indexer_disabledLabel:e=>e.SECTION+". Няма намерен съответстващ раздел.",indexer_keyboardInstructionText:()=>"Натиснете Enter, за да изберете стойност.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Между "+e.FROM_SECTION+" и "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Натиснете два пъти и задръжте, за да влезете в режима с жестове, след което плъзнете нагоре или надолу, за да коригирате стойността.",info:()=>"Информация",inputDateMask_date_cleared:()=>"Изчистване на датата",inputDateMask_dayPlaceholder:()=>"дд",inputDateMask_empty_segment:()=>"Празно",inputDateMask_monthPlaceholder:()=>"мм",inputDateMask_yearPlaceholder:()=>"гггг",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Въведете дата, която съвпада с или е преди "+e.max+".",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Въведете дата, която съвпада с или е след "+e.min+".",inputDatePicker_dateRestrictionMessageDetail:()=>"Въведете налична дата.",inputDatePicker_instruction:()=>"За достъп до календара натиснете табулатора.",inputDatePicker_selectDate:()=>"Изберете дата",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Въведете месец и година на или преди "+e.max+".",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Въведете месец и година на или след "+e.min+".",inputNumber_converterParseError:()=>"Въведете число.",inputNumber_decrease:()=>"Намаляване",inputNumber_increase:()=>"Увеличаване",inputPassword_hidden:()=>"Паролата е скрита",inputPassword_hide:()=>"Скриване на парола",inputPassword_show:()=>"Показване на парола",inputSensitiveText_hidden:()=>"Чувствителният текст е скрит",list_msgFetchCompleted:()=>"Заредено",list_msgFetchingData:()=>"Зареждане",list_suggestion:()=>"Предложение",messageToast_allMessagesClosed:()=>"Всички тост съобщения са затворени.",message_close:()=>"Затваряне",message_confirmation:()=>"Успех",message_error:()=>"Грешка",message_info:()=>"Информация",message_navigationFromMessagesRegion:()=>"Влизане в областта за съобщения. Натиснете F6, за да се върнете обратно към предишния фокусиран елемент.",message_navigationToMessagesRegion:()=>"В областта за съобщения има нови съобщения. Натиснете F6, за да навигирате до областта за най-скорошно съобщение.",message_warning:()=>"Предупреждение",noData_message:()=>"Няма елементи за показване",overflowItemLabel:()=>"Още раздели",plural_separator:()=>", ",progressIndeterminate:()=>"Изпълнява се",radio_helpForRadio:()=>"Помощ за радио бутон",radio_requiredMessageDetail:()=>"Изберете стойност.",selectMultiple_apply:()=>"Приложи",selectMultiple_back:()=>"Назад",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Използвайте клавишите със стрелки наляво и надясно, за да маркирате избраните стойности.",selectMultiple_removeSelectedTagInstructionText:()=>"Натиснете Backspace (Назад) или Delete (Изтриване), за да премахнете избраната стойност.",selectMultiple_selectedValues:()=>"Избрани стойности",selectMultiple_showSelectedValues:()=>"Показване само на избраните стойности.",selectMultiple_valuesSelected:e=>"Избрани са "+e.VALUE_COUNT+" стойности.",select_addToList:()=>"Добавяне към списъка",select_addToListAvailable:()=>"Налично е добавяне към списъка",select_moreSearchOptions:()=>"Още опции за търсене",select_moreSearchOptionsAvailable:()=>"Налични са още опции за търсене",select_noMatchesFound:()=>"Няма намерени съвпадения.",select_oneMatchFound:()=>"Намерено е едно съвпадение",select_requiredMessageDetail:()=>"Изберете стойност.",select_sizeMatchesFound:e=>"Открити са "+e.TOTAL_SIZE+" съвпадения",select_sizeOrMoreMatchesFound:e=>"Открити са "+e.TOTAL_SIZE+" или повече съвпадения",selectorAll_deselectAll:()=>"Премахване на избора на всичко",selectorAll_selectAll:()=>"Избор на всички",selector_selected:()=>"Полето е с отметка",selector_unselected:()=>"Полето е без отметка",tabBarNavigationList_removeCueText:()=>"С възможност за премахване",timeComponent_tooltipZoomIn:()=>"Приближаване",timeComponent_tooltipZoomOut:()=>"Отдалечаване",train_current:()=>"Текущо",train_message_type:()=>"Тип съобщение",train_not_visited:()=>"Не е посетено",train_status:e=>"Стъпка "+e.currentStep+" от "+e.numberOfSteps,train_visited:()=>"Посетено",userAssistance_learnMore:()=>"Научете повече",userAssistance_required:()=>"Задължително",vis_clearSelection:()=>"Изчистване на избора",vis_drillable:()=>"С възможност за детайлизация",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" от "+e.totalCount,vis_marqueeSelectTooltip:()=>"Избор на бягащ ред",vis_marqueeZoomTooltip:()=>"Мащабиране на бягащ ред",vis_noData:()=>"Няма данни за показване",vis_panTooltip:()=>"Отместване",vis_stateLoaded:()=>"Заредено",vis_stateLoading:()=>"Зареждане",vis_stateSelected:()=>"Избрано",vis_stateUnselected:()=>"Неизбрано",warn:()=>"Предупреждение"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map