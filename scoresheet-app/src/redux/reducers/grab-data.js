import { DATA_FETCH } from '../constants/grab-data';

export default (state = [], action) => {
  switch (action.type) {
    case DATA_FETCH:
      return action.data;
    default:
      return state;
  }
};
