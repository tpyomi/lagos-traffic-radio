import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
// import Animated from "react-native-reanimated";

const NUM_BARS = 15;

const AudioVisualizer = ({ audioData }) => {
  const [bars, setBars] = useState(Array(NUM_BARS).fill(0));

  useEffect(() => {
    // Update bars whenever audioData changes
    const updatedBars = audioData.map((value) => value * 80); // Adjust multiplier as needed
    setBars(updatedBars);
  }, [audioData]);

  return (
    <View style={styles.container}>
      {/* {bars.map((value, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            { height: value },
            index % 2 === 0 ? styles.evenBar : styles.oddBar,
          ]}
        />
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 70,
  },
  bar: {
    width: 10,
    borderRadius: 10,
    backgroundColor: "white", // Default color
  },
  evenBar: {
    backgroundColor: "blue", // Adjust color as needed
  },
  oddBar: {
    backgroundColor: "green", // Adjust color as needed
  },
});

export default AudioVisualizer;
