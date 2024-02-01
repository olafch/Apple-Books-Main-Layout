import { StyleSheet, Text, View } from "react-native";

export const SectionTitle = (props) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{props.genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
});
