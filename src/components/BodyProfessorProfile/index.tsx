import React from 'react';
import {View, Text, FlatList, Linking} from 'react-native';

import {styles} from './styles';

type Props = {
    description: string,
    areaWork: [string],
    projectWork: [string],
}

export function BodyProfessorProfile({description, areaWork, projectWork, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Descrição geral</Text>
                <Text style={styles.bodyDescription}>{description ? description : 'Nenhuma descrição'}</Text>
            </View>
            <View style={styles.contentArea}>
                <Text style={styles.name}>Areas de Trabalho</Text>
                {
                    areaWork.length
                        ? <FlatList
                            data={areaWork}
                            keyExtractor={area => area}
                            renderItem={({ item }) => (
                                <Text>{item}</Text>
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
                            keyExtractor={project => project}
                            renderItem={({ item }) => (
                                <Text>{item}</Text>
                            )}
                        />
                        : <Text>Nenhum projeto feito</Text>
                }
            </View>
        </View>
    )
}
