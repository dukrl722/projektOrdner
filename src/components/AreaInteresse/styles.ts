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
        height:60,
    },
    textView:{
        width:125,
        right:110,
        fontSize:12,
    },
    editar: {
        width:110,
        height:50,
        top:3,
        left:135,
        position:'absolute',
        alignItems:'center',
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:1,
        fontSize: 16,
    },
    excluir:{
        position:'absolute',
        alignItems:'center',
        width:100,
        height:50,
        left:250,
        top:3,
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:1,
        fontSize: 16,
    }
})