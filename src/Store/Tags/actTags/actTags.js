import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actTags = createAsyncThunk("api/tags", async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await mockAPI.getTags();
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});
