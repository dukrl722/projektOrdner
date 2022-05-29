//@ts-nocheck
import { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { themes } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export interface User {
    avatar: string,
    name: string,
    city: string,
    graduation: string,
    description: string
}

export function Details({ userId = 'jpLLjuUi8AAFGEbuPMrA' }) {

    const [ user, setUser ] = useState();

    const navigation = useNavigation();

    async function loadUser() {
        const userDoc = await firestore().collection('user').doc(userId).get();
        setUser({ ...userDoc.data() });
    };

    useEffect(() => {
        loadUser();
    }, []);

    function handleGoBack() {
        navigation.goBack();
    };

    if( !user ) return <></>;

    return (
        <>
            <Header 
                title='Detalhes'
                goBackAction={handleGoBack}
            />
            <ScrollView style={themes.container} showsVerticalScrollIndicator={false} >
                {!user.avatar ? null : (
                    <View style={themes.imageContainer}>
                        <Image source={{ uri: user.avatar }} style={themes.image} />
                    </View>
                )}
                <View style={{ paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                        <Text style={themes.title}>{user.name} - </Text>
                        <Text style={themes.titleBold}>{user.campus ? user.campus : 'Sem localidade cadastrada.'}</Text>
                    </View>
                    {user.course ? <Text style={themes.subtitle}>{user.course}</Text> : null}
                </View>
                {!user.descr ? null : (
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={themes.text}>{user.descr}</Text>
                    </View>
                )}
                {!user.workedAreas ? null : (
                    <View style={themes.itensContainer}>
                        <Text style={themes.titleBold} >Áreas Trabalhadas</Text>
                            {user.workedAreas.map(wa => {
                                return (
                                    <View style={themes.itens}>
                                        <Text style={themes.itensText}>{wa}</Text>
                                    </View>
                                )
                            })}
                    </View>
                )}
                {!user.projects ? null : (
                    <View style={themes.itensContainer}>
                        <Text style={themes.titleBold}>Projetos</Text>
                        {user.projects.map(p => {
                            return (
                                <View style={themes.itens}>
                                    <Text style={themes.itensText}>{p.title}</Text>
                                </View>
                            )
                        })}
                    </View>
                )}
            </ScrollView>
        </>
    )
}
