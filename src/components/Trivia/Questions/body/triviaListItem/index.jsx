import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const TriviaListItem = (item, handlePressItem, key, styleRenderItem) => {
  return (
    <TouchableOpacity
      key={key}
      onPress={() => handlePressItem(item)}
      style={styleRenderItem}
    >
      <Text style={{ color: "#428463", fontSize: 17 }}>{item}</Text>
    </TouchableOpacity>
  );
};
