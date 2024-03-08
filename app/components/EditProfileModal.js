import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../utils/constant/colors";
import SHADOWS from "../../utils/constant/shadows";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileModal({ user, onClose }) {
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newImage, setNewImage] = useState(user.image);

  const handleUpdateProfile = () => {
    onClose();
  };

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      console.log("!!!",permissionResult);
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setNewImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => handleUpdateProfile()}
        >
          <Ionicons name="close" size={24} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalImagePicker} onPress={pickImage}>
          {newImage ? (
            <Image source={{ uri: newImage }} style={styles.modalImage} />
          ) : (
            <Text style={styles.modalImageText}>Pick a new image</Text>
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.modalInput}
          placeholder="New Name"
          value={newName}
          onChangeText={(text) => setNewName(text)}
        />
        <TextInput
          style={styles.modalInput}
          placeholder="New Email"
          value={newEmail}
          onChangeText={(text) => setNewEmail(text)}
        />
        <TouchableOpacity
          onPress={handleUpdateProfile}
          style={styles.updatContainer}
        >
          <Text style={styles.modalButton}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    width: "90%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
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
  modalImagePicker: {
    marginBottom: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  modalImageText: {
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
  closeIcon: {
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
    top: 10,
    right: 10,
  },
});
