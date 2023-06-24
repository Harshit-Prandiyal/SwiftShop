import {
  Text,
  StyleSheet,
  View,
  Modal,
  TextInput,
  Pressable,
} from "react-native";

export default function Mymodal({
  modalVisible,
  setModalVisible,
  title,
  setTitle,
  price,
  setPrice,
  imageUrl,
  setImageUrl,
  onsubmit,
}) {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalContainer}>
        <Text style={[styles.heading, { color: "black" }]}>
          Enter Details :-
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setTitle}
            placeholder="Enter Title"
            value={title}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setPrice}
            placeholder="Enter Price"
            value={price.toString()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setImageUrl}
            placeholder="Paste ImageUrl"
            value={imageUrl}
          />
        </View>

        <Pressable onPress={onsubmit} android_ripple={{ color: "#ccc" }}>
          <View style={styles.submitContainer}>
            <Text>Submit</Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
}
//export default Mymodal; iski vagah se error aa raha tha

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
  textInput: {
    margin: 10,
    padding: 5,
  },
  textInputContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
  submitContainer: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
});
