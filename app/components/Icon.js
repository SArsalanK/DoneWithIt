import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icon({ name, size = 40, scalefactor = 0.5, backgroundColor = 'black', iconColor = 'white' }) {
    return (
        <View style={{ width: size, height: size, borderRadius: size, backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * scalefactor}
            ></MaterialCommunityIcons>
        </View>
    )
}
