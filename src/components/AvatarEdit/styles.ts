import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 30,
        marginBottom: 60
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: 'hidden',
        backgroundColor: '#FDFDFD',
    },
    modalView: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 35,
        alignItems: "center",
        overflow: 'hidden'
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
    contentInput: {
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        paddingLeft: 16
    },
    button: {
        flex:1,
        width: 25,
        height: 25,
        borderRadius: 25/2,
        borderWidth: 1,
        borderColor:'black',
        flexDirection: 'row'
    },
    buttonAdd: {
        width: 331,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.secondary90,
        borderColor: theme.colors.secondary30,
        borderWidth: 1
    },
    buttonContent: {
        fontFamily: theme.fonts.text500,
        fontSize: 20,
        color: theme.colors.secondary10
    }
});
