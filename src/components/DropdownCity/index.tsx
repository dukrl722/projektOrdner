//@ts-nocheck

import React from 'react';

import {Feather} from '@expo/vector-icons'
import {styles} from './styles'

import SelectDropdown from 'react-native-select-dropdown'


const cities = [
    { key: 'Todos', value: '' },
    { key: 'Dois Vizinhos', value: 'Dois Vizinhos' },
    { key: 'Francisco Beltrão', value: 'Francisco Beltrão' },
    { key: 'Pato Branco', value: 'Pato Branco' },
    { key: 'Curitiba', value: 'Curitiba' },
]

export function DropdownCity({ onSelect, ...rest }) {
    return (

        <SelectDropdown
            data={cities}
            onSelect={(selectedItem) => onSelect(selectedItem.value)}
            defaultButtonText={'Campus'}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.key;
            }}
            rowTextForSelection={(item, index) => {
                return item.key;
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
