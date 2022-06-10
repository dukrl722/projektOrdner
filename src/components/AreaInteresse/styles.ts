import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent: "center",
        borderWidth:2,
        borderColor:'purple',
        width:360,
        height:70,
    },
    textView:{
        width:130,
        right:110,
        fontSize:12,
    },
    editar: {
        backgroundColor:'#0066ff',
        width:105,
        height:60,
        top:3,
        left:135,
        position:'absolute',
        alignItems:'center',
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:2,
        fontSize: 16,
    },
    excluir:{
        backgroundColor:'#ff6611',
        position:'absolute',
        alignItems:'center',
        width:105,
        height:60,
        left:248,
        top:3,
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:2,
        fontSize: 16,
    }
})