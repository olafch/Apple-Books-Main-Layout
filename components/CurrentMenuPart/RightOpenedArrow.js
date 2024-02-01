import { StyleSheet, Text, View } from "react-native";

export const RightOpenedArrow = () => {
  return (
    <View>
      <Text style={styles.rightOpenedArrow}>&lt;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rightOpenedArrow: {
    fontSize: 36,
    fontWeight: "500",
  },
});
