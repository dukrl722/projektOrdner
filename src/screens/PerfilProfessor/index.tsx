import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/picapau.png';

import { HeaderProfile } from '../../components/HeaderProfile';
import { Background } from '../../components/Background';
import { BodyProfessorProfile } from '../../components/BodyProfessorProfile';

export function PerfilProfessor() {
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
                    <BodyProfessorProfile 
                    description='Aqui vai a descrição que o professor vai colocar, dando um puta resumo do que ele faz e sei lá mais o que. Aqui vai a descrição que o professor vai colocar, dando um puta resumo do que ele faz e sei lá mais o que.'
                    areaWork='Áreas trabalhadas'
                    projectWork='Projetos'
                    area='Cursos de Coach'
                    project='Motivação'
                    ></BodyProfessorProfile>
                </View>

            </View>

        </ Background>
    );
}