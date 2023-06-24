import { StyleSheet, View, Text, Image } from "react-native";

export default function OrderItem({ title, price, imageUrl }) {
  if (!imageUrl) {
    imageUrl = "https://live.staticflickr.com/4043/4438260868_cc79b3369d_z.jpg";
  }
  return (
    <View style={styles.orderItemContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1f1f1f",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginRight: 10,
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
});
