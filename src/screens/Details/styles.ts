import { ColorPropType, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const themes = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 250,
        borderColor: theme.colors.secondary90,
        borderWidth: 1
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center'
    },
    titleBold: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondary100,
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary100,
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary100
    },
    itens: {
        paddingVertical: 10
    },
    workAreasContainer: {
        width: '100%',
        alignItems: 'flex-start'
    }
})