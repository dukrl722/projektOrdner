// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {View, ScrollView, TextInput, Text, Alert} from 'react-native';

import {AvatarEdit} from '../../components/AvatarEdit/index';
import {EditField} from '../../components/EditField/index';
import {DropdownCity} from "../../components/DropdownCity";
import {DropdownCourse} from "../../components/DropdownCourse";
import { Background } from '../../components/Background';

import {RectButton, RectButtonProps} from "react-native-gesture-handler";

import {themes} from './styles';
import {DropdownUserType} from "../../components/DropdownUserType";
import {Feather} from "@expo/vector-icons";
import UserHelper from "../../helpers/user";
import AppLoading from "expo-app-loading";
import firestore from "@react-native-firebase/firestore";
import {useNavigation} from "@react-navigation/native";

type Props = RectButtonProps & {}

export function EditProfileProfessor({...rest}: Props) {

    const [user, setUser] = useState<User>();
    const [avatar, setAvatar] = useState<String>(null);
    const [name, setName] = useState<String>(null);
    const [description, setDescription] = useState<String>(null);
    const [type, setType] = useState<String>(null);
    const [city, setCity] = useState<String>(null);
    const [course, setCourse] = useState<String>(null);
    const [worked, setWorked] = useState(null);

    const navigation = useNavigation();

    async function getCurrentUser() {
        UserHelper.getCurrent().then(
            (data) => {
                setUser(data);
                return;
            }
        ).catch(err => {
            console.log(err)
        })
    }

    async function handleSaveDataUser() {
        await getCurrentUser();

        let userToAdd = {...user};
        delete userToAdd.id;

        if (!!avatar) userToAdd.avatar = avatar;

        if (!!name) userToAdd.name = name;

        if (!!description) userToAdd.descr = description;

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

    function handleWorkAreaDelete(newItem:string) {
        
        let newUser = { ...user };

        newUser.workedAreas = newUser.workedAreas.filter(wa => wa != newItem);

        firestore()
            .collection('user')
            .doc(user.id)
            .set(newUser)
            .then(() => {
                getCurrentUser();
                Alert.alert('Registro excluído com sucesso!');
            });
    }

    function handleProjectDelete(newItem:string) {
        
        let newUser = { ...user };

        newUser.projects = newUser.projects.filter(project => project != newItem);

        firestore()
            .collection('user')
            .doc(user.id)
            .set(newUser)
            .then(() => {
                getCurrentUser();
                Alert.alert('Registro excluído com sucesso!');
            });
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    if (!user) {
        return <AppLoading />;
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
                        <View style={themes.contentViewTextArea}>
                            <TextInput
                                placeholder="Descrição"
                                style={themes.contentInput}
                                multiline={true}
                                numberOfLines={5}
                                defaultValue={user.descr}
                                onChangeText={(value) => {
                                    setDescription(value);
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
                            defaultButtonText={user.city}
                        />
                        <DropdownCourse
                            onSelect={handleCourseSelect}
                            defaultButtonText={user.course}
                        />
                    </View>

                    <EditField placeholder="Áreas trabalhadas" onClose={() => getCurrentUser()} />

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

                    <EditField placeholder="Projetos" isProject={true} onClose={() => getCurrentUser()} />

                    {
                        user.projects.map(
                            (item, index) => (
                                <View style={themes.listContainer} key={index.toString()}>
                                    <Text style={themes.text}>{item}</Text>
                                    <View style={themes.iconContent}>
                                        <Feather name={"trash-2"} size={20} onPress={() => handleProjectDelete(item)} />
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
