import { StyleSheet, View } from "react-native";
import { SectionTitle } from "./SectionTitle";
import { SeeAllText } from "./SeeAllText";

export const SectionPart = (props) => {
  return (
    <View style={styles.sectionPartContainer}>
      <SectionTitle genre={props.genre} />
      <SeeAllText />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionPartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
