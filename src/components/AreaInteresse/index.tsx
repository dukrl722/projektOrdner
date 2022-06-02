import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import {themes} from './styles';

interface Props {
    dado: string
}

export function AreaInteresse(props: Props) {
    return (
        <View style={themes.container}>
            <Text style={themes.textView}>
                {props.dado}
            </Text>
            
            <TouchableOpacity onPress={() => alert("Texto editado")} style={themes.editar}>
                    <Text>Editar</Text>
                </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Texto Excluido")} style={themes.excluir}>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}