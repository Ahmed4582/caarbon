import { createSlice } from "@reduxjs/toolkit";
import { actTags } from "./actTags/actTags";

const initialState = {
  tags: [],
  loading: "idle",
  error: null,
};

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actTags.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actTags.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.tags = action.payload;
    });
    builder.addCase(actTags.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
    });
  },
});
export default TagsSlice.reducer;
