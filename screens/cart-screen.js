import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { GlobalStyles } from '../costants/colors';
import CartItem from '../components/cartItem';
import { useDispatch } from 'react-redux';
import { removeFromCart , addToCart} from '../redux/slices/cartSlice';
function renderOrderItem(addFn,removeFn,itemdata) {
  function addItem(){
    addFn(itemdata.item.product);
  }
  function removeItem(){
    removeFn(itemdata.item.product.id);
  }
  return (
    <CartItem
      title={itemdata.item.product.title}
      price={itemdata.item.product.price}
      imageUrl={itemdata.item.product.imageUrl}
      quantity={itemdata.item.qty}
      addItemHandler={addItem}
      removeItemHandler={removeItem}
    />
  );
}

export default function CartScreen() {
  const cart = useSelector(state => state.MyCart);
  const total = cart.reduce((sum, item) => sum + item.product.price*item.qty, 0);
  const dispatch = useDispatch();
  function  handleAddToCart(product){
    dispatch(addToCart({"product":product , "qty":1}));
    console.log(product.title,' added to cart !');
  };
  function handleRemoveFromCart(id){
    dispatch(removeFromCart({id:id}))
  }
  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.heading}>Your Cart</Text>
        <FlatList
          data={cart}
          keyExtractor={item => item.product.id}
          renderItem={renderOrderItem.bind(this,handleAddToCart,handleRemoveFromCart)}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>$ {total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.proceedButton}>
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
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 5,
    color: GlobalStyles.colors.white69,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: GlobalStyles.colors.black69,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white69,
    marginRight: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white69,
  },
  proceedButton: {
    backgroundColor: GlobalStyles.colors.green69,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: GlobalStyles.colors.black69,
    fontSize: 16,
    fontWeight: 'bold',
  },
});


