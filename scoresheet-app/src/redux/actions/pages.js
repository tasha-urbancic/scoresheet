// import { CHANGE_PAGE, CHANGE_GAME_ID, CHANGE_TEMPLATE_NAME} from '../constants/pages';
import { CHANGE_PAGE, CHANGE_GAME_ID } from '../constants/pages';

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page
  };
}

export function changeGameID(gameid) {
  return {
    type: CHANGE_GAME_ID,
    gameid
  };
}
