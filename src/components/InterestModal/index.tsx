import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';

import {themes} from './styles'
import {RectButton} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import {theme} from '../../global/styles/theme';

import firestore from '@react-native-firebase/firestore';
import UserHelper from '../../helpers/user';

//@ts-ignore
export function InterestModal({ onClose, isProject }) {
    const [text,setText] = useState('');

    const { primary, secondary } = theme.colorFilter;

    async function addItem(newItem:string) {
        try {
            let user = await UserHelper.getCurrent();
            if (!user) throw 'Usuário não encontrado';
            
            if (isProject) {
                if (user.projects.includes(newItem)) {
                    Alert.alert('Este item ja existe!');
                    return;
                }

                user.projects.push(newItem);
            } else {
                if (user.workedAreas.includes(newItem)) {
                    Alert.alert('Este item ja existe!');
                    return;
                }

                user.workedAreas.push(newItem);
            }

            await firestore()
                .collection('user')
                .doc(user.id)
                .set(user);   
            
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <KeyboardAvoidingView style={themes.centeredView} >
            <LinearGradient colors={[primary, secondary]} >
                <KeyboardAvoidingView style={themes.modalView}>
                    <View style={themes.container}>
                        <View style={themes.contentView}>
                            <TextInput
                                placeholder="Insira o texto aqui"
                                onChangeText={newText => setText(newText)}
                                style={themes.contentInput}
                            />
                        </View>

                        <TouchableOpacity style={themes.button} onPress={() => addItem(text)}>
                            <Text style={themes.buttonContent}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
