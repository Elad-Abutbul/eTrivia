import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PageIndicator } from "../../Trivia/pageIndicator";
import { GenericList } from "../genericList";
import { styles } from "./style";
import { TriviaListItem } from "../../Trivia/triviaListItem";

export const Slider = ({
  handleSave,
  slider,
  activeSlider,
  setActiveSlider,
  length,
  handlePressItem,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{slider.title}</Text>
      <Text style={styles.subTitle}>{slider.subTitle}</Text>
      <GenericList
        list={slider.list}
        renderItem={TriviaListItem}
        handlePressItem={handlePressItem}
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
      <PageIndicator activeSlider={activeSlider} length={length + 1} />
    </View>
  );
};
