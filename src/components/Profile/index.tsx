// @ts-nocheck
import React, {useEffect, useState} from "react";

import {Text, View} from "react-native";

import {themes} from "./styles";
import {Avatar} from "../AvatarHeader";
import UserHelper from "../../helpers/user";
import User from "../../helpers/user";
import AppLoading from "expo-app-loading";

export function Profile() {

    const [user, setUser] = useState<User>();

    async function getUserData() {
        UserHelper.getCurrent()
            .then(data => setUser(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getUserData();
    }, []);

    if (!user) {
        return <AppLoading />;
    }

    return (
        <View style={themes.container}>

            <Avatar urlImage={user.avatar} />

            <View style={themes.user}>
                <Text style={themes.greeting}>
                    Olá,
                </Text>
                <Text style={themes.username}>
                    {user.name}
                </Text>
            </View>

        </View>
    )
}
