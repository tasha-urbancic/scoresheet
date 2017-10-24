import {CHANGE_TEMPLATE_NAME, UPDATE_CURRENT_COLUMN, ADD_COLUMN, ADD_NOTE_TO_TEMPLATE, WRITE_RULES_INTO_TEMPLATE} from '../constants/create-templates';

export function changeTemplateName(templateName) {
  return {
    type: CHANGE_TEMPLATE_NAME,
    templateName
  };
}

export function updateCurrentColumn(templateCurrentColumn) {

  return {
    type: UPDATE_CURRENT_COLUMN,
    templateCurrentColumn
  };
}

export function addColumn(currentColumn) {

  return {
    type: ADD_COLUMN,
    currentColumn
  };
}

export function addNoteToTemplate(templateNote) {

  return {
    type: ADD_NOTE_TO_TEMPLATE,
    templateNote
  };
}

export function writeRulesIntoTemplate(templateRules) {
  return {
    type: WRITE_RULES_INTO_TEMPLATE,
    templateRules
  }
}