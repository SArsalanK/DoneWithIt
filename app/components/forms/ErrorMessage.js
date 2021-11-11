import React from 'react'
import { View, Text } from 'react-native'
import AppText from '../AppText'

import styles from '../styles'

export default function ErrorMessage({error, visible}) {

    if(!visible || !error) return null;

    return (
        <View>
            <AppText style={styles.errorMessage} title={error}></AppText>
        </View>
    )
}
