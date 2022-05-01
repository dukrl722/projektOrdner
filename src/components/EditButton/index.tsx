import React from 'react'
import {Text} from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import {themes} from './styles';

export function EditButton() {
    return(
        <RectButton style={themes.button}>
            <Text>+</Text>
        </RectButton>
    )
}