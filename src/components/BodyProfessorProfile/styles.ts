import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    name: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90,
        marginTop: 20
    },

    contentArea: {
        left: 33,
        top: 200
    },
 
    description: {
        fontSize: 16,
        marginTop: 16,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500
    },

});