import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container:{
      	width: 331,
      	height: 48,
      	alignItems: 'center',
      	justifyContent: 'center',
      	borderRadius: 10,
      	backgroundColor: theme.colors.secondary10,
      	borderColor: theme.colors.secondary30,
     	borderWidth: 1,
        paddingLeft: 74
    },
    
});