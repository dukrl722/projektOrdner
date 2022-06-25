// @ts-nocheck
import React, {useState} from 'react';
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

type Props = RectButtonProps & {}

export function EditProfileProfessor({...rest}: Props) {

    const [city, setCity] = useState([]);
    const [course, setCourse] = useState([]);

    const interessante = [
        {
            id: 1,
            name: 'Visão computacional'
        },
        {
            id: 2,
            name: 'Crypto E-commerce'
        },
        {
            id: 3,
            name: 'Cyber Segurança em APIs'
        },
        {
            id: 4,
            name: 'Advaita Vedanta'
        },
        {
            id: 5,
            name: 'Neo-Confuscionismo'
        }
    ]

    const projetinhos = [
        {
            id: 1,
            name: 'Deep Learning na transliteração de voz'
        },
        {
            id: 2,
            name: 'Gestaõ de DevOps à luz da ética aristotélica'
        },
        {
            id: 3,
            name: 'A influência neoplatônica em Schopenhauer'
        },
        {
            id: 4,
            name: 'Esquizofrenia e sua relação com o livre-mercado'
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

    return (
        <Background>
            <ScrollView>
                <View style={themes.container}>
                    <AvatarEdit urlImage='https://github.com/dukrl722.png'/>

                    <View style={themes.content}>
                        <View style={themes.contentView}>
                            <TextInput placeholder="Nome Completo" style={themes.contentInput} />
                        </View>
                        <DropdownUserType placeholder="Eu sou?" onSelect={handleUserTypeSelect} />
                        <DropdownCity onSelect={handleCitySelect}/>
                        <DropdownCourse onSelect={handleCourseSelect}/>
                    </View>

                    <EditField placeholder="Áreas trabalhadas" items={interessante} theme="interesse"/>

                    <FlatList
                        data={interessante}
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

                    <EditField placeholder="Projetos" items={projetinhos} theme="projeto"/>

                    <FlatList
                        data={projetinhos}
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
