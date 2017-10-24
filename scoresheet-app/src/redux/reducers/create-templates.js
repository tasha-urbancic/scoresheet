import {CHANGE_TEMPLATE_NAME, UPDATE_CURRENT_COLUMN, ADD_COLUMN} from '../constants/create-templates';

// templateColumn: []

export default (state = { templateName: '', templateCurrentColumn: '', templateColumns: [] }, action) => {

  console.log('actions', action);

  switch (action.type) {
    case CHANGE_TEMPLATE_NAME:
      return {
        ...state,
        templateName: action.templateName
      }
    case UPDATE_CURRENT_COLUMN:
      return {
        ...state,
        templateCurrentColumn: action.templateCurrentColumn
        // templateColumn: [...state, action.templateColumn]
      }
    case ADD_COLUMN:
      return {
        ...state,
        templateColumns: [...state.templateColumns, action.currentColumn]
      }
    default:
      return state;
  }
};
