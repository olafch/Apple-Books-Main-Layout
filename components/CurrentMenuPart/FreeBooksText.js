import { StyleSheet, Text, View } from "react-native";

export const FreeBooksText = () => {
  return (
    <View style={styles.freeBooksContainer}>
      <Text style={styles.freeBooksText}>free books</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  freeBooksContainer: {
    //backgroundColor: "pink",
  },
  freeBooksText: {
    fontSize: 24,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
