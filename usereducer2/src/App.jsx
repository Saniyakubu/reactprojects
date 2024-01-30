import { useReducer } from 'react';
import { reducer } from './reducer';
import { actionType } from './actions';
import './App.css';
const defaultState = {
  counterState: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);

  function add() {
    dispatch({ type: actionType.ADD });
  }
  function minus() {
    dispatch({ type: actionType.MINUS });
  }
  function reset() {
    dispatch({ type: actionType.RESET_COUNTER });
  }

  return (
    <div>
      <div>
        <button onClick={add}>+</button>
        <p>{state.counterState}</p>
        <button onClick={minus}>-</button>
      </div>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
