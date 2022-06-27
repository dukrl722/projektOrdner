//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { RectButton } from "react-native-gesture-handler";

import { themes } from './styles';

import { Profile } from "../../components/Profile";
import { CardInfo } from "../../components/CardInfo";
import { FilterModal } from '../../components/FilterModal';
import { BottomSheet, BottomSheetRef } from 'react-native-sheet';

import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import UserHelper from "../../helpers/user";

export function Home() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [userAuth, setUserAuth] = useState([]);

    const navigation = useNavigation();
    const bottomSheet = useRef<BottomSheetRef>(null);

    function isValidSearch( value ){
        if (typeof(value) != 'string' || value == '') {
            return false;
        }

        return true;
    }

    function getUsers() {
        let users = [];
        let query = firestore().collection('user');

        query = query.where('type', '==', 'professor');
        if (isValidSearch(search.city)) query = query.where('city', '==', search.city);
        if (isValidSearch(search.course)) query = query.where('course', '==', search.course);

        query.get().then(querySnapshot => {
            querySnapshot.docs.forEach( doc => {                        
                const user = { ...doc.data(), id: doc.id }

                let isKeyWordOption = true;
                let isNameOption = true;

                if(isValidSearch(search.keyWord)){
                    isKeyWordOption = user.description.toLowerCase().includes(search.keyWord.toLowerCase());
                } 
                if(isValidSearch(search.name)){
                    isNameOption = user.name.toLowerCase().includes(search.name.toLowerCase());
                } 

                if(isKeyWordOption && isNameOption){
                    users.push(user);
                }
            });

            setData(users);

        }).catch((e) => {
            console.log('Erro, getUsers: ' + e + 'Search = ' + search);
        });        
    }

    async function getUserData() {
        UserHelper.getCurrent()
            .then(result => setUserAuth(result))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getUserData();
    }, [userAuth])

    useEffect(() => {
        getUsers();
    },[search])

    return (
        <View style={themes.container}>
            <View style={themes.header}>
                <Profile data={userAuth.id}/>
            </View>
            <View>
                <BottomSheet height={655} ref={bottomSheet}>
                    <FilterModal event={(value) => setSearch(value)} ></FilterModal>
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
                bounces={true}
                renderItem={({ item }) => (
                    <CardInfo data={item} onPress={() => navigation.navigate('Details', { userId: item.id })} />
                )}
            />
        </View>
    );
}
