import { View } from "react-native";

export const Dot = ({ index, activeSlider }) => (
  <View
    style={{
      backgroundColor:
        index < activeSlider
          ? "gray"
          : index > activeSlider
          ? "white"
          : "#428463",
      margin: 2,
      borderRadius: 100,
      height: 8,
      width: 8,
      opacity: index < activeSlider ? 0.2 : 10,
      borderWidth: index > activeSlider && 1,
      borderColor: index > activeSlider && "#428463",
    }}
  />
);
