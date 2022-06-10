import { configureStore } from "@reduxjs/toolkit";
import counterAppSlice from "../features/root/appSlice";
export const store = configureStore({
  reducer: {
    appSlice: counterAppSlice,
  },
});
