import React from 'react';
import {TextInputProps, View} from "react-native";
import {Feather} from '@expo/vector-icons'
import {styles} from './styles'

import SelectDropdown from 'react-native-select-dropdown'

const course = [
    "Todos",
    "Eng. de Software",
    "Biologia",
    "Zootecnia",
    "Agronomia"
]

export function DropdownCourse({...rest}) {
    return (

        <SelectDropdown
            data={course}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            defaultButtonText={'Curso'}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
                return <Feather
					name={isOpened ? 'chevron-up' : 'chevron-down'}
					color={'#444'}
					size={18}/>;

            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
        />
    )
}
