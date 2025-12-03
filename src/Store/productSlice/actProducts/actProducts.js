import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actProducts = createAsyncThunk(
  "api/products",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await mockAPI.getProducts();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
