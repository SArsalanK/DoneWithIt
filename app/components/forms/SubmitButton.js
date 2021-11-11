import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'


export default function SubmitButton({title}) {

    const {handleSubmit} = useFormikContext();

    return (
        <View>
            <AppButton title={title} onPress={handleSubmit}></AppButton>
        </View>
    )
}
