import React from "react";
import { View } from "react-native";
import { Dot } from "./dot/Dot";
import { styles } from "./style";

export const PageIndicator = ({ activeSlider, length }) => {
  let dots = [];
  for (let index = 0; index < length; index++) {
    dots.push(<Dot index={index} activeSlider={activeSlider} key={index} />);
  }

  return <View style={styles.container}>{dots.map((item) => item)}</View>;
};
