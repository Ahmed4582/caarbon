import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actProductDetails = createAsyncThunk(
  "api/productDetails",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await mockAPI.getProductDetails(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
