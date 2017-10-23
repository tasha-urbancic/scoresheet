import {CHANGE_TEMPLATE_NAME, ADD_COLUMN} from '../constants/create-templates';

// templateColumn: []

export default (state = { templateName: '', templateColumn: '' }, action) => {

  console.log('actions', action);

  switch (action.type) {
    case CHANGE_TEMPLATE_NAME:
      return {
        ...state,
        templateName: action.templateName
      }
    case ADD_COLUMN:
      return {
        ...state,
        templateColumn: [...state, action.templateColumn]
        // templateColumn: [...state, action.templateColumn]
      }
    default:
      return state;
  }
};
