import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TriviaQuestions } from "../../TriviaQuestions";
import { useEnterAnswers } from "../../hooks/useEnterAnswers";
import { Slider, GenericButton } from "../../components/Generic";
import {
  AfterQuestions,
  TriviaListItem,
  PageIndicator,
} from "../../components/Trivia";
import { triviaStyle } from "./triviaStyle";

const Trivia = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const { enterAnswers, answers } = useEnterAnswers();
  const handlePressItem = (item) => {
    enterAnswers(item, activeSlider);
  };

  const length = Object.keys(TriviaQuestions).length;
  const handleSave = () => {
    console.log(answers[activeSlider]);
    if (answers[activeSlider]) setActiveSlider((prev) => prev + 1);
    else Alert.alert("Choose at least one");
  };

  return (
    <View style={[triviaStyle.container, triviaStyle.margin_15]}>
      <View style={triviaStyle.header}>
        <View style={triviaStyle.arrowBack}>
          <TouchableOpacity
            disabled={activeSlider === 0}
            onPress={() => setActiveSlider((prev) => prev - 1)}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={triviaStyle.eTrivia}>è-Trivia</Text>
      </View>
      {length === activeSlider ? (
        <>
          <AfterQuestions bodyStyle={triviaStyle.body} />
          <View style={triviaStyle.footer}>
            <View style={triviaStyle.flexRow}>
              <GenericButton
                text={"Let’s continue"}
                styleButton={[triviaStyle.greenBackground, triviaStyle.button]}
                styleTextButton={[
                  triviaStyle.whiteText,
                  triviaStyle.fontSize_18,
                ]}
              />
              <GenericButton
                text={"Save for later"}
                disabled={true}
                styleButton={triviaStyle.button}
                styleTextButton={[
                  triviaStyle.greenText,
                  triviaStyle.fontSize_18,
                ]}
              />
            </View>
          </View>
        </>
      ) : (
        <>
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
          <View style={triviaStyle.footer}>
            <GenericButton
              styleButton={[triviaStyle.greenBackground, triviaStyle.button]}
              handlePress={handleSave}
              styleTextButton={[triviaStyle.whiteText, triviaStyle.fontSize_18]}
              text={"Save And Continue"}
            />
          </View>
        </>
      )}
      <PageIndicator activeSlider={activeSlider} length={length + 1} />
    </View>
  );
};

export default Trivia;
