import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const themes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLeft: {
        width: '15%',
        paddingLeft: 20
    },
    headerRight: {
        width: '15%',
        paddingRight: 20
    }
})