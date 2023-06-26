import { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../costants/colors";
import { useSelector } from "react-redux";
function Profilescreen({route,navigation}) {
  const orders = useSelector(state => state.YourOrders);
  function testFn(){
    console.log(orders);
  }
  function yourordersButtonHandler(){
    navigation.navigate('YourOrdersScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>

      <View style={styles.section1}>
        <Image
          source={{
            uri: "https://live.staticflickr.com/4043/4438260868_cc79b3369d_z.jpg",
          }} // Replace with your circular avatar image source
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>name</Text>
          <TouchableOpacity activeOpacity={0.4} >
          <Ionicons
            name="create-outline"
            size={30}
            color={"gray"}
          />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section2}>
        <TouchableOpacity style={styles.element}  >
          <Text style={styles.elementText}>Account</Text>
        </TouchableOpacity>
        <View style={styles.separator}  />
        <TouchableOpacity style={styles.element} onPress={yourordersButtonHandler} >
          <Text style={styles.elementText}>Your Orders</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.element} onPress={testFn}>
          <Text style={styles.elementText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.element}>
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
