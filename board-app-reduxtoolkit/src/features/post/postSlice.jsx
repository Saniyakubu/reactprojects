import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
export const initialState = [
  {
    id: 1,
    content: 'This is the first post.',
    comments: 'Comment 1 for Post 2',
  },
  {
    id: 2,
    content: 'Second post here.',
    comments: 'Comment 1 for Post 2',
  },
  {
    id: 3,
    content: 'Another post to add.',
    comments: 'Comment 1 for Post 2',
  },
];

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    NewPosts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content, comments) {
        return {
          payload: {
            id: nanoid(),
            content,
            comments,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { NewPosts } = postSlice.actions;

export default postSlice.reducer;
