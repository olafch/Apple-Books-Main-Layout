import { StyleSheet, View } from "react-native";
import { SectionPart } from "./SectionPart";
import { Books } from "./Books";
import { DivisionLine } from "./DivisionLine";

export const FullGenrePart = (props) => {
  return (
    <View style={styles.fullGenreContainer}>
      <SectionPart genre={props.genre} />
      <Books booksTitles={props.booksTitles} />
      <DivisionLine />
    </View>
  );
};

const styles = StyleSheet.create({
  fullGenreContainer: {
    marginLeft: 32,
    rowGap: 22,
    paddingTop: 12,
    paddingBottom: 36,
  },
});
