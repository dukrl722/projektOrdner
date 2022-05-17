import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
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
