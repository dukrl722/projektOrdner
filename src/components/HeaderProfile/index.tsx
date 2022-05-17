import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import { LinearGradient } from 'expo-linear-gradient'
import { theme } from "../../global/styles/theme";

type Props = {
    name: string,
    campus: string,
    image: string,
    cloakProfessor: boolean;
}

export function HeaderProfile({ name, campus, image, cloakProfessor, ...rest }: Props) {

    const data1 = [theme.colors.secondary80, theme.colors.secondary100];
    const data2 = [theme.colors.secondary40, theme.colors.secondary70];

    return (
        <View style={styles.container}>
            <View style={styles.cloak}>
                <LinearGradient
                    colors={cloakProfessor ? data1 : data2}
                    style={styles.container}
                />
                <Image source={image} resizeMode="stretch" style={styles.image} />
            </View>

            <View style={styles.contentStudent}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.university}>{campus}</Text>
            </View>
        </View>
    )
}
