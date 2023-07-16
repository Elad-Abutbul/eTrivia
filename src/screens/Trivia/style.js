import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  renderList: {
    gap: 40,
  },
  renderItem: {
    display: "flex",
    borderColor: "black",
    borderWidth: 1,
    width: width - 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});