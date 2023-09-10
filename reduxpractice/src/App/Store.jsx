import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counter/counterSlice';

export const Store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

console.log(Store);
