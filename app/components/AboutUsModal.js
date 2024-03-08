import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SHADOWS from "../../utils/constant/shadows";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../utils/constant/colors";

const AboutUsModal = ({ onClose }) => {
  const handleAboutUsModal = () => {
    onClose();
  };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => handleAboutUsModal()}
        >
          <Ionicons name="close" size={24} color={COLORS.white} />
        </TouchableOpacity>

        <Text style={styles.headerText}> About us</Text>
        <View style={styles.bodyContainer}>
          <Text style={styles.body}>Lagos Traffic Radio 96.1FM is a prime radio station with a bias for traffic reportage. Its sole aim is to serve as an information disseminating channel for Lagosians on movement from one point to another.

Its mandate is to provide travel information to motorists. It has in recent years, expanded his tentacles in the coverage of all modes of transportation beyond just roads.

The station now reels out traffic updates every ten minutes to keep motorist and commuters abreast of new developments on our roads.

Also, it now broadcasts railway and flight schedules on a daily basis while giving updates on ferry movements on waterways and shipping positions.

By so doing, Lagos Traffic Radio is ensuring to fulfill its core mandate of covering all modes of transportation to guide Lagosians on their journeys.</Text>
        </View>
      </View>
    </View>
  );
};

export default AboutUsModal;

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
  headerText: { color: COLORS.white, fontFamily: "bold", fontSize: 20 },
  bodyContainer: {
    padding: 30,
  },
  body: {
    color: COLORS.white,
    fontSize: 14
  }
});
