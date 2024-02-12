import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import COLORS from "../../utils/constant/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import EmailInput from "../components/inputFields/EmailInput";
import PasswordInput from "../components/inputFields/PasswordInput";

//REMEMBER!!!! remember to check if user has been verified
export default function LoginScreen() {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);

  const handleLoginButtonPress = () => {};

  const handleEmailValidation = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setValidEmail(isValid);

    // Set email only if it's non-empty
    if (text.trim() !== "") {
      setEmail(text);
    } else {
      // If email is empty, reset isValidEmail to true
      setValidEmail(true);
    }
    return isValid;
  };

  const handlePasswordValidation = (text) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(text);
    setValidPassword(isValid);

    // Set password only if it's non-empty
    if (text.trim() !== "") {
      setPassword(text);
    } else {
      // If password is empty, reset isValidPassword to true
      setValidPassword(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "semibold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Hey Welcome Back !
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            You have been missed!
          </Text>
        </View>

        <EmailInput />

        <PasswordInput />

        <View style={{ flexDirection: "row", marginVertical: 16 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>Remember me</Text>
        </View>

        <CustomButton
          onPress={() => navigation.navigate("Home")}
          title="Login"
          filled
          style={{ marginTop: 18, marginBottom: 4 }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.gray,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14 }}>Or login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.gray,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/facebook.png")}
              style={{
                height: 26,
                width: 26,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/apple.png")}
              style={{
                height: 26,
                width: 26,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/google.png")}
              style={{
                height: 26,
                width: 26,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")} style={{}}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontFamily: "semibold",
                marginLeft: 6,
              }}
            >
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fieldContainer: { marginBottom: 12 },
  fieldLabel: { fontSize: 16, fontWeight: 400, marginVertical: 8 },
  fieldWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  fieldInput: {
    width: "100%",
  },
});
