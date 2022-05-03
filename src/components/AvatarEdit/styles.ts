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
        left:15,
        bottom:-15
    }
})