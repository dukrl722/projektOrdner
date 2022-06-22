import React from 'react';
import {View, Text, FlatList, Linking} from 'react-native';

import {styles} from './styles';

export type AreaProfessor = {
    id: string;
    name: string;
}

export type ProjectProfessor = {
    id: string;
    name: string;
    link: string;
}

type Props = {
    description: string,
    areaWork: [AreaProfessor],
    projectWork: [ProjectProfessor],
}

export function BodyProfessorProfile({description, areaWork, projectWork, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Descrição geral</Text>
                <Text>{description ? description : 'Nenhuma descrição'}</Text>
            </View>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Areas de Trabalho</Text>
                {
                    areaWork.length
                        ? <FlatList
                            data={areaWork}
                            keyExtractor={area => area.id}
                            renderItem={({ item }) => (
                                <Text>{item.name}</Text>
                            )}
                        />
                        : <Text>Nenhuma área trabalhada</Text>
                }
            </View>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Projetos</Text>
                {
                    areaWork.length
                        ? <FlatList
                            data={projectWork}
                            keyExtractor={project => project.id}
                            renderItem={({ item }) => (
                                <Text onPress={() => {
                                    Linking.openURL(item.link)
                                }}>{item.name}</Text>
                            )}
                        />
                        : <Text>Nenhuma projeto feito</Text>
                }
            </View>
        </View>
    )
}
