import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export type BodyStudentProfileProps = {
    id: string,
    name: string
}

type Props = {
    area: string,
    interest: BodyStudentProfileProps
}


export function BodyStudentProfile({area, interest, ...rest}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                <Text style={styles.name}>{area}</Text>
                {
                    /*
                    * usar map
                    * */
                }
            </View>
        </View>
    )
}
