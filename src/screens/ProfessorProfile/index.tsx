//@ts-nocheck
import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import IconProject from '../../assets/picapau.png';

import {HeaderProfile} from '../../components/HeaderProfile';
import {Background} from '../../components/Background';
import {BodyProfessorProfile} from '../../components/BodyProfessorProfile';

export function ProfessorProfile({userId}) {

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <HeaderProfile
                        name="Pica-pau"
                        campus='Engenharia de Software - Dois Vizinhos'
                        image={IconProject}
                        cloakProfessor
                    />
                </View>
                <View style={styles.container3}>
                    <BodyProfessorProfile
                        description='Aqui vai a descrição que o professor vai colocar.'
                        areaWork='Áreas trabalhadas'
                        projectWork='Projetos'
                        area='Cursos de Coach'
                        project='Motivação'
                    />
                </View>
            </View>
        </ Background>
    );
}
