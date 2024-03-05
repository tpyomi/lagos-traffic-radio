import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { removeItem } from "../../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../utils/constant/colors";
import CustomButton from "../components/CustomButton";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };

  // Calculate LogoComponent size based on screen dimensions
  const logoSize = Math.min(width * 0.2, height * 0.2);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome-screen.png")}
        style={styles.image}
      />

      {/* content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let's Get Started</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Your Gateway to Smooth Journeys in Lagos! 🚗📻 Join us on 96.1fm for
            real-time traffic updates, lively shows, and entertainment tailored
            for the Lagosian spirit. Let's make your commute a delightful
            experience!
          </Text>
        </View>
        <CustomButton
          title="Join now"
          onPress={() => navigation.navigate("Signup")}
          style={styles.button}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: width,
    resizeMode: "contain",
  },
  contentContainer: {
    paddingHorizontal: 22,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "semibold",
    color: COLORS.black,
  },
  textContainer: {
    marginVertical: 22,
  },
  description: {
    fontSize: 12,
    color: COLORS.black,
    textAlign: "center",
  },
  button: {
    marginTop: 22,
    width: "100%",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: "semibold",
    marginLeft: 4,
  },
});
