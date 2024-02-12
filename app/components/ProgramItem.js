import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AudioPlayerModal from "./AudioPlayerModal";
import { useState } from "react";

export default function ProgramItem({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  const shortDescription = item.title.substring(0, 18) + "...";

  const handleTitleContainerPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={handleTitleContainerPress}
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.labelContainer}>
        <Text style={styles.title}>{shortDescription}</Text>
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
  gridItem: {
    width: 164,
    height: 208,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    aspectRatio: 1 / 1,
  },
  title: {
    color: "#FFF",
    fontSize: 14,
  },
  labelContainer: {
    backgroundColor: "#000",
    width: "100%",
    position: "absolute",
    bottom: 0,
    opacity: 0.7,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
