// @ts-nocheck
import React, {useState} from 'react';
import {TouchableOpacity, FlatList, View, TextInput, Text, ScrollView} from 'react-native';

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

export function EditProfileStudent() {

    const [city, setCity] = useState([]);
    const [course, setCourse] = useState([]);

    const data = [
        {
            id: 1,
            name: 'teste'
        },
        {
            id: 2,
            name: 'teste'
        },
        {
            id: 3,
            name: 'teste'
        },
        {
            id: 4,
            name: 'teste'
        },
        {
            id: 5,
            name: 'teste'
        }
    ]

    function handleCitySelect(item) {
        setCity(item);
    }

    function handleCourseSelect(item) {
        setCourse(item);
    }

    function handleUserTypeSelect() {

    }

    const {primary, secondary} = theme.colorFilter;

    return (
        <Background>
            <ScrollView>
                <View style={themes.container}>
                    <AvatarEdit urlImage={'https://github.com/neom200.png'}/>

                    <View style={themes.content}>
                        <View style={themes.contentView}>
                            <TextInput placeholder="Nome Completo" style={themes.contentInput} />
                        </View>
                        <DropdownUserType placeholder="Eu sou?" onSelect={handleUserTypeSelect} />
                        <DropdownCity onSelect={handleCitySelect}/>
                        <DropdownCourse onSelect={handleCourseSelect}/>
                    </View>

                    <EditField placeholder="Areas de interesse" items={data} theme="interesse"/>

                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <View style={themes.listContainer}>
                                <Text style={themes.text}>{item.name}</Text>
                                <View style={themes.iconContent}>
                                    <Feather name={"edit-2"} size={20} style={{marginRight: 10}} />
                                    <Feather name={"trash-2"} size={20} />
                                </View>
                            </View>
                        )}
                    />

                    <View style={themes.saveButtonContainer}>
                        <RectButton style={themes.saveButton}>
                            <Text style={themes.saveButtonContent}>Salvar</Text>
                        </RectButton>
                    </View>
                </View>
            </ScrollView>
        </Background>
    )
}
