import React from 'react'
import {View,TouchableHighlight} from 'react-native'

import {themes} from './styles';

export function EditButton() {
    return(
        <View style={themes.button}>
            <TouchableHighlight>+</TouchableHighlight>
        </View>
    )
}