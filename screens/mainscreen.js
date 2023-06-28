import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { fetchProducts } from "../util/http";
import ProductItem from "../components/productItem";
import { GlobalStyles } from "../costants/colors";
import LoadingOverlay from "../components/LoadingOverlay";

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productsSLice";

function renderProductItem(onPress, itemdata) {
  function onPressHandler() {
    onPress(itemdata.item);
  }
  return (
    <ProductItem
      title={itemdata.item.title}
      price={itemdata.item.price}
      imageUrl={itemdata.item.imageUrl}
      onPress={onPressHandler}
    />
  );
}

function Mainscreen({ navigation }) {
  const [Products, setProducts] = useState([]);
  const [productsFetched, setproductsFetched] = useState(false);
  const [productsDispatched, setproductsDispatched] = useState(false);
  const dispatch = useDispatch();

  //handling fetchhing of products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
        setproductsFetched(true);
        console.log("Fetched");
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  //handling dispatching of products
  if (productsFetched && !productsDispatched) {
    for (const pr in Products) {
      const payload = Products[pr];
      dispatch(addProduct(payload));
      //console.log(payload);
    }
    setproductsDispatched(true);
    console.log("Dispatched");
  }

  //handling navigation
  function onPress(product) {
    //console.log(product);
    navigation.navigate("Product-detail-screen", { product: product });
  }
  function cartButtonHandler() {
    navigation.navigate("Cartscreen");
  }

  if (productsFetched) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Trending</Text>
          <TouchableOpacity onPress={cartButtonHandler} activeOpacity={0.4}>
            <Ionicons
              name="cart"
              size={24}
              color={GlobalStyles.colors.lightgray69}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.productGrid}>
          <FlatList
            data={Products}
            keyExtractor={(item) => item.id + item.price}
            renderItem={renderProductItem.bind(this, onPress)}
            numColumns={2}
          />
        </View>
      </View>
    );
  } else {
    return <LoadingOverlay message="Preparing the app..." />;
  }
}
export default Mainscreen;
const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: GlobalStyles.colors.black69,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    color: "white",
  },
  header: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productGrid: {
    flex: 1,
  },
});
