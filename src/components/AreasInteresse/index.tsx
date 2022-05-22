import React, {useState} from "react";
import { View, TextInput, Text} from 'react-native';

import {themes} from './styles'

interface Props {
    visivel: boolean
}

export function AreasInteresse(props: Props) {
    const [text,setText] = useState('')

    return (
        <View style={themes.container}>
            <TextInput placeholder="Escreva aqui" onChangeText={newText => setText(newText)}/>
            <Text>{text}</Text>
        </View>
    )
}