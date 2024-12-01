import { createSlice } from "@reduxjs/toolkit";
import { actUserInfo } from "./actUserInfo/actUserInfo";

const initialState = {
  info: [],
  loading: "idle",
  error: null,
};

const userInfoSlice = createSlice({
  name: "user-info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actUserInfo.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actUserInfo.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(actUserInfo.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
    });
  },
});
export default userInfoSlice.reducer;
