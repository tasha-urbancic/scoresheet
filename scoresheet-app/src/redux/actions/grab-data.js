import { addTemplate } from './templates';
import { saveGameInfo, creatingGame, clearCreatingGame } from './game-page';

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

export function postNewGame(templateID) {
  return dispatch => {
    dispatch(creatingGame());
    fetch('http://localhost:8080/api/games/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ templateID: templateID })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        dispatch(saveGameInfo(data));
        return Promise.resolve();
      })
      .then(() => {
        dispatch(clearCreatingGame());
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function postNewTemplate(newTemplate) {
  return dispatch => {
    fetch('http://localhost:8080/api/templates/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({
        templateRules: newTemplate.templateRules,
        templateColumns: newTemplate.templateColumns,
        templateNote: newTemplate.templateNote,
        templateName: newTemplate.templateName
      })
    });
  };
}
