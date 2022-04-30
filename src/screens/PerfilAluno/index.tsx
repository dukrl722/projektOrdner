import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/picapau.png';

import { HeaderProfile } from '../../components/HeaderProfile';
import { Background } from '../../components/Background';
import { BodyStudentProfile } from '../../components/BodyStudentProfile';

export function PerfilAluno() {
    const data = [
        {
            name: 'sao paulo',
            university: 'sao paulo',
            interesse1: 'c++',
            interesse2: 'c++',
            interesse3: 'c++',
            interesse4: 'c++',
            interesse5: 'c++'
        }
    ]

    const cloakProfessor = 0;

    return (
        <Background>

            <View style={styles.container}>
                <View style = {styles.container2}>
                    <HeaderProfile name="Pica-pau" campus='Engenharia de Software - Dois Vizinhos' image={IconProject} cloakProfessor ></HeaderProfile>
                </View>

                <View style={styles.container3}>
                    <BodyStudentProfile 
                    
                    area='Areas de interesse' 
                    interest1='Picar'
                    interest2='Picar'
                    interest3='Picar'
                    interest4='Picar'
                    interest5='Picar'
                    
                    ></BodyStudentProfile>
                </View>

            </View>

        </ Background>
    );
}
