import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        width: 331,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.menuInputBackground,
        borderColor: theme.colors.menuInputBorder,
        borderWidth: 1
    },
    inputs: {
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        paddingLeft: 16
    }
});
