import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;
export const useUser = (state) => state.user.user;
export default UserSlice.reducer;
