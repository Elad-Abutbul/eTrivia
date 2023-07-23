import { View, Text } from "react-native";
import React from "react";
import { GenericList } from "../genericList";
import { sliderStyle } from "./sliderStyle";

export const Slider = ({
  sliders,
  activeSlider,
  handlePressItem,
  renderItem,
  styleRenderItem,
}) => {
  const slider = sliders[activeSlider];
  return (
    <View style={sliderStyle.sliderContainer}>
      <Text style={sliderStyle.title}>{slider.title}</Text>
      <Text style={sliderStyle.subTitle}>{slider.subTitle}</Text>
      <GenericList
        list={slider.list}
        renderItem={renderItem}
        handlePressItem={handlePressItem}
        styleRenderItem={styleRenderItem}
      />
    </View>
  );
};
