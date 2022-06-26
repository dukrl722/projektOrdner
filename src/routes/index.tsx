//@ts-nocheck
import React, { useEffect } from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import { Help } from '../screens/Help';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Profile } from '../screens/Profile';
import { Select } from '../screens/Select';
import { LoadApp } from '../screens/LoadApp';

import { Feather } from '@expo/vector-icons';
import {EditProfileProfessor} from "../screens/EditProfileProfessor";
import {EditProfileStudent} from "../screens/EditProfileStudent";
import { themes } from './styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AuthRoutes() {

    const stackSettings = {
        headerShown: false
    }

    const a = '#DADADA'

    const TabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: themes.tabBar,
                    tabBarItemStyle: {
                        marginHorizontal: 20
                    },
                    tabBarShowLabel: false
                }}
            >
                <Tab.Screen
                    name='HomePage'
                    component={Home}
                    options={{ tabBarIcon: ({focused}) => <Feather name='home' size={30} color={focused ? '#2c9cf7' : 'gray'} /> }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{ tabBarIcon: ({focused}) => <Feather name='user' size={30} color={focused ? '#2c9cf7' : 'gray'} /> }}
                />
                <Tab.Screen
                    name='Help'
                    component={Help}
                    options={{ tabBarIcon: ({focused}) => <Feather name='help-circle' size={30} color={focused ? '#2c9cf7' : 'gray'} /> }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='LoadApp'
                    component={LoadApp}
                    options={stackSettings}
                />
                <Stack.Screen
                    name='Select'
                    component={Select}
                    options={stackSettings}
                />
                <Stack.Screen
                    name='Login'
                    component={Login} // Mudar para 'Login'
                    options={stackSettings}
                />
                <Stack.Screen
                    name='SignUp'
                    component={SignUp}
                    options={stackSettings}
                />
                <Stack.Screen
                    name='Home'
                    options={{ headerShown: false }}
                    component={TabNavigator}
                />
                <Stack.Screen
                    name='Details'
                    options={stackSettings}
                    component={Details}
                />
                <Stack.Screen
                    name='EditProfileProfessor'
                    options={stackSettings}
                    component={EditProfileProfessor}
                />
                <Stack.Screen
                    name='EditProfileStudent'
                    options={stackSettings}
                    component={EditProfileStudent}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
