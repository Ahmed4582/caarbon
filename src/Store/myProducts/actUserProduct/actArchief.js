import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actArchive = createAsyncThunk(
  "api/Archive",
  async (id, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await axios.get(`/api/archive-product/${id}`, {
        headers: {
          token: token,
        },
      });
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
