import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';
import PersonIcon from '../../assets/personIcon.svg';

import { Background } from '../../components/Background';

import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';

import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";
import { useNavigation } from '@react-navigation/native';

export function SignUp() {

    const navigation = useNavigation();

    function handlePress() {
        //@ts-ignore
        navigation.navigate('Details');
    }

    return (
        <Background>

            <View style={styles.container}>
                <View style={styles.viewContent}>
                    <Image source={IconProject} resizeMode="stretch" style={styles.image} />
                </View>

                <View>
                    <View>
                        <InputRa placeholder="Registro do Aluno" />
                        <InputPassword confirmPassword={false} placeholder="Senha" />
                        <InputPassword confirmPassword={true} placeholder="Confirmar Senha" />
                    </View>

                    <ButtonLoginSquare name="Inscreva-se" onPress={handlePress} />
                </View>
            </View>

        </ Background>
    );
};
