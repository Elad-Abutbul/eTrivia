import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PageIndicator } from "../../Trivia/pageIndicator";
import { GenericList } from "../genericList";
import { ListItem } from "../genericItem";
import { ShowAnswer } from "../../Trivia/showAnswer";
import { styles } from "./style";

export const Slider = ({
  answers,
  handleSave,
  slider,
  activeSlider,
  setActiveSlider,
  length,
  handlePressItem,
  TriviaQuestions,
  styleRenderList,
  styleRenderItem,
}) => {
  return (
    <View style={styles.container}>
      {activeSlider === length ? (
        <ShowAnswer answers={answers} TriviaQuestions={TriviaQuestions} />
      ) : (
        <>
          <Text style={styles.title}>{slider.title}</Text>
          <Text style={styles.subTitle}>{slider.subTitle}</Text>
          <GenericList
            styleRenderList={styleRenderList}
            styleRenderItem={styleRenderItem}
            list={slider.list}
            renderItem={ListItem}
            handlePressItem={handlePressItem}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>
              {activeSlider === length - 1
                ? "Go To User Data"
                : "Save And Continue"}
            </Text>
          </TouchableOpacity>
        </>
      )}

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
