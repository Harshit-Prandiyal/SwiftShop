import { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../FlatButton";
import AuthForm from "./AuthForm";
import { GlobalStyles } from "../../costants/colors";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <Text style={styles.heading}>{isLogin ? "SIGN IN " : "SIGN UP"}</Text>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <Text
          style={{
            color: GlobalStyles.colors.white69,
            textAlign: "center",
            paddingVertical: 6,
          }}
        >
          {isLogin ? "Don't  have an account? " : "already have an account"}
        </Text>
        <FlatButton
          onPress={switchAuthModeHandler}
          color={GlobalStyles.colors.green69}
        >
          {isLogin ? "SIGN UP" : "SIGN IN"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.black69,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 10,
    color: GlobalStyles.colors.white69,
  },
  buttons: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
});
