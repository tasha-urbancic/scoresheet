import {CHANGE_TEMPLATE_NAME} from '../constants/create-templates';

export function changeTemplateName(templateName) {
  return {
    type: CHANGE_TEMPLATE_NAME,
    templateName
  };
}
