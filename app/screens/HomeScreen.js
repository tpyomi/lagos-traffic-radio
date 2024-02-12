import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import SearchInput from "../components/SearchInput";
import CategoryList from "../components/CategoryList";
import ScheduledProgramsList from "../components/SceduledProgramsList";
import BottomAudioPlayer from "../components/BottomAudioPlayer";
import uidata from "../../utils/uidata";
import dataByCategory from "../../utils/uidata";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("News");
  const [shouldShow, setShouldShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const currentProgramData = null;

  useEffect(() => {
    if (currentProgramData) {
      setShouldShow(true);
    }
  }, []);

  return (
    <View style={styles.background}>
      <SearchInput width={350} />
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <View
        style={{
          alignItems: "flex-start",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.scheduledProgramsText}>Scheduled Programs</Text>
      </View>

      <ScheduledProgramsList data={dataByCategory[selectedCategory]} />

      {shouldShow ? (
        <BottomAudioPlayer programData={currentProgramData} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#00002F",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "center",
  },
  scheduledProgramsText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
