import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import styles from './styles'

export default function Screen({children , style}) {
    return (
        <View style={[styles.screen, style]}>{children}</View>
    )
}