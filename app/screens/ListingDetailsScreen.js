import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppText from '../components/AppText'

import styles from '../components/styles'
import ListItem from '../components/lists/ListItem'
import { Image } from 'react-native-expo-image-cache'

export default function ListingDetailsScreen({ route }) {

    const params = route.params;

    return (
        <>
            {params.images[0] == null ?
                (<Image style={styles.itemListingBackground} uri={'https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg'} preview={{ uri: 'https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg' }} tint={'light'}></Image>)
                :
                (<Image style={styles.itemListingBackground} uri={params.images[0].url} preview={{ uri: params.images[0].thumbnailUrl }} tint={'light'}></Image>)}
            <View style={styles.listingCardDetails}>
                <AppText style={styles.listingCardHeader} title={params.title}></AppText>
                <AppText style={styles.listingCardDescription} title={'$' + params.price}></AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title='Arsalan'
                        subTitle='5 Listings'
                        onPress={() => console.log('clicked')} />
                </View>
            </View>
        </>
    )
}
