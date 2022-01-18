import { createSlice } from "@reduxjs/toolkit";

const initialState = { showTabBarLabel: false };

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowTabBarLabel: (state) => {
      state.showTabBarLabel = !state.showTabBarLabel;
    },
  },
});

export const { setShowTabBarLabel } = settings.actions;
export const useAppSettings = (state) => state.settings;
export default settings.reducer;
