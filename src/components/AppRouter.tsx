import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import Trivia from "../screens/Trivia";
import NoConnetion from "../screens/NoConnection";
import { contextApi } from "../contextApi";
import { routerStyle } from "../routerStyle";
import NetInfo from "@react-native-community/netinfo";

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
    <contextApi.Provider value={connectedStatus}>
      <SafeAreaView style={routerStyle.container}>
        {connectedStatus ? <Trivia /> : <NoConnetion />}
      </SafeAreaView>
    </contextApi.Provider>
  );
};

export default AppRouter;
