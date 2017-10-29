import {
  UPDATE_PLAYERS,
  SAVE_GAME_INFO,
  CREATING_GAME,
  CLEAR_CREATING_GAME,
  CLEAR_GAME
} from '../constants/game-page';

const defaultState = {
  allPlayers: [],
  gameInfo: {
    fields: [],
    templateInfo: {},
    pieces: [],
    game: {}
  }
};

export default (state = defaultState, action) => {
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
    case CLEAR_GAME:
      return defaultState;
    default:
      return state;
  }
};
