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
    const [avatar, setAvatar] = useState<String>(null);
    const [name, setName] = useState<String>(null);
    const [type, setType] = useState<String>(null);
    const [city, setCity] = useState<String>(null);
    const [course, setCourse] = useState<String>(null);
    const [interest, setInterest] = useState(null);

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

        let userToAdd = {...user};
        delete userToAdd.id;

        if (!!avatar) userToAdd.avatar = avatar;

        if (!!name) userToAdd.name = name;

        if (!!type) userToAdd.type = type;

        if (!!city) userToAdd.city = city;

        if (!!course) userToAdd.course = course;

        firestore()
            .collection('user')
            .doc(user.id)
            .set(
                userToAdd
            )
            .then(() => {
                navigation.navigate('Profile');
            }).catch(err => console.log(err))
        ;
    }

    function handleCitySelect(item) {
        setCity(item);
    }

    function handleCourseSelect(item) {
        setCourse(item);
    }

    function handleUserTypeSelect(item) {
        setType(item);
    }

    function returnUrlImage(item) {
        setAvatar(item)
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    const {primary, secondary} = theme.colorFilter;

    if (!user) {
        return <AppLoading />;
    }

    function handleWorkAreaDelete(newItem:string) {        
        let newUser = { ...user };

        newUser.workedAreas = newUser.workedAreas.filter(wa => wa != newItem);

        firestore()
            .collection('user')
            .doc(user.id)
            .set(newUser)
            .then(() => {
                getCurrentUser();
                Alert.alert('Registro exclu??do com sucesso!');
            });
    }

    return (
        <Background>
            <ScrollView>
                <View style={themes.container}>
                    <AvatarEdit urlImage={user.avatar} handle={returnUrlImage}/>

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

                    <EditField placeholder="Areas de interesse" onClose={() => getCurrentUser()} />

                    {
                        user.workedAreas.map(
                            (item, index) => (
                                <View style={themes.listContainer} key={index.toString()}>
                                    <Text style={themes.text}>{item}</Text>
                                    <View style={themes.iconContent}>
                                        <Feather name={"trash-2"} size={20} onPress={() => handleWorkAreaDelete(item)} />
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
