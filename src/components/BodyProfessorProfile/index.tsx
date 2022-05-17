import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

type Props = {
    description: string,
    areaWork: string,
    projectWork: string,
    area: string,
    project: string
}

export function BodyProfessorProfile({description, areaWork, projectWork, area, project, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.name}>{areaWork}</Text>
                <Text style={styles.description}>{area}</Text>
                <Text style={styles.name}>{projectWork}</Text>
                <Text style={styles.description}>{project}</Text>
            </View>
        </View>
    )
}
