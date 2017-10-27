import { ADD_TEMPLATE, DELETE_TEMPLATE } from '../constants/templates';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TEMPLATE:
      return [...state, action.template];
    default:
      return state;
  }
};
