import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Comment from "public/class/Comment";

export interface CommentListState {
  comments: Comment[];
}

const initialState: CommentListState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    appendComment: (state, action: PayloadAction<Comment>) => {
      state.comments = [...state.comments, action.payload];
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(
        (comment) => comment.commentId !== action.payload
      );
    },
  },
});

export const { appendComment } = commentSlice.actions;
export default commentSlice.reducer;
