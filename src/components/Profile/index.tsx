import React from "react";

import {Text, View} from "react-native";

import {themes} from "./styles";
import {Avatar} from "../AvatarHeader";

export function Profile() {

    return (
        <View style={themes.container}>

            <Avatar urlImage={'https://github.com/dukrl722.png'} />

            <View style={themes.user}>
                <Text style={themes.greeting}>
                    Olá,
                </Text>
                <Text style={themes.username}>
                    Eduardo
                </Text>
            </View>

        </View>
    )
}
