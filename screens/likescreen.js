import { useEffect, useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Mymodal from "../components/myModal";
import Orderitem from "../components/orderItem";
import { storeMyOrder ,fetchMyOrders} from "../util/http";
import { GlobalStyles } from "../costants/colors";

function Likescreen() {

  useEffect( ()=>{
    try{
      async function getOrders(){
        const orders = await fetchMyOrders();
        setOrderlist(orders);
      }
    }catch(error){
      console.log(error);
    }
    getOrders();
  },[] );

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(23);
  const [orderList,setOrderlist] = useState([]);
  


  function onsubmit(){
    storeMyOrder({title: title,price:price});
    setModalVisible(false);
    console.log('submitted!');
  }

  function renderOrderItem(itemdata){
    return <Orderitem title={itemdata.item.title} price={itemdata.item.price} imageUrl={itemdata.item.imageUrl}/>
  }

  return (
    <>
      <Mymodal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        onsubmit={onsubmit}
      />
      <View style={styles.rootContainer}>
        <Text style={styles.heading}>Your Orders</Text>
        <FlatList data={orderList} keyExtractor={ (item)=> item.title } renderItem={renderOrderItem} />
        <View style={{alignItems:'center'}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="add-circle" size={60} color={GlobalStyles.colors.green69} />
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Likescreen;
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    color: "white",
  },
  modalContainer: {
    margin: 10,
    paddingTop: 30,
    flex: 1,
  },
  rootContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "space-between",
  },
  addButton: {
    overflow: "hidden",
  },
  textInput: {
    margin: 10,
    padding: 5,
  },
  textInputContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});
