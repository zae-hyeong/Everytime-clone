import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import boardSlice from "./boardSlice";
import uploadPostSlice from "./uploadPostSlice";
import asideSlice from "./asideSlice";

const store = configureStore({
  reducer: {
    comment: commentSlice,
    post: postSlice,
    board: boardSlice,
    postInput: uploadPostSlice,
    aside: asideSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
