import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";

const store = configureStore({
  reducer: commentSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
