import {View, Text, TouchableOpacity, Image, FlatList} from "react-native";
import React, { useRef } from "react";
import {useState} from 'react';
import { BottomSheet, BottomSheetRef } from 'react-native-sheet';

import { AreasInteresse } from '../AreasInteresse';
// <AreasInteresse data="wwwwwwww" visivel={ligado}/>

import {themes} from './styles';

interface Props {
    placeholder: string
}

export function EditField({ placeholder, ...rest }: Props) {
    
    const data = [
        {'key': 1},
        {'key': 2}
    ]

    const bottomsheet = useRef<BottomSheetRef>(null);

    return (
        <View style={themes.container}>
            <Text style={themes.inputs} >
                Areas de Interesse
            </Text>

            <TouchableOpacity onPress={() => bottomsheet.current?.show()} style={themes.avatar}>
                <Image source={require('../../assets/image_plus.png')}/>
            </TouchableOpacity>

            <BottomSheet height={655} ref={bottomsheet}>
                <AreasInteresse dado={data} visivel={true}></AreasInteresse>
            </BottomSheet> 
            
            <FlatList
                style={themes.lista} 
                data={data}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />

        </View>
    )
}
