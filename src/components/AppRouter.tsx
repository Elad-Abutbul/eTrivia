import React from "react";
import { SafeAreaView } from "react-native";
import Trivia from "../screens/Trivia";
import { routerStyle } from "../routerStyle";
export const AppRouter = () => {
  return (
    <SafeAreaView style={routerStyle.container}>
      <Trivia />
    </SafeAreaView>
  );
};

export default AppRouter;
