import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../features/HomeSlice";
import AppSettingsReducer from "../features/AppSettingsSlice";
import UserReducer from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    home: HomeReducer,
    settings: AppSettingsReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
