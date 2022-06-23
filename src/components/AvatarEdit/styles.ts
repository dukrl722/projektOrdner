import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:30,
        top:50,
        right:15,
    },
    avatar: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: theme.colors.secondary100,
        borderRadius: 70,
    },
    edition: {
        position:'absolute',
        top:60,
    }
});
