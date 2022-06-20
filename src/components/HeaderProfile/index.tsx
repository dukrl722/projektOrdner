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

    const professor = [theme.colors.secondary80, theme.colors.secondary100];
    const student = [theme.colors.secondary40, theme.colors.secondary70];

    return (
        <View style={styles.container}>
            <View style={styles.cloak}>
                <LinearGradient
                    colors={cloakProfessor ? professor : student}
                    style={styles.linearContainer}
                />
                <Image source={{uri: image}} style={styles.image} />
            </View>

            <View style={styles.contentStudent}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.university}>{campus}</Text>
            </View>
        </View>
    )
}
