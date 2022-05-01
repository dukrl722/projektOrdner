import {TextInput, TextInputProps} from "react-native";
import React from "react";

type Props = TextInputProps & {
    placeholder: string;
}

export function EditInput({ placeholder, ...rest }: Props) {
    return (
        <TextInput
            placeholder={placeholder}
            {...rest}
        />
    )
}
