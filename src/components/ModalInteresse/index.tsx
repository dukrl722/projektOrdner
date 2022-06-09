import React, {useState} from "react";
import { View, FlatList, TextInput, Text, TouchableOpacity} from 'react-native';

import {themes} from './styles'

import { AreaInteresse } from '../AreaInteresse';

interface Props {
    items:any[]
    tema:string
}

export function ModalInteresse({items, tema} : Props) {
    const [text,setText] = useState('')

    const place_holder = "Escreva aqui seu novo " + tema

    return (
        <View style={themes.container}>
            <TextInput placeholder={place_holder} onChangeText={newText => setText(newText)} style={themes.inputs}/>

            <TouchableOpacity style={themes.button} onPress={() => alert("Item adicionado")}>
                <Text style={themes.buttonContent}>Adicionar</Text>
            </TouchableOpacity>
            
            <FlatList
                style={themes.list}
                data={items}
                renderItem={({item}) => <AreaInteresse dado={item['key']}/>}
            />
        </View>
    )
}