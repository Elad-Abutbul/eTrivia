import { View, Text, ScrollView } from "react-native";
import React from "react";
export const GenericList = ({ list, renderItem, handlePressItem }) => {
  return (
    <ScrollView style={{ borderWidth: 1, width: "100%" }}>
      {list.map((item, index) => renderItem(item, handlePressItem, index))}
    </ScrollView>
  );
};
