import { UPDATE_PLAYERS, SAVE_GAME_INFO } from '../constants/game-page';

export function updatePlayers(allPlayers) {
  return {
    type: UPDATE_PLAYERS,
    allPlayers
  };
}

export function saveGameInfo(gameInfo) {
  return {
    type: SAVE_GAME_INFO,
    gameInfo
  };
}
