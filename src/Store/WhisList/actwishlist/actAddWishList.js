import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actPushWishList = createAsyncThunk(
  "wishlist/push-product",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;
    
    try {
      const response = await axios.get(
        `/api/wish-product/${id}`,

        {
          headers: {
            token: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
