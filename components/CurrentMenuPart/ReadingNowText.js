import { StyleSheet, Text, View } from "react-native";

export const ReadingNowText = () => {
  return (
    <View>
      <Text style={styles.readingNowText}>reading now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  readingNowText: {
    fontSize: 24,
    fontWeight: "400",
    textTransform: "capitalize",
  },
});
