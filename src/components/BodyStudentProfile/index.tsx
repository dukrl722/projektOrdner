import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import {styles} from './styles';
import {CardInfo} from "../CardInfo";

export type BodyStudentProfileProps = {
    id: string,
    name: string
}

type Props = {
    interests: [BodyStudentProfileProps]
}


export function BodyStudentProfile({interests, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Areas de interesse</Text>
                {
                    interests.length
                        ? <FlatList
                            data={interests}
                            keyExtractor={interest => interest.id}
                            renderItem={({ item }) => (
                                <Text>{item.name}</Text>
                            )}
                        />
                        : <Text>Nenhuma área de interesse</Text>
                }
            </View>
        </View>
    )
}
