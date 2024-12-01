import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actAddToCart = createAsyncThunk(
  "api/add-cart",
  async (ProductID, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;
    const { id } = getState().userInfoSlice.info;

    const data = {
      user_id: id,
      product_id: ProductID,
      amount: 1,
    };

    try {
      const res = await axios.post(
        `cart/add-to-cart`,
        data,
        {
          headers: {
            jwt: token,
          },
        }
      );

      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
