import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import React, {useState, useEffect} from 'react';

export default function Loader (){
    const [show, setShow] = useState(false);

useEffect(() => {
  setTimeout(() => setShow(true), 3000);
}, []);

return (

<View>
    <LottieView
    source={require("../../assets/loading.json")}
    style={styles.lottie}
    autoPlay
    />
</View>
);
}

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300,
  },
});