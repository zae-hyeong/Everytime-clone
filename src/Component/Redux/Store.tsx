import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: { comment: commentSlice, post: postSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
