// PhoneInput.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../../utils/constant/colors";

export default function PhoneInput({ label, placeholder }) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>Mobile number</Text>

      <View style={styles.phoneFieldWrapper}>
        <TextInput
          placeholder="+234"
          placeholderTextColor={COLORS.black}
          keyboardType="numeric"
          style={styles.phoneFieldInput}
        />
        <TextInput
          placeholder="Enter your mobile number"
          placeholderTextColor={COLORS.black}
          keyboardType="numeric"
          style={styles.phoneIconInput}
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
  phoneFieldInput: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: COLORS.gray,
    height: "100%",
  },
  phoneIconInput: {
    width: "80%",
  },
});
