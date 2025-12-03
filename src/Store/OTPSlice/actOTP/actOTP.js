import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actOTP = createAsyncThunk("api/otp", async (values, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await mockAPI.verifyOTP(values);
    return res;
  } catch (error) {
    return rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});
