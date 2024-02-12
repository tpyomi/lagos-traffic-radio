import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import CategoryItem from "./CategoryItem";

// Import statements...

export default function CategoryList({
  selectedCategory,
  setSelectedCategory,
}) {
  const data = [
    { id: "News", label: "News" },
    { id: "Sports", label: "Sports" },
    { id: "Politics", label: "Politics" },
    { id: "Traffic", label: "Traffic" },
    { id: "Music", label: "Music" },
  ];

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selectedCategory}
      />
    </View>
  );
}
