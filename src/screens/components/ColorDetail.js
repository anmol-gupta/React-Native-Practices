import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

const ColorDetail = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
    <Text>{color}</Text>
    <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
    <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
    </View>
    )
    
}

const styles = StyleSheet.create({});

export default ColorDetail;