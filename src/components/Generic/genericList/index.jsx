import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
export const GenericList = ({ list, renderItem, handlePressItem }) => {
  return (
    <ScrollView>
      <View>
        {list.map((item, index) => renderItem(item, handlePressItem, index))}
      </View>
    </ScrollView>
  );
};
