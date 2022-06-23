import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        width: 360,
        height: 50,
        top:50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.menuInputBackground,
        borderColor: theme.colors.menuInputBorder,
        borderWidth: 1

    },
    avatar: {
        marginLeft:320,
        position:'absolute'
    },
    inputs: {
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        paddingLeft: 16
    },
    lista: {
        marginTop:10,
        borderWidth: 2,
        borderColor: 'black'
    }
});
