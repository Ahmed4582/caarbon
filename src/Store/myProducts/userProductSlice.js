import { actArchive } from "./actUserProduct/actArchief";
import { actPublish } from "./actUserProduct/actPublish";
import { actUserProduct } from "./actUserProduct/actUserProduct";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productStatus: [],
  status: "idle",
  loading: "idle",
  userProduct: [],
  error: null,
};

const userProductSlice = createSlice({
  name: "user-product",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actUserProduct.pending, (state) => {
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(actUserProduct.fulfilled, (state, action) => {
      state.loading = "fulfilled";

      state.userProduct = action.payload;
    });
    builder.addCase(actUserProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
    // Archive
    builder.addCase(actArchive.pending, (state) => {
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(actArchive.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.status = "Archive";
      state.productStatus = action.payload;
    });
    builder.addCase(actArchive.rejected, (state, action) => {
      state.loading = "failed";

      state.error = action.payload;
    });
    // Publish
    builder.addCase(actPublish.pending, (state) => {
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(actPublish.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.status = "Publish";
      state.productStatus = action.payload;
    });
    builder.addCase(actPublish.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});
export const { resetStatus } = userProductSlice.actions;
export default userProductSlice.reducer;
