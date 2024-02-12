// AudioPlayer.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import AudioPlayerModal from "./AudioPlayerModal";

const BottomAudioPlayer = ({ programData }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleTitleContainerPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleTitleContainerPress}>
          <Ionicons name="heart-outline" size={36} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleTitleContainerPress}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>Program Title</Text>
          <Text style={styles.host}>Host Name</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Ionicons
            name="play-skip-back-circle-outline"
            size={30}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name={"play-circle"} size={56} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="play-skip-forward-circle-outline"
            size={30}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <AudioPlayerModal closeModal={closeModal} programData={programData} />
      </Modal>
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#5A5A89",
    opacity: 0.8,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  titleContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 5,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  host: {
    color: COLORS.white,
    fontSize: 14,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
};

export default BottomAudioPlayer;
