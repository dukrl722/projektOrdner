import React from 'react'
import {View} from 'react-native';

import {themes} from "./styles";
import {Avatar} from "../AvatarHeader";
import {EditButton} from "../EditButton";

/*

*/

export function AvatarEdit() {
    return (
        <View style={themes.container}>

            <Avatar urlImage="https://github.com/neom200.png"/>

            <View style={themes.edition}>
                <EditButton />
            </View>

        </View>
    )
}