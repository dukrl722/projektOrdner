import React from 'react';
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from "react-native-gesture-handler";

import {themes} from './styles';

type Props = RectButtonProps & {
    name: string;
}

export function ButtonRegister({name, ...rest}: Props) {
    return (
        <RectButton style={themes.container} {...rest}>
            <Text style={themes.textContainer}>{name}</Text>
        </RectButton>
    )
}
