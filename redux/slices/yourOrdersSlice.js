import { createSlice } from "@reduxjs/toolkit";

const yourordersSlice = createSlice({
  name: "YourOrders",
  initialState: [],
  reducers: {
    initialiseOrders: (state, action) => {
      return action.payload;
    },
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addOrder ,initialiseOrders } = yourordersSlice.actions;
export default yourordersSlice.reducer;