import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { addFavourite, removeFavourite } from "../redux/slices/favouriteSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailScreen = ({ route, navigation }) => {
  const items = useSelector((state) => state.Favourites);
  const { product } = route.params;
  function getFavouriteStatus() {
    // checking if product is null
    if (product) {
      const foundIndex = items.findIndex((item) => item.id === product.id);
      if (foundIndex !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  // Sample product data
  const [isFavourite, setisfavourite] = useState(getFavouriteStatus());

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ product: product, qty: 1 }));
    console.log(product.title, " added to cart !");
  };

  function favouriteHandler() {
    if (!isFavourite) {
      dispatch(addFavourite(product));
    } else {
      dispatch(removeFavourite({ id: product.id }));
    }
    setisfavourite(!isFavourite);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{product.title}</Text>

      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <View
        style={[styles.section, { flexDirection: "row", alignItems: "center" }]}
      >
        <Text style={styles.sectionTitle}>Favourite : </Text>
        <TouchableOpacity activeOpacity={0.6} onPress={favouriteHandler}>
          <Ionicons
            name={isFavourite ? "heart" : "heart-outline"}
            size={30}
            color={"red"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[styles.section, { flexDirection: "row", alignItems: "center" }]}
      >
        <Text style={styles.sectionTitle}>Price: </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description:</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Category:</Text>
        <Text style={styles.category}>{product.category}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rating:</Text>
        <Text style={styles.rating}>{product.rating}</Text>
      </View>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexGrow: 1,
    backgroundColor: "#090808",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EAE9EA",
    marginTop: 8,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EAE9EA",
  },
  price: {
    color: "#EAE9EA",
    fontSize: 20,
  },
  description: {
    color: "#EAE9EA",
  },
  category: {
    color: "#EAE9EA",
  },
  rating: {
    color: "#EAE9EA",
  },
  addToCartButton: {
    backgroundColor: "#afeb30",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: "#090808",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductDetailScreen;
