import {View, Text, TouchableOpacity, Image} from "react-native";
import React, { useRef } from "react";
import {useState} from 'react';
import { BottomSheet, BottomSheetRef } from 'react-native-sheet';

import { ModalInteresse } from '../ModalInteresse';
// <AreasInteresse data="wwwwwwww" visivel={ligado}/>

import {themes} from './styles';

interface Props {
    placeholder: string
}

export function EditField({ placeholder, ...rest }: Props) {


    const bottomsheet = useRef<BottomSheetRef>(null);

    return (
        <View style={themes.container}>
            <Text style={themes.inputs} >
                {placeholder}
            </Text>

            <TouchableOpacity onPress={() => bottomsheet.current?.show()} style={themes.avatar}>
                <Image source={require('../../assets/image_plus.png')}/>
            </TouchableOpacity>

            <BottomSheet height={655} ref={bottomsheet}>
                <ModalInteresse></ModalInteresse>
            </BottomSheet> 

        </View>
    )
}
