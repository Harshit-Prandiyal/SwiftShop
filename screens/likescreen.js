import { Text, StyleSheet, View, FlatList } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ProductItem from "../components/productItem";
import { GlobalStyles } from "../costants/colors";
import { useSelector } from "react-redux";

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

function Likescreen({route, navigation}) {
  const favourites = useSelector((state) => state.Favourites);
  function onPress(product) {
    //console.log(product);
    navigation.navigate("Product-detail-screen", { product: product });
  }
  if (favourites.length !== 0) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Your Favourites</Text>
        </View>
        <View style={styles.productGrid}>
          <FlatList
            data={favourites}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem.bind(this, onPress)}
            numColumns={2}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Your Favourites</Text>
        </View>
        <View style={{flex:1,alignContent:'center',justifyContent:'center',width:'100%'}}>
          <Text style={{fontSize:20,color: "white",}}>You have no Favourites</Text>
        </View>
      </View>
    );
  }
}

export default Likescreen;
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
