import { createSlice } from "@reduxjs/toolkit";
import { actRegister } from "./actRegister/actRegister";

const initialState = {
  response: [],
  loading: "idle",
  error: null,
};

const registerSlice = createSlice({
  name: "register",
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
      .addCase(actRegister.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actRegister.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.response = action.payload;
      })
      .addCase(actRegister.rejected, (state, action) => {
        state.loading = "failed";

        state.error = action.payload;
      });
  },
});

export const { resetData, resetError } = registerSlice.actions;
export default registerSlice.reducer;
