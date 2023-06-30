import { useState } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";

import { createUser } from "../util/auth";
import { useSelector ,useDispatch } from "react-redux";
import { authenticate } from "../redux/slices/AuthSlice";
import { setName ,setEmail } from "../redux/slices/userInfoSlice";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();
  async function signupHandler({ email, password ,name}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      dispatch(authenticate({token:token}));
      dispatch(setName({name:name}));
      dispatch(setEmail({email:email}));
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
