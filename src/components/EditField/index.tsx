import React, {useRef} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';

import {InterestModal} from "../InterestModal";

import {themes} from './styles';

interface Props {
    placeholder: string,
    isProject: boolean,
    onClose: Function
}

export function EditField({placeholder, isProject, onClose}: Props) {

    const bottomsheet = useRef<BottomSheetRef>(null);

    function handleModalClose() {
        bottomsheet.current?.hide();
        if (!!onClose) onClose();
    }

    return (
        <View style={themes.container}>
            <Text style={themes.inputs}>
                {placeholder}
            </Text>

            <TouchableOpacity onPress={() => bottomsheet.current?.show()}>
                <Image source={require('../../assets/image_plus.png')}/>
            </TouchableOpacity>

            <BottomSheet height={400} ref={bottomsheet}>
                {/* @ts-ignore */}
                <InterestModal onClose={handleModalClose} isProject={isProject} />
            </BottomSheet>
        </View>
    )
}
