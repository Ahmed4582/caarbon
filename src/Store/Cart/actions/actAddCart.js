import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actAddToCart = createAsyncThunk(
  "api/add-cart",
  async (ProductID, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.addToCart(ProductID, token);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
