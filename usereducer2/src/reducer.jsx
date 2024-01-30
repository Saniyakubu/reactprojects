import { actionType } from './actions';

export const reducer = (state, action) => {
  if (action.type === actionType.ADD) {
    return { ...state, counterState: state.counterState + 1 };
  }

  if (action.type === actionType.MINUS) {
    return { ...state, counterState: state.counterState - 1 };
  }
  if (action.type === actionType.RESET_COUNTER) {
    return { ...state, counterState: 0 };
  }

  throw new Error(`no Matching "${action.type}"--type`);
};
