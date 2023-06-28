import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../costants/colors';

function FlatButton({ children, onPress , color}) {
  if(!color){
    color = GlobalStyles.colors.green69;
  }
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={{...styles.buttonText,color:color}}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: GlobalStyles.colors.black69,
  },
});
