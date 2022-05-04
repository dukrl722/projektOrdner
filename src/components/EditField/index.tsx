import {View, TextInput, TextInputProps} from "react-native";
import React from "react";

import {themes} from './styles';
import { theme } from "../../global/styles/theme";

type Props = TextInputProps & {
    placeholder: string;
}

export function EditField({ placeholder, ...rest }: Props) {
    return (
        <View style={themes.container}>
            <TextInput multiline numberOfLines={20} style={themes.inputs} placeholder={placeholder} {...rest} />
        </View>
    )
}
