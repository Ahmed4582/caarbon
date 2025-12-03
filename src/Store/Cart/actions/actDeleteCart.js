import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actDeleteCart = createAsyncThunk(
  "api/delete-cart",
  async (ProductID, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.removeFromCart(ProductID, token);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
