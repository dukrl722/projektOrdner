//@ts-nocheck
import React, { useState } from 'react';
import { View, Image, Alert, Button } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

import { Background } from '../../components/Background';

import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';

import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";
import { useNavigation } from '@react-navigation/native';
import { DropdownUserType } from "../../components/DropdownUserType";

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function SignUp() {

    const [ user, setUser ] = useState();
    const [ password, setPassword ] = useState();
    const [ userType, setUserType ] = useState();

    const navigation = useNavigation();

    function handleNewAccount() {
        auth()
            .createUserWithEmailAndPassword(user, password)
            .then((data) => {
                const { uid:userId } = data.user;

                firestore()
                    .collection('user')
                    .add({
                        id: userId,
                        type: userType
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

    function handleUserTypeSelect(item) {
        setUserType(item);
        console.log(item);
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewContent}>
                <Image source={IconProject} resizeMode="stretch" style={styles.image} />
            </View>

            <View>
                <View>
                    <InputRa
                        placeholder="Insira seu email institucional"
                        value={user}
                        onChangeText={(value) => setUser(value)}
                    />
                    <InputPassword
                        secureTextEntry={true}
                        confirmPassword={false}
                        placeholder="Senha"
                        onChangeText={(value) => setPassword(value)}
                    />
                    <InputPassword
                        secureTextEntry={true}
                        confirmPassword={true}
                        placeholder="Confirmar Senha"
                    />
                     <DropdownUserType placeholder="Eu sou?" onSelect={handleUserTypeSelect} />
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
