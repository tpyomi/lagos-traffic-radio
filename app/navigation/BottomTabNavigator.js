import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, View, Text, Platform } from "react-native";
import ProfileScreen from "../screens/Profilescreen";
import SavedScreen from "../screens/SavedScreen";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  backgroundColor: "#3C3C6B",
  width: "100%",
  height: "12%",
  borderTopWidth: 0,
  elevation: 0,
  shadowOpacity: 0,
  paddingTop: 10,
};

const RoundedIcon = ({ name, size, color, focused }) => {
  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor: focused ? "#6E6E9D" : "transparent",
        },
      ]}
    >
      <Ionicons name={name} size={size} color={COLORS.white} />
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            width: "100%",
            alignSelf: "center",
            ...tabBarStyle,
          },
          tabBarShowLabel: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: "#00002F", // Change the header background color here
            borderBottomColor: "transparent",
            borderBottomWidth: 0,
          },
          headerTintColor: COLORS.white,
          tabBarIconStyle: {},
          tabBarIcon: ({ focused, color, size }) => {
            let label;

            if (route.name === "Home") {
              label = focused ? "Home" : null;
            } else if (route.name === "Saved") {
              label = focused ? "Saved" : null;
            } else if (route.name === "Profile") {
              label = focused ? "Profile" : null;
            }

            return (
              <View style={styles.iconLabelContainer}>
                <RoundedIcon
                  name={
                    route.name === "Profile" ? "person-outline" : "home-outline"
                  }
                  size={size}
                  color={color}
                  focused={focused}
                />
                {label && <Text style={styles.labelText}>{label}</Text>}
              </View>
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#00002F" },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerBackTitleVisible: true,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00002F",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerBackTitleVisible: true,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  iconContainer: {
    borderRadius: 99,
    paddingVertical: Platform.OS === "ios" ? 8 : 5,
    paddingHorizontal: Platform.OS === "ios" ? 28 : 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabelContainer: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 5,
  },
});

export default BottomTabNavigator;
