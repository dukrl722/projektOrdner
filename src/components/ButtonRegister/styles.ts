import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container:{
      	width: 331,
      	height: 67,
		marginBottom: 15,
      	alignItems: 'center',
      	justifyContent: 'center',
      	borderRadius: 50,
      	backgroundColor: theme.colors.secondary10,
      	borderColor: theme.colors.secondary30,
     	borderWidth: 1
    },
    textContainer:{
    	fontFamily: theme.fonts.text500,
    	fontSize: 20,
    	color: theme.colors.secondary90
    }
});
