//@ts-nocheck
import React, { useState } from 'react';
import { View, Image, Alert, Button } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

export function SignUp() {

    const [ user, setUser ] = useState();
    const [ password, setPassword ] = useState();

    const navigation = useNavigation();

    async function handleNewAccount() {

        return auth()
            .createUserWithEmailAndPassword(user, password)
            .then(() => navigation.navigate('Home'))
            .catch((err) => {
                console.log(err);
                Alert.alert('Ocorreu um erro, tente novamente!');
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewContent}>
                <Image source={IconProject} resizeMode="stretch" style={styles.image} />
            </View>

            <View>
                <View>
                    <InputRa
                        placeholder="Registro do Aluno"
                        value={user}
                        onChangeText={(value) => setUser(value)}
                    />
                    <InputPassword
                        confirmPassword={false}
                        placeholder="Senha"
                        onChangeText={(value) => setPassword(value)}
                    />
                    <InputPassword
                        confirmPassword={true}
                        placeholder="Confirmar Senha"
                    />
                </View>
                <Button
                    title='Inscreva-se'
                    disabled={!user || !password}
                    onPress={() => handleNewAccount()}
                />
            </View>
        </View>
    );
};
