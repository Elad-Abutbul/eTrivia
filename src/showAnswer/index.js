// ShowAnswers.js
import React from "react";
import { View, Text } from "react-native";
import { TriviaQuestions } from "../TriviaQuestions";

const ShowAnswers = ({ answers }) => {
  return (
    <View>
      <Text>All Answers:</Text>
      {Object.keys(answers).map((key, index) => (
        <View key={index}>
          <Text>{TriviaQuestions[key].subject}</Text>
          <View>
            {answers[key].map((answer, i) => (
              <Text key={i}>{answer}</Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ShowAnswers;
