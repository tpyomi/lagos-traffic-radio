import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import COLORS from "../../utils/constant/colors";

export default function CustomButton(props) {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.button,
        ...{ backgroundColor: COLORS.primary },
        ...props.style,
      }}
    >
      <Text style={{ fontSize: 18, ...{ color: COLORS.white } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
});
