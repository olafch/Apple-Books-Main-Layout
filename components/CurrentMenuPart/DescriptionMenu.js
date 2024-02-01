import { StyleSheet, View } from "react-native";
import { RightOpenedArrow } from "./RightOpenedArrow";
import { ReadingNowText } from "./ReadingNowText";
import { FreeBooksText } from "./FreeBooksText";

export function DescriptionMenu() {
  return (
    <View style={styles.descriptionMenuContainer}>
      <RightOpenedArrow />
      <ReadingNowText />
      <FreeBooksText />
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionMenuContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    columnGap: 12,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
});
