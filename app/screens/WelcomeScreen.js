import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

import styles from '../components/styles';
import colors from '../config/colors';
import Screen from '../components/Screen';
import routes from '../Navigation/routes';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground blurRadius={10} style={styles.container} source={require('../assets/background.jpg')}>
            <View style={styles.headerContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagLine}> Sell what you don't need</Text> 
            </View>
            <AppButton title='login' onPress={() => console.log("login")} color='primary' onPress={() => navigation.navigate(routes.LOGIN)}></AppButton> 
            <AppButton title='Register' onPress={() => console.log("Register")} color='secondary' onPress={() => navigation.navigate(routes.REGISTER)}></AppButton> 
        </ImageBackground>
    
    );
}

export default WelcomeScreen;