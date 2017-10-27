import { UPDATE_PLAYERS, SAVE_GAME_INFO } from '../constants/game-page';

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
    default:
      return state;
  }
};
