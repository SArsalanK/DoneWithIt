import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icon from '../components/Icon'
import colors from '../config/colors'

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ bottom: 10 }}>
                <Icon size={60} scalefactor={0.75} name="plus-circle" backgroundColor={colors.primary} iconColor='white' />
            </View>
        </TouchableOpacity>
    )
}
