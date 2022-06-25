//@ts-nocheck
import { StyleSheet } from 'react-native';
import { theme } from '../global/styles/theme';

export const themes = StyleSheet.create({
    tabBar: {
        backgroundColor: '#CCCCCC',
        height: 80,
        paddingBottom: 15,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        shadowOffset: { height: -3 },
        shadowColor: 'grey',
        shadowOpacity: 0.4,
    }
})
