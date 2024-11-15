define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>e.itemKey+" "+e.position+" "+e.referenceKey+"を移動しました。",accCommandKey:()=>"コマンド",accControlKey:()=>"閉じる",accPositionAfter:()=>"次より後",accPositionBefore:()=>"次より前",accReorderInstructions:e=>"["+e.keyPressed+"]キーと[Shift]キーを押したままにし、矢印キーを使用して並べ替えます。",calendarDateConverter_parseError:e=>"次のように完了日を入力してください: "+e.dateExample+"。",calendarMonthConverter_parseError:e=>"次のように年および月を入力してください: "+e.dateExample+"。",chart_labelGroup:()=>"グループ",chart_labelSeries:()=>"系列",chart_labelValue:()=>"値",checkboxSet_requiredMessageDetail:()=>"必須",checkbox_requiredMessageDetail:()=>"必須",close:()=>"閉じる",collection_noData:()=>"表示するデータがありません",collection_selectAllRows:()=>"すべての行を選択",collection_selectRow:e=>"行"+e.ROW_NAME+"を選択",collection_sortDisabled:()=>"ソート不可",collection_sortEnabled:()=>"ソート可能",confirmation:()=>"確認",datePicker_currentDate:()=>"現在の日付",datePicker_goToToday:()=>"今日に移動",datePicker_label:()=>"日付ピッカー",datePicker_month:()=>"月",datePicker_months:()=>"月",datePicker_next:()=>"次",datePicker_nextDecade:()=>"次の10年",datePicker_nextMonth:()=>"次の月",datePicker_prev:()=>"前",datePicker_prevDecade:()=>"前の10年",datePicker_prevMonth:()=>"前の月",datePicker_restricted:()=>"制限付き",datePicker_selected:()=>"選択済",datePicker_today:()=>"今日",datePicker_weekNum:e=>"週"+e.NUM,datePicker_weekNumColLabel:()=>"週番号",datePicker_year:()=>"年",datePicker_years:()=>"年",error:()=>"エラー",expandableList_expandCollapseInstructionText:()=>"展開および縮小には矢印キーを使用します",expandableList_groupCollapse:()=>"縮小済",expandableList_groupExpand:()=>"展開済",filePicker_addFiles:()=>"ファイルの追加",filePicker_dropzonePrimaryText:()=>"ドラッグ・アンド・ドロップ",filePicker_dropzoneSecondaryText:()=>"ファイルを選択するか、ここにドロップします",filePicker_dropzoneSecondaryTextMultiple:()=>"ファイルを選択するか、ここにドロップします",filePicker_multipleFileTypeUploadError:e=>"次のタイプのファイルはアップロードできません: "+e.fileTypes,filePicker_singleFileUploadError:()=>"一度に1つのファイルをアップロードします",filePicker_singleTypeUploadError:e=>"タイプが"+e.fileType+"のファイルはアップロードできません",filePicker_unknownFileTypeUploadError:()=>"不明",formControl_clear:()=>"クリア",formControl_day:()=>"日",formControl_helpAvailable:()=>"ヘルプが使用可能",formControl_hide:()=>"非表示",formControl_limitReached:e=>(({one:new Intl.NumberFormat("ja").format(e.CHARACTER_LIMIT)+"文字"}[new Intl.PluralRules("ja").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("ja").format(e.CHARACTER_LIMIT)+"文字")+"の制限に達しました。"),formControl_loading:()=>"ロード中",formControl_maxLength:e=>"最大で"+e.MAX_LENGTH+"文字入力できます。",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+"文字残っています。",formControl_month:()=>"月",formControl_readOnly:()=>"読取り専用",formControl_requiredMessageDetail:()=>"値を入力してください。",formControl_show:()=>"表示",formControl_year:()=>"年",gantt_labelDate:()=>"日付",gantt_labelEnd:()=>"終了",gantt_labelLabel:()=>"ラベル",gantt_labelRow:()=>"行",gantt_labelStart:()=>"開始",indexer_disabledLabel:e=>e.SECTION+"。一致するセクションが見つかりませんでした。",indexer_keyboardInstructionText:()=>"[Enter]を押して値を選択します。",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>e.FROM_SECTION+"から"+e.TO_SECTION+"まで。",indexer_touchInstructionText:()=>"ダブル・タップしてホールドし、ジェスチャ・モードを開始した後、上下にドラッグして値を調整します。",info:()=>"情報",inputDateMask_date_cleared:()=>"クリアした日付",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"空",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"yyyy",inputDatePicker_dateRangeOverflowMessageDetail:e=>e.max+"以前の日付を入力してください。",inputDatePicker_dateRangeUnderflowMessageDetail:e=>e.min+"以降の日付を入力してください。",inputDatePicker_dateRestrictionMessageDetail:()=>"使用可能な日付を入力してください。",inputDatePicker_instruction:()=>"[Tab]を押すとカレンダにアクセスできます。",inputDatePicker_selectDate:()=>"日付の選択",inputMonthMask_dateRangeOverflowMessageDetail:e=>e.max+"以前の年および月を入力してください。",inputMonthMask_dateRangeUnderflowMessageDetail:e=>e.min+"以降の年および月を入力してください。",inputNumber_converterParseError:()=>"数値を入力してください。",inputNumber_decrease:()=>"減らす",inputNumber_increase:()=>"増やす",inputPassword_hidden:()=>"パスワード非表示",inputPassword_hide:()=>"パスワードの非表示",inputPassword_show:()=>"パスワードの表示",inputSensitiveText_hidden:()=>"機密テキストの非表示",list_msgFetchCompleted:()=>"ロード済",list_msgFetchingData:()=>"ロード中",list_suggestion:()=>"提案",messageToast_allMessagesClosed:()=>"すべての通知メッセージが閉じられています。",message_close:()=>"閉じる",message_confirmation:()=>"成功",message_error:()=>"エラー",message_info:()=>"情報",message_navigationFromMessagesRegion:()=>"メッセージ・リージョンに入ります。フォーカスされていた前の要素に戻るには、[F6]を押してください。",message_navigationToMessagesRegion:()=>"メッセージ・リージョンに新しいメッセージがあります。最新のメッセージ・リージョンに移動するには、[F6]を押してください。",message_warning:()=>"警告",noData_message:()=>"表示するアイテムはありません",overflowItemLabel:()=>"追加タブ",plural_separator:()=>", ",progressIndeterminate:()=>"進行中",radio_helpForRadio:()=>"ラジオ・ボタンのヘルプ",radio_requiredMessageDetail:()=>"値を選択してください。",selectMultiple_apply:()=>"適用",selectMultiple_back:()=>"戻る",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"左右の矢印キーを使用して選択した値を強調表示します。",selectMultiple_removeSelectedTagInstructionText:()=>"[Back Space]または[Delete]を押して、選択した値を削除します。",selectMultiple_selectedValues:()=>"選択された値",selectMultiple_showSelectedValues:()=>"選択された値のみを表示します。",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+"個の値が選択されました。",select_addToList:()=>"リストに追加",select_addToListAvailable:()=>"リストに追加が使用可能",select_moreSearchOptions:()=>"詳細検索オプション",select_moreSearchOptionsAvailable:()=>"詳細検索オプションが使用可能",select_noMatchesFound:()=>"一致する検索文字列が見つかりませんでした。",select_oneMatchFound:()=>"一致が1つ見つかりました",select_requiredMessageDetail:()=>"値を選択してください。",select_sizeMatchesFound:e=>e.TOTAL_SIZE+"件の一致が見つかりました",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+"件以上の一致が見つかりました",selectorAll_deselectAll:()=>"すべて選択解除",selectorAll_selectAll:()=>"すべて選択",selector_selected:()=>"チェック・ボックス(選択済)",selector_unselected:()=>"チェック・ボックス(未選択)",tabBarNavigationList_removeCueText:()=>"削除可能",timeComponent_tooltipZoomIn:()=>"ズームイン",timeComponent_tooltipZoomOut:()=>"ズームアウト",train_current:()=>"現在",train_message_type:()=>"メッセージ・タイプ",train_not_visited:()=>"未アクセス",train_status:e=>"ステップ"+e.currentStep+"/"+e.numberOfSteps,train_visited:()=>"アクセス済",userAssistance_learnMore:()=>"さらに学ぶ",userAssistance_required:()=>"必須",vis_clearSelection:()=>"選択のクリア",vis_drillable:()=>"ドリル可能",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+"/"+e.totalCount,vis_marqueeSelectTooltip:()=>"マーキーの選択",vis_marqueeZoomTooltip:()=>"マーキー・ズーム",vis_noData:()=>"表示するデータがありません",vis_panTooltip:()=>"パン",vis_stateLoaded:()=>"ロード済",vis_stateLoading:()=>"ロード中",vis_stateSelected:()=>"選択済",vis_stateUnselected:()=>"未選択",warn:()=>"警告"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
