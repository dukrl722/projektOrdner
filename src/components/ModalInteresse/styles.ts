import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
    },
    inputs: {
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        borderWidth: 5,
        width: 300,
        paddingBottom: 16
    },
    button: {
        marginTop: 30,
        borderWidth: 4,
        marginHorizontal: 20
    },
    buttonContent: {
        fontFamily: theme.fonts.text500,
        textAlign: 'center',
        backgroundColor: '#dd33ff',
        fontSize: 20,
        color: theme.colors.secondary90
    },
    list: {
        flex: 1,
        top: 50,
        marginBottom: 15,
        alignContent: 'center',
        width: '100%',
        height: 100,
    },
});