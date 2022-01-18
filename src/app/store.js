import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/HomeSlice";
import AppSettingsReducer from "../features/AppSettingsSlice";

export const store = configureStore({
  reducer: { home: HomeReducer, settings: AppSettingsReducer },
});
