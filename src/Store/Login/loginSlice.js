import { createSlice } from "@reduxjs/toolkit";
import { actLogin } from "./actLogin/actLogin";

const initialState = {
  token: "",
  loading: "idle",
  error: null,
  logoutStatus: "idle",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetData: (state) => {
      state.token = "";
      state.loading = "idle";
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
    },
    resetLoading: (state) => {
      state.loading = "idle";
    },
    logout: (state) => {
      state.token = "";
      state.logoutStatus = "success";
    },
    resetLogoutStatus: (state) => {
      state.logoutStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actLogin.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actLogin.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.token = action.payload.jwt;
      })
      .addCase(actLogin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.detail;
      });
  },
});

export const {
  resetData,
  resetError,
  resetLoading,
  logout,
  resetLogoutStatus,
} = loginSlice.actions;
export default loginSlice.reducer;
