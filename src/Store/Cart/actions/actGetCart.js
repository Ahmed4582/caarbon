import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetCart = createAsyncThunk(
  "api/get-cart",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await axios.get(`cart/get-cart`, {
        headers: {
          jwt: token,
        },
      });

      
      return res.data.data.products;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
