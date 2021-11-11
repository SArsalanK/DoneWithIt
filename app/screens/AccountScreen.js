import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'

import ListItem from '../components/lists/ListItem'
import styles from '../components/styles'
import colors from '../config/colors'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import ListItemSeperator from '../components/lists/ListItemSeperator'
import routes from '../Navigation/routes'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import useAuth from '../auth/useAuth'


export default function AccountScreen({ navigation }) {

    const { user, logout } = useAuth();

    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.primary,
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: colors.secondary,
            },
            targetScreen: routes.MESSAGES
        }
    ]

    return (
        <View style={styles.parentAccountContainer}>
            <View style={styles.accountContainer}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/mosh.jpg')}
                />
            </View> 
            <View style={styles.accountContainer}>
                <FlatList
                    data={menuItems}
                    ItemSeparatorComponent={ListItemSeperator}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem title={item.title} onPress={() => navigation.navigate(item.targetScreen)} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}></Icon>}></ListItem>
                    } />
            </View>
            <ListItem
                onPress={() => logout()}
                title='Log Out'
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#ffe66d"
                    />
                }
            >
            </ListItem>
        </View>
    )
}
