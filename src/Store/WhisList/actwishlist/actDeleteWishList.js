import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actDeleteWishList = createAsyncThunk(
  "wishlist/delete-product",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;

    try {
      const response = await axios.get(`/api/unwish-product/${id}`, {
        headers: {
          token: token,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
