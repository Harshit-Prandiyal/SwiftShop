import { useState } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";
import { login } from "../util/auth";
import { useDispatch } from "react-redux";
import { authenticate } from "../redux/slices/AuthSlice";
import { setEmail ,changeUserStatus} from "../redux/slices/userInfoSlice";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    dispatch(setEmail({email:email}));
    dispatch(changeUserStatus(false));
    try {
      const token = await login(email, password);
      dispatch(authenticate({token:token}));
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
