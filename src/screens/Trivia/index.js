import React, { useState } from "react";
import { View,Alert } from "react-native";
import { TriviaQuestions } from "../../TriviaQuestions";
import { useEnterAnswers } from "../../hooks/useEnterAnswers";
import { PageIndicator } from "../../components/Trivia";
import { triviaStyle } from "./triviaStyle";
import { triviaContext } from "../../contextApi/triviaContext";
import { Questions } from "../../components/Trivia/Questions/Questions";
import { FinishQuestions } from "../../components/Trivia/FinishQuestions/FinishQuestions";
import { TriviaHeader } from "../../components/Trivia/header";

const Trivia = () => {
  const [activeSlider, setActiveSlider] = useState(4);
  const { enterAnswers, answers } = useEnterAnswers();

  const handlePressItem = (item) => {
    enterAnswers(item, activeSlider);
  };
  const length = Object.keys(TriviaQuestions).length;
  const handleSave = () => {
    if (answers[activeSlider]) setActiveSlider((prev) => prev + 1);
    else Alert.alert("Choose at least one");
  };
  const goBack = () => {
    setActiveSlider((prev) => prev - 1);
  };
  return (
    <triviaContext.Provider
      value={{ handleSave, activeSlider, handlePressItem, goBack }}
    >
      <View style={[triviaStyle.container, triviaStyle.margin_15]}>
        <TriviaHeader />
        {length === activeSlider ? <FinishQuestions /> : <Questions />}
        <PageIndicator activeSlider={activeSlider} length={length + 1} />
      </View>
    </triviaContext.Provider>
  );
};

export default Trivia;
