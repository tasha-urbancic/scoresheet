import {CHANGE_TEMPLATE_NAME } from '../constants/create-templates';

export default (state = { templateName: '' }, action) => {
  switch (action.type) {
    case CHANGE_TEMPLATE_NAME:
      return {
        ...state,
        templateName: action.templateName
      }
    default:
      return state;
  }
};
