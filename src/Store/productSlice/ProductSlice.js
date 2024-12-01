import { createSlice } from "@reduxjs/toolkit";
import { actProducts } from "./actProducts/actProducts";
const initialState = {
  products: [],
  loading: "idle",
  error: null,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actProducts.fulfilled, (state, action) => {
      state.loading = "idle";
      state.products = action.payload;
    });
    builder.addCase(actProducts.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    });
  },
});

export default productSlice.reducer;
