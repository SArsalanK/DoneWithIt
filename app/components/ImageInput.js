import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import styles from './styles'
import colors from '../config/colors'

export default function ImageInput({ imageUri, onAddImage, onRemoveImage }) {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) {
            alert('You need enable permission to access the library')
        }
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onRemoveImage(imageUri) },
            { text: 'No' }
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {
                onAddImage(result.uri)
            }
        } catch (error) {
            console.log('error reading an image')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.imageInputContainer}>
                {!imageUri && <MaterialCommunityIcons name={'camera'} size={40} color={colors.medium}/>}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePicker} />}
            </View>
        </TouchableWithoutFeedback>
    )
}
