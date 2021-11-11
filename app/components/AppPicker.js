import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, TextInput, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Icon from './Icon'
import styles from './styles'
import colors from '../config/colors'
import AppText from './AppText'
import PickerItem from './PickerItem'

export default function AppPicker({ icon, items, numOfColumns = 1, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.textInputContainer, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    {selectedItem.length === 0 ?
                        (
                            <AppText style={{ flex: 1, color: colors.medium }} title={placeholder}></AppText>
                        ) : (
                            <AppText style={styles.pickerText} title={selectedItem.label}></AppText>
                        )
                    }
                    <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Button title={'Close'} onPress={() => setModalVisible(false)}></Button>
                <FlatList
                    numColumns={numOfColumns}
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                    (<PickerItemComponent item={item} onPress={() => {
                        setModalVisible(false);
                        onSelectItem(item);
                    }
                    } />)
                    }
                />
            </Modal>
        </>
    )
}
