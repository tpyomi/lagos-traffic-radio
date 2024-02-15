// PasswordInput.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../../utils/constant/colors";

export default function PasswordInput({
  label,
  placeholder,
  onTogglePassword,
}) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>Password</Text>

      <View style={styles.fieldWrapper}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={COLORS.black}
          secureTextEntry={isPasswordShown}
          style={styles.fieldInput}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{ position: "absolute", right: 12 }}
        >
          {isPasswordShown == false ? (
            <Ionicons name="eye-off" size={24} color={COLORS.black} />
          ) : (
            <Ionicons name="eye" size={24} color={COLORS.black} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: {
    fontSize: 16,
    fontFamily: "semibold",
    marginVertical: 8,
  },
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
  fieldInput: {
    width: "100%",
  },
});
