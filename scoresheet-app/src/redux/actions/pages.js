import { CHANGE_PAGE } from '../constants/pages';

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page
  };
}
