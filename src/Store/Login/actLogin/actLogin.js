import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actLogin = createAsyncThunk(
  "api/login",
  async (values, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.post(
        `auth/Login`,
        values
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
