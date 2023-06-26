import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../costants/colors";
import CartItem from "../components/cartItem";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  deleteFromCart,
  clearCart,
} from "../redux/slices/cartSlice";
import { addOrder } from "../redux/slices/yourOrdersSlice";
import { StackActions } from "@react-navigation/native";
function renderOrderItem(addFn, removeFn, deleteFn, itemdata) {
  function addItemHandler() {
    addFn(itemdata.item.product);
  }
  function removeItemHandler() {
    removeFn(itemdata.item.product.id);
  }
  function deleteItemHandler() {
    deleteFn(itemdata.item.product.id);
  }
  return (
    <CartItem
      title={itemdata.item.product.title}
      price={itemdata.item.product.price}
      imageUrl={itemdata.item.product.imageUrl}
      quantity={itemdata.item.qty}
      addItemHandler={addItemHandler}
      removeItemHandler={removeItemHandler}
      deleteItemHandler={deleteItemHandler}
    />
  );
}

export default function CartScreen({ navigation }) {
  const items = useSelector((state) => state.MyCart);
  const cart = items.slice().reverse();
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addToCart({ product: product, qty: 1 }));
    console.log(product.title, " added to cart !");
  }
  function handleRemoveFromCart(id) {
    dispatch(removeFromCart({ id: id }));
  }
  function handleDeleteFromCart(id) {
    dispatch(deleteFromCart({ id: id }));
  }
  function DeleteFromCart(id) {
    Alert.alert("Confirm Delete", "Are you sure you want to delete item .", [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => handleDeleteFromCart(id),
      },
    ]);
  }
  function buyButtonHandler() {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();
    console.log(time);
    dispatch(
      addOrder({
        cart: cart,
        total: total,
        date: date.toISOString().substring(0, 10),
        time: time,
      })
    );
    Alert.alert("Purchased !", "Thanks for shopping with us", [
      {
        text: "Welcome",
        style: "destructive",
        onPress: () => dispatch(clearCart()),
      },
    ]);
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  }
  if (cart.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Text style={emptyStyles.heading}>Your Cart Is Empty</Text>
        <Text style={emptyStyles.description}>
          Start adding items to your cart!
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.heading}>Your Cart</Text>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.product.id}
          renderItem={renderOrderItem.bind(
            this,
            handleAddToCart,
            handleRemoveFromCart,
            DeleteFromCart
          )}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>$ {total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={buyButtonHandler}
        >
          <Text style={styles.buttonText}>Proceed to Buy</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: GlobalStyles.colors.black69,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    color: GlobalStyles.colors.white69,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: GlobalStyles.colors.black69,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.white69,
    marginRight: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.white69,
  },
  proceedButton: {
    backgroundColor: GlobalStyles.colors.green69,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: GlobalStyles.colors.black69,
    fontSize: 16,
    fontWeight: "bold",
  },
});
const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "white",
  },
});
