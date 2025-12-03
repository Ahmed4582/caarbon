import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actPushWishList = createAsyncThunk(
  "wishlist/push-product",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;
    
    try {
      const response = await mockAPI.addToWishlist(id, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
