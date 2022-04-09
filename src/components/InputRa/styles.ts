import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const themes = StyleSheet.create({
    container:{
      	width: 331,
      	height: 60,
		flexDirection: 'row',
      	alignItems: 'center',
		marginBottom: 15,
      	borderRadius: 10,
      	backgroundColor: theme.colors.secondary10,
      	borderColor: theme.colors.secondary30,
     	borderWidth: 1,
    },
    image: {
		width: 22,
		height: 22,
		marginLeft: 20
	}
});
