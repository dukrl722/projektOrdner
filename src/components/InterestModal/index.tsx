import React, {useState} from "react";
import {View, FlatList, TextInput, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import {themes} from './styles'
import {RectButton} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";
import {theme} from "../../global/styles/theme";
import {styles} from "../FilterModal/styles";

interface Props {
    items: any[]
}

export function InterestModal({items} : Props) {
    const [text,setText] = useState('');

    const { primary, secondary } = theme.colorFilter;

    const addItem = (its:any[], newItem:string) => {
        its.push({'key':newItem})
    };

    return (
        <KeyboardAvoidingView style={themes.centeredView} >
            <LinearGradient colors={[primary, secondary]} >
                <KeyboardAvoidingView style={themes.modalView}>
                    <View style={themes.container}>
                        <View style={themes.contentView}>
                            <TextInput
                                placeholder="Insira o texto aqui"
                                onChangeText={newText => setText(newText)}
                                style={themes.contentInput} />
                        </View>

                        <RectButton style={themes.button} onPress={() => addItem(items, text)}>
                            <Text style={themes.buttonContent}>Adicionar</Text>
                        </RectButton>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
