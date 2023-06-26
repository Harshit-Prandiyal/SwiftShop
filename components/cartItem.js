// import { StyleSheet, View, Text, Image } from "react-native";

// export default function CartItem({ title, price, imageUrl }) {
//   return (
//     <View style={styles.cartItemContainer}>
//       <Image style={styles.image} source={{ uri: imageUrl }} />
//       <View style={styles.textContainer}>
//         <Text style={styles.titleText}>{title}</Text>
//         <Text style={styles.priceText}>$ {price}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cartItemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 8,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: "#1f1f1f",
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 3,
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   titleText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#EAE9EA",
//   },
//   priceText: {
//     fontSize: 14,
//     color: "#EAE9EA",
//   },
// });

import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../costants/colors";
export default function CartItem({ title, price, imageUrl, quantity , addItemHandler , removeItemHandler,deleteItemHandler}) {
  return (
    <TouchableOpacity activeOpacity={0.6} onLongPress={deleteItemHandler}>
    <View style={styles.cartItemContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={addItemHandler} activeOpacity={0.6}>
          <Ionicons
            name="add-circle"
            size={25}
            color={GlobalStyles.colors.green69}
          />
        </TouchableOpacity>

        <Text style={styles.counterText}>{quantity}</Text>
        <TouchableOpacity onPress={removeItemHandler} activeOpacity={0.6}>
          <Ionicons
            name="remove-circle"
            size={25}
            color={GlobalStyles.colors.green69}
          />
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 5,
    padding: 3,
    borderRadius: 5,
    //backgroundColor: "#1f1f1f",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginRight: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EAE9EA",
  },
  priceText: {
    fontSize: 14,
    color: "#EAE9EA",
  },
  counterContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counterButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#EAE9EA",
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: 4,
  },
  counterButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f1f1f",
  },
  counterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EAE9EA",
    marginVertical: 2,
  },
});
