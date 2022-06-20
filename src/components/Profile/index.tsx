import React from "react";

import {Text, View} from "react-native";

import {themes} from "./styles";
import {Avatar} from "../AvatarHeader";

export type ProfileProps = {
    name: string;
    avatar: string;
    descr: string;
    projects: [string];
    workedAreas: [string];
    course: string;
    city: string;
    campus: string;
}

type Props = {
    data: ProfileProps
}

export function Profile({data} : Props) {

    return (
        <View style={themes.container}>

            <Avatar urlImage={data.avatar} />

            <View style={themes.user}>
                <Text style={themes.greeting}>
                    Olá,
                </Text>
                <Text style={themes.username}>
                    {data.name}
                </Text>
            </View>

        </View>
    )
}
