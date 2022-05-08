import React, {useState} from "react";
import {Alert, Modal, TouchableOpacity, Text, Pressable, View, KeyboardAvoidingView} from "react-native";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";
import {styles} from "./styles";
import {InputKeyWord} from "../../components/InputKeyWord";
import {InputTeacher} from "../../components/InputTeacher";
import {DropdownCity} from "../../components/DropdownCity";
import {DropdownCourse} from "../../components/DropdownCourse";
import {ButtonLoginSquare} from '../../components/ButtonLoginSquare';
import {LinearGradient} from "expo-linear-gradient";
import {Feather} from '@expo/vector-icons'
import {theme} from "../../global/styles/theme";

export function FilterModal() {
    const [modalVisible, setModalVisible] = useState(false);

    const { primary, secondary } = theme.colorFilter;

    return (

        <KeyboardAvoidingView style={styles.centeredView}>
            <LinearGradient colors={[primary, secondary]}>
                <KeyboardAvoidingView style={styles.modalView}>

                    <InputKeyWord placeholder="Palavra-chave"/>
                    <InputTeacher placeholder="Professor"/>
                    <DropdownCity/>
                    <DropdownCourse/>

                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible)
                    }}>
                        <ButtonLoginSquare name="Filtrar"/>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </LinearGradient>
        </KeyboardAvoidingView>

    );

};
