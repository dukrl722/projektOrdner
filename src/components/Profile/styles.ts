import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    user: {
        flexDirection: 'row',
    },
    username: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90,
        fontSize: 20,
    },
    greeting: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary90,
        fontSize: 20,
        marginRight: 6
    },
});
