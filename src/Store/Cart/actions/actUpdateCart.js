import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const actUpdateCart = createAsyncThunk(
  "api/update-cart",
  async ({ ProductId, amount }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { token } = getState().loginSlice;
    const { id } = getState().userInfoSlice.info;

    const data = {
      user_id: id,
      product_id: ProductId,
      amount: amount,
    };

    try {
      const res = await axios.post(`cart/update-amount-product`, data, {
        headers: {
          jwt: token, // JWT token
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default actUpdateCart;
