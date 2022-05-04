import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    cloak: {
        height: 117,
        top: getStatusBarHeight(),
    },
    image: {
        width: 100,
        height: 100,
        top: 60,
        left: 33,
        borderColor: theme.colors.secondary100,
        borderRadius: 50,
        position: "absolute",
        //borderWIdth: 1
        //Borda fica quadrada por algum motivo
    },
	contentStudent: {
        left: 33,
        top: 90,
        marginBottom: 25
    },

    name: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90
    },

    university: {
        fontSize: 16,
        marginTop: 10,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500
    },
});