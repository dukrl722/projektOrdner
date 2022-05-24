//@ts-nocheck
import React, {ReactNode} from "react";

import {LinearGradient} from "expo-linear-gradient";

import {styles} from "./styles";
import {theme} from '../../global/styles/theme';
interface Props {
    children: ReactNode
}

export function Background({children}: Props) {

    const {primary, secondary20} = theme.colors;

    return (
        <LinearGradient style={styles.container} colors={[primary, secondary20]}>
            {children}
        </LinearGradient>
    )
}
