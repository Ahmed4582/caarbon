import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actDeleteCart = createAsyncThunk(
  "api/delete-cart",
  async (ProductID, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;
    const { id } = getState().userInfoSlice.info;

    const data = {
      user_id: id,
      product_id: ProductID,
    };

    try {
      const res = await axios.post(
        `cart/remove-from-cart`,
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
