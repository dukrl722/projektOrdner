import React from 'react'
import {Text, Image} from 'react-native'
import {RectButton} from "react-native-gesture-handler";

import {themes} from './styles';

export function EditButton() {
    return (
        <RectButton style={themes.button}>
            <Image source={require('../../assets/imagem_plus.png')}/>
        </RectButton>
    )
}
