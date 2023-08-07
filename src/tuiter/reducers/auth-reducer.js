import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/auth-thunks";
import { profileThunk } from "../services/auth-thunks";
import { logoutThunk } from "../services/auth-thunks";
import { updateUserThunk } from "../services/auth-thunks";
import { registerThunk } from "../services/auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null },
  reducers: {},
  extraReducers: {
    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },
    [profileThunk.pending]: (state, action) => {
      state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});
export default authSlice.reducer;