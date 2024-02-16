import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../utils/constant/colors";
import { useState } from "react";
import AudioPlayerModal from "./AudioPlayerModal";

export default function SearchProgramListItem({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleTitleContainerPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleTitleContainerPress}
    >
      <View style={styles.imageTitle}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>Host - {item.host}</Text>
        </View>

        <TouchableOpacity style={styles.heart}>
          <Ionicons name="heart-outline" size={36} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <AudioPlayerModal closeModal={closeModal} programData={item} />
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 320,
    height: 76,
    marginHorizontal: 20,
    backgroundColor: "#323261",
    borderRadius: 10,
    // justifyContent: "space-between",
  },
  imageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 103,
  },
  image: {
    width: "100%",
    height: "100%",
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: { fontFamily: "bold", color: "white", marginBottom: 10, fontSize: 14 },
  description: { color: "white", fontSize: 12 },
  heart: {
    marginLeft: 70,
    justifyContent: "center",
  },
});
