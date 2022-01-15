import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/HomeSlice";

export const store = configureStore({
  reducer: { home: HomeReducer },
});
