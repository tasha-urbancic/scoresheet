import { ADD_PLAYER} from '../constants/game-page';

export default (state = {allPlayers: []}, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        allPlayers = action.allPlayers 
      }
    default:
      return state;
  }
};
