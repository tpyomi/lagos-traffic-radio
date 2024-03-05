import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import COLORS from "../../utils/constant/colors";
import SIZES from "../../utils/constant/sizes";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { setItem } from "../../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

export default function OnboardingOne() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Welcome");
    setItem("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    <TouchableOpacity style={styles.doneButton} {...props}>
      <Text>Done</Text>
    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        // DoneButtonComponent={doneButton}
        containerStyles={{ padding: 15 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  source={require("../../assets/images/onboarding-image1.png")}
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Welcome to Lagos Traffic Radio 96.1fm",
            subtitle:
              "Your trusted companion for navigating the bustling city of Lagos. Stay informed, entertained, and updated on traffic conditions with our dedicated radio station. Let's make your journey smoother and more enjoyable!",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  source={require("../../assets/images/onboarding-image2.png")}
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Explore Powerful Features",
            subtitle:
              "Tune in to live broadcasts, receive real-time traffic updates, and navigate the city efficiently. Our app is designed to keep you informed and entertained while on the move. Experience the convenience of Lagos Traffic Radio 96.1fm.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  source={require("../../assets/images/onboarding-image3.png")}
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Tailor Your Experience",
            subtitle:
              "Make Lagos Traffic Radio 96.1fm uniquely yours. Personalize your preferences, set favorite stations, and receive custom notifications. Whether you're a commuter or a local, our app adapts to your needs for a seamless radio experience in the heart of Lagos.",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width,
    height: width,
    resizeMode: "contain",
    padding: 20
  },
  doneButton: {
    padding: 20,
  },
});
