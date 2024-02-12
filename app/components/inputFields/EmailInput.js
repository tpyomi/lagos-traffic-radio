// EmailInput.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../../utils/constant/colors";

export default function EmailInput() {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>Email address</Text>

      <View style={styles.fieldWrapper}>
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={COLORS.black}
          keyboardType="email-address"
          style={styles.fieldInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: { marginBottom: 12 },
  fieldLabel: { fontSize: 16, fontWeight: 400, marginVertical: 8 },
  fieldWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  phoneFieldWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
  fieldInput: {
    width: "100%",
  },
});
