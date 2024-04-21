import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "public/class/Post";

export interface PostListState {
  posts: IPost[];
}

const initialState: PostListState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    appendPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [action.payload, ...state.posts];
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(
        (post) => post.postId !== action.payload
      );
    },
  },
});

export const { appendPost, deletePost, setPosts } = postSlice.actions;
export default postSlice.reducer;
