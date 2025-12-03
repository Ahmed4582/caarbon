import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";
const actUpdateCart = createAsyncThunk(
  "api/update-cart",
  async ({ ProductId, amount }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.updateCart(ProductId, amount, token);
      return res;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default actUpdateCart;
