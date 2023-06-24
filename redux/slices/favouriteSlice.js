import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "Favourites",
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;