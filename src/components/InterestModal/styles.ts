import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: 'hidden',
        backgroundColor: '#FDFDFD',
    },
    modalView: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 35,
        alignItems: "center",
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    contentView: {
        width: 331,
        height: 48,
        flexDirection: 'row',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.menuInputBackground,
        borderColor: theme.colors.menuInputBorder,
        color: theme.colors.menuInputBorder,
        borderWidth: 1
    },
    contentInput: {
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        paddingLeft: 16
    },
    button: {
        width: 331,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.secondary90,
        borderColor: theme.colors.secondary30,
        borderWidth: 1
    },
    buttonContent: {
        fontFamily: theme.fonts.text500,
        fontSize: 20,
        color: theme.colors.secondary10
    }
});
