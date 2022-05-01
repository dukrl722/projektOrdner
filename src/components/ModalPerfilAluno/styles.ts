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
        borderRadius: 75,
        backgroundColor: "#FDFDFD",
        padding: "15%",
        width: "75%",
        height: "75%"
    }
})