import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { themes } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    title: string,
    goBackAction: Function
} 

export function Header({ title, goBackAction } : Props ) {
    return (
        <View style={themes.container}>
            <View style={themes.headerLeft}>
                <Feather onPress={() => goBackAction} name='arrow-left' size={25} color={theme.colors.secondary40} />
            </View>
            <View style={themes.titleContainer}>
                <Text style={themes.text}>{title}</Text>
            </View>
            <View style={themes.headerRight}>
            </View>
        </View>
    )
}