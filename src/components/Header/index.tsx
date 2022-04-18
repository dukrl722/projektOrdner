import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { themes } from './styles';

type Props = {
    headerLeft: JSX.Element | undefined,
    headerCenter: JSX.Element | undefined,
    headerRight: JSX.Element | undefined
} 

export function Header({ headerLeft, headerCenter, headerRight } : Props ) {
    return (
        <View style={themes.container}>
            <View style={themes.headerLeft}>
                {headerLeft ? headerLeft : <Feather name='arrow-left' size={30} />}
            </View>
            <View style={{ alignSelf: 'center', width: '70%' }}>
                {headerCenter ? headerCenter : <Text style={{ fontSize: 26, textAlign: 'center' }}>Detalhes</Text>}
            </View>
            <View style={themes.headerRight}>
                {headerRight ? headerRight : <Feather name='arrow-right' size={30} />}
            </View>
        </View>
    )
}