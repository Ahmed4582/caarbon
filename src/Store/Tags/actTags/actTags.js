import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actTags = createAsyncThunk("api/tags", async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await axios.get(`/api/tags/`);
    return res.data;
  } catch (error) {
    rejectWithValue(error);
  }
});
