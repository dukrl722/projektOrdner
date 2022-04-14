import React from 'react';

import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';

import { Background } from './src/components/Background'
import {StatusBar} from "react-native";
import { AuthRoutes } from './src/routes';

export default function App() {

    const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Background>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <AuthRoutes />
        </Background>
    )
}