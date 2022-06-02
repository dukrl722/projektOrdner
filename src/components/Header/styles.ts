import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import {getStatusBarHeight} from "react-native-iphone-x-helper";

export const themes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: getStatusBarHeight() + 10
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
        minWidth: '15%',
        paddingHorizontal: 10,
        color: theme.colors.secondary90
    },
    headerRight: {
        minWidth: '15%',
        paddingHorizontal: 10,
        color: theme.colors.secondary90
    }
})
