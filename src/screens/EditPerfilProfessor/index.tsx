import React from 'react';
import {FlatList, View, ScrollView, TouchableOpacity} from 'react-native';

import {ButtonSave} from '../../components/ButtonSave/index';
import {EditInput} from '../../components/EditInput/index';
import {AvatarEdit} from '../../components/AvatarEdit/index';
import { AreaInteresse } from '../../components/AreaInteresse';
import {EditField} from '../../components/EditField/index';
import {DropdownCity} from "../../components/DropdownCity";
import {DropdownCourse} from "../../components/DropdownCourse";
import { Background } from '../../components/Background';

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
        {'key':'Deep Learning na transliteração de voz'},
        {'key':'Gestaõ de DevOps à luz da ética aristotélica'},
        {'key':'A influência neoplatônica em Schopenhauer'},
        {'key':'Esquizofrenia e sua relação com o livre-mercado'},
    ]

    const trabaiador = [
        {'key': 'Bem-vindo ao Minecraft, ai meu amigo'},
        {'key': 'Na jornada deste game ficará surpreendido'},
        {'key': 'Sinta liberdade para poder criar'},
        {'key': 'Apenas qualquer coisa que poder imaginar'}
    ]

    return (
        <Background>
            <View style={themes.container}>
                <AvatarEdit urlImage='https://github.com/dukrl722.png'/>

                <EditInput placeholder="Nome completo"/>
                <EditInput placeholder="Professor"/>
                <DropdownCity/>
                <DropdownCourse/>
                <EditField placeholder="Descricão dos trabalhos" items={trabaiador} tema="trabalho"/>

                <EditField placeholder="Áreas de interesse" items={interessante} tema="interesse"/>
                <EditField placeholder="Projetos" items={projetinhos} tema="projeto"/>

                <TouchableOpacity onPress={() => {
                    alert("Perfil professor atualizado")
                }} style={themes.button}>
                    <ButtonSave name="Salvar"/>
                </TouchableOpacity>
            </View>
        </Background>
    )
}