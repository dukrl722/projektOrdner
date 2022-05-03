import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {EditButton} from '../EditButton';
import {themes} from './styles';

interface Props {
    titulo: string
}

export function EditField(props: Props) {
    return (
        <View style={themes.container}>
            <Text style={{width:150, height:50}}>{props.titulo}</Text>

            <TouchableOpacity style={themes.button}>
                <EditButton />
            </TouchableOpacity>
        </View>
    )
}