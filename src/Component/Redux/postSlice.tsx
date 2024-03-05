import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Post from "public/class/Post";

export interface PostListState {
  posts: Post[];
}

const initialState: PostListState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    appendPost: (state, action: PayloadAction<Post>) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(
        (post) => post.postId !== action.payload
      );
    },
  },
});

export const { appendPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
