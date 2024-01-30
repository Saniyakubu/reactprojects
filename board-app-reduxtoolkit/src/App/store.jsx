import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postSlice';
import userReducer from '../features/post/usersSlice';
export const Store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
});

console.log(Store);
