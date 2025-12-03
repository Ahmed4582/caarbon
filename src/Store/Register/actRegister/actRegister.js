import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actRegister = createAsyncThunk(
  "api/register",
  async (values, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await mockAPI.register(values);
      return res;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
