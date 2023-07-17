import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { TriviaQuestions } from "../../TriviaQuestions";
import { Slider } from "../../components/Generic/slider";
import { useEnterAnswers } from "../../hooks/useEnterAnswers";
import { ShowAnswer } from "../../components/Trivia/showAnswer";
import { styles } from "./style";

import { PageIndicator } from "../../components/Trivia/pageIndicator";
import { TriviaListItem } from "../../components/triviaListItem";

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
    <View style={styles.container}>
      <Text style={styles.title}>eTrivia</Text>
      {length === activeSlider ? (
        <ShowAnswer answers={answers} TriviaQuestions={TriviaQuestions} />
      ) : (
        <>
          <Slider
            handleSave={handleSave}
            sliders={TriviaQuestions}
            activeSlider={activeSlider}
            handlePressItem={handlePressItem}
            renderItem={TriviaListItem}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>
              {activeSlider === length - 1
                ? "Go To User Data"
                : "Save And Continue"}
            </Text>
          </TouchableOpacity>
          {activeSlider !== 0 && (
            <TouchableOpacity
              style={styles.previousButton}
              onPress={() => setActiveSlider((prev) => prev - 1)}
            >
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
          )}
        </>
      )}
      <PageIndicator activeSlider={activeSlider} length={length + 1} />
    </View>
  );
};

export default Trivia;
