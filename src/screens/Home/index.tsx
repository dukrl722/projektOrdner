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
import auth from '@react-native-firebase/auth';

import UserHelper from "../../helpers/user";
import user from "../../helpers/user";

export function Home() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [userAuth, setUserAuth] = useState([]);

    const getUsers = () => {

        function validSearch( value ){
            var string = typeof("string");
            if(typeof(value) != string || value == ""){
                return false
            }
            return true;
        }

            var listUsers = []
            firestore()
            .collection('user')
            .limit(15)
            .get()
            .then(querySnapshot => {
                querySnapshot.docs.forEach( doc => {
                    
                    const user = {
                        id: doc.data().id,
                        name: doc.data().name,
                        image: doc.data().avatar,
                        city: doc.data().campus,
                        description: doc.data().descr,
                        course: doc.data().course,
                        type: doc.data().type,
                    }

                    // var opcaoKeyWord = true;
                    // var opcaoName = true;
                    // var opcaoCity = true;
                    // var opcaoCourse = true;

                    // var isTeacher = String(user.type) == "professor";

                    // if(validSearch(search.keyWord)){
                    //     opcaoKeyWord = String(user.description).toLowerCase().includes(String(search.keyWord).toLowerCase());
                    // } 
                    // if(validSearch(search.name)){
                    //     opcaoName = String(user.name).toLowerCase().includes(String(search.name).toLowerCase());
                    // } 
                    // if(validSearch(search.city)){
                    //     opcaoCity = (user.city == search.city);
                    // }
                    // if(validSearch(search.course)){
                    //     opcaoCourse = (user.course == search.course);
                    // };

                    // if(opcaoKeyWord && opcaoName && opcaoCity && opcaoCourse && isTeacher){
                        listUsers.push(user);
                    // }
                })
                setData(listUsers);
            }).catch((e) => {
                console.log('Erro, getUsers: ' + e + 'Search = ' + search);
            });
        
    }

    useEffect(() => {
        getUserData();
    }, [userAuth])

    useEffect(() => {
        getUsers();
    },[search])

    const navigation = useNavigation();

    const bottomSheet = useRef<BottomSheetRef>(null);

    async function getUserData() {
        await UserHelper.get(auth().currentUser.uid).then((data) => {
            setUserAuth(data);
        });
    }

    return (
        <View style={themes.container}>
            <View style={themes.header}>
                <Profile data={userAuth}/>
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
