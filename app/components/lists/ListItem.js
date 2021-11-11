import React from 'react';
import { View, StyleSheet, Image, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import styles from '../styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
                <View style={styles.listItemContainer}>
                    {IconComponent}
                    {image && <Image style={styles.listItemContainerImage} source={image}></Image>}
                    <View style={styles.listItemContainerText}>
                        <AppText numberOfLines={1} style={styles.listingCardItemText} title={title}></AppText>
                        {subTitle && <AppText numberOfLines={2} style={styles.listingCardItemTextSubTxt} title={subTitle}></AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name={'chevron-right'} size={25}></MaterialCommunityIcons>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;