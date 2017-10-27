import { ADD_TEMPLATE, DELETE_TEMPLATE } from '../constants/templates';

export function addTemplate(template) {
  return {
    type: ADD_TEMPLATE,
    template
  };
}
