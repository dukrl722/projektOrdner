//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { Background } from '../../components/Background';
import { BodyProfessorProfile } from '../../components/BodyProfessorProfile';
import { ButtonLogout } from '../../components/ButtonLogout';

import UserHelper from '../../helpers/user';

import firestore from '@react-native-firebase/firestore';

interface User {
    avatar: string,
    name: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string] | [], //corrigir pra array de objeto
    projects: [string] | [], //corrigir pra array de objeto
    descr: string
}

interface props {
    userId: String
}

export function ProfessorProfile({ userId }: props) {

    const [ user, setUser ] = useState<User>();

    async function getUserData() {
        UserHelper.get(userId).then((data) => {
            setUser(data);
        });
    }

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        const subscriber = firestore()
            .collection('user')
            .doc(userId)
            .onSnapshot( documentSnapshot => {
                setUser({ ...documentSnapshot.data(), id: documentSnapshot.id })
            });

        return () => subscriber();
      }, [userId]);

    if( !user ) return <></>;

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <HeaderProfile
                        name= {user.name}
                        campus={
                            (user.city) ?
                                user.course +" - "+ user.city
                                : ''
                        }
                        image={user.avatar}
                        cloakProfessor={true}
                    />
                </View>
                <View style={styles.body}>
                    <BodyProfessorProfile
                        description={user.descr}
                        areaWork={user.workedAreas}
                        projectWork={user.projects}
                    />
                </View>
                <ButtonLogout />
            </View>
        </ Background>
    );
}
