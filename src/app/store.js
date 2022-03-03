import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { StoryArc_API } from "../services/storyarc";
import HomeReducer from "../features/HomeSlice";
import AppSettingsReducer from "../features/AppSettingsSlice";
import UserReducer from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    [StoryArc_API.reducerPath]: StoryArc_API.reducer,
    home: HomeReducer,
    settings: AppSettingsReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StoryArc_API.middleware),
});

setupListeners(store.dispatch);
