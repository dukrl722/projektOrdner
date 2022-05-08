import React from 'react';

import {Feather} from '@expo/vector-icons'
import {styles} from './styles'

import SelectDropdown from 'react-native-select-dropdown'

const cities = [
    "Todos",
    "Dois Vizinhos",
    "Francisco Beltrão",
    "Pato Branco",
    "Curitiba"
]

export function DropdownCity({...rest}) {
    return (

        <SelectDropdown
            data={cities}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            defaultButtonText={'Campus'}
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
                    size={18}
                />;

            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
        />
    )
}
