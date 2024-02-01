import { ScrollView, StyleSheet, View } from "react-native";
import { Book } from "./Book";

export const Books = (props) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollBooks}>
      <View style={styles.bookGroup}>
        {props.booksTitles.map((_, index) => {
          return <Book key={index} booksTitles={props.booksTitles[index]} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollBooks: {
    marginLeft: 8,
  },
  bookGroup: {
    flexDirection: "row",
    columnGap: 20,
    flex: 1,
  },
});
