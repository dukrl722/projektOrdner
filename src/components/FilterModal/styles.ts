import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 0,
    overflow: 'hidden',
    backgroundColor: '#FDFDFD'
  },
  modalView: {
    margin: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 35,
    alignItems: "center",
    overflow: 'hidden'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

  },
  buttonContainer: {
    width: 331,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: theme.colors.secondary30,
    backgroundColor: theme.colors.secondary10
  },
  textContainer: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.secondary90
  }
});