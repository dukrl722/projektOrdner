import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const themes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: theme.colors.secondary90,
        fontSize: 20,
        textAlign: 'center'
    },
    titleContainer: {
        alignSelf: 'center',
        width: '70%'
    },
    headerLeft: {
        width: '15%',
        paddingLeft: 15,
        color: theme.colors.secondary90
    },
    headerRight: {
        width: '15%',
        paddingRight: 15,
        alignItems: 'flex-end',
        color: theme.colors.secondary90
    }
})