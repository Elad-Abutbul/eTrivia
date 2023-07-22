import { View, Text } from "react-native";
import React from "react";
import styles from "../../../styles";
import { TriviaListItem } from "../triviaListItem";

export const Questions = () => {
  return (
     <>
     <View style={styles.body}>
       <Slider
         handleSave={handleSave}
         sliders={TriviaQuestions}
         activeSlider={activeSlider}
         handlePressItem={handlePressItem}
         renderItem={TriviaListItem}
         styleRenderItem={[styles.renderItem, styles.button]}
       />
     </View>
     <View style={styles.footer}>
       <GenericButton
         styleButton={[styles.greenBackground, styles.button]}
         handlePress={handleSave}
         styleTextButton={[styles.whiteText, styles.fontSize_20]}
         text={"Save And Continue"}
       />

     </View>
   </>
  );
};
