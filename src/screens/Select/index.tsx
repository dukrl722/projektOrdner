import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { Background } from '../../components/Background';

import { ButtonLogin } from '../../components/ButtonLogin';
import { ButtonRegister } from '../../components/ButtonRegister';

export function Select() {
    return (
        <Background>
          
            <View style={styles.container}>
                <View style={styles.viewContent}>
                    <Image source={IconProject} resizeMode="stretch" style={styles.image} />
                    <View style={styles.content}>
                        <Text style={styles.firstName}>Arti</Text>
                        <Text style={styles.lastName}>Go!</Text>
                    </View>
                </View>

                <View>                   
                    <ButtonRegister name="Inscrever-se" />
                    <Text>  </Text>
                    <ButtonLogin name="Entrar" />
                </View>
            </View>
    
        </ Background>
      );
}[]