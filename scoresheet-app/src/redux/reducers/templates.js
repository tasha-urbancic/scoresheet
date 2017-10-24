import { ADD_TEMPLATE, DELETE_TEMPLATE } from '../constants/templates';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TEMPLATE:
      const template = {
        ...action.template
      };
      return {
        ...state,
        templates: [...state.templates, template]
      };
    // case DELETE_TEMPLATE:
    //   return {
    //     ...state,
    //     templates: state.templates.filter(template => template.id !== action.id)
    //   };
    default:
      return state;
  }
};
