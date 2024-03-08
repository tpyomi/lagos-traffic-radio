import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SHADOWS from "../../utils/constant/shadows";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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

        <View style={[styles.location, {justifyContent:"flex-start"}]}>
          <Ionicons name="location" size={30} color={COLORS.white}/>
          <Text style={styles.locationText}>Broadcast Complex, Lateef Jakande Rd, Agidingbi, Ikeja.</Text>
        </View>

        <View style={[styles.location, {justifyContent:"flex-start"}]}>
          <MaterialCommunityIcons name="phone" size={30} color={COLORS.white}/>
          <Text style={styles.locationText}>0809 912 0777</Text>
        </View>

        <View style={[styles.location, {justifyContent:"flex-start"}]}>
          <Ionicons name="mail-sharp" size={30} color={COLORS.white}/>
          <Text style={styles.locationText}>info@trafficradio961.ng</Text>
        </View>
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
    // alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 30
  },
  closeIcon: {
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
    top: 10,
    right: 10,
  },
  headerText: { color: COLORS.white, fontFamily: "bold", fontSize: 20, textAlign: "center", marginBottom: 30 },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  locationText: {
    color: COLORS.white,
    textAlign: "left",
    paddingHorizontal: 20,
    fontSize: 16
  }
});
