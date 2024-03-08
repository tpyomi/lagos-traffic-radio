import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import uidata from "../../utils/uidata";
import { Ionicons, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import AudioVisualizer from "../components/AudioVisualizer";
import { Audio, AnalyserNode } from "expo-av";
import SIZES from "../../utils/constant/sizes";
import PlaybackControlComponent from "../components/PlaybackControlComponent";

const NUM_BARS = 10;
export default function HomeScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiSound, setApiSound] = useState(null);
  const [bars, setBars] = useState([]);
  const apiSoundRef = useRef(null);
  const [permission, setPermission] = useState(null);

    useEffect(() => {
  const requestPermission = async () => {
  const { status } = await Audio.requestPermissionsAsync();
  console.log('Requesting permission..', status);
  setPermission(status); 

  const loadAudio = async () => {
        try {
          await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

          const streamUrl = "http://stream.radioparadise.com/aac-320"; // Replace with your stream URL

          const { sound } = await Audio.Sound.createAsync(
            { uri: streamUrl },
            { shouldPlay: false }
          );
          setApiSound(sound);
          apiSoundRef.current = sound;
        } catch (error) {
          console.error("Error playing audio", error);
        }
      };
      loadAudio();
};     

  requestPermission();


  
    return () => {
      if (apiSound) {
        apiSound?.unloadAsync();
      }
    };
  }, []);

  const togglePlayback = async () => {
    try {
     if (permission === "granted") {

       if (isPlaying) {
        apiSoundRef.current.setStatusAsync({ shouldPlay: false });
      } else {
        if (!apiSoundRef.current) return;
        apiSoundRef.current.setStatusAsync({ shouldPlay: true });
        calculatePitch();
      }
    setIsPlaying(prevState => !prevState);
     }else{
    const {status: togglePermission} = await Audio.requestPermissionsAsync(); 
    setPermission(togglePermission)
    console.log("___ . ", togglePermission);
     }
    } catch (error) {
      console.error("Error toggling playback", error);
    }
  };

  const calculatePitch = () => {
    const intervalId = setInterval(() => {
      const newBars = [];
      for (let i = 0; i < NUM_BARS; i++) {
        const randomValue = Math.random() * 100; // Simulate random pitch values (0-100)
        newBars.push(new Animated.Value(randomValue));
      }
      setBars(newBars);
    }, 100); // Update every 100 milliseconds

    return () => clearInterval(intervalId);
  };

  return (
    <View style={styles.background}>
      <Image source={{ uri: uidata.News[0].image }} style={styles.modalImage} />

      <View style={styles.playerEvents}>
        <View style={styles.podcastIcon}>
          <Fontisto name="podcast" size={14} color="#9768C6" />
          <Text style={styles.radioText}>Live</Text>
        </View>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="share-outline" size={32} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30, alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontFamily: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {uidata.News[0].title}
        </Text>
        <Text style={{ color: "white" }}>{uidata.News[0].host}</Text>
        <Text style={{ color: "white", marginBottom: 30 }}>
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
          <AudioVisualizer bars={isPlaying ? bars : null} />
        </View>
        <PlaybackControlComponent
          isPlaying={isPlaying}
          onTogglePlayback={() => togglePlayback()}
          volume={null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#00002F",
    alignItems: "center",
    padding: 20,
  },
  modalImage: {
    width: "100%",
    height: "30%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: "center",
  },
  playerEvents: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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
});
