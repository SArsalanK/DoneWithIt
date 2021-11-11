import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'

import Screen from './app/components/Screen';
import ListingsScreen from './app/screens/ListingsScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import Icon from './app/components/Icon'
import colors from './app/config/colors'
import AuthNavigator from './app/Navigation/AuthNavigator';
import NavigationTheme from './app/Navigation/NavigationTheme';
import AppNavigator from './app/Navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage';
import jwtDecode from 'jwt-decode'
import AppLoading from 'expo-app-loading';

enableScreens()

export default function App() {

  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user)  {
      setUser(user); 
      console.log(user)
    }
  }

  if (!isReady) return (<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={() => console.log("error getting token")}></AppLoading>);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice></OfflineNotice>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}