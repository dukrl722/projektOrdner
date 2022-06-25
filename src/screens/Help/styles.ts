import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 45
    },
    logo: {
        width: 80,
        height: 80
    },
    imageButton: {},
    imageFilter: {
        width: 180,
        height: 180,
    },
    viewContent: {
        alignItems: 'center'
    },
    lastName: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90,
        textAlign: 'center'
    },
    generaltext: {
        fontSize: 16,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500,
        marginTop: 10,
        textAlign: 'center'
    }
});
