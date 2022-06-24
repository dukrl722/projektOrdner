//@ts-nocheck
import React, { useState } from 'react';
import { View, Image, Alert, Button } from 'react-native';

import { styles } from './styles';

import IconProject from '../../assets/icon.png';

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
                console.log(userType);

                var firstUsername = String(user).substring(0,String(user).indexOf('@'));

                firestore()
                    .collection('user')
                    .add({
                        id: userId,
                        type: userType,
                        name: firstUsername,
                        campus: '',
                        descr: 'Olá sou novo(a) aqui!',
                        avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc342894-c205-45ce-9efa-d68b708002f2/d5lgwac-53dd4c40-c93c-46b8-82bd-76c0bbde97c7.png/v1/fill/w_900,h_685,q_80,strp/naruto_facebook_avatar_by_citrusdrawings_d5lgwac-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg1IiwicGF0aCI6IlwvZlwvYmMzNDI4OTQtYzIwNS00NWNlLTllZmEtZDY4YjcwODAwMmYyXC9kNWxnd2FjLTUzZGQ0YzQwLWM5M2MtNDZiOC04MmJkLTc2YzBiYmRlOTdjNy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tkfEb6-mr8Td1M06gi4xUvsUAveLdtisPW3rCrYymVg'

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
