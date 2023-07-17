import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { AppRouter } from "./src/components/AppRouter";
import { styles } from "./mainStyle";

const App = () => (
  <View style={styles.container}>
    <AppRouter />
    <StatusBar style="auto" />
  </View>
);
export default App;
