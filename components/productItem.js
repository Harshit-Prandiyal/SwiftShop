import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "../costants/colors";
export default function ProductItem({ imageUrl, price, title , onPress }) {
  return (
    <View style={styles.gridTile}>
      <View>
        <Pressable onPress={onPress}  android_ripple={{ color: "#dfdede", foreground: true }}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </Pressable>
      </View>
      <View style={{ padding: 4 }}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleText}>${price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleText: {
    color: GlobalStyles.colors.white69, 
    fontWeight: "500" 
  },
  gridView: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 170,
    borderRadius: 7,
    resizeMode: "contain",
  },
  gridTile: {
    marginHorizontal: 6,
    marginVertical: 5,
    padding: 5,
    flex: 1,
  },
});

