import { TOGGLE_MENU } from '../constants';

export function toggleMenu(payload) {
  return {
    type: TOGGLE_MENU,
    payload,
  };
}
