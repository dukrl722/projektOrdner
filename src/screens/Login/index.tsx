//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button, Alert } from 'react-native';

import {useNavigation} from "@react-navigation/native";

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';
import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";
import UserHelper from '../../helpers/user';

import auth from '@react-native-firebase/auth';


export function Login() {
    const [ user, setUser ] = useState();
    const [ password, setPassword ] = useState();

    const navigation = useNavigation();

    function handleAccess() {
        auth()
            .signInWithEmailAndPassword(user, password)
            .then(() => navigation.navigate('Home'))
            .catch(() => Alert.alert('Nome ou senha inválido!'));      
    };

    async function loadUser() {
        const currentUser = await UserHelper.getCurrent();
        if (!!currentUser) navigation.navigate('Home');
    }

    useEffect(() => {
        loadUser()
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.viewContent}>
                <Image source={IconProject} resizeMode="stretch" style={styles.image} />
            </View>
            <View>
                <View>
                    <InputRa placeholder="Usuário" onChangeText={(e) => setUser(e)}/>
                    <InputPassword secureTextEntry confirmPassword={false} placeholder="Senha" onChangeText={(e) => setPassword(e)} />
                </View>
                <ButtonLoginSquare disabled={!user || !password} name="Entrar" onPress={handleAccess} />
                <View style={styles.registerContainer}>
                    <Text style={{ textAlign: 'center' }} onPress={() => navigation.navigate('SignUp')}>Registrar-se</Text>
                </View>
            </View>
        </View>
    );
}
