import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Icon from './Icon'
import styles from './styles'
import colors from '../config/colors'

export default function AppTextInput({ icon, width, ...otherProps }) {
    return (
        <View style={[styles.textInputContainer, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput placeholderTextColor={colors.medium} style={styles.textInput} {...otherProps}></TextInput>
        </View>
    )
}
