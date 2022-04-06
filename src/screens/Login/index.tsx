import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { Background } from '../../components/Background';

import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';

import { Input } from '../../components/Input';

export function Login() {
    return (
        <Background>
          
            <View style={styles.container}>
                <View style={styles.viewContent}>
                    <Image source={IconProject} resizeMode="stretch" style={styles.image} />
                </View>

                <View>                   
                    <Input placeholder="Registro do Aluno" />
                    <Text>  </Text>
                    <Input placeholder="Senha" />
                    <Text>  </Text>
                    <ButtonLoginSquare name="Entrar" />
                </View>
            </View>
    
        </ Background>
      );
}[]