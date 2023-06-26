import { createSlice } from "@reduxjs/toolkit";

const yourordersSlice = createSlice({
  name: "YourOrders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addOrder } = yourordersSlice.actions;
export default yourordersSlice.reducer;