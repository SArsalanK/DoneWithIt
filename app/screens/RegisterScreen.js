import React, { useState } from 'react'
import { View, Text, ActivityIndicator, ImageBackground, Platform, StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import AppTextInput from '../components/AppTextInput'
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'
import registerApi from '../api/register'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import useApi from '../hooks/useApi'
import AppActivityIndicator from '../components/AppActivityIndicator'
import styles from '../components/styles'


export default function RegisterScreen() {

    const [registerationFailed, setRegisterationFailed] = useState(false)
    const [error, setError] = useState()
    const { login } = useAuth()

    const registerApiConst = useApi(registerApi.registerUser)
    const loginApiConst = useApi(authApi.login)

    const handleSubmit = async (userInfo) => {
        const result = await registerApiConst.request(userInfo)

        if (!result.ok) {
            setRegisterationFailed(true)
            setError(result.data.error)
            return
        }

        setRegisterationFailed(false)

        const { data: authToken } = await loginApiConst.request(userInfo.email, userInfo.password)
        login(authToken)
    }

    const validationScheme = Yup.object().shape({
        name: Yup.string().required().label('Name'),
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(5).label('Password')
    })

    return (

        <ImageBackground blurRadius={10} style={styles.loginAndRegisterContainer} source={require('../assets/background.jpg')}>
            <AppActivityIndicator visible={registerApiConst.loading || loginApiConst.loading}></AppActivityIndicator>
            <Image style={styles.logo} source={require('../assets/icon.png')}></Image>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationScheme}
                onSubmit={handleSubmit}>
                {error && <ErrorMessage error={error} visible={registerationFailed}></ErrorMessage>}
                <AppFormField name={'name'} icon={'account'} placeholder={'Name'} autoCapitalize={'words'} autoCorrect={false} keyboardType={'default'} textContentType={'name'} ></AppFormField>
                <AppFormField name={'email'} icon={'email'} placeholder={'Email'} autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} textContentType={'emailAddress'} ></AppFormField>
                <AppFormField name={'password'} icon={'lock'} placeholder={'Password'} autoCapitalize={'none'} autoCorrect={false} keyboardType={'default'} textContentType={'password'} secureTextEntry={true}></AppFormField>
                <SubmitButton title={'Register'}></SubmitButton>
            </AppForm>
        </ImageBackground>

    )
}
