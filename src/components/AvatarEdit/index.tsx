import React from "react";

import {Image, View, TouchableOpacity} from "react-native";
import {EditButton} from '../EditButton';

import {themes} from "./styles";

type Props = {
    urlImage: string;
}

export function AvatarEdit({urlImage}: Props) {

    return (
        <View style={themes.container}>
            <Image source={{uri: urlImage}} style={themes.avatar}/>

            <TouchableOpacity style={themes.edition}>
                <EditButton/>
            </TouchableOpacity>
        </View>
    )
}
