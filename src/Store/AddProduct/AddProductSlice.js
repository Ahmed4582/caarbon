import { createSlice } from "@reduxjs/toolkit";
import { actAddProduct } from "./actAddProduct/actAddProduct";
const initialState = {
  response: [],
  loading: "idle",
  error: null,
};
const addProductSlice = createSlice({
  name: "add-product",
  initialState,
  reducers: {
    resetAddLoading: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actAddProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddProduct.fulfilled, (state, action) => {
      state.loading = "success";
      state.response = action.payload;
    });
    builder.addCase(actAddProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
    });
  },
});
export const { resetAddLoading } = addProductSlice.actions;
export default addProductSlice.reducer;
