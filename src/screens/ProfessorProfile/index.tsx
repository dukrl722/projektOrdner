//@ts-nocheck
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import IconProject from '../../assets/picapau.png';

import {HeaderProfile} from '../../components/HeaderProfile';
import {Background} from '../../components/Background';
import {BodyProfessorProfile} from '../../components/BodyProfessorProfile';

import UserHelper from '../../helpers/user';

interface User {
    avatar: string,
    name: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string],
    projects: [string],
    descr: string
}

interface props {
    userId: String
}

export function ProfessorProfile({ userId }: props) {

    const [ user, setUser ] = useState<User>();

    async function getUserData() {
        await UserHelper.get(userId).then((data) => {
            setUser(data);
        });
    }

    useEffect(() => {
        getUserData();
    }, []);

    if( !user ) return <></>;

    if (user.workedAreas === undefined) {
        user.workedAreas = [];
    }

    if (user.projects === undefined) {
        user.projects = [];
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <HeaderProfile
                        name= {user.name}
                        campus={
                            (user.city) ?
                                user.campus +" - "+ user.city
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
            </View>
        </ Background>
    );
}
