import React from "react";

import {Image, View} from "react-native";

import {themes} from "./styles";

export function AvatarEdit() {

    return (
        <View style={themes.container} >
            <Image source={{uri: ''}} style={themes.avatar} />
        </View>
    )
}
