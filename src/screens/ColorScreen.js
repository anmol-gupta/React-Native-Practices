import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";


const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Text>Color Screen</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColor([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;
