import React from 'react'
import {View, Text} from 'react-native'
import {EditButton} from '../EditButton';
import {themes} from './styles';

interface Props {
    titulo: string
}

export function EditField(props: Props) {
    return (
        <View style={themes.container}>
            <Text>{props.titulo}</Text>
            <View style={{marginLeft:20}}>
                <EditButton />
            </View>
        </View>
    )
}