import React from "react";
import { View } from "react-native";
import { styles } from "./style";

export const PageIndicator = ({ activeSlider, length }) => {
  let dots = [];
  for (let index = 0; index < length; index++) {
    const isActive = index === activeSlider;
    const dotStyle = [styles.dot, isActive ? styles.activeDot : null];
    dots.push(<View style={dotStyle} />);
  }

  return <View style={styles.container}>{dots.map((item) => item)}</View>;
};
