import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Post from "public/class/Post";
import { dummyPosts } from "public/dummyData/dummyData";

export interface PostListState {
  posts: Post[];
}

const initialState: PostListState = {
  posts: dummyPosts,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    appendPost: (state, action: PayloadAction<Post>) => {
      state.posts = [action.payload, ...state.posts];
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
