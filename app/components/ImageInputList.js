import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { View, Text, FlatList, Image } from 'react-native'

import styles from './styles'
import colors from '../config/colors'
import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris, onAddImage, onRemoveImage}) {

    const myFlatList = useRef();

    return (
        <View>
            <FlatList
                ref={myFlatList} 
                onContentSizeChange={() => myFlatList.current.scrollToEnd({ animated: true })}
                onLayout={() => myFlatList.current.scrollToEnd({ animated: true })}
                horizontal
                data={imageUris}
                keyExtractor={ item => item.uri}
                renderItem={({ item }) => (
                    <ImageInput imageUri={item.uri} onAddImage={onAddImage} onRemoveImage={onRemoveImage}></ImageInput>
                )}
            />
        </View>
    )

}
