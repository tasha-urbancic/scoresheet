import { CHANGE_PAGE, CHANGE_GAME_ID } from '../constants/pages';

export default (state = { page: 'home', gameid: '123' }, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case CHANGE_GAME_ID:
      return {
        ...state,
        gameid: action.gameid
      }
    default:
      return state;
  }
};
