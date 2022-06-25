import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import {themes} from './styles';

interface Props {
    data: string
}

export function AreaInteresse({data} : Props) {
    return (
        <View style={themes.container}>
            <Text style={themes.textView}>
                {data}
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
