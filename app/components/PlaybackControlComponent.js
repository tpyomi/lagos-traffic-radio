import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../utils/constant/colors";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const PlaybackControlComponent = ({ isPlaying, onTogglePlayback, volume }) => {
  const animatedCircle = useAnimatedStyle(() => ({
    width: withSpring(isPlaying ? "60%" : "100%"),
    borderRadius: withTiming(isPlaying ? 5 : 50),
  }));

  return (
    <TouchableOpacity style={styles.playButton} onPress={() => onTogglePlayback()}>
      <Animated.View style={[styles.circle, animatedCircle]} />
    </TouchableOpacity>
  );
};

export default PlaybackControlComponent;

const styles = StyleSheet.create({
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 50,

    borderWidth: 3,
    borderColor: COLORS.gray,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#7E1DE0",
    aspectRatio: 1,
    borderRadius: 50,
  },
});
