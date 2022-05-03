import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import { ButtonSave } from '../ButtonSave/index';
import {EditInput} from '../EditInput/index';
import {AvatarEdit} from '../AvatarEdit/index';
import {EditButton} from '../EditButton/index';
import {EditField} from '../EditField/index';
import { LinearGradient } from "expo-linear-gradient";
import { RectButtonProps } from "react-native-gesture-handler";

import {themes} from './styles';

type Props = RectButtonProps & {
}

export function EditPerfilAluno({ ...rest }: Props) {

        return(
            <KeyboardAvoidingView style={themes.centered}>
                <LinearGradient colors={["#f4f4f4", "#FDFDFD"]}>
                    <KeyboardAvoidingView style={themes.modal}>

                        <AvatarEdit urlImage="https://github.com/neom200.png"/>

                        <EditInput placeholder="Nome completo"/>
                        <EditInput placeholder="Aluno"/>
                        <EditInput placeholder="Campus"/>
                        <EditInput placeholder="Curso"/>

                        <EditField titulo="Areas de interesse"/>

                        <TouchableOpacity onPress={() => { alert("DADOS ALTERADOS COM SUCESSO")}}>
                            <ButtonSave name="Salvar" />
                        </TouchableOpacity>
                        
                    </KeyboardAvoidingView>
                </LinearGradient>
            </KeyboardAvoidingView>
        )
}