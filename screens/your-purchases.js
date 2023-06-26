import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

function YourOrdersScreen({navigation}){
    const items = useSelector(state => state.YourOrders);
    const orders = items.slice().reverse();
  function renderItem  ({ item, index }) {
    
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item)}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{index + 1}</Text>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.dateText}>Purchased on</Text>
          <Text style={styles.date}>{item.date}  {item.time}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>${item.total}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  function handleItemPress(item) {
    // Handle item press here
    navigation.navigate("OrderDetailScreen", { order: item });
  };

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    paddingTop:30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e9e9e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default YourOrdersScreen;
