import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as Yup from 'yup'

import CategoryPickerItem from '../components/CategoryPickerItem'
import { AppForm, AppFormField, SubmitButton, AppFormPicker, FormImagePicker } from '../components/forms'
import useLocation from '../hooks/useLocation'
import Screen from '../components/Screen'
import UploadScreen from './UploadScreen'
import listingsApi from '../api/listings'

export default function ListingEditScreen() {

    const location = useLocation()
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingsApi.addListing({ ...listing, location }, progress => setProgress(progress))

        if (!result.ok) {
            setUploadVisible(false)
            alert('Could not save the listing')
        } else {
            setUploadVisible(false)
            resetForm();
        }
    }

    const imageUris = [
        {
            name: 'image',
            uri: null,
            type: 'image/jpeg'
        },
    ]

    const categories = [
        {
            label: 'Category A',
            value: 1,
            backgroundColor: 'red',
            icon: 'apps',
        },
        {
            label: 'Category B',
            value: 2,
            backgroundColor: 'green',
            icon: 'email',

        },
        {
            label: 'Category C',
            value: 3,
            backgroundColor: 'blue',
            icon: 'lock',
        },
    ]

    const validationScheme = Yup.object().shape({
        title: Yup.string().required().min(1).label('Title'),
        price: Yup.number().required().min(1).max(10000).label('Price'),
        description: Yup.string().label('Description'),
        category: Yup.array().min(1, "Please select a category").nullable(),
        imageUris: Yup.array().required().min(2, "Please select a least one image."),
    })

    return (
        <Screen>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible}></UploadScreen>
            <AppForm
                initialValues={{ title: "", price: "", description: "", category: [], imageUris }}
                validationSchema={validationScheme}
                onSubmit={handleSubmit}>
                <FormImagePicker name={'imageUris'} />
                <AppFormField maxLength={255} name={'title'} placeholder={'Title'} autoCapitalize={'words'} autoCorrect={false} keyboardType={'default'} textContentType={'none'} ></AppFormField>
                <AppFormField width={120} maxLength={8} name={'price'} placeholder={'Price'} autoCapitalize={'none'} autoCorrect={false} keyboardType={'numeric'} textContentType={'none'} ></AppFormField>
                <AppFormPicker name={'category'} numOfColumns={3} PickerItemComponent={CategoryPickerItem} width={'50%'} items={categories} placeholder={'Category'}></AppFormPicker>
                <AppFormField name={'description'} placeholder={'Description'} autoCapitalize={'sentences'} autoCorrect={false} keyboardType={'default'} textContentType={'none'} multiline maxNumberOfLines={3}></AppFormField>
                <SubmitButton title={'Post'} />
            </AppForm>

        </Screen>
    )
}
