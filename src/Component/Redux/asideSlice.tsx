import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AsideState {
  isActive: boolean;
}

const initialState: AsideState = {
  isActive: false,
};

const asideSlice = createSlice({
  name: "aside",
  initialState,
  reducers: {
    activeAside: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { activeAside } = asideSlice.actions;
export default asideSlice.reducer;
