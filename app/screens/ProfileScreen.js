import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import BottomAudioPlayer from "../components/BottomAudioPlayer";
import EditProfileModal from "../components/EditProfileModal";
import SHADOWS from "../../utils/constant/shadows";

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const currentProgramData = null;

  const handleUpdateProfile = () => {
    // Close the modal
    setModalVisible(false);
  };

  const user = {
    name: "Timilehin Philips",
    email: "tpyomi@gmail.com",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png",
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstElement}>
        <View style={styles.firstElementContent}>
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.profileImage}
          />

          <View style={{ marginRight: windowWidth * 0.2 }}>
            <Text style={styles.nameText}>{user.name}</Text>
            <Text style={styles.emailText}>{user.email}</Text>
          </View>
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome5 name="edit" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.secondElement}>
        <MaterialIcons name="lock" size={36} color={COLORS.white} />

        <View>
          <Text style={styles.nameText}>Change password</Text>
          <Text style={styles.passwordText}>Strengthen your security</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.thirdElement}>
        <FontAwesome5 name="info-circle" size={24} color={COLORS.white} />
        <Text style={styles.nameText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.thirdElement}>
        <FontAwesome5 name="phone" size={24} color={COLORS.white} />
        <Text style={styles.nameText}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.thirdElement}>
        <AntDesign name="logout" size={24} color={COLORS.white} />
        <Text style={styles.nameText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.fourthElement}>
        <TouchableOpacity style={[styles.fourthItem1, SHADOWS.lightMedium]}>
          <Image
            source={require("../../assets/icons/twitter.png")}
            style={{
              height: 56,
              width: 56,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.fourthItem1, SHADOWS.lightMedium]}>
          <Image
            source={require("../../assets/icons/facebook.png")}
            style={{
              height: 56,
              width: 56,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.fourthItem2, SHADOWS.lightMedium]}>
          <Image
            source={require("../../assets/icons/instagram.png")}
            style={{
              height: 56,
              width: 56,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        {shouldShow ? (
          <BottomAudioPlayer programData={currentProgramData} />
        ) : null}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <EditProfileModal user={user} onClose={handleUpdateProfile} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#00002F", alignItems: "center" },
  firstElement: {
    width: "100%",
    height: "30%",
    backgroundColor: "#141443",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  firstElementContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: (windowWidth * 0.25) / 2,
    marginRight: 10,
    // backgroundColor: COLORS.white,
  },
  nameText: {
    fontFamily: "semibold",
    fontSize: windowWidth * 0.04,
    color: COLORS.white,
  },
  emailText: {
    fontFamily: "regular",
    fontSize: windowWidth * 0.035,
    width: windowWidth * 0.4,
    color: COLORS.white,
  },
  editIcon: { justifyContent: "flex-end" },
  secondElement: {
    width: "86%",
    height: "12%",
    backgroundColor: "#323261",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    gap: 20,
  },
  passwordText: {
    fontFamily: "regular",
    fontSize: windowWidth * 0.035,
    width: windowWidth * 0.6,
    color: COLORS.white,
  },
  thirdElement: {
    width: "86%",
    height: "10%",
    backgroundColor: "#323261",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    gap: 20,
  },
  fourthElement: {
    width: "86%",
    height: "10%",
    marginTop: 20,
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },
  fourthItem1: {
    width: 56,
    height: 56,
    borderRadius: 99,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#323261",
  },
  fourthItem2: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#323261",
  },
  aboutContainer: {},
  bottomContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProfileScreen;