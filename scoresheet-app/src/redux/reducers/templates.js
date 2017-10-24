import { ADD_TEMPLATE, DELETE_TEMPLATE } from '../constants/templates';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TEMPLATE:
      return [...state, action.template];
    // case DELETE_TEMPLATE:
    //   return {
    //     ...state,
    //     templates: state.templates.filter(template => template.id !== action.id)
    //   };
    default:
      return state;
  }
};
