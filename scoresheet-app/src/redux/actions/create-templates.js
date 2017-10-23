import {CHANGE_TEMPLATE_NAME, ADD_COLUMN} from '../constants/create-templates';

export function changeTemplateName(templateName) {
  return {
    type: CHANGE_TEMPLATE_NAME,
    templateName
  };
}

export function addColumn(templateColumn) {

  return {
    type: ADD_COLUMN,
    templateColumn
  };
}
