import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TriviaQuestions } from "../../TriviaQuestions";
import { useEnterAnswers } from "../../hooks/useEnterAnswers";
import { Slider, GenericButton } from "../../components/Generic";
import {
  FinishQuestions,
  TriviaListItem,
  PageIndicator,
} from "../../components/Trivia";
import { triviaStyle } from "./triviaStyle";
import { triviaContext } from "../../contextApi/triviaContext";
import { Body } from "../../components/Trivia/Questions";

const Trivia = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const { enterAnswers, answers } = useEnterAnswers();

  const handlePressItem = (item) => {
    enterAnswers(item, activeSlider);
  };
  const length = Object.keys(TriviaQuestions).length;
  const handleSave = () => {
    if (answers[activeSlider]) setActiveSlider((prev) => prev + 1);
    else Alert.alert("Choose at least one");
  };

  return (
    <triviaContext.Provider
      value={{ handleSave, activeSlider, handlePressItem }}
    >
      <View style={[triviaStyle.container, triviaStyle.margin_15]}>
        <View style={triviaStyle.header}>
          <TouchableOpacity
            disabled={activeSlider === 0}
            style={({ opacity: activeSlider }, triviaStyle.arrowBack)}
            onPress={() => setActiveSlider((prev) => prev - 1)}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={triviaStyle.eTrivia}>è-Trivia</Text>
        </View>
        {length === activeSlider ? (
          <>
            <FinishQuestions bodyStyle={triviaStyle.body} />
            <View style={triviaStyle.footer}>
              <View style={triviaStyle.flexRow}>
                <GenericButton
                  text={"Let’s continue"}
                  styleButton={[
                    triviaStyle.greenBackground,
                    triviaStyle.button,
                  ]}
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
            <Body />
            <View style={triviaStyle.footer}>
              <GenericButton
                styleButton={[triviaStyle.greenBackground, triviaStyle.button]}
                handlePress={handleSave}
                styleTextButton={[
                  triviaStyle.whiteText,
                  triviaStyle.fontSize_18,
                ]}
                text={"Save And Continue"}
              />
            </View>
          </>
        )}
        <PageIndicator activeSlider={activeSlider} length={length + 1} />
      </View>
    </triviaContext.Provider>
  );
};

export default Trivia;
