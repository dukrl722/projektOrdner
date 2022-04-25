import React, { useState } from 'react';
import { View, Text, Image, Alert, Button } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';
import PersonIcon from '../../assets/personIcon.svg';

import { Background } from '../../components/Background';

import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';

import { InputRa } from '../../components/InputRa';
import { InputPassword } from "../../components/InputPassword";

import auth from '@react-native-firebase/auth';

export function SignUp() {

    const [ user, setUser ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    async function handleNewAccount() {
        auth()
        .createUserWithEmailAndPassword(user, password)
        .then(() => console.log('sucesso'))
        .catch((err) => console.log(err));
    }

    return (
        <Background>

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
                        {/* <InputPassword
                            confirmPassword={true}
                            placeholder="Confirmar Senha"
                        /> */}
                    </View>
                    <Button title='Inscreva-se' onPress={() => handleNewAccount()} />
                    {/* <ButtonLoginSquare name="Inscreva-se" onPress={() => console.log('onPress')}/> */}
                </View>
            </View>

        </ Background>
    );
}
