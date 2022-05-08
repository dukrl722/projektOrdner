import { StyleSheet } from "react-native";
//import {theme} from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modal: {
        margin: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 35,
        alignItems: "center",
        overflow: 'hidden'
    },
    centered: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 0,
        overflow: 'hidden',
        backgroundColor: '#FDFDFD'
    }
})
