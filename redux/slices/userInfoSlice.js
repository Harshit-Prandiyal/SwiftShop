import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "UserInfo",
  initialState: {
    name: "",
    email: "",
    newUser: true,
  },
  reducers: {
    setEmail: (state, action) => {
      return { ...state, email: action.payload.email };
    },
    setName: (state, action) => {
      return { ...state,  name: action.payload.name };
    },
    changeUserStatus: (state, action) => {
      return { ...state, newUser: action.payload };
    },
  },
});
export const { setEmail, setName ,changeUserStatus} = userInfoSlice.actions;
export default userInfoSlice.reducer;