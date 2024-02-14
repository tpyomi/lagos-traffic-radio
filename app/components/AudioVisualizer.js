import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";

const NUM_BARS = 15;

const AudioVisualizer = ({ audioData }) => {
  const [bars, setBars] = useState(Array(NUM_BARS).fill(0));

  useEffect(() => {
    // Update bars whenever audioData changes
    const updatedBars = audioData.map((value) => value * 80); // Adjust multiplier as needed
    setBars(updatedBars);
  }, [audioData]);

  return (
    <View>
      <Svg height="100%" width="100%">
        {audioData.map((data, index) => (
          <Rect
            key={index}
            x={index * 10}
            y={100 - data * 50}
            width="10"
            height={data * 100}
            fill="white"
          />
        ))}
      </Svg>
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
