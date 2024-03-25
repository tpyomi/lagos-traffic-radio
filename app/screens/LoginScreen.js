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
import { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import EmailInput from "../components/inputFields/EmailInput";
import PasswordInput from "../components/inputFields/PasswordInput";
import GoogleLoginButton from "../components/GoogleLoginButton";
import FacebookLoginButton from "../components/FacebookLoginButton";
import MyGoogleSigninButton from "../components/MyGoogleSigninButton";

export default function LoginScreen() {
  const [error, setError] = useState();
 const [userInfo, setUserInfo] = useState();
 const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

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
          <FacebookLoginButton />
          
          <MyGoogleSigninButton />
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
  fieldLabel: { fontSize: 16, fontFamily: "semibold", marginVertical: 8 },
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
