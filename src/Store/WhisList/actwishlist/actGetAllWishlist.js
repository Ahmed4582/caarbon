import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetAllWishlist = createAsyncThunk(
  "wishlist/get-product",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // const { token } = getState().loginSlice;

    try {
      // const response = await axios.get(`/api/mywishlist`, {
      //   headers: {
      //     token: token,
      //   },
      // });

      // return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
