import { StyleSheet, Text, View } from "react-native";

export const SeeAllText = () => {
  return (
    <View style={styles.seeAllContainer}>
      <Text style={styles.seeAllText}>see all</Text>
      <Text style={styles.leftOpenedArrow}>&gt;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  seeAllContainer: {
    right: 32,
    flexDirection: "row",
    columnGap: 4,
  },
  seeAllText: {
    fontSize: 22,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  leftOpenedArrow: {
    fontSize: 22,
    color: "#bfbfbfff",
  },
});
