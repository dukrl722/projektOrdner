import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native';

import {themes} from "./styles";
import {EditButton} from "../EditButton";

interface Props {
    urlImage: string
}

export function AvatarEdit({urlImage}: Props) {
    return (
        <View style={themes.container}>

            <Image source={{uri: urlImage}} style={themes.avatar} />

            <TouchableOpacity style={themes.edition}>
                <EditButton />
            </TouchableOpacity>

        </View>
    )
}