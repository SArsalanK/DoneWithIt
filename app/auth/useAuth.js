import React, { useContext } from 'react'
import AuthContext from './context'
import authStorage from './storage'
import jwtDecode from 'jwt-decode'

export default function useAuth() {
    const { user, setUser } = useContext(AuthContext)

    const logout = () => {
        setUser(null)
        authStorage.removeToken()
    }

    const login = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user)
        authStorage.storeToken(authToken)
        console.log("token", authToken)
    }

    return { user, setUser, login, logout }
}
