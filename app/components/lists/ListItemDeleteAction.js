import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../../config/colors'
import styles from '../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteView}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={35}
                    color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    )
}
