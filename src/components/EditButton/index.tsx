import React from 'react'
import {Image} from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import {themes} from './styles';

export function EditButton() {
    return(
        <RectButton style={themes.button}>
            <Image source={require('../../assets/image_plus.png')} style={{width:20, height:20}}/>
        </RectButton>
    )
}