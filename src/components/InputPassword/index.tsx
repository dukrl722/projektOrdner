import React from 'react';
import {Image, TextInputProps, View} from "react-native";

import { themes } from './styles';
import {DefaultInput} from "../DefaultInput";

import PadLock from '../../assets/padlock.png';
import Key from '../../assets/key.png';
import {LineDivider} from "../LineDivider";

type Props = TextInputProps & {
    placeholder: string;
    confirmPassword: boolean;
}

export function InputPassword({ placeholder, confirmPassword, ...rest } : Props) {
    return (
        <View style={themes.container}>
            <Image source={confirmPassword ? Key : PadLock} style={themes.image} />
            <LineDivider />
            <DefaultInput placeholder={placeholder} />
        </View>
    )
}
