import client from "./client";

const endPoint = '/users'

const registerUser = (userInfo) => {
    return client.post(endPoint, userInfo)
}

export default {
    registerUser
}