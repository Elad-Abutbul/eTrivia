import React, { useContext } from "react";
import { View } from "react-native";
import { triviaContext } from "../../../../contextApi/triviaContext";
import { TriviaQuestions } from "../../../../TriviaQuestions";
import { Slider } from "../../../Generic";
import { TriviaListItem } from "./triviaListItem";
import { triviaStyle } from "../../../../screens/Trivia/triviaStyle";

export const Body = () => {
  const { handleSave, activeSlider, handlePressItem } =
    useContext(triviaContext);
  return (
    <View style={triviaStyle.body}>
      <Slider
        handleSave={handleSave}
        sliders={TriviaQuestions}
        activeSlider={activeSlider}
        handlePressItem={handlePressItem}
        renderItem={TriviaListItem}
        styleRenderItem={[triviaStyle.renderItem, triviaStyle.button]}
      />
    </View>
  );
};
