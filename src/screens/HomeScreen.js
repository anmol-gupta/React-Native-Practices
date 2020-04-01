import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go to List Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Go to Image Screen"
      />
      {/* <TouchableOpacity onPress={()=>{navigation.navigate("List")}}>
        <Text>Go to List screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
