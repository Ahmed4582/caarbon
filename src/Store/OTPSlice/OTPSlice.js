import { createSlice } from "@reduxjs/toolkit";
import { actOTP } from "./actOTP/actOTP";

const initialState = {
  response: [],
  loading: "idle",
  error: null,
};

const OTPSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    resetData: (state) => {
      state.response = [];
      state.loading = "idle";
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actOTP.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actOTP.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.response = action.payload;
      })
      .addCase(actOTP.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetData, resetError } = OTPSlice.actions;
export default OTPSlice.reducer;
