import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 50
    },
    image: {
        width: 80,
        height: 80
    },
    viewContent: {
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        fontSize: 20,
    },
    firstName: {
        fontSize: 20,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500
    },
    lastName: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90
    }
});