import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import COLORS from "../../utils/constant/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import NameInput from "../components/inputFields/NameInput";
import EmailInput from "../components/inputFields/EmailInput";
import PhoneInput from "../components/inputFields/PhoneInput";
import PasswordInput from "../components/inputFields/PasswordInput";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  const handlePhoneValidation = () => {
    const phoneRegex = /^\d{10}$/;

    if (phoneRegex.test(phoneNumber)) {
      Alert.alert("Success", "Phone number is valid!");
    } else {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
    }
  };
  return (
    <SafeAreaView style={styles.registerContainer}>
      <View style={styles.registerInnerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText1}>Create Account</Text>
        </View>
        <NameInput />
        <EmailInput />
        <PhoneInput />
        <PasswordInput />
        <View style={{ flexDirection: "row", marginVertical: 16 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>I agree to terms and conditions</Text>
        </View>

        <CustomButton
          onPress={() =>
            Alert.alert(
              "Important!!!",
              "Please check your email box and complete your account verification",
              [
                {
                  onPress: () => navigation.navigate("Welcome"),
                },
              ]
            )
          }
          title="Sign Up"
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
          <Text style={{ fontSize: 14 }}>Or signup with</Text>
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
            style={styles.altLoginBtn}
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
            style={styles.altLoginBtn}
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
            style={styles.altLoginBtn}
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
            Already have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")} style={{}}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontFamily: "semibold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerContainer: { flex: 1, backgroundColor: COLORS.white },
  registerInnerContainer: { flex: 1, marginHorizontal: 22 },
  header: { marginVertical: 12 },
  headerText1: {
    fontSize: 22,
    fontFamily: "semibold",
    marginVertical: 12,
    color: COLORS.black,
  },
  headerText2: { fontSize: 16, color: COLORS.black },
  // nameContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // nameInputContainer: {
  //   flex: 1,
  //   marginHorizontal: 4,
  //   marginBottom: 12,
  // },
  // nameLabel: {
  //   fontSize: 16,
  //   fontWeight: "400",
  //   marginVertical: 8,
  // },
  // nameInputWrapper: {
  //   width: "100%",
  //   height: 48,
  //   borderColor: COLORS.black,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingLeft: 16,
  // },
  // nameInput: {
  //   width: "100%",
  // },
  // fieldContainer: { marginBottom: 12 },
  // fieldLabel: { fontSize: 16, fontWeight: 400, marginVertical: 8 },
  // fieldWrapper: {
  //   width: "100%",
  //   height: 48,
  //   borderColor: COLORS.black,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingLeft: 22,
  // },
  // phoneFieldWrapper: {
  //   width: "100%",
  //   height: 48,
  //   borderColor: COLORS.black,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   alignItems: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingLeft: 22,
  // },
  // fieldInput: {
  //   width: "100%",
  // },
  // phoneFieldInput: {
  //   width: "12%",
  //   borderRightWidth: 1,
  //   borderLeftColor: COLORS.gray,
  //   height: "100%",
  // },
  // phoneIconInput: {
  //   width: "80%",
  // },
  altLoginBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginRight: 4,
    borderRadius: 10,
  },
});
