// @ts-nocheck

import React, {useState} from "react";
import {Alert, Modal, TouchableOpacity, Text, Pressable, View, KeyboardAvoidingView, TextInputProps} from "react-native";
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


export function FilterModal({ event, ...rest }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { primary, secondary } = theme.colorFilter;

    const [keyWord, setKeyWord] = useState([]);
    const [name, setName] = useState([]);
    const [city, setCity] = useState([]);
    const [course, setCourse] = useState([]);

    var search = {

        keyWord: undefined,
        name: undefined,
        city: undefined,
        course: undefined,      

    }

    const buildSearch = ( keyWord, name, city, course ) => {

        search.keyWord = keyWord;
        search.name = name;
        search.city = city;
        search.course = course;

    }

    function handleCitySelect(item) {
        setCity(item);
    }

    function handleCourseSelect(item) {
        setCourse(item);
    }

    return (

        <KeyboardAvoidingView style={styles.centeredView}>
            <LinearGradient colors={[primary, secondary]}>
                <KeyboardAvoidingView style={styles.modalView}>
                    <InputKeyWord 
                        placeholder="Palavra-chave" 
                        value={keyWord}
                        onChangeText={(value) => setKeyWord(value)}
                    />
                    <InputTeacher 
                         placeholder="Nome de usuário"
                         value={name}
                         onChangeText={(value) => setName(value)}
                    />
                    <DropdownCity 
                        onSelect={handleCitySelect}
                    />
                    <DropdownCourse 
                        onSelect={handleCourseSelect}
                    />

                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible)
                        buildSearch(keyWord, name, city, course);
                        {event(search)}
                    }}>
                        <ButtonLoginSquare name="Filtrar"/>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </LinearGradient>
        </KeyboardAvoidingView>

    );

};
