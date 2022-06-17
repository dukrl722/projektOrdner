import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: "center",
        borderWidth:2,
        borderColor:'purple',
        height:70,
        marginHorizontal:10
    },
    textView:{
         flex:1,
        fontSize:12,
        color:'white'
    },
    editar: {
        flex:1,
        backgroundColor:'#0066ff',
        height:60,
        alignItems:'center',
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:2,
        fontSize: 16,
    },
    excluir:{
        flex:1,
        backgroundColor:'#ff6611',
        alignItems:'center',
        height:60,
        color: theme.colors.menuInputBorder,
        fontFamily: theme.fonts.text400,
        borderWidth:2,
        fontSize: 16,
    }
})