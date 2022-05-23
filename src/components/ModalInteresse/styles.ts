import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        paddingLeft: 16,
    },
    inputs: {
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        borderWidth:5,
        paddingLeft: 16,
        width:300,
        paddingBottom:16
    },
    button: {
        marginTop: 30,
        borderWidth: 4,
        left:70,
    },
    buttonContent: {
        fontFamily: theme.fonts.text500,
        textAlign:'center',
        backgroundColor: '#dd33ff',
    	fontSize: 20,
    	color: theme.colors.secondary90
    }
});