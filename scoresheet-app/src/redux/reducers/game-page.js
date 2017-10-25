import { UPDATE_PLAYERS } from '../constants/game-page';

export default (state = { allPlayers: [] }, action) => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return {
        ...state,
        allPlayers: action.allPlayers
      };
    default:
      return state;
  }
};
