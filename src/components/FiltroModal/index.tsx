import React, { useState } from "react";
import { Alert, Modal, TouchableOpacity, Text, Pressable, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { InputKeyWord } from "../../components/InputKeyWord";
import { InputTeacher } from "../../components/InputTeacher";
import { DropdownCity } from "../../components/DropdownCity";
import { DropdownCourse } from "../../components/DropdownCourse";
import { ButtonLoginSquare } from '../../components/ButtonLoginSquare';

import { Feather } from '@expo/vector-icons'

type Props = RectButtonProps & {
}

export function FilterModal({ ...rest }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <RectButton style={styles.buttonContainer}>

        <Modal
          animationType="fade"
          transparent={true}
          collapsable={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal fechada.");
            setModalVisible(!modalVisible);
          }}
        >

          <View style={styles.centeredView}>

            <View style={styles.modalView}>
              <InputKeyWord placeholder="Palavra-chave"></InputKeyWord>
              <InputTeacher placeholder="Professor"></InputTeacher>
              <DropdownCity></DropdownCity>
              <DropdownCourse></DropdownCourse>

              <TouchableOpacity onPress={() => { alert("(Temporario) DADOS DE PESQUISA ENVIADOS AO BACKEND #HEXA2022"), setModalVisible(!modalVisible) }}>
                <ButtonLoginSquare name="Filtrar" />
              </TouchableOpacity>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>
                  <Feather name={'chevron-down'} color={'#444'} size={30} />
                </Text>
              </Pressable>

            </View>
          </View>
        </Modal>

        <Text style={styles.textContainer}>Filtros</Text>

      </RectButton>
    </TouchableOpacity>
  );
};