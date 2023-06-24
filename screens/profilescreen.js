import React from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles} from '../costants/colors';
function Profilescreen() {
  const items = useSelector((state) => state.Favourites);
  function printMyCart() {
    
    console.log("Fav", items);
  }

  return (
    <View style={styles.rootContainer}>
      {/* <Text style={styles.heading}>Trending</Text> */}
      <View style={[styles.gridView, { flexDirection: "row", height: 200 }]}>
        <View style={styles.gridTileContainer}>
          <View style={{ backgroundColor: "yellow" }}>
            <Text>This is</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={printMyCart}>
          <Ionicons
            name="add-circle"
            size={60}
            color={GlobalStyles.colors.green69}
          />
        </TouchableOpacity>
        <View style={styles.gridTileContainer}>
          <View style={{ backgroundColor: "white" }}>
            <Text>dknkj</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 1 }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
        <Text>Hello World!</Text>
      </View>
    </View>
  );
}

export default Profilescreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 30,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    color: "white",
  },
  gridView: {
    flex: 1,
  },
  gridTileContainer: {
    flex: 1,
    backgroundColor: "white",
    height: 100,
  },
});
