import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        borderWidth:2,
        borderColor:'purple',
        width:340,
        alignContent:'flex-start'
    },
    inputs: {
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:1,
        fontSize: 16,
        paddingLeft: 16,
    }
})