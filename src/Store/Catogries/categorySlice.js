import { createSlice } from "@reduxjs/toolkit";
import { actCategory } from "./actCategory/actCategory";

const initialState = {
  category: [],
  loading: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actCategory.fulfilled, (state, action) => {
      state.loading = "fulfilled";

      state.category = action.payload;
    });
    builder.addCase(actCategory.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error;
    });
  },
});
export default categorySlice.reducer;
