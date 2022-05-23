import React, {useState} from "react";
import { View, TextInput, Text, TouchableOpacity} from 'react-native';

import {themes} from './styles'

export function ModalInteresse() {
    const [text,setText] = useState('')

    return (
        <View style={themes.container}>
            <TextInput placeholder="Escreva aqui seu novo interesse" onChangeText={newText => setText(newText)} style={themes.inputs}/>

            <TouchableOpacity style={themes.button}>
                <Text style={themes.buttonContent}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}