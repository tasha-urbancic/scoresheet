import { CHANGE_PAGE } from '../constants/pages';

export default (state = { page: 'home' }, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    default:
      return state;
  }
};
