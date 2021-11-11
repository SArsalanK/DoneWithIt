import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from 'formik'

import styles from '../styles'
import colors from '../../config/colors'
import ImageInputList from '../ImageInputList'
import ErrorMessage from '../forms/ErrorMessage'

export default function FormImagePicker({ name }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name]

    const onAddImage = uri => {
        var newArray = [...imageUris];
        newArray.splice(imageUris.length - 1, 0, { uri: uri, name: 'image', type: 'image/jpeg' });
        setFieldValue(name, newArray);
    }

    const onRemoveImage = (uri) => {
        setFieldValue(name, imageUris.filter(item => item.imageUri !== uri))
    }

    return (
        <>
            <ImageInputList imageUris={imageUris} onAddImage={onAddImage} onRemoveImage={onRemoveImage}></ImageInputList>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
