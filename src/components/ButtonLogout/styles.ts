import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red'
    },
    button: {
        backgroundColor: theme.colors.secondary90,
        padding: 15,
        borderRadius: 5
    },
    buttonText: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.secondary10
    }
});