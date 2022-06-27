
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

import { HeaderProfile } from '../../components/HeaderProfile';
import { Background } from '../../components/Background';
import { BodyStudentProfile } from '../../components/BodyStudentProfile';
import UserHelper from "../../helpers/user";

import { useNavigation } from '@react-navigation/native';
import { ButtonLogout } from '../../components/ButtonLogout';

export type User = {
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

    if( !user ) return <></>;

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <HeaderProfile
                        name= {user.name}
                        campus={
                            (user.course || user.city) ?
                                user.course +" - " + user.city
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
