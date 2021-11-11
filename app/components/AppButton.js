import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'
import styles from './styles'

export default function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
