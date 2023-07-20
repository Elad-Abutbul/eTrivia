import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export const TriviaListItem = (item, handlePressItem, key) => {
  return (
    <TouchableOpacity
      key={key}
      style={styles.triviaItem}
      onPress={() => handlePressItem(item)}
    >
      <Text style={{ borderWidth: 1 }}>{item}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  triviaItem: {
    display: "flex",
    borderColor: "green",
    borderWidth: 1,
    // width: "100%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
