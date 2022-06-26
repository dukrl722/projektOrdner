import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    cloak: {
        height: 120,
    },
    linearContainer: {
        height: '100%'
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 60,
        marginLeft: 33,
        borderColor: theme.colors.secondary100,
        borderRadius: 50,
        position: "absolute",
        resizeMode: "cover",
        borderWidth: 1
    },
	contentStudent: {
        left: 33,
        top: 90,
        marginBottom: 25
    },
    contentName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90,
        marginRight: 5
    },
    university: {
        fontSize: 16,
        marginTop: 10,
        color: theme.colors.secondary90,
        fontFamily: theme.fonts.text500
    },
});
