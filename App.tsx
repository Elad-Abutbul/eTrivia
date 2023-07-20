import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { AppRouter } from "./src/components/AppRouter";
import { styles } from "./mainStyle";

const App = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <AppRouter />
  </View>
);
export default App;
