import { View } from "react-native";
import React from "react";
import { GenericButton } from "../../../Generic";
import { triviaStyle } from "../../../../screens/Trivia/triviaStyle";

export const Footer = () => {
  return (
    <View style={triviaStyle.footer}>
      <View style={triviaStyle.flexRow}>
        <GenericButton
          text={"Let’s continue"}
          styleButton={[triviaStyle.greenBackground, triviaStyle.button]}
          styleTextButton={[triviaStyle.whiteText, triviaStyle.fontSize_18]}
        />
        <GenericButton
          text={"Save for later"}
          disabled={true}
          styleButton={triviaStyle.button}
          styleTextButton={[triviaStyle.greenText, triviaStyle.fontSize_18]}
        />
      </View>
    </View>
  );
};
