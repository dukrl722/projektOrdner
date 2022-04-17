import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import { theme } from '../global/styles/theme';

import { Select } from '../screens/Select';
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { PerfilAluno } from "../screens/PerfilAluno";

import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: theme.colors.secondary100
                    }
                }}>
                <Screen name="PerfilAluno" component={PerfilAluno}/>
                <Screen name="Select" component={Select}/>
                <Screen name="Login" component={Login}/>
                <Screen name="SignUp" component={SignUp}/>
            </Navigator>
        </NavigationContainer>
        
    )
}
