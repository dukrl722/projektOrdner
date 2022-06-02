import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent: "space-around",
        borderWidth:2,
        borderColor:'purple',
        width:360,
    },
    textView:{
        flex:1,
        width:100,
        height:50,
        fontSize: 12,
    },
    editar: {
        width:100,
        height:50,
        flex:1,
        alignItems:'center',
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:1,
        fontSize: 16,
    },
    excluir:{
        flex:1,
        alignItems:'center',
        width:100,
        height:50,
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:1,
        fontSize: 16,
    }
})