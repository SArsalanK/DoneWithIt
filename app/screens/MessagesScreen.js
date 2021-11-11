import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'

import ListItem from '../components/lists/ListItem';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import styles from '../components/styles';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 4,
        title: 'T4',
        description: 'D4',
        image: require('../assets/mosh.jpg'),
    },

]

export default function initialMessagesScreen() {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id != message.id));
    }

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => setMessages([
                {
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/mosh.jpg'),
                },
            ])}
            renderItem={({ item }) => <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('message', item)}
                renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />}
        />
    );
}

