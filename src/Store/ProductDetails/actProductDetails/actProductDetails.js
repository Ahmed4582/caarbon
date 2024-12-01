import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actProductDetails = createAsyncThunk(
  "api/productDetails",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(`car/get-single-car/${id}`);

      return res.data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
