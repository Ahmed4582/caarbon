import { createAsyncThunk } from "@reduxjs/toolkit";
import mockAPI from "../../../API/mockAPI";

export const actArchive = createAsyncThunk(
  "api/Archive",
  async (id, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { token } = getState().loginSlice;

    try {
      const res = await mockAPI.archiveProduct(id, token);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
