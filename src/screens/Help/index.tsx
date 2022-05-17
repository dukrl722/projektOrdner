import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import IconProject from '../../assets/icon.png';
import FilterPhoto from '../../assets/filter.png';
import OpenFilterPhoto from '../../assets/openfilter.png';
import {Background} from '../../components/Background';

export function Help() {

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.viewContent}>
                    <Image source={IconProject} resizeMode="stretch" style={styles.logo}/>
                    <Text style={styles.generaltext}>
                        O ArtiGo! facilita a exposição e encontro de informações sobre docentes.
                    </Text>
                    <Text style={styles.generaltext}>
                        Dessa forma fica mais simples o processo de achar o orientador mais indicado para seu trabalho acadêmico-científico.
                    </Text>
                </View>
                <Text style={styles.lastName}>
                    Basta clicar em "Filtros"
                </Text>
                <Image source={FilterPhoto} style={styles.imageButton}/>
                <Text style={styles.lastName}>
                    Informar os campos desejados
                </Text>
                <Image source={OpenFilterPhoto} resizeMode="stretch" style={styles.imageFilter}/>
                <Text style={styles.lastName}>
                    E pronto, o ArtiGo! fará a boa por você!
                </Text>
            </View>
        </ Background>
    );
}
