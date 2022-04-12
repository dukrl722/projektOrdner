import React from "react";

import {Image, Text, View} from "react-native";

import {themes} from "./styles";

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage } : Props) {

    return (
        <View style={themes.container} >
            <Image source={{uri: urlImage}} style={themes.avatar} />
        </View>
    )
}
