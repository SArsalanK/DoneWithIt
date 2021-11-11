import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'
import Icon from './Icon'
import AppText from './AppText'

export default function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.categoryPickerItemContainer}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={70}></Icon>
                <AppText style={styles.categoryPickerItemLabel} title={item.label}></AppText>
            </View>
        </TouchableWithoutFeedback>
    )
}
