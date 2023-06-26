import { View, Text, StyleSheet, FlatList,Image } from "react-native";
import { GlobalStyles } from "../costants/colors";
function renderOrderItem(itemdata) {
    const item = itemdata.item.product;
  return (
    <View style={styles.cartItemContainer}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.priceText}>$ {item.price}  x{itemdata.item.qty}</Text>
      </View>
    </View>
  );
}
export default function OrderDetailScreen({ route }) {
  const cart = route.params.order.cart;
  const total = route.params.order.total;
  const date = route.params.order.date;
  const time = route.params.order.time;
  console.log(route.params.order);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Order Details :- </Text>
      <Text style={styles.DateTime}>{date}  {time}</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={renderOrderItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>$ {total.toFixed(2)}</Text>
      </View>
    </View>
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
  DateTime:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#EAE9EA",
    marginHorizontal:10,
    marginVertical:5,
  },
  priceText: {
    fontSize: 14,
    color: "#EAE9EA",
  },
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
