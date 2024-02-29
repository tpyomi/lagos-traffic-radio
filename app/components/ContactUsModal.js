import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SHADOWS from "../../utils/constant/shadows";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";

const ContactUsModal = ({ onClose }) => {
  const handleContactUsModal = () => {
    onClose();
  };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => handleContactUsModal()}
        >
          <Ionicons name="close" size={24} color={COLORS.white} />
        </TouchableOpacity>

        <Text style={styles.headerText}> Contact us</Text>
      </View>
    </View>
  );
};

export default ContactUsModal;

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
  closeIcon: {
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
    top: 10,
    right: 10,
  },
  headerText: { color: COLORS.white, fontFamily: "bold", fontSize: 16 },
});
