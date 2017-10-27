import {
  UPDATE_PLAYERS,
  SAVE_GAME_INFO,
  CREATING_GAME,
  CLEAR_CREATING_GAME
} from '../constants/game-page';

export default (state = { allPlayers: [], gameInfo: {} }, action) => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return {
        ...state,
        allPlayers: action.allPlayers
      };
    case SAVE_GAME_INFO:
      return {
        ...state,
        gameInfo: action.gameInfo
      };
    case CREATING_GAME:
      return {
        ...state,
        creatingGame: true
      };
    case CLEAR_CREATING_GAME:
      return {
        ...state,
        creatingGame: false
      };
    default:
      return state;
  }
};
