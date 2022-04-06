import React from 'react';
import { TextInput, TextInputProps } from "react-native";
import { themes } from './styles';

type Props = TextInputProps & {
    placeholder: string;
} 

export function Input({ placeholder, ...rest } : Props) {
    return (
        <TextInput
        style={themes.container}
        placeholder={placeholder}
        {...rest}
      />
    )
}