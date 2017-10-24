import { DATA_FETCH } from '../constants/grab-data';
import { addTemplate } from './templates';

export function dataFetch() {
  return dispatch => {
    fetch('http://localhost:8080/api/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        data.templates.map(template => {
          console.log('adding template', template);
          dispatch(addTemplate(template));
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
