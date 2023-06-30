import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../costants/colors";
function YourOrdersScreen({ navigation }) {
  const items = useSelector((state) => state.YourOrders);
  const orders = items.slice().reverse();
  console.log(orders);
  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{index + 1}</Text>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.dateText}>Purchased on</Text>
          <Text style={styles.date}>
            {item.date} {item.time}
          </Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>${item.total.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function handleItemPress(item) {
    // Handle item press here
    navigation.navigate("OrderDetailScreen", { order: item });
  }
  if (orders.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Text style={emptyStyles.heading}>No orders Yet</Text>
        <Text style={emptyStyles.description}>Start ordering items !!</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Past Purchases</Text>
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    paddingTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.gray69,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.green69,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: GlobalStyles.colors.black69,
    fontSize: 19,
    fontWeight: "bold",
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  dateText: {
    color: GlobalStyles.colors.lightgray69,
    fontSize: 14,
  },
  date: {
    color: GlobalStyles.colors.white69,
    fontSize: 16,
    marginTop: 5,
  },
  totalContainer: {
    backgroundColor: GlobalStyles.colors.green69,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  totalText: {
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
export default YourOrdersScreen;
