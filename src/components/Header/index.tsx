import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { themes } from './styles';

type Props = {
    title: string,
    goBackAction: Function
} 

export function Header({ title, goBackAction } : Props ) {
    return (
        <View style={themes.container}>
            <View style={themes.headerLeft}>
                <Feather onPress={() => goBackAction} name='arrow-left' size={30} />
            </View>
            <View style={{ alignSelf: 'center', width: '70%' }}>
                <Text style={{ fontSize: 26, textAlign: 'center' }}>{title}</Text>
            </View>
            <View style={themes.headerRight}>
            </View>
        </View>
    )
}