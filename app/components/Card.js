import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import AppText from './AppText'
import styles from './styles'

export default function Card({ title, subTitle, imageUrl = 'https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg', thumbnailUrl='https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg', onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.listingCard}>
                <Image style={styles.listingCardImage} preview={{ uri: thumbnailUrl }} uri={imageUrl} tint={'light'}></Image>
                <View style={styles.listingCardDetails}>
                    <AppText style={styles.listingCardHeader} title={title} type='header'></AppText>
                    <AppText style={styles.listingCardDescription} title={subTitle}></AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
