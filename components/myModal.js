import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TextInput,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import { GlobalStyles } from "../costants/colors";
export default function Mymodal({ modalVisible, setModalVisible, onsubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState("");
  const [rating, setRating] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  function resetInputHandler(tag) {
    if(tag === "price"){
      setPrice("");
    }else if(tag === "rating"){
      setRating("");  
    }else if(tag === "count"){
      setCount("");
    }

  }
  function confirmInputHandler() {
    const chosenPrice = parseInt(price);
    const chosenRating = parseInt(rating);
    const chosenCount = parseInt(count);
    if (isNaN(chosenPrice) || chosenPrice <= 0) {
      Alert.alert("Invalid Price!", "Price Should be more than 0", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler("price") },
      ]);
      return;
    }
    if (isNaN(chosenRating) || chosenRating <= 0 || chosenRating > 5) {
      Alert.alert("Invalid rating!", "Rating Should between 1 and 5", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler("rating") },
      ]);
      return;
    }
    if (isNaN(chosenCount) || chosenCount <= 0) {
      Alert.alert("Invalid quantity!", "Quantity Should be more than 0", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler("count") },
      ]);
      return;
    }
    if (!imageUrl) {
      setImageUrl("https://live.staticflickr.com/4043/4438260868_cc79b3369d_z.jpg");
    }

    const product ={
      title: title,
      description: description,
      category: category,
      count: chosenCount,
      rating: chosenRating,
      imageUrl: imageUrl,
      price: chosenPrice,
    };
    onsubmit(product);
  }

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.modalContainer}>
          <Text
            style={[styles.heading, { color: GlobalStyles.colors.white69 }]}
          >
            Enter Details :-
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setTitle}
              placeholder="Enter Title"
              placeholderTextColor={"white"}
              value={title}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setDescription}
              placeholder="Enter description"
              placeholderTextColor={"white"}
              value={description}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setPrice}
              placeholder="Enter Price"
              placeholderTextColor={"white"}
              value={price}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setImageUrl}
              placeholder="Paste ImageUrl"
              placeholderTextColor={"white"}
              value={imageUrl}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setCategory}
              placeholder="Select Category"
              placeholderTextColor={"white"}
              value={category}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setRating}
              placeholder="Enter Rating 1-5"
              placeholderTextColor={"white"}
              value={rating}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setCount}
              placeholder="Enter Count"
              placeholderTextColor={"white"}
              value={count}
            />
          </View>

          <Pressable onPress={confirmInputHandler} android_ripple={{ color: "#ccc" }}>
            <View style={styles.submitContainer}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    color: GlobalStyles.colors.white69, // Use white69 color
  },
  modalContainer: {
    //margin: 10,
    paddingTop: 30,
    flex: 1,
    backgroundColor: GlobalStyles.colors.black69, // Set background to black69 color
  },
  textInput: {
    margin: 10,
    padding: 5,
    color: GlobalStyles.colors.white69, // Use white69 color
  },
  textInputContainer: {
    borderColor: GlobalStyles.colors.lightgray69, // Use lightgray69 color
    borderWidth: 1,
    margin: 10,
    borderRadius: 5, // Add rounded edges
  },
  submitContainer: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.black69, // Use black69 color
    margin: 10,
    padding: 10,
    backgroundColor: GlobalStyles.colors.green69, // Set button background to green69 color
    borderRadius: 5, // Add rounded edges
  },
  submitText: {
    color: GlobalStyles.colors.black69, // Use white69 color
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
