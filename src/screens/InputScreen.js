import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputScreen = () => {
    const [name,setName] = useState('');
  return (
    <View>
      <Text>Enter Anything:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Entered Input is : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderWidth: 2,
    borderColor: "blue",
    padding: 2
  }
});

export default InputScreen;
