import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import boardSlice from "./boardSlice";
import uploadPostSlice from "./uploadPostSlice";
import asideSlice from "./asideSlice";
import { useDispatch } from "react-redux";

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
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
