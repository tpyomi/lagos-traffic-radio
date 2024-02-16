import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import COLORS from "../../utils/constant/colors";

const PlaybackControl = ({ isPlaying, onTogglePlayback, volume }) => (
  <View style={styles.playbackControlContainer}>
    <TouchableOpacity onPress={{}}>
      <MaterialCommunityIcons
        name="skip-previous"
        size={30}
        color={COLORS.white}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={onTogglePlayback}>
      <Ionicons
        name={isPlaying ? "pause-circle" : "play-circle"}
        size={86}
        color={"#7E1DE0"}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={volume}>
      <MaterialCommunityIcons name="skip-next" size={30} color={COLORS.white} />
    </TouchableOpacity>
  </View>
);

export default PlaybackControl;

const styles = StyleSheet.create({
  playbackControlContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    // marginTop: 20,
  },
});
