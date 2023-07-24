import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { triviaStyle } from "../../../screens/Trivia/triviaStyle";
import { triviaContext } from "../../../contextApi/triviaContext";
import { Ionicons } from "@expo/vector-icons";

export const TriviaHeader = () => {
  const { activeSlider, goBack } = useContext(triviaContext);
  return (
    <View style={triviaStyle.header}>
      <TouchableOpacity
        disabled={activeSlider === 0}
        style={({ opacity: activeSlider }, triviaStyle.arrowBack)}
        onPress={goBack}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={triviaStyle.eTrivia}>è-Trivia</Text>
    </View>
  );
};
