import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22,
        backgroundColor:'#C4C4C4'
    },
    avatar: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.secondary100,
        borderRadius: 50,
    }
});
