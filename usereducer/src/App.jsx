import { useReducer } from 'react';
import peopleArray from './Data';
import './App.css';
import { actionType } from './actions';
import { reducer } from './reducer';
import { memo } from 'react';
const defaultState = {
  people: peopleArray,
  plusState: 0,
};

// const defaultCounterState = {
//   plusState: 0,
// };

const plusState = () => {};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);
  // const [plusState, dispatchState] = useReducer(reducer, defaultCounterState);
  // console.log(plusState);
  function remove(name) {
    dispatch({ type: actionType.DELETE, payload: { name } });
  }
  function clear() {
    dispatch({ type: actionType.CLEAR_LIST });
  }
  function reset() {
    dispatch({ type: actionType.RESET_LIST });
  }

  function add() {
    dispatch({ type: 'ADD' });
  }
  function minus() {
    dispatch({ type: 'MINUS' });
  }

  return (
    <div>
      <div>
        {state.people.map((person) => {
          return (
            <div key={person.name}>
              {person.name}
              <br />
              <button onClick={() => remove(person.name)}>delete</button>
              <br />
            </div>
          );
        })}
        {state.people.length > 0 ? (
          <button onClick={clear}>clearList</button>
        ) : (
          <button onClick={reset}>Reset</button>
        )}
      </div>

      <div>
        <button onClick={add}>+</button>
        <p>{state.plusState}</p>
        <button onClick={minus}>_</button>
      </div>
    </div>
  );
}

export default App;
