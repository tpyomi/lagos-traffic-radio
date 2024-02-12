import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function CategoryItem({
  item,
  selectedCategory,
  setSelectedCategory,
}) {
  const isSelected = selectedCategory === item.id;

  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.id)}
      style={[
        styles.categoryItem,
        {
          backgroundColor: isSelected ? "#7E1DE0" : "#282857",
          marginLeft: item.id === "News" ? 0 : 10,
        },
      ]}
    >
      <Text style={styles.categoryItemText}>{item.label}</Text>
    </TouchableOpacity>
  );
}
