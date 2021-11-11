import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export default function AppFormPicker({ name, numOfColumns, items, PickerItemComponent, placeholder, width }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker numOfColumns={numOfColumns} PickerItemComponent={PickerItemComponent} width={width} items={items} onSelectItem={(item) => setFieldValue(name, item)} placeholder={placeholder} selectedItem={values[name]}></AppPicker>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
