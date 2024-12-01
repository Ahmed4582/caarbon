import { createSlice } from "@reduxjs/toolkit";
import { actProductDetails } from "./actProductDetails/actProductDetails";
const initialState = {
  productDetails: [],
  loading: "idle",
  error: null,
};
const productDetailsSlice = createSlice({
  name: "product-detail",
  initialState,
  reducers: {
    resetDetailsData: (state) => {
      state.loading = "pending";
      state.error = null;
      state.productDetails = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actProductDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actProductDetails.fulfilled, (state, action) => {
      state.loading = "idle";
      state.productDetails = action.payload;
    });
    builder.addCase(actProductDetails.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    });
  },
});

export const { resetDetailsData } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
