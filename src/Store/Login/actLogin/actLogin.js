import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actLogin = createAsyncThunk(
  "api/login",
  async (values, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await mockAPI.login(values);
      return res;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
