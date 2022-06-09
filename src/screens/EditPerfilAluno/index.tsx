import React from 'react';
import {TouchableOpacity, FlatList, View} from 'react-native';

import {ButtonSave} from '../../components/ButtonSave/index';
import {EditInput} from '../../components/EditInput/index';
import {AvatarEdit} from '../../components/AvatarEdit/index';
// import {EditButton} from '../EditButton/index';
import {EditField} from '../../components/EditField';
import { AreaInteresse } from '../../components/AreaInteresse';
// import {RectButtonProps} from "react-native-gesture-handler";

import {themes} from './styles';
import {theme} from "../../global/styles/theme";
import { Background } from '../../components/Background';

export function EditPerfilAluno() {

    const data = [
        {'key':'Matematica'},
        {'key':'Desenvolvimento Web'},
        {'key':'Vadiar'},
        {'key': 'Dormir'},
        {'key': 'Comer'}
    ]

    const {primary, secondary} = theme.colorFilter;

    return (
        <Background>
            <View style={themes.container}>
                        <AvatarEdit urlImage={'https://github.com/neom200.png'}/>

                        <EditInput placeholder="Nome completo"/>
                        <EditInput placeholder="Aluno"/>
                        <EditInput placeholder="Campus"/>
                        <EditInput placeholder="Curso"/>
                        <EditField placeholder="Areas de interesse" items={[]} tema="interesse"/>

                        <FlatList
                            style={themes.list}
                            data={data}
                            renderItem={({item}) => <AreaInteresse dado={item['key']}/>}
                        />

                        <TouchableOpacity onPress={() => {
                            alert("DADOS ALTERADOS COM SUCESSO")
                        }} style={{marginTop: 67}}>
                            <ButtonSave name="Salvar"/>
                        </TouchableOpacity>
            </View>
        </Background>  
    )
}
