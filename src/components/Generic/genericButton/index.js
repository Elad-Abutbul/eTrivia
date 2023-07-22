import { Text, TouchableOpacity } from "react-native";
import React from "react";

export const GenericButton = ({
  handlePress,
  styleButton,
  styleTextButton,
  text,
}) => {
  return (
    <TouchableOpacity style={styleButton} onPress={handlePress}>
      <Text style={styleTextButton}>{text}</Text>
    </TouchableOpacity>
  );
};
