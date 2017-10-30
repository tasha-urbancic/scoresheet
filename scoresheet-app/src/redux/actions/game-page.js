import {
  UPDATE_PLAYERS,
  SAVE_GAME_INFO,
  CREATING_GAME,
  CLEAR_CREATING_GAME,
  CLEAR_GAME,
  RENDER_GAME_INFO
} from '../constants/game-page';

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

export function creatingGame() {
  return { type: CREATING_GAME };
}

export function clearCreatingGame() {
  return { type: CLEAR_CREATING_GAME };
}

export function clearGame() {
  return { type: CLEAR_GAME };
}

export function renderGameInfo(gameInfo) {
  return {
    type: RENDER_GAME_INFO,
    gameInfo
  };
}
