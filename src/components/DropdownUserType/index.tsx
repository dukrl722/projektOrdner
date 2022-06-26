//@ts-nocheck
import React from 'react';

import {Feather} from '@expo/vector-icons'
import {styles} from './styles'

import SelectDropdown from 'react-native-select-dropdown'

const types = [
    { key: 'student', value: 'Aluno' },
    { key: 'professor', value: 'Professor' },
]

export function DropdownUserType({ onSelect, ...rest }) {
    return (
        <SelectDropdown
            data={types}
            onSelect={(selectedItem) => onSelect(selectedItem.key)}
            defaultButtonText={'Eu sou?'}
            buttonTextAfterSelection={(selectedItem) => {
                return selectedItem.value;
            }}
            rowTextForSelection={(item) => {
                return item.value;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
                return <Feather
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                />;

            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            {...rest}
        />
    )
}
