import { createSlice } from "@reduxjs/toolkit";
import { actGetCart } from "./actions/actGetCart";
import { actAddToCart } from "./actions/actAddCart";
import { actDeleteCart } from "./actions/actDeleteCart";
import actUpdateCart from "./actions/actUpdateCart";

const initialState = {
  cart: [],
  deleteStatus: "idle",
  updateStatus: "idle",
  addStatus: "idle",
  response: "idle",
  loading: "idle",
  status: "idle",
  error: null,
  tokenNeeded: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetResponse: (state) => {
      state.addStatus = "idle";
    },
    statusError: (state) => {
      state.status = "exist";
    },
    resetAddStatus: (state) => {
      state.status = "idle";
    },
    resetDeleteStatus: (state) => {
      state.deleteStatus = "idle";
    },
    resetUpdateStatus: (state) => {
      state.updateStatus = "idle";
    },
    setAddStatus: (state) => {
      state.updateStatus = "Limited";
    },
    TokenNeededAction: (state) => {
      state.tokenNeeded = "Needed";
    },
    ResetTokenNeeded: (state) => {
      state.tokenNeeded = "idle";
    },
  },
  //   Get Cart Data
  extraReducers: (builder) => {
    builder.addCase(actGetCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actGetCart.fulfilled, (state, action) => {
      state.loading = "fulfilled";

      state.cart = action.payload;
    });
    builder.addCase(actGetCart.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error;
    });
    // Add Product
    builder.addCase(actAddToCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actAddToCart.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.addStatus = "add Success";
      state.response = action.payload;
    });
    builder.addCase(actAddToCart.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error;
    });
    // delete Product
    builder.addCase(actDeleteCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actDeleteCart.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.deleteStatus = "delete Successfully";
      state.response = action.payload;
    });
    builder.addCase(actDeleteCart.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error;
    });
    // update Product
    builder.addCase(actUpdateCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actUpdateCart.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.response = action.payload;
      state.updateStatus = "update Successfully";
    });
    builder.addCase(actUpdateCart.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error;
    });
  },
});
export const {
  resetResponse,
  statusError,
  setAddStatus,
  ResetTokenNeeded,
  TokenNeededAction,
  resetDeleteStatus,
  resetAddStatus,
  resetUpdateStatus,
} = cartSlice.actions;
export default cartSlice.reducer;
