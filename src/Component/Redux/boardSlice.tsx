import { createSlice } from "@reduxjs/toolkit";

export interface BoardState {
  boardPage: number;
}

const initialState: BoardState = {
  boardPage: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.boardPage += 1;
    },
  },
});

export const { nextPage } = boardSlice.actions;
export default boardSlice.reducer;
