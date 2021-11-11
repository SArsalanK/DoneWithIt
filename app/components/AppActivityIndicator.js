import React from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'
import styles from './styles';

export default function AppActivityIndicator({ visible = false }) {
    if (!visible) return null
    return (
        <View style={styles.appActivityIndicatorOverlay}>
            <LottieView autoPlay loop source={require('../assets/animations/loader.json')}></LottieView>
        </View>
    );
}
