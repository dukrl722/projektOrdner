import React from 'react';
import {View, Modal, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import {ButtonSave} from '../ButtonSave/index';
import {EditInput} from '../EditInput/index';
import {AvatarEdit} from '../AvatarEdit/index';
import {FieldAdder} from '../FieldAdder/index';
import {EditField} from '../EditField/index';
import {DropdownCity} from "../DropdownCity";
import {DropdownCourse} from "../DropdownCourse";

import {LinearGradient} from "expo-linear-gradient";
import {RectButtonProps} from "react-native-gesture-handler";


import {themes} from './styles';

type Props = RectButtonProps & {}

export function EditPerfilProfessor({...rest}: Props) {

    return (
        <KeyboardAvoidingView style={themes.centered}>
            <LinearGradient colors={["#f4f4f4", "#FDFDFD"]}>
                <KeyboardAvoidingView style={themes.modal}>
                    <AvatarEdit urlImage='https://github.com/dukrl722.png'/>

                    <EditInput placeholder="Nome completo"/>
                    <DropdownCity/>
                    <DropdownCourse/>
                    <EditField placeholder="Descricão dos trabalhos"/>

                    <FieldAdder titulo="Áreas de interesse"/>
                    <FieldAdder titulo="Projetos"/>

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
