import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthSlice = createSlice({
  name: "Authentication",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state, action) => {
      AsyncStorage.setItem('token', action.payload.token);
      return { ...state, token: action.payload.token, isAuthenticated: true };
    },
    logout: (state, action) => {
      AsyncStorage.removeItem('token');
      return { ...state, token: "", isAuthenticated: false };
    },
  },
});
export const { authenticate, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
