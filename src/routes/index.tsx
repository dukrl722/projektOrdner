import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../global/styles/theme';

import { Select } from '../screens/Select';
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";

import { Feather } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <Navigator

                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: theme.colors.secondary100
                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarStyle: theme.tabBar
                }}>

                <Screen
                    name="CHAMA O MODAL DE AJUDA/TUTORIAL"
                    component={SignUp}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="help-circle" size={30} color="#000" />
                        },
                        tabBarLabel: () => { return null },
                    }}
                />
                <Screen
                    name="DIFERECIONA PARA A TELA INICIAL"
                    component={Select}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="home" size={30} color="#000" />
                        },
                        tabBarLabel: () => { return null },
                    }}
                />
                <Screen
                    name="DIFERECIONA PARA O PERFIL"
                    component={Login}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="user" size={30} color="#000" />
                        },
                        tabBarLabel: () => { return null },
                    }}
                />
                <Screen
                    name="CHAMA O MODAL DE LOG OUT"
                    component={SignUp}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name="log-out" size={30} color="#000" />
                        },
                        tabBarLabel: () => { return null },
                    }}
                />
       
            </Navigator>
        </NavigationContainer>

    )
}
