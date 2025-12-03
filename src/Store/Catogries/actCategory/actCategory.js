import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actCategory = createAsyncThunk(
  "api/category",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await mockAPI.getCategories();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
