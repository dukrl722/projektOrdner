import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles'

import auth from '@react-native-firebase/auth';

export function ButtonLogout() {

    const navigation = useNavigation();

    function onSignOut(){
        auth().signOut()
            .then(() => {
                navigation.reset({
                    index: 0,
                    //@ts-ignore
                    routes: [{ name: 'Select' }],
                });
            });
    }

    return (
        <View style={styles.buttonContainer}>
            <RectButton onPress={() => onSignOut()} style={styles.button}>
                <Text style={styles.buttonText}>Deslogar</Text>
            </RectButton>
        </View>
    )
}
