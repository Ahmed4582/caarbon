import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actDeleteWishList = createAsyncThunk(
  "wishlist/delete-product",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;

    try {
      const response = await mockAPI.removeFromWishlist(id, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
