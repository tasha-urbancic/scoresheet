import { addTemplate } from './templates';
import { startGame } from './start-game';

export function getTemplates() {
  return dispatch => {
    fetch('http://localhost:8080/api/templates', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(res => res.json())
      .then(data => {
        data.map(template => {
          console.log('adding template', template);
          dispatch(addTemplate(template));
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startNewGame(templateID) {
  return dispatch => {
    fetch('http://localhost:8080/api/games/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(res => res.json())
      .then(data => {
        data.map(gameInfo => {
          console.log('adding gameInfo', gameInfo);
          dispatch(startGame(gameInfo));
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
