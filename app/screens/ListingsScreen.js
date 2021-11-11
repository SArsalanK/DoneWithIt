import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Screen from '../components/Screen'
import styles from '../components/styles'
import routes from '../Navigation/routes'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import AppActivityIndicator from '../components/AppActivityIndicator'
import useApi from '../hooks/useApi'
import listingsApi from '../api/listings'

export default function ListingsScreen({ navigation }) {

    const getListingsApi = useApi(listingsApi.getListings)

    useEffect(() => {
        getListingsApi.request()
    }, [])

    return (
        <>
            <AppActivityIndicator visible={getListingsApi.loading} />
            <View style={styles.listingsScreenContainer}>
                {getListingsApi.error && <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <AppText title={"Couldn't retrieve the listings"} />
                    <AppButton title={'Retry'} onPress={loadListings}></AppButton></View>}

                {getListingsApi.data &&
                    <FlatList
                        data={getListingsApi.data}
                        keyExtractor={listings => listings.id.toString()}
                        renderItem={({ item }) =>
                            <Card
                                title={item.title}
                                subTitle={'$' + item.price}
                                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                                imageUrl={item.images[0] && item.images[0].url}
                                thumbnailUrl={item.images[0] && item.images[0].thumbnailUrl} />
                        }
                    />
                }
            </View>
        </>
    )
}
