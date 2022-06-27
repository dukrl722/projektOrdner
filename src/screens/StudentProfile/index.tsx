//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { Background } from '../../components/Background';
import { BodyStudentProfile } from '../../components/BodyStudentProfile';
import UserHelper from "../../helpers/user";

import { ButtonLogout } from '../../components/ButtonLogout';

import firestore from '@react-native-firebase/firestore';

export type User = {
    id: string,
    avatar: string,
    name: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string] | [],
    projects: [string],
    descr: string
}

interface Props {
    userId: string
}


export function StudentProfile({ userId }: Props) {
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
                            (user.course || user.city) ?
                                user.course +" - "+ user.campus +" - "+ user.city
                                : ''
                        }
                        image={user.avatar}
                        cloakProfessor={false}
                    />
                </View>
                <View style={styles.body}>
                    <BodyStudentProfile
                    //@ts-ignore
                        interests={user.workedAreas}
                    ></BodyStudentProfile>
                </View>
                <ButtonLogout />
            </View>
        </ Background>
    );
}
