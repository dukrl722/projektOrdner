import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: "center",
    },
    textView:{
         flex:1,
        fontSize:12,
        color:'#112211'
    },
    editar: {
        flex:1,
        alignItems:'center',
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
    },
    excluir:{
        flex:1,
        alignItems:'center',
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        fontSize: 16,
    }
})
