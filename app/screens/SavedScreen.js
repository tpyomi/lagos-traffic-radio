import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomAudioPlayer from "../components/BottomAudioPlayer";
import { useState } from "react";
import SearchInput from "../components/SearchInput";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import SearchProgramListItem from "../components/SearchProgramListItem";
import { useNavigation } from "@react-navigation/native";

export default function SavedScreen() {
  const navigation = useNavigation();
  const [shouldShow, setShouldShow] = useState(false);
  const language = "English";
  const streamUrl = `http://www.radio-browser.info/webservice/json/stations/bylanguage/${language}`;

  const data1 = [
    {
      id: "1",
      title: "Russia scuffle",
      image: require("../../assets/images/init.jpeg"),
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "2",
      title: "Item 2",
      image: require("../../assets/images/init.jpeg"),
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "3",
      title: "Russia scuffle",
      image: require("../../assets/images/init.jpeg"),
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "4",
      title: "Russia scuffle",
      image: require("../../assets/images/init.jpeg"),
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "5",
      title: "Russia scuffle",
      image: require("../../assets/images/init.jpeg"),
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
    {
      id: "6",
      title: "Russia scuffle",
      image: require("../../assets/images/init.jpeg"),
      streamUrl: streamUrl,
      host: "Bolarinwa Kola ",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput width={350} />
      </View>

      <FlatList
        data={data1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchProgramListItem item={item} />}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.programList}
      />

      {shouldShow ? (
        <BottomAudioPlayer programData={currentProgramData} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00002F",
    justifyContent: "center",
    paddingTop: 20,
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  programList: { marginTop: 20, gap: 20 },
});
