import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SHADOWS from "../../utils/constant/shadows";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";
import { useState } from "react";

const ChangePasswordModal = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  const handleChangePasswordModal = () => {
    onClose();
  };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => handleChangePasswordModal()}
        >
          <Ionicons name="close" size={24} color={COLORS.white} />
        </TouchableOpacity>

        <Text style={styles.headerText}> Change password</Text>

        <TextInput
          style={styles.modalInput}
          placeholder="Old password"
          placeholderTextColor={COLORS.gray}
          value={oldPassword}
          onChangeText={(text) => {
            setOldPassword(text);
          }}
        />
        <TextInput
          style={styles.modalInput}
          placeholder="New password"
          placeholderTextColor={COLORS.gray}
          value={newPassword}
          onChangeText={(text) => {
            setNewPassword(text);
          }}
        />

        <TouchableOpacity
          onPress={() => handleChangePasswordModal()}
          style={styles.updatContainer}
        >
          <Text style={styles.modalButton}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    ...SHADOWS.lightMedium,
  },
  modalInnerContainer: {
    backgroundColor: "#00002F",
    width: "80%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  closeIcon: {
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
    top: 10,
    right: 10,
  },
  headerText: {
    color: COLORS.white,
    fontFamily: "bold",
    fontSize: 16,
    marginBottom: 30,
  },
  modalInput: {
    height: 40,
    width: "80%",
    borderColor: COLORS.white,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: COLORS.white,
    borderRadius: 8,
  },
  modalButton: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  updatContainer: {
    width: "40%",
    backgroundColor: "#7E1DE0",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});
