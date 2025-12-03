import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actUserProduct = createAsyncThunk(
  "api/actUserProduct",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.getUserProducts(token);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
