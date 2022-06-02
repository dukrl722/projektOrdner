import { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { themes } from './styles';
import { useNavigation } from '@react-navigation/native';

import UserHelper from '../../helpers/user';
interface User {
    avatar: string,
    name: string,
    city: string,
    campus: string,
    course: string,
    workedAreas: [string],
    projects: [string],
    descr: string
}

interface props {
    userId: String
}

export function Details({ userId }: props) {

    const [ user, setUser ] = useState<User>();

    const navigation = useNavigation();

    async function loadUser() {
        const userDoc = await UserHelper.get(userId);
        setUser(userDoc);
    };

    useEffect(() => {
        loadUser();
    }, []);

    if( !user ) return <></>;

    return (
        <>
            <Header 
                title='Detalhes'
                goBackAction={() => navigation.goBack()}
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
                            {user.workedAreas.map((wa, index) => {
                                return (
                                    <View key={index.toString()} style={themes.itens}>
                                        <Text style={themes.itensText}>{wa}</Text>
                                    </View>
                                )
                            })}
                    </View>
                )}
                {!user.projects ? null : (
                    <View style={themes.itensContainer}>
                        <Text style={themes.titleBold}>Projetos</Text>
                        {user.projects.map((p, index) => {
                            return (
                                <View key={index.toString()} style={themes.itens}>
                                    <Text style={themes.itensText}>{p}</Text>
                                </View>
                            )
                        })}
                    </View>
                )}
            </ScrollView>
        </>
    )
}
