import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {EditButton} from '../EditButton/index';

import {themes} from './styles';

interface Props {
    titulo: string
}

export function FieldAdder({titulo}: Props) {
    return (
        <View style={themes.container}>
            <Text style={themes.text}>{titulo}</Text>
            <TouchableOpacity style={themes.button}>
                <EditButton/>
            </TouchableOpacity>
        </View>
    )
}
