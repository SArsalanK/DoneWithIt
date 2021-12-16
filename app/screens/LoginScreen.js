import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import styles from '../components/styles';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from '../components/forms'
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode'
import AuthContext from '../auth/context';
import authStorage from '../auth/storage'
import useAuth from '../auth/useAuth';

const validationScheme = Yup.object().shape(
    {
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password'),
    }
)

export default function LoginScreen() {

    const { login } = useAuth()
    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        login(result.data)
    }
    return (

        <Screen>
            <Image style={styles.logo} source={require('../assets/icon.png')}></Image>
            <AppForm
                validationSchema={validationScheme}
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}>
                <ErrorMessage error={"Invalid email and/or password."} visible={loginFailed}></ErrorMessage>
                <AppFormField name={'email'} icon={'email'} placeholder={'Email'} autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} textContentType={'emailAddress'} ></AppFormField>
                <AppFormField name={'password'} icon={'lock'} placeholder={'Password'} autoCapitalize={'none'} autoCorrect={false} secureTextEntry textContentType={'password'} ></AppFormField>
                <SubmitButton title={'Login'}></SubmitButton>
            </AppForm>
        </Screen>

    )
}
