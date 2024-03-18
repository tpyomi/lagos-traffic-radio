import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { View, StyleSheet } from "react-native";
import COLORS from "../../utils/constant/colors";
import Loader from "./Loader";

const AudioVisualizer = ({ bars, isLoaded }) => {
  // if (!bars) return;
  useEffect(() => {
    console.log("====================================");
    console.log(bars);
    console.log("====================================");
  }, [bars]);
  return (
      <View>
        {!isLoaded? (
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Loader />
        </View>
        ) : (
     <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
     {bars?.map((bar, index) => (
        <Animated.View
          key={index}
          style={{
            height: bar.interpolate({
              // Map simulated values to bar heights (adjust range as needed)
              inputRange: [0, 100],
              outputRange: [100, 0], // Adjust height range based on visualization needs
            }),
            transform: [
              {
                translateY: bar.interpolate({
                  inputRange: [0, 100],
                  outputRange: [-25, 25],
                }),
              },
            ],

            backgroundColor: "white", // Customize bar color
            width: 10, // Adjust bar width
            margin: 2,
            borderRadius: 10,
          }}
        />
      ))}
    </View>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  visualizerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bar: {
    backgroundColor: "blue",
    width: 10,
    margin: 5,
  },
});

export default AudioVisualizer;
