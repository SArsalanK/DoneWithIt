import React from 'react'
import { View, Text } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'

import AppText from './AppText'
import styles from './styles'


export default function OfflineNotice() {

    const netInfo = useNetInfo()
    console.log(netInfo)

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <AppText style={styles.offlineNotice} title={'No Internet Connection'}></AppText>
        )

    return null
}
