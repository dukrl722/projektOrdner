import { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { themes } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

export interface User {
    avatar: string,
    name: string,
    city: string,
    graduation: string,
    description: string
}

export function Details() {

    const data = {
        avatar: 'https://github.com/dukrl722.png',
        name: 'Eduardo da Silva',
        city: 'Dois Vizinhos',
        graduation: 'Engenharia de Software',
        description: 'Estou com projetos referentes a arquitetura de ' +
                'software para fazer qualquer merda pra fechar o espaço e ' +
                'ficar bonitinho. Não sei se aqui vai ser a descrição ou o que',
        workAreas: [
            'Supremacia',
            'Futebol varzeano',
            'Homocinéticas em geral'
        ],
        projects: [
            {
                title: 'Homocinética aplicada ao futebol supremo'
            },
            {
                title: 'Homocinética aplicada ao futebol supremo'
            },
            {
                title: 'Homocinética aplicada ao futebol supremo'
            },
            {
                title: 'Homocinética aplicada ao futebol supremo'
            },
            {
                title: 'Homocinética aplicada ao futebol supremo'
            },
        ]
    }

    const [ user, setUser ] = useState({
        avatar: '',
        name: '',
        city: '',
        graduation: '',
        description: '',
        workAreas: [''],
        projects: [
            {
                title: ''
            }
        ]
    });

    const navigation = useNavigation();

    async function loadUser() {
        //let userData =  await api.get('/user');
        
        setUser(data);
    };

    function handleGoBack() {
        navigation.goBack();
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <>
            <Header 
                title='Detalhes'
                goBackAction={handleGoBack}
            />
            <ScrollView style={themes.container} showsVerticalScrollIndicator={false} >
                <View style={themes.imageContainer}>
                    <Image source={{ uri: user.avatar }} style={themes.image} />
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                        <Text style={themes.title}>{user.name} - </Text>
                        <Text style={themes.titleBold}>{user.city}</Text>
                    </View>
                    <Text style={themes.subtitle}>{user.graduation}</Text>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={themes.text}>{user.description}</Text>
                </View>
                <View style={themes.itensContainer}>
                    <Text style={themes.titleBold} >Áreas Trabalhadas</Text>
                        {user.workAreas.map(wa => {
                            return (
                                <View style={themes.itens}>
                                    <Text style={themes.itensText}>{wa}</Text>
                                </View>
                            )
                        })}
                </View>
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
            </ScrollView>
        </>
    )
}
