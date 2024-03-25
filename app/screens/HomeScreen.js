import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Alert
} from "react-native";
import uidata from "../../utils/uidata";
import { Ionicons, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import AudioVisualizer from "../components/AudioVisualizer";
import { Audio } from "expo-av";
import SIZES from "../../utils/constant/sizes";
import PlaybackControlComponent from "../components/PlaybackControlComponent";
import { isLoaded } from "expo-font";

const NUM_BARS = 10;
export default function HomeScreen({userInfo}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bars, setBars] = useState([]);
  const apiSoundRef = useRef(null);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
       grantPermission();

    // Unload audio when component unmounts
    return () => {
      if (apiSoundRef.current) {
        apiSoundRef.current.unloadAsync();
      }
    };
  }, []);

  const grantPermission = async () => {
    try {
        // Request audio permissions immediately
        const { status } = await Audio.requestPermissionsAsync({
          android: {
            modifyAudioSettings: true,
          },
        });
        setPermission(status);

        // Load audio if permission granted
        if (status === 'granted') {
          await loadAudio();
        }
      } catch (error) {
        console.error('Error requesting audio permissions', error);
      }
  }

    const loadAudio = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const streamUrl = 'https://stream.radioparadise.com/aac-320';
       
      const { sound, status } = await Audio.Sound.createAsync({ uri: streamUrl });
    
      if(status.isLoaded){setIsLoaded(true)}

      apiSoundRef.current = sound;
    } catch (error) {
      console.error('Error loading audio', error);
    }
  };

  const togglePlayback = async () => {
  if (!apiSoundRef.current) {
    Alert.alert("Notice", "Hold on, audio stream is being loaded", [
      { text: 'OK', onPress: () => console.log('Alert acknowledged') },
    ]);
    return;
  }

  try {
    if (permission === "granted") {
      if (isPlaying) {
        await apiSoundRef.current.setStatusAsync({ shouldPlay: false });
        console.log('========', isPlaying, ' ========');
        setIsPlaying(false);
      } else {
        await apiSoundRef.current.setStatusAsync({ shouldPlay: true });
        setIsPlaying(true);
        calculatePitch();
      }
    } else {
      const { status: togglePermission } = await Audio.requestPermissionsAsync();
      setPermission(togglePermission);
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
        const randomValue = Math.random() * 100;
        newBars.push(new Animated.Value(randomValue));
      }
      setBars(newBars);
    }, 100);
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
            <AudioVisualizer bars={isPlaying ? bars : null} isLoaded={isLoaded? true : false} />
        </View>

        <PlaybackControlComponent
          isPlaying={isPlaying}
          onTogglePlayback={togglePlayback}
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
