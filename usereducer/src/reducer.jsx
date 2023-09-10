import { actionType } from './actions';
import peopleArray from './Data';
export const reducer = (state, action) => {
  if (action.type === actionType.CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === actionType.RESET_LIST) {
    return { ...state, people: peopleArray };
  }
  if (action.type === actionType.DELETE) {
    console.log(state);
    const newPeopleArray = state.people.filter(
      (person) => person.name !== action.payload.name
    );

    return { ...state, people: newPeopleArray };
  }

  if (action.type === actionType.ADD) {
    console.log(state);
    return { ...state, plusState: state.plusState + 1 };
  }

  if (action.type === actionType.MINUS) {
    console.log(state);
    return { ...state, plusState: state.plusState - 1 };
  }

  throw new Error(`no Matching "${action.type}"--type`);
};
