import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80
    },
    imageButton: {
        marginTop: -40
    },
    imageFilter: {
        width: 180,
        height: 180,
        marginTop: -40
    },
    viewContent: {
        alignItems: 'center'
    },
    lastName: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90
    },
    generaltext: {
        fontSize: 16,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500,
       textAlign: 'center',
       marginTop: 10,
    }
});