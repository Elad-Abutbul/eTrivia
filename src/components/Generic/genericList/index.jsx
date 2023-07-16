import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
export const GenericList = ({
  list,
  renderItem,
  handlePressItem,
  styleRenderList,
  styleRenderItem,
}) => {
  return (
    <ScrollView>
      <View style={styleRenderList}>
        {list.map((item) => renderItem(item, handlePressItem, styleRenderItem))}
      </View>
    </ScrollView>
  );
};
