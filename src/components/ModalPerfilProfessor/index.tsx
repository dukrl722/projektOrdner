import React from 'react';
import {FlatList, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import {ButtonSave} from '../ButtonSave/index';
import {EditInput} from '../EditInput/index';
import {AvatarEdit} from '../AvatarEdit/index';
import { AreaInteresse } from '../AreaInteresse';
import {EditField} from '../EditField/index';
import {DropdownCity} from "../DropdownCity";
import {DropdownCourse} from "../DropdownCourse";

import {LinearGradient} from "expo-linear-gradient";
import {RectButtonProps} from "react-native-gesture-handler";


import {themes} from './styles';

type Props = RectButtonProps & {}

export function EditPerfilProfessor({...rest}: Props) {

    const interessante = [
        {'key':'Visão Computacional'},
        {'key':'Crypto E-commerce'},
        {'key':'Cyber Segurança em APIs'},
        {'key':'Advaita Vedanta'},
        {'key':'Neo-Confuscionismo'}
    ]

    const projetinhos = [
        {'key':'Deep Learning na translitaração de voz'},
        {'key':'Gestaõ de DevOps à luz da ética aristotélica'},
        {'key':'A influência neoplatônica em Schopenhauer'},
        {'key':'Esquizofrenia e sua relação com o livre-mercado'},
    ]

    return (
        <KeyboardAvoidingView style={themes.centered}>
            <LinearGradient colors={["#f4f4f4", "#FDFDFD"]}>
                <KeyboardAvoidingView style={themes.modal}>
                    <AvatarEdit urlImage='https://github.com/dukrl722.png'/>

                    <EditInput placeholder="Nome completo"/>
                    <EditInput placeholder="Professor"/>
                    <DropdownCity/>
                    <DropdownCourse/>
                    <EditField placeholder="Descricão dos trabalhos"/>

                    <EditField placeholder="Áreas de interesse"/>
                    <FlatList
                        style={themes.list}
                        data={interessante}
                        renderItem={({item}) => <AreaInteresse dado={item['key']}/>}
                    />

                    <EditField placeholder="Projetos"/>
                    <FlatList
                        style={themes.list}
                        data={projetinhos}
                        renderItem={({item}) => <AreaInteresse dado={item['key']}/>}
                    />

                    <TouchableOpacity onPress={() => {
                        alert("Perfil professor atualizado")
                    }}>
                        <ButtonSave name="Salvar"/>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
