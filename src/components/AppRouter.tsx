import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import Trivia from "../screens/Trivia";
import NoConnetion from "../screens/NoConnection";
import { routerStyle } from "./routerStyle";

export const AppRouter = () => {
  const [connectedStatus, setConnectedStatus] = useState<boolean>(false);
  const checkConnected = async () => {
    const isConnected = await NetInfo.fetch().then(
      (state) => state.isConnected
    );
    setConnectedStatus(isConnected || false);
  };
  useEffect(() => {
    checkConnected();
  }, [connectedStatus]);

  return (
      <SafeAreaView style={routerStyle.container}>
        {connectedStatus ? <Trivia /> : <NoConnetion />}
      </SafeAreaView>
  );
};

export default AppRouter;
