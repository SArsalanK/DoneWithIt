import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import NavigationTheme from './NavigationTheme';
import colors from '../config/colors';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <NavigationContainer theme={NavigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Welcome'} component={WelcomeScreen}></Stack.Screen>
            <Stack.Screen name={'Login'} component={LoginScreen} options={{ title: "Login", headerShown: false, headerTintColor: colors.primary }}></Stack.Screen>
            <Stack.Screen name={'Register'} component={RegisterScreen} options={{ title: "Register Screen", headerShown: false, headerTintColor: colors.primary }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);

export default AuthNavigator;
