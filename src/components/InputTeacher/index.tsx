import React from 'react';
import { TextInputProps, View } from "react-native";

import { themes } from './styles'
import { DefaultInput } from "../DefaultInput";

type Props = TextInputProps & {
    placeholder: string;
}

export function InputTeacher({ placeholder, ...rest }: Props) {
    return (
        <View style={themes.container}>
            <DefaultInput style={themes.inputs} placeholder={placeholder} />
        </View>
    )
}
