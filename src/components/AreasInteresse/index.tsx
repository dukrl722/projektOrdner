import React, {useState} from "react";
import { View, TextInput, Text} from 'react-native';

import {themes} from './styles'

interface Props {
    dado: object[],
    visivel: boolean
}

export function AreasInteresse(props: Props) {
    const [text,setText] = useState('')

    /*const mudarTexto = (novoTexto: string) => {
        let dado = []
        for(let chave in text) {
            dado.push(chave)
        }
        dado.push({'key': novoTexto})
        setText(dado)
    }*/

    return (
        <View style={themes.container}>
            <TextInput placeholder="Escreva aqui" onChangeText={newText => setText(newText)}/>
            <Text>{text}</Text>
        </View>
    )
}