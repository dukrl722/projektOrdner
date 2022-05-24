import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import {ButtonSave} from '../ButtonSave/index';
import {EditInput} from '../EditInput/index';
import {AvatarEdit} from '../AvatarEdit/index';
import {EditButton} from '../EditButton/index';
import {EditField} from '../EditField/index';
import {LinearGradient} from "expo-linear-gradient";
import {RectButtonProps} from "react-native-gesture-handler";

import {themes} from './styles';
import {theme} from "../../global/styles/theme";

export function EditPerfilAluno() {

    const {primary, secondary} = theme.colorFilter;

    return (
        <KeyboardAvoidingView style={themes.centered}>
            <LinearGradient colors={[primary, secondary]}>
                <KeyboardAvoidingView style={themes.modal}>

                    <AvatarEdit urlImage={''}/>

                    <EditInput placeholder="Nome completo"/>
                    <EditInput placeholder="Campus"/>
                    <EditInput placeholder="Curso"/>

                    <EditField placeholder="Areas de interesse"/>

                    <TouchableOpacity onPress={() => {
                        alert("DADOS ALTERADOS COM SUCESSO")
                    }}>
                        <ButtonSave name="Salvar"/>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
