import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actRegister = createAsyncThunk(
  "api/register",
  async (values, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.post(
        `auth/Register`,
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
