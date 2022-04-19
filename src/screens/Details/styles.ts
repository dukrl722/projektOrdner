import { ColorPropType, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30
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
    subtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary100,
        fontSize: 16,
        textAlign: 'center'
    },
    text: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary100
    },
    itens: {
        paddingVertical: 10,
        alignItems: 'flex-start'
    },
    workAreasContainer: {
        //width: '100%',
        paddingVertical: 20
    },
    projectsContainer: {
        //width: '100%',
        paddingVertical: 20
    },
    descriptionContainer: {
        paddingVertical: 20
    }
})