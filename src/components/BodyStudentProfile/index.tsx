import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';



type Props = {
    area: string,
    interest1: string,
    interest2: string,
    interest3: string,
    interest4: string,
    interest5: string,

}


export function BodyStudentProfile({ area, interest1, interest2, interest3, interest4, interest5, ...rest }: Props) {
    
    return (
        <View style={styles.container}>
            <View style={styles.contentArea}>
                    <Text style={styles.name}>{area}</Text>
                    <Text style={styles.description}>{interest1}</Text>
                    <Text style={styles.description}>{interest2}</Text>                   
                    <Text style={styles.description}>{interest3}</Text>                   
                    <Text style={styles.description}>{interest4}</Text>                   
                    <Text style={styles.description}>{interest5}</Text>
                </View>
        </View>
    )
}