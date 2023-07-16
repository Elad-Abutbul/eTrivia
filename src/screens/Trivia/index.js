import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { TriviaQuestions } from "../../TriviaQuestions";
import { Slider } from "../../components/Generic/slider";
import { useEnterAnswers } from "../../hooks/Trivia/EnterAnswers";
import { ShowAnswer } from "../../components/Trivia/showAnswer";
import { styles } from "./style";

const Trivia = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const { enterAnswers, answers } = useEnterAnswers();
  const handlePressItem = (item) => {
    enterAnswers(item, activeSlider);
  };

  const slider = TriviaQuestions[activeSlider];
  const length = Object.keys(TriviaQuestions).length;
  const handleSave = () => {
    if (answers[activeSlider]) setActiveSlider((prev) => prev + 1);
    else Alert.alert("Choose at least one");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>eTrivia</Text>
      <Slider
        answers={answers}
        handleSave={handleSave}
        slider={slider}
        setActiveSlider={setActiveSlider}
        activeSlider={activeSlider}
        length={length}
        handlePressItem={handlePressItem}
        showAnswer={ShowAnswer}
        TriviaQuestions={TriviaQuestions}
        styleRenderList={styles.renderList}
        styleRenderItem={styles.renderItem}
      />
    </View>
  );
};

export default Trivia;