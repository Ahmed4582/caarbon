import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actUserProduct = createAsyncThunk(
  "api/actUserProduct",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await axios.get(`/api/myproducts`, {
        mode: "cors",
        headers: {
          token,
        },
      });

      return res.data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
