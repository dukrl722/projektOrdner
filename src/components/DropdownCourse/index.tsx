//@ts-nocheck

import React from 'react';
import {TextInputProps, View} from "react-native";
import {Feather} from '@expo/vector-icons'
import {styles} from './styles'

import SelectDropdown from 'react-native-select-dropdown'


const course = [
    { key: 'Todos', value: '' },
    { key: 'Eng. de Software', value: 'Engenharia de Software' },
    { key: 'Biologia', value: 'Biologia' },
    { key: 'Zootecnia', value: 'Zootecnia' },
    { key: 'Agronomia', value: 'Agronomia' },
]

export function DropdownCourse({ onSelect, ...rest }) {
    return (

        <SelectDropdown
            data={course}
            onSelect={(selectedItem) => onSelect(selectedItem.value)}
            defaultButtonText={'Curso'}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.key;
            }}
            rowTextForSelection={(item, index) => {
                return item.key;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={isOpened => {
                return <Feather
					name={isOpened ? 'chevron-up' : 'chevron-down'}
					color={'#444'}
					size={18}/>;

            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
            {...rest}
        />
    )
}
