//@ts-nocheck
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

import {themes} from './styles';
import {theme} from '../../global/styles/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    title: string,
    goBackAction: Function
}

export function Header({title, goBackAction}: Props) {

    return (
        <View style={themes.container}>
            <View style={{ backgroundColor: '#DADADA' }} ></View>
            <TouchableOpacity style={themes.headerLeft} onPress={goBackAction}>
                <Feather
                    name='arrow-left'
                    size={25}
                    color={theme.colors.secondary40}
                />
            </TouchableOpacity>
            <View style={themes.titleContainer}>
                <Text style={themes.text}>{title}</Text>
            </View>
            <View style={themes.headerRight} />
        </View>
    )
}
