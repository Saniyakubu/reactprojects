import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
      if (state.count < 0) {
        state.count = 0;
        return;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
