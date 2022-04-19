import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const themes = StyleSheet.create({
    container: {
        color: theme.colors.secondary100,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLeft: {
        width: '15%',
        paddingLeft: 10,
        color: theme.colors.secondary100
    },
    headerRight: {
        width: '15%',
        paddingRight: 10,
        alignItems: 'flex-end',
        color: theme.colors.secondary100
    }
})