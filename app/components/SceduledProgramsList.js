import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import ProgramItem from "./ProgramItem";

const ScheduledProgramsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProgramItem item={item} />}
      numColumns={2}
    />
  );
};

export default ScheduledProgramsList;
