import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:30,
        
    },
    edition: {
        flex: 1,
        position: 'absolute',
        left:20,
        bottom:-15
    },
    avatar: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: theme.colors.secondary100,
        borderRadius: 70,
    }
})