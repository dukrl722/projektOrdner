import {StyleSheet} from "react-native";

import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.secondary10,
        borderColor: theme.colors.secondary30,
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.menuInputBackground,
    },
    headerTitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.menuInputBorder,
        fontSize: 16
    },
    saveAreaViewContainer: {
        flex: 1,
        backgroundColor: theme.colors.menuInputBackground
    },
    viewContainer: {
        flex: 1,
        backgroundColor: theme.colors.menuInputBackground
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        paddingBottom: '20%',
    },

    dropdownBtnStyle: {
        backgroundColor: theme.colors.menuInputBackground,
        borderWidth: 1,
        borderColor: theme.colors.menuInputBorder,
        width: 330,
        height: 48,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10,
    },
    dropdownBtnTxtStyle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.menuInputBorder,
        textAlign: 'left',
        fontSize: 16
    },
    dropdownDropdownStyle: {
        backgroundColor: theme.colors.menuInputBackground
    },
    dropdownRowStyle: {
        backgroundColor: theme.colors.menuInputBackground,
        borderBottomColor: theme.colors.menuInputBorder
    },
    dropdownRowTxtStyle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.menuInputBorder,
        textAlign: 'left',
        fontSize: 16,
        paddingLeft: 8
    },

});
