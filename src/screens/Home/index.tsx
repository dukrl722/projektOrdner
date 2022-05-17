import React, { useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import { RectButton } from "react-native-gesture-handler";

import { themes } from './styles';

import { Background } from '../../components/Background';
import { Profile } from "../../components/Profile";
import { CardInfo } from "../../components/CardInfo";
import { FilterModal } from '../../components/FilterModal';
import { BottomSheet, BottomSheetRef } from 'react-native-sheet';

export function Home() {

    const data = [
        {
            id: '1',
            name: 'Eduardo da Silva',
            image: 'https://github.com/dukrl722.png',
            city: 'Dois Vizinhos',
            description: 'Estou com projetos referentes a arquitetura de ' +
                'software para fazer qualquer merda pra fechar o espaço e ' +
                'ficar bonitinho. Não sei se aqui vai ser a descrição ou o que'
        },
        {
            id: '2',
            name: 'Gabriel Refosco',
            image: 'https://github.com/gbrefosco.png',
            city: 'Dois Vizinhos',
            description: 'Estou com projetos referentes a arquitetura de ' +
                'software para fazer qualquer merda pra fechar o espaço e ' +
                'ficar bonitinho. Não sei se aqui vai ser a descrição ou o que'
        },
        {
            id: '3',
            name: 'Lucas Lenoch',
            image: 'https://github.com/neom200.png',
            city: 'Dois Vizinhos',
            description: 'Estou com projetos referentes a arquitetura de ' +
                'software para fazer qualquer merda pra fechar o espaço e ' +
                'ficar bonitinho. Não sei se aqui vai ser a descrição ou o que'
        }
    ];

    const bottomSheet = useRef<BottomSheetRef>(null);

    return (
        <Background>
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
                        <CardInfo data={item} />
                    )}
                />
            </View>
        </ Background>
    );
}
