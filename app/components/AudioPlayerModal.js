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
import { FileSystem } from "expo-file-system";

const AudioPlayerModal = ({ closeModal, programData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [audioData, setAudioData] = useState([]);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const streamUrl = "http://stream.radioparadise.com/aac-320";

    const playAudio = async () => {
      try {
        await sound.current.loadAsync({ uri: streamUrl }, {}, true);
        await sound.current.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio", error);
      }
    };

    playAudio();

    sound.current.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.isPlaying) {
        fetchAudioData(status.positionMillis);
      }
    });

    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);

  const fetchAudioData = async (positionMillis) => {
    try {
      const soundBuffer = await sound.current.getStatusAsync();
      const arrayBuffer = await FileSystem.readAsStringAsync(soundBuffer.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const dataView = new DataView(arrayBuffer);
      const newData = [];
      for (let i = 0; i < dataView.byteLength; i += 2) {
        const value = dataView.getInt16(i, true);
        const normalizedValue = value / 32768;
        newData.push(normalizedValue);
      }
      setAudioData(newData);
    } catch (error) {
      console.error("Error fetching audio data", error);
    }
  };

  const increaseVolume = async () => {
    const newVolume = Math.min(volume + 0.1, 1);
    setVolume(newVolume);
    if (sound.current) {
      await sound.current.setVolumeAsync(newVolume);
    }
  };

  const togglePlayback = async () => {
    try {
      if (isPlaying) {
        await sound.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.current.playAsync();
        setIsPlaying(true);
      }
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
              <AudioVisualizer isPlaying={isPlaying} audioData={audioData} />
            </View>
            <PlaybackControl
              isPlaying={isPlaying}
              onTogglePlayback={togglePlayback}
              volume={increaseVolume}
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
    height: "150%",
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
