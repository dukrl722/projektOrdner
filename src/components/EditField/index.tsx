import React, {useRef} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';

import {InterestModal} from "../InterestModal";

import {themes} from './styles';

interface Props {
    placeholder: string
    items: any[]
    theme: string
}

export function EditField({placeholder, items, theme, ...rest}: Props) {

    const bottomsheet = useRef<BottomSheetRef>(null);

    return (
        <View style={themes.container}>
            <Text style={themes.inputs}>
                {placeholder}
            </Text>

            <TouchableOpacity onPress={() => bottomsheet.current?.show()}>
                <Image source={require('../../assets/image_plus.png')}/>
            </TouchableOpacity>

            <BottomSheet height={400} ref={bottomsheet}>
                <InterestModal items={items}/>
            </BottomSheet>
        </View>
    )
}
