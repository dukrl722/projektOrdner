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
        borderColor: 'black',
        borderWidth: 1
    },
});