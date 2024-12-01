import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actOTP = createAsyncThunk("api/otp", async (values, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await axios.post(
      `/auth/verify-otp/`,
      values
    );

    return res.data;
  } catch (error) {
    return rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});
