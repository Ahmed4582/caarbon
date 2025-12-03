import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actGetCart = createAsyncThunk(
  "api/get-cart",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.getCart(token);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
