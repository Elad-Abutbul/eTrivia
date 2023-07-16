import React from "react";
import { View, SafeAreaView } from "react-native";
import Trivia from "../screens/Trivia";
import { styles } from "../routerStyle";

export const AppRouter = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Trivia />
      </SafeAreaView>
    </View>
  );
};


