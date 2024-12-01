import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actProducts = createAsyncThunk(
  "api/products",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(`/car/get-cars`, {
        mode: "cors",
      });
      
      return res.data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
