import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputs: {
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.title700,
        fontSize: 20,
    }
});
