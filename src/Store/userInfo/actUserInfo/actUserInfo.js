import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actUserInfo = createAsyncThunk(
  "api/user-info",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;

    try {
      const response = await axios.get(`auth/User`, {
        headers: {
          jwt: token,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
