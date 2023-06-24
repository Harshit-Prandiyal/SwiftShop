import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "Favourites",
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
    removeFavourite: (state, action) => {
      // state = state.filter( (item)=> item.id !== action.payload.id );
      const itemId = action.payload.id;
      const itemIndex = state.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state = state.splice(itemIndex, 1);
      }
    },
  },
});
export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
