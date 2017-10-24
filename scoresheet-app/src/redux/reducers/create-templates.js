import {CHANGE_TEMPLATE_NAME, UPDATE_CURRENT_COLUMN, ADD_COLUMN, ADD_NOTE_TO_TEMPLATE} from '../constants/create-templates';

// templateColumn: []

export default (state = { templateName: '', templateCurrentColumn: '', templateColumns: [], templateNote: '' }, action) => {

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
    case ADD_NOTE_TO_TEMPLATE:
      return {
        ...state,
        templateNote: action.templateNote
      }
    default:
      return state;
  }
};
