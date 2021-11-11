import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'

export default function AppFormField({ name, width, ...otherProps }) {

    const { setFieldTouched, setFieldValue, values, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput width={width} onBlur={() => setFieldTouched(name)} onChangeText={text => setFieldValue(name, text)} value={values[name]} {...otherProps} ></AppTextInput>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
