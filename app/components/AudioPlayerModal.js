import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import AudioVisualizer from "./AudioVisualizer";
import PlaybackControl from "./PlaybackControl";
import { Audio } from "expo-av";
import { getItem, removeItem, setItem } from "../../utils/asyncStorage";

const AudioPlayerModal = ({ closeModal, programData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingString, setIsPlayingString] = useState("false");
  const [apiSound, setApiSound] = useState(null);
  const apiSoundRef = useRef(null);

  const handleAudioAsyncStorage = async (isPlayingString) => {
    if (isPlayingString === "true") {
      await setItem("isPlaying", isPlayingString);
      console.log("+++ WITHIN THIS ASYNC CLAUSE");
    } else if (isPlayingString === "false") {
      await removeItem("isPlaying");
      console.log("--- WITHIN THIS ASYNC CLAUSE");
    }
  };

  useEffect(() => {
    const loadAudio = async () => {
      try {
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

        const streamUrl = "http://stream.radioparadise.com/aac-320"; // Replace with your stream URL

        const { sound } = await Audio.Sound.createAsync(
          { uri: streamUrl },
          { shouldPlay: true }
        );

        setApiSound(sound);
        apiSoundRef.current = sound;
        setIsPlaying(true);
        handleAudioAsyncStorage("true");
      } catch (error) {
        console.error("Error playing audio", error);
      }
    };

    if (!apiSoundRef.current) {
      loadAudio();
    }

    return () => {
      if (apiSound) {
        apiSound?.unloadAsync();
      }
    };
  }, []);

  const togglePlayback = () => {
    try {
      if (isPlaying) {
        apiSoundRef.current.setStatusAsync({ shouldPlay: false });
        handleAudioAsyncStorage("false");
      } else {
        apiSoundRef.current.setStatusAsync({ shouldPlay: true });
        handleAudioAsyncStorage("true");
      }
      setIsPlaying(!isPlaying);
      console.log();
    } catch (error) {
      console.error("Error toggling playback", error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={closeModal}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Ionicons name="caret-down-circle" size={36} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.loveIcon}>
            <Ionicons name="heart-outline" size={36} color={COLORS.white} />
          </TouchableOpacity>

          <Image
            source={{ uri: programData.image }}
            style={styles.modalImage}
          />

          <View style={styles.playerEvents}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Ionicons
                name="download-outline"
                size={24}
                color={COLORS.white}
              />
            </TouchableOpacity>

            <View style={styles.podcastIcon}>
              <Fontisto name="podcast" size={14} color="#9768C6" />
              <Text style={styles.radioText}>Live</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="headphones"
                size={24}
                color={COLORS.white}
                style={{ justifyContent: "center", alignItems: "center" }}
              />
              <Text
                style={[
                  styles.radioText,
                  { color: COLORS.white, fontSize: 16 },
                ]}
              >
                148k
              </Text>
            </View>

            <TouchableOpacity style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="share"
                size={24}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontFamily: "bold",
                textAlign: "center",
              }}
            >
              {programData.title}
            </Text>
            <Text style={{ color: "white" }}>{programData.host}</Text>
            <Text style={{ color: "white" }}>
              Special guest - Tinubu Akindele
            </Text>
            <View
              style={{
                marginTop: 30,
                height: 100,
                width: 350,
                paddingHorizontal: 30,
                justifyContent: "center",
              }}
            >
              <AudioVisualizer audioSound={apiSoundRef} />
            </View>

            <PlaybackControl
              isPlaying={isPlaying}
              onTogglePlayback={togglePlayback}
              volume={null}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  modalContent: {
    width: "100%",
    height: "180%",
    backgroundColor: "#00002F",
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 250,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  loveIcon: {
    width: "100%",
    alignItems: "flex-end",
    padding: 10,
  },
  playerEvents: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  podcastIcon: {
    width: 60,
    height: 28,
    borderWidth: 2,
    borderColor: "#9768C6",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioText: {
    color: "#9768C6",
    fontSize: 14,
    fontFamily: "semibold",
  },
  closeButton: {
    padding: 10,
    marginTop: 10,
  },
});

export default AudioPlayerModal;
