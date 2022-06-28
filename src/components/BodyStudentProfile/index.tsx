import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import {styles} from './styles';

type Props = {
    interests: [string]
}

export function BodyStudentProfile({interests}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Areas de interesse</Text>
                {
                    interests.length
                        ? <FlatList
                            data={interests}
                            keyExtractor={interest => interest}
                            renderItem={({ item }) => (
                                <Text>{item}</Text>
                            )}
                        />
                        : <Text>Nenhuma área de interesse</Text>
                }
            </View>
        </View>
    )
}
