import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Authentication",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state, action) => {
      return { ...state, token: action.payload.token, isAuthenticated: true };
    },
    logout: (state, action) => {
      return { ...state, token: "", isAuthenticated: false };
    },
  },
});
export const { authenticate, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
