import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 30,
        marginBottom: 60
    },
    avatar: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: theme.colors.secondary100,
        borderRadius: 70,
    },
    edition: {
        position:'absolute',
        bottom: -10
    }
});
