import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
function Count() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default Count;
