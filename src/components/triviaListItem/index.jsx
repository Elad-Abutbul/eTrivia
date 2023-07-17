import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export const TriviaListItem = (item, handlePressItem, key) => {
  return (
    <TouchableOpacity
      key={key}
      style={styles.triviaItem}
      onPress={() => handlePressItem(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  triviaItem: {
    display: "flex",
    borderColor: "green",
    borderWidth: 1,
    // width: width - 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
