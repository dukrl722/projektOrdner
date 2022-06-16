//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import { RectButton } from "react-native-gesture-handler";

import { themes } from './styles';

import { Background } from '../../components/Background';
import { Profile } from "../../components/Profile";
import { CardInfo } from "../../components/CardInfo";
import { FilterModal } from '../../components/FilterModal';
import { BottomSheet, BottomSheetRef } from 'react-native-sheet';

import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

export function Home() {

    const [data, setData] = useState([]);

    const getUsers = () => {
        var listUsers = []
        firestore()
        .collection('user')
        .limit(10)
        .get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach( doc => {
                const user = {
                    id: doc.data().id,
                    name: doc.data().name,
                    image: doc.data().avatar,
                    city: doc.data().campus,
                    description: doc.data().descr,
                }

                listUsers.push(user);
            })
            console.log(listUsers);
            setData(listUsers);
        }).catch((e) => {
            console.log('Erro, getUsers:' + e);
        });
        
    }

    useEffect(() => {
        getUsers();
    },[])

    const navigation = useNavigation();

    const bottomSheet = useRef<BottomSheetRef>(null);

    function onCardPress(userId) {
        navigation.navigate('Details', userId);
    }
   
    return (
        <View style={themes.container}>
            <View style={themes.header}>
                <Profile />
            </View>
            <View>
                <BottomSheet height={655} ref={bottomSheet}>
                    <FilterModal ></FilterModal>
                </BottomSheet>
                <TouchableOpacity onPress={() => bottomSheet.current?.show()}>
                    <RectButton style={themes.buttonContainer}>
                        <Text style={themes.textContainer}>Filtros</Text>
                    </RectButton>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardInfo data={item} onPress={() => onCardPress(item.id)} />
                )}
            />
        </View>
    );
}
