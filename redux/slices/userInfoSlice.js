import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "UserInfo",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setEmail: (state, action) => {
      return { ...state, email: action.payload.email };
    },
    setName: (state, action) => {
      return { ...state,  name: action.payload.name };
    },
  },
});
export const { setEmail, setName } = userInfoSlice.actions;
export default userInfoSlice.reducer;