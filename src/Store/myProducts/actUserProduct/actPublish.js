import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actPublish = createAsyncThunk(
  "api/Publish",
  async (id, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await axios.get(`/api/publish-product/${id}`, {
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
