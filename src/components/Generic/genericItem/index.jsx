import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export const ListItem = (item, handlePressItem, styleRenderItem) => {
  return (
    <TouchableOpacity
      style={styleRenderItem}
      onPress={() => handlePressItem(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};
