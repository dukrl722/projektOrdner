//@ts-nocheck
import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import IconProject from '../../assets/picapau.png';

import {HeaderProfile} from '../../components/HeaderProfile';
import {Background} from '../../components/Background';
import {BodyStudentProfile} from '../../components/BodyStudentProfile';

export function StudentProfile({userId}) {

    const data = {
        id: '1',
        name: 'teste'
    }


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
                    <BodyStudentProfile
                        area='Areas de interesse'
                        interest={data}
                    ></BodyStudentProfile>
                </View>
            </View>
        </ Background>
    );
}
