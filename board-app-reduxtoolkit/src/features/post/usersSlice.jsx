import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const USERS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get(USERS_URL);
  const data = await res.data;
  return data;
});
export const initialState = {
  users: [],
  isLoading: true,
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        const allUsers = action.payload.map((user) => {
          return user;
        });
        state.users = state.users.concat(allUsers);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.error.message);
      });
  },
});

export const getAllUsers = (state) => state.user.users;

export default userSlice.reducer;
