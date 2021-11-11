import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import AppText from './AppText'
import styles from './styles'

export default function PickerItem({ item, onPress }) {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.pickerItem} title={item.label}></AppText>
            </TouchableOpacity>
        </View>
    )
}
