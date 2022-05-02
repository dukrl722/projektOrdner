import React from "react";

import {Image, View} from "react-native";
import { EditButton } from '../EditButton/index';

import {themes} from "./styles";

type Props = {
    urlImage: string;
}

export function AvatarEdit({ urlImage } : Props) {

    return (
        <View style={themes.container} >
            <Image source={{uri: urlImage}} style={themes.avatar} />
            <EditButton />
        </View>
    )
}
