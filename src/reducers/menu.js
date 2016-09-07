import { TOGGLE_MENU } from '../constants';

export default function runtime(state = { open: false }, { type, payload }) {
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        open: typeof payload === 'boolean' ? payload : !state.open,
      };
    default:
      return state;
  }
}
