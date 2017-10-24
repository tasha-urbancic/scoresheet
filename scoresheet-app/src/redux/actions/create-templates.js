import {CHANGE_TEMPLATE_NAME, UPDATE_CURRENT_COLUMN, ADD_COLUMN} from '../constants/create-templates';

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