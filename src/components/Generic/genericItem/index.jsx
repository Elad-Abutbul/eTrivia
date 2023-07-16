import { Text, TouchableOpacity } from "react-native";
import React from "react";

export const GenericListItem = (item, handlePressItem, styleRenderItem) => {
  return (
    <TouchableOpacity
      style={styleRenderItem}
      onPress={() => handlePressItem(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};
