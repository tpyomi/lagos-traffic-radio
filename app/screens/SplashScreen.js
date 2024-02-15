import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SHADOWS from "../../utils/constant/shadows";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../utils/constant/colors";

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor} />

      <ImageBackground
        source={require("../../assets/splash-screen-background.png")}
        style={styles.background}
      >
        <TouchableOpacity
          style={[styles.centeredIcon, SHADOWS.lightMedium]}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Image
            source={require("../../assets/lagos-traffic-radio-logo.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundColor: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#362375",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  centeredIcon: {
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: [{ translateX: -150 / 2 }, { translateY: -150 / 2 }],
  },
  icon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "bold",
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    width: "100%",
  },
});
