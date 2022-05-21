//@ts-nocheck
import React from 'react';
import { View, Image, Text } from 'react-native';

import {useNavigation} from "@react-navigation/native";

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { Background } from '../../components/Background';
import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';
import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";

import { Auth } from '@react-native-firebase/auth';

export function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.viewContent}>
                <Image source={IconProject} resizeMode="stretch" style={styles.image} />
            </View>
            <View>
                <View>
                    <InputRa placeholder="Registro do Aluno" />
                    <InputPassword confirmPassword={false} placeholder="Senha" />
                </View>
                {/* <ButtonLoginSquare name="Entrar" onPress={handleAccess} /> */}
            </View>
            <Text onPress={() => navigation.navigate('SignUp')} >Registrar-se?</Text>
        </View>
    );
}
