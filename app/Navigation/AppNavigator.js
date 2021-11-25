import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as  Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'

import NewListingButton from './NewListingButton';
import colors from '../config/colors';
import ListingsScreen from '../screens/ListingsScreen'
import AccountScreen from '../screens/AccountScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import NavigationTheme from './NavigationTheme';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import routes from './routes';
import expoPushTokens from '../api/expoPushTokens';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const registerForPushNotification = async () => {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        if (!permission.granted) return

        try {
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log("token: " + token)
            expoPushTokens.register(token)

            
                const subscription = Notifications.addNotificationReceivedListener(notification => {
                    console.log(notification);
                });
                return () => subscription.remove();
            
            
            // const subscription = Notifications.addNotificationResponseReceivedListener(response => {
            //     const url = response.notification.request.content.data.url;
            //     Linking.openURL(url);
            // });
            // return () => subscription.remove();

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        registerForPushNotification()
    }, [])

    return (
        <NavigationContainer theme={NavigationTheme}>
            <Tab.Navigator initialRouteName={routes.FEED_NAVIGATOR} screenOptions={{ tabBarItemStyle: { alignItems: 'center', justifyContent: 'center' }, headerShown: false, tabBarActiveTintColor: colors.primary }}>
                <Tab.Screen name={routes.FEED_NAVIGATOR} component={FeedNavigator} options={{ title: "Feed", tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="home" color={color} size={size}></MaterialCommunityIcons>) }} />
                <Tab.Screen name={routes.LISTING_EDIT} component={ListingEditScreen} options={({ navigation }) => ({ title: "", tabBarButton: () => (<NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />) })} />
                <Tab.Screen name={routes.ACCOUNT_NAVIATOR} component={AccountNavigator} options={{ title: "Account", headerShown: true, headerTitle: 'Account', headerTitleAlign: 'center', headerTintColor: 'black', tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="account" color={color} size={size}></MaterialCommunityIcons>) }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;