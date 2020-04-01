import React from "react";
import {Text, View} from "react-native";
import ImageDetail from "../screens/components/ImageDetail";

const ImageScreen = () => {
    return (<View>
        <Text>Image Screen</Text>
        <ImageDetail title="Forest" imageToShow={require("../../assets/forest.jpg")}/>
        <ImageDetail title="Beach" imageToShow={require("../../assets/beach.jpg")}/>
        <ImageDetail title="Mountain" imageToShow={require("../../assets/mountain.jpg")}/>
        </View>
    )
}

export default ImageScreen;