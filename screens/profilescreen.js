import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../costants/colors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

import IconButton from "../components/IconButton";
import { storeMyOrder,fetchMyOrders } from "../util/http";

function Profilescreen({ route, navigation }) {
  const orders = useSelector((state) => state.YourOrders);
  const user = useSelector((state) => state.UserInfo);
  let newmail="";
    for(const i in user.email){
      if(user.email[i]!=='.'){
        newmail+=user.email[i];
      }
        
    }
  const dispatch = useDispatch();
  function logoutButtonHandler() {
    Alert.alert("Confirm Logout", "Are you sure you want to log out", [
      {
        text: "Cancel",
        onPress: () => console.log("Log out Canceled"),
        style: "cancel",
      },
      {
        text: "Okay",
        style: "destructive",
        onPress: () => dispatch(logout()),
      },
    ]);
  }
  function fetchtest(){
    Alert.alert("Confirm storing", "Are you sure you want to store orders", [
      {
        text: "Cancel",
        onPress: () => console.log("Log out Canceled"),
        style: "cancel",
      },
      {
        text: "Okay",
        style: "destructive",
        onPress: () =>
        fetchMyOrders( newmail),
      },
    ]);
  }
  function testFn() {
    
    console.log( newmail);
    Alert.alert("Confirm storing", "Are you sure you want to store orders", [
      {
        text: "Cancel",
        onPress: () => console.log("Log out Canceled"),
        style: "cancel",
      },
      {
        text: "Okay",
        style: "destructive",
        onPress: () =>
        storeMyOrder( { testing : "This is for testing"} ,newmail),
      },
    ]);
  }
  //storeMyOrder({ [user.email] : { testing : "This is for testing"} }),
  //storeMyOrder({orderData: { purpose: "This is for testing" },email: user.email,}),
  function yourordersButtonHandler() {
    navigation.navigate("YourOrdersScreen");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>

      <View style={styles.section1}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1687852759~exp=1687853359~hmac=2b1baa5fae77a1d29ef0f9de49569eb225e67a0e687129a0ab3584d19fcf3e74",
          }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Enter Name</Text>
          <TouchableOpacity activeOpacity={0.4}>
            <Ionicons name="create-outline" size={30} color={"gray"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section2}>
        <TouchableOpacity style={styles.element} onPress={fetchtest}>
          <Text style={styles.elementText}>Account</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          style={styles.element}
          onPress={yourordersButtonHandler}
        >
          <Text style={styles.elementText}>Your Orders</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.element} onPress={testFn}>
          <Text style={styles.elementText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.element} onPress={logoutButtonHandler}>
          <Text style={styles.elementText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  section1: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    //backgroundColor: "white",
    resizeMode: "center",
  },
  profileInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },

  section2: {
    marginBottom: 20,
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  elementText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
});
