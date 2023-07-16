import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const ShowAnswer = ({ answers, TriviaQuestions }) => {
  return (
    <View style={styles.container}>
      {Object.keys(TriviaQuestions).map((key) => {
        return (
          <View key={key} style={styles.questionContainer}>
            <Text style={styles.question}>{TriviaQuestions[key].subject}</Text>
            {answers[key]?.map((item, index) => (
              <Text key={index} style={styles.answer}>
                {item}
              </Text>
            ))}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  answer: {
    fontSize: 16,
    color: "#555",
  },
});
