import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { RectButton } from "react-native-gesture-handler";

import { themes } from './styles';

import { Background } from '../../components/Background';
import { Profile } from "../../components/Profile";
import { EditPerfilProfessor } from '../EditPerfilProfessor/index';
import { EditPerfilAluno } from '../EditPerfilAluno/index';

import { BottomSheet, BottomSheetRef } from 'react-native-sheet';
import { useNavigation } from '@react-navigation/native';

export function Atalhos() {

    const bottomSheet = useRef<BottomSheetRef>(null);
    const bottomSheet2 = useRef<BottomSheetRef>(null);
    const bottomSheet3 = useRef<BottomSheetRef>(null);
    const bottomSheet4 = useRef<BottomSheetRef>(null);
    const bottomSheet5 = useRef<BottomSheetRef>(null);


    const navigation = useNavigation();
    return (
        <Background>
            <View style={themes.container}>
                <View style={themes.header}>
                    <Profile />
                </View>
                <View>
                    <BottomSheet height={655} ref={bottomSheet2}>
                        <EditPerfilProfessor></EditPerfilProfessor>
                    </BottomSheet>
                    <TouchableOpacity onPress={() => bottomSheet2.current?.show()}>
                        <RectButton style={themes.buttonContainer}>
                            <Text style={themes.textContainer}>Modal Professor</Text>
                        </RectButton>
                    </TouchableOpacity>
                </View>
                <View>
                    <BottomSheet height={655} ref={bottomSheet3}>
                        <EditPerfilAluno></EditPerfilAluno>
                    </BottomSheet>
                    <TouchableOpacity onPress={() => bottomSheet3.current?.show()}>
                        <RectButton style={themes.buttonContainer}>
                            <Text style={themes.textContainer}>Modal Aluno</Text>
                        </RectButton>
                    </TouchableOpacity>
                </View>
                <View>
                    <BottomSheet height={655} ref={bottomSheet4}>
                    </BottomSheet>
                    <TouchableOpacity onPress={() => navigation.navigate('PerfilAluno')}>
                        <RectButton style={themes.buttonContainer}>
                            <Text style={themes.textContainer}>Perfil Aluno</Text>
                        </RectButton>
                    </TouchableOpacity>
                </View>
                <View>
                    <BottomSheet height={655} ref={bottomSheet5}>
                    </BottomSheet>
                    <TouchableOpacity onPress={() => navigation.navigate('PerfilProfessor')}>
                        <RectButton style={themes.buttonContainer}>
                            <Text style={themes.textContainer}>Perfil Professor</Text>
                        </RectButton>
                    </TouchableOpacity>
                </View>
                <View>
                    <BottomSheet height={655} ref={bottomSheet5}>
                    </BottomSheet>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <RectButton style={themes.buttonContainer}>
                            <Text style={themes.textContainer}>Login</Text>
                        </RectButton>
                    </TouchableOpacity>
                </View>
                <View>
                    <BottomSheet height={655} ref={bottomSheet5}>
                    </BottomSheet>
                    <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                        <RectButton style={themes.buttonContainer}>
                            <Text style={themes.textContainer}>Help</Text>
                        </RectButton>
                    </TouchableOpacity>
                </View>


            </View>
        </ Background>
    );
}
