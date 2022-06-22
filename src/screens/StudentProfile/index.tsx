//@ts-nocheck
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import {HeaderProfile} from '../../components/HeaderProfile';
import {Background} from '../../components/Background';
import {BodyStudentProfile} from '../../components/BodyStudentProfile';

import UserHelper from "../../helpers/user";

export type User = {
    avatar: string,
    name: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string],
    projects: [string],
    descr: string
}

interface Props {
    userId: String
}


export function StudentProfile({ userId }: Props) {
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
                        interests={user.workedAreas}
                    ></BodyStudentProfile>
                </View>
            </View>
        </ Background>
    );
}
