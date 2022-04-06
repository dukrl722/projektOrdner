import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import { theme } from '../global/styles/theme';

import { Login } from '../screens/Login';
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
                <Screen name="Select" component={Login}/>
            </Navigator>
        </NavigationContainer>
        
    )
}