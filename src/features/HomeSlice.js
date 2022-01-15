import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearch: false,
};

const home = createSlice({
  name: "home",
  initialState,
  reducers: {
    toggleShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { toggleShowSearch } = home.actions;
export const useShowSearch = (state) => state.home.showSearch;
export default home.reducer;
