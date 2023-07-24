import React, { useContext } from "react";
import { View } from "react-native";
import { triviaContext } from "../../../../contextApi/triviaContext";
import { GenericButton } from "../../../Generic";
import { triviaStyle } from "../../../../screens/Trivia/triviaStyle";

export const Footer = () => {
  const { handleSave } = useContext(triviaContext);
  return (
    <View style={triviaStyle.footer}>
      <GenericButton
        styleButton={[triviaStyle.greenBackground, triviaStyle.button]}
        handlePress={handleSave}
        styleTextButton={[triviaStyle.whiteText, triviaStyle.fontSize_18]}
        text={"Save And Continue"}
      />
    </View>
  );
};
