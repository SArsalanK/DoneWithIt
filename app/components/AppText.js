import React from 'react'
import { View, Text, Platform } from 'react-native'
import colors from '../config/colors'

import styles from './styles'

export default function AppText({title, style, ...otherProps}) {
    return (
        <Text style={[styles.text, style]} {...otherProps}>{title}</Text>
    )
}
