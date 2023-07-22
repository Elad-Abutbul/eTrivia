import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { AppRouter } from "./src/components/AppRouter";
import { globalStyle } from "./globalStyle";

const App = () => (
  <View style={globalStyle.container}>
    <StatusBar style="auto" />
    <AppRouter />
  </View>
);

export default App;
