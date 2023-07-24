import { View, Text, Image } from "react-native";
import React from "react";
import { finishStyle } from "../finishStyle";
import { triviaStyle } from "../../../../screens/Trivia/triviaStyle";

export const Body = () => {
  return (
    <View style={[finishStyle.containerFinishQuestions, triviaStyle.bodyStyle]}>
      <Text style={finishStyle.title}>
        You’ve Reached All The Required Questions!
      </Text>
      <Text style={[finishStyle.subTitle, finishStyle.title]}>
        Here Is Your Friendly è-Badge
      </Text>

      <Image
        source={require("../../../../assets/pictures/LevelMockup.png")}
        style={finishStyle.image}
        resizeMode="contain"
      />
      <Text style={finishStyle.bigTitle}>Would You Like to Continue</Text>
      <Text style={finishStyle.bigTitle}> Teach Us About You?</Text>
    </View>
  );
};
