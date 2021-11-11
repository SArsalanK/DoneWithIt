import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import colors from '../config/colors';
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import routes from './routes';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen}></Stack.Screen>
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} options={{ title: "Messages", headerShown: true, headerTintColor: colors.primary }}></Stack.Screen>
    </Stack.Navigator>
)

export default AccountNavigator;