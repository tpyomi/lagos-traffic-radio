import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import OnboardingOne from "../screens/OnboardingOne";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import COLORS from "../../utils/constant/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ProfileScreen from "../screens/Profilescreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const ProfileIcon = ({ navigation }) => {
    return (
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => navigation.navigate("Profile")}
      >
        <FontAwesome5 name="user-circle" size={32} color={COLORS.white} />
      </TouchableOpacity>
    );
  };

  const GoBack = ({ navigation }) => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5
          name="arrow-left"
          size={18}
          paddingHorizontal={20}
          color={COLORS.white}
        />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: "#00002F",
            borderBottomColor: "transparent",
            borderBottomWidth: 0,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.white,
          headerRight: () => <ProfileIcon navigation={navigation} />,
          headerLeft: () => <GoBack navigation={navigation} />,
        })}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#141443",
              borderBottomColor: "transparent",
              borderBottomWidth: 0,
              shadowOpacity: 0,
            },
            headerTintColor: COLORS.white,
            headerBackTitleVisible: false,
            headerRight: null,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00002F",
              borderBottomColor: "transparent",
              borderBottomWidth: 0,
              shadowOpacity: 0,
            },
            headerTintColor: COLORS.white,
            headerBackTitleVisible: false,
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profileIconContainer: {
    marginRight: 5,
    paddingHorizontal: 20,
  },
});

export default AppNavigator;
