import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actCategory = createAsyncThunk(
  "api/category",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(
        `api/get-categories`
      );

      return res.data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
