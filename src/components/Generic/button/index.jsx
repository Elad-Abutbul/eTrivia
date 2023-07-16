import { Text } from "react-native";
import React from "react";

export const Button = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSave}>
      <Text style={styles.buttonText}>
        {activeSlider === length - 1 ? "Go To User" : "Save And Continue"}
      </Text>
    </TouchableOpacity>
  );
};
