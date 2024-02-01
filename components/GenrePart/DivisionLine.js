import { StyleSheet, View } from "react-native";

export const DivisionLine = () => {
  return <View style={styles.divisionLine} />;
};

const styles = StyleSheet.create({
  divisionLine: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    marginRight: 32,
  },
});
