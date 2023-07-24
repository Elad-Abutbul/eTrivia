import React from "react";
import { View, Image, Text } from "react-native";
import { finishStyle } from "./finishStyle";
export const FinishQuestions = ({ bodyStyle }) => {
  return (
    <View style={[finishStyle.containerFinishQuestions, bodyStyle]}>
      <Text style={finishStyle.title}>
        You’ve Reached All The Required Questions!
      </Text>
      <Text style={[finishStyle.subTitle, finishStyle.title]}>
        Here Is Your Friendly è-Badge
      </Text>

      <Image
        source={require("../../../assets/pictures/LevelMockup.png")}
        style={finishStyle.image}
        resizeMode="contain"
      />
      <Text style={finishStyle.bigTitle}>Would You Like to Continue</Text>
      <Text style={finishStyle.bigTitle}> Teach Us About You?</Text>
    </View>
  );
};
