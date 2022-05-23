import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import {themes} from './styles';

interface Props {
    dado: string
}

export function AreaInteresse(props: Props) {
    return (
        <View style={themes.container}>
            <Text>{props.dado}</Text>

            <TouchableOpacity onPress={() => alert("Texto editado")} style={themes.inputs}>
                <Text>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Texto Excluido")} style={themes.inputs}>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}