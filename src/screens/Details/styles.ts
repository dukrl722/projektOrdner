import { ColorPropType, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import {getStatusBarHeight} from "react-native-iphone-x-helper";

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        top: getStatusBarHeight() + 20
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 250,
        borderColor: theme.colors.secondary90,
        borderWidth: 1,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 30
    },
    titleBold: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary90,
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary90,
        fontSize: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary90,
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10
    },
    text: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary90
    },
    itens: {
        paddingVertical: 10
    },
    itensText: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary90,
        fontSize: 16
    },
    itensContainer: {
        paddingVertical: 20
    }
})
