import React from "react";

import {Image, View} from "react-native";

import {themes} from "./styles";

interface Props {
    urlImage: string
}

export function Avatar({urlImage}:  Props) {
    return (
        <View style={themes.container} >
            <Image source={{uri: urlImage}} style={themes.avatar} />
        </View>
    )
}
