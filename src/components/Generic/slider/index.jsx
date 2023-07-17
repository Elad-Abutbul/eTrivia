import React from "react";
import { View, Text } from "react-native";
import { GenericList } from "../genericList";
import { styles } from "./style";

export const Slider = ({
  sliders,
  activeSlider,
  handlePressItem,
  renderItem,
}) => {
  const slider = sliders[activeSlider];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{slider.title}</Text>
      <Text style={styles.subTitle}>{slider.subTitle}</Text>
      <GenericList
        list={slider.list}
        renderItem={renderItem}
        handlePressItem={handlePressItem}
      />
    </View>
  );
};
