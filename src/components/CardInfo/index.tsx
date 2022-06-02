//@ts-nocheck
import React from "react";

import {Image, Text, View} from "react-native";

import {themes} from "./styles";
import {theme} from "../../global/styles/theme";

import {LinearGradient} from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

export type CardInfoProps = {
    id: string;
    name: string;
    city: string;
    image: string;
    description: string;
}

type Props = {
    data: CardInfoProps;
}

export function CardInfo({data, onPress}: Props) {

    const {secondary10, secondary20} = theme.colors;

    return (

        <TouchableOpacity onPress={onPress}>
            <LinearGradient colors={[secondary10, secondary20]} style={themes.container}>
                <View style={themes.content}>
                    <Image source={{uri: data.image}} style={themes.profilePicture}/>
                    <View style={themes.infoUser}>
                        <Text style={themes.name}>
                            {data.name}
                        </Text>
                        <Text style={themes.city}>
                            {data.city}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={themes.description}>
                        {data.description}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>

    )
}
