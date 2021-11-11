import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import colors from '../config/colors';
import routes from './routes';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.LISTING} component={ListingsScreen}></Stack.Screen>
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen} options={{ title: "Listing Details", headerShown: true, headerTintColor: colors.primary }}></Stack.Screen>
    </Stack.Navigator>
)

export default FeedNavigator;