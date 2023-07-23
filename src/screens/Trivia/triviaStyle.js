import { StyleSheet } from "react-native";

export const triviaStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  eTrivia: {
    fontSize: 14,
    paddingTop: 5,
    fontWeight: "bold",
    color: "#428463",
  },
  arrowBack: {
    position: "absolute",
    left: 0,
  },
  body: {
    flex: 0.7,
  },
  footer: {
    flex: 0.2,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    gap: 10,
  },
  greenBackground: {
    backgroundColor: "#428463",
  },
  whiteText: {
    color: "white",
    fontWeight: "500",
  },
  greenText: {
    color: "#428463",
    fontWeight: "500",
  },
  fontSize_18: {
    fontSize: 18,
  },
  renderItem: {
    marginVertical: 5,
  },
  button: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#428463",
    padding: 10,
    alignItems: "center",
  },
  margin_15: {
    margin: 15,
  },
  SaveLater: {
    display: "inline",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    margin: 40,
  },
});
