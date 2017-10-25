import { UPDATE_PLAYERS } from '../constants/game-page';

export function updatePlayers(allPlayers) {
  return {
    type: UPDATE_PLAYERS,
    allPlayers
  };
}