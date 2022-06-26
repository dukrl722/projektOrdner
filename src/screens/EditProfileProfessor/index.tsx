// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {FlatList, View, ScrollView, TouchableOpacity, TextInput, Text} from 'react-native';

import {ButtonSave} from '../../components/ButtonSave/index';
import {EditInput} from '../../components/EditInput/index';
import {AvatarEdit} from '../../components/AvatarEdit/index';
import {EditField} from '../../components/EditField/index';
import {DropdownCity} from "../../components/DropdownCity";
import {DropdownCourse} from "../../components/DropdownCourse";
import { Background } from '../../components/Background';

import {LinearGradient} from "expo-linear-gradient";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";

import {themes} from './styles';
import {DropdownUserType} from "../../components/DropdownUserType";
import {Feather} from "@expo/vector-icons";
import User from "../../helpers/user";
import UserHelper from "../../helpers/user";
import {theme} from "../../global/styles/theme";
import AppLoading from "expo-app-loading";
import firestore from "@react-native-firebase/firestore";
import {useNavigation} from "@react-navigation/native";

type Props = RectButtonProps & {}

export function EditProfileProfessor({...rest}: Props) {

    const [user, setUser] = useState<User>();
    const [name, setName] = useState<String>();
    const [type, setType] = useState<String>();
    const [city, setCity] = useState<String>([]);
    const [course, setCourse] = useState<String>([]);
    const [worked, setWorked] = useState([]);

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
            .collection('Users')
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
                                value={user.name}
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

                    <EditField placeholder="Áreas trabalhadas" items={user.workedAreas} theme="interesse"/>

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

                    <EditField placeholder="Projetos" items={user.projects} theme="projeto"/>

                    {
                        user.projects.map(
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
