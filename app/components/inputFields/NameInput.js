// NameInput.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../../utils/constant/colors";

export default function NameInput({ label, placeholder }) {
  return (
    <View style={styles.nameContainer}>
      <View style={styles.nameInputContainer}>
        <Text style={styles.nameLabel}>Firstname</Text>
        <View style={styles.nameInputWrapper}>
          <TextInput
            placeholder="Enter your firstname"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            style={styles.nameInput}
          />
        </View>
      </View>

      <View style={styles.nameInputContainer}>
        <Text style={styles.nameLabel}>Lastname</Text>
        <View style={styles.nameInputWrapper}>
          <TextInput
            placeholder="Enter your lastname"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            style={styles.nameInput}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameInputContainer: {
    flex: 1,
    marginHorizontal: 4,
    marginBottom: 12,
  },
  nameLabel: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  nameInputWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
  },
  nameInput: {
    width: "100%",
  },
});
