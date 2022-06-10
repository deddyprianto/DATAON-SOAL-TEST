import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionLogin } = appSlice.actions;

export default appSlice.reducer;
