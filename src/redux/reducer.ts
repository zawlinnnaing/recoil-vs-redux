import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxAction, State } from "./types";

const INITIAL_STATE: State = {
  count: 0,
  textValue: "",
};

export const appSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "redux-app",
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    reset: () => {
      return INITIAL_STATE;
    },
    changeText: (state, action: PayloadAction<string>) => {
      state.textValue = action.payload;
    },
  },
});

export const { increment, reset, changeText } = appSlice.actions;
