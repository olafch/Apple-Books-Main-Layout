import { View, StyleSheet, Text } from "react-native";

export const MainMenuButton = (props) => {
  return (
    <View
      style={[
        styles.mainMenuButton,
        props.selected ? styles.mainMenuButtonSelected : null,
      ]}
    >
      <View
        style={[
          styles.buttonInsidePicture,
          props.selected ? styles.buttonInsidePictureSelected : null,
        ]}
      />
      <Text
        style={
          props.selected
            ? styles.mainMenuButtonSelected
            : styles.mainMenuButtonText
        }
      >
        {props.buttonName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenuButton: {
    flexDirection: "row",
    flexGrow: 1,
    width: 80,
    flexBasis: 50,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  mainMenuButtonText: {
    fontSize: 10,
    color: "grey",
  },
  mainMenuButtonSelected: {
    fontSize: 11,
    fontWeight: "600",
  },
  buttonInsidePicture: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 4,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  buttonInsidePictureSelected: {
    backgroundColor: "black",
  },
});
