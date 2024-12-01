import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actAddProduct = createAsyncThunk(
  "api/addProduct",
  async (data, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await axios.post(`/api/add-product`, data, {
        mode: "cors",
        headers: {
          token,
        },
      });

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
