import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";
//import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    content: {
        alignItems: 'center'
    },
    contentView: {
        width: 331,
        height: 48,
        flexDirection: 'row',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.menuInputBackground,
        borderColor: theme.colors.menuInputBorder,
        color: theme.colors.menuInputBorder,
        borderWidth: 1
    },
    contentViewTextArea: {
        width: 331,
        flexDirection: 'row',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.menuInputBackground,
        borderColor: theme.colors.menuInputBorder,
        color: theme.colors.menuInputBorder,
        borderWidth: 1
    },
    contentInput: {
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        paddingLeft: 16
    },
    listContainer: {
        marginBottom: 5,
        paddingHorizontal: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: theme.fonts.text500,
        width: 270,
        fontSize: 16,
        color: theme.colors.menuInputBorder
    },
    iconContent: {
        flexDirection: 'row'
    },
    saveButtonContainer: {
        alignItems: 'center'
    },
    saveButton: {
        marginVertical: 10,
        paddingHorizontal: 45,
        width: 331,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.secondary90,
        borderColor: theme.colors.secondary30,
        borderWidth: 1
    },
    saveButtonContent: {
        fontFamily: theme.fonts.text500,
        fontSize: 20,
        color: theme.colors.secondary10
    }
})
