import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchInput({ width, placeholder }) {
  return (
    <View style={[styles.searchInput, { width: width }]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#878787"
        style={styles.inputText}
      />
      <Feather name="search" size={24} color="#FFF" style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 44,
    // marginTop: 52,
    borderRadius: 8,
    backgroundColor: "#3C3C6B",
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    color: "#FFF",
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 16,
  },
});
