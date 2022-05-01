import React from 'react';
import {View, Modal, Text} from 'react-native';

import { ButtonSave } from '../ButtonSave/index';
import {EditInput} from '../EditInput/index';
import {AvatarEdit} from '../AvatarEdit/index';
import {EditButton} from '../EditButton/index';
 
import {themes} from './styles';

interface Props {
    visibility: boolean,
}

export function EditPerfilAluno(props: Props) {

        return(
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={props.visibility}
                    style={themes.modal}
                >
                    <View>
                        <AvatarEdit />
                        <EditButton />
                    </View>

                    <EditInput placeholder="Nome completo"/>
                    <EditInput placeholder="Aluno"/>
                    <EditInput placeholder="Campus"/>
                    <EditInput placeholder="Curso"/>

                    <View>
                        <Text>Áreas de interesse</Text>
                        <EditButton />
                    </View>

                    <ButtonSave name="Salvar" />
                </Modal>
        )
}