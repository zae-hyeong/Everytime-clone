import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import boardSlice from "./boardSlice";

const store = configureStore({
  reducer: { comment: commentSlice, post: postSlice, board: boardSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
