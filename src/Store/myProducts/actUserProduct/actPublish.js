import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actPublish = createAsyncThunk(
  "api/Publish",
  async (id, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.publishProduct(id, token);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
