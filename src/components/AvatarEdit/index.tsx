// @ts-nocheck
import React, {useCallback, useRef, useState} from "react";

import {Image, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Text} from "react-native";
import {EditButton} from '../EditButton';

import {themes} from "./styles";
import {InterestModal} from "../InterestModal";
import {BottomSheet, BottomSheetRef} from "react-native-sheet";
import {LinearGradient} from "expo-linear-gradient";
import {RectButton} from "react-native-gesture-handler";
import {theme} from "../../global/styles/theme";

export function AvatarEdit({urlImage, handle, ...rest} : any) {

    const bottomsheet = useRef<BottomSheetRef>(null);

    const [text, setText] = useState<String>();
    const {primary, secondary} = theme.colorFilter;

    const handleUrlImage = useCallback((url) => {
        handle(url);
    });

    return (
        <View style={themes.container}>
            <Image source={{uri: urlImage}} style={themes.avatar}/>

            <TouchableOpacity style={themes.edition} onPress={() => bottomsheet.current.show()}>
                <Image source={require('../../assets/imagem_plus.png')}/>
            </TouchableOpacity>

            <BottomSheet height={400} ref={bottomsheet}>
                <KeyboardAvoidingView style={themes.centeredView}>
                    <LinearGradient colors={[primary, secondary]} >
                        <KeyboardAvoidingView style={themes.modalView}>
                            <View style={themes.container}>
                                <View style={themes.contentView}>
                                    <TextInput
                                        placeholder="Insira o Link da imagem"
                                        defaultValue={urlImage}
                                        onChangeText={newText => setText(newText)}
                                        style={themes.contentInput}
                                    />
                                </View>

                                <TouchableOpacity style={themes.buttonAdd} onPress={
                                    () => {
                                        handle(text);
                                        bottomsheet.current?.hide();
                                    }
                                }>
                                    <Text style={themes.buttonContent}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </LinearGradient>
                </KeyboardAvoidingView>
            </BottomSheet>
        </View>
    )
}
