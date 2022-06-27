// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, FlatList, View, TextInput, Text, ScrollView} from 'react-native';
import AppLoading from 'expo-app-loading';
import firestore from '@react-native-firebase/firestore';

import {ButtonSave} from '../../components/ButtonSave/index';
import {EditInput} from '../../components/EditInput/index';
import {AvatarEdit} from '../../components/AvatarEdit/index';

import {EditField} from '../../components/EditField';

import {themes} from '../EditProfileStudent/styles';
import {theme} from "../../global/styles/theme";
import { Background } from '../../components/Background';
import {DropdownCity} from "../../components/DropdownCity";
import {DropdownCourse} from "../../components/DropdownCourse";
import {DropdownUserType} from "../../components/DropdownUserType";
import {Feather} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";
import UserHelper from "../../helpers/user";
import User from "../../helpers/user";
import {useNavigation} from "@react-navigation/native";
import {DefaultInput} from "../../components/DefaultInput";

export function EditProfileStudent() {

    const [user, setUser] = useState<User>();
    const [name, setName] = useState<String>();
    const [type, setType] = useState<String>();
    const [city, setCity] = useState<String>([]);
    const [course, setCourse] = useState<String>([]);
    const [interest, setInterest] = useState([]);

    const navigation = useNavigation();

    async function getCurrentUser() {
        UserHelper.getCurrent().then(
            (data) => {
                setUser(data);
            }
        ).catch(err => {
            console.log(err)
        })
    }

    function handleSaveDataUser() {
        firestore()
            .collection('user')
            .doc(user.id)
            .set({
                name: name,
                type: type,
                city: city,
                course: course
            })
            .then(() => {
                navigation.navigate('Profile');
            });
    }

    function handleCitySelect(item) {
        setCity(item);
    }

    function handleCourseSelect(item) {
        setCourse(item);
    }

    function handleUserTypeSelect() {

    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    const {primary, secondary} = theme.colorFilter;

    if (!user) {
        return <AppLoading />;
    }

    return (
        <Background>
            <ScrollView>
                <View style={themes.container}>
                    <AvatarEdit urlImage={user.avatar}/>

                    <View style={themes.content}>
                        <View style={themes.contentView}>
                            <TextInput
                                placeholder="Nome Completo"
                                style={themes.contentInput}
                                defaultValue={user.name}
                                onChangeText={(value) => {
                                    setName(value);
                                }}
                            />
                        </View>
                        <DropdownUserType
                            placeholder="Eu sou?"
                            onSelect={handleUserTypeSelect}
                            defaultButtonText={
                                user.type == 'student'
                                    ? 'Aluno'
                                    : 'Professor'
                            }
                        />
                        <DropdownCity
                            onSelect={handleCitySelect}
                            value={user.city}
                        />
                        <DropdownCourse
                            onSelect={handleCourseSelect}
                            value={user.course}
                        />
                    </View>

                    <EditField placeholder="Areas de interesse" items={user.workedAreas} theme="interesse"/>

                    {
                        user.workedAreas.map(
                            (item, index) => (
                                <View style={themes.listContainer} key={index.toString()}>
                                    <Text style={themes.text}>{item.name}</Text>
                                    <View style={themes.iconContent}>
                                        <Feather name={"edit-2"} size={20} style={{marginRight: 10}} />
                                        <Feather name={"trash-2"} size={20} />
                                    </View>
                                </View>
                            )
                        )
                    }

                    <View style={themes.saveButtonContainer}>
                        <RectButton style={themes.saveButton} onPress={handleSaveDataUser}>
                            <Text style={themes.saveButtonContent}>Salvar</Text>
                        </RectButton>
                    </View>
                </View>
            </ScrollView>
        </Background>
    )
}
