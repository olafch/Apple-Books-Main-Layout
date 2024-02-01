import { StyleSheet, View, Text } from "react-native";
import { getRandomHexColor } from "./RandomColors";

export const Book = (props) => {
  const randomColor = getRandomHexColor();
  return (
    <View style={[styles.layoutContainer, { backgroundColor: randomColor }]}>
      <Text style={styles.bookTitleText}>{props.booksTitles}</Text>
      <View style={styles.bookCoverPicture} />
    </View>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    width: 100,
    height: 160,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    alignItems: "center",
  },

  bookTitleText: {
    padding: 4,
    textTransform: "capitalize",
    fontStyle: "italic",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  bookCoverPicture: {
    position: "absolute",
    top: 60,
    width: "80%",
    aspectRatio: 4 / 3,
    backgroundColor: "black",
  },
});
