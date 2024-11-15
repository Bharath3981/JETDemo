define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>e.itemKey+" "+e.position+" "+e.referenceKey+" : déplacement effectué.",accCommandKey:()=>"Commande",accControlKey:()=>"Fermeture",accPositionAfter:()=>"après",accPositionBefore:()=>"avant",accReorderInstructions:e=>"Maintenez les touches "+e.keyPressed+" et Maj enfoncées, puis utilisez les touches fléchées pour effectuer la réorganisation.",calendarDateConverter_parseError:e=>"Entrez une date complète, par exemple : "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Entrez un mois et une année, par exemple : "+e.dateExample+".",chart_labelGroup:()=>"Groupe",chart_labelSeries:()=>"Série",chart_labelValue:()=>"Valeur",checkboxSet_requiredMessageDetail:()=>"Obligatoire",checkbox_requiredMessageDetail:()=>"Obligatoire",close:()=>"Fermeture",collection_noData:()=>"Aucune donnée à afficher.",collection_selectAllRows:()=>"Sélectionner toutes les lignes",collection_selectRow:e=>"Sélectionner la ligne "+e.ROW_NAME,collection_sortDisabled:()=>"Non triable",collection_sortEnabled:()=>"Triable",confirmation:()=>"Confirmation",datePicker_currentDate:()=>"Date en cours",datePicker_goToToday:()=>"Accéder à Aujourd'hui",datePicker_label:()=>"Sélecteur de date",datePicker_month:()=>"Mois",datePicker_months:()=>"Mois",datePicker_next:()=>"Suivant",datePicker_nextDecade:()=>"Décennie suivante",datePicker_nextMonth:()=>"Mois suivant",datePicker_prev:()=>"Précédent",datePicker_prevDecade:()=>"Décennie précédente",datePicker_prevMonth:()=>"Mois précédent",datePicker_restricted:()=>"Restreint",datePicker_selected:()=>"Sélectionné",datePicker_today:()=>"Aujourd'hui",datePicker_weekNum:e=>"Semaine "+e.NUM,datePicker_weekNumColLabel:()=>"Numéro de la semaine",datePicker_year:()=>"Année",datePicker_years:()=>"Années",error:()=>"Erreur",expandableList_expandCollapseInstructionText:()=>"Utilisez les touches fléchées pour effectuer un développement ou une réduction",expandableList_groupCollapse:()=>"Réduit",expandableList_groupExpand:()=>"Développé",filePicker_addFiles:()=>"Ajouter des fichiers",filePicker_dropzonePrimaryText:()=>"Glisser-déplacer",filePicker_dropzoneSecondaryText:()=>"Sélectionner un fichier ou en déplacer un ici",filePicker_dropzoneSecondaryTextMultiple:()=>"Sélectionner ou déplacer des fichiers ici",filePicker_multipleFileTypeUploadError:e=>"Vous ne pouvez pas télécharger des fichiers de type "+e.fileTypes,filePicker_singleFileUploadError:()=>"Téléchargez un fichier à la fois",filePicker_singleTypeUploadError:e=>"Vous ne pouvez pas télécharger des fichiers de type "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"inconnu",formControl_clear:()=>"Effacer",formControl_day:()=>"Jour",formControl_helpAvailable:()=>"Aide disponible",formControl_hide:()=>"Masquer",formControl_limitReached:e=>"Vous avez atteint la limite de "+({one:new Intl.NumberFormat("fr").format(e.CHARACTER_LIMIT)+" caractère",many:new Intl.NumberFormat("fr").format(e.CHARACTER_LIMIT)+" de caractères"}[new Intl.PluralRules("fr").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("fr").format(e.CHARACTER_LIMIT)+" caractères")+".",formControl_loading:()=>"Chargement en cours",formControl_maxLength:e=>"Vous pouvez saisir jusqu'à "+e.MAX_LENGTH+" caractères.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" caractères restants.",formControl_month:()=>"Mois",formControl_readOnly:()=>"Lecture seule",formControl_requiredMessageDetail:()=>"Entrez une valeur.",formControl_show:()=>"Afficher",formControl_year:()=>"Année",gantt_labelDate:()=>"Date",gantt_labelEnd:()=>"Fin",gantt_labelLabel:()=>"Libellé",gantt_labelRow:()=>"Ligne",gantt_labelStart:()=>"Début",indexer_disabledLabel:e=>e.SECTION+". Aucune section correspondante n'a été trouvée.",indexer_keyboardInstructionText:()=>"Appuyez sur Entrée pour sélectionner une valeur.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Entre "+e.FROM_SECTION+" et "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Touchez deux fois et maintenez le toucher pour passer en mode d'opération, puis faites glisser vers le haut ou le bas pour ajuster la valeur.",info:()=>"Information",inputDateMask_date_cleared:()=>"Date effacée",inputDateMask_dayPlaceholder:()=>"jj",inputDateMask_empty_segment:()=>"Vide",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"aaaa",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Entrez une date antérieure ou égale au "+e.max+".",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Entrez une date postérieure ou égale au "+e.min+".",inputDatePicker_dateRestrictionMessageDetail:()=>"Entrez une date disponible.",inputDatePicker_instruction:()=>"Appuyez sur la touche de tabulation pour accéder au calendrier.",inputDatePicker_selectDate:()=>"Sélectionner une date",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Entrez une année et un mois antérieurs ou égaux à "+e.max+".",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Entrez une année et un mois ultérieurs ou égaux à "+e.min+".",inputNumber_converterParseError:()=>"Entrez un nombre.",inputNumber_decrease:()=>"Diminuer",inputNumber_increase:()=>"Augmenter",inputPassword_hidden:()=>"Mot de passe masqué",inputPassword_hide:()=>"Masquer le mot de passe",inputPassword_show:()=>"Afficher le mot de passe",inputSensitiveText_hidden:()=>"Texte confidentiel masqué",list_msgFetchCompleted:()=>"Chargé",list_msgFetchingData:()=>"Chargement en cours",list_suggestion:()=>"Suggestion",messageToast_allMessagesClosed:()=>'Tous les messages "toast" sont fermés.',message_close:()=>"Fermeture",message_confirmation:()=>"Succès",message_error:()=>"Erreur",message_info:()=>"Information",message_navigationFromMessagesRegion:()=>"Accès à la région des messages. Appuyez sur F6 pour revenir à l'élément sélectionné précédent.",message_navigationToMessagesRegion:()=>"La région des messages en comporte de nouveaux. Appuyez sur F6 pour revenir à la région du message le plus récent.",message_warning:()=>"Avertissement",noData_message:()=>"Aucun élément à afficher",overflowItemLabel:()=>"Plus d'onglets",plural_separator:()=>", ",progressIndeterminate:()=>"En cours",radio_helpForRadio:()=>"Aide pour le bouton radio",radio_requiredMessageDetail:()=>"Sélectionnez une valeur.",selectMultiple_apply:()=>"Appliquer",selectMultiple_back:()=>"Retour",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Utilisez les touches fléchées vers la gauche et vers la droite afin de mettre en évidence les valeurs sélectionnées.",selectMultiple_removeSelectedTagInstructionText:()=>"Appuyez sur la touche Retour arrière ou Suppr pour enlever la valeur sélectionnée.",selectMultiple_selectedValues:()=>"Valeurs sélectionnées",selectMultiple_showSelectedValues:()=>"Affichez uniquement les valeurs sélectionnées.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" valeurs sélectionnées.",select_addToList:()=>"Ajouter à la liste",select_addToListAvailable:()=>"Ajouter à la liste (disponible)",select_moreSearchOptions:()=>"Options de recherche supplémentaires",select_moreSearchOptionsAvailable:()=>"Options de recherche supplémentaires (disponible)",select_noMatchesFound:()=>"Aucune correspondance trouvée.",select_oneMatchFound:()=>"Une correspondance a été trouvée",select_requiredMessageDetail:()=>"Sélectionnez une valeur.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" correspondances trouvées",select_sizeOrMoreMatchesFound:e=>"Au moins "+e.TOTAL_SIZE+" correspondances trouvées",selectorAll_deselectAll:()=>"Tout désélectionner",selectorAll_selectAll:()=>"Tout sélectionner",selector_selected:()=>"Case cochée",selector_unselected:()=>"Case non cochée",tabBarNavigationList_removeCueText:()=>"Peut être enlevé",timeComponent_tooltipZoomIn:()=>"Zoom avant",timeComponent_tooltipZoomOut:()=>"Zoom arrière",train_current:()=>"En cours",train_message_type:()=>"Type de message",train_not_visited:()=>"Non consulté",train_status:e=>"Etape "+e.currentStep+" sur "+e.numberOfSteps,train_visited:()=>"Consulté",userAssistance_learnMore:()=>"En savoir plus",userAssistance_required:()=>"Obligatoire",vis_clearSelection:()=>"Effacer la sélection",vis_drillable:()=>"Explorable",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" sur "+e.totalCount,vis_marqueeSelectTooltip:()=>"Sélection par rectangle de sélection",vis_marqueeZoomTooltip:()=>"Zoom par rectangle de sélection",vis_noData:()=>"Aucune donnée à afficher",vis_panTooltip:()=>"Panoramique",vis_stateLoaded:()=>"Chargé",vis_stateLoading:()=>"Chargement en cours",vis_stateSelected:()=>"Sélectionné",vis_stateUnselected:()=>"Désélectionné",warn:()=>"Avertissement"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map