import { addTemplate } from "./templates";
import { saveGameInfo, creatingGame, clearCreatingGame } from "./game-page";

console.log("stuff: ", document.location);

const ipAddress = document.location.origin.split("/")[2].split(":")[0];

export function getTemplates() {
  return dispatch => {
    fetch(`http://${ipAddress}:8080/api/templates`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        data.map(template => {
          console.log("adding template", template);
          dispatch(addTemplate(template));
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function postNewGame(templateID) {
  // console.log('barf', JSON.stringify(templateID));
  return dispatch => {
    dispatch(creatingGame());
    fetch(`http://${ipAddress}:8080/api/games/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
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
