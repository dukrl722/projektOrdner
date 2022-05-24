//@ts-nocheck
import React, { useState } from 'react';
import { View, Text, Image, Alert, Button } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { Background } from '../../components/Background';

import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';

import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function SignUp() {

    const [ user, setUser ] = useState();
    const [ password, setPassword ] = useState();

    const navigation = useNavigation();

    function handleNewAccount() {
        auth()
            .createUserWithEmailAndPassword(user, password)
            .then((data) => {
                const { uid:userId } = data.user;

                firestore()
                    .collection('user')
                    .add({
                        id: userId
                    });
                
                navigation.navigate('Home');
            })
            .catch((err) => {
                console.log(err);
                //TODO - tratar o erro conforme a chave de erro que retorna do firebase
                // exemplo: if (err = 'auth/invalid-email') { Alert.alert('Endereço de email inválido!'); }
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
                        secureTextEntry={true}
                        confirmPassword={false}
                        placeholder="Senha"
                        onChangeText={(value) => setPassword(value)}
                    />
                    {/* <InputPassword
                        confirmPassword={true}
                        placeholder="Confirmar Senha"
                    /> */}
                </View>
                <Button
                    title='Inscrever-se'
                    disabled={!user || !password}
                    onPress={() => handleNewAccount()}
                />
            </View>
        </View>
    );
};
