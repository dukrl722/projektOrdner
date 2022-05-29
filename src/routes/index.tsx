//@ts-nocheck
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { Help } from "../screens/Help";
import { PerfilAluno } from '../screens/PerfilAluno';
import { PerfilProfessor } from '../screens/PerfilProfessor';
import { Atalhos } from '../screens/Atalhos';
import { Home } from "../screens/Home";
import { Details } from '../screens/Details';

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AuthRoutes() {

    const stackSettings = {
        headerShown: false,
        headerStyle: {
            backgroundColor: theme.colors.secondary100
        },
        tabBarActiveTintColor: '#fff',
        tabBarStyle: theme.tabBar
    }

    const tabSettings = {
        headerShown: false
    }

    const tabBarTheme = theme.tabBar;

    const TabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#DADADA',
                        height: 80,
                        paddingBottom: 15,
                        borderRadius: 15
                    },
                    tabBarItemStyle: {
                        marginHorizontal: 20
                    },
                    tabBarShowLabel: false
                }}
            >
                <Tab.Screen
                    name='HomePage'
                    component={Home}
                    options={{
                        tabBarIcon: ({focused, color}) =>
                            <Feather
                                name='home'
                                size={30}
                                color={focused ? '#2c9cf7' : 'gray'}
                            />,
                    }}
                />


                <Tab.Screen
                    name='Help'
                    component={Help}
                    options={{
                        tabBarIcon: ({focused}) =>
                            <Feather
                                name='help-circle'
                                size={30}
                                color={focused ? '#2c9cf7' : 'gray'}
                            />,
                    }}
                />

            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={stackSettings}
                />
                <Stack.Screen
                    name='SignUp'
                    component={SignUp}
                    options={stackSettings}
                />
                <Stack.Screen
                    name='Home'
                    options={tabSettings}
                    component={TabNavigator}
                />
                <Stack.Screen
                    name='Details'
                    options={stackSettings}
                    component={Details}
                />
                <Stack.Screen
                    name='PerfilAluno'
                    options={stackSettings}
                    component={PerfilAluno}
                />
                <Stack.Screen
                    name='PerfilProfessor'
                    options={stackSettings}
                    component={PerfilProfessor}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
