import React, { useState } from "react";
import { Alert, Modal, TouchableOpacity, Text, Pressable, View, KeyboardAvoidingView } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { InputKeyWord } from "../../components/InputKeyWord";
import { InputTeacher } from "../../components/InputTeacher";
import { DropdownCity } from "../../components/DropdownCity";
import { DropdownCourse } from "../../components/DropdownCourse";
import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons'

type Props = RectButtonProps & {
}

export function FilterModal({ ...rest }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (


    <KeyboardAvoidingView style={styles.centeredView}>
      <LinearGradient colors={["#f4f4f4", "#FDFDFD"]}>
        <KeyboardAvoidingView style={styles.modalView} >

          <InputKeyWord placeholder="Palavra-chave"></InputKeyWord>
          <InputTeacher placeholder="Professor"></InputTeacher>
          <DropdownCity></DropdownCity>
          <DropdownCourse></DropdownCourse>

          <TouchableOpacity onPress={() => { alert("(Temporario) DADOS DE PESQUISA ENVIADOS AO BACKEND #HEXA2022"), setModalVisible(!modalVisible) }}>
            <ButtonLoginSquare name="Filtrar" />
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </LinearGradient>
    </KeyboardAvoidingView>

  );

};