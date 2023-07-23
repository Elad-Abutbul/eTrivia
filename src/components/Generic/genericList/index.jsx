import { ScrollView, RefreshControl } from "react-native";
import React from "react";

export const GenericList = ({
  list,
  renderItem,
  handlePressItem,
  styleRenderItem,
}) => {
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={false} />}>
      {list.map((item, index) =>
        renderItem(item, handlePressItem, index, styleRenderItem)
      )}
    </ScrollView>
  );
};
