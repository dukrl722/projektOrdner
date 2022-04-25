import React from 'react';
import {Image, TextInput, TextInputProps, View} from "react-native";
import { themes } from './styles';

import UserIcon from '../../assets/user.png';
import {LineDivider} from "../LineDivider";
import {DefaultInput} from "../DefaultInput";

type Props = TextInputProps & {
    placeholder: string;
} 

export function InputRa({ placeholder, onChangeText, ...rest } : Props) {
    return (
        <View style={themes.container}>
            <Image source={UserIcon} style={themes.image} />
            <LineDivider />
            <DefaultInput placeholder={placeholder} onChangeText={onChangeText} />
        </View>
    )
}
