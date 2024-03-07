import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PostFormInputState {
  title: string;
  content: string;
}

const initialState: PostFormInputState = {
  title: "",
  content: "",
};

const uploadPostSlice = createSlice({
  name: "uploadPost",
  initialState,
  reducers: {
    titleInput: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    contentInput: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    initialInput: (state) => {
      state.title = "";
      state.content = "";
    },
  },
});

export const { titleInput, contentInput, initialInput } =
  uploadPostSlice.actions;
export default uploadPostSlice.reducer;
