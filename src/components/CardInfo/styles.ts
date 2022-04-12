import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        width: 330,
        height: 177,
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 6
    },
    content: {
        flexDirection: 'row',
        marginBottom: 20
    },
    profilePicture: {
        width: 64,
        height: 64,
        borderRadius: 5,
        borderColor: theme.colors.secondary90,
        borderWidth: 1
    },
    infoUser: {
        paddingHorizontal: 30
    },
    name: {
        fontSize: 15,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500,
        marginBottom: 10
    },
    city: {
        fontSize: 11,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500
    },
    description: {
        fontSize: 11,
        color: theme.colors.secondary80,
        fontFamily: theme.fonts.text400
    }
});
