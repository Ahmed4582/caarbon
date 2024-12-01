import { createSlice } from "@reduxjs/toolkit";
import { actPushWishList } from "./actwishlist/actAddWishList";
import { actDeleteWishList } from "./actwishlist/actDeleteWishList";
import { actGetAllWishlist } from "./actwishlist/actGetAllWishlist";

const initialState = {
  wishlist: [],
  response: [],
  loading: "idle",
  addLoading: "idle",
  deleteLoading: "idle",
  error: null,
  wishListError: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishListLoading: (state) => {
      state.deleteLoading = "idle";
      state.addLoading = "idle";
      state.loading = "idle";
    },
    resetWishListData: (state) => {
      state.wishlist = [];
      state.response = [];
      state.loading = "idle";
      state.error = null;
    },
    wishListError: (state) => {
      state.wishListError = "error";
    },
    resetWishListError: (state) => {
      state.wishListError = "idle";
    },
  },
  extraReducers: (builder) => {
    // Get All Wishlist
    builder.addCase(actGetAllWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetAllWishlist.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.wishlist = action.payload;
    });
    builder.addCase(actGetAllWishlist.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
    });

    // Add to Wishlist
    builder.addCase(actPushWishList.pending, (state) => {
      state.addLoading = "pending";
      state.error = null;
    });
    builder.addCase(actPushWishList.fulfilled, (state, action) => {
      state.addLoading = "fulfilled";
      state.response = action.payload;
    });
    builder.addCase(actPushWishList.rejected, (state, action) => {
      state.addLoading = "failed";
      state.error = action.error;
    });
    // Delete
    builder.addCase(actDeleteWishList.pending, (state) => {
      state.deleteLoading = "pending";
      state.error = null;
    });
    builder.addCase(actDeleteWishList.fulfilled, (state, action) => {
      state.deleteLoading = "fulfilled";
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    });
    builder.addCase(actDeleteWishList.rejected, (state, action) => {
      state.deleteLoading = "failed";
      state.error = action.error;
    });
  },
});
export const {
  resetWishListLoading,
  resetWishListData,
  resetWishListError,
  wishListError,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
