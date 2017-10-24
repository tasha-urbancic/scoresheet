import { ADD_PLAYER } from '../constants/game-page';

export function addPlayer(allPlayers) {
  return {
    type: ADD_PLAYER,
    allPlayers
  };
}