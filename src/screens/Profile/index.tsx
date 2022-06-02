import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ProfessorProfile } from '../ProfessorProfile';
import { StudentProfile } from '../StudentProfile';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import UserHelper from '../../helpers/user';

export function Profile() {

    const [ user, setUser ] = useState<any>();

    const navigation = useNavigation();

    async function loadUser(){
        const userDoc = await UserHelper.getCurrent();
        setUser(userDoc);
    };

    function onSignOut(){
        auth().signOut()
            .then(() => {
                //@ts-ignore
                navigation.navigate('Login');
            });
    }

    useEffect(() => {
        loadUser();

        return () => {};
    }, []);

    return !user ? null : (
        <>
            {user.type == 'professor' ? (
                <ProfessorProfile userId={user.id} />
            ) : (
                <StudentProfile userId={user.id} />
            )}
            <TouchableOpacity onPress={() => onSignOut()}>
                <Text>Sair?</Text>
            </TouchableOpacity>
        </>
    );
}